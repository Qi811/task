(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-index"],{"050d":function(t,e,r){"use strict";r.r(e);var i=r("eeae"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},1365:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,".order-view[data-v-3d051550]{width:96%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background-color:#fff;\n\n\n\t/* \t\tborder-top-left-radius: 40upx;\n\tborder-top-right-radius: 40upx; */padding-left:%?30?%}.tugurl[data-v-3d051550]{color:#999}.sharbuttn[data-v-3d051550]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:50px}.shartitle[data-v-3d051550]{width:80%;text-align:center;margin-left:10%;border-bottom:1px solid #ddd;position:relative;height:%?60?%}.tgtit[data-v-3d051550]{margin-top:10px;text-align:center}.shartitle uni-view[data-v-3d051550]{height:%?50?%;line-height:%?50?%;font-size:%?28?%;color:#999;width:%?120?%;margin:%?32?% auto;position:absolute;background:#fff;left:50%;margin-left:%?-60?%}.sharapk[data-v-3d051550]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:%?20?% auto}.sharapk uni-view[data-v-3d051550]{margin:%?40?%}.sharapk uni-view uni-image[data-v-3d051550]{height:%?80?%;width:%?80?%}.content[data-v-3d051550]{width:100%;background-color:#fff}.top[data-v-3d051550]{width:100%;height:%?300?%;background:url(http://renwu.xiansqx.com/static/img/backgroud.d7a2c38d.png) no-repeat;background-size:100%;background-position:50%}.banner[data-v-3d051550]{width:100%;background-color:#fff;border-radius:%?60?% %?60?% 0 0;margin-top:%?-60?%}.banner dl[data-v-3d051550]{margin-top:%?-80?%}.banner dl dt[data-v-3d051550]{text-align:center}.banner dl dt uni-image[data-v-3d051550]{width:%?160?%;height:%?160?%;border-radius:50%}.banner dl dd[data-v-3d051550]{text-align:center}.img[data-v-3d051550]{width:%?300?%;height:%?300?%;margin:0 auto;margin-top:%?60?%}.img uni-image[data-v-3d051550]{width:100%;height:100%}.btn[data-v-3d051550]{width:%?260?%;height:%?60?%;line-height:%?60?%;margin:0 auto;margin-top:%?60?%;border-radius:%?40?%;border:0;font-size:%?26?%;outline:0;\n\t/* \tbackground: #33b17b; */background:#fa3434;color:#fff;text-align:center}.bottom[data-v-3d051550]{width:100%;height:%?400?%;\n\t/* \tbackground: url(../../static/img/beij.png) no-repeat; */background-position:0 100%;\n\t/* 设置背景图片位置 */background-size:20%}.bottom ul[data-v-3d051550]{padding-left:%?40?%;box-sizing:border-box}.bottom ul li[data-v-3d051550]{width:100%;height:%?60?%}",""]),t.exports=e},"195b":function(t,e,r){var i=r("466e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("605f2422",i,!0,{sourceMap:!1,shadowMode:!1})},2142:function(t,e,r){"use strict";r.r(e);var i=r("b998"),n=r("baa8");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("270e");var a,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"3d051550",null,!1,i["a"],a);e["default"]=u.exports},"270e":function(t,e,r){"use strict";var i=r("4c7a"),n=r.n(i);n.a},"2b8f":function(t,e,r){t.exports=r.p+"static/img/logo.958c4177.png"},"2c22":function(t,e,r){"use strict";r("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r("3293"),n={data:function(){return{uid:this.$Raichu.getData("uid"),url:"",number:0,src:""}},onLoad:function(){var t=this.$Raichu.getData("uid");t?(this.inviteNum(),this.shareInfo()):this.$Raichu.reLaunch("/pages/login/index")},methods:{couponQrCode:function(){new i("couponQrcode",{text:this.url,width:150,height:150,showLoading:!0,loadingText:"二维码生成中",colorDark:"#333333",colorLight:"#FFFFFF",correctLevel:i.CorrectLevel.H})},lower:function(){uni.navigateTo({url:"/pages/team/lower"})},inviteNum:function(){var t=this,e=this.$Raichu.getData("uid");this.$Request.postT("/externalApi/inviteNum",{id:e}).then((function(e){t.number=e.number}))},shareInfo:function(){var t=this,e=this.$Raichu.getData("uid");this.$Request.postT("/externalApi/shareInfo",{userId:e}).then((function(e){t.url=e.url,t.src=e.data}))},copyText:function(){this.$copyText(this.url).then((function(t){uni.showToast({title:"复制成功"})}))},save:function(){var t=this;uni.showActionSheet({itemList:["保存图片到相册"],success:function(){var e=t;uni.saveImageToPhotosAlbum({filePath:e.src,success:function(t){e.$Raichu.showToast("保存成功")}})}})},share:function(t){var e=this;if(0!==this.providerList.length){var r=this.providerList.map((function(t){return t.name}));console.log(r),uni.showActionSheet({itemList:r,success:function(t){console.log(e.providerList[t.tapIndex].id),"qq"==e.providerList[t.tapIndex].id?e.type=1:e.type=0,uni.share({provider:e.providerList[t.tapIndex].id,scene:e.providerList[t.tapIndex].type&&"WXSenceTimeline"===e.providerList[t.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:e.type,title:"耘助教",summary:"耘助教是一个在线教育应用平台",imageUrl:"http://pds.jyt123.com/wxtest/logo.png",href:"https://m3w.cn/uniapp",success:function(t){console.log("success:"+JSON.stringify(t))},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})},openLink:function(){plus.runtime.openWeb(this.sourceLink)}}};e.default=n},3293:function(t,e,r){var i;r("99af"),r("d3b7"),r("ac1f"),r("25f0"),r("5319"),function(){function t(t,r){for(var i=1,n=e(t),o=0,s=p.length;o<=s;o++){var u=0;switch(r){case a.L:u=p[o][0];break;case a.M:u=p[o][1];break;case a.Q:u=p[o][2];break;case a.H:u=p[o][3];break}if(n<=u)break;i++}if(i>p.length)throw new Error("Too long data");return i}function e(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}function r(t){this.mode=o.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var i=[],n=this.data.charCodeAt(e);n>65536?(i[0]=240|(1835008&n)>>>18,i[1]=128|(258048&n)>>>12,i[2]=128|(4032&n)>>>6,i[3]=128|63&n):n>2048?(i[0]=224|(61440&n)>>>12,i[1]=128|(4032&n)>>>6,i[2]=128|63&n):n>128?(i[0]=192|(1984&n)>>>6,i[1]=128|63&n):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function n(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},n.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=n.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=u.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r),n=1;this.make();for(var o=0;o<this.modules.length;o++)for(var a=o*n,s=0;s<this.modules[o].length;s++){var u=s*n,l=this.modules[o][s];l&&(i.beginFill(0,100),i.moveTo(u,a),i.lineTo(u+n,a),i.lineTo(u+n,a+n),i.lineTo(u,a+n),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=u.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[i+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=u.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=u.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var s=0;s<2;s++)if(null==this.modules[i][a-s]){var l=!1;o<t.length&&(l=1==(t[o]>>>n&1));var c=u.getMask(e,i,a-s);c&&(l=!l),this.modules[i][a-s]=l,n--,-1==n&&(o++,n=7)}if(i+=r,i<0||this.moduleCount<=i){i-=r,r=-r;break}}}}},n.PAD0=236,n.PAD1=17,n.createData=function(t,e,r){for(var i=f.getRSBlocks(t,e),o=new h,a=0;a<r.length;a++){var s=r[a];o.put(s.mode,4),o.put(s.getLength(),u.getLengthInBits(s.mode,t)),s.write(o)}var l=0;for(a=0;a<i.length;a++)l+=i[a].dataCount;if(o.getLengthInBits()>8*l)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*l+")");o.getLengthInBits()+4<=8*l&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*l)break;if(o.put(n.PAD0,8),o.getLengthInBits()>=8*l)break;o.put(n.PAD1,8)}return n.createBytes(o,i)},n.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var l=e[s].dataCount,c=e[s].totalCount-l;i=Math.max(i,l),n=Math.max(n,c),o[s]=new Array(l);for(var f=0;f<o[s].length;f++)o[s][f]=255&t.buffer[f+r];r+=l;var h=u.getErrorCorrectPolynomial(c),p=new d(o[s],h.getLength()-1),g=p.mod(h);a[s]=new Array(h.getLength()-1);for(f=0;f<a[s].length;f++){var b=f+g.getLength()-a[s].length;a[s][f]=b>=0?g.get(b):0}}var v=0;for(f=0;f<e.length;f++)v+=e[f].totalCount;var m=new Array(v),w=0;for(f=0;f<i;f++)for(s=0;s<e.length;s++)f<o[s].length&&(m[w++]=o[s][f]);for(f=0;f<n;f++)for(s=0;s<e.length;s++)f<a[s].length&&(m[w++]=a[s][f]);return m};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},a={L:1,M:0,Q:3,H:2},s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(u.getBCHDigit(e)-u.getBCHDigit(u.G15)>=0)e^=u.G15<<u.getBCHDigit(e)-u.getBCHDigit(u.G15);return(t<<10|e)^u.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(u.getBCHDigit(e)-u.getBCHDigit(u.G18)>=0)e^=u.G18<<u.getBCHDigit(e)-u.getBCHDigit(u.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return u.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case s.PATTERN000:return(e+r)%2==0;case s.PATTERN001:return e%2==0;case s.PATTERN010:return r%3==0;case s.PATTERN011:return(e+r)%3==0;case s.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case s.PATTERN101:return e*r%2+e*r%3==0;case s.PATTERN110:return(e*r%2+e*r%3)%2==0;case s.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new d([1],0),r=0;r<t;r++)e=e.multiply(new d([1,l.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(i,n),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(i+s,n+u)&&o++;o>5&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var l=0;t.isDark(i,n)&&l++,t.isDark(i+1,n)&&l++,t.isDark(i,n+1)&&l++,t.isDark(i+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var c=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&c++;var d=Math.abs(100*c/e/e-50)/5;return r+=10*d,r}},l={glog:function(t){if(t<1)throw new Error("glog("+t+")");return l.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return l.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)l.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)l.EXP_TABLE[c]=l.EXP_TABLE[c-4]^l.EXP_TABLE[c-5]^l.EXP_TABLE[c-6]^l.EXP_TABLE[c-8];for(c=0;c<255;c++)l.LOG_TABLE[l.EXP_TABLE[c]]=c;function d(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function f(t,e){this.totalCount=t,this.dataCount=e}function h(){this.buffer=[],this.length=0}d.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=l.gexp(l.glog(this.get(r))+l.glog(t.get(i)));return new d(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=l.glog(this.get(0))-l.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=l.gexp(l.glog(t.get(i))+e);return new d(r,0).mod(t)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(t,e){var r=f.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],o=0;o<i;o++)for(var a=r[3*o+0],s=r[3*o+1],u=r[3*o+2],l=0;l<a;l++)n.push(new f(s,u));return n},f.getRsBlockTable=function(t,e){switch(e){case a.L:return f.RS_BLOCK_TABLE[4*(t-1)+0];case a.M:return f.RS_BLOCK_TABLE[4*(t-1)+1];case a.Q:return f.RS_BLOCK_TABLE[4*(t-1)+2];case a.H:return f.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},h.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];i=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:a.H},"string"===typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];this._oQRCode=null,this.canvasId=t,this._htOption.text&&this.canvasId&&this.makeCode(this._htOption.text)},i.prototype.makeCode=function(e){this._oQRCode=new n(t(e,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(e),this._oQRCode.make(),this.makeImage()},i.prototype.makeImage=function(){var t;t=this._htOption.usingIn?wx.createCanvasContext(this.canvasId,this._htOption.usingIn):wx.createCanvasContext(this.canvasId);var e=this._htOption,r=this._oQRCode,i=r.getModuleCount(),n=e.width/i,o=e.height/i,a=Math.round(n),s=Math.round(o);e.image&&""!=e.image&&t.drawImage(e.image,0,0,e.width,e.height);for(var u=0;u<i;u++)for(var l=0;l<i;l++){var c=r.isDark(u,l),d=l*n,f=u*o;t.setStrokeStyle(c?e.colorDark:e.colorLight),t.setLineWidth(1),t.setFillStyle(c?e.colorDark:e.colorLight),t.fillRect(d,f,n,o),t.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,a,s),t.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,a,s)}t.draw()},i.prototype.exportImage=function(t){t&&wx.canvasToTempFilePath({x:0,y:0,width:this._htOption.width,height:this._htOption.height,destWidth:this._htOption.width,destHeight:this._htOption.height,canvasId:this.canvasId,success:function(e){console.log(e.tempFilePath),t(e.tempFilePath)}})},i.CorrectLevel=a}(),t.exports=i},"466e":function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.u-btn[data-v-7529bc2b]::after{border:none}.u-btn[data-v-7529bc2b]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-7529bc2b]{border:1px solid #fff}.u-btn--default[data-v-7529bc2b]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-7529bc2b]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-7529bc2b]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-7529bc2b]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-7529bc2b]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-7529bc2b]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-7529bc2b]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-7529bc2b]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-7529bc2b]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-7529bc2b]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-7529bc2b]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-7529bc2b]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-7529bc2b]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-7529bc2b]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-7529bc2b]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-7529bc2b]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-7529bc2b]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-7529bc2b]{border-radius:%?100?%}.u-round-circle[data-v-7529bc2b]::after{border-radius:%?100?%}.u-loading[data-v-7529bc2b]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-7529bc2b]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-7529bc2b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-7529bc2b]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-7529bc2b]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-7529bc2b]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-7529bc2b]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-7529bc2b]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-7529bc2b]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-7529bc2b]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-7529bc2b]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-7529bc2b]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-7529bc2b]{background:#18b566!important;color:#fff}.u-info-hover[data-v-7529bc2b]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-7529bc2b]{background:#f29100!important;color:#fff}.u-error-hover[data-v-7529bc2b]{background:#dd6161!important;color:#fff}',""]),t.exports=e},"4c7a":function(t,e,r){var i=r("1365");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("06cffb4e",i,!0,{sourceMap:!1,shadowMode:!1})},"8f8e":function(t,e,r){"use strict";var i;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?r("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},o=[]},b998:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}));var i={uButton:r("c6b7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"top"}),i("v-uni-view",{staticClass:"banner"},[i("dl",[i("dt",[i("v-uni-image",{attrs:{src:r("2b8f"),mode:""}})],1),i("dd",[t._v("任务")])]),i("v-uni-view",{staticClass:"order-view",staticStyle:{"margin-left":"2vw"}},[i("v-uni-view",{staticClass:"order-view-view",staticStyle:{"margin-top":"10px","margin-right":"12px"}},[i("v-uni-view",{staticStyle:{"font-size":"1rem","text-align":"center"}},[t._v(t._s(t.number))]),i("v-uni-view",{staticStyle:{color:"grey"}},[t._v("邀请好友")])],1)],1),i("v-uni-view",{staticStyle:{margin:"20px auto","text-align":"center"}},[i("u-button",{attrs:{type:"error",size:"medium "},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[t._v("查看好友")])],1),i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:t.src,mode:""}})],1),i("v-uni-view",{staticClass:"tgtit"},[t._v("推广链接："),i("v-uni-text",{staticClass:"tugurl"},[t._v(t._s(t.url))])],1),i("v-uni-view",{staticClass:"sharbuttn"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存二维码")]),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText.apply(void 0,arguments)}}},[t._v("复制推广链接")])],1)],1)],1)},o=[]},baa8:function(t,e,r){"use strict";r.r(e);var i=r("2c22"),n=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},c6b7:function(t,e,r){"use strict";r.r(e);var i=r("8f8e"),n=r("050d");for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);r("e03e");var a,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7529bc2b",null,!1,i["a"],a);e["default"]=u.exports},e03e:function(t,e,r){"use strict";var i=r("195b"),n=r.n(i);n.a},eeae:function(t,e,r){"use strict";r("c975"),r("a9e3"),r("d3b7"),r("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(r){var i=r[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){e.fields=i;var n="",o="";n=t.touches[0].clientX,o=t.touches[0].clientY,e.rippleTop=o-i.top-i.targetWidth/2,e.rippleLeft=n-i.left-i.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var r="";r=uni.createSelectorQuery().in(t),r.select(".u-btn").boundingClientRect(),r.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=i}}]);