<template>
    <Container title="" @close="$emit('close')">
        <div class="demo">

            <swiper :options="swiperOption" class="swiper-container"  ref="mySwiper">
                <swiper-slide class="swiper-item" v-for='item in swiperList' :key='item.id'>
                    <img class='swiper-img' :src='item.imgUrl' />
                </swiper-slide>
            </swiper>

        </div>
    </Container>
</template>

<script>
    import Container from "@/public/base/Container"; //为统一样式 所有组件必须引入components并作为根元素
    import GenericWidget from '@/public/generic/GenericWidget.vue' //继承GenericWidget方便外界切换组件

    //组件挂载：焦点图
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import 'swiper/dist/css/swiper.css'

    export default {
        name: "microbiologyDemo",
        extends: GenericWidget,
        components: { Container,swiper, swiperSlide},
        data() {
            return {
                swiperOption:{
                    initialSlide: 0,//初始化首页的索引
                    slidesPerView: 1,//显示容器同时显示数量
                    direction: "vertical",//垂直方向移动
                    loop:true, //是否循环
                   /* autoplay: { //自动播放
                        delay:2000,
                        disableOnInteraction: false
                    },*/
                    //autoplay:5000, //自动播放
                    grabCursor: true,//拖动时指针会变成抓手形状
                    mousewheel: true,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                },
                /*swiperOption: {
                    initialSlide: 0, //设定初始化时slide的索引
                    slidesPerView: 1,
                    spaceBetween: 30,
                    grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    direction: "vertical",//水平方向移动
                    //autoplay:10000, //每张播放时长3秒，自动播放
                   /!* autoplay: { //自动播放
                        disableOnInteraction: false
                    },*!/
                    loop: true, //循环
                    mousewheel: true,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                    keyboard: true
                },*/
                swiperList:[ //二张轮播，使用变量循环
                    {
                        id:'1',
                        imgUrl:"../assets/img/ASF_1.jpg"
                        //imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg"
                    },
                    {
                        id:'2',
                        imgUrl:"../assets/img/bio_1.jpg"
                        //imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg"
                    },
                ]
            }
        },
        /*computed: { //定义swiper对象
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            this.swiper.slideTo(1, 0, false);
        }*/

    }
</script>

<style lang="less" scoped>
    .demo {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 4600px;
        height: 1200px;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>