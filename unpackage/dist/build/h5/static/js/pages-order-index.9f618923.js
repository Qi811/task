(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-index"],{"0f78":function(t,e,i){var n=i("1133");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("323bb10d",n,!0,{sourceMap:!1,shadowMode:!1})},1133:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-countdown[data-v-19d52df4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-countdown-item[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?2?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.u-countdown-time[data-v-19d52df4]{margin:0;padding:0;line-height:1}.u-countdown-colon[data-v-19d52df4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%;line-height:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?4?%}.u-countdown-scale[data-v-19d52df4]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"29a4":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e=0,i=0,n=0,o=0;e=Math.floor(t/86400),i=Math.floor(t/3600)-24*e;var a=null;a=this.showDays?i:Math.floor(t/3600),n=Math.floor(t/60)-60*i-24*e*60,o=Math.floor(t)-24*e*60*60-60*i*60-60*n,a=a<10?"0"+a:a,n=n<10?"0"+n:n,o=o<10?"0"+o:o,e=e<10?"0"+e:e,this.d=e,this.h=a,this.i=n,this.s=o},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=n},"335a":function(t,e,i){var n=i("ff36");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0e785c0e",n,!0,{sourceMap:!1,shadowMode:!1})},"5f42":function(t,e,i){"use strict";var n=i("335a"),o=i.n(n);o.a},"66f0":function(t,e,i){"use strict";i.r(e);var n=i("f6cb"),o=i("bd23");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6c94");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"19d52df4",null,!1,n["a"],r);e["default"]=u.exports},"6c94":function(t,e,i){"use strict";var n=i("0f78"),o=i.n(n);o.a},"8e80":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uSubsection:i("2b80").default,uEmpty:i("1fcd").default,uCountDown:i("66f0").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"task-content"},[n("v-uni-view",{staticStyle:{width:"94%",margin:"0 auto"}},[n("u-subsection",{attrs:{list:t.list,current:t.curNow,"active-color":"#ff9900"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sectionChange.apply(void 0,arguments)}}}),t.taskList.length<1?n("v-uni-view",{staticStyle:{margin:"150px"}},[n("u-empty",{attrs:{text:"暂无数据",mode:"list"}})],1):t._e()],1),t._l(t.taskList,(function(e,o){return n("v-uni-view",{key:o,staticClass:"task-list"},[n("v-uni-view",{staticStyle:{width:"80%","margin-left":"20upx"}},[n("v-uni-view",{staticStyle:{"font-size":"26upx","margin-top":"10upx",display:"flex",color:"#999999"}},[n("v-uni-view",{staticStyle:{width:"60%","line-height":"50px","font-size":"1rem","font-weight":"600",color:"#000000"}},[t._v(t._s(e.title))]),0==t.curNow?n("v-uni-view",{staticStyle:{width:"40%","line-height":"30px"}},[n("p",[t._v("剩余时间：")]),n("u-count-down",{attrs:{timestamp:e.end_time-t.now,separator:"zh"}})],1):t._e(),0!=t.curNow?n("v-uni-view",{staticStyle:{width:"40%","line-height":"20px","margin-top":"10px"}},[n("p",[t._v("提交时间：")]),n("p",[t._v(t._s(t.$u.timeFormat(e.create_time,"yyyy-mm-dd hh:MM")))])]):t._e()],1),n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row",width:"120%"}},[n("v-uni-image",{staticStyle:{"margin-top":"11upx",height:"22upx",width:"30upx"},attrs:{src:i("895d")}}),n("v-uni-view",{staticStyle:{width:"60%","margin-left":"10upx",color:"#09BB07","margin-top":"5upx"}},[t._v("+"+t._s(e.price)+"元")]),0==t.curNow?n("v-uni-view",{staticStyle:{width:"130%",height:"50upx",display:"flex","text-align":"center"}},[n("v-uni-view",{staticStyle:{width:"59%",height:"130%","background-color":"rgb(255, 153, 0)",color:"#FFFFFF",border:"1px solid #F0F0F0","border-radius":"12upx","line-height":"2.7","font-size":"24upx","margin-left":"20upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.out(e.task_id)}}},[t._v("放弃任务")]),n("v-uni-view",{staticStyle:{width:"59%",height:"130%","background-color":"rgb(0, 193, 114)",color:"#FFFFFF",border:"1px solid #F0F0F0","line-height":"2.7","font-size":"24upx","text-align":"center","margin-left":"10upx","border-radius":"12upx"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.apply(e.task_id)}}},[t._v("提交")])],1):t._e()],1)],1)],1)}))],2)},a=[]},"99ca":function(t,e,i){"use strict";i.r(e);var n=i("8e80"),o=i("ad2c");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("5f42");var r,s=i("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"f5a03b66",null,!1,n["a"],r);e["default"]=u.exports},a683:function(t,e,i){"use strict";i("99af"),i("4de4"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{now:parseInt(Date.parse(new Date)/1e3),list:[{name:"待完成"},{name:"审核中"},{name:"已审核"},{name:"审核失败"}],current:1,curNow:0,taskList:[],pageInfo:{count:0,pageIndex:1,pageSize:6}}},onLoad:function(t){this.toList()},activated:function(){this.toList()},onReachBottom:function(){var t=this,e=this.$Raichu.getData("uid");this.$Request.postT("/externalApi/pickTask",{id:e,size:this.pageInfo.pageSize,page:this.pageInfo.pageIndex+1,status:this.curNow}).then((function(e){0!=e.data.length?(t.taskList=t.taskList.concat(e.data),t.pageInfo.pageIndex=t.pageInfo.pageSize+1,t.pageInfo.pageSize=e.data.length):(t.pageInfo.pageIndex=t.pageInfo.pageIndex,t.pageInfo.pageSize=t.pageInfo.pageSize+5)}))},methods:{sectionChange:function(t){this.curNow=t,this.toList(t)},toList:function(t){var e=this;void 0==t&&(t=0),this.curNow=t;var i=this.$Raichu.getData("uid");this.$Request.postT("/externalApi/pickTask",{id:i,size:this.pageInfo.pageSize,page:1,status:t}).then((function(t){e.taskList=t.data}))},out:function(t){var e=this,i=this.$Raichu.getData("uid");uni.showModal({title:"提示",content:"确定要删除此任务吗?",showCancel:!0,success:function(n){n.confirm&&e.$Request.postT("/externalApi/taskAbandon",{id:t,userId:i}).then((function(i){0==i.code?(e.$Raichu.showToast("删除成功"),uni.showToast({title:"删除成功",icon:"success",duration:2e3}),e.taskList=e.taskList.filter((function(e){return t!==e.task_id}))):e.$Raichu.showToast("操作失败")}))}})},apply:function(t){uni.navigateTo({url:"/pages/task/detail?id="+t})}}};e.default=n},ad2c:function(t,e,i){"use strict";i.r(e);var n=i("a683"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},bd23:function(t,e,i){"use strict";i.r(e);var n=i("29a4"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f6cb:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-countdown"},[t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:[t.letterStyle]},[t._v(t._s(t.d))])],1):t._e(),t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"天"))]):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.h))])],1):t._e(),t.showHours?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"时"))]):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.i))])],1):t._e(),t.showMinutes?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v(t._s("colon"==t.separator?":":"分"))]):t._e(),t.showSeconds?i("v-uni-view",{staticClass:"u-countdown-item",style:[t.itemStyle]},[i("v-uni-view",{staticClass:"u-countdown-time",style:{fontSize:t.fontSize+"rpx",color:t.color}},[t._v(t._s(t.s))])],1):t._e(),t.showSeconds&&"zh"==t.separator?i("v-uni-view",{staticClass:"u-countdown-colon",style:{fontSize:t.separatorSize+"rpx",color:t.separatorColor,paddingBottom:"colon"==t.separator?"4rpx":0}},[t._v("秒")]):t._e()],1)},a=[]},ff36:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".task-list[data-v-f5a03b66]{width:94%;display:-webkit-box;display:-webkit-flex;display:flex;margin:10px auto;padding:10px;box-shadow:hsla(0,0%,71.8%,.3) 1px 0 10px 0}",""]),t.exports=e}}]);