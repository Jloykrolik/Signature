(function(){"use strict";var t={8369:function(t,n,e){var o=e(6369),i=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:e(986),height:"150"}}),n("Signature")],1)},r=[],a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"hello"},[n("h1",[t._v("Create your signature ")]),n("div",{staticClass:"center settings"},[n("div",{staticClass:"custom-block"},[t._v(" Set your custom color: "),n("span",{staticClass:"settings-item"},[n("el-color-picker",{attrs:{"show-alpha":""},on:{change:t.onChangeColorPicker},model:{value:t.color,callback:function(n){t.color=n},expression:"color"}})],1)]),n("div",{staticClass:"custom-block"},[t._v(" Set your custom line width: "),n("span",{staticClass:"settings-item"},[n("el-input-number",{attrs:{size:"small",min:t.min,step:1},on:{change:t.onChangeLineWidth},model:{value:t.lineWidth,callback:function(n){t.lineWidth=n},expression:"lineWidth"}})],1)])]),n("div",{staticClass:"center"},[n("VueSignaturePad",{ref:"signaturePad",attrs:{width:"500px",height:"500px",id:"signature",options:t.options}})],1),n("div",[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh-left"},on:{click:t.undo}}),n("el-button",{attrs:{type:"success",icon:"el-icon-download"},on:{click:t.download}})],1)])},s=[],u=e(8499),l=e.n(u),c={name:"SignaturePage",components:{[u.Button.name]:u.Button,[u.Dialog.name]:u.Dialog,[u.ColorPicker.name]:u.ColorPicker,[u.InputNumber.name]:u.InputNumber},data(){return{options:{penColor:"#000000",minWidth:1},color:"#000000",lineWidth:1,min:1}},methods:{undo(){this.$refs.signaturePad.undoSignature()},download(){const{isEmpty:t,data:n}=this.$refs.signaturePad.saveSignature();if(t)return void this.$notify({message:"Nothing to download",type:"warning"});const e=(new Date).getTime(),o=document.createElement("a");o.href=n,o.download=`Signature-${e}.png`,o.click(),this.$notify({message:"Downloaded",type:"success"})},onChangeColorPicker(t){this.options={penColor:t}},onChangeLineWidth(){this.options={...this.options,minWidth:this.lineWidth-.5,maxWidth:this.lineWidth}}}},d=c,f=e(1001),p=(0,f.Z)(d,a,s,!1,null,"38e21447",null),h=p.exports,g={name:"App",components:{Signature:h}},m=g,v=(0,f.Z)(m,i,r,!1,null,null,null),b=v.exports,y=e(6336),w=e(4193);o["default"].use(y.Z),o["default"].use(l(),{locale:w.Z}),o["default"].config.productionTip=!1,new o["default"]({render:t=>t(b)}).$mount("#app")},986:function(t,n,e){t.exports=e.p+"img/signature-logo-01.744cab81.png"}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return t[o](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(n,o,i,r){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&r||a>=r)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var i,r,a=o[0],s=o[1],u=o[2],l=0;if(a.some((function(n){return 0!==t[n]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(u)var c=u(e)}for(n&&n(o);l<a.length;l++)r=a[l],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(c)},o=self["webpackChunksignature"]=self["webpackChunksignature"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8369)}));o=e.O(o)})();
//# sourceMappingURL=app.45a85589.js.map