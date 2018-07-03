<template>
  <div class="login" v-title="'登录'">
      <div class="login-container w">
          <div class="top-panel"></div>
          <div :style="bgdiv" class="center-panel clearfix">
              <div class="left-tip fl">
                <div>深入经藏</div><div>智慧如海</div>
              </div>
              <div class="right-login fr">
                <div><span class="login-title">藏经图文标注平台</span></div>
                <div class="login-tab">
                  <div id="noRole" :class="{active:1 === tabNum}" v-on:click="tabNum = 1;isAdmin = 1">普通用户</div>
                  <div id="hasRole" :class="{active:2 === tabNum}" v-on:click="tabNum = 2;isAdmin = 2">管理员用户</div>
                </div>
                <form id="form" class="clearfix" method="post">
                    <div>
                      <div class="flex-one"><label for="">账号：</label></div>
                      <div class="flex-manager"><input type="text" class="login-input input"></div>
                    </div>
                    <div>
                      <div class="flex-one"><label for="">密码：</label></div>
                      <div class="flex-manager"><input type="text" class="login-input input"></div>
                    </div>
                    <span class="forget pointer fr" v-on:click="forgetPass">忘记密码?</span>
                    <button class="form-btn" v-on:click="sendLogin($event,isAdmin)">登陆</button>
                    <span class="reg fr">没有账号
                        <router-link to="/register" target="_blank">
                          <span>立即注册</span>
                        </router-link>
                    </span>
              </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabNum: 0,
      // 普通 1 or 管理 2 
      isAdmin: 1,
      // login form
      form: {
        account: "",
        password: ""
      },
      // 背景图
      bgdiv: {
           backgroundImage: 'url(' + require('assets/login-bg.jpg') + ')'
       }
    };
  },
  methods: {
    modifyActive: (index) => {
      this.tabNum = index;
    },
    // 忘记密码
    forgetPass: () => {
      alert("弹出忘记密码框");
    },
    // 登陆
    sendLogin: (e, isAdmin) => {
      alert("登陆请求" + isAdmin);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.active {
  background-color: #d89020;
  border-color: #d89020 !important;
}
.pointer {
  cursor: pointer;
}
//清除抖动
.login {
  overflow: hidden;
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
    background: no-repeat center center;
    background-size: cover;
    border-radius: 0 0 30px 30px;
    // 左侧文字
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
    // 右侧 form
    .right-login {
      margin-top: 150px;
      padding: 0 50px;
      .login-title {
        font-size: 48px;
        color: #429bf0;
        letter-spacing: 4.8px;
      }
      .login-tab {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        div {
          // flex: 1;
          border: 1px solid #fff ;
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 2px;
          padding: 1.5% 40px;
          cursor: pointer;
        }
      }
      #form {
        margin-top: 25px;
        line-height: 50px;
        .forget {
          font-size: 14px;
          color: red;
          line-height: 30px !important;
        }
        .form-btn {
          width: 100%;
          height: 40px;
          border: 0;
          cursor: pointer;
          background-color: #d89020;
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 1px;
        }
        .reg {
          font-size: 16px;
          color: #ffffff;
          span{
            font-size: 16px;
            color: #b5071b;
            line-height: 21px;
            cursor: pointer;
          }
        }
      }
      #form > div {
        display: flex;
        justify-content: space-around;
        .login-input {
          width: 340px;
          height: 40px;
          background: transparent;
          border: 1px solid #ffffff;
          padding-left: 10px;
          font-size: 20px;
          color: #fff;
        }
        .flex-one {
          flex: 1;
        }
        .flex-manager {
          flex: 3;
        }
        label {
          font-size: 20px;
          color: #ffffff;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>
