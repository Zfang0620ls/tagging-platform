<template>
  <div class="member" v-title="'人员管理'">
    <div class="btns clearfix">
    	<span @click="goTask">任务管理</span>
    	<span class="active">人员管理</span>
    </div>
    <div class="datalist">
    	<table>
    		<thead>
    			<tr>
    				<th>账户名</th>
    				<th>角色</th>
    				<th>注册时间</th>
    				<th>累积标注量</th>
    				<th>操作</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
    			</tr>
    			<tr>
    				<td>12345678@qq.com</td>
    				<td>管理员</td>
    				<td>2018-04-30</td>
    				<td>467</td>
    				<td><span>重置密码</span><span>删除用户</span></td>
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
</template>

<script>
import Pager from '../../components/VuePager'
export default {
  components:{
    Pager
  },	
  data () {
    return {
      curpage: 1,
      totalpage:5,
    }
  },
  methods:{
  	//跳转下一页
  	goNextPage(data){
  		this.curpage = data.page;
  	},
  	//跳转到任务管理页面
  	goTask(){
  		this.$router.push({path:'/taskmanage'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.member{
		padding:0 20px 40px 20px;
		font-size:14px;
		.btns{
			margin-bottom: 20px;
			span{
				float:left;
				width: 150px;
				height:34px;
				border:1px solid #e6e6e6;
				text-align: center;
				line-height:34px;
				font-size:14px;
				cursor: pointer;
				color:#429BF0;
				&.active{
					border:1px solid #D89020;
					background-color: #D89020;
					color: #fff;
				}
			}
		}
		.create{
			width: 150px;
			height:34px;
			border:1px solid #e6e6e6;
			text-align: center;
			line-height:34px;
			cursor: pointer;
			margin-bottom: 20px;
			color:#429BF0;
		}
		.datalist{
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
</style>
