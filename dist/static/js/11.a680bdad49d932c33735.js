webpackJsonp([11],{"/BO1":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("3cXf"),a=i.n(e),n={components:{SideBar:i("PmVp").a},data:function(){return{list:[]}},mounted:function(){this.getTasklist()},methods:{getTasklist:function(){var t=this;this.axios.get("/columntask/").then(function(s){console.log(s),t.list=s.data.models;for(var i=0;i<t.list.length;i++)0==t.list[i].status?t.list[i].status="未领取":1==t.list[i].status?t.list[i].status="已过期":2==t.list[i].status?t.list[i].status="已放弃":4==t.list[i].status?t.list[i].status="处理中":5==t.list[i].status?t.list[i].status="已完成":6==t.list[i].status&&(t.list[i].status="已作废")})},goColumnsplit:function(t){localStorage.setItem("columnsplitDetail",a()(t)),this.$router.push("/columnsplit")}}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"title",rawName:"v-title",value:"列切分标注任务列表",expression:"'列切分标注任务列表'"}],staticClass:"columnsplit"},[i("side-bar"),t._v(" "),i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"tasklist"},[i("table",[t._m(0),t._v(" "),i("tbody",t._l(t.list,function(s,e){return i("tr",[i("td",[t._v(t._s(s.number))]),t._v(" "),i("td",[t._v(t._s(s.status))]),t._v(" "),i("td",[t._v(t._s(s.priority))]),t._v(" "),i("td",[t._v(t._s(s.update_date))]),t._v(" "),i("td",[i("span",{on:{click:function(i){t.goColumnsplit(s)}}},[t._v("开始")])])])}))])])])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("thead",[i("tr",[i("th",[t._v("任务编号")]),t._v(" "),i("th",[t._v("状态")]),t._v(" "),i("th",[t._v("优先级")]),t._v(" "),i("th",[t._v("更新日期")]),t._v(" "),i("th",[t._v("操作")])])])}]};var u=i("vSla")(n,l,!1,function(t){i("epSz"),i("gvjD")},"data-v-76283f3b",null);s.default=u.exports},epSz:function(t,s){},gvjD:function(t,s){}});