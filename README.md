# tagging-platform

#图文标注工具

> A Vue.js project

##npm

``` bash
# install dependencies
npm install  安装全部依赖

# serve with hot reload at localhost:3002
npm run dev  运行本地server

# build for production with minification
npm run build  打包发布

```
##yarn
``` bash
# install dependencies
npm install -g yarn  全局安装

yarn install  安装全部依赖

yarn add xxx  安装某个依赖

yarn remove xxx  删除某个依赖

```
##文件结构说明
``` bash
package.json:依赖文件
index.html:入口文件
src > http.js :  配置url请求
src > views   :  页面
src > components : 组件
src > router > index.js : 路由页面配置，如有新页面需在这里配置
src > common :公共样式，js
src > assets :图片
```
##网络请求调用说明：this.axios.get/this.axios.post ...
``` bash
例如：this.axios.get('/pagerect').then((res) => {
    this.models = res.data.models;
    if(res.data.models.length > 0){
      this.imgData = res.data.models[0];
    }
})
```
