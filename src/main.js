// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import uploader from 'vue-simple-uploader'
import store from "./store/index.js"
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'
import 'vue-video-player/src/custom-theme.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from './http'
Vue.prototype.axios = axios;
Vue.use(uploader);
Vue.use(VueVideoPlayer);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.directive('title', {
  inserted: function (el, binding) {
    if(binding.value.title){
      document.title = binding.value.title
    }else{
      document.title = binding.value
    }
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
