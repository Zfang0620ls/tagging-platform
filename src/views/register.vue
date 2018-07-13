<template>
  <div class="register" v-title="'注册'">
     <div class="register-container w">
          <div class="top-panel"></div>
          <div :style="bgdiv" class="center-panel clearfix">
              <div class="left-tip fl">
                <p><img src="../assets/tit.png" alt=""></p>
              </div>
              <div class="right-register fr">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-ruleForm" :label-position="labelPosition" label-width="65px">
                  <h3 class="reg-title">注册</h3>
                  <el-form-item class="item" prop="email" label="邮箱：">
                    <el-input v-model.trim="ruleForm.email" placeholder="请输入邮箱" auto-complete="off" class="need"></el-input>
                  </el-form-item>
                  <el-form-item class="item" prop="pass" label="密码：">
                    <el-input type="password" v-model.trim="ruleForm.pass" placeholder="请输入密码" auto-complete="off" class="need"></el-input>
                  </el-form-item>
                  <el-form-item class="item" prop="checkpass" label="确认：">
                    <el-input type="password" v-model.trim="ruleForm.checkpass" placeholder="请确认密码" auto-complete="off" class="need"></el-input>
                  </el-form-item>
                  <p class="log">已有账号，<em @click="goLogin">立即登录</em></p>
                  <el-form-item class="sub-btn">
                    <el-button type="big" class="reg-btn" @click="">立即注册</el-button>
                  </el-form-item>
              </el-form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
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
      // 背景图
      bgdiv: {
           backgroundImage: 'url(' + require('assets/login-bg.jpg') + ')'
      },
      labelPosition: 'right',
      rules:{
        email: [
          {required: true,validator: validateEmail, trigger: 'blur'},
          { min: 1, max: 42, message: '请输入正确的邮箱', trigger: 'blur' }
        ],
        pass: [
          {required: true, validator: validatePass, trigger: 'blur'},
        ],
        checkpass: [
          {required: true, validator: validateCheckpass, trigger: 'blur'},
        ],
      },
      ruleForm:{
        email:'',
        pass:'',
        checkpass:''
      }
    };
  },
  methods: {
    //跳转到登录
    goLogin(){
      this.$router.push('/');
    },
    //注册
    handleSubmit(formname){
      this.$refs[formname].validate((valid) => {
        if(valid){
          this.logining = true;
          let regParam = {
            email:this.ruleForm.email,
            password:this.ruleForm.pass
          }
          this.axios.post('',regParam).then((res) => {
            this.logining = false;
            this.$message({
              message: '注册成功',
              type: 'success'
            })
          })
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.register {
  overflow: hidden;
}
.register-container {
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
    background: no-repeat center center;
    background-size: cover;
    border-radius: 0 0 30px 30px;
    .left-tip {
      margin-top:125px;
      margin-left:80px;
    }
    .right-register {
      margin-top:120px;
      margin-right:80px;
      padding:30px 20px;
      width:300px;
      background: rgba(255,255,255,0.4);
      border-radius:3px;
      .reg-title{
        font-size:20px;
        text-align: center;
        color:#f7aa32;
        margin-bottom:20px;
        font-weight:bold;
        letter-spacing: 3px;
      }
      .log{
        text-align: right;
        font-size:12px;
        color: rgba(255,255,255,0.8);
        margin-bottom:20px;
        em{
          cursor: pointer;
          color: #f7aa32;
        }
      }
      .reg-btn{
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
    }
  }
}
</style>
