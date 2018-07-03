<template>
  <div class="columnsplit" v-title="'文本识别标注'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="btns">
      <span @click="getData('获取标注数据')" :class="{active:activeName === '获取标注数据'}">获取标注数据</span>
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
        <p>你需要检查系统识别的文字与图片上的文字是否一致，如果存在不一致请修改。</p>
        <p class="red">快捷键使用说明：</p>
        <p>选中字符后按上下键可上下切换字符。通过左右键可以切换所选列。</p>
      </div>
    </el-dialog>
    <div class="container clearfix">
      <div class="left fl">
        <div class="nodata">
            <p>暂无标注数据</p>
            <p>请点击<em>获取标注数据按钮</em>获取标注任务</p>
          </div>
      </div>
      <div class="middle fl">
        <div class="nodata">
            <p>单字识别标注</p>
        </div>
      </div>
      <div class="right fl">
        <div class="nodata">
            <p>文本识别内容</p>
        </div>
      </div>
    </div>
    <div class="submit fr">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'
export default {
  components:{
    SideBar,
   },
  data () {
    return {
      activeName: '',
      examVisible:false,
      introVisible:false,
    }
  },
  methods:{
    introShow(curname){
      this.activeName = curname;
      this.introVisible = true;
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
  		width: 43%;
  		min-height:500px;
  		border:1px solid #e6e6e6;
  		box-sizing:border-box;
  		margin-right: 2%;
  		position: relative;
  		overflow-x:auto;
  		.nodata{
	      position: absolute;
	      left:50%;
	      top:50%;
	      transform: translate(-50%,-50%);
	      font-size:14px;
	      p{
	        text-align: center;
          white-space: nowrap;
	        em{
	          color:#f40;
	        }
	        &:first-child{
	          margin-bottom:5px;
	        }
	      }
	    }
  	}
  	.middle{
  		width: 28%;
  		min-height:500px;
  		border:1px solid #e6e6e6;
  		box-sizing:border-box;
  		margin-right: 2%;
  		position: relative;
  		overflow-x:auto;
      .nodata{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        font-size:14px;
        p{
          white-space: nowrap;
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
        p{
          white-space: nowrap;
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
