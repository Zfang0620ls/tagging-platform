webpackJsonp([13],{Imtm:function(t,a){},accF:function(t,a){},"m5K/":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("mvHQ"),i=s.n(e),l=s("PmVp"),n=s("1IX/"),o=s("14gb"),c={components:{SideBar:l.a,Pager:n.a},data:function(){return{list:[],curpage:1,totalpage:0,collapse:!1}},created:function(){var t=this;o.a.$on("collapse",function(a){t.collapse=a})},mounted:function(){this.getTasklist()},methods:{getTasklist:function(){var t=this;this.axios.get("/pagetask/?page="+this.curpage).then(function(a){t.list=a.data.models||[],a.data.pagination&&(t.totalpage=a.data.pagination.total_pages);for(var s=0;s<t.list.length;s++)0==t.list[s].status?t.list[s].status="未领取":1==t.list[s].status?t.list[s].status="已过期":2==t.list[s].status?t.list[s].status="已放弃":4==t.list[s].status?t.list[s].status="处理中":5==t.list[s].status?t.list[s].status="已完成":6==t.list[s].status&&(t.list[s].status="已作废")})},goPagesplit:function(t){localStorage.setItem("pagesplitDetail",i()(t)),this.$router.push("/pagesplit")},goNextPage:function(t){this.curpage=t.page,this.getTasklist()}}},r={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{directives:[{name:"title",rawName:"v-title",value:"页切分标注任务列表",expression:"'页切分标注任务列表'"}],staticClass:"pagesplit clearfix"},[s("side-bar"),t._v(" "),s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"main-content",class:{ml:t.collapse},attrs:{collapse:t.collapse}},[s("div",{staticClass:"tasklist"},[s("table",[t._m(0),t._v(" "),s("tbody",t._l(t.list,function(a,e){return s("tr",[s("td",[t._v(t._s(a.number))]),t._v(" "),s("td",[t._v(t._s(a.status))]),t._v(" "),s("td",[t._v(t._s(a.priority))]),t._v(" "),s("td",[t._v(t._s(a.update_date))]),t._v(" "),s("td",[s("span",{on:{click:function(s){t.goPagesplit(a)}}},[t._v("开始")])])])}))]),t._v(" "),s("div",{staticClass:"page-list"},[s("pager",{attrs:{mode:"event","total-page":t.totalpage,"init-page":t.curpage},on:{"go-page":t.goNextPage}})],1)])])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("任务编号")]),t._v(" "),s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("优先级")]),t._v(" "),s("th",[t._v("更新日期")]),t._v(" "),s("th",[t._v("操作")])])])}]};var u=s("VU/8")(c,r,!1,function(t){s("accF"),s("Imtm")},"data-v-06798958",null);a.default=u.exports}});