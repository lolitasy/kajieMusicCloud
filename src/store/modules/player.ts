import * as playerEnums from '@/enum/playerEnums.ts';
import commonUtils from '@/util/CommonUtil.ts';
import {post} from '@/util/http.ts';
import remoteState from './remote';

const player = {
    state: {
        // 歌曲的基本信息☆
        singData: {
            // id: 1,
            // name: '爱如潮水',
            // singerName: '张信哲',
            // specialName: '张信哲精选',
            // coverImg: '',
            // coverImg: '@/assets/image/defaultBackgroundImg.jpg',
            // songSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3',
            // lrcSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.lrc',
            // hasMv: true,
            // isSq: true,
            // // 用来表示歌曲的 喜欢状态
            // userLove:false,
        },
        // 歌曲的播放状态
        playingState: false,
        // 当前的播放模式
        nowMode: 0,
        // 三种播放模式 单曲循环 列表循环 随机播放
        playingMode:playerEnums.playingMode,
        // 播放器的监听器
        playerWatcher: null,
        // 歌曲的播放状态
        playStatus: {
            nowTimeNum: 0,
            sumTimeNum: 0,
            ended: false,
            lrcArriveIndex: 0,// 歌词所在下标
        },
        playerEntity: null,
        // 歌词内容
        lrcContent: [
            // {
            // timeStr:'' 时间的格式化,
            // timeNum:0 时间戳,
            // lrcLine:''一行歌词的内容
            // }
        ],
        // 歌曲的播放列表
        songList: [],
        songListIndex: null,
        // 歌曲的历史播放记录
        historyList:[],
        historyListIndex:0,
    },
    getters: {
        getSingData(state: any): any {
            return state.singData;
        },
        getPlayingState(state: any): any {
            return state.playingState;
        },
        getNowMode(state: any): any {
            return state.nowMode;
        },
        getPlayingMode(state: any): any {
            return state.playingMode;
        },
        getPlayerWatcher(state: any): any {
            return state.playerWatcher;
        },
        getPlayStatus(state: any): any {
            return state.playStatus;
        },
        getPlayingModeObj(state: any): string {
            return state.playingMode[state.nowMode] !== null ? state.playingMode[state.nowMode] : {};
        },
        getPlayingModeIcon(state: any): string {
            return state.playingMode[state.nowMode] !== null ? state.playingMode[state.nowMode].icon : '';
        },
        getNowPlayTime: (state) => ({needFormat = false}) => {
            if (needFormat === true) {
                return commonUtils.formatSecond(state.playStatus.nowTimeNum);
            } else {
                return state.playStatus.nowTimeNum;
            }
        },
        getSumTimeNum: (state) => ({needFormat = false}) => {
            if (needFormat === true) {
                return commonUtils.formatSecond(state.playStatus.sumTimeNum);
            } else {
                return state.playStatus.sumTimeNum;
            }
        },
        getPlayerEntity(state: any): HTMLMediaElement {
            return state.playerEntity;
        },
        getSongList(state: any) {
            return state.songList;
        },

        getHistoryList(state: any) {
            return state.historyList;
        },

        getSongStep: (state) => (activeType) =>{
            const request = (songId?) => {
                // 暂停播放器
                player.mutations.touchPassButtonEvent(state,{playState:false,isNew:false});
                setTimeout(() => {
                    post(remoteState.state.getSingInfo,{
                        id:songId?songId:state.historyList[state.historyList.length+state.historyListIndex-1]
                    }).then((result: any)=>{
                        // console.log(result.singInfo);
                        player.mutations.setSingData(state,result.singInfo);
                        // 播放歌曲
                        setTimeout(()=>{
                            player.mutations.touchPassButtonEvent(state,{playState:true,isNew:!!songId});
                        },600);
                    });
                },600);
            };
            if(activeType === playerEnums.activeSongType.next){
                changPlayNextSong(state,true);
            }else if(activeType === playerEnums.activeSongType.previous){
                // 播放上一曲的时候逻辑简单 判断不越界
                if(state.historyList.length>(state.historyListIndex*-1)+1){
                    // 不越界可执行出上一首操作
                    state.historyListIndex = state.historyListIndex-1;
                    request();
                }

            }
        }
    },
    mutations: {
        // 播放器控件加载好后调用次函数将 控件对象存储到内存中并添加相应的监听
        setPlayerEntity(state: any, playerEntity: HTMLMediaElement): void {
            state.playerEntity = playerEntity;
            // playerEntity.addEventListener('canplay', (event)=>{
            //     // console.log("canplay")
            //     state.playStatus.sumTimeNum = playerEntity.duration;
            // });
            playerEntity.addEventListener('canplaythrough', () => {
                state.playStatus.sumTimeNum = playerEntity.duration;
            });
        },
        // 给当前播放歌曲的详细信息赋值
        setSingData(state: any, singData: any): void {
            state.singData = singData;
            state.playerEntity.src = singData.songSrc;
            // 从歌词数据中 加载歌词内容
            ajaxGetHTML(state.singData.lrcSrc).then((result) => {
                state.lrcContent = result;
            }).catch(() => {
                // console.error(error);
                state.lrcContent = [{timeStr: '00:00', timeNum: 0, lrcLine: '歌词资源加载失败'}];
            });
        },
        // 控制 喜欢的点击操作
        changeLoveStatus(state: any): void {
            state.singData.userLove = !state.singData.userLove;
        },
        /**
         * 播放暂停按钮的处理逻辑 获取audio控件 判断其状态执行 播放或暂停操作
         * @param state 内置对象
         * @param option
         *           |- playState 设置下步操作的播放器状态 true:播放 false:暂停 不设置根据 播放器自身状态切换
         *           |- isNew = null 标识此次播放歌曲是否是首次播放 （首次播放需要处理历史歌单逻辑）
         */
        touchPassButtonEvent(state: any, option={playState:null,isNew:null}): void {
            if (state.playerEntity.readyState === playerEnums.readyStateEnum.HAVE_ENOUGH_DATA) {
                if ((option && option.playState && !!option.playState) || !!state.playerEntity.paused) {
                    // 播放时 判断如果是 新载入的歌曲 向历史播放列表中加入 当前歌曲id
                    if(!!option.isNew){
                        setHistoryList(state);
                    }
                    state.playerEntity.play().then(() => watchPlayingState(true, state.playerEntity, state));
                } else if((option && option.playState && !option.playState) || !state.playerEntity.paused){
                    state.playerEntity.pause();
                    watchPlayingState(false, state.playerEntity, state);
                }
            }

        },
        // 改变歌曲的播放模式
        changePlayMode(state: any): void {
            if (++state.nowMode >= state.playingMode.length) {
                state.nowMode = 0;
            }
        },
        /**
         * 设置当前播放时间
         * @param state 固有参数
         * @param rate 播放的百分比
         */
        setCurrentTime(state: any, rate: number): void {
            const currentTime = state.playStatus.sumTimeNum * rate;
            state.playStatus.nowTimeNum = _.round(currentTime, 2);
        },
        /**
         * 改变播放空间的播放时间 立刻刷新进度条控件
         * @param state 固有参数
         * @param nowTimeNum 当前播放时间
         */
        changePlayTime(state: any, nowTimeNum?: number): void {
            if (nowTimeNum) {
                state.playStatus.nowTimeNum = nowTimeNum;
            }
            state.playerEntity.currentTime = state.playStatus.nowTimeNum;
            // watchPlayingState(false,state.playerEntity,state);
            changeProgress(state);
        },
        setSongList(state: any, songList: any[]) {
            state.songList = songList;
        },
        addSongList4Index(state: any, {songObj}) {
            // 如果 传来的下标不越界 并且 播放列表中不存在重复 就想播放列表中添加歌曲
            let repeatIndex: number = null;
            const hasSong: boolean = state.songList.some((value, index) => {
                if (value.id === songObj.id) repeatIndex = index;
                return value.id === songObj.id;
            });
            if(!hasSong){
                state.songList.push(songObj);
            }
        },
    },
};

function changPlayNextSong(state: any,isUserTrigger: boolean){
    const request = (songId?) => {
        // 暂停播放器
        player.mutations.touchPassButtonEvent(state,{playState:false,isNew:false});
        setTimeout(() => {
            post(remoteState.state.getSingInfo,{
                id:songId?songId:state.historyList[state.historyList.length+state.historyListIndex-1]
            }).then((result: any)=>{
                // console.log(result.singInfo);
                player.mutations.setSingData(state,result.singInfo);
                // 播放歌曲
                setTimeout(()=>{
                    player.mutations.touchPassButtonEvent(state,{playState:true,isNew:!!songId});
                },600);
            });
        },600);
    };
    // 如果小于0说明在历史记录里播放 可以调整下标播放 历史记录里的歌曲
    if(state.historyListIndex<0){
        state.historyListIndex = state.historyListIndex+1;
        request();
    }else {

        let nowPlayIndex = 0;
        // 根据id找到 当前播放歌曲在歌单中的下标
        const hasSong = state.songList.some((value, index) => {
            if (value.id === state.singData.id) nowPlayIndex = index;
            return value.id === state.singData.id;
        });
        if(hasSong){
            if(playerEnums.playingMode[2].modeName === playerEnums.playingMode[state.nowMode].modeName){
                // 随机播放逻辑
                request(state.songList[_.random(0,state.songList.length-1)].id);
            }else {
                if(isUserTrigger||playerEnums.playingMode[1].modeName === playerEnums.playingMode[state.nowMode].modeName){
                    // 循环播放逻辑
                    if(++nowPlayIndex>=state.songList.length){
                        nowPlayIndex = 0;
                    }
                }
                // 单曲循环播放
                request(state.songList[nowPlayIndex].id);
            }
        }else {
            // 没有找到歌曲的异常处理，一般不会出现此情况
            // todo 没有找到歌曲的异常处理，一般不会出现此情况
            console.log('没有找到歌曲的异常处理，一般不会出现此情况');
        }
    }
}

// 向历史记录中添加一个历史播放信息 并将历史歌单播放的下标归零（标识当前正在播放最新的歌曲）
function setHistoryList(state: any) {
    // 历史歌单的添加类似 操作栈 index后面的歌曲一律覆盖或丢弃
    const realIndex = state.historyList.length+state.historyListIndex;
    state.historyList.splice(realIndex,state.historyList.length-realIndex+1,state.singData.id)
    state.historyListIndex = 0;
}


/**
 *
 * @param newValue 监听器的开启状态
 * @param playerEntity audio标签的实体
 * @param state store.palyer.state
 */
function watchPlayingState(newValue: boolean, playerEntity: any, state: any): void {
    state.playingState = newValue;
    // 如果状态变为 true 启动一个 循环器 轮询播放状态
    if (newValue === true) {
        // console.log('',state.lrcContent);
        state.playerWatcher = window.setInterval(() => {
            // console.log('播放时长',playerEntity.currentTime);
            // 当前播放时长
            state.playStatus.nowTimeNum = playerEntity.currentTime;
            // 歌曲的总时长
            state.playStatus.sumTimeNum = playerEntity.duration;
            // 当前歌曲是否结束
            state.playStatus.ended = playerEntity.ended;
            if (!!state.playStatus.ended) {
                // 检测到播放结束 先关闭播放器
                watchPlayingState(false, state.playerEntity, state);
                changPlayNextSong(state,false);
            }
            // 根据播放时间，移动进度条
            changeProgress(state);
            // 根据播放时间 设置当前歌词列表的详细信息
            changeLrcArriveIndex(state, playerEntity);
        }, 1000);
    } else {
        window.clearInterval(state.playerWatcher);
    }
}

function changeProgress(state: any): void {
    // 根据播放时间，移动进度条
    const rate = parseFloat((state.playStatus.nowTimeNum / state.playStatus.sumTimeNum).toFixed(3));
    const el = <HTMLElement>document.querySelector('.process-point');
    const limitLine = <HTMLElement>document.querySelector('.process-line-out');
    const completeLine = <HTMLElement>document.querySelector('.complete-line');
    if (limitLine && el) {
        const l = rate * (limitLine.offsetWidth - el.offsetWidth);
        completeLine.style.right = `calc( 100% - ${l}px)`;
        el.style.left = `${l}px`;
    }
}

// 根据播放时间 设置当前歌词列表的详细信息
function changeLrcArriveIndex(state: any, playerEntity: any): void {
    state.playStatus.lrcArriveIndex = 0;
    state.lrcContent.map(({timeStr, timeNum, lrcLine}, index, array) => {
        if (index < array.length - 1) {
            if (playerEntity.currentTime >= timeNum && playerEntity.currentTime < array[index + 1].timeNum) {
                state.playStatus.lrcArriveIndex = index;
            }
        } else {
            if (playerEntity.currentTime >= timeNum) {
                state.playStatus.lrcArriveIndex = index;
            }
        }
    });
}

/**
 * 输出歌词信息   webURL 是 歌词存放的路径 或者歌词下载的路径
 * @param webURL 歌词的网络地址
 */
function ajaxGetHTML(webURL): Promise<object[]> {
    return new Promise((resolve: any, reject: any) => {
        const url = webURL;
        let xmlhttp;
        try {
            xmlhttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (e) {
            }
        }
        if (!xmlhttp) xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4) {
                const s = xmlhttp.responseText;
                if (s) {
                    const lrcReg = /\[(([0-9]+):([0-9]+).([0-9]+))](.[^\[\]]*)/g;
                    let result = lrcReg.exec(s);
                    const lrcFormat = [];
                    while (result) {
                        const lineFormat = {timeStr: '', timeNum: 0, lrcLine: ''};
                        lineFormat.timeStr = result[1];
                        lineFormat.lrcLine = result[5];
                        lineFormat.timeNum = parseFloat(parseInt(result[2], 10) * 60 + parseInt(result[3], 10) + '.' + result[4]);
                        lrcFormat.push(lineFormat);
                        result = lrcReg.exec(s);
                    }
                    resolve(lrcFormat);
                } else {
                    reject('歌词资源加载失败');
                }
            }
        };
        xmlhttp.open('GET', url, true);
        xmlhttp.send(null);
    });
}

export default player;
