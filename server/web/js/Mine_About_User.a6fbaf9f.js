(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Mine_About_User"],{"0a4e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top"},[a("div",{staticClass:"my-t"},[t._m(0),a("div",{staticClass:"my-name"},[t._v(t._s(t.name))]),a("div",[a("van-button",{staticClass:"set",attrs:{size:"mini",type:"default"},on:{click:t.out}},[t._v("退出")])],1)])]),a("div",{staticClass:"order"},[a("div",{staticClass:"content"},[a("van-cell",{attrs:{title:"我的订单",to:"my_order","is-link":""}}),a("van-cell",{attrs:{title:"账号管理",to:"user","is-link":""}}),a("van-cell",{attrs:{title:"地址管理",to:"address-list/1","is-link":""}}),a("van-cell",{attrs:{title:"关于我们",to:"my_about","is-link":""}})],1)]),a("div",{staticStyle:{height:"2rem"}}),a("TabBar")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:a("f85d"),alt:""}})])}],r=(a("b0c0"),a("96cf"),a("1da1")),i=a("5782"),c={data:function(){return{name:""}},methods:{getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/get_user");case 2:a=e.sent,n=a.data,t.name=n.username;case 5:case"end":return e.stop()}}),e)})))()},out:function(){localStorage.clear("token"),this.$toast.success("退出"),this.$router.push("/")}},components:{TabBar:i["a"]},created:function(){this.getUser()}},o=c,u=(a("b7bf"),a("2877")),l=Object(u["a"])(o,n,s,!1,null,"0a094fdc",null);e["default"]=l.exports},"1c3a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NavBar",{attrs:{color:"#fff",title:"用户管理"}},[n("img",{attrs:{slot:"left",src:a("3c29"),alt:""},on:{click:function(e){return t.$router.push("/mine")}},slot:"left"})]),t._m(0),n("van-form",{staticClass:"mt-10",on:{submit:t.onSubmit}},[n("van-field",{attrs:{name:"username",autocomplete:"",label:"用户名",placeholder:"用户名",rules:t.formRules.username},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{autocomplete:"",name:"password",label:"修改密码",placeholder:"密码",rules:t.formRules.password},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticStyle:{margin:"0.64rem"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex f-ai-c f-jc-c"},[n("img",{attrs:{src:a("294f"),alt:""}})])}],r=(a("96cf"),a("1da1")),i=a("0790"),c={data:function(){return{flag:!0,id:"",username:"",password:"",formRules:{username:[{required:!0,message:"请填写账号"},{pattern:/^.{6,16}$/,message:"请输入6-16位数"}],password:[{required:!0,message:"请填写密码"},{pattern:/^.{6,16}$/,message:"请输入6-16位数"}]}}},methods:{getUser:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/get_user");case 2:a=e.sent,n=a.data,t.username=n.username,t.id=n._id;case 6:case"end":return e.stop()}}),e)})))()},onSubmit:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.put("edit_user/".concat(e.id),{username:e.username,password:e.password});case 2:a=t.sent,a.data,e.$toast.success("修改成功"),e.$router.push("/mine");case 6:case"end":return t.stop()}}),t)})))()}},components:{NavBar:i["a"]},created:function(){this.getUser()}},o=c,u=a("2877"),l=Object(u["a"])(o,n,s,!1,null,"100e6070",null);e["default"]=l.exports},"294f":function(t,e,a){t.exports=a.p+"img/tb.4073cab5.png"},"3c29":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg=="},"4eac":function(t,e,a){"use strict";a("f5b1")},5782:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100 TabBar"},[a("van-tabbar",{staticClass:"w-100",attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{to:"/home",icon:"home-o"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{to:"/category",icon:"apps-o"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{to:"/shop",icon:"shopping-cart-o"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{to:"/mine",icon:"manager-o"}},[t._v("我的")])],1)],1)},s=[],r={data:function(){return{active:0}}},i=r,c=(a("5f36"),a("2877")),o=Object(c["a"])(i,n,s,!1,null,"4a63ee40",null);e["a"]=o.exports},"5f36":function(t,e,a){"use strict";a("9d06")},"9d06":function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,r=Function.prototype,i=r.toString,c=/^\s*function ([^ (]*)/,o="name";n&&!(o in r)&&s(r,o,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b7bf:function(t,e,a){"use strict";a("e4d6")},e4d6:function(t,e,a){},f5b1:function(t,e,a){},f85d:function(t,e,a){t.exports=a.p+"img/MY.68ce0e92.png"},f8d9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("NavBar",{attrs:{color:"#fff",title:"关于我们"}},[n("img",{attrs:{slot:"left",src:a("3c29")},on:{click:function(e){return t.$router.go(-1)}},slot:"left"})]),n("div",{staticClass:"box"},[n("div",{staticClass:"box-h"},[n("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa"}},[t._v("关于项目")]),t._v(" vue-node-ds 是一个电商项目，基于 Vue + NodeJS 及相关技术栈开发。 前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、联系地址增删改、个人订单等模块。 ")],1),n("div",{staticClass:"box-b"},[n("van-divider",{style:{color:"#1989fa",borderColor:"#1989fa"}},[t._v("项目地址")]),n("p",{staticClass:"mb-10"},[t._v("前端地址：https://github.com/yaohea/vue-node-ds")]),n("p",{staticClass:"mb-10"},[t._v("后端地址：https://github.com/yaohea/vue-node-ds")]),n("p",{staticClass:"mb-10"},[t._v("线上预览")])],1)])],1)},s=[],r=a("0790"),i={data:function(){return{}},components:{NavBar:r["a"]},methods:{},mounted:function(){}},c=i,o=(a("4eac"),a("2877")),u=Object(o["a"])(c,n,s,!1,null,"11448477",null);e["default"]=u.exports}}]);
//# sourceMappingURL=Mine_About_User.a6fbaf9f.js.map