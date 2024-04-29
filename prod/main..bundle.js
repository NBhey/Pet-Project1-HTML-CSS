(()=>{"use strict";var n,t,e,o,r,i,a,p,l,s,f,d,g,c,x={83:(n,t,e)=>{e.d(t,{A:()=>h});var o=e(601),r=e.n(o),i=e(314),a=e.n(i),p=e(417),l=e.n(p),s=new URL(e(764),e.b),f=new URL(e(371),e.b),d=new URL(e(244),e.b),g=a()(r()),c=l()(s),x=l()(f),m=l()(d);g.push([n.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody {\n    background: #BA8B02;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom, #181818, #BA8B02);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom, #181818, #BA8B02); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n\n   /* background-color: s#FAF8F0; */\n   cursor: url(${c}) 0 0,pointer; \n}\na {\n    text-decoration: none;\n    color: #ffffff;\n}\n::-webkit-scrollbar {\n    width: 5px;\n  }\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;\n    background-color: #f9f9fd;\n    border-radius: 10px;\n  }\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: linear-gradient(0deg, rgba(82,80,59,1) 48%, rgba(182,144,60,1) 98%);\n  } \n.header {\n    max-width:1440px;\n    height: 80px;\n    margin: 0 auto;\n    background-color:#52503B;\n    display: flex;\n    gap: 290px;\n}\n.header__logo {\n    padding-left: 120px;\n    padding-top: 8px;\n    align-self: center;\n}\n.header__nav {\n    height: 60px;\n    align-self: center;\n}\n.navigation {\n    padding-top:20px ;\n    padding-left: 12.5px;\n    padding-right: 11.5px;\n    display: flex;\n    gap: 24px;\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 20px;\n    color:#ffffff;\n}\n.header__btn {\n    align-self: center;\n}\n.btn {\n    width:117px;\n    height: 42px;\n    text-align: center;\n    border-radius: 6px;\n    font-family:'Montserrat';\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 20px;\n    cursor: url(${x}) 0 0,pointer;   \n}\n.main {\n    position: relative;\n    margin:0 auto;\n    height:800px;\n    max-width:1440px;\n    background-image:url(${m});\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-top: 178px;\n}\n.main__logo { \n    margin: 0 auto;\n    max-width:256px;\n    margin-bottom: 34px;\n}\n.main__title { \n    margin: 0 auto;\n    margin-bottom:34px;\n}\n.title {\n    font-family: 'Montserrat';\n    font-size: 48px;\n    font-weight: 400;\n    line-height: 53px;\n    letter-spacing: 2px;\n    text-align: center;\n    color: #ffffff;\n}\n.main__subtitle {\n    margin: 0 auto;\n    margin-bottom: 116.75px;\n}\n.subtitle { \n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: center;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: #ffffff;\n}\n.descriptio {\n    background-color:#FAF8F0;\n    margin: 0 auto;\n    padding-top: 141px;\n    max-width: 1440px;\n    height: 410px;\n    padding-left: 361px;\n    padding-right: 336px;\n}\n.descriptio__wrap {\n    /* margin: 0 auto; */\n    display: flex;\n    gap: 40px;\n    justify-content:space-evenly;\n    align-content: center;\n    position: relative;\n}\n.descriptio__wrap::before {\n    position: absolute;\n    content: "";\n    height: 8px;\n    left: 47.38%;\n    right: 47.38%;\n    top: -33px;\n    background: #E08631;\n}\n.descriptio__text {\n    max-width:360px;\n}\n.descriptio__secondText {\n    max-width: 343px;\n}\n.slogan {\n    margin: 0 auto;\n    background-color: #ffffff;\n    padding-top: 140px;\n    padding-left: 76px;\n    padding-bottom:140px;\n    max-width: 1440px;\n}\n.slogan__text {\n\n    max-width:1287px;\n    margin: 0 auto;\n\n    position: relative;\n    font-family: 'Montserrat';\n    font-size: 96px;\n    font-weight: 700;\n    line-height: 96px;\n    letter-spacing: 0em;\n    text-align: center;\n}\n.slogan__text::before {\n    position: absolute;\n    content: "";\n    height: 8px;\n    left: 48.54%;\n    right: 48.54%;\n    top: -32px;\n    background: #E08631;\n}\n.img {\n    margin: 0 auto;\n    display: block;\n    max-width: 100%;    \n}\n.sleeping {\n    max-width: 1440px;\n    position: relative;\n    margin: 0 auto;\n    background-color:#FAF8F0;\n    padding-top: 138px;\n    padding-bottom: 99px;\n    padding-left: 136px;\n    padding-right: 136px;\n}\n.sleeping-wrap {\n    max-width:1200px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: 158px 140px;\n    grid-template-columns: repeat(3, 1fr);\n    row-gap: 30px;\n    column-gap: 76px;\n    grid-template-areas:\n        "header header header"\n        "bed bedroom bath" ;\n    justify-content: center;\n    justify-items:center   \n}\n.slepping-wrap__definition {\n    grid-area: header;\n    justify-self: center;\n    text-align: center;\n    position: relative;\n}\n.slepping-wrap__definition p {\n    text-decoration:overline;\n    max-width: 554px;\n}\n.sleeping-wrap__bed {\n    grid-area:bed;\n}\n.sleeping-bed{\n    text-align: center;\n}\n.sleeping-bed__title {\n    font-family: Montserrat;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0em;\n}\n.sleeping-bed__text {\n    font-family: Montserrat;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    letter-spacing: 0em;\n}\n.slepping-bedrooms {\n    text-align: center;\n}\n.sleeping-wrap__bedrooms {\n    grid-area:bedroom;\n}\n.sleeping-bedrooms__title{\n    font-family: Montserrat;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0em;\n}\n.sleeping-bedrooms__text{\n    font-family: Montserrat;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    letter-spacing: 0em;\n}\n.slepping-bathroom {\n    text-align: center;\n}\n.sleeping-wrap__bathroom {\n    grid-area:bath;\n}\n.sleeping-bathroom__title{\n    font-family: Montserrat;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0em;\n}\n.sleeping-bathroom__text{\n    font-family: Montserrat;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px;\n    letter-spacing: 0em;\n}\n.service {\n    margin: 0 auto;\n}\n.service__wrap {\n    background-color:#ffffff;\n    max-width: 1440px;\n    margin: 0 auto;\n    padding-top: 138px;\n    padding-bottom: 109px;\n    padding-left: 136px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \n    "title ."\n    "kitchen air"\n    "outdoor storage"\n    "coffee cutlery"\n    "natural take-away";\n    column-gap: 10px;\n}\n.title__service {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 14px;\n    grid-area: title;\n    margin-bottom: 32px;\n}\n.title-service__text{\n    max-width: 554px;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 24px;\n    \n}\n.modern-service {\n    grid-area: kitchen;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.air-service{\n    grid-area: air;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.outdoor-service {\n    grid-area: outdoor;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.storage-service{\n    grid-area:storage;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.coffee-service {\n    grid-area:coffee;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.cutlery-service {\n    grid-area:cutlery;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.natural-service {\n    grid-area:natural;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.take-away-service {\n    grid-area:take-away;\n    color: #52503B;\n    font-family: Montserrat;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    padding-bottom: 40px;\n}\n.reviews {\n    margin: 0 auto;\n}\n.reviews__wrap {\n    margin: 0 auto;\n    max-width: 1440px;\n    background-color: #FAF8F0;\n    padding-bottom: 150px;\n    padding-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n}\n.reviews__title {\n    max-width: 600px;\n    color: #52503B;\n    text-align: center;\n    font-family: Montserrat;\n    font-style: normal;\n    line-height: 36px; /* 112.5% */\n}\n.reviews__title > h2 {\n    font-weight: 400;\n    font-size: 32px;\n    margin-bottom: 14px;\n}\n.reviews__title > p {\n    max-width: 572px;\n    font-weight: 400;\n    font-size: 16px;\n}\n.reviews-comment {\n    max-width: 1220px;\n    max-height: 350px;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    gap: 20px;\n    padding-left: 80px;\n    overflow-x: hidden;    \n}\n\n.reviews-comment__1 {\n    min-width: 350px;\n    padding-top: 31px;\n    padding-bottom: 5px;\n    padding-left: 31px;\n    padding-right: 47px;\n    background-color: #f9f9fd;\n    animation: marquee 15s linear infinite;\n}\n@keyframes marquee {\n    from { transform: translateX(350%); }\n    to { transform: translateX(-430%); }\n  }\n\n.reviews-comment__1 p {\n    padding-top: 15px;\n}\n.name-comment {\n    position: relative;\n}\n.name-comment::before {\n    position: absolute;\n    content: "";\n    left: -10px;\n    width: 2px;\n    height: 20px;\n    background: #E08631;\n}\n\n.footer {\n    padding: 80px;\n    margin: 0 auto;\n    max-width: 1440px;\n    height: 610px;\n    background-color: #52503B;\n}\n\n.footer-wrap {\n    display: grid;\n    grid-template-areas:\n    "nav social form"\n    "data data data";\n    gap: 50px;\n    justify-content: start;\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 20px;\n    color:#ffffff;\n}\nh4 {\n    margin-bottom: 20px;\n    font-weight: 400;\n    letter-spacing: 2px\n}\n.footer__nav {\n    grid-area: nav;\n    margin-right: 50px;\n}\n.footer__nav > a {\n    display: block;\n    margin-bottom: 5px;\n}\n.footer__social-media{\n    grid-area: social;\n    margin-right: 90px;\n}\n\n.footer__input {\n    grid-area: form;\n    \n}\n.footer__input > input{\n    margin-top: 10px;\n    width: 300px;\n    height:  24px;\n    background-color:  whitesmoke;    \n    border: none;  \n    border-radius: 3px;\n}\n.footer__input >  input::placeholder {\n    font-family: 'Raleway';\n    font-size: 15px;\n    line-height: 24px;\n    color: rgba(112, 112, 112, 1);\n}\n.footer__input > button {\n    height: 15%;\n    width: 6%;\n    border-radius: 40px;\n    background-color: rgba(112, 112, 112, 1);\n    cursor: pointer ;\n}\n.footer__data {\n    grid-area: data;\n    justify-self: center;\n    text-align: center;\n}\n.footer__data > p{\n    margin-top: 10px;\n}`,""]);const h=g},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var p=0;p<this.length;p++){var l=this[p][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var f=[].concat(n[s]);o&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),r&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=r):f[4]="".concat(r)),t.push(f))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],p=0;p<n.length;p++){var l=n[p],s=o.base?l[0]+o.base:l[0],f=i[s]||0,d="".concat(s," ").concat(f);i[s]=f+1;var g=e(d),c={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)t[g].references++,t[g].updater(c);else{var x=r(c,o);o.byIndex=p,t.splice(p,0,{identifier:d,updater:x,references:1})}a.push(d)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var p=e(i[a]);t[p].references--}for(var l=o(n,r),s=0;s<i.length;s++){var f=e(i[s]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=l}}},659:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},244:(n,t,e)=>{n.exports=e.p+"images\\IMAGE4.82319c080bb1928d58bd.png"},764:(n,t,e)=>{n.exports=e.p+"images\\pointer1.26cccf5a42ae381fef96.png"},371:(n,t,e)=>{n.exports=e.p+"images\\pointer6.1cd3d03b4de1b6b4cabd.png"}},m={};function h(n){var t=m[n];if(void 0!==t)return t.exports;var e=m[n]={id:n,exports:{}};return x[n](e,e.exports,h),e.exports}h.m=x,h.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return h.d(t,{a:t}),t},h.d=(n,t)=>{for(var e in t)h.o(t,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),h.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;h.g.importScripts&&(n=h.g.location+"");var t=h.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=e[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=n})(),h.b=document.baseURI||self.location.href,h.nc=void 0,n=h(72),t=h.n(n),e=h(825),o=h.n(e),r=h(659),i=h.n(r),a=h(56),p=h.n(a),l=h(540),s=h.n(l),f=h(113),d=h.n(f),g=h(83),(c={}).styleTagTransform=d(),c.setAttributes=p(),c.insert=i().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=s(),t()(g.A,c),g.A&&g.A.locals&&g.A.locals})();