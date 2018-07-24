<template>
    <div class="sidebar-wrapper">
            <div class="sidebar" :collapse="collapse" v-bind:class="{ sideclose: collapse }">
              <ul class="sidebar-menu">
                <li :class="{active:linkTo('/home')}">
                  <router-link to="/home">
                    首页
                  </router-link>
                </li>
                <li :class="{active:linkTo('/pagetask')}">
                  <router-link to="/pagetask">
                    页切分标注
                  </router-link>
                </li>
                <li :class="{active:linkTo('/columntask')}">
                  <router-link to="/columntask">
                    列切分标注
                  </router-link>
                </li>
                <!--<li>字框切分标注</li>-->
                <li :class="{active:linkTo('/fonttask')}">
                  <router-link to="/fonttask">
                    字框切分标注
                  </router-link>
                </li>
                <!--<li>文本识别标注</li>-->
                <li :class="{active:linkTo('/textsplit')}">
                <router-link to="/textsplit">
                   文本识别标注
                </router-link>
                </li>
              </ul>
            </div>
          </div>
</template>

<script>
import bus from '../bus';
export default {
  data () {
    return {
      collapse: false,
    }
  },
  created(){
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  },
  methods:{
  	 linkTo(path){
       var route_link = this.$route.path;
       //console.log(route_link);
       if(route_link === '/pagesplit'){
         route_link = "/pagetask";
       }
       if(route_link === '/columnsplit'){
         route_link = "/columntask";
       }
       if(route_link === '/fontsplit'){
         route_link = "/fonttask";
       }
       if(path === route_link){
         return true
       }
     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.sidebar-wrapper{
          width:122px;
          .sidebar{
            width: 120px;
            float: left;
            position: relative;
            margin-right: -100%;
            &.sideclose{
              display: none;
            }
            .sidebar-menu{
              border-left:1px solid #ccc;
              li{
                height:36px;
                line-height:36px;
                text-align: center;
                border:1px solid #fde6c4;
                background:#fdf6ec;
                border-left:0 none;
                margin-bottom:10px;
                font-size:14px;
                border-top-right-radius:30px;
                border-bottom-right-radius:30px;
                a{
                  display: block;
                  color:#f0c78a;
                }
                &.active{
                  background-color: #e6a23c;
                  border-color: #e6a23c;
                  font-weight:bold;
                  a{
                    color: #fff;
                    display: block;
                  }
                }
                &.router-link-active{
                  background-color: #e6a23c;
                  border-color: #e6a23c;
                  color: #fff;
                  a{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
</style>
