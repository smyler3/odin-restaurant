(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([n.id,"* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    min-height: 100vh;\n    min-width: 100vw;\n    background-color: gray;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#page {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    background-color: wheat;\n}\n\n#content {\n    display: flex;\n}\n\n.content-body {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    padding: 2rem 4rem;\n    width: 100%;\n}\n\n.center-text {\n    text-align: center;\n}\n\n/*\n * ---------------------------------------------------------------\n * Browsing Tab Styling\n * ---------------------------------------------------------------\n */\n\n.browsing-tabs {\n    display: flex;\n    justify-content: space-around;\n    padding: 0 10rem;\n    width: 100%;\n}\n\n.browse-tab {\n    width: 150px;\n    padding: 1rem;\n}\n.browse-tab:hover {\n    \n}\n\n.pressed {\n\n}\n\n/*\n * ---------------------------------------------------------------\n * Splash Page Styling\n * ---------------------------------------------------------------\n */\n.image-card {\n    display: flex;\n    justify-content: center;\n}\n\n.display-image {\n    height: 300px;\n    padding: 0 auto;\n}\n\n.quote-body {\n    font-size: x-large;\n}\n\n/*\n * ---------------------------------------------------------------\n * Menu Page Styling\n * ---------------------------------------------------------------\n */ \n.menu-content {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n}\n\n.menu-description {\n    padding: 0 5rem;\n}\n\n.menu-subsection-title {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.menu-subsection-title::before,\n.menu-subsection-title::after {\n    content: '';\n    flex-grow: 1;\n    height: 1px;\n    margin: 0 2rem;\n    background-color: #000000;\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    list-style: none;\n    width: 100%;\n}\n\n.menu-item {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 5rem;\n}\n\n\n/*\n * ---------------------------------------------------------------\n * Contact Page Styling\n * ---------------------------------------------------------------\n */ \n\n.contact-content {\n    display: grid;\n    grid: 1fr 2fr / 1fr 2fr;\n    gap: 2rem;\n    justify-items: center;\n} \n\n/*\n * -------------\n * Sidebar Styling\n * -------------\n */\n\n.contact-info {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    width: 100%;\n    padding: 1rem;\n    border: 2px solid #ffffff;\n}\n\n.logos {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n    width: 130px;\n    border-radius: 100%;\n    border: 2px solid #ffffff;\n    overflow: hidden;\n}\n\n.logo {\n    height: 60px;\n    width: auto;\n}\n\n.number:hover, .email:hover {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.hours-info {\n    grid-area: 2 / 1 / -1 / 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    padding: 1rem;\n    border: 2px solid #ffffff;\n}\n\n.hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    width: 100%;\n    padding: 1rem;\n}\n\n.booking-info {\n    padding: 0 2rem;\n    font-size: small;\n}\n\n/*\n * -------------\n * Staff Styling\n * -------------\n */\n\n.team-info {\n    grid-area: 1 / 2 / -1 / -1;\n    display: grid;\n    grid-template-rows: auto repeat(2, 1fr);\n    gap: 1rem;\n    width: 100%;\n    padding: 1rem;\n    border: 2px solid #ffffff;\n}\n\n.staff-card {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.staff-name {\n    border-top: 2px solid #ffffff;\n    border-radius: 100%;\n    font-weight: bold;\n    text-decoration: underline;\n    text-decoration-color: #ffffff;\n}\n\n.staff-blurb {\n    padding: 0 2rem;\n}\n\n.dishes {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    font-weight: lighter;\n    color: #fd8d8d;\n}",""]);const d=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);a&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],d=0;d<n.length;d++){var s=n[d],c=a.base?s[0]+a.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,a);a.byIndex=d,e.splice(d,0,{identifier:u,updater:m,references:1})}r.push(u)}return r}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=a(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var d=t(i[r]);e[d].references--}for(var s=a(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!n;)n=a[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),o=t.n(a),i=t(569),r=t.n(i),d=t(565),s=t.n(d),c=t(216),l=t.n(c),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=r().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"db3f81dd5fd4cd13ac13.jpg";function g(n){const e=document.createElement("div");e.classList.add("content-body");const t=document.createElement("h1");t.textContent="Surging Sushi",t.classList.add("center-text");const a=document.createElement("div");a.classList.add("image-card");const o=document.createElement("img");o.src=h,o.alt="Sushi boat",o.classList.add("display-image"),a.appendChild(o);const i=document.createElement("h3");i.textContent="The worlds first sushi train with boats. Dine on the finest japanese cusine, delivered by boats floating atop a gentle stream, flowing around each table. But be quick to select your dish from the water as electric eels wait amongst the water to shock visitors who lack nimble fingers!";const r=document.createElement("p"),d=document.createElement("i");d.textContent="The most immaculate dining experince of my life, regardless of the numbing sensation in my hands",d.classList.add("quote-body");const s=document.createElement("b");s.textContent="Heston Blumenthal",r.appendChild(d),r.appendChild(document.createTextNode(" - ")),r.appendChild(s),e.appendChild(t),e.appendChild(a),e.appendChild(i),e.appendChild(r),n.appendChild(e)}const y=t.p+"d22119bb982bd78cf265.svg",b=t.p+"7190a570b3e86120543c.svg";function x(n){const e=document.createElement("div");e.classList.add("content-body");const t=document.createElement("h1");t.textContent="Contact Information",t.classList.add("center-text"),e.appendChild(t),e.appendChild(function(){const n=document.createElement("div");return n.classList.add("contact-content"),n.appendChild(function(){const n=document.createElement("span");n.classList.add("contact-info");const e=document.createElement("div");e.classList.add("logos");const t=document.createElement("img");t.classList.add("logo"),t.src=y,t.alt="Sail boat logo";const a=document.createElement("img");a.classList.add("logo"),a.src=b,a.alt="Noodles logo",e.appendChild(t),e.appendChild(a);const o=document.createElement("p");o.classList.add("number"),o.textContent="0491 572 665";const i=document.createElement("p");i.classList.add("email"),i.textContent="SurgingSushi@fakeEmail.com";const r=document.createElement("p");return r.textContent="123 Fake Street, Fakeland",n.appendChild(e),n.appendChild(o),n.appendChild(i),n.appendChild(r),n}()),n.appendChild(function(){const n=document.createElement("span");n.classList.add("hours-info");const e=document.createElement("h2");e.textContent="Opening Hours";const t=document.createElement("p");return t.classList.add("booking-info","center-text"),t.textContent="Please note reservations are limited and essential",n.appendChild(e),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("hours"),[{day:"Monday",hours:"Closed"},{day:"Tuesday",hours:"Closed"},{day:"Wednesday",hours:"6PM - 12PM"},{day:"Thursday",hours:"6PM - 12PM"},{day:"Friday",hours:"4PM - 12PM"},{day:"Saturday",hours:"4PM - 12PM"},{day:"Sunday",hours:"4PM - 12PM"}].forEach((e=>{const t=document.createElement("p"),a=document.createElement("b");a.appendChild(document.createTextNode(`${e.day}:`)),t.appendChild(a),t.appendChild(document.createTextNode(` ${e.hours}`)),n.appendChild(t)})),n}()),n.appendChild(t),n}()),n.appendChild(function(){const n=document.createElement("span");n.classList.add("team-info","center-text");const e=document.createElement("h2");return e.textContent="Meet the Team",n.appendChild(e),function(n){[{name:"Remy",nickname:'"Little Chef"',blurb:"Remy, the culinary conductor in this exclusive kitchen, has curated a symphony of flavors for the high-dining sushi experience.With precision and an artist's touch, he composes a menu that showcases the pinnacle of sushi craftsmanship.",dishes:["Signature Omakase Platter","Truffle-Infused Toro Nigiri","Uni and Quail Egg Gunkan","Foie Gras and Fig Nigiri","Soy-Glazed Wagyu Beef Roll","Matcha-infused Dessert Sushi"]},{name:"Alfredo Linguini Gusteau",nickname:null,blurb:"Linguini, Remy's aspiring human collaborator, skillfully crafts a supporting ensemble of sides drawing from French and Mediterranean influences.These dishes dance in harmony with Remy's creations, elevating the dining experience to a crescendo of flavors.",dishes:["Amuse-Bouche Trio","Scallop Ceviche with Citrus","Lobster Tail with Herb Butter",'Electric Eel "Sous Vide"']}].forEach((e=>{const t=document.createElement("div");t.classList.add("staff-card");const a=document.createElement("p");a.classList.add("staff-name");const o=document.createTextNode(`${e.name} `),i=document.createElement("i");i.textContent=e.nickname||"",a.appendChild(o),a.appendChild(i);const r=document.createElement("p");r.classList.add("staff-blurb"),r.textContent=e.blurb;const d=document.createElement("div");d.classList.add("dishes"),e.dishes.forEach((n=>{const e=document.createElement("p");e.textContent=n,d.appendChild(e)})),t.appendChild(a),t.appendChild(r),t.appendChild(d),n.appendChild(t)}))}(n),n}()),n}()),n.appendChild(e)}const v=document.getElementById("content");!function(){const n=function(n){v.replaceChildren(),n(v)},e=document.getElementById("home-tab"),t=(document.getElementById("menu-tab"),document.getElementById("contact-tab"));e.addEventListener("click",(()=>{n(g)})),t.addEventListener("click",(()=>{n(x)}))}()})()})();