<template>
  <div class="home" v-title="'首页'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="tabs">
        <ul class="tabs-menu">
          <li><a href="javascript:;">下载标注说明文档</a></li>
           <li><router-link to="/video" class="wa">查看往期培训视频</router-link></li>
        </ul>
      </div>
      <div class="content">
        <div class="tip">
          <p>感恩随喜各位师兄用功功德</p>
          <p>您的每一次时心、细心的标注都是在为大藏经编修事业添砖加瓦</p>
          <p>此次标注(务有2项,分别是列切分标注和字框切分标注</p>
          <p>请分别点击这2项任务进行标注</p>
        </div>
        <div class="tasklist">
          <table>
            <thead>
              <tr>
                <th>任务名称</th>
                <th>任务总量</th>
                <th>可标注量</th>
                <th>已完成量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345678@qq.com</td>
                <td>管理员</td>
                <td>2018-04-30</td>
                <td>467</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../../components/SideBar'
export default {
  components:{
      SideBar
  },
  data () {
    return {
      list: []
    }
  },
  mounted(){

  },
  methods:{

  }

}
</script>
<style lang="scss">
  @import '../../common/style/maincontent.scss'
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tabs li{
    display:inline-block;
  }
  li:first-child {
    border: 1px solid #ccc;
    text-align: center;
    width: 180px;
    background-color: #D89020;
    color: white;
    border-color: #D89020;
    height: 35px;
    line-height: 35px;
    margin-right: 15px;
    a{
      color:#fff;
    }
  }
  li:last-child{
    border: 1px solid #ccc;
    text-align: center;
    color: #5C9ACF;
    border-color: #cdcdcd;
    width: 180px;
    height: 35px;
    line-height: 35px;
    a{
      color:#429BF0;
    }
  }
  .content{
    margin-top: 20px;
    .tasklist{
      table{
        border-collapse: collapse;
        margin: 0 auto;
        width: 100%;
        thead{
          th{
            background-color: #f3f7fa;
            border: 1px solid #e6e6e6;
            text-align:center;
            font-size:14px;
            line-height: 40px;
            font-weight:bold;
            color: #5e7386;
          }
        }
        tbody{
          td{
            border: 1px solid #e6e6e6;
            color: #666;
            height: 30px;
            text-align:center;
            font-size:12px;
            padding:5px 3px;
            span{
              cursor:pointer;
              color: #429BF0;
              &:first-child{
                margin-right: 10px;
                color:#3bd2a2;
              }
            }
          }
        }

      }
    }
  }
  .tip p{
    line-height: 30px;
    color: #626262;
  }
</style>
