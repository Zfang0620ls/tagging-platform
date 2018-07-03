<template>
  <div class="index">
    <div class="index-in w">
      <div class="page-wrapper">
        <div class="header clearfix">
          <div class="left fl"><img src="../assets/title.png" height="48" width="540" alt="">&nbsp;<span>欢迎您登录藏经图文标注管理平台！</span></div>
          <div class="right fr">
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
         <el-dialog title="修改密码 :" :visible.sync="dialogFormVisible" width="30%" >
            <el-form :model="form" :rules="rules" ref="form"  >
            <el-form-item label="原密码 :" prop="pass" :label-width="formLabelWidth">
            <el-input v-model="form.pass" type="password" auto-complete="off" value="" ></el-input>
            </el-form-item>
            <el-form-item label="新密码 :" prop="newpass" :label-width="formLabelWidth">
            <el-input v-model="form.newpass" type="password" auto-complete="off" value=""></el-input>
            </el-form-item>
            <el-form-item label="确认密码 :" prop="checkpass" :label-width="formLabelWidth" >
            <el-input v-model="form.checkpass" type="password" auto-complete="off" value=""></el-input>
            </el-form-item>
            
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click.native="updatePwd('form');">确 定</el-button>
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
           <el-button @click="singdialog = false">取 消</el-button>
           <el-button type="primary" @click="singdialog = false">确 定退出</el-button>
           </span>

         </el-dialog>
        
        
        <div class="container clearfix">
            <!--组件渲染-->
            <router-view></router-view>
            <!--./组件渲染-->
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {

    var validatePass = (rule, value, callback) => {
   
      if (value === "") {
          callback(new Error("请输入原密码"));
      } else {
        //   if (this.form.pass !== "") {
        //      this.$refs.ruleForm.validateField("newpass");
        //  }
           callback();
      }
    };
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        // if (this.form.newpass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
         callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入新密码"));
      } else if (value !== this.form.newpass) {
        callback(new Error("两次输入密码不一致!"));
      
      } else {
        callback();
      }
    };
    return {
      form: {
       pass: "",
       newpass: "",
       checkpass: ""
     },
   rules: {
    pass: [{ validator: validatePass, trigger: "blur" }],
    newpass: [{ validator: validateNewPass, trigger: "blur" }],
    checkpass: [{ validator: validatePass2, trigger: "blur" }],
     
   },
  dialogTableVisible: false,
  dialogFormVisible: false,
  formLabelWidth: "80px",
  centerDialogVisible: false,
  singdialog:false ,
  msg: ""
    }
  },
  mounted(){

  },
  methods:{
     linkTo(path){
       var route_link = this.$route.path;
       if(path === route_link){
         return true
       }
     },
     // 请求：修改密码
      updatePwd (from)  {
        this.$refs.form.validate((valid) => {
           if(valid){
             alert("修改成功")
           this.dialogFormVisible=false;
           }else{
             alert("信息不正确");
           }
        }
        )
       
      },
      
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 解决 dialog 抖动
   .index {
     overflow: hidden;
   }
  .index-in{
    .page-wrapper{
      position:relative;
      margin-top:50px;
      margin-bottom: 50px;
      min-height:550px;
      .header{
        height:50px;
        line-height:50px;
        background-color: #D89020;
        padding:0 10px;
        border-radius:30px 30px 0 0;
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
            width: 260px;
            height:23px;
            margin-top: 13px;
          }
        }
        .right{
          .el-dropdown{
            .el-dropdown-link{
              cursor: pointer;
              color:#fff;
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
        border-radius:0 0 30px 30px;
      }
    }
  }
</style>
