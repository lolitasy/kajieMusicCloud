<!--发现页面-->
<template>
    <div class="home-main-view ">
        <div class="swiper-header-tab-out">
            <!--发现页面的 tab 标签动画实现-->
            <div class="swiper-header-tab wd80 marginAuto">
                <div v-for="(item,index) in siderList" :key="index" @click="changeSider(index,$event)" class="swiper-header-tab-item textcenter">
                    {{item.name}}
                    <template v-if="index===0">
                        <div class="select-div">
                            <div class="select-div-inner"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <!--发现页面两个标签的内弄显示 个性推荐(home-find-recommend)/主播电台(home-find-station)-->
                <div class="swiper-slide">
                    <div class="swiper-slide-content">
                        <!--个性推荐-->
                        <home-find-recommend></home-find-recommend>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide-content">
                        <!--主播电台-->
                        <home-find-station></home-find-station>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    import Swiper from 'swiper';
    import HomeFindRecommend from './HomeFindRecommend.vue';
    import HomeFindStation from './HomeFindStation.vue';


    @Component({
        components: {
            HomeFindRecommend,
            HomeFindStation,
        }
    })
    export default class HomeFind extends Vue{
        name:string = 'HomeFind';
        activeIndex:number = 0;
        siderList:Array<object> = [
                {name:'个性推荐'},
                {name:'主播电台'}
                ];
        swiperMain:any = null;
        mounted() {
            this.loadSwiper();
        }
        changeSider(index:number){
            this.swiperMain.slideTo(index, 500, false);
        }
        loadSwiper(){
            let _vm:any = this;
            _vm.swiperMain = new Swiper('.swiper-main', {
                resistanceRatio : 0,//滑动到尽头时禁止在滑动
                iOSEdgeSwipeDetection : true,
                watchSlidesProgress : true,
                on: {
                    slideChange: function () {
                        _vm.activeIndex = this.activeIndex;
                    },
                    progress: function(progress:number){
                        _vm.$nextTick(()=>{
                            (<HTMLElement>document.querySelector('.select-div-inner')!).style.width=25*(1+Math.abs(this.slides[_vm.activeIndex].progress)*2)+'%';
                            (<HTMLElement>document.querySelector('.select-div')!).style.transform = 'translateX('+document.querySelector('.swiper-header-tab-item')!.clientWidth*(this.slides.length-1)*progress+'px)';
                        });
                    },
                    touchStart: function() {
                        (<HTMLElement>document.querySelector('.select-div')).style.transition = '';
                        (<HTMLElement>document.querySelector('.select-div-inner')).style.transition = '';
                    },
                    setTransition: function(speed:number) {
                        (<HTMLElement>document.querySelector('.select-div')).style.transition = speed + 'ms';
                        (<HTMLElement>document.querySelector('.select-div-inner')).style.transition = speed + 'ms';
                    }
                }
            });
        }
    };
</script>

<style scoped>
    .mint-loadmore {
        /*header:130px;footer:170px;tab:110px*/
        min-height: calc(100vh - 110px - 130px - 170px);
    }
    .home-main-view{
        height: 100%;
        z-index: 1;
    }
    .swiper-main{
        height: calc(100% - 110px);
        position: relative;
        top: 105px;
    }
    .wrapper-main{
        height: 100%;
        width: 100%;
    }
    .swiper-header-tab-out{
        background-color: #D93F37;
        padding-bottom: 20px;
        padding-top: 10px;
        position: fixed;
        top: 130px;
        width: 100%;
        z-index: 2;
    }
    .swiper-header-tab{
        display: flex;
    }
    .swiper-header-tab-item{
        flex: 1 1;
        font-size: 48px;
        font-weight: 100;
        color: white;
    }
    .select-div{
        width: 100%;
    }
    .select-div-inner{
        width: 25%;
        height: 8px;
        background-color: white;
        margin: 5px auto 5px;
        border-radius: 100px;
        /*transition:all 0.2s;*/
    }
    .swiper-slide-content{
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling : touch
    }
    #radio-slide{
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: 60px;
    }
    #radio-slide i{
        font-size: 180px;
    }
    .swiper-container{
        margin-top: 0;
    }
</style>
