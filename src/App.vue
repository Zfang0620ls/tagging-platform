<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    font-family: Microsoft Yahei,Open Sans,Lantinghei SC,Hiragino Sans GB,STHeiti,WenQuanYi Micro Hei,SimSun,sans-serif,Helvetica Neue, Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height:100%;
    position: relative;
    left:0;
    top:0;
    bottom:0;
    right:0;
  }

  html,body{
    height:100%;
  }
  .w{
    width:1200px;
    margin:0 auto;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .tl{
    text-align:left;
  }
  .tc{
    text-align:center;
  }
  .tr{
    text-align:center;
  }
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    background:transparent;
  }
  body{
    font-family: Microsoft Yahei,Open Sans,Lantinghei SC,Hiragino Sans GB,STHeiti,WenQuanYi Micro Hei,SimSun,sans-serif,Helvetica Neue, Helvetica;
    background:#e0e0e0 url(assets/bg.jpg) no-repeat;
    background-size:cover;
  }
  a {
    text-decoration: none;
  }
  a:link,a:visited,a:active{
    color: #323232;
  }
  ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {vertical-align: top;}
  input,textarea{outline:none}
  fieldset,img {
    border: 0;
  }
  address,caption,cite,code,dfn,em,th,var {
    font-weight: normal;
    font-style: normal;
  }
  caption,th {
    text-align: left;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-size: 100%;
  }
  em{
    font-style:normal;
  }
  /*去除ie浏览器input中的自带删除图标*/
  input::-ms-clear{display:none;}
  /*清除浮动*/
  .clearfix:after{content:'.';display:block;width:0;visibility:hidden;height:0;clear:both;}
  .clearfix{*zoom:1;}
  .el-dropdown-menu__item{
    min-width:60px;
  }
  .el-dialog__body{
    padding:10px 20px 30px 20px;
  }
</style>
