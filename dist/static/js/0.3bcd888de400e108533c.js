webpackJsonp([0],{"14gb":function(t,e,a){"use strict";var n=a("7+uW");e.a=new n.default({data:function(){return{}},computed:{},methods:{}})},"1IX/":function(t,e,a){"use strict";var n=a("TGd1"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.totalPage>1?a("div",{staticClass:"pager-wrapper"},[a("div",{staticClass:"pager-pages"},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.currentPage>1&&t.showPrev,expression:"currentPage > 1 && showPrev"}],on:{click:function(e){t.go(t.currentPage-1)}}},[t._v("<")]),t._v(" "),a("a",{class:{active:1==t.currentPage},on:{click:function(e){t.go(1)}}},[t._v("1")]),t._v(" "),a("b",{directives:[{name:"show",rawName:"v-show",value:t.pages[0]>2,expression:"pages[0] > 2"}]},[t._v("...")]),t._v(" "),t._l(t.pages,function(e){return a("a",{class:{active:t.currentPage==e},on:{click:function(a){t.go(e)}}},[t._v(t._s(e))])}),t._v(" "),a("b",{directives:[{name:"show",rawName:"v-show",value:t.pages[t.pages.length-1]<t.totalPage-1,expression:"pages[pages.length-1] < totalPage - 1"}]},[t._v("...")]),t._v(" "),t.totalPage>1?a("a",{class:{active:t.currentPage==t.totalPage},on:{click:function(e){t.go(t.totalPage)}}},[t._v(t._s(t.totalPage))]):t._e(),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.currentPage<t.totalPage&&t.showNext,expression:"currentPage < totalPage && showNext"}],on:{click:function(e){t.go(t.currentPage+1)}}},[t._v(">")])],2),t._v(" "),t.showJump?a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalPage>1,expression:"totalPage > 1"}],staticClass:"pager-jump"},[a("span",[t._v("共"),a("em",{staticClass:"jump-total"},[t._v(t._s(t.totalPage))]),t._v("页， 跳转到第")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.jumpPage,expression:"jumpPage"}],staticClass:"jump-input",attrs:{type:"number",autocomplete:"off",min:"1",max:t.totalPage,onkeypress:"return (/[\\d]/.test(String.fromCharCode(event.keyCode)))"},domProps:{value:t.jumpPage},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.jumpPage)},input:function(e){e.target.composing||(t.jumpPage=e.target.value)}}}),t._v(" "),a("span",[t._v("页")]),t._v(" "),a("span",{staticClass:"go",on:{click:function(e){t.go(t.jumpPage)}}},[t._v("确定")])]):t._e()]):t._e()},staticRenderFns:[]};var s=function(t){a("NjU7")},i=a("VU/8")(n.a,r,!1,s,null,null);e.a=i.exports},"55AH":function(t,e){},AdAM:function(t,e){},NjU7:function(t,e){},PmVp:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-wrapper"},[a("div",{staticClass:"sidebar"},[a("ul",{staticClass:"sidebar-menu"},[a("li",{class:{active:t.linkTo("/home")}},[a("router-link",{attrs:{to:"/home"}},[t._v("\n                首页\n              ")])],1),t._v(" "),a("li",{class:{active:t.linkTo("/pagetask")}},[a("router-link",{attrs:{to:"/pagetask"}},[t._v("\n                页切分标注\n              ")])],1),t._v(" "),a("li",{class:{active:t.linkTo("/columntask")}},[a("router-link",{attrs:{to:"/columntask"}},[t._v("\n                列切分标注\n              ")])],1),t._v(" "),a("li",{class:{active:t.linkTo("/fonttask")}},[a("router-link",{attrs:{to:"/fonttask"}},[t._v("\n                字框切分标注\n              ")])],1),t._v(" "),a("li",{class:{active:t.linkTo("/textsplit")}},[a("router-link",{attrs:{to:"/textsplit"}},[t._v("\n               文本识别标注\n            ")])],1)])])])},staticRenderFns:[]};var r=a("VU/8")({data:function(){return{msg:""}},methods:{linkTo:function(t){var e=this.$route.path;if("/pagesplit"===e&&(e="/pagetask"),"/columnsplit"===e&&(e="/columntask"),"/fontsplit"===e&&(e="/fonttask"),t===e)return!0}}},n,!1,function(t){a("55AH")},"data-v-75e0043e",null);e.a=r.exports},TGd1:function(t,e,a){"use strict";(function(t){e.a={props:{totalPage:{type:Number,default:1,required:!0},showItems:{type:Number,default:5},showPrev:{type:Boolean,default:!0},showNext:{type:Boolean,default:!0},showJump:{type:Boolean,default:!0},initPage:{type:Number,default:1},mode:{type:String,default:"event"},routeName:{type:String}},data:function(){return{currentPage:0,jumpPage:0}},created:function(){if(this.currentPage=this.initPage,"params"===this.mode&&!this.routeName)throw"need a route name when choose params mode in pager component"},computed:{pages:function(){var t=this,e=function(e,a){(e<=1||e>a||e>=t.totalPage)&&(e=2),(a>=t.totalPage||a<e||a<=1)&&(a=t.totalPage-1);for(var n=[],r=e;r<=a;r++)n.push(r);return n},a=this.showItems;if(this.totalPage<a+2)return e(2,this.totalPage);if(this.currentPage<=Math.ceil(a/2))return e(2,a);if(this.currentPage>=this.totalPage-Math.floor(a/2))return e(this.totalPage+1-a,this.totalPage-1);var n=Math.ceil(a/2)-1,r=this.currentPage+n;return a%2==0&&r++,e(this.currentPage-n,r)}},methods:{go:function(e){if(!(e<1||e>this.totalPage||e===this.currentPage))if(this.currentPage=parseInt(e,10),"params"===this.mode){var a=this.$route.params;a.page=this.currentPage,console.log(a.page),this.$router.push({name:this.routeName,params:a}),t("body,html").animate({scrollTop:0},10)}else this.$emit("go-page",{page:this.currentPage})},num:function(t){(t.keyCode<48||t.keyCode>57)&&8!==t.keyCode&&t.preventDefault()}},watch:{currentPage:function(t){this.jumpPage=t},initPage:function(t){this.currentPage!==t&&(this.currentPage=t)}}}}).call(e,a("7t+N"))},dfVi:function(t,e){},lXEs:function(t,e,a){"use strict";var n=a("M4fF"),r=a.n(n),s=a("TVG1"),i=a("14gb"),o={methods:{handler:function(t){var e={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",8:"delete",46:"delete",27:"help",17:"ctrl"}[t.keyCode],a=t.type,n=t.shiftKey,r=t.altKey,s=t.ctrlKey;e&&("ctrl"==e&&(e="noop",s=!0),i.a.$emit("keyEvent",{type:a,action:e,modify:{enlarge:n,shrink:r,step:s}}),t.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),i.a.$off("keyEvent")}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("AdAM")},"data-v-107be1fd",null).exports,u=a("woOf"),d=a.n(u),h={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(t,e){return{x:t,y:e}},dist:function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},getHandle:function(t,e){return this.dist(t,this.point(e.x,e.y))<=this.handle_size?"topleft":this.dist(t,this.point(e.x+e.w,e.y))<=this.handle_size?"topright":this.dist(t,this.point(e.x,e.y+e.h))<=this.handle_size?"bottomleft":this.dist(t,this.point(e.x+e.w,e.y+e.h))<=this.handle_size?"bottomright":this.dist(t,this.point(e.x+e.w/2,e.y))<=this.handle_size?"top":this.dist(t,this.point(e.x,e.y+e.h/2))<=this.handle_size?"left":this.dist(t,this.point(e.x+e.w/2,e.y+e.h))<=this.handle_size?"bottom":this.dist(t,this.point(e.x+e.w,e.y+e.h/2))<=this.handle_size&&"right"},mark_corner:function(t,e){this.current&&(this.current.corner=!1);var a=r.a.find(e,function(e){var a=this.getHandle(t,e);return a&&(e.corner=a),a}.bind(this));this.current=a},clear_corner:function(t){t.forEach(function(t,e){t.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(t){var e=t||window.event,a={x:0,y:0};e.pageX?(a.x=e.pageX,a.y=e.pageY):e.clientX&&(a.x=e.clientX,a.y=e.clientY);var n=this.$store.getters.scale,r=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,s=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,i=this.canvas.getBoundingClientRect().top+r,o=this.canvas.getBoundingClientRect().left+s,c=(a.y-i)/n;return{x:~~((a.x-o)/n),y:~~c}},getRectOverByPoint:function(t,e){return r.a.find(e,function(e){if(e.deleted)return!1;var a=t.x-e.x,n=t.y-e.y;return 0<=a&&a<=e.w&&0<=n&&n<=e.h})},markRectSelected:function(t,e){t&&(window.nn=this,this.current=t,this.current&&this.current.id?this.current.mselected=!1:this.current.kselmarked=!0,this.current.$=e,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var t=this;t.canvas.onselectstart=function(t){return t.preventDefault(),!1},t.canvas.onmousedown=function(e){var a=t.$store.getters.rects;if(t.drag.current&&t.drag.current.corner)t.drag.draggable=!0;else{var n=t.translat_point(e),r=t.getRectOverByPoint(n,a);if(t.markRectSelected(r,n),window.dd=t,!r&&t.draw.enable){t.draw.drawing=!0;var s=d()({},a[0]);s.id="",s.x=n.x,s.y=n.y,t.draw.additions=s,t.$store.commit("startNewRect",{rect:s})}}t.redraw_canvas()},t.canvas.onmousemove=r.a.throttle(function(e){t.current=t.$store.getters.curRect;var a=t.translat_point(e);if(t.draw.drawing){var n=t.draw.additions;n.w=a.x-n.x,n.h=a.y-n.y,t.redraw_canvas()}else if(t.drag.draggable){var r=t.drag.current;switch(t.drag.current.corner){case"topleft":r.w+=r.x-a.x,r.h+=r.y-a.y,r.x=a.x,r.y=a.y;break;case"topright":r.w=a.x-r.x,r.h+=r.y-a.y,r.y=a.y;break;case"bottomleft":r.w+=r.x-a.x,r.x=a.x,r.h=a.y-r.y;break;case"bottomright":r.w=a.x-r.x,r.h=a.y-r.y;break;case"top":r.h+=r.y-a.y,r.y=a.y;break;case"left":r.w+=r.x-a.x,r.x=a.x;break;case"bottom":r.h=a.y-r.y;break;case"right":r.w=a.x-r.x}r.kselmarked=!0,r.changed=!0,t.$store.commit("setCurRect",{rect:r}),t.redraw_canvas()}else t.current&&t.current.mselected?(t.current.x+=a.x-t.current.$.x,t.current.y+=a.y-t.current.$.y,t.current.$.x=a.x,t.current.$.y=a.y,t.redraw_canvas()):(t.drag.mark_corner(a,t.$store.getters.rects),t.redraw_canvas());return e.preventDefault&&e.preventDefault(),!1},100),t.canvas.onmouseup=function(e){if(t.drag.draggable?t.drag.draggable=!1:t.current&&t.current.mselected&&(t.current.mselected=!1),t.draw.drawing){var a=t.draw.additions;t.$store.dispatch("closeNewRect",{rect:a,canvas:t}),t.$nextTick(function(){var t=this.translat_point(e),a=this.getRectOverByPoint(t,rects);this.markRectSelected(a,t),this.current.mselected=!1}.bind(t))}t.draw.drawing=!1,t.redraw_canvas()}}},v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var g={name:"canvasOp",components:{KeyEventOpt:l,MouseEventOpt:a("VU/8")(h,v,!1,function(t){a("dfVi")},"data-v-11bff3d0",null).exports},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},mounted:function(){i.a.$on("keyEvent",this.handleKeyEvent)},methods:{redraw_canvas:function(){var t=document.getElementById("canvas-scope"),e=t.getContext("2d"),a=this.$store.getters.image,n=this.$store.getters.scale;if(a.empty)return e.restore();this.updateCanvas(a,t,e,n)},updateCanvas:function(t,e,a,n){e.width=t.width*n,e.height=t.height*n,a.clearRect(0,0,e.width,e.height),a.drawImage(t,0,0,t.width,t.height,0,0,t.width*n,t.height*n),this.drawAllRect(a,n)},drawAllRect:function(t,e){var a=this,n=this.$store.getters.curRect,i=this.$store.getters.rects;this.$store.getters.cover;window.rects=i,r()(i).forEach(function(r,s){t.lineWidth=2*e,t.globalAlpha=.5,r.deleted||3==r.op?(t.fillStyle="#0000a0",t.strokeStyle="#0000a0",t.lineWidth=2*e):r.changed||2==r.op?(t.strokeStyle="#D89020",t.fillStyle="#D89020",t.lineWidth=2*e):(t.strokeStyle="#666",t.fillStyle="#666",t.lineWidth=2*e),r.kselected?(t.strokeStyle="#2aa766",t.fillStyle="#2aa766",r.deleted&&(t.strokeStyle="#f40",t.fillStyle="#f40")):r==n&&(t.strokeStyle="#1892e8",t.fillStyle="#1892e8",r.deleted&&(t.strokeStyle="#f40",t.fillStyle="#f40"),t.lineWidth=2*e),t.strokeRect(r.x*e,r.y*e,r.w*e,r.h*e),t.fillRect(r.x*e,r.y*e,r.w*e,r.h*e),a.draw_corner(t,r,e)});var o=this.$store.getters.refRects;r()(o).forEach(function(a,n){a.red=a.red||s.a.getRed(),t.lineWidth=1.5*e,t.strokeStyle=a.red,t.strokeRect(a.x*e,a.y*e,a.w*e,a.h*e)})},draw_corner:function(t,e,a){if(e.corner){var n={x:0,y:0};switch(e.corner){case"topleft":n.x=e.x,n.y=e.y;break;case"topright":n.x=e.x+e.w,n.y=e.y;break;case"bottomleft":n.x=e.x,n.y=e.y+e.h;break;case"bottomright":n.x=e.x+e.w,n.y=e.y+e.h;break;case"top":n.x=e.x+e.w/2,n.y=e.y;break;case"left":n.x=e.x,n.y=e.y+e.h/2;break;case"bottom":n.x=e.x+e.w/2,n.y=e.y+e.h;break;case"right":n.x=e.x+e.w,n.y=e.y+e.h/2}t.fillStyle="#FF0000",t.beginPath(),t.arc(n.x*a,n.y*a,3,0,2*Math.PI),t.fill()}},update_canvas:function(t){this.redraw_canvas()},handleKeyEvent:function(t){"keydown"==t.type?this.$store.dispatch("handleKeyDownEvent",t):"keyup"==t.type&&this.$store.dispatch("handleKeyUpEvent",t),this.redraw_canvas(),this.$emit("scrollToRect")}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("canvas",{attrs:{id:this.canvasId}},[e("KeyEventOpt"),this._v(" "),e("MouseEventOpt",{attrs:{canvasId:this.canvasId},on:{drawnow:this.update_canvas}})],1)},staticRenderFns:[]},p=a("VU/8")(g,f,!1,null,null,null);e.a=p.exports},mvHQ:function(t,e,a){t.exports={default:a("qkKv"),__esModule:!0}},qkKv:function(t,e,a){var n=a("FeBl"),r=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}}});