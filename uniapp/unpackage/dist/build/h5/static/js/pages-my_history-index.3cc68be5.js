(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my_history-index","components-article-list-article-list"],{"088c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),i={props:{list:{type:Array,value:[]}},data:function(){return{}},methods:{goH5:function(e){t("log",e.currentTarget," at components/article-list/article-list.vue:33"),"1"!=a.globalData.first_read&&uni.request({url:a.globalData.site_url+"/appapi/?s=Home.AddReadScore",method:"GET",data:{uid:a.globalData.userInfo.id,token:a.globalData.userInfo.token,news_id:e.currentTarget.dataset.id},success:function(t){if(0==t.data.data.code){var e=t.data.data.info["score"];uni.showToast({title:"积分+"+e,image:"../../static/images/jifen_shan.png",mask:!0,duration:2e3})}}}),uni.navigateTo({url:"/pages/webview/index?url="+e.currentTarget.dataset.url})}}};e.default=i}).call(this,a("0de9")["log"])},"0de9":function(t,e,a){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"===typeof __channelId__&&__channelId__}function r(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function o(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),i=1;i<e;i++)a[i-1]=arguments[i];console[t].apply(console,a)}function l(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var o=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var l=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var a=i(t).toUpperCase();t="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+t+"---END:"+a+"---":String(t)}return t})),s="";if(l.length>1){var u=l.pop();s=l.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=l[0];console[o](s)}a.r(e),a.d(e,"log",(function(){return o})),a.d(e,"default",(function(){return l}))},"0fb5":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".article-list-li-right-date[data-v-5adc1a9e]{font-size:%?28?%;margin-top:%?46?%;color:#969696}.article-list-li-right-title[data-v-5adc1a9e]{font-size:%?36?%;letter-spacing:%?1?%;font-weight:500;overflow:hidden;-webkit-line-clamp:2;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;height:%?98?%}.article-list-li-right[data-v-5adc1a9e]{float:left;width:64%;margin-left:4%}.article-list-li[data-v-5adc1a9e]{clear:both;overflow:hidden;height:%?170?%;padding:%?40?% 0 %?40?% 0;border-bottom:%?1?% solid #f0f0f0;width:100%}.article-list-li-thumb[data-v-5adc1a9e]{width:32%;height:100%;float:left}",""]),t.exports=e},"27c0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".logout[data-v-7ed2b73e]{width:%?210?%;height:%?80?%;text-align:center;margin:0 auto;margin-top:%?120?%;color:#b4b4b4;border-radius:%?60?%;font-size:%?28?%;line-height:%?80?%;border:%?1?% solid #b4b4b4}.history-list[data-v-7ed2b73e]{width:94%;margin:0 auto}",""]),t.exports=e},"2d08":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t._l(t.list,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"article-list-li",attrs:{"data-id":e.id,"data-url":e.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goH5.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"article-list-li-thumb",attrs:{src:e.thumb}}),a("v-uni-view",{staticClass:"article-list-li-right"},[a("v-uni-view",{staticClass:"article-list-li-right-title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"article-list-li-right-date"},[t._v(t._s(e.date))])],1)],1)]}))],2)},r=[]},"3d07":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"history-list"},[a("articleList",{attrs:{list:t.list}})],1),t.list.length>0?a("v-uni-view",{staticClass:"logout",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteList.apply(void 0,arguments)}}},[t._v("清除记录")]):t._e()],1)},r=[]},5244:function(t,e,a){"use strict";a.r(e);var i=a("3d07"),n=a("9945");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e2605");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"7ed2b73e",null,!1,i["a"],o);e["default"]=s.exports},"573c":function(t,e,a){"use strict";var i=a("945b"),n=a.n(i);n.a},"7d77":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("9f9b")),r=i(a("cf5a")),o=getApp(),l={components:{articleList:n.default},data:function(){return{list:[],page:1,isBottom:!1}},onLoad:function(){var t=this,e=o.globalData.userInfo.id,a=o.globalData.userInfo.token,i=o.globalData.site_url+"/appapi/?s=User.History";r.default.requestApi(i,{uid:e,token:a,p:1}).then((function(e){t.list=e.data.info[0].list}))},onReachBottom:function(){var t=this,e=this;if(1!=this.isBottom){var a=this.page+1;this.page=a;var i=o.globalData.userInfo.id,n=o.globalData.userInfo.token,l=o.globalData.site_url+"/appapi/?s=User.History";r.default.requestApi(l,{uid:i,token:n,p:a}).then((function(a){a.data.info[0].list.length<10&&(e.isBottom=!0);for(var i=t.list,n=0;n<a.data.info[0].list.length;n++)i.push(a.data.info[0][n]);t.list=i}))}else uni.showToast({title:"已经到底部了",icon:"none"})},methods:{deleteList:function(){var t=this,e=o.globalData.userInfo.id,a=o.globalData.userInfo.token,i=o.globalData.site_url+"/appapi/?s=User.Cleanhistory";r.default.requestApi(i,{uid:e,token:a}).then((function(e){0==e.data.code&&(t.list=[]),uni.showToast({title:e.data.msg,icon:"none"})}))}}};e.default=l},"945b":function(t,e,a){var i=a("0fb5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0cbcbd94",i,!0,{sourceMap:!1,shadowMode:!1})},"95b5":function(t,e,a){var i=a("27c0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("41f77a4c",i,!0,{sourceMap:!1,shadowMode:!1})},9945:function(t,e,a){"use strict";a.r(e);var i=a("7d77"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"9f9b":function(t,e,a){"use strict";a.r(e);var i=a("2d08"),n=a("a9ae");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("573c");var o,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"5adc1a9e",null,!1,i["a"],o);e["default"]=s.exports},a9ae:function(t,e,a){"use strict";a.r(e);var i=a("088c"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},e2605:function(t,e,a){"use strict";var i=a("95b5"),n=a.n(i);n.a}}]);