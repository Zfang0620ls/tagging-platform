webpackJsonp([7],{"8NdC":function(t,a){},sl5c:function(t,a){},tT4T:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("PmVp"),i=e("14gb"),n={components:{SideBar:s.a},data:function(){return{collapse:!1,activeName:"",list:[]}},created:function(){var t=this;i.a.$on("collapse",function(a){t.collapse=a})},mounted:function(){this.getWorkingData()},methods:{download:function(t){this.activeName=t,location.href="http://pan.bidata.com.cn/f/728a2b88e8ff4342a1de/?dl=1"},goVideo:function(t){this.activeName=t,this.$router.push("/video")},getWorkingData:function(){var t=this;this.axios.get("/task_statistics").then(function(a){t.list=a.data.data||[]})}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"title",rawName:"v-title",value:"首页",expression:"'首页'"}],staticClass:"home"},[e("side-bar"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"main-content",class:{ml:t.collapse},attrs:{collapse:t.collapse}},[e("div",{staticClass:"btns"},[e("span",{class:{active:"下载标注说明文档"===t.activeName},on:{click:function(a){t.download("下载标注说明文档")}}},[t._v("下载标注说明文档")]),t._v(" "),e("span",{class:{active:"查看往期培训视频"===t.activeName},on:{click:function(a){t.goVideo("查看往期培训视频")}}},[t._v("查看往期培训视频")])]),t._v(" "),e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"tasklist"},[e("table",[t._m(1),t._v(" "),e("tbody",t._l(t.list,function(a,s){return e("tr",[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.count))]),t._v(" "),e("td",[t._v(t._s(a.rect_avail))]),t._v(" "),e("td",[t._v(t._s(a.rect_completed))])])}))])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip"},[a("p",[this._v("感恩随喜各位师兄用功功德!")]),this._v(" "),a("p",[this._v("您的每一次时心、细心的标注都是在为大藏经编修事业添砖加瓦!")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("任务名称")]),this._v(" "),a("th",[this._v("任务总量")]),this._v(" "),a("th",[this._v("可标注量")]),this._v(" "),a("th",[this._v("已完成量")])])])}]};var o=e("VU/8")(n,c,!1,function(t){e("sl5c"),e("8NdC")},"data-v-d85f2502",null);a.default=o.exports}});