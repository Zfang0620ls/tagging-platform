<template>
  <div class="index">
    <div class="index-in w">
      <div class="page-wrapper">
        <div class="header clearfix">
          <div class="left fl">
            <img src="../assets/title2.png" alt="">
            <span class="collapse-btn" @click="collapseChage">
              <i class="el-icon-menu"></i>
            </span>&nbsp;
            <span>欢迎您登录藏经图文标注管理平台！</span>
          </div>
          <div class="right fr">
            <!-- 全屏显示 -->
            <div class="btn-fullscreen" @click="handleFullScreen">
              <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                <i class="el-icon-rank"></i>
              </el-tooltip>
            </div>
            <el-dropdown :hide-on-click="false" trigger="click">
              <span class="el-dropdown-link">
                <img class="user" src="../assets/user.png" alt="">
                12345678@qq.com<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <span @click="dialogFormVisible = true">修改密码</span>
                </el-dropdown-item>
                <el-dropdown-item >
                   <span @click ="singdialog = true;dialogFormVisible=false">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <!-- dialog 修改密码弹窗 -->
         <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%" class="changePass">
            <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="原密码：" prop="pass" :label-width="formLabelWidth">
            <el-input v-model="form.pass" type="password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码：" prop="newpass" :label-width="formLabelWidth">
            <el-input v-model="form.newpass" type="password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="checkpass" :label-width="formLabelWidth" >
            <el-input v-model="form.checkpass" type="password" auto-complete="off"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button type="warning" plain @click="dialogFormVisible = false">取消</el-button>
            <el-button type="warning" @click.native="updatePwd('form');">确定</el-button>
            </div>
        </el-dialog>
         <!-- 退出对话框登录 -->
         <el-dialog title="提示" :visible.sync="singdialog" width="30%">
           <p>您还没有完成标注任务提交,请完成标<br>
             注任务提交后再退出,或者将未完成的<br>
             文件保存至本地,否则您之前完成的标<br>
             注内客将不会被系统记录保存
           </p>
           <span slot="footer" class="dialog-footer">
           <el-button type="warning" plain @click="singdialog = false">取消</el-button>
           <el-button type="warning" @click="singdialog = false">确定</el-button>
           </span>
         </el-dialog>
        <div class="container clearfix">
            <!--组件渲染-->
            <router-view></router-view>
            <!--./组件渲染-->
        </div>
      </div>
    </div>
    <div class="ft"></div>
  </div>

</template>

<script>
import util from "@/libs/util";
import bus from '../bus';
export default {
  data () {

    var validatePass = (rule, value, callback) => {
      if (value === "") {
          callback(new Error("请输入原密码"));
      } else {
           callback();
      }
    };
    var validateNewPass = (rule, value, callback) => {
      var pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if (value === '') {
        cb(new Error('密码至少包含字母数字,6-20位'));
      }else if(!pattern.test(value)){
        cb(new Error('请输入6－20位字母数字混合密码'));
      }else {
        if (this.ruleForm.checkpass !== '') {
          this.$refs.ruleForm.validateField('checkpass');
        }
        cb();
      }
    };
    //确认新密码
    var validateCheckpass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入6－20位字母数字混合密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      fullscreen: false,
      collapse: false,
      form: {
       pass: "",
       newpass: "",
       checkpass: ""
     },
     rules: {
        pass: [{required:true, validator: validatePass, trigger: "blur" }],
        newpass: [{required:true, validator: validateNewPass, trigger: "blur" }],
        checkpass: [{required:true, validator: validateCheckpass, trigger: "blur" }],
       },
      dialogFormVisible: false,
      formLabelWidth: "85px",
      singdialog:false ,
    }
  },
  mounted(){
    util.toTop();
  },
  methods:{
    //修改密码
    updatePwd (formName)  {
      this.$refs[formName].validate((valid) => {
           if(valid){
              this.$message({
                message:'提交成功',
                type:'success'
              })
              this.dialogFormVisible=false;
           }else{
             this.$message({
               message:'提交失败',
               type:'error'
             })
             return false;
           }
        }
      )
    },
    // 全屏事件
    handleFullScreen(){
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    // 侧边栏折叠
    collapseChage(){
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    //退出登录
    logout(){

    }

  }
}
</script>
<style lang="scss">
  .changePass{
    .el-form-item__label{
      padding-right:5px;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 解决 dialog 抖动
   .index {
     overflow: hidden;
     position: absolute;
     width:100%;
     min-height:100%;
     .index-in{
       position: relative;
       height:100%;
       .page-wrapper{
         position:relative;
         height:100%;
         min-height:550px;
         .header{
           height:50px;
           line-height:50px;
           background-color: #e6a23c;
           padding:0 5px;
           .left{
             span{
               color: #fff;
               font-size:14px;
             }
             em{
               color: #fff;
               font-size:14px;
             }
             img{
               width: 150px;
               height: 27px;
               margin-top: 12px;
             }
             .collapse-btn{
               i{
                 font-size:22px;
                 position: relative;
                 top:5px;
               }
             }
           }
           .right{
             .btn-fullscreen{
               position: relative;
               top:3px;
               width: 30px;
               height: 30px;
               text-align: center;
               border-radius: 15px;
               cursor: pointer;
               display:inline-block;
               transform: rotate(45deg);
               margin-right: 5px;
               font-size: 24px;
               color:#fff;
               vertical-align:top;
             }
             .el-dropdown{
               .el-dropdown-link{
                 cursor: pointer;
                 color:#fff;
                 vertical-align:top;
               }
             }
             .user{
               width: 24px;
               height:24px;
               margin-top: 14px;
             }
           }
         }
         .container{
           padding-top:20px;
           min-height:600px;
           background-color: #fff;
           /*border-radius:0 0 30px 30px;*/
         }
       }
     }
     .ft{
       width:100%;
       height:180px;
       background:url(../assets/ft.png) no-repeat center center;
     }
   }

</style>
