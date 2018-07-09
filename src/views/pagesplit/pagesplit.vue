<template>
  <div class="pagesplit" v-title="'页切分标注'">
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
      <img src="../../assets/exam1.png" alt="标注示例">
    </el-dialog>
    <!--标注说明-->
    <el-dialog class="introdialog"
               title="标注说明"
               :visible.sync="introVisible"
               width="60%">
      <div class="text">
        <p>标注说明：</p>
        <p>1.您需要检查图片外边框是否将图片完全圈住，如有切到图片内字体的情况请调整边框大小。</p>
        <p>2."快捷键使用说明：选中页框后按<em>上下左右</em>键可以调整边框的上下左右距离。"</p>
      </div>
    </el-dialog>
    <div class="container">
        <div class="imgdata">
          <!--<img :src="pagerect.img_path" alt="">-->
          <canvas id="canvas" width=100% height=100%>
            <!--<KeyEventOpt></KeyEventOpt>-->
            <!--<MouseEventOpt :canvasId="canvasId" ></MouseEventOpt>-->
          </canvas>
        </div>
    </div>
    <div class="submit fr">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'; //侧边栏
//import canvasOp from "../../components/canvas_op"; //canvasOp
import KeyEventOpt from "../../components/keyevent_opt";
import MouseEventOpt from "../../components/mouseevent_opt";
import bus from '@/bus';
export default {
  components:{
    SideBar,
    KeyEventOpt,
    MouseEventOpt
   },
  data () {
    return {
      activeName: '',
      examVisible:false,
      introVisible:false,
      pagesplitDetail:{},
      imgData:{},
      pagerect:{},
      canvasId:'canvas'
    }
  },
  created(){
    if(JSON.parse(localStorage.getItem('pagesplitDetail'))){
      this.pagesplitDetail = JSON.parse(localStorage.getItem('pagesplitDetail'));
      this.pagerect = this.pagesplitDetail.pagerects[0];
      console.log(this.pagerect);
    }
  },
  mounted(){
    this.drawScreen();
    bus.$on('keyEvent', this.handleKeyEvent);
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
    //将图片转化为canvas画布并绘制框
    drawScreen () {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = this.pagerect.img_path; //图片
      let rectw = this.pagerect.w; //获取框的宽
      let recth = this.pagerect.h; //获取框的高
      let rectx = this.pagerect.x; //获取框的宽
      let recty = this.pagerect.y; //获取框的高
      // 坐标(0,0) 表示从此处开始绘制，相当于偏移。
      img.onload = function(){
        canvas.width = img.width; //canvas宽度
        canvas.height = img.height;//canvas高度
        ctx.drawImage(img, 0, 0,canvas.width, canvas.height);
        ctx.lineWidth = 2;        //设置边框线框
        ctx.strokeStyle = "#f40000";//设置边框颜色
        ctx.strokeRect(rectx, recty, rectw, recth);    //红色边框矩形
       };
    },
//    handleKeyEvent: function (event) {
//      if (event.type == 'keydown')
//        this.$store.dispatch('handleKeyDownEvent', event);
//      else if (event.type == 'keyup')
//        this.$store.dispatch('handleKeyUpEvent', event);
////      this.redraw_canvas();
////      this.$emit('scrollToRect');
//    },

  }
}
</script>
<style lang="scss">
  .introdialog{
    .el-dialog__header{
      text-align: center;
    }
  }
  @import '../../common/style/maincontent.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .btns{
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
    margin-bottom:20px;
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
        &:first-child{
          font-weight:bold;
          color:#f40;
        }
      }
    }
  }
  .container{
    width:100%;
    height:600px;
    border:1px solid #e6e6e6;
    position: relative;
    overflow:auto;
    box-sizing:border-box;
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
