webpackJsonp([9],{"8+eM":function(i,t){},"8hXn":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){var i=this;return{form:{pass:"",newpass:"",checkpass:""},rules:{pass:[{validator:function(i,t,e){""===t?e(new Error("请输入原密码")):e()},trigger:"blur"}],newpass:[{validator:function(i,t,e){""===t?e(new Error("请输入新密码")):e()},trigger:"blur"}],checkpass:[{validator:function(t,e,o){""===e?o(new Error("请再次输入新密码")):e!==i.form.newpass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]},dialogTableVisible:!1,dialogFormVisible:!1,formLabelWidth:"80px",centerDialogVisible:!1,singdialog:!1,msg:""}},mounted:function(){},methods:{linkTo:function(i){if(i===this.$route.path)return!0},updatePwd:function(i){var t=this;this.$refs.form.validate(function(i){i?(alert("修改成功"),t.dialogFormVisible=!1):alert("信息不正确")})}}},l={render:function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{staticClass:"index"},[o("div",{staticClass:"index-in w"},[o("div",{staticClass:"page-wrapper"},[o("div",{staticClass:"header clearfix"},[i._m(0),i._v(" "),o("div",{staticClass:"right fr"},[o("el-dropdown",{attrs:{"hide-on-click":!1,trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[o("img",{staticClass:"user",attrs:{src:e("8tHC"),alt:""}}),i._v("\n              12345678@qq.com"),o("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),i._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("span",{on:{click:function(t){i.dialogFormVisible=!0}}},[i._v("修改密码")])]),i._v(" "),o("el-dropdown-item",[o("span",{on:{click:function(t){i.singdialog=!0,i.dialogFormVisible=!1}}},[i._v("退出登录")])])],1)],1)],1)]),i._v(" "),o("el-dialog",{attrs:{title:"修改密码 :",visible:i.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){i.dialogFormVisible=t}}},[o("el-form",{ref:"form",attrs:{model:i.form,rules:i.rules}},[o("el-form-item",{attrs:{label:"原密码 :",prop:"pass","label-width":i.formLabelWidth}},[o("el-input",{attrs:{type:"password","auto-complete":"off",value:""},model:{value:i.form.pass,callback:function(t){i.$set(i.form,"pass",t)},expression:"form.pass"}})],1),i._v(" "),o("el-form-item",{attrs:{label:"新密码 :",prop:"newpass","label-width":i.formLabelWidth}},[o("el-input",{attrs:{type:"password","auto-complete":"off",value:""},model:{value:i.form.newpass,callback:function(t){i.$set(i.form,"newpass",t)},expression:"form.newpass"}})],1),i._v(" "),o("el-form-item",{attrs:{label:"确认密码 :",prop:"checkpass","label-width":i.formLabelWidth}},[o("el-input",{attrs:{type:"password","auto-complete":"off",value:""},model:{value:i.form.checkpass,callback:function(t){i.$set(i.form,"checkpass",t)},expression:"form.checkpass"}})],1)],1),i._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){i.dialogFormVisible=!1}}},[i._v("取 消")]),i._v(" "),o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){i.updatePwd("form")}}},[i._v("确 定")])],1)],1),i._v(" "),o("el-dialog",{attrs:{title:"提示",visible:i.singdialog,width:"30%"},on:{"update:visible":function(t){i.singdialog=t}}},[o("p",[i._v("您还没有完成标注任务提交,请完成标"),o("br"),i._v("\n           注任务提交后再退出,或者将未完成的"),o("br"),i._v("\n           文件保存至本地,否则您之前完成的标"),o("br"),i._v("\n           注内客将不会被系统记录保存\n         ")]),i._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){i.singdialog=!1}}},[i._v("取 消")]),i._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){i.singdialog=!1}}},[i._v("确 定退出")])],1)]),i._v(" "),o("div",{staticClass:"container clearfix"},[o("router-view")],1)],1)])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"left fl"},[t("img",{attrs:{src:e("99RW"),height:"48",width:"540",alt:""}}),this._v(" "),t("span",[this._v("欢迎您登录藏经图文标注管理平台！")])])}]};var s=e("VU/8")(o,l,!1,function(i){e("8+eM")},"data-v-0ad51b4c",null);t.default=s.exports},"8tHC":function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUJDN0ZFRjRGNEUxMUU4OTA3MEU2RDFDRjgxNjY3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUJDN0ZGMDRGNEUxMUU4OTA3MEU2RDFDRjgxNjY3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkM3RkVENEY0RTExRTg5MDcwRTZEMUNGODE2NjdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxQkM3RkVFNEY0RTExRTg5MDcwRTZEMUNGODE2NjdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ewTFYQAACLdJREFUeNrsW39MVVUc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"},"99RW":function(i,t,e){i.exports=e.p+"static/img/title.1b81aca.png"}});