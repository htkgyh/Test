<template>
  <swiper :options="swiperOption" class="swiper-container" ref="mySwiper">
    <!-- 添加植被组的图片 -->
    <swiper-slide data-swiper-autoplay="15000">
      <div id="veg1">
        <div id="veg1_pic">
          <img src="/assets/BioEcology/BioEcologyMedia/veg1_pic.png" />
        </div>
        <div id="veg1_pointcloud">
          <video-player
                  class="video-player-box"
                  ref="videoPlayer"
                  :options="vegpointcloudOptions"
                  :playsinline="true"
          ></video-player>
        </div>
        <div id="veg1_video">
          <video-player
                  class="video-player-box"
                  ref="videoPlayer"
                  :options="vegvideoOptions"
                  :playsinline="true"
          ></video-player>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide data-swiper-autoplay="15000">
      <div id="veg2">
        <div id="veg2_leftpic">
          <img src="/assets/BioEcology/BioEcologyMedia/veg2_pic.png" />
        </div>
        <div id="veg2_title">
          <h1>我国自然植被在不同地理地区分布区的空间分布及其群系组</h1>
        </div>
        <div id="veg2_mapp">
          <img src="/assets/BioEcology/BioEcologyMedia/veg2_mapp.gif" />
        </div>
      </div>
    </swiper-slide>

    <!-- 添加生物多样性组的图片 -->
    <!-- <swiper-slide v-for="item in slidesBioPic" :key="item.id" data-swiper-autoplay="5000">
      <div id="bio_slide">
        <img :src="item.src" />
      </div>
    </swiper-slide>-->
    <swiper-slide data-swiper-autoplay="7000">
      <img src="/assets/BioEcology/BioEcologyMedia/bio_1.png" />
    </swiper-slide>
    <swiper-slide data-swiper-autoplay="7000">
      <img src="/assets/BioEcology/BioEcologyMedia/bio_2.png" />
    </swiper-slide>
    <swiper-slide data-swiper-autoplay="8000">
      <img class="video_backgd" src="/assets/BioEcology/BioEcologyMedia/bio_3.png" />
      <div class="video1">
        <video-player
                class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions1"
                :playsinline="true"
        ></video-player>
      </div>
      <div class="video2">
        <video-player
                class="video-player-box"
                ref="videoPlayer"
                :options="playerOptions2"
                :playsinline="true"
        ></video-player>
      </div>
      <!-- <div class="video3">
        <video-player
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptions3"
          :playsinline="true"
        ></video-player>
      </div>-->
    </swiper-slide>
    <swiper-slide data-swiper-autoplay="8000">
      <img src="/assets/BioEcology/BioEcologyMedia/bio_4.png" />
    </swiper-slide>

    <!--添加ASF轮播图片-->
    <swiper-slide v-for="item in slidesAsfPic" :key="item.id" data-swiper-autoplay="15000">
      <img :src="item.src" />
    </swiper-slide>
  </swiper>
</template>

<script>
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    import "swiper/dist/css/swiper.css";
    import "video.js/dist/video-js.css";
    import "vue-video-player/src/custom-theme.css";
    import { videoPlayer } from "vue-video-player";
    import { setInterval, clearInterval } from "timers";

    export default {
        components: {
            swiper,
            swiperSlide,
            videoPlayer
        },
        data() {
            return {
                slidesBioPic: [
                    {
                        id: "1",
                        group: "biodiv",
                        src: "/assets/BioEcology/BioEcologyMedia/bio_1.jpg"
                    },
                    {
                        id: "2",
                        group: "biodiv",
                        src: "/assets/BioEcology/BioEcologyMedia/bio_2.jpg"
                    },
                    {
                        id: "3",
                        group: "biodiv",
                        src: "/assets/BioEcology/BioEcologyMedia/bio_3.jpg"
                    }
                ],
                slidesAsfPic: [
                    {
                        id: "1",
                        group: "asf",
                        src: "/assets/BioEcology/BioEcologyMedia/ASF_1.jpg"
                    },
                    {
                        id: "2",
                        group: "asf",
                        src: "/assets/BioEcology/BioEcologyMedia/ASF_2.jpg"
                    },
                    {
                        id: "3",
                        group: "asf",
                        src: "/assets/BioEcology/BioEcologyMedia/ASF_3.jpg"
                    },
                    {
                        id: "4",
                        group: "asf",
                        src: "/assets/BioEcology/BioEcologyMedia/ASF_4.jpg"
                    }
                ],
                playerOptions1: {
                    muted: true,
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    aspectRatio: "16:9",
                    fluid: true,
                    width: document.documentElement.clientWidth,
                    sources: [
                        {
                            src: "/assets/BioEcology/BioEcologyMedia/biovideo_1.mp4", // 路径
                            type: "video/mp4" // 类型
                        }
                    ]
                },
                playerOptions2: {
                    muted: true,
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    aspectRatio: "16:9",
                    width: document.documentElement.clientWidth,
                    sources: [
                        {
                            src: "/assets/BioEcology/BioEcologyMedia/biovideo_2.mp4", // 路径
                            type: "video/mp4" // 类型
                        }
                    ]
                },
                playerOptions3: {
                    muted: true,
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: "auto",
                    aspectRatio: "16:9",
                    width: document.documentElement.clientWidth,
                    sources: [
                        {
                            src: "/assets/BioEcology/BioEcologyMedia/biovideo_3.mp4", // 路径
                            type: "video/mp4" // 类型
                        }
                    ]
                },
                vegpointcloudOptions: {
                    muted: true,
                    autoplay: true, //如果true,浏览器准备好时开始回放。
                    loop: true, // 导致视频一结束就重新开始。
                    preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    // aspectRatio: "16:9",
                    fluid: true,
                    width: document.documentElement.clientWidth,
                    sources: [
                        {
                            src: "/assets/BioEcology/BioEcologyMedia/veg1_pointcloud.mp4", // 路径
                            type: "video/mp4" // 类型
                        }
                    ]
                },
                vegvideoOptions: {
                    muted: true,
                    autoplay: true,
                    loop: true,
                    preload: "auto",
                    // aspectRatio: "16:9",
                    fluid: true,
                    width: document.documentElement.clientWidth,
                    sources: [
                        {
                            src: "/assets/BioEcology/BioEcologyMedia/veg1_video.mp4", // 路径
                            type: "video/mp4" // 类型
                        }
                    ]
                },
                swiperOption: {
                    initialSlide: 0,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    grabCursor: true,
                    direction: "vertical",
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex + 1;
                        this.index = swiper.realIndex;
                    },
                    //自动播放
                    autoplay: {
                        disableOnInteraction: false
                    },
                    //循环
                    loop: true,
                    mousewheel: true,
                    keyboard: true
                }
            };
            // $(".swiper-container").onmouseover(function() {
            //   mySwiper.stopAutoplay();
            // });
            // //鼠标移出开始自动切换
            // $(".swiper-container").onmouseout(function() {
            //   mySwiper.startAutoplay();
            // });
        },
        //定义swiper对象
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted() {
            this.swiper.slideTo(1, 0, false);
        }
    };
</script>

<style  scoped>
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  /* 植被组样式 */
  #veg1 #veg2 {
    clear: both;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #veg1_pic {
    position: absolute;
    float: left;
  }
  #veg1_pointcloud {
    float: left;
    position: absolute;
    margin-left: 3560px;
    margin-top: 680px;
    width: 850px;
    height: 530px;
  }
  #veg1_video {
    float: left;
    position: absolute;
    margin-left: 3560px;
    margin-top: 160px;
    width: 850px;
    height: 530px;
  }
  #veg2_title {
    float: right;
    font-size: 22px;
    margin-top: 50px;
    margin-right: 700px;
    text-align: center;
    height: 60px;
  }
  #veg2_mapp {
    float: right;
    position: absolute;
    margin-top: 155px;
    margin-left: 1860px;
    width: 2700px;
    height: 1010px;
  }
  #veg2_leftpic {
    float: left;
    position: absolute;
    margin-top: 20px;
    margin-left: 20px;
    width: 1800px;
    height: 1150px;
  }
  /* 添加生物多样性样式 */
  .video_backgd {
    position: absolute;
    z-index: 0;
    height: 100%;
  }
  .video1 {
    float: left;
    position: absolute;
    margin-left: 3285px;
    margin-top: 590px;
    width: 1090px;
    z-index: 100;
  }
  .video2 {
    float: left;
    position: absolute;
    margin-top: 19px;
    margin-left: 3365px;
    width: 1010px;
  }
</style>