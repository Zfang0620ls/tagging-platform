webpackJsonp([13],{"7RHI":function(e,t){},Z5ZJ:function(e,t){},f5Jl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("PmVp"),i=a("CRWL"),s={components:{SideBar:n.a,videoPlayer:i.videoPlayer},data:function(){return{playerOptions:{playbackRates:[.7,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}],poster:"https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",width:document.documentElement.clientWidth,notSupportedMessage:"此视频暂无法播放，请稍后再试"}}},methods:{onPlayerPlay:function(e){alert("play")},onPlayerPause:function(e){alert("pause")}},computed:{player:function(){return this.$refs.videoPlayer.player}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"title",rawName:"v-title",value:"培训视频",expression:"'培训视频'"}],staticClass:"vedio"},[a("side-bar"),e._v(" "),a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"main-content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"player"},[a("video-player",{ref:"videoPlayer",staticClass:"video-player vjs-custom-skin",attrs:{playsinline:!0,options:e.playerOptions},on:{play:function(t){e.onPlayerPlay(t)},pause:function(t){e.onPlayerPause(t)}}})],1)])])])],1)},staticRenderFns:[]};var l=a("vSla")(s,o,!1,function(e){a("7RHI"),a("Z5ZJ")},null,null);t.default=l.exports}});