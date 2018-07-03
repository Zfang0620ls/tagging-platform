<template>
  <div class="task" v-title="'任务管理'">
    <div class="btns clearfix">
    	<span class="active">任务管理</span>
    	<span @click="goMember">人员管理</span>
    </div>
    <div class="create" @click="taskShow">新建任务</div>
    <!-- 新建任务弹窗 -->
    <el-dialog class="taskdialog"
      title="新建标注任务"
      :visible.sync="taskVisible"
      width="60%">
      <div class="taskname">
      	<p>1.请输入任务名称</p>
      	<input type="text" name="" placeholder="请输入任务名称">
      </div>
      <div class="choosetask">
      	<p>2.请选择标任务类型&nbsp;&nbsp;注：支持任务类型多选</p>
      	<el-checkbox-group v-model="checkList">
	    <el-checkbox label="页切分标注"></el-checkbox>
	    <el-checkbox label="列切分标注"></el-checkbox>
	    <el-checkbox label="字框切分标注"></el-checkbox>
	    <el-checkbox label="文本识别标注"></el-checkbox>
	  </el-checkbox-group>
      </div>
      <div class="upload">
      	<p>3.上传标注文件&nbsp;&nbsp;注：支持批量上传JPG格式图片，一次最多上传1000个文件</p>
      	<uploader :options="options" class="uploader-example">
		    <uploader-unsupport></uploader-unsupport>
		    <uploader-drop>
		      <p class="drop">拖拽上传 or</p>
		      <uploader-btn>选择文件</uploader-btn>
		      <uploader-btn :attrs="attrs">选择图片</uploader-btn>
		      <uploader-btn :directory="true">选择文件夹</uploader-btn>
		    </uploader-drop>
		    <uploader-list></uploader-list>
	  </uploader>
      </div>
      <div class="dialog-btns">
      	<span class="confirm">完成</span>
      </div>
    </el-dialog>
    <!-- ./新建任务弹窗 -->
    <div class="datalist">
    	<table>
    		<thead>
    			<tr>
    				<th>任务名称</th>
    				<th>创建时间</th>
    				<th>创建人</th>
    				<th>任务类型</th>
    				<th>任务总量</th>
    				<th>已完成量</th>
    				<th>状态</th>
    				<th>操作</th>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
    			</tr>
    			<tr>
    				<td>标注任务1</td>
    				<td>2018-05-04</td>
    				<td>12345678@qq.com</td>
    				<td>文字识别标注</td>
    				<td>300</td>
    				<td>30</td>
    				<td>进行中</td>
    				<td><span>下载已完成数据</span><span>暂停任务分发</span></td>
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
      taskVisible:false,	
      curpage: 1,
      totalpage:5,
      checkList: [],
      options: {
	      target: '//localhost:3002/upload',
	      testChunks: false
       },
       attrs: {
	      accept: 'image/*'
        }
    }
  },
  methods:{
  	taskShow(){
  		this.taskVisible = true;
  	},
  	goNextPage(data){
  		this.curpage = data.page;
  	},
  	//跳转到人员管理页面
  	goMember(){
  		this.$router.push({path:'/membermanage'})
  	}
  }
}
</script>
<style lang="scss">
  .taskdialog{
    .el-dialog__header{
      text-align: center;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	 .uploader-example {
	    width: 100%;
	    margin: 10px auto 0;
	    font-size: 12px;
	    box-sizing:border-box;
	    -webkit-box-sizing: border-box;
		-moz-box-sizing:border-box;
	  }
	  .uploader-example .uploader-btn {
	    margin-right: 4px;
	  }
	  .uploader-example .uploader-list {
	    max-height: 440px;
	    overflow: auto;
	    overflow-x: hidden;
	    overflow-y: auto;
	  }
	  .upload-drop{
	  	background-color: #fbfbfb;
	  }
	.task{
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
		.taskdialog{
			.taskname{
				margin-bottom: 15px;
				p{
					margin-bottom: 6px;
					font-weight:bold;
				}
				input{
					display:block;
					width: 300px;
					padding:0 5px;
					height:32px;
					border:0;
					border:1px solid #ccc;
					border-radius: 3px;
				}
			}
			.choosetask{
				margin-bottom: 8px;
				p{
					margin-bottom: 4px;
					font-weight:bold;
				}
			}
			.upload{
				p{
					margin-bottom: 4px;
					font-weight:bold;
				}
				.drop{
					color:#429BF0;
				}
			}
			.dialog-btns{
				text-align:right;
				margin-top: 20px;
				 span{
					display:inline-block;
					width: 100px;
					height:34px;
					text-align:center;
					line-height:34px;
					border:1px solid #e6e6e6;
					color: #909090;
					cursor:pointer;
					&.confirm{
						border:1px solid #D89020;
						background-color:#D89020;
						color: #fff;
					}
				}
			}
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
