import Mock from 'mockjs';
export const singInfo = {
    id: '1',
    name: '夜访吸血鬼（Cover 五月天）',
    singerName: '1022女声',
    specialName: '1022女声',
    coverImg: 'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.png',
    songSrc:'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.mp3',
    lrcSrc:'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.lrc',
    hasMv: true,
    isSq: true,
    // 用来表示歌曲的 喜欢状态
    userLove:false,
};

export const recommendSongList = [
    {id:'1',coverImg: 'http://qiniu.kajie88.com/recommendSong1.1.jpg', title: '你穿秋裤了么？',playCount:420},
    {id:'2',coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:220},
    {id:'3',coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:100},
    {id:'4',coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:120},
    {id:'5',coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:183},
    {id:'6',coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:121},
];
export const newSongList = [
    {id:'1',coverImg: 'http://qiniu.kajie88.com/recommendSong1.jpg', title: '你穿秋裤了么？',playCount:420},
    {id:'2',coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:220},
    {id:'3',coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:100},
    {id:'4',coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:120},
    {id:'5',coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:183},
    {id:'6',coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:121},
];

export const songListDetail = [
    {id: '1',
        coverImg: 'http://qiniu.kajie88.com/recommendSong1.1.jpg',
        coverImgBase64:'',
        title: '你穿秋裤了么',
        playCount: 420,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id: '1',name: '夜访吸血鬼（Cover 五月天）',singerName: '1022女声',specialName: '夜访吸血鬼（Cover 五月天）',hasMv: true,isSq: true,},
            {id: '2',name: '不谓侠（Cover 萧忆情Alex）',singerName: 'CRITTY',specialName: '不谓侠（Cover 萧忆情Alex）',hasMv: true,isSq: true},
            {id: '3',name: '蜜蜂（Cover 万玲琳）',singerName: 'Darren',specialName: '蜜蜂（Cover 万玲琳）',hasMv: true,isSq: true},
            {id: '4',name: '南',singerName: 'Jam',specialName: '南',hasMv: true,isSq: true},
            {id: '5',name: '君ノ記憶',singerName: 'mao',specialName: '君ノ記憶',hasMv: true,isSq: true},// 用来表示歌曲的 喜欢状态
            {id: '6',name: '第二人生（Cover 五月天）',singerName: '-MIX二浅-',specialName: '第二人生（Cover 五月天）',hasMv: true,isSq: true},
            {id: '7',name: '第三人称（Cover： Hush!）',singerName: 'Todd Li',specialName: '第三人称（Cover： Hush!）',hasMv: true,isSq: true},
            {id: '8',name: '八号风球(第26届金曲奖26首串烧)',singerName: '陈奕迅',specialName: '八号风球(第26届金曲奖26首串烧)',hasMv: true,isSq: true},
            {id: '9',name: '当你（Cover 林俊杰）',singerName: '程大龙',specialName: '当你（Cover 林俊杰）',hasMv: true,isSq: true},
            {id: '10',name: '三万英尺',singerName: '迪克牛仔',specialName: '三万英尺',hasMv: true,isSq: true},
        ]
    },
    {id: '2',
        coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg',
        coverImgBase64:'',
        title: '治愈男声//回眸之时，只望遇见你',
        playCount: 220,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},
        ]
    },
    {id: '3',
        coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg',
        coverImgBase64:'',
        title: '韩剧OST | 收集歌声中的浪漫碎片',
        playCount: 220,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},
        ]
    },
    {id: '4',
        coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg',
        coverImgBase64:'',
        title: '翻唱简史：欧美六百首',
        playCount: 220,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},

        ]
    },
    {id: '5',
        coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
        coverImgBase64:'',
        title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',
        playCount: 220,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},
        ]
    },
    {id: '6',
        coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg',
        coverImgBase64:'',
        title: '多热烈的白羊，热烈的抽象。',
        playCount: 220,
        ownerName: '卡杰',
        ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
        collectCount: 36,
        singListArray: [
            {id:'1',name: '爱如潮水', singerName: '张信哲', specialName: '张信哲精选', hasMv: true, isSq: true},
        ]
    },
];
export const singInfoDetail = [
    {
        id: '1',
        name: '夜访吸血鬼（Cover 五月天）',
        singerName: '1022女声',// 歌手名
        specialName: '夜访吸血鬼（Cover 五月天）',// 专辑名
        coverImg: 'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.png',
        songSrc:'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/1022女声 - 夜访吸血鬼（Cover 五月天）.lrc',
        hasMv: true,
        isSq: true,
        // 用来表示歌曲的 喜欢状态
        userLove:false,
    },
    {id: '2',
        name: '不谓侠（Cover 萧忆情Alex）',singerName: 'CRITTY',specialName: '不谓侠（Cover 萧忆情Alex）',
        coverImg: 'http://qiniu.kajie88.com/CRITTY - 不谓侠（Cover 萧忆情Alex）.png',
        songSrc:'http://qiniu.kajie88.com/CRITTY - 不谓侠（Cover 萧忆情Alex）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/CRITTY - 不谓侠（Cover 萧忆情Alex）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '3',
        name: '蜜蜂（Cover 万玲琳）',singerName: 'Darren',specialName: '蜜蜂（Cover 万玲琳）',
        coverImg: 'http://qiniu.kajie88.com/Darren - 蜜蜂（Cover 万玲琳）.png',
        songSrc:'http://qiniu.kajie88.com/Darren - 蜜蜂（Cover 万玲琳）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/Darren - 蜜蜂（Cover 万玲琳）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '4',
        name: '南',singerName: 'Jam',specialName: '南',
        coverImg: 'http://qiniu.kajie88.com/Jam - 南.png',
        songSrc:'http://qiniu.kajie88.com/Jam - 南.mp3',
        lrcSrc:'http://qiniu.kajie88.com/Jam - 南.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '5',
        name: '君ノ記憶',singerName: 'mao',specialName: '君ノ記憶',
        coverImg: 'http://qiniu.kajie88.com/mao - 君ノ記憶.png',
        songSrc:'http://qiniu.kajie88.com/mao - 君ノ記憶.mp3',
        lrcSrc:'http://qiniu.kajie88.com/mao - 君ノ記憶.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '6',
        name: '第二人生（Cover 五月天）',singerName: '-MIX二浅-',specialName: '第二人生（Cover 五月天）',
        coverImg: 'http://qiniu.kajie88.com/-MIX二浅- - 第二人生（Cover 五月天）.png',
        songSrc:'http://qiniu.kajie88.com/-MIX二浅- - 第二人生（Cover 五月天）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/-MIX二浅- - 第二人生（Cover 五月天）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '7',
        name: '第三人称（Cover： Hush!）',singerName: 'Todd Li',specialName: '第三人称（Cover： Hush!）',
        coverImg: 'http://qiniu.kajie88.com/Todd Li - 第三人称（Cover： Hush!）.png',
        songSrc:'http://qiniu.kajie88.com/Todd Li - 第三人称（Cover： Hush!）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/Todd Li - 第三人称（Cover： Hush!）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '8',
        name: '八号风球(第26届金曲奖26首串烧)',singerName: '陈奕迅',specialName: '八号风球(第26届金曲奖26首串烧)',
        coverImg: 'http://qiniu.kajie88.com/陈奕迅 - 八号风球(第26届金曲奖26首串烧).png',
        songSrc:'http://qiniu.kajie88.com/陈奕迅 - 八号风球(第26届金曲奖26首串烧).mp3',
        lrcSrc:'http://qiniu.kajie88.com/陈奕迅 - 八号风球(第26届金曲奖26首串烧).lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '9',
        name: '当你（Cover 林俊杰）',singerName: '程大龙',specialName: '当你（Cover 林俊杰）',
        coverImg: 'http://qiniu.kajie88.com/程大龙 - 当你（Cover 林俊杰）.png',
        songSrc:'http://qiniu.kajie88.com/程大龙 - 当你（Cover 林俊杰）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/程大龙 - 当你（Cover 林俊杰）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '10',
        name: '三万英尺',singerName: '迪克牛仔',specialName: '三万英尺',
        coverImg: 'http://qiniu.kajie88.com/迪克牛仔 - 三万英尺.png',
        songSrc:'http://qiniu.kajie88.com/迪克牛仔 - 三万英尺.mp3',
        lrcSrc:'http://qiniu.kajie88.com/迪克牛仔 - 三万英尺.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '11',
        name: '给妈妈',singerName: '房东的猫',specialName: '给妈妈',
        coverImg: 'http://qiniu.kajie88.com/房东的猫 - 给妈妈.png',
        songSrc:'http://qiniu.kajie88.com/房东的猫 - 给妈妈.mp3',
        lrcSrc:'http://qiniu.kajie88.com/房东的猫 - 给妈妈.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '12',
        name: '东京不太热',singerName: '封茗囧菌',specialName: '东京不太热',
        coverImg: 'http://qiniu.kajie88.com/封茗囧菌 - 东京不太热.png',
        songSrc:'http://qiniu.kajie88.com/封茗囧菌 - 东京不太热.mp3',
        lrcSrc:'http://qiniu.kajie88.com/封茗囧菌 - 东京不太热.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '13',
        name: '老男孩 - live',singerName: '筷子兄弟',specialName: '老男孩 - live',
        coverImg: 'http://qiniu.kajie88.com/筷子兄弟 - 老男孩 - live.png',
        songSrc:'http://qiniu.kajie88.com/筷子兄弟 - 老男孩 - live.mp3',
        lrcSrc:'http://qiniu.kajie88.com/筷子兄弟 - 老男孩 - live.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '14',
        name: '掰掰掰 （Cover Rita黄汐源）',singerName: '蓝褶',specialName: '掰掰掰 （Cover Rita黄汐源）',
        coverImg: 'http://qiniu.kajie88.com/蓝褶 - 掰掰掰 （Cover Rita黄汐源）.png',
        songSrc:'http://qiniu.kajie88.com/蓝褶 - 掰掰掰 （Cover Rita黄汐源）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/蓝褶 - 掰掰掰 （Cover Rita黄汐源）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '15',
        name: '原来你也在这里',singerName: '浪客秦昊',specialName: '原来你也在这里',
        coverImg: 'http://qiniu.kajie88.com/浪客秦昊 - 原来你也在这里.png',
        songSrc:'http://qiniu.kajie88.com/浪客秦昊 - 原来你也在这里.mp3',
        lrcSrc:'http://qiniu.kajie88.com/浪客秦昊 - 原来你也在这里.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '16',
        name: '和你一样',singerName: '李宇春',specialName: '和你一样',
        coverImg: 'http://qiniu.kajie88.com/李宇春 - 和你一样.png',
        songSrc:'http://qiniu.kajie88.com/李宇春 - 和你一样.mp3',
        lrcSrc:'http://qiniu.kajie88.com/李宇春 - 和你一样.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '17',
        name: '最后一页',singerName: '洛尘鞅_vvv',specialName: '最后一页',
        coverImg: 'http://qiniu.kajie88.com/洛尘鞅_vvv - 最后一页.png',
        songSrc:'http://qiniu.kajie88.com/洛尘鞅_vvv - 最后一页.mp3',
        lrcSrc:'http://qiniu.kajie88.com/洛尘鞅_vvv - 最后一页.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '18',
        name: '友谊之光',singerName: '玛莉亚',specialName: '友谊之光',
        coverImg: 'http://qiniu.kajie88.com/玛莉亚 - 友谊之光.png',
        songSrc:'http://qiniu.kajie88.com/玛莉亚 - 友谊之光.mp3',
        lrcSrc:'http://qiniu.kajie88.com/玛莉亚 - 友谊之光.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '19',
        name: '猫的眼睛Cat Eye',singerName: 'Tired',specialName: '猫的眼睛Cat Eye',
        coverImg: 'http://qiniu.kajie88.com/猫的眼睛Cat Eye - Tired.png',
        songSrc:'http://qiniu.kajie88.com/猫的眼睛Cat Eye - Tired.mp3',
        lrcSrc:'http://qiniu.kajie88.com/猫的眼睛Cat Eye - Tired.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '20',
        name: '牧马城市',singerName: '米唐悠悠',specialName: '牧马城市',
        coverImg: 'http://qiniu.kajie88.com/米唐悠悠 - 牧马城市.png',
        songSrc:'http://qiniu.kajie88.com/米唐悠悠 - 牧马城市.mp3',
        lrcSrc:'http://qiniu.kajie88.com/米唐悠悠 - 牧马城市.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '21',
        name: '明天会更好',singerName: '群星',specialName: '明天会更好',
        coverImg: 'http://qiniu.kajie88.com/群星 - 明天会更好.png',
        songSrc:'http://qiniu.kajie88.com/群星 - 明天会更好.mp3',
        lrcSrc:'http://qiniu.kajie88.com/群星 - 明天会更好.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '22',
        name: '一万次悲伤',singerName: '逃跑计划',specialName: '一万次悲伤',
        coverImg: 'http://qiniu.kajie88.com/逃跑计划 - 一万次悲伤.png',
        songSrc:'http://qiniu.kajie88.com/逃跑计划 - 一万次悲伤.mp3',
        lrcSrc:'http://qiniu.kajie88.com/逃跑计划 - 一万次悲伤.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '23',
        name: '爱的故事上集',singerName: '童丽,王闻',specialName: '爱的故事上集',
        coverImg: 'http://qiniu.kajie88.com/童丽,王闻 - 爱的故事上集.png',
        songSrc:'http://qiniu.kajie88.com/童丽,王闻 - 爱的故事上集.mp3',
        lrcSrc:'http://qiniu.kajie88.com/童丽,王闻 - 爱的故事上集.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '24',
        name: '如果当时',singerName: '许嵩',specialName: '如果当时',
        coverImg: 'http://qiniu.kajie88.com/许嵩 - 如果当时.png',
        songSrc:'http://qiniu.kajie88.com/许嵩 - 如果当时.mp3',
        lrcSrc:'http://qiniu.kajie88.com/许嵩 - 如果当时.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '25',
        name: '虎口脱险（Cover 老狼）',singerName: '许一鸣',specialName: '虎口脱险（Cover 老狼）',
        coverImg: 'http://qiniu.kajie88.com/许一鸣 - 虎口脱险（Cover 老狼）.png',
        songSrc:'http://qiniu.kajie88.com/许一鸣 - 虎口脱险（Cover 老狼）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/许一鸣 - 虎口脱险（Cover 老狼）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '26',
        name: '空白格（Cover 蔡健雅）',singerName: '许一鸣',specialName: '空白格（Cover 蔡健雅）',
        coverImg: 'http://qiniu.kajie88.com/许一鸣 - 空白格（Cover 蔡健雅）.png',
        songSrc:'http://qiniu.kajie88.com/许一鸣 - 空白格（Cover 蔡健雅）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/许一鸣 - 空白格（Cover 蔡健雅）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '27',
        name: '待字闺中',singerName: '玄觞',specialName: '待字闺中',
        coverImg: 'http://qiniu.kajie88.com/玄觞 - 待字闺中.png',
        songSrc:'http://qiniu.kajie88.com/玄觞 - 待字闺中.mp3',
        lrcSrc:'http://qiniu.kajie88.com/玄觞 - 待字闺中.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '28',
        name: '天使（Cover 五月天）',singerName: '杨博然',specialName: '天使（Cover 五月天）',
        coverImg: 'http://qiniu.kajie88.com/杨博然 - 天使（Cover 五月天）.png',
        songSrc:'http://qiniu.kajie88.com/杨博然 - 天使（Cover 五月天）.mp3',
        lrcSrc:'http://qiniu.kajie88.com/杨博然 - 天使（Cover 五月天）.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '29',
        name: '在九月结束的时候与你告别',singerName: '张罐子',specialName: '在九月结束的时候与你告别',
        coverImg: 'http://qiniu.kajie88.com/张罐子 - 在九月结束的时候与你告别.png',
        songSrc:'http://qiniu.kajie88.com/张罐子 - 在九月结束的时候与你告别.mp3',
        lrcSrc:'http://qiniu.kajie88.com/张罐子 - 在九月结束的时候与你告别.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
    {id: '30',
        name: '笑看风云',singerName: '郑少秋',specialName: '笑看风云',
        coverImg: 'http://qiniu.kajie88.com/郑少秋 - 笑看风云.png',
        songSrc:'http://qiniu.kajie88.com/郑少秋 - 笑看风云.mp3',
        lrcSrc:'http://qiniu.kajie88.com/郑少秋 - 笑看风云.lrc',
        hasMv: true,isSq: true,userLove:false},// 用来表示歌曲的 喜欢状态
];
