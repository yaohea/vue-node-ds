(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Category_GoodsList"],{"05f5":function(t,e,n){"use strict";n("c292")},"1dde":function(t,e,n){var a=n("d039"),r=n("b622"),i=n("2d00"),c=r("species");t.exports=function(t){return i>=51||!a((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3c29":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg=="},4886:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"classify"}},[a("NavBar",{attrs:{color:"#fff"}},[a("img",{attrs:{slot:"left",src:n("3c29")},on:{click:function(e){return t.$router.push("/")}},slot:"left"})]),a("van-tree-select",{attrs:{height:"150vw",items:t.items,"main-active-index":t.active},on:{"update:mainActiveIndex":function(e){t.active=e},"update:main-active-index":function(e){t.active=e},"click-nav":t.get},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.module,(function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.active===n,expression:"active === index"}],key:e._id},[a("p",[t._v("热门分类")]),a("van-row",{staticClass:"c-row",attrs:{type:"flex"}},t._l(e.children,(function(e){return a("van-col",{key:e.id,staticClass:"col-img",attrs:{span:"7"}},[a("router-link",{attrs:{to:"/goods_list/"+e.categoryId}},[a("img",{attrs:{src:t.$axios.defaults.baseURL+e.img,alt:""}}),a("p",{staticClass:"fs-12"},[t._v(t._s(e.name))])])],1)})),1)],1)}))},proxy:!0}])}),a("div",{staticStyle:{height:"2rem"}}),a("TabBar")],1)},r=[],i=(n("d81d"),n("b0c0"),n("96cf"),n("1da1")),c=n("5782"),s=n("0790"),o={data:function(){return{active:0,module:{},items:[{text:"手机数码"}]}},methods:{getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/categories");case 2:n=e.sent,a=n.data,t.module=a,t.items=t.module.map((function(t){return{text:t.name}}));case 6:case"end":return e.stop()}}),e)})))()},get:function(t){}},components:{NavBar:s["a"],TabBar:c["a"]},created:function(){this.getData()}},u=o,l=(n("05f5"),n("2877")),d=Object(l["a"])(u,a,r,!1,null,"9f2193a6",null);e["default"]=d.exports},5782:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 TabBar"},[n("van-tabbar",{staticClass:"w-100",attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/home",icon:"home-o"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{to:"/category",icon:"apps-o"}},[t._v("分类")]),n("van-tabbar-item",{attrs:{to:"/shop",icon:"shopping-cart-o"}},[t._v("购物车")]),n("van-tabbar-item",{attrs:{to:"/mine",icon:"manager-o"}},[t._v("我的")])],1)],1)},r=[],i={data:function(){return{active:0}}},c=i,s=(n("5f36"),n("2877")),o=Object(s["a"])(c,a,r,!1,null,"4a63ee40",null);e["a"]=o.exports},"5f36":function(t,e,n){"use strict";n("9d06")},"5fa5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAcCAYAAAAnbDzKAAAAAXNSR0IArs4c6QAAA+BJREFUWAnVWGtLFFEYfmZ2ZtctW0XtBplkZJIfhMCgu0VRUX2LSusnFEVpUFrZjSiiC91/QPUlKqKgC5R2ASUIrA8FaZB0QU1xbWWd3Z2dzru2s+PM7JxxlbIXlj3neZ/3Pc87c+acMyOAWU9l5YxYTD0tQKjUNG06YePVBEH4oUFrlCTPvvzGxq9CQnxUbWWC88ar6DS6eiXZUy7Slf8PxVNNeaRdpGlDvf/RSLs40jkvzS2BPH/+6OqVZXgXLYSYn2/JQxj5wDg8I+0ij2T2Bw7sx4Stm83wiPpiIIDc06cgl5db4ggjH3HcmNC5eKnmhkgcqawMedevoq+mFpHmFrdhyN69C/4N61N8gd18nw9aNAqoagqnlscDgV19TVEALSUt/OAhQucvDOeynmMBOSdPwFtRkQqSJAjsZ06eIgCRN28Q3F9nhOCZXQzP1Kk6Rlc3UF+HgRs3EW2lBTBldAcmbqtG//ETiPf36w61sxNq+2e9n2xIyYbtv9cLtasb4du3bd1m0L9pE8BizEYDGwcX/H6EJk+G8uIl1C9fhtHVb9+hhUJQml5AC4eH+ew6zgWwiHh3F8J37trFWjDf8mUWLAGwKZHTcNjik0tLLVgSkNkdMlqw4QhAU85k3AJM/My6oggqTnn1GrGO4Vecl1CaWQTfksUAy2Fn3AI8RUWYVFtjF2vBiBtrb7fgSWDwyVMoz54NTTP2IHONPci+lSuHCkhD5hYgsDktTks9gGnyJGDiurGC+/cgZmdzqV3LV3A53AJinz4huLeWm4gIuRfO2fPYleyp3s6ep27d/+viJQw+eqz3jQ0f28gCdQcSkNLUhO416wBaVm2MW4BNTEaQ2tGRURztE9rAQNpYbgHCxGy2gc1Lm8DoIK4W7DNCaduTdu4A/UZr3ALk0rls973mehylhb9D/1y/0V0+8y5tE8UtIPLuPfoPHrIJtUKBY0etoAHxb9kMqbjYgPCbtJnZHSGSkdwCEI0g3tOT5Dv/M66TeRdUQJpRCKW52Ymm+6SSOZAKC0dZgJ5ubBqxtjaEzp13lWxCVRWkbVWOXO4dkGbNQuBgvWOSpJO4UbbsOhptYOzE6co89ruvMZZbACQZYoH1xcOYRG8zLs98y5ZiStNzHk33x/ucVzXnAtgqEP34AcE97o4SOWfPWM/3upShRuTtW4QuXzGh9t2stWuRtXqVvfMP6vg+4BiZiTN5IIvH3UXTdKMYh+VUpO8s7rKNAYuEuxVPw9EbmYN40i7SR6IxkPZPUpB2kb5wsdF7/4mC0Q3aS9pF+jxHX7gg4NZfnU4Zik9oZFpJM2n/DUGVJlEItN6fAAAAAElFTkSuQmCC"},"65f0":function(t,e,n){var a=n("861d"),r=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?a(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"9d06":function(t,e,n){},a66d:function(t,e,n){},ae40:function(t,e,n){var a=n("83ab"),r=n("d039"),i=n("5135"),c=Object.defineProperty,s={},o=function(t){throw t};t.exports=function(t,e){if(i(s,t))return s[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:o,d=i(e,1)?e[1]:void 0;return s[t]=!!n&&!r((function(){if(u&&!a)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:o}):t[1]=1,n.call(t,l,d)}))}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";a&&!(o in i)&&r(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},b727:function(t,e,n){var a=n("0366"),r=n("44ad"),i=n("7b0b"),c=n("50c4"),s=n("65f0"),o=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=7==t,A=5==t||d;return function(v,g,m,p){for(var b,h,R=i(v),w=r(R),C=a(g,m,3),U=c(w.length),Z=0,I=p||s,k=e?I(v,U):n||f?I(v,0):void 0;U>Z;Z++)if((A||Z in w)&&(b=w[Z],h=C(b,Z,R),t))if(e)k[Z]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return Z;case 2:o.call(k,b)}else switch(t){case 4:return!1;case 7:o.call(k,b)}return d?-1:u||l?l:k}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},c292:function(t,e,n){},d382:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar",{attrs:{color:"#fff",title:"商品列表"}},[a("img",{attrs:{slot:"left",src:n("3c29")},on:{click:function(e){return t.$router.push("/category")}},slot:"left"})]),a("Card",{attrs:{dataList:t.home_list}})],1)},r=[],i=(n("96cf"),n("1da1")),c=n("0790"),s=n("d95a"),o={props:["id"],data:function(){return{home_list:{}}},methods:{getHomeList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/goods_list/".concat(t.id));case 2:n=e.sent,a=n.data,t.home_list=a;case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.getHomeList()},components:{NavBar:c["a"],Card:s["a"]}},u=o,l=n("2877"),d=Object(l["a"])(u,a,r,!1,null,"f9b023f2",null);e["default"]=d.exports},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),c=n("ae40"),s=i("map"),o=c("map");a({target:"Array",proto:!0,forced:!s||!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},d8ee:function(t,e,n){"use strict";n("a66d")},d95a:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"goods mt-40"},[a("ul",{staticClass:"goods-c"},t._l(t.dataList,(function(e){return a("router-link",{key:e.id,staticClass:"goods-n",attrs:{to:"/detail/"+e.goodsId,tag:"li"}},[a("img",{staticClass:"goods-m",attrs:{src:t.$axios.defaults.baseURL+e.img,alt:""}}),a("p",[a("img",{attrs:{src:n("5fa5"),alt:""}}),t._v(" "+t._s(e.title)+" ")]),a("p",{staticClass:"goods-pp"},[a("span",{staticStyle:{color:"red"}},[t._v("￥"+t._s(e.price))]),a("span",{staticClass:"goods-pr fs-12"},[t._v("看相似")])])])})),1)])])},r=[],i={props:["dataList"]},c=i,s=(n("d8ee"),n("2877")),o=Object(s["a"])(c,a,r,!1,null,"4621216c",null);e["a"]=o.exports},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=Category_GoodsList.cd6c2ab4.js.map