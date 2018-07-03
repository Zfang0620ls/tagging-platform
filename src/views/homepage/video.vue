<template>
  <div class="vedio" v-title="'培训视频'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="container">
          <div class="player">
            <video-player  class="video-player vjs-custom-skin"
                           ref="videoPlayer"
                           :playsinline="true"
                           :options="playerOptions"
                           @play="onPlayerPlay($event)"
                           @pause="onPlayerPause($event)"
            >
            </video-player>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'
import { videoPlayer } from 'vue-video-player';
export default {
   components:{
    SideBar,
    videoPlayer
   },
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
        poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
       	// controlBar: {
	       //   timeDivider: true,
	       //   durationDisplay: true,
	       //   remainingTimeDisplay: false,
	       //   fullscreenToggle: true  //全屏按钮
       	// }
      }
    }
  },
  methods: {
    onPlayerPlay(player) {
      alert("play");
    },
    onPlayerPause(player){
      alert("pause");
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>
<style lang="scss">
  @import '../../common/style/maincontent.scss'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	.video-js .vjs-big-play-button{
     /*播放按钮换成圆形*/
    height: 2em;
    width: 2em;
    line-height: 2em;
    border-radius: 1em;
  }
</style>
