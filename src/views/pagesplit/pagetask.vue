<template>
  <div class="pagesplit clearfix" v-title="'页切分标注任务列表'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content" :collapse="collapse"  v-bind:class="{ ml: collapse }">
        <div class="tasklist">
          <table>
            <thead>
            <tr>
              <th>任务编号</th>
              <th>状态</th>
              <th>优先级</th>
              <th>更新日期</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list">
              <td>{{item.number}}</td>
              <td>{{item.status}}</td>
              <td>{{item.priority}}</td>
              <td>{{item.update_date}}</td>
              <td><span @click="goPagesplit(item)">开始</span></td>
            </tr>
            </tbody>
          </table>
          <!--分页组件-->
          <div class="page-list">
            <pager
              mode="event"
              :total-page="totalpage"
              :init-page="curpage"
              @go-page="goNextPage">
            </pager>
          </div>
          <!--./分页组件-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'; //侧边栏
import Pager from '../../components/VuePager';
import bus from '@/bus';
export default {
  components:{
    SideBar,
    Pager
   },
  data () {
    return {
      list:[],
      curpage:1,
      totalpage:0,
      collapse:false
    }
  },
  created(){
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
    })
  },
  mounted(){
    this.getTasklist();
  },
  methods:{
    getTasklist(){
      this.axios.get('/pagetask/?page='+this.curpage).then((res) => {
        //console.log(res);
        this.list = res.data.models || [];
        if(res.data.pagination){
          this.totalpage = res.data.pagination.total_pages;
        }
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].status == 0){
                this.list[i].status = '未领取'
            }else if(this.list[i].status == 1){
                this.list[i].status = '已过期'
            }else if(this.list[i].status == 2){
              this.list[i].status = '已放弃'
            }else if(this.list[i].status == 4){
              this.list[i].status = '处理中'
            }else if(this.list[i].status == 5){
              this.list[i].status = '已完成'
            }else if(this.list[i].status == 6){
              this.list[i].status = '已作废'
            }
        }

      })
    },
    goPagesplit(item){
      localStorage.setItem('pagesplitDetail',JSON.stringify(item));
      this.$router.push('/pagesplit');
    },
    //分页跳转
    goNextPage(data){
//      console.log(data.page);
      this.curpage = data.page;
      this.getTasklist();
    },
  }
}
</script>
<style lang="scss">
  .introdialog{
    .el-dialog__header{
      text-align: center;
    }
  }
  @import '../../common/style/maincontent.scss';
  @import '../../common/style/table.scss';
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
