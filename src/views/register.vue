<template>
  <div class="register" v-title="'注册'">
     <div class="register-container w">
          <div class="top-panel"></div>
          <div :style="bgdiv" class="center-panel clearfix">
              <div class="left-tip fl">
                <div>深入经藏</div><div>智慧如海</div>
              </div>
              <div class="right-register fr">
                <!-- <div><span class="register-title">藏经图文标注平台</span></div> -->
                <el-form  ref="form" :model="form" id="form" rules="ruleForm" class="form-bg clearfix" method="post">
                  <div class="reg-title">
                    注册
                  </div>
                  <div class="form-item">
                    <div>
                      <p>邮箱</p>
                      <el-input class="reg-input" v-model="form.email" type="text" clearable/>
                    </div>
                  </div>
                  <div class="form-item">
                    <div>
                      <p>密码</p>
                      <el-input class="reg-input" type="text" placeholder="包含数字和字母6-18位" v-model="form.pass" clearable/>
                    </div>
                  </div>
                  <div class="form-item">
                    <div>
                      <p>确认密码</p>
                      <el-input class="reg-input" type="text" v-model="form.checkPass" clearable/>
                    </div>
                  </div>
                  <div class="form-item">
                    <el-button class="reg-btn input" id="register" @click="onSubmit">注册成功并登陆</el-button>
                  </div>
              </el-form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        // if (this.form.newpass !== "") {
        // this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    return {
      form: {
        email: '',
        pass: '',
        checkPass: ''
      },
      // 背景图
      bgdiv: {
           backgroundImage: 'url(' + require('assets/login-bg.jpg') + ')'
          // backgroundColor: rgba(0,0,0,0.43)
       },
      msg: ""
    };
  },
  methods: {
    // 注册
    onSubmit: () => {
      alert(1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.active {
  background-color: #d89020;
  border: 0 !important;
}
.tran {
  background-color: transparent;
}
.pointer {
  cursor: pointer;
}
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
      padding: 90px 30px;
      width: 20px;
      line-height: 50px;
      font-size: 30px;
      color: #d0021b;
      div {
        width: 20px;
        padding: 10px;
      }
    }
    .right-register {
      padding: 60px 80px;
      // .register-title {
      //   font-family: MicrosoftYaHei-Bold;
      //   font-size: 48px;
      //   color: #429bf0;
      //   letter-spacing: 4.8px;
      // }
      .form-bg {
        background: rgba(255,255,255,0.66);
      }
      #form {
        margin-top: 25px;
        padding: 10px 20px; 
        .reg-title {
          font-size: 30px;
          color: #429bf0;
          font-weight: bold;
          letter-spacing: 3px;
          text-align: center;
        }
        .form-item {
          padding: 20px 0;
          // #register {
          //   width: 100%;
          //   height: 35px;
          //   background: #d89020;
          //   border: 0;
          //   font-size: 20px;
          //   color: #ffffff;
          //   letter-spacing: 2px;
          // }
        }
        .form-item > div > p {
          font-size: 20px;
          color: #429bf0;
          font-weight: bold;
          letter-spacing: 2.5px;
        }
        .reg-input {
          width: 290px;
          margin-top: 10px;
        }
        .reg-btn {
          width: 100%;
          height: 50px;
          background-color: #d89020;
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 2px;
          border-color: #d89020;
        }
        // el-input {
        //   width: 500px;
        // }
        // .form-item > div > el-input {
        //   border: 1px solid #979797;
        //   width: 290px;
        //   height: 30px;
        //   font-size: 18px;
        //   padding-left: 10px;
        // }
      }
    }
  }
}
</style>
