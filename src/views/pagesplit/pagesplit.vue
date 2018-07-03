<template>
  <div class="pagesplit" v-title="'页切分标注'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="btns">
      <span @click="getData('获取标注数据')" :class="{active:activeName === '获取标注数据'}">获取标注数据</span>
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
        <div class="nodata" v-if="models.length === 0">
          <p>暂无标注数据</p>
          <p>请点击<em>获取标注数据按钮</em>获取标注任务</p>
        </div>
        <div class="imgdata" v-if="models.length !== 0">
          <img :src="imgData.img_path" alt="">
        </div>
    </div>
    <div class="submit fr">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'; //侧边栏
import canvasOp from "../../components/canvas_op"; //canvasOp
export default {
  components:{
    SideBar,
   },
  data () {
    return {
      activeName: '',
      examVisible:false,
      introVisible:false,
      models:[],
      imgData:{},
    }
  },
  mounted(){

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
    getData(curname){
      this.activeName = curname;
      this.axios.get('/pagerect').then((res) => {
          //console.log(res);
          this.models = res.data.models;
          if(res.data.models.length > 0){
            this.imgData = res.data.models[0];
            //console.log(this.imgData);
          }
      })
    },
  }
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
    min-height:350px;
    border:1px solid #e6e6e6;
    position: relative;
    overflow-x:auto;
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
