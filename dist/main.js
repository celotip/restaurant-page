(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var a=t(601),i=t.n(a),r=t(314),o=t.n(r)()(i());o.push([n.id,"body {\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(209, 215, 228);\n    margin: 0;\n}\n\nheader {\n    background-color: rgb(96, 96, 110);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    height: 60px;\n    align-items: center;\n}\n\nnav {\n    width: 30%;\n    display: flex;\n    justify-content: space-around;\n}\n\nbutton {\n    background-color: rgb(96, 96, 110);\n    border: none;\n    border-bottom: solid 1px grey;\n    font-size: large;\n    color: white;\n    cursor: pointer;\n    padding: 10px;\n    padding-bottom: 5px;\n    margin-bottom: 5px;\n}\n\nbutton:hover {\n    background-color: rgb(90, 90, 95);\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    margin-top: 15px;\n}\n\n#content div:first-child {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.home-container h1 {\n    font-family: cursive;\n    font-weight: 900;\n    font-size: 32px;\n}\n\n.text-container {\n    margin-top: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.card-container {\n    width: 100vw;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\n.card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n    padding: 0 30px;\n    text-align: justify;\n}\n\n.menu h2:nth-child(4) {\n    margin-top: 120px;\n}\n\n.card img {\n    margin-top: 15px;\n}\n\n.contact {\n    gap: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact > * {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact :last-child {\n    display: flex;\n    align-items: center;\n}",""]);const c=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);a&&o[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},o=[],c=0;c<n.length;c++){var d=n[c],s=a.base?d[0]+a.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=i(m,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=a(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<r.length;o++){var c=t(r[o]);e[c].references--}for(var d=a(n,i),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!n||!/^http(s?):/.test(n));)n=a[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=t.p+"dc92810da82c3da5e138.png",e=t.p+"b31a0c96923ddc8adeac.png",a=t.p+"4ac5aaf1292f6a576ad2.png",i=t.p+"426988c00676afff71b9.png",r=t.p+"966162923b0d33c315e8.png";var o=t(72),c=t.n(o),d=t(825),s=t.n(d),l=t(659),p=t.n(l),u=t(56),m=t.n(u),f=t(540),h=t.n(f),g=t(113),v=t.n(g),y=t(365),b={};b.styleTagTransform=v(),b.setAttributes=m(),b.insert=p().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=h(),c()(y.A,b),y.A&&y.A.locals&&y.A.locals;const x=document.querySelector("#content");function C(){const e=document.createElement("div");return e.classList.add("home"),e.classList.add("container"),e.appendChild(function(){const n=document.createElement("div");n.classList.add("heading-container");const e=document.createElement("h1");e.innerHTML="Welcome to AntaResto's webpage";const t=document.createElement("h3");return t.innerHTML="Feel a taste of Indonesian home cooking",n.appendChild(e),n.appendChild(t),n}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("logo-container");const t=new Image;return t.src=n,e.appendChild(t),e}()),e.appendChild(function(){const n=document.createElement("div");n.classList.add("text-container");const e=document.createElement("div");e.innerHTML="Hours:";const t=document.createElement("div");t.innerHTML="Tue - Sat: 11 a.m. - 10 p.m.";const a=document.createElement("div");return a.innerHTML="We are closed on Mondays and Sundays.",n.appendChild(e),n.appendChild(t),n.appendChild(a),n}()),e}function E(n,e,t){const a=document.createElement("div");a.classList.add("card");const i=document.createElement("div");i.classList.add("food-icon-container");const r=new Image;r.src=n,i.appendChild(r);const o=document.createElement("div");o.classList.add("text-container");const c=document.createElement("h3");c.innerHTML=e;const d=document.createElement("div");return d.innerHTML=t,o.appendChild(c),o.appendChild(d),a.appendChild(o),a.appendChild(i),a}function L(n,e){const t=document.createElement("div"),a=document.createElement("h2");a.innerHTML=n;const i=document.createElement("div");return i.innerHTML=e,t.appendChild(a),t.appendChild(i),t}x.appendChild(C());const w=document.getElementById("home"),T=document.getElementById("menu"),M=document.getElementById("contact");w.addEventListener("click",(()=>{x.innerHTML="",x.appendChild(C())})),T.addEventListener("click",(()=>{x.innerHTML="",x.appendChild(function(){const n=document.createElement("div");n.classList.add("menu"),n.classList.add("container");const t=document.createElement("h1");t.innerHTML="Menu";const o=document.createElement("h2");o.innerHTML="Main Dishes";const c=document.createElement("h2");c.innerHTML="Snacks";const d=document.createElement("div");d.classList.add("card-container");const s=document.createElement("div");return s.classList.add("card-container"),n.appendChild(t),n.appendChild(o),d.appendChild(E(i,"Ayam Rica-Rica","A chicken dish of bold and spicy flavor, achieved through a blend of chili peppers, shallots, garlic, ginger, and various herbs and spices.")),d.appendChild(E(e,"Opor Ayam","A creamy and mildly spiced chicken stew cooked in coconut milk, infused with aromatic spices like lemongrass, galangal, and turmeric.")),n.appendChild(d),n.appendChild(c),s.appendChild(E(a,"Batagor","Fried fish dumplings served with a delicious peanut sauce")),s.appendChild(E(r,"Pisang Goreng","Traditional snack made by frying ripe bananas coated in a batter, resulting in a crispy exterior and soft, sweet interior.")),n.appendChild(s),n}())})),M.addEventListener("click",(()=>{x.innerHTML="",x.appendChild(function(){const n=document.createElement("div");return n.classList.add("contact"),n.classList.add("container"),n.appendChild(L("Visit us at:","Jalan Raya Ubud No. 15, Ubud, Gianyar, Bali, Indonesia")),n.appendChild(L("Contact us at:","Phone/Whatsapp: +62 812 3456 7890")),n.appendChild(L("Visit our social media:",'<i class="fa fa-instagram" style="font-size:24px"></i>&nbsp: AntaResto_official &nbsp&nbsp&nbsp <i class="fa fa-facebook-f" style="font-size:24px"></i>&nbsp: AntaResto Official ')),n}())}))})()})();