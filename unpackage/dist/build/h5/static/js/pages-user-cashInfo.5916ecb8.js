(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-cashInfo"],{"1db8":function(e,t,i){var a=i("80c3");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("12e7c85b",a,!0,{sourceMap:!1,shadowMode:!1})},"2c4c":function(e,t,i){var a=i("3feb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("58bea0fb",a,!0,{sourceMap:!1,shadowMode:!1})},"32b3":function(e,t,i){"use strict";i("a9e3"),i("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-field",props:{icon:String,rightIcon:String,required:Boolean,label:String,password:Boolean,clearable:{type:Boolean,default:!0},labelWidth:{type:[Number,String],default:130},labelAlign:{type:String,default:"left"},inputAlign:{type:String,default:"left"},iconColor:{type:String,default:"#606266"},autoHeight:{type:Boolean,default:!0},errorMessage:{type:[String,Boolean],default:""},placeholder:String,placeholderStyle:String,focus:Boolean,fixed:Boolean,value:[Number,String],type:{type:String,default:"text"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},labelPosition:{type:String,default:"left"},fieldStyle:{type:Object,default:function(){return{}}},clearSize:{type:[Number,String],default:30},iconStyle:{type:Object,default:function(){return{}}},borderTop:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},trim:{type:Boolean,default:!0}},data:function(){return{focused:!1,itemIndex:0}},computed:{inputWrapStyle:function(){var e={};return e.textAlign=this.inputAlign,"left"==this.labelPosition?e.margin="0 8rpx":e.marginRight="8rpx",e},rightIconStyle:function(){var e={};return"top"==this.arrowDirection&&(e.transform="roate(-90deg)"),"bottom"==this.arrowDirection?e.transform="roate(90deg)":e.transform="roate(0deg)",e},labelStyle:function(){var e={};return"left"==this.labelAlign&&(e.justifyContent="flext-start"),"center"==this.labelAlign&&(e.justifyContent="center"),"right"==this.labelAlign&&(e.justifyContent="flext-end"),e},justifyContent:function(){return"left"==this.labelAlign?"flex-start":"center"==this.labelAlign?"center":"right"==this.labelAlign?"flex-end":void 0},inputMaxlength:function(){return Number(this.maxlength)},fieldInnerStyle:function(){var e={};return"left"==this.labelPosition?e.flexDirection="row":e.flexDirection="column",e}},methods:{onInput:function(e){var t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t)},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){var t=this;setTimeout((function(){t.focused=!1}),100),this.$emit("blur",e)},onConfirm:function(e){this.$emit("confirm",e.detail.value)},onClear:function(e){this.$emit("input","")},rightIconClick:function(){this.$emit("right-icon-click"),this.$emit("click")},fieldClick:function(){this.$emit("click")}}};t.default=a},"39a4":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{bankName:"",subbranchName:"",bankUser:"",bankNumber:"",zfbUser:"",zfbkNumber:"",examinationTypeArray:["支付宝","银行卡"],examinationTypeIndex:0,examinationTypeArrayType:"支付宝",isbank:!1,iszfb:!0,status:0}},onLoad:function(){var e=this,t=this.$Raichu.getData("uid");if(t){this.$Raichu.getData("uid");this.$Request.postT("/externalApi/payInfo",{userId:t}).then((function(i){if(e.status=i.status,"银行卡"==e.examinationTypeArrayType||3==e.status){if(e.examinationTypeIndex=1,e.examinationTypeArrayType="银行卡",e.isbank=!0,e.iszfb=!1,t){e.$Raichu.getData("uid");e.$Request.postT("/externalApi/payInfo",{userId:t}).then((function(t){e.bankName=t.bank_name,e.subbranchName=t.subbranch_name,e.bankUser=t.bank_user,e.bankNumber=t.bank_number}))}}else if(("支付宝"==e.examinationTypeArrayType||2==e.status)&&(e.examinationTypeIndex=0,e.examinationTypeArrayType="支付宝",e.isbank=!1,e.iszfb=!0,t)){e.$Raichu.getData("uid");e.$Request.postT("/externalApi/payInfo",{userId:t}).then((function(t){e.zfbUser=t.bank_user,e.zfbkNumber=t.bank_number}))}}))}},methods:{chose:function(){},examinationType:function(e){this.examinationTypeIndex=e.target.value,this.examinationTypeArrayType=this.examinationTypeArray[this.examinationTypeIndex],"支付宝"==this.examinationTypeArrayType?(this.isbank=!1,this.iszfb=!0):"银行卡"==this.examinationTypeArrayType&&(this.isbank=!0,this.iszfb=!1)},navBack:function(){uni.navigateBack()},save:function(){var e=this,t=this.$Raichu.getData("uid");"银行卡"==this.examinationTypeArrayType?this.bankName?this.subbranchName?this.bankUser?this.bankNumber?(this.$Raichu.showLoading("修改中..."),this.$Request.postT("/externalApi/userInfoSave",{userId:t,bankName:this.bankName,subbranchName:this.subbranchName,bankUser:this.bankUser,bankNumber:this.bankNumber,status:3}).then((function(t){0==t.code?(e.$Raichu.showToast("修改成功"),uni.showToast({title:"修改成功",icon:"success",duration:2e3}),e.examinationTypeIndex=1,e.examinationTypeArrayType="银行卡",e.isbank=!0,e.iszfb=!1):e.$Raichu.showToast(t.msg),uni.hideLoading()}))):this.$Raichu.showToast("请设置卡号"):this.$Raichu.showToast("请设置收款人姓名"):this.$Raichu.showToast("请输入支行名称"):this.$Raichu.showToast("请输入银行名称"):"支付宝"==this.examinationTypeArrayType&&(this.zfbUser?this.zfbkNumber?(this.$Raichu.showLoading("修改中..."),this.$Request.postT("/externalApi/userInfoSave",{userId:t,bankName:this.examinationTypeArrayType,subbranchName:"",bankUser:this.zfbUser,bankNumber:this.zfbkNumber,status:2}).then((function(t){0==t.code?(uni.showToast({title:"修改成功",icon:"success",duration:2e3}),e.examinationTypeIndex=0,e.examinationTypeArrayType="支付宝",e.isbank=!1,e.iszfb=!0):e.$Raichu.showToast(t.msg),uni.hideLoading()}))):this.$Raichu.showToast("请输入支付宝账号"):this.$Raichu.showToast("请输入支付宝名称"))}}};t.default=a},"3feb":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-field[data-v-5f7249ec]{font-size:%?28?%;padding:%?20?% %?28?%;text-align:left;position:relative;color:#303133}.u-field-inner[data-v-5f7249ec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-textarea-inner[data-v-5f7249ec]{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-textarea-class[data-v-5f7249ec]{min-height:%?96?%;width:auto;font-size:%?28?%}.fild-body[data-v-5f7249ec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-arror-right[data-v-5f7249ec]{margin-left:%?8?%}.u-label-text[data-v-5f7249ec]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex}.u-label-left-gap[data-v-5f7249ec]{margin-left:%?6?%}.u-label-postion-top[data-v-5f7249ec]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.u-label[data-v-5f7249ec]{width:%?130?%;-webkit-box-flex:1;-webkit-flex:1 1 %?130?%;flex:1 1 %?130?%;text-align:left;position:relative;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-required[data-v-5f7249ec]::before{content:"*";position:absolute;left:%?-16?%;font-size:14px;color:#fa3534;height:9px;line-height:1}.u-field__input-wrap[data-v-5f7249ec]{position:relative;overflow:hidden;font-size:%?28?%;height:%?48?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:auto}.u-clear-icon[data-v-5f7249ec]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-error-message[data-v-5f7249ec]{color:#fa3534;font-size:%?26?%;text-align:left}.placeholder-style[data-v-5f7249ec]{color:#969799}.u-input-class[data-v-5f7249ec]{font-size:%?28?%}.u-button-wrap[data-v-5f7249ec]{margin-left:%?8?%}',""]),e.exports=t},"75e5":function(e,t,i){"use strict";i.r(t);var a=i("8314"),n=i("de5a");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("94ab");var o,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"5f7249ec",null,!1,a["a"],o);t["default"]=s.exports},"80c3":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */uni-page-body[data-v-65249cea]{background:#fff}.zf[data-v-65249cea], .lx[data-v-65249cea]{padding-left:15px}.lx[data-v-65249cea]{color:#a6a9ad}.uni-form-item[data-v-65249cea]{height:49px;border-bottom:1px solid #f5f5f5;line-height:40px}.container[data-v-65249cea]{padding-top:%?32?%;position:relative;width:100%;height:100%;overflow:hidden;background:#fff}.confirm-btn1[data-v-65249cea]{width:300px;height:42px;line-height:42px;border-radius:30px;margin-top:%?70?%;background:#f5f5f5;color:grey;font-size:%?32?%}.confirm-btn1[data-v-65249cea]:after{border-radius:60px}.wrapper[data-v-65249cea]{position:relative;z-index:90;background:#fff;padding-bottom:20px}.back-btn[data-v-65249cea]{position:absolute;left:20px;z-index:9999;padding-top:0;top:20px;font-size:20px;color:#303133}.left-top-sign[data-v-65249cea]{font-size:80px;color:#f8f8f8;position:relative}.right-top-sign[data-v-65249cea]{position:absolute;top:40px;right:-15px;z-index:95}.right-top-sign[data-v-65249cea]:before, .right-top-sign[data-v-65249cea]:after{display:block;content:"";width:20px;height:40px;background:-moz-linear-gradient(left,#fa4dbe 0,#fbaa58 100%);background:-webkit-gradient(linear,left top,left right,color-stop(0,#fa4dbe),color-stop(100%,#fbaa58));background:-webkit-linear-gradient(left,#fa4dbe,#fbaa58);background:-o-linear-gradient(left,#fa4dbe 0,#fbaa58 100%);background:-ms-linear-gradient(left,#fa4dbe 0,#fbaa58 100%);background:-webkit-linear-gradient(right,#fa4dbe,#fbaa58);background:linear-gradient(270deg,#fa4dbe 0,#fbaa58)}.right-top-sign[data-v-65249cea]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.right-top-sign[data-v-65249cea]:after{position:absolute;right:-198px;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0\r\n  /* background: pink; */}.left-bottom-sign[data-v-65249cea]{position:absolute;left:-270px;bottom:-320px;\r\n  /*border: 100upx solid #d0d1fd;*/border-radius:50%;padding:90px}.welcome[data-v-65249cea]{position:relative;left:30px;top:-50px;font-size:23px;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-65249cea]{padding:0 20px}.input-item[data-v-65249cea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 30px;background:#f8f6fc;height:64px;border-radius:4px;margin-bottom:30px}.input-item[data-v-65249cea]:last-child{margin-bottom:0}.input-item .tit[data-v-65249cea]{height:30px;line-height:28px;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-65249cea]{height:40px;font-size:%?30?%;color:#303133;width:100%}.confirm-btn[data-v-65249cea]{width:300px;height:42px;line-height:42px;border-radius:30px;margin-top:%?70?%;background:#e10a07;color:#fff;font-size:%?32?%}.confirm-btn[data-v-65249cea]:after{border-radius:60px}.forget-section[data-v-65249cea]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:40px}.register-section[data-v-65249cea]{position:fixed;left:0;bottom:30px;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-65249cea]{color:#4399fc;margin-left:10px}body.?%PAGE?%[data-v-65249cea]{background:#fff}',""]),e.exports=t},8314:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("65a5").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-field",class:{"u-border-top":e.borderTop,"u-border-bottom":e.borderBottom}},[i("v-uni-view",{staticClass:"u-field-inner",class:["textarea"==e.type?"u-textarea-inner":"","u-label-postion-"+e.labelPosition]},[i("v-uni-view",{staticClass:"u-label",class:[e.required?"u-required":""],style:{justifyContent:e.justifyContent,flex:"left"==e.labelPosition?"0 0 "+e.labelWidth+"rpx":"1"}},[e.icon?i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-icon",attrs:{size:"32","custom-style":e.iconStyle,name:e.icon,color:e.iconColor}})],1):e._e(),e._t("icon"),i("v-uni-text",{staticClass:"u-label-text",class:[this.$slots.icon||e.icon?"u-label-left-gap":""]},[e._v(e._s(e.label))])],2),i("v-uni-view",{staticClass:"fild-body"},[i("v-uni-view",{staticClass:"u-flex-1 u-flex",style:[e.inputWrapStyle]},["textarea"==e.type?i("v-uni-textarea",{staticClass:"u-flex-1 u-textarea-class",style:[e.fieldStyle],attrs:{value:e.value,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-flex-1 u-field__input-wrap",style:[e.fieldStyle],attrs:{type:e.type,value:e.value,password:e.password||"password"===this.type,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,disabled:e.disabled,maxlength:e.inputMaxlength,focus:e.focus,confirmType:e.confirmType},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.fieldClick.apply(void 0,arguments)}}})],1),e.clearable&&""!=e.value&&e.focused?i("u-icon",{staticClass:"u-clear-icon",attrs:{size:e.clearSize,name:"close-circle-fill",color:"#c0c4cc"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClear.apply(void 0,arguments)}}}):e._e(),i("v-uni-view",{staticClass:"u-button-wrap"},[e._t("right")],2),e.rightIcon?i("u-icon",{staticClass:"u-arror-right",style:[e.rightIconStyle],attrs:{name:e.rightIcon,color:"#c0c4cc",size:"26"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.rightIconClick.apply(void 0,arguments)}}}):e._e()],1)],1),!1!==e.errorMessage&&""!=e.errorMessage?i("v-uni-view",{staticClass:"u-error-message",style:{paddingLeft:e.labelWidth+"rpx"}},[e._v(e._s(e.errorMessage))]):e._e()],1)},r=[]},"94ab":function(e,t,i){"use strict";var a=i("2c4c"),n=i.n(a);n.a},"9e2c":function(e,t,i){"use strict";i.r(t);var a=i("d38d"),n=i("a194");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("cdcf");var o,l=i("f0c5"),s=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"65249cea",null,!1,a["a"],o);t["default"]=s.exports},a194:function(e,t,i){"use strict";i.r(t);var a=i("39a4"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},cdcf:function(e,t,i){"use strict";var a=i("1db8"),n=i.n(a);n.a},d38d:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uField:i("75e5").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"uni-form-item"},[i("v-uni-picker",{attrs:{range:e.examinationTypeArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.examinationType.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"zf"},[e._v("支付类型")]),i("v-uni-label",{staticClass:"lx",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chose.apply(void 0,arguments)}}},[e._v(e._s(e.examinationTypeArrayType))])],1)],1),e.isbank?i("v-uni-view",[i("u-field",{attrs:{label:"银行名称",type:"text",placeholder:"请输入银行名称"},model:{value:e.bankName,callback:function(t){e.bankName=t},expression:"bankName"}}),i("u-field",{attrs:{label:"支行名称",type:"text",placeholder:"请输入支行名称"},model:{value:e.subbranchName,callback:function(t){e.subbranchName=t},expression:"subbranchName"}}),i("u-field",{attrs:{label:"用户名",type:"text",placeholder:"请输入用户名"},model:{value:e.bankUser,callback:function(t){e.bankUser=t},expression:"bankUser"}}),i("u-field",{attrs:{label:"卡号",type:"text",placeholder:"请输入银行卡号"},model:{value:e.bankNumber,callback:function(t){e.bankNumber=t},expression:"bankNumber"}})],1):e._e(),e.iszfb?i("v-uni-view",[i("u-field",{attrs:{label:"用户名",type:"text",placeholder:"请输入用户名"},model:{value:e.zfbUser,callback:function(t){e.zfbUser=t},expression:"zfbUser"}}),i("u-field",{attrs:{label:"支付账号",type:"text",placeholder:"请输入支付宝账号"},model:{value:e.zfbkNumber,callback:function(t){e.zfbkNumber=t},expression:"zfbkNumber"}})],1):e._e(),i("v-uni-button",{staticClass:"confirm-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("提 交")]),i("v-uni-view",{staticStyle:{padding:"32upx 64upx","font-size":"24upx",color:"#999999"}},[e._v("提示：请正确填写收款人的卡号和真实的收款人姓名，否则将无法正常收款")])],1)},r=[]},de5a:function(e,t,i){"use strict";i.r(t);var a=i("32b3"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a}}]);