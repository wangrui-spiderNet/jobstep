(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/questionnaire_detail/index"],{"79f0":function(t,n,e){"use strict";(function(t){e("b8f1");i(e("66fd"));var n=i(e("d426"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},"9d91":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement;t._self._c},o=[]},a67a:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("cf5a"));function a(t){return t&&t.__esModule?t:{default:t}}var o=getApp(),s={data:function(){return{infos:[],id:"",list:[]}},onLoad:function(n){var e=this,a=o.globalData.userInfo.id,s=o.globalData.userInfo.token,r=o.globalData.site_url+"/appapi/?s=Home.Papershow";this.id=n.id,i.default.requestApi(r,{uid:a,token:s,id:n.id}).then((function(n){if(0!=n.data.code)return t.showToast({title:n.data.msg,icon:"none"}),void setTimeout((function(){t.redirectTo({url:"/pages/login/index"})}),1500);for(var i=void 0!=n.data.info[0].list?n.data.info[0].list:[],a=0;a<i.list.length;a++){for(var o=i.list[a],s=[],r=[],u=[],l=0;l<o.option.length;l++)s[l]=parseInt(o.count[l]/i.count_num*100),r[l]="width:"+parseInt(o.count[l]/i.count_num*100)+"%";if(i.list[a].width=s,i.list[a].widths=r,0==o.answer.length){for(l=0;l<o.option.length;l++)u[l]=0;i.list[a].answerlist=u}else i.list[a].answerlist=o.answer}e.infos=i}))},methods:{previewImage:function(n){var e=[];e.push(n),t.previewImage({urls:e,current:e[0]})},chooseAnswer:function(t){var n=this,e=t.currentTarget.dataset.index,i=t.currentTarget.dataset.key,a=this.infos.list[e],o=a.answerlist;if(1==a.count_max){if(0==o[i]){for(var s=0;s<o.length;s++)o[s]=0;o[i]=1}}else 0==o[i]?o[i]=1:o[i]=0;n.infos.list[e].answerlist=o,n.$set(n.infos.list[e],o,o),n.$forceUpdate()},submit:function(){for(var n=this,e=this,a={},s=this.infos.list,r=0;r<s.length;r++){for(var u=s[r],l=0,f=0,d=0;d<u.answerlist.length;d++)1==u.answerlist[d]&&(l=1,f+=1);if(0==l)return void t.showToast({title:"请选择答案",icon:"none"});if(f<u.count_min)return void t.showToast({title:"至少选择"+u.count_min+"个答案",icon:"none"});a[u.id]=u.answerlist}var c=o.globalData.userInfo.id,h=o.globalData.userInfo.token,p=this.infos.id,v=JSON.stringify(a),w=o.globalData.site_url+"/appapi/?s=Home.Updatepaper";i.default.requestApi(w,{uid:c,token:h,id:p,answer:v}).then((function(a){if(0==a.data.code){var s=o.globalData.site_url+"/appapi/?s=Home.Papershow";i.default.requestApi(s,{uid:c,token:h,id:n.id}).then((function(t){for(var n=t.data.info[0].list,i=0;i<n.list.length;i++){for(var a=n.list[i],o=[],s=[],r=[],u=0;u<a.option.length;u++)o[u]=parseInt(a.count[u]/n.count_num*100),s[u]="width:"+parseInt(a.count[u]/n.count_num*100)+"%";if(n.list[i].width=o,n.list[i].widths=s,0==a.answer.length){for(var l=0;l<a.option.length;l++)r[l]=0;n.list[i].answerlist=r}else n.list[i].answerlist=a.answer}e.infos=n}))}t.showToast({title:a.data.msg,icon:"none"})}))}}};n.default=s}).call(this,e("543d")["default"])},d426:function(t,n,e){"use strict";e.r(n);var i=e("9d91"),a=e("ee85");for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("dc04");var s,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=u.exports},dc04:function(t,n,e){"use strict";var i=e("f659"),a=e.n(i);a.a},ee85:function(t,n,e){"use strict";e.r(n);var i=e("a67a"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},f659:function(t,n,e){}},[["79f0","common/runtime","common/vendor"]]]);