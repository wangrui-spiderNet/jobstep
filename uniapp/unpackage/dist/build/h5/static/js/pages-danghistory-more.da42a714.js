(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-danghistory-more","components-study-list-study-list"],{"0425":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[t._l(t.list,(function(i,e){return[a("v-uni-view",{staticClass:"study-li",attrs:{"data-index":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goH5.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"study-li-img",attrs:{src:i.thumb}}),i.url_a||"1"==t.listType?t._e():a("v-uni-image",{staticClass:"study-li-play",attrs:{src:"/static/images/play.png"}}),a("v-uni-view",{staticClass:"study-li-des"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"study-li-date"},[t._v(t._s(i.addtime))])],1)]}))],2)},s=[]},"093f":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("2bee")),s=e(a("cf5a")),u=getApp(),r={components:{studyList:n.default},data:function(){return{list:[],page:1,isBottom:!1}},onLoad:function(){var t=this,i=u.globalData.site_url+"/appapi/?s=Home.DanghistoryList";s.default.requestApi(i,{}).then((function(i){t.list=i.data.info[0]}))},onReachBottom:function(){var t=this,i=this;if(1!=this.isBottom){var a=this.page+1;this.page=a;var e=u.globalData.site_url+"/appapi/?s=Home.DanghistoryList";s.default.requestApi(e,{p:a}).then((function(a){a.data.info[0].length<10&&(i.isBottom=!0);for(var e=t.list,n=0;n<a.data.info[0].length;n++)e.push(a.data.info[0]);t.list=e}))}else uni.showToast({title:"已经到底部了",icon:"none"})},methods:{}};i.default=r},"0ac6":function(t,i,a){"use strict";var e=a("1d41"),n=a.n(e);n.a},"0c68":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"content"},[a("studyList",{attrs:{listType:"1",list:t.list}})],1)],1)},s=[]},"1d41":function(t,i,a){var e=a("bb1f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("21f3c99a",e,!0,{sourceMap:!1,shadowMode:!1})},"2bee":function(t,i,a){"use strict";a.r(i);var e=a("0425"),n=a("c5d0");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("6b7e");var u,r=a("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"0aed2318",null,!1,e["a"],u);i["default"]=o.exports},4524:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".study-li-play[data-v-0aed2318]{position:absolute;width:%?68?%;height:%?68?%;right:40%;top:21%}.study-li-date[data-v-0aed2318]{font-size:%?28?%;color:#969696}.study-li-des[data-v-0aed2318]{letter-spacing:%?1?%;width:100%;-webkit-line-clamp:2;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;height:%?92?%;overflow:hidden;font-size:%?32?%}.study-li-img[data-v-0aed2318]{width:100%;height:%?230?%}.study-li[data-v-0aed2318]{width:48.5%;float:left;margin-top:%?20?%;position:relative}.study-li[data-v-0aed2318]:nth-of-type(2n){margin-left:3%}",""]),t.exports=i},"48a3":function(t,i,a){var e=a("4524");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("25bb320c",e,!0,{sourceMap:!1,shadowMode:!1})},"6b7e":function(t,i,a){"use strict";var e=a("48a3"),n=a.n(e);n.a},7744:function(t,i,a){"use strict";a.r(i);var e=a("093f"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},bb1f:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".content[data-v-50674f02]{width:94%;margin:0 auto}",""]),t.exports=i},c5d0:function(t,i,a){"use strict";a.r(i);var e=a("c696"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},c696:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(t){var i=t.currentTarget.dataset.index;this.list[i].url_a?uni.navigateTo({url:"/pages/webview/index?url="+this.list[i].url_a}):"1"==this.listType?uni.navigateTo({url:"/pages/danghistory/index?id="+this.list[i].id}):uni.navigateTo({url:"/pages/reading_list/index?id="+this.list[i].id})}}};i.default=e},fdd9:function(t,i,a){"use strict";a.r(i);var e=a("0c68"),n=a("7744");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("0ac6");var u,r=a("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"50674f02",null,!1,e["a"],u);i["default"]=o.exports}}]);