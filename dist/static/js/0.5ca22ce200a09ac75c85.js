webpackJsonp([0],{"14gb":function(t,e,n){"use strict";var r=n("7+uW");e.a=new r.default({data:function(){return{}},computed:{},methods:{}})},"38cW":function(t,e){},"6I3e":function(t,e){},BJXf:function(t,e){},PmVp:function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("div",{staticClass:"sidebar-wrapper"},[n("div",{staticClass:"sidebar"},[n("ul",{staticClass:"sidebar-menu"},[n("li",{class:{active:t.linkTo("/home")}},[n("router-link",{attrs:{to:"/home"}},[t._v("\n                  首页\n                ")])],1),t._v(" "),n("li",{class:{active:t.linkTo("/pagetask")}},[n("router-link",{attrs:{to:"/pagetask"}},[t._v("\n                  页切分标注\n                ")])],1),t._v(" "),n("li",{class:{active:t.linkTo("/columntask")}},[n("router-link",{attrs:{to:"/columntask"}},[t._v("\n                  列切分标注\n                ")])],1),t._v(" "),n("li",{class:{active:t.linkTo("/fonttask")}},[n("router-link",{attrs:{to:"/fonttask"}},[t._v("\n                  字框切分标注\n                ")])],1),t._v(" "),n("li",{class:{active:t.linkTo("/textsplit")}},[n("router-link",{attrs:{to:"/textsplit"}},[t._v("\n                 文本识别标注\n              ")])],1)])])])])},staticRenderFns:[]};var a=n("VU/8")({data:function(){return{msg:""}},methods:{linkTo:function(t){var e=this.$route.path;if("/pagesplit"===e&&(e="/pagetask"),"/columnsplit"===e&&(e="/columntask"),"/fontsplit"===e&&(e="/fonttask"),t===e)return!0}}},r,!1,function(t){n("6I3e")},"data-v-623fc481",null);e.a=a.exports},lXEs:function(t,e,n){"use strict";var r=n("M4fF"),a=n.n(r),i=n("TVG1"),s=n("14gb"),c={methods:{handler:function(t){var e={38:"mov-up",87:"mov-up-w",37:"mov-left",65:"mov-left-a",40:"mov-down",83:"mov-down-s",39:"mov-right",68:"mov-right-d",32:"select",88:"drul",75:"delete",49:"scale-1",50:"scale-2",51:"scale-3",52:"scale-4",53:"scale-5",54:"scale-6",55:"scale-7",56:"scale-8",57:"scale-9",112:"help",8:"delete",46:"delete",27:"help",17:"ctrl"}[t.keyCode],n=t.type,r=t.shiftKey,a=t.altKey,i=t.ctrlKey;e&&("ctrl"==e&&(e="noop",i=!0),s.a.$emit("keyEvent",{type:n,action:e,modify:{enlarge:r,shrink:a,step:i}}),t.preventDefault())}},mounted:function(){window.staticfunc=this.handler,document.body.addEventListener("keydown",window.staticfunc)},beforeDestroy:function(){document.body.removeEventListener("keydown",window.staticfunc),s.a.$off("keyEvent")}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var d=n("VU/8")(c,o,!1,function(t){n("BJXf")},"data-v-56ac3bdd",null).exports,l=n("woOf"),h=n.n(l),u={props:["canvasId","drawEnable"],computed:{canvas:function(){return document.getElementById(this.canvasId)}},data:function(){return{current:{},draw:{drawing:!1,additions:null,enable:"false"!=this.drawEnable},drag:{current:null,draggable:!1,handle_size:5,point:function(t,e){return{x:t,y:e}},dist:function(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},getHandle:function(t,e){return this.dist(t,this.point(e.x,e.y))<=this.handle_size?"topleft":this.dist(t,this.point(e.x+e.w,e.y))<=this.handle_size?"topright":this.dist(t,this.point(e.x,e.y+e.h))<=this.handle_size?"bottomleft":this.dist(t,this.point(e.x+e.w,e.y+e.h))<=this.handle_size?"bottomright":this.dist(t,this.point(e.x+e.w/2,e.y))<=this.handle_size?"top":this.dist(t,this.point(e.x,e.y+e.h/2))<=this.handle_size?"left":this.dist(t,this.point(e.x+e.w/2,e.y+e.h))<=this.handle_size?"bottom":this.dist(t,this.point(e.x+e.w,e.y+e.h/2))<=this.handle_size&&"right"},mark_corner:function(t,e){this.current&&(this.current.corner=!1);var n=a.a.find(e,function(e){var n=this.getHandle(t,e);return n&&(e.corner=n),n}.bind(this));this.current=n},clear_corner:function(t){t.forEach(function(t,e){t.corner=!1}),this.draggable=!1}}}},methods:{translat_point:function(t){var e=t||window.event,n={x:0,y:0};e.pageX?(n.x=e.pageX,n.y=e.pageY):e.clientX&&(n.x=e.clientX,n.y=e.clientY);var r=this.$store.getters.scale,a=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,s=this.canvas.getBoundingClientRect().top+a,c=this.canvas.getBoundingClientRect().left+i,o=(n.y-s)/r;return{x:~~((n.x-c)/r),y:~~o}},getRectOverByPoint:function(t,e){return a.a.find(e,function(e){if(e.deleted)return!1;var n=t.x-e.x,r=t.y-e.y;return 0<=n&&n<=e.w&&0<=r&&r<=e.h})},markRectSelected:function(t,e){t&&(window.nn=this,this.current=t,this.current&&this.current.id?this.current.mselected=!1:this.current.kselmarked=!0,this.current.$=e,this.$store.commit("setCurRect",{rect:this.current}))},redraw_canvas:function(){this.$emit("drawnow",this.current),this.$store.commit("correctCurRect"),this.$store.commit("updateItemRect")}},mounted:function(){var t=this;t.canvas.onselectstart=function(t){return t.preventDefault(),!1},t.canvas.onmousedown=function(e){var n=t.$store.getters.rects;if(t.drag.current&&t.drag.current.corner)t.drag.draggable=!0;else{var r=t.translat_point(e),a=t.getRectOverByPoint(r,n);if(t.markRectSelected(a,r),window.dd=t,!a&&t.draw.enable){t.draw.drawing=!0;var i=h()({},n[0]);i.id="",i.x=r.x,i.y=r.y,t.draw.additions=i,t.$store.commit("startNewRect",{rect:i})}}t.redraw_canvas()},t.canvas.onmousemove=a.a.throttle(function(e){t.current=t.$store.getters.curRect;var n=t.translat_point(e);if(t.draw.drawing){var r=t.draw.additions;r.w=n.x-r.x,r.h=n.y-r.y,t.redraw_canvas()}else if(t.drag.draggable){var a=t.drag.current;switch(t.drag.current.corner){case"topleft":a.w+=a.x-n.x,a.h+=a.y-n.y,a.x=n.x,a.y=n.y;break;case"topright":a.w=n.x-a.x,a.h+=a.y-n.y,a.y=n.y;break;case"bottomleft":a.w+=a.x-n.x,a.x=n.x,a.h=n.y-a.y;break;case"bottomright":a.w=n.x-a.x,a.h=n.y-a.y;break;case"top":a.h+=a.y-n.y,a.y=n.y;break;case"left":a.w+=a.x-n.x,a.x=n.x;break;case"bottom":a.h=n.y-a.y;break;case"right":a.w=n.x-a.x}a.kselmarked=!0,a.changed=!0,t.$store.commit("setCurRect",{rect:a}),t.redraw_canvas()}else t.current&&t.current.mselected?(t.current.x+=n.x-t.current.$.x,t.current.y+=n.y-t.current.$.y,t.current.$.x=n.x,t.current.$.y=n.y,t.redraw_canvas()):(t.drag.mark_corner(n,t.$store.getters.rects),t.redraw_canvas());return e.preventDefault&&e.preventDefault(),!1},100),t.canvas.onmouseup=function(e){if(t.drag.draggable?t.drag.draggable=!1:t.current&&t.current.mselected&&(t.current.mselected=!1),t.draw.drawing){var n=t.draw.additions;t.$store.dispatch("closeNewRect",{rect:n,canvas:t}),t.$nextTick(function(){var t=this.translat_point(e),n=this.getRectOverByPoint(t,rects);this.markRectSelected(n,t),this.current.mselected=!1}.bind(t))}t.draw.drawing=!1,t.redraw_canvas()}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v={name:"canvasOp",components:{KeyEventOpt:d,MouseEventOpt:n("VU/8")(u,f,!1,function(t){n("38cW")},"data-v-1cfa47f8",null).exports},props:["redraw"],computed:{canvasId:function(){return"canvas-scope"}},watch:{redraw:function(){this.redraw_canvas()}},mounted:function(){s.a.$on("keyEvent",this.handleKeyEvent)},methods:{setInitCanvasImage:function(){var t=document.getElementById("canvas-scope");t.width=300,t.height=window.innerHeight;var e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,window.innerHeight);n.addColorStop(0,"#606E9A"),n.addColorStop(1,"#386093"),e.fillStyle=n,e.fillRect(0,0,300,window.innerHeight),e.strokeStyle="white",e.font="30px Arial",e.textAlign="center",e.textBaseline="middle",e.translate(t.width/2,t.height/2),e.strokeText("Operate Area",0,0),e.save()},redraw_canvas:function(){var t=document.getElementById("canvas-scope"),e=t.getContext("2d"),n=this.$store.getters.image,r=this.$store.getters.scale;if(n.empty)return e.restore();this.updateCanvas(n,t,e,r)},updateCanvas:function(t,e,n,r){e.width=t.width*r,e.height=t.height*r,n.clearRect(0,0,e.width,e.height),n.drawImage(t,0,0,t.width,t.height,0,0,t.width*r,t.height*r),this.drawAllRect(n,r)},drawAllRect:function(t,e){var n=this,r=this.$store.getters.curRect,s=this.$store.getters.rects;this.$store.getters.cover;window.rects=s,a()(s).forEach(function(a,i){t.lineWidth=2*e,t.globalAlpha=.5,a.deleted||3==a.op?(t.fillStyle="#0000a0",t.strokeStyle="#0000a0",t.lineWidth=2*e):a.changed||2==a.op?(t.strokeStyle="#D89020",t.fillStyle="#D89020",t.lineWidth=2*e):(t.strokeStyle="#666",t.fillStyle="#666",t.lineWidth=2*e),a.kselected?(t.strokeStyle="#2aa766",t.fillStyle="#2aa766",a.deleted&&(t.fillStyle="#f40")):a==r&&(t.strokeStyle="#1892e8",t.fillStyle="#1892e8",a.deleted&&(t.fillStyle="#f40"),t.lineWidth=2*e),t.strokeRect(a.x*e,a.y*e,a.w*e,a.h*e),t.fillRect(a.x*e,a.y*e,a.w*e,a.h*e),n.draw_corner(t,a,e)});var c=this.$store.getters.refRects;a()(c).forEach(function(n,r){n.red=n.red||i.a.getRed(),t.lineWidth=1.5*e,t.strokeStyle=n.red,t.strokeRect(n.x*e,n.y*e,n.w*e,n.h*e)})},draw_corner:function(t,e,n){if(e.corner){var r={x:0,y:0};switch(e.corner){case"topleft":r.x=e.x,r.y=e.y;break;case"topright":r.x=e.x+e.w,r.y=e.y;break;case"bottomleft":r.x=e.x,r.y=e.y+e.h;break;case"bottomright":r.x=e.x+e.w,r.y=e.y+e.h;break;case"top":r.x=e.x+e.w/2,r.y=e.y;break;case"left":r.x=e.x,r.y=e.y+e.h/2;break;case"bottom":r.x=e.x+e.w/2,r.y=e.y+e.h;break;case"right":r.x=e.x+e.w,r.y=e.y+e.h/2}t.beginPath(),t.arc(r.x*n,r.y*n,3,0,2*Math.PI),t.fill()}},update_canvas:function(t){this.redraw_canvas()},handleKeyEvent:function(t){"keydown"==t.type?this.$store.dispatch("handleKeyDownEvent",t):"keyup"==t.type&&this.$store.dispatch("handleKeyUpEvent",t),this.redraw_canvas(),this.$emit("scrollToRect")}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("canvas",{attrs:{id:this.canvasId}},[e("KeyEventOpt"),this._v(" "),e("MouseEventOpt",{attrs:{canvasId:this.canvasId},on:{drawnow:this.update_canvas}})],1)},staticRenderFns:[]},w=n("VU/8")(v,y,!1,null,null,null);e.a=w.exports},mvHQ:function(t,e,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,e,n){var r=n("FeBl"),a=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}}});