<template>
  <div class="fontsplit" v-title="'字框切分标注'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content" :collapse="collapse"  v-bind:class="{ ml: collapse }">
        <div class="btns">
      <!--<span @click="getData('获取标注数据')" :class="{active:activeName === '获取标注数据'}">获取标注数据</span>-->
      <span @click="examShow('查看示例')" :class="{active:activeName === '查看示例'}">查看示例</span>
      <span @click="introShow('标注说明')" :class="{active:activeName === '标注说明'}">标注说明</span>
    </div>
    <!--查看示例-->
    <el-dialog class="examdialog"
      title="查看示例"
      :visible.sync="examVisible"
      width="60%">
      <img src="../../assets/exam3.png" alt="标注示例">
    </el-dialog>
    <!--标注说明-->
    <el-dialog class="introdialog"
               title="标注说明"
               :visible.sync="introVisible"
               width="60%">
      <div class="text">
        <p class="red">标注说明：</p>
        <p>第一，您需要检查每一个字是否都有字框，如果没有需要您点击右键添加。</p>
        <p>第二，检查字框是否足够贴合字体，适当压住字体可以。</p>
        <p class="red">快捷键使用说明：</p>
        <p>3.快捷键使用说明：</p>
        <p>(1).首先使用空格键选中页框再进行以下操作：</p>
        <p>(2).选中页框后： 按<em>shift 加上 ↑ ↓ ← →</em>键可以将对应的边往外调大;</p>
        <p>(3).选中页框后： 按<em>alt 加上 ↑ ↓ ← →</em>键可以将对应的边往内调小;</p>
        <p>(4).选中页框后： 按<em>↑ ↓ ← →</em>键可以上下左右移动页框;</p>
        <p>(5).选中页框后： 按<em>W+↑ S+↓ A+← D+→</em>键也可以上下左右移动页框;</p>
        <p>(6).操作完成后按空格键释放页框</p>
      </div>
    </el-dialog>
    <div class="container clearfix">
      <div class="left fl canvas-layout" ref="wrapper" :style="{height: inner_height}">
        <div><canvas-op :redraw="updateCanvas" @scrollToRect="scrollToRect"></canvas-op></div>
      </div>
      <!--<div class="right fr">-->
        <!--<div class="nodata">-->
            <!--<p>字框切分标注</p>-->
          <!--</div>-->
      <!--</div>-->
    </div>
    <div class="submit fr">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import  _ from 'lodash';
import SideBar from '../../components/SideBar';
import canvasOp from "../../components/canvas_op"; //canvasOp
import util from "@/libs/util";
import bus from '@/bus';
import {mapState} from "vuex";
export default {
  components:{
    SideBar,
    canvasOp
   },
  data () {
    return {
      collapse:false,
      activeName: '',
      examVisible:false,
      introVisible:false,
      pagerectId:'',
      inner_height: 100,
      updateCanvas: 1,
      image_url:'',
      rects:[],
      current:{},
      pagesplitDetail:{},
    }
  },
  computed: {
    ...mapState({
      solidRects: state => state.canvas.rects,
      curRect: state => state.canvas.curRect,
    })
  },
  watch: {
    curRect(val, oldVal) {
      if (_.filter(this.solidRects, function(o) { return !o.kselmarked }).length != 0) {
        this.submitType = 'error'
      } else {
        this.submitType = 'success';
      }
    }
  },
  created(){
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
    //获取每页的信息
    var task = localStorage.getItem('fontsplitDetail');
    if(JSON.parse(task)){
      this.pagesplitDetail = JSON.parse(task);
      this.pagerectId      = this.pagesplitDetail.pagerects[0].id;
      this.image_url       = this.pagesplitDetail.pagerects[0].img_path;
    }
  },
  mounted(){
    this.$store.commit('setScale', {scale: 1});
    this.getWorkingData();
  },
  methods:{
    examShow(curname){
        this.activeName = curname;
        this.examVisible = true;
    },
    introShow(curname){
      this.activeName = curname;
      this.introVisible = true;
    },
    getWorkingData(){
      let url = '/charrect/?pagerect=' + this.pagerectId;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.rects = res.data.models;
        this.current = _.find(this.rects, function(r) { return r.x == res.data.x && r.y == res.data.y}) || this.current;
        util.createImgObjWithUrl(this.image_url).then((v) => {
          this.$store.commit('setImageAndRects', {image: v.target, rects: this.rects})
          this.$store.commit('setCurRect', {rect: this.current});
          this.updateCanvas += 1;
        }).catch((err) => {
          console.log("图片载入失败"+ err);
        });
      })
    },
    scrollToRect() {
      let scale = this.$store.getters.scale;
      let canvas = document.getElementsByClassName(' canvas-layout')[0];
      let viewWidth = canvas.clientWidth;
      let viewHeight = canvas.clientHeight;
      let offsetTop = canvas.scrollTop;
      let offsetLeft = canvas.scrollLeft;
      let rect = this.$store.getters.curRect;
      if (rect.y * scale > offsetTop && rect.y * scale + rect.h < offsetTop + viewHeight) {
        if (rect.x * scale > offsetLeft && rect.x * scale + rect.w < offsetLeft + viewWidth) {
          return true
        }
      }

      let x = Math.max(rect.x * scale - (window.innerWidth/3), rect.x);
      let y = Math.max(rect.y * scale - (window.innerHeight/3), rect.y);
      this.$nextTick(() => {
        this.$refs.wrapper.scrollTo(x, y);
      });
      window.wrapper = this.$refs.wrapper;
    },
  },
}
</script>
<style lang="scss">
  .introdialog{
    .el-dialog__header{
      text-align: center;
    }
  }
  @import '../../common/style/maincontent.scss';
  @import '../../common/style/common.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .fontsplit{
    .examdialog{
      text-align: center;
      img{
        width:70%;
      }
    }
    .introdialog{
      .el-dialog__header{
        text-align: center;
      }
      .text{
        p{
          line-height:32px;
          em{
            color:#f40;
          }
          &.red{
            font-weight:bold;
            color:#f40;
          }
        }
      }
    }
    .container{
      position: relative;
      text-align:center;
      .left{
        /*width: 73%;*/
        width:100%;
        height:850px;
        border:1px solid #ddd;
        box-sizing:border-box;
        /*margin-right: 2%;*/
        position: relative;
        overflow:auto;
        background:url(../../assets/bg-repeat.png) repeat;
        background-size:250px 250px;
        .nodata{
          position: absolute;
          left:50%;
          top:50%;
          transform: translate(-50%,-50%);
          font-size:14px;
          p{
            text-align: center;
            em{
              color:#f40;
            }
            &:first-child{
              margin-bottom:5px;
            }
          }
        }
      }
      .right{
        width: 25%;
        min-height:500px;
        border:1px solid #e6e6e6;
        box-sizing:border-box;
        position: relative;
        overflow-x:auto;
        .nodata{
          position: absolute;
          left:50%;
          top:50%;
          transform: translate(-50%,-50%);
          font-size:14px;
        }
      }
    }
    @media screen and (max-width: 1440px){
      .container{
        .left{
          height:600px;
        }
      }
    }
  }
</style>
