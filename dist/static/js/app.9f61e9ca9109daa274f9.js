webpackJsonp([17],{0:function(e,t){},"5LIk":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("j1ja");var c=n("7+uW"),r=n("LgDO"),o=n.n(r),a=n("NYxO"),i=(n("TVG1"),{state:{curGlyph:null,curRect:{empty:!0},rects:[],rectsOfDel:[],refRects:[],scale:1,image:{empty:!0},cover:!1,ctrlPressed:!1},getters:{curRect:function(e){return e.curRect},rects:function(e){return e.rects},solidRects:function(e){return _.forEach(_.cloneDeep(e.rects),function(e){e.deleted&&(e.op=3)})},refRects:function(e){return e.refRects},scale:function(e){return e.scale},image:function(e){return e.image},delRects:function(e){return e.rectsOfDel},curGlyph:function(e){return e.curGlyph},cover:function(e){return e.cover},ctrlPressed:function(e){return e.ctrlPressed}},mutations:{resetAll:function(e){e.curGlyph=null,e.curRect={empty:!0},e.rects.length=0,e.scale=1,e.image={empty:!0},e.cover=!1,e.refRects.length=0},setCurGlyph:function(e,t){e.refRects=t.refRects,e.curGlyph!==t.glyph&&(e.curGlyph&&e.curGlyph.resetFocus(),e.curGlyph=t.glyph,e.curRect=t.curRect,e.rects=[t.curRect],e.image=t.image)},updateItemRect:function(e,t){e.curGlyph&&e.curGlyph.updateClip(e.curRect)},setCurRect:function(e,t){e.curRect=t.rect,e.curRect.kselmarked=!0},setRects:function(e,t){var n=_.forEach(_.deepClone(t.rects),function(e){e.w<0&&(e.x=e.x+e.w,e.w=Math.abs(e.w)),e.h<0&&(e.y=e.y+e.h,e.h=Math.abs(e.h)),e.w<5&&(e.w=5),e.h<5&&(e.h=5)});e.rects=n},setScale:function(e,t){e.scale=t.scale},setScaleForward:function(e,t){e.scale+=t.forward,e.scale<1?e.scale=1:e.scale>9&&(e.scale=9)},pushRects:function(e,t){e.rects.push(t.rect)},startNewRect:function(e,t){var n=t.rect;n.id="",n.tempId=~~(100*Math.random()),n.w=1,n.h=1,n.op=4,n.cc=.5,n.ch="",n.deleted=!1,n.created=!0,e.rects.push(n)},pullRect:function(e,t){_.pull(e.rects,t.rect)},setImage:function(e,t){e.image=t.image},setCover:function(e,t){e.cover=t.cover},setImageAndRects:function(e,t){e.rects=t.rects,e.image=t.image;var n=_.findIndex(e.rects,function(e){return 1==e.line_no&&1==e.char_no});-1!=n&&(e.curRect=e.rects[n],e.curRect.kselmarked=!0)},enlargeRect:function(e,t){var n=e.curRect,c=t.unit,r=t.action,o=t.all;(o||"mov-up"==r)&&(n.y-=c,n.h+=c),(o||"mov-right"==r)&&(n.w+=c),(o||"mov-down"==r)&&(n.h+=c),(o||"mov-left"==r)&&(n.x-=c,n.w+=c),n.op=2},shrinkRect:function(e,t){var n=e.curRect,c=t.unit,r=t.action,o=t.all;(o||"mov-down"==r)&&(n.h-=c),(o||"mov-left"==r)&&(n.w-=c,n.x+=c),(o||"mov-up"==r)&&(n.y+=c,n.h-=c),(o||"mov-right"==r)&&(n.w-=c),n.op=2},moveRect:function(e,t){var n=e.curRect,c=t.unit,r=t.action;"mov-up"!=r&&"mov-up-w"!=r||(n.y-=c),"mov-right"!=r&&"mov-right-d"!=r||(n.x+=c),"mov-down"!=r&&"mov-down-s"!=r||(n.y+=c),"mov-left"!=r&&"mov-left-a"!=r||(n.x-=c),n.op=2},correctCurRect:function(e,t){var n=e.curRect;n&&(n.x<0&&(n.x=0),n.y<0&&(n.y=0),n.y+n.h>e.image.height&&(n.y=e.image.height-n.h),n.x+n.w>e.image.width&&(n.x=e.image.width-n.w))},deleteCurRect:function(e,t){if(e.curRect.created){var n=e.curRect,c=_(e.rects).indexOf(n);_.pull(e.rects,n),c=c>=e.rects.length?e.rects.length-1:c,e.curRect=e.rects[c]||{empty:!0}}else e.curRect.deleted?e.curRect.deleted=!1:e.curRect.deleted=!0},setCtrlState:function(e,t){e.ctrlPressed=t.press},setSelectState:function(e,t){var n=e.curRect;n.kselected?n.kselected=!1:n.kselected=!0},enableSelectState:function(e,t){var n=e.curRect;n&&(n.kselected=!0)},shiftCurRect:function(e,t){var n=0,c=t.action,r=0,o=0;"mov-up-w"==c||"mov-up"==c?o-=1:"mov-down-s"==c||"mov-down"==c?o+=1:"mov-left-a"==c||"mov-left"==c?r+=1:"mov-right-d"!=c&&"mov-right"!=c||(r-=1);var a=_.findIndex(e.rects,{char_no:e.curRect.char_no+o,line_no:e.curRect.line_no+r});if(-1!=a||"mov-left-a"!=c&&"mov-right-d"!=c&&"mov-left"!=c&&"mov-right"!=c||(a=_.findIndex(e.rects,{char_no:1,line_no:e.curRect.line_no+r})),-1!=a||"mov-down-s"!=c&&"mov-down"!=c||(a=_.findIndex(e.rects,{char_no:1,line_no:e.curRect.line_no+1})),-1==a&&("mov-up-w"==c||"mov-up"==c)){var i=_.maxBy(_.filter(e.rects,{line_no:e.curRect.line_no-1},"char_no")),u=i&&i.char_no;a=_.findIndex(e.rects,{char_no:u||1,line_no:e.curRect.line_no-1})}-1==a&&(a=_.findIndex(e.rects,{char_no:1,line_no:1})),-1!=a?n=a-_(e.rects).indexOf(e.curRect):"mov-left-a"==c||"mov-up-w"==c||"mov-left"==c||"mov-up"==c?n=1:"mov-right-d"!=c&&"mov-down-s"!=c&&"mov-right"!=c&&"mov-down"!=c||(n=-1);var l=_(e.rects).indexOf(e.curRect)+n,s=e.rects.length;l=l<0?s+l:l>=s?l-s:l,e.curRect=e.rects[l],e.curRect.kselmarked=!0}},actions:{handleKeyDownEvent:function(e,t){var n=e.commit,c=e.state,r=t.action,o=c.curRect.empty?c.rects[0]:c.curRect;if(o){if(_(r).startsWith("scale")&&n("setScale",{scale:parseInt(r[r.length-1])}),"delete"==r&&(n("deleteCurRect"),n("correctCurRect"),n("updateItemRect")),"noop"==r&&t.modify.step&&n("setCtrlState",{press:!0}),"select"==r&&n("setSelectState"),["mov-left","mov-right","mov-up","mov-down"].includes(r)){var a="drul"==r,i=t.modify.step?10:2;return t.modify.enlarge?(n("enableSelectState"),n("enlargeRect",{action:r,unit:i,all:a})):t.modify.shrink?(n("enableSelectState"),n("shrinkRect",{action:r,unit:i,all:a})):o.kselected?n("moveRect",{action:r,unit:i}):n("shiftCurRect",{action:r}),n("correctCurRect"),void n("updateItemRect")}if(["mov-left-a","mov-right-d","mov-up-w","mov-down-s"].includes(r)){t.modify.step;n("shiftCurRect",{action:r}),n("correctCurRect"),n("updateItemRect")}}},handleKeyUpEvent:function(e,t){var n=e.commit;e.state;"noop"==t.action&&t.modify.step&&n("setCtrlState",{press:!1})},closeNewRect:function(e,t){e.commit;var n=e.state,c=t.rect;if(c.w<0&&(c.x+=c.w,c.w*=-1),c.h<0&&(c.y+=c.h,c.h*=-1),c.w<10||c.h<10)return _.pull(n.rects,c)}}});c.default.use(a.a);var u=new a.a.Store({state:{},mutations:{},actions:{},modules:{canvas:i}}),l=n("iqGf"),s=n.n(l),m=(n("g3Gj"),n("5LIk"),n("zL8q")),h=n.n(m),f=(n("tvR6"),n("7t+N"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var p=n("VU/8")({name:"App"},f,!1,function(e){n("xYs6")},null,null).exports,d=n("/ocq"),v=function(e){n.e(9).then(n.bind(null,"8hXn")).then(function(t){e(t)})},R=[{path:"/",component:function(e){n.e(2).then(n.bind(null,"Quw4")).then(function(t){e(t)})},name:"登录"},{path:"/register",component:function(e){n.e(5).then(n.bind(null,"c2lw")).then(function(t){e(t)})},name:"注册"},{path:"/platform",component:v,name:"首页",redirect:"/home",children:[{path:"/home",component:function(e){Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"tT4T")).then(function(t){e(t)})}},{path:"/video",component:function(e){Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"f5Jl")).then(function(t){e(t)})},name:"培训视频"}]},{path:"/platform",component:v,name:"页切分",redirect:"/pagetask",children:[{path:"/pagetask",component:function(e){Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"m5K/")).then(function(t){e(t)})},name:"页切分任务列表"},{path:"/pagesplit",component:function(e){Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"OVnw")).then(function(t){e(t)})},name:"页切分标注"}]},{path:"/platform",component:v,name:"列切分",redirect:"/columntask",children:[{path:"/columntask",component:function(e){Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"/BO1")).then(function(t){e(t)})},name:"列切分任务列表"},{path:"/columnsplit",component:function(e){Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"54Kr")).then(function(t){e(t)})},name:"列切分标注"}]},{path:"/platform",component:v,name:"字框切分",redirect:"/fonttask",children:[{path:"/fonttask",component:function(e){Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"WtvF")).then(function(t){e(t)})},name:"字框切分任务列表"},{path:"/fontsplit",component:function(e){Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"98+D")).then(function(t){e(t)})},name:"字框切分标注"}]},{path:"/platform",component:v,name:"文本识别",redirect:"/textsplit",children:[{path:"/textsplit",component:function(e){Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"dXv8")).then(function(t){e(t)})}}]},{path:"/platform",component:v,name:"任务管理",redirect:"/taskmanage",children:[{path:"/taskmanage",component:function(e){n.e(1).then(n.bind(null,"4xWL")).then(function(t){e(t)})}}]},{path:"/platform",component:v,name:"人员管理",redirect:"/membermanage",children:[{path:"/membermanage",component:function(e){n.e(3).then(n.bind(null,"98I+")).then(function(t){e(t)})}}]},{path:"/404",component:function(e){n.e(15).then(n.bind(null,"+H76")).then(function(t){e(t)})},name:""},{path:"*",redirect:{path:"/404"}}],g=new d.a({routes:R}),w=n("//Fk"),y=n.n(w),x=n("mtWM"),b=n.n(x);b.a.defaults.baseURL="http://54.223.95.136/api",b.a.interceptors.request.use(function(e){return e.headers={"Content-Type":"application/json;charset=UTF-8"},e},function(e){return Message({message:"系统长时间未操作，请重新登录",type:"error"}),y.a.reject(e)}),b.a.interceptors.response.use(function(e){return e},function(e){return y.a.reject(e)});var k=b.a;c.default.prototype.axios=k,c.default.use(o.a),c.default.use(s.a),c.default.use(d.a),c.default.use(h.a),c.default.directive("title",{inserted:function(e,t){t.value.title?document.title=t.value.title:document.title=t.value}}),new c.default({el:"#app",router:g,components:{App:p},store:u,template:"<App/>"})},TVG1:function(e,t,n){"use strict";var c=n("//Fk"),r=n.n(c),o=n("M4fF"),a=(n.n(o),{getImageClip:function(e,t,n,c,r,o){var a=document.createElement("canvas"),i=a.getContext("2d"),u=document.createElement("canvas"),l=u.getContext("2d");return a.width=t,a.height=n,u.width=e.width,u.height=e.height,l.drawImage(e,0,0),i.drawImage(u,c,r,t*o,n*o,0,0,t,n),a.toDataURL("image/png")},createImgObjWithUrl:function(e){return new r.a(function(t,n){var c=new Image;c.crossOrigin="*",c.onload=function(e){t(e)},c.onerror=function(e){n(e)},c.src=e})},getColumnImageUrlFromCode:function(e){if(/^.*_.*/.test(e))return Array.prototype.subarray=function(e,t){return t||(t=-1),this.slice(e,this.length+1- -1*t)},"https://s3.cn-north-1.amazonaws.com.cn/lqdzj-col/"+e.split("_").subarray(0,-2).join("/")+"/"+e+".jpg"},getRed:function(){var e=Math.random();return["#E43B46","#DF3B49","#E63A4A","#EB3845"][~~(4*e)]+(128+~~(128*e)).toString(16)}});t.a=a},g3Gj:function(e,t){},tvR6:function(e,t){},xYs6:function(e,t){}},["NHnr"]);