<template>
  <div class="login" v-title="'登录'">
      <div class="login-container width">
          <div class="top-panel"></div>
          <div class="center-panel clearfix">
              <div class="left-tip fl">
                <p><img src="../assets/tit.png" alt=""></p>
              </div>
              <div class="right-login fr">
                <div class="login-tab">
                  <div id="role" v-for="(item,index) in tabs" :class="{active:nowIndex == index}" @click="changeIndex(index)">{{item.title}}</div>
                </div>
                <!--普通用户模块-->
                <div class="login-con" v-if="nowIndex == 0">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-ruleForm" :label-position="labelPosition" label-width="65px">
                    <el-form-item class="item" prop="email" label="邮箱：">
                      <el-input v-model.trim="ruleForm.email" placeholder="请输入邮箱" auto-complete="off" class="need"></el-input>
                    </el-form-item>
                    <el-form-item class="item" prop="pass" label="密码：">
                      <el-input type="password" v-model.trim="ruleForm.pass" placeholder="请输入密码" auto-complete="off" class="need"></el-input>
                    </el-form-item>
                    <p class="register">没有账号，<em @click="goRegister">立即注册</em></p>
                    <el-form-item class="sub-btn">
                      <el-button type="big" class="log-btn" @click="handleSubmit('ruleForm',ruleForm.email,ruleForm.pass)">登录</el-button>
                    </el-form-item>
                  </el-form>
                </div>
                <!--管理员模块-->
                <div class="login-con" v-if="nowIndex == 1">
                  <el-form :model="ruleFormAdmin" :rules="rules" ref="ruleForm" class="login-ruleForm" :label-position="labelPosition" label-width="65px">
                    <el-form-item class="item" prop="email" label="邮箱：">
                      <el-input v-model.trim="ruleFormAdmin.email" placeholder="请输入邮箱" auto-complete="off" class="need"></el-input>
                    </el-form-item>
                    <el-form-item class="item" prop="pass" label="密码：">
                      <el-input type="password" v-model.trim="ruleFormAdmin.pass" placeholder="请输入密码" auto-complete="off" class="need"></el-input>
                    </el-form-item>
                    <p class="register">没有账号，<em @click="goRegister">立即注册</em></p>
                    <el-form-item class="sub-btn">
                      <el-button type="big" class="log-btn" :loading="logining" @click="handleSubmit('ruleFormAdmin',ruleFormAdmin.email,ruleFormAdmin.pass)">登录</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import util from "@/libs/util";
export default {
  data() {
    //邮箱前台验证
    var validateEmail = (rule,value,cb) => {
      var pattern = /^([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-|_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if(value === ''){
        cb(new Error('请输入邮箱'))
      }else if(!pattern.test(value)){
        cb(new Error('请输入正确的邮箱'))
      }else{
        cb();
      }
    };
    //新密码前台验证
    var validatePass = (rule, value, cb) => {
      var pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if (value === '') {
        cb(new Error('密码至少包含字母数字,6-20位'));
      }else if(!pattern.test(value)){
        cb(new Error('请输入6－20位字母数字混合密码'));
      }else {
        cb();
      }
    };
    return {
      tabs:[
        {title:'普通用户'},
        {title:'管理员'},
      ],
      nowIndex:0,
      logining:false,
      labelPosition: 'right',
       rules:{
         email: [
           {required: true,validator: validateEmail, trigger: 'blur'},
           { min: 1, max: 42, message: '请输入正确的邮箱', trigger: 'blur' }
         ],
         pass: [
           {required: true, validator: validatePass, trigger: 'blur'},
         ],
       },
      ruleForm:{
        email:"",
        pass:""
      },
       ruleFormAdmin:{
          email:"",
          pass:""
       }
    };
  },
  mounted(){
    util.toTop();
  },
  methods: {
    changeIndex(index){
      this.nowIndex = index;
    },
    //跳转注册页面
    goRegister(){
        this.$router.push('/register');
    },
    // 登陆
    handleSubmit(formname,email,pass){
      this.$refs[formname].validate((valid) => {
        let loginParam = {
          email:email,
          password:pass
        }
        if(valid){
          this.logining = true;
          this.$router.push('/home')
//          this.axios.post('',loginParam).then((res) => {
//              this.logining = false;
//
//          })
        }
      })
    }
  }
};
</script>
<style lang="scss">
  .sub-btn{
    .el-form-item__content{
      text-align: right;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.pointer {
  cursor: pointer;
}
//清除抖动
.login {
  overflow: hidden;
  background:#e0e0e0 url(../assets/bg.jpg) no-repeat;
  background-size:cover;
  min-height:100%;
  position: absolute;
  width:100%;
}
.login-container {
  margin: 50px auto;
  min-height: 500px;
  .top-panel {
    height: 50px;
    border-radius: 30px 30px 0 0;
    background-color: #f7aa32;
  }
  .center-panel {
    height: 650px;
    position: relative;
    background:#fff url('../assets/login-bg.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 0 0 30px 30px;
    // 左侧文字
    .left-tip {
      margin-top:125px;
      margin-left:80px;
    }
    // 右侧 form
    .right-login {
      margin-top: 120px;
      margin-right:80px;
      padding: 30px 20px;
      background-color: rgba(255,255,255,0.4);
      width:300px;
      border-radius:3px;
      .login-title {
        font-size: 48px;
        color: #429bf0;
        letter-spacing: 4.8px;
      }
      .login-tab {
        margin-top: 30px;
        margin-bottom:30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;
        text-align: center;
        margin-left:65px;
        #role {
          flex:1;
          font-size: 14px;
          color: #f7aa32;
          cursor: pointer;
          border: 1px solid #f7aa32;
          height:36px;
          line-height:36px;
          font-weight:bold;
          background:rgba(255,255,255,0.5);
          &:first-child{
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:last-child{
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
          &.active {
            color:#fff;
            border: 1px solid #f7aa32;
            background:#f7aa32;
            height:36px;
            line-height:36px;
          }
        }
      }
      .log-btn{
        background:#f7aa32;
        border:1px solid #f7aa32;
        color:#fff;
        font-weight:bold;
        width:100%;
        &:hover{
          background:#D89020;
          border-color: #D89020;
        }
      }
      .register{
        text-align: right;
        font-size:12px;
        color: rgba(255,255,255,0.8);
        margin-bottom:20px;
        em{
          cursor: pointer;
          color: #f7aa32;
        }
      }
    }
  }
}
</style>
