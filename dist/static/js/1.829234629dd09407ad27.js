webpackJsonp([1],{"8hXn":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l("TVG1"),i={data:function(){var e=this;return{fullscreen:!1,form:{pass:"",newpass:"",checkpass:""},rules:{pass:[{required:!0,validator:function(e,t,l){""===t?l(new Error("请输入原密码")):l()},trigger:"blur"}],newpass:[{required:!0,validator:function(t,l,s){""===l?cb(new Error("密码至少包含字母数字,6-20位")):/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(l)?(""!==e.ruleForm.checkpass&&e.$refs.ruleForm.validateField("checkpass"),cb()):cb(new Error("请输入6－20位字母数字混合密码"))},trigger:"blur"}],checkpass:[{required:!0,validator:function(t,l,s){""===l?s(new Error("请再次输入6－20位字母数字混合密码")):l!==e.ruleForm.pass?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}]},dialogFormVisible:!1,formLabelWidth:"85px",singdialog:!1}},mounted:function(){s.a.toTop()},methods:{updatePwd:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message({message:"提交失败",type:"error"}),!1;t.$message({message:"提交成功",type:"success"}),t.dialogFormVisible=!1})},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen},logout:function(){}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("div",{staticClass:"index-in w"},[s("div",{staticClass:"page-wrapper"},[s("div",{staticClass:"header clearfix"},[e._m(0),e._v(" "),s("div",{staticClass:"right fr"},[s("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),e._v(" "),s("el-dropdown",{attrs:{"hide-on-click":!1,trigger:"click"}},[s("span",{staticClass:"el-dropdown-link"},[s("img",{staticClass:"user",attrs:{src:l("8tHC"),alt:""}}),e._v("\n              12345678@qq.com"),s("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[s("span",{on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("修改密码")])]),e._v(" "),s("el-dropdown-item",[s("span",{on:{click:function(t){e.singdialog=!0,e.dialogFormVisible=!1}}},[e._v("退出登录")])])],1)],1)],1)]),e._v(" "),s("el-dialog",{staticClass:"changePass",attrs:{title:"修改密码",visible:e.dialogFormVisible,width:"30%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[s("el-form-item",{attrs:{label:"原密码：",prop:"pass","label-width":e.formLabelWidth}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码：",prop:"newpass","label-width":e.formLabelWidth}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.newpass,callback:function(t){e.$set(e.form,"newpass",t)},expression:"form.newpass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码：",prop:"checkpass","label-width":e.formLabelWidth}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.checkpass,callback:function(t){e.$set(e.form,"checkpass",t)},expression:"form.checkpass"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"warning",plain:""},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"warning"},nativeOn:{click:function(t){e.updatePwd("form")}}},[e._v("确定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"提示",visible:e.singdialog,width:"30%"},on:{"update:visible":function(t){e.singdialog=t}}},[s("p",[e._v("您还没有完成标注任务提交,请完成标"),s("br"),e._v("\n           注任务提交后再退出,或者将未完成的"),s("br"),e._v("\n           文件保存至本地,否则您之前完成的标"),s("br"),e._v("\n           注内客将不会被系统记录保存\n         ")]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"warning",plain:""},on:{click:function(t){e.singdialog=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"warning"},on:{click:function(t){e.singdialog=!1}}},[e._v("确定")])],1)]),e._v(" "),s("div",{staticClass:"container clearfix"},[s("router-view")],1)],1)]),e._v(" "),s("div",{staticClass:"ft"})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"left fl"},[t("img",{attrs:{src:l("99RW"),height:"48",width:"540",alt:""}}),this._v(" "),t("span",[this._v("欢迎您登录藏经图文标注管理平台！")])])}]};var n=l("VU/8")(i,o,!1,function(e){l("oLR5"),l("PdaD")},"data-v-0fe5d4b8",null);t.default=n.exports},"8tHC":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUJDN0ZFRjRGNEUxMUU4OTA3MEU2RDFDRjgxNjY3RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUJDN0ZGMDRGNEUxMUU4OTA3MEU2RDFDRjgxNjY3RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxQkM3RkVENEY0RTExRTg5MDcwRTZEMUNGODE2NjdGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxQkM3RkVFNEY0RTExRTg5MDcwRTZEMUNGODE2NjdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ewTFYQAACLdJREFUeNrsW39MVVUc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"},"99RW":function(e,t,l){e.exports=l.p+"static/img/title.256bbf7.png"},PdaD:function(e,t){},oLR5:function(e,t){}});