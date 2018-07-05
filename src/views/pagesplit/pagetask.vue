<template>
  <div class="pagesplit" v-title="'页切分标注'">
    <side-bar></side-bar>
    <div class="content-wrapper">
      <div class="main-content">
        <div class="tasklist">
          <table>
            <thead>
            <tr>
              <th>任务名称</th>
              <th>状态</th>
              <th>优先级</th>
              <th>已完成量</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>页切分标注</td>
              <td>管理员</td>
              <td>2018-04-30</td>
              <td>467</td>
              <td>领取</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/SideBar'; //侧边栏
export default {
  components:{
    SideBar,
   },
  data () {
    return {
      list:[]
    }
  },
  mounted(){
    this.getTasklist();
  },
  methods:{
    getTasklist(){
      this.axios.get('/pagetask').then((res) => {
        console.log(res);
      })
    }
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

</style>
