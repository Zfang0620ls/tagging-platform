<template>
  <div class="columnsplit" v-title="'列切分标注'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
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
      <img src="../../assets/exam2.png" alt="标注示例">
    </el-dialog>
    <!--标注说明-->
    <el-dialog class="introdialog"
               title="标注说明"
               :visible.sync="introVisible"
               width="60%">
      <div class="text">
        <p class="red">标注说明：</p>
        <p>第一，需要您检查是否每一列字都有列框，如果没有请您点住鼠标左键圈选，圈选完成后点击圈选区域添加列框。</p>
        <p>第二，您需要检查每一列的字框是否都将这一列的字圈住，如果字框边线压住字体的情况请调整字框的宽度或高度。</p>
        <p class="red">快捷键使用说明：</p>
        <p>选中列框后按上下左右键可以调整边框的上下左右距离。键盘A、D键可以左右切换列框。</p>
      </div>
    </el-dialog>
    <div class="container clearfix">
      <div class="left fl canvas-layout" ref="wrapper" :style="{height: inner_height}">
        <div><canvas-op :redraw="updateCanvas" @scrollToRect="scrollToRect"></canvas-op></div>
      </div>
      <div class="right fr">
        <div class="nodata">
            <p>列切分标注</p>
          </div>
      </div>
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
      activeName: '',
      examVisible:false,
      introVisible:false,
      pagerectId:'',
      inner_height: 100,
      updateCanvas: 1,
      image_url:'https://s3.cn-north-1.amazonaws.com.cn/lqdzj-image/QL/19/QL_19_627.jpg',
      rects:[],
      current:{}
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
  mounted(){
    this.$store.commit('setScale', {scale: 1});
    //获取id
    if(this.$route.query.pagerect){
      this.pagerectId = this.$route.query.pagerect;
      //console.log(this.pagerectId);
      this.getWorkingData();
    }
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
        let url = '/columnrect/?pagerect=' + this.pagerectId;
        this.axios.get(url).then((res) => {
          //console.log(res);
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
  @import '../../common/style/maincontent.scss'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .btns{
	margin-bottom:20px;
    span{
      display:inline-block;
      width:120px;
      height:35px;
      text-align: center;
      line-height:35px;
      font-size:14px;
      border:1px solid #e6e6e6;
      color: #429bf0;
      margin-right:15px;
      cursor: pointer;
      &.active{
        background-color: #D89020;
        color:#fff;
      }
	}
  }
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
  	.left{
  		width: 73%;
  		height:500px;
  		border:1px solid #e6e6e6;
  		box-sizing:border-box;
  		margin-right: 2%;
  		position: relative;
  		overflow:auto;
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
  		height:500px;
  		border:1px solid #e6e6e6;
  		box-sizing:border-box;
  		position: relative;
  		overflow:auto;
  		.nodata{
		  position: absolute;
	      left:50%;
	      top:50%;
	      transform: translate(-50%,-50%);
	      font-size:14px;
  		}
  	}
  }
  .submit{
    display:inline-block;
    width:100px;
    height:34px;
    text-align: center;
    line-height:34px;
    background-color: #D89020;
    color:#fff;
    margin-top:20px;
    cursor:pointer;
  }
</style>
