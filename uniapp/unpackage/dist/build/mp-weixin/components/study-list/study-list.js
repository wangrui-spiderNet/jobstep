(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/study-list/study-list"],{"2bee":function(t,e,n){"use strict";n.r(e);var i=n("670e"),a=n("c5d0");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("4208");var r,c=n("f0c5"),l=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=l.exports},"40c1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{list:{type:Array,value:[]},listType:{type:String,value:""}},data:function(){return{}},methods:{goH5:function(e){var n=e.currentTarget.dataset.index;this.list[n].url_a?t.navigateTo({url:"/pages/webview/index?url="+this.list[n].url_a}):"1"==this.listType?t.navigateTo({url:"/pages/danghistory/index?id="+this.list[n].id}):t.navigateTo({url:"/pages/reading_list/index?id="+this.list[n].id})}}};e.default=n}).call(this,n("543d")["default"])},4208:function(t,e,n){"use strict";var i=n("ecba"),a=n.n(i);a.a},"670e":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},a05c:function(t,e,n){"use strict";(function(t){n("b8f1");i(n("66fd"));var e=i(n("2bee"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c5d0:function(t,e,n){"use strict";n.r(e);var i=n("40c1"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},ecba:function(t,e,n){}},[["a05c","common/runtime","common/vendor"]]]);