(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/index"],{"02c6":function(t,e,n){},"097e":function(t,e,n){"use strict";n.r(e);var a=n("3c8a"),i=n("98be");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7d4a");var u,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);e["default"]=c.exports},"2e11":function(t,e,n){"use strict";(function(t){n("b8f1");a(n("66fd"));var e=a(n("097e"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"3c8a":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},"7d4a":function(t,e,n){"use strict";var a=n("02c6"),i=n.n(a);i.a},9491:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("cf5a"));function i(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),u={data:function(){return{list:[],page:1,isBottom:!1}},onLoad:function(){var t=this,e=o.globalData.site_url+"/appapi/?s=Home.Notice";a.default.requestApi(e,{}).then((function(e){t.list=e.data.info[0].list}))},onReachBottom:function(){var e=this,n=this;if(1!=this.isBottom){var i=this.page+1;this.page=i;var u=o.globalData.site_url+"/appapi/?s=Home.Notice";a.default.requestApi(u,{listid:id,p:i}).then((function(t){t.data.info[0].list.length<10&&(n.isBottom=!0);for(var a=e.list,i=0;i<t.data.info[0].list.length;i++)a.push(t.data.info[0][i]);e.list=a}))}else t.showToast({title:"已经到底部了",icon:"none"})},methods:{goH5:function(t){}}};e.default=u}).call(this,n("543d")["default"])},"98be":function(t,e,n){"use strict";n.r(e);var a=n("9491"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["2e11","common/runtime","common/vendor"]]]);