(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danghistory/more"],{"2bee":function(t,n,e){"use strict";e.r(n);var a=e("670e"),i=e("c5d0");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("4208");var r,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=s.exports},"40c1":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(n){var e=n.currentTarget.dataset.index;this.list[e].url_a?t.navigateTo({url:"/pages/webview/index?url="+this.list[e].url_a}):"1"==this.listType?t.navigateTo({url:"/pages/danghistory/index?id="+this.list[e].id}):t.navigateTo({url:"/pages/reading_list/index?id="+this.list[e].id})}}};n.default=e}).call(this,e("543d")["default"])},4208:function(t,n,e){"use strict";var a=e("ecba"),i=e.n(a);i.a},"670e":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},"6b0c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("2bee")),i=u(e("cf5a"));function u(t){return t&&t.__esModule?t:{default:t}}var r=getApp(),o={components:{studyList:a.default},data:function(){return{list:[],page:1,isBottom:!1}},onLoad:function(){var t=this,n=r.globalData.site_url+"/appapi/?s=Home.DanghistoryList";i.default.requestApi(n,{}).then((function(n){t.list=n.data.info[0]}))},onReachBottom:function(){var n=this,e=this;if(1!=this.isBottom){var a=this.page+1;this.page=a;var u=r.globalData.site_url+"/appapi/?s=Home.DanghistoryList";i.default.requestApi(u,{p:a}).then((function(t){t.data.info[0].length<10&&(e.isBottom=!0);for(var a=n.list,i=0;i<t.data.info[0].length;i++)a.push(t.data.info[0]);n.list=a}))}else t.showToast({title:"已经到底部了",icon:"none"})},methods:{}};n.default=o}).call(this,e("543d")["default"])},7744:function(t,n,e){"use strict";e.r(n);var a=e("6b0c"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},"8b57":function(t,n,e){"use strict";(function(t){e("b8f1");a(e("66fd"));var n=a(e("fdd9"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},ba5a:function(t,n,e){"use strict";var a=e("ca16"),i=e.n(a);i.a},c5d0:function(t,n,e){"use strict";e.r(n);var a=e("40c1"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},ca16:function(t,n,e){},d523:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]},ecba:function(t,n,e){},fdd9:function(t,n,e){"use strict";e.r(n);var a=e("d523"),i=e("7744");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("ba5a");var r,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=s.exports}},[["8b57","common/runtime","common/vendor"]]]);