(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my_update/index"],{"32ac":function(t,a,e){"use strict";e.r(a);var n=e("fb56"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a},"4d53":function(t,a,e){},"58df":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var o=function(){var t=this,a=t.$createElement;t._self._c},i=[]},"5bd5":function(t,a,e){"use strict";(function(t){e("b8f1");n(e("66fd"));var a=n(e("d3ee"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(a.default)}).call(this,e("543d")["createPage"])},9531:function(t,a,e){"use strict";var n=e("4d53"),o=e.n(n);o.a},d3ee:function(t,a,e){"use strict";e.r(a);var n=e("58df"),o=e("32ac");for(var i in o)"default"!==i&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("9531");var s,r=e("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);a["default"]=l.exports},fb56:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(e("cf5a"));function o(t){return t&&t.__esModule?t:{default:t}}var i=getApp(),s={data:function(){return{list:[],list_key:[],list1:[],list1_key:[],userInfo:{}}},onLoad:function(){var a=this;this.list=i.globalData.configInfo.partylist.partybranch.value,this.list_key=i.globalData.configInfo.partylist.partybranch.key,this.list1=i.globalData.configInfo.partylist.partypost.value,this.list1_key=i.globalData.configInfo.partylist.partypost.key;var e=i.globalData.userInfo;if(e.id){var o=i.globalData.site_url+"/appapi/?s=User.GetBaseInfo";n.default.requestApi(o,{uid:e.id,token:e.token}).then((function(e){0!=e.data.code?(t.showToast({title:e.data.msg}),setTimeout((function(){t.redirectTo({url:"/pages/login/index"})}),1500)):(a.userInfo=e.data.info[0].userinfo,console.log(e.data.info[0].userinfo))}))}else t.redirectTo({url:"/pages/login/index"})},methods:{uploadAvatar:function(){var a=i.globalData.userInfo.id,e=i.globalData.userInfo.token,n=this;t.chooseImage({count:1,success:function(o){t.showLoading({title:"头像上传中"}),t.uploadFile({url:i.globalData.site_url+"/appapi/?s=Update.UpdateAvatar",filePath:o.tempFilePaths[0],name:"file",formData:{filename:"file",uid:a,token:e},success:function(a){console.log(a);a=JSON.parse(a.data);700==a.data.code&&(t.showToast({title:a.data.msg,icon:"none"}),setTimeout((function(){t.redirectTo({url:"/pages/login/index"})}),1500)),0==a.data.code?(n.userInfo.avatar=a.data.info[0].url,t.showToast({title:a.data.msg})):t.showToast({title:a.data.msg,icon:"none"})}})}})},submit:function(a){var e=this.userInfo.id,o=i.globalData.userInfo.token,s=a.detail.value.name,r=this.userInfo.avatar,l=this.userInfo.partybranch,u=this.userInfo.partypost,f={};f.user_nickname=s,f.avatar=r,f.partybranch=l,f.partypost=u,f=JSON.stringify(f);var c=i.globalData.site_url+"/appapi/?s=User.UpdateFields";n.default.requestApi(c,{uid:e,token:o,fields:f}).then((function(a){0!=a.data.code?t.showToast({title:a.data.msg,icon:"none"}):(t.showToast({title:a.data.msg,icon:"none"}),setTimeout((function(){t.navigateBack({delta:1})}),1500))}))},partyChange:function(t){this.userInfo.partybranch=this.list_key[t.detail.value],this.userInfo.branch=this.list[t.detail.value]},partyChange1:function(t){this.userInfo.partypost=this.list1_key[t.detail.value],this.userInfo.post=this.list1[t.detail.value]}}};a.default=s}).call(this,e("543d")["default"])}},[["5bd5","common/runtime","common/vendor"]]]);