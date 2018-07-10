import axios from 'axios'
import router from "./router/index";
// axios 配置
// axios.defaults.timeout = 10000;
if (process.env.NODE_ENV==="production"){
  //axios.defaults.baseURL = '';
}else{
  axios.defaults.baseURL = 'http://54.223.95.136/api';
}
// 拦截器
axios.interceptors.request.use(
  config => {
    // if (window.localStorage.getItem('token')) {
    //       config.headers = {
    //           'X-Token':window.localStorage.getItem('token'),
    //           'Content-Type':"application/json;charset=UTF-8"
    //       }
    //   }
    config.headers = {
      'Content-Type':"application/json;charset=UTF-8"
    }
    return config;
  },
  err => {
    Message({
            message: '系统长时间未操作，请重新登录',
            type: 'error'
        });
    return Promise.reject(err);
  });
// code状态码200判断
axios.interceptors.response.use((res) => {
  // var code = res.data.code || res.data.CODE;
  // if(code === 401){
  //   localStorage.clear();
  //   router.push('/')
  //   return Promise.reject(res);
  // }
  return res;
}, (error) => {
  //console.log(error)
  return Promise.reject(error);
});
export default axios;
