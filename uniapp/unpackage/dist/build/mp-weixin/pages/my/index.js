(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"3aa0":function(n,e,t){"use strict";t.r(e);var o=t("774d"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a},"3c8a6":function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},"774d":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("cf5a"));function a(n){return n&&n.__esModule?n:{default:n}}var i=function(){t.e("components/nav-title/nav-title").then(function(){return resolve(t("3b69"))}.bind(null,t)).catch(t.oe)},u=getApp(),r={components:{navTitle:i},data:function(){return{userInfo:{}}},onShow:function(){var e=this,t=u.globalData.userInfo;if(t.id){var a=u.globalData.site_url+"/appapi/?s=User.GetBaseInfo";o.default.requestApi(a,{uid:t.id,token:t.token}).then((function(t){0!=t.data.code?(n.showToast({title:t.data.msg,icon:"none"}),setTimeout((function(){n.redirectTo({url:"/pages/login/index"})}),1500)):e.userInfo=t.data.info[0].userinfo}))}else n.redirectTo({url:"/pages/login/index"})},methods:{goAnsHistory:function(){n.navigateTo({url:"../answer_history/answer_history"})},goRanking:function(){n.navigateTo({url:"../ranking/ranking"})},resetPass:function(){n.navigateTo({url:"../forget/index"})},logOut:function(){n.removeStorage({key:"userInfo"}),u.globalData.userInfo={},n.redirectTo({url:"/pages/login/index"})},goHome:function(){n.navigateTo({url:"/pages/index/index"})},goMessage:function(){n.navigateTo({url:"/pages/notice/index"})},goHistory:function(){n.navigateTo({url:"/pages/my_history/index"})},goCollection:function(){n.navigateTo({url:"/pages/my_collection/index"})},goThink:function(){n.navigateTo({url:"/pages/my_think/index"})},goUpdate:function(){n.navigateTo({url:"/pages/my_update/index"})}}};e.default=r}).call(this,t("543d")["default"])},b7a4:function(n,e,t){},d05e:function(n,e,t){"use strict";t.r(e);var o=t("3c8a6"),a=t("3aa0");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("e2f9");var u,r=t("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=c.exports},d8a2:function(n,e,t){"use strict";(function(n){t("b8f1");o(t("66fd"));var e=o(t("d05e"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},e2f9:function(n,e,t){"use strict";var o=t("b7a4"),a=t.n(o);a.a}},[["d8a2","common/runtime","common/vendor"]]]);