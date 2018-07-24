<template>
  <div class="home" v-title="'首页'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content" :collapse="collapse"  v-bind:class="{ ml: collapse }">
        <div class="btns">
          <span :class="{active:activeName === '下载标注说明文档'}" @click="download('下载标注说明文档')">下载标注说明文档</span>
          <span :class="{active:activeName === '查看往期培训视频'}" @click="goVideo('查看往期培训视频')">查看往期培训视频</span>
        </div>
        <div class="content">
        <div class="tip">
          <p>感恩随喜各位师兄用功功德!</p>
          <p>您的每一次时心、细心的标注都是在为大藏经编修事业添砖加瓦!</p>
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
              <tr v-for="(item,index) in list">
                <td>{{item.name}}</td>
                <td>{{item.count}}</td>
                <td>{{item.rect_avail}}</td>
                <td>{{item.rect_completed}}</td>
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
import SideBar from '../../components/SideBar';
import bus from '@/bus';
export default {
  components:{
      SideBar
  },
  data () {
    return {
      collapse:false,
      activeName: '',
      list: []
    }
  },
  created(){
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  },
  mounted(){
    this.getWorkingData();
  },
  methods:{
    download(curname){
      this.activeName = curname;
      location.href = 'http://pan.bidata.com.cn/f/728a2b88e8ff4342a1de/?dl=1';
    },
    goVideo(curname){
      this.activeName = curname;
      this.$router.push('/video');
    },
    getWorkingData(){
      this.axios.get('/task_statistics').then((res) => {
        //console.log(res);
        this.list = res.data.data || [];
      })
    }
  }

}
</script>
<style lang="scss">
  @import '../../common/style/maincontent.scss';
  @import '../../common/style/common.scss';
  @import '../../common/style/table.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .tabs li{
    display:inline-block;
  }
  li:first-child {
    border: 1px solid #e6e6e6;
    text-align: center;
    width: 145px;
    background-color: #fff;
    color: #429BF0;
    height: 35px;
    line-height: 35px;
    margin-right: 15px;
    a{
      color:#429BF0;
      font-size:14px;
    }
    &:hover{
      border-color:#429BF0;
    }
  }
  li:last-child{
    border: 1px solid #e6e6e6;
    text-align: center;
    color: #429BF0;
    width: 145px;
    height: 35px;
    line-height: 35px;
    a{
      color:#429BF0;
      font-size:14px;
    }
    &:hover{
      border-color:#429BF0;
    }
  }
  .content{
    margin-top: 20px;
  }
  .tip {
    margin-bottom:20px;
    padding:15px 10px;
    background-color: #f8f8f8;
    position: relative;
    border-radius:3px;
    &:after{
      position: absolute;
      content:"";
      left:3px;
      top:6px;
      width:300px;
      height:516px;
      background:url(../../assets/hehua.png) no-repeat;
      background-size:41px 70px;
    }
    p{
      line-height: 26px;
      color: #c3bbad;
      font-size:14px;
      padding-left:43px;
    }
  }
</style>
