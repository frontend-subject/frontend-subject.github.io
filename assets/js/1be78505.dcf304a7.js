"use strict";(self.webpackChunkfrontend_subject=self.webpackChunkfrontend_subject||[]).push([[514],{4650:function(e,n,t){t.d(n,{Z:function(){return M}});var r=t(7294),u=t(9055),c=t(1262),a=t(7462),s=t(5861),l=t(7757),o=t.n(l);function i(){return(i=(0,s.Z)(o().mark((function e(n){var t,r,u,c,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f(n,"template"),r=f(n,"style"),u=f(n,"script"),e.next=5,p();case 5:return c=e.sent,a=c.transform(u,{presets:[c.availablePresets.env]}).code,s="\n    var comp = (function(exports){\n      var module={};\n      module.exports=exports;\n      "+a+";\n      return module.exports.__esModule?module.exports.default:module.exports;\n    })({});\n    Vue.createApp(comp).mount(document.getElementById('app'))\n  ",e.abrupt("return",{html:'<div id="app">'+t+"</div>",css:r,js:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n){var t=e.match(new RegExp("<"+n+">([\\s\\S]+)</"+n+">","gim"));return t&&(t=t[0].replace("<"+n+">","").replace("</"+n+">","")),t||""}var m=null;function p(){return m||(m=Promise.all([t.e(140),t.e(380)]).then(t.t.bind(t,140,23)).catch((function(e){throw m=null,e})))}var d=1;function v(e){var n=e.html,t=e.css,u=e.js,c=e.scope,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){var e=a.current,r=e.contentDocument,s=e.contentWindow;c&&Object.keys(c).forEach((function(e){s[e]=c[e]})),r.body.innerHTML=n+"<style>"+t+"</style>";var l=r.createElement("script");l.innerHTML=u,r.body.appendChild(l)}),[n,t,u,c]),r.createElement("iframe",{key:d++,ref:a})}var h=(0,r.memo)(v),x=t(412),E="playground_5jWL",b=null;x.Z.canUseDOM&&(b=t(4631),t(8677),t(4146),t(790),t(6629),t(6531),t(6876),t(2426),t(9589),t(1548));var y={vanilla:{mode:"htmlmixed",htmlMode:!0},react:{mode:"jsx"},vue:{mode:"text/x-vue"}};function w(e){var n=e.value,t=e.onChange,u=e.type,c=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useEffect)((function(){a.current=b(c.current,Object.assign({value:n,lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,tabSize:2},y[u])),a.current.on("change",(function(){t(a.current.getValue())}))}),[]),r.createElement("div",{className:E,ref:c})}var g=t(1130),k={vanilla:function(e){return{html:f(e,"html"),css:f(e,"style"),js:f(e,"script")}},vue:function(e){return i.apply(this,arguments)},react:function(){}};function j(e){var n=(0,r.useState)(e.children),u=n[0],c=n[1],l=(0,r.useState)(null),i=l[0],f=l[1],m=(0,r.useState)(""),p=m[0],d=m[1],v=(0,g.Z)((function(e){c(e)}),{wait:300});return(0,r.useEffect)((function(){u!==e.children&&c(e.children)}),[e.children]),(0,r.useEffect)((function(){(0,s.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(821),t.e(62)]).then(t.bind(t,2062));case 2:n=e.sent,f(n.default);case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,r.useEffect)((function(){(0,s.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k[e.metastring](u);case 2:t=n.sent,d(t);case 4:case"end":return n.stop()}}),n)})))()}),[u]),r.createElement("div",{className:"docusaurus-demo-block"},r.createElement(w,{type:e.metastring,value:u,onChange:function(e){return v.run(e)}}),r.createElement("br",null),i&&r.createElement(h,(0,a.Z)({},p,{scope:i})))}var Z,M=(Z=u.Z,function(e){var n=e.vanilla,t=e.vue,u=e.react;return n||t||u?r.createElement(c.Z,{fallback:"\u52a0\u8f7d\u4e2d..."},(function(){return r.createElement(j,e)})):r.createElement(Z,e)})}}]);