(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-unionLogin"],{"0a90":function(n,r,t){"use strict";t.r(r);var e=t("8592"),i=t("7b3c");for(var a in i)"default"!==a&&function(n){t.d(r,n,(function(){return i[n]}))}(a);t("d0ac");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],e["b"],e["c"],!1,null,"dd7b8ffe",null,!1,e["a"],u);r["default"]=s.exports},"21d5":function(n,r,t){var e=t("24fb");r=e(!1),r.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.bir-webviwe[data-v-dd7b8ffe]{position:absolute;bottom:0;left:0;right:0;top:0}.bir-webviwe .viewiframe[data-v-dd7b8ffe]{width:100%;height:100%;background:#fff}',""]),n.exports=r},"685d":function(n,r,t){var e=t("21d5");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=t("4f06").default;i("5969c639",e,!0,{sourceMap:!1,shadowMode:!1})},"7b3c":function(n,r,t){"use strict";t.r(r);var e=t("994d"),i=t.n(e);for(var a in e)"default"!==a&&function(n){t.d(r,n,(function(){return e[n]}))}(a);r["default"]=i.a},8592:function(n,r,t){"use strict";var e;t.d(r,"b",(function(){return i})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return e}));var i=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"wrapper"},[t("v-uni-view",{staticClass:"bir-webviwe"},[t("iframe",{ref:"iframe",staticClass:"viewiframe",attrs:{id:"iframe",src:n.url},on:{onload:function(r){arguments[0]=r=n.$handleEvent(r),n.onLoad.apply(void 0,arguments)}}})])],1)],1)},a=[]},"994d":function(n,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e={data:function(){return{url:""}},methods:{onLoad:function(){var n=this,r=this.$Raichu.getData("uid");this.$Request.postT("/externalApi/unionLogin",{userId:r}).then((function(r){n.url=r}))}}};r.default=e},d0ac:function(n,r,t){"use strict";var e=t("685d"),i=t.n(e);i.a}}]);