function e(e,o,a){const n=((e,o,a,n=G,t)=>{const i={o:e,state:n,t:null,i:null,sources:null,l:null,u:null,value:o,p:U,context:U?U.context:null,m:!1};return null===U||U!==D&&(U.i?U.i.push(i):U.i=[i]),i})(e,o,0,G);t(n)}function o(e){if(null===T)return e();const o=T;T=null;try{return e()}finally{T=o}}function a(){if(this.sources&&this.state)if(this.state===G)t(this);else{const e=E;E=null,s(()=>c(this),!1),E=e}if(T){const e=this.v?this.v.length:0;T.sources?(T.sources.push(this),T.l.push(e)):(T.sources=[this],T.l=[e]),this.v?(this.v.push(T),this.h.push(T.sources.length-1)):(this.v=[T],this.h=[T.sources.length-1])}return this.value}function n(e,o,a){return e.M&&e.M(e.value,o)||(e.value=o,e.v&&e.v.length&&s(()=>{for(let o=0;e.v.length>o;o+=1){const a=e.v[o],n=S&&S.running;n&&S.G.has(a),(n?a.j:a.state)||(a.m?E.push(a):J.push(a),a.v&&l(a)),n||(a.state=G)}if(E.length>1e6)throw E=[],Error()},!1)),o}function t(e){if(!e.o)return;d(e);const o=U,a=T;T=U=e,((e,o,a)=>{let t;try{t=e.o(o)}catch(i){return e.m&&(e.state=G,e.i&&e.i.forEach(d),e.i=null),e.t=a+1,u(i)}e.t&&e.t>a||(null!=e.t&&"v"in e?n(e,t):e.value=t,e.t=a)})(e,e.value,A),T=a,U=o}function i(e){if(0===e.state)return;if(e.state===j)return c(e);if(e.D&&o(e.D.U))return e.D.S.push(e);const a=[e];for(;(e=e.p)&&(!e.t||A>e.t);)e.state&&a.push(e);for(let o=a.length-1;o>=0;o--)if((e=a[o]).state===G)t(e);else if(e.state===j){const o=E;E=null,s(()=>c(e,a[0]),!1),E=o}}function s(e,o){if(E)return e();let a=!1;o||(E=[]),J?a=!0:J=[],A++;try{const o=e();return(e=>{if(E&&(r(E),E=null),e)return;const o=J;J=null,o.length&&s(()=>M(o),!1)})(a),o}catch(n){a||(J=null),E=null,u(n)}}function r(e){for(let o=0;e.length>o;o++)i(e[o])}function c(e,o){e.state=0;for(let a=0;e.sources.length>a;a+=1){const n=e.sources[a];if(n.sources){const e=n.state;e===G?n===o||n.t&&n.t>=A||i(n):e===j&&c(n,o)}}}function l(e){for(let o=0;e.v.length>o;o+=1){const a=e.v[o];a.state||(a.state=j,a.m?E.push(a):J.push(a),a.v&&l(a))}}function d(e){let o;if(e.sources)for(;e.sources.length;){const o=e.sources.pop(),a=e.l.pop(),n=o.v;if(n&&n.length){const e=n.pop(),t=o.h.pop();n.length>a&&(e.l[t]=a,n[a]=e,o.h[a]=t)}}if(e.i){for(o=e.i.length-1;o>=0;o--)d(e.i[o]);e.i=null}if(e.u){for(o=e.u.length-1;o>=0;o--)e.u[o]();e.u=null}e.state=0}function u(e,o=U){const a=(e=>Error("",{cause:e}))(e);throw a}function f(e,a){return o(()=>e(a||{}))}function p(e,a,n){let t;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},s=a?()=>o(()=>document.importNode(t||(t=i()),!0)):()=>(t||(t=i())).cloneNode(!0);return s.cloneNode=s,s}function m(e,o,a){null==a?e.removeAttribute(o):e.setAttribute(o,a)}function v(e,o){null==o?e.removeAttribute("class"):e.className=o}function h(o,a,n,t){if(void 0===n||t||(t=[]),"function"!=typeof a)return g(o,a,t,n);e(e=>g(o,a(),e,n),t)}function y(e){const o="$$"+e.type;let a=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==a&&Object.defineProperty(e,"target",{configurable:!0,value:a}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>a||document});a;){const n=a[o];if(n&&!a.disabled){const t=a[o+"Data"];if(void 0!==t?n.call(a,t,e):n.call(a,e),e.cancelBubble)return}a=a._$host||a.parentNode||a.host}}function g(o,a,n,t,i){for(;"function"==typeof n;)n=n();if(a===n)return n;const s=typeof a,r=void 0!==t;if(o=r&&n[0]&&n[0].parentNode||o,"string"===s||"number"===s)if("number"===s&&(a=""+a),r){let e=n[0];e&&3===e.nodeType?e.data=a:e=document.createTextNode(a),n=x(o,n,t,e)}else n=""!==n&&"string"==typeof n?o.firstChild.data=a:o.textContent=a;else if(null==a||"boolean"===s)n=x(o,n,t);else{if("function"===s)return e(()=>{let e=a();for(;"function"==typeof e;)e=e();n=g(o,e,n,t)}),()=>n;if(Array.isArray(a)){const s=[],c=n&&Array.isArray(n);if(b(s,a,n,i))return e(()=>n=g(o,s,n,t,!0)),()=>n;if(0===s.length){if(n=x(o,n,t),r)return n}else c?0===n.length?z(o,s,t):((e,o,a)=>{let n=a.length,t=o.length,i=n,s=0,r=0,c=o[t-1].nextSibling,l=null;for(;t>s||i>r;)if(o[s]!==a[r]){for(;o[t-1]===a[i-1];)t--,i--;if(t===s){const o=n>i?r?a[r-1].nextSibling:a[i-r]:c;for(;i>r;)e.insertBefore(a[r++],o)}else if(i===r)for(;t>s;)l&&l.has(o[s])||o[s].remove(),s++;else if(o[s]===a[i-1]&&a[r]===o[t-1]){const n=o[--t].nextSibling;e.insertBefore(a[r++],o[s++].nextSibling),e.insertBefore(a[--i],n),o[t]=a[i]}else{if(!l){l=new Map;let e=r;for(;i>e;)l.set(a[e],e++)}const n=l.get(o[s]);if(null!=n)if(n>r&&i>n){let c,d=s,u=1;for(;++d<t&&i>d&&null!=(c=l.get(o[d]))&&c===n+u;)u++;if(u>n-r){const t=o[s];for(;n>r;)e.insertBefore(a[r++],t)}else e.replaceChild(a[r++],o[s++])}else s++;else o[s++].remove()}}else s++,r++})(o,n,s):(n&&x(o),z(o,s));n=s}else if(a.nodeType){if(Array.isArray(n)){if(r)return n=x(o,n,t,a);x(o,n,null,a)}else null!=n&&""!==n&&o.firstChild?o.replaceChild(a,o.firstChild):o.appendChild(a);n=a}else console.log()}return n}function b(e,o,a,n){let t=!1;for(let i=0,s=o.length;s>i;i++){let s,r=o[i],c=a&&a[i];if(null==r||!0===r||!1===r);else if("object"==(s=typeof r)&&r.nodeType)e.push(r);else if(Array.isArray(r))t=b(e,r,c)||t;else if("function"===s)if(n){for(;"function"==typeof r;)r=r();t=b(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||t}else e.push(r),t=!0;else{const o=r+"";e.push(c&&3===c.nodeType&&c.data===o?c:document.createTextNode(o))}}return t}function z(e,o,a=null){for(let n=0,t=o.length;t>n;n++)e.insertBefore(o[n],a)}function x(e,o,a,n){if(void 0===a)return e.textContent="";const t=n||document.createTextNode("");if(o.length){let n=!1;for(let i=o.length-1;i>=0;i--){const s=o[i];if(t!==s){const o=s.parentNode===e;n||i?o&&s.remove():o?e.replaceChild(t,s):e.insertBefore(t,a)}else n=!0}}else e.insertBefore(t,a);return[t]}const w={equals:(e,o)=>e===o};let M=r;const G=1,j=2,D={i:null,u:null,context:null,p:null};var U=null;let S=null,T=null,E=null,J=null,A=0;const k="_$DX_DELEGATE",V=p('<div><div><a href="#top"></a><a href="#conocernos">Conocernos</a><a href="#sobre-mi">Sobre Mi</a><a href="#trayectoria-musical">Trayectoria Musical</a><a href="#bio">Biografía</a></div><button>^'),C=()=>{const[o,t]=((e,o)=>{const t={value:!0,v:null,h:null,M:(o=o?Object.assign({},w,o):w).equals||void 0};return[a.bind(t),e=>("function"==typeof e&&(e=e(t.value)),n(t,e))]})();return(()=>{const a=V(),n=a.firstChild,i=n.firstChild,s=n.nextSibling;return i.style.setProperty("background-image",'url("icon192.png")'),s.$$click=()=>t(e=>!e),e(e=>{const t="b "+(o()?"e":"");return t!==e._v$&&v(a,e._v$=t),"c"!==e._v$2&&v(n,e._v$2="c"),"d"!==e._v$3&&v(i,e._v$3="d"),e},{_v$:void 0,_v$2:void 0,_v$3:void 0}),a})()};((e,o=window.document)=>{const a=o[k]||(o[k]=new Set);for(let n=0,t=e.length;t>n;n++){const t=e[n];a.has(t)||(a.add(t),o.addEventListener(t,y))}})(["click"]);const $="/7da769.jpg",L="/74b398.jpg",_=p('<div><span><i>Designed by qeleb</i><a href="https://github.com/qeleb"><svg width="1.6rem" viewBox="0 0 98 96"><path fill="#443850" d="M49 0C22 0 0 22 0 49 0 71 14 89 34 96c2.4.5 3-1.1 3-2.4 0-1.1-.1-5.1-.1-9.1-14 3-16-5.9-16.4-5.9-2.2-5.7-5.4-7.2-5.4-7.2-4.5-3.0.3-3.0.3-3.0 4.9.3 7.5 5 7.5 5 4.4 7.5 11 5.4 14.2 4.1.4-3.2 1.7-5.4 3.1-6.6-11-1.1-22-5.4-22.3-24.3 0-5.4 2-9.8 5-13.2-.5-1.2-2.2-6.3.5-13.0 0 0 4-1.3 13.4 5a47 47 0 0 1 12.2-1.6 47 47 0 0 1 12.2 1.6c9.3-6.4 13-5.1 13.4-5.1 2.7 6.8.97 11.8.5 13a19 19 0 0 1 5 13.2c0 19-11 23-22.3 24.3 1.8 1.6 3.3 4.5 3.3 9 0 6.6-.1 12-.1 13.5 0 1.3.9 2.9 3.3 2.4a49 49 0 0 0 33.4-47C98 22 76 0 49 0z"></path></svg></a></span><span>Jennifer Gonzalez Music — 2023'),q=()=>(()=>{const o=_();return e(()=>v(o,"_")),o})(),B=p('<div><a href="https://www.facebook.com/jennifer.gonzalez.58760"><svg viewBox="0 0 40 40"><linearGradient id="i" x1="-277.38" x2="-277.38" y1="406.6" y2="407.57" gradientTransform="matrix(40 0 0 -40 11115 16212.33)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0062e0"></stop><stop offset="1" stop-color="#19afff"></stop></linearGradient><circle fill="url(#i)" cx="20" cy="20" r="20"></circle><path fill="#fff" d="m28 25.6.9-5.6h-5.3v-4c0-1.6.6-3 3-3H29V8c-1.4-0-3-.4-4.4-.4-4.6 0-8 3-8 8V20h-5v5.6h5v14a18.4 18.4 0 0 0 6.6 0V25.6h4.4z"></path></svg></a><a href="https://www.instagram.com/jennifergonzalezmusic"><svg viewBox="0 0 512 512"><radialGradient id="j" cx="56.4" cy="19.2" r="711.3" gradientTransform="translate(-37 444)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed576"></stop><stop offset=".3" stop-color="#f47133"></stop><stop offset=".6" stop-color="#bc3081"></stop><stop offset="1" stop-color="#4c63d2"></stop></radialGradient><path fill="url(#j)" d="M96 23c-16 6-30 15-44 29-13 13-22 27-28 43s-10 34-11 60-2 34-2 101l2 102c1 26 5 44 11 59 6 17 15 30 29 44 13 14 27 22 43 28s34 11 60 12l101 1 102-1c26-2 44-6 59-12a121 121 0 0 0 72-72c6-15 11-33 12-59l1-102-1-101c-2-26-6-44-12-60s-14-30-28-43c-14-14-27-22-44-29-15-6-33-10-59-11-27-1-35-2-102-2l-101 2c-26 1-44 5-60 11zm261 33c24 1 37 5 45 9 12 4 20 9 29 18 8 9 14 17 18 28 3 9 7 22 9 46l1 99c0 65 0 74-2 100-1 24-5 37-8 45a77 77 0 0 1-47 47c-8 4-21 8-45 9l-100 1-99-1c-24-1-37-5-46-9a81 81 0 0 1-47-47c-3-8-7-21-8-45l-1-100 1-99c1-24 5-37 8-46 5-11 10-19 19-28 8-9 17-14 28-18 9-4 22-8 46-9l99-1 100 1z"></path><radialGradient id="k" cx="154.1" cy="134.6" r="365.3" gradientTransform="translate(-24 253)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed576"></stop><stop offset=".3" stop-color="#f47133"></stop><stop offset=".6" stop-color="#bc3081"></stop><stop offset="1" stop-color="#4c63d2"></stop></radialGradient><path fill="url(#k)" d="M131 256a126 126 0 1 0 253 0 126 126 0 0 0-253 0zm208 0a82 82 0 1 1-164 0 82 82 0 0 1 164 0z"></path><circle cx="388.6" cy="125" r="29.5" fill="#654c9f"></circle></svg></a><a href="https://www.youtube.com/@JenniferGonzalezMusic"><svg viewBox="0 0 461 461"><rect x="160" y="160" width="160" height="160" fill="white"></rect><path fill="#f61c0d" d="M365 67H96c-53 0-96 43-96 96v135c0 53 43 96 96 96h269c53 0 96-43 96-96V163c0-53-43-96-96-96zm-64 170-127 60c-3 2-7-1-7-4V169c0-4 4-7 8-5l126 64c3 2 3 7 0 9z"></path></svg></a><a href="https://www.tiktok.com/@jennifergonzalezmusic"><svg viewBox="0 0 24 24"><path fill="#fff" d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.3V2h-3.4v13.7a2.9 2.9 0 0 1-5.2 1.7 2.9 2.9 0 0 1 3.2-4.5V9.4A6.3 6.3 0 0 0 5 20.1a6.3 6.3 0 0 0 10.8-4.4v-7a8.2 8.2 0 0 0 4.8 1.5V6.8a4.8 4.8 0 0 1-1-.1z">'),O=()=>(()=>{const o=B();return e(()=>v(o,"a")),o})(),F=p('<div><a href="https://open.spotify.com/artist/6wsnBNKBlKHCNtLXeuDhXy"><svg viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8a248 248 0 1 0 .2 496A248 248 0 0 0 248 8Z"></path><path d="M407 231a23 23 0 0 1-13-4c-71-43-199-53-281-30-4 1-8 3-13 3a23 23 0 0 1-23-24c0-14 8-21 17-24a419 419 0 0 1 118-15c73 0 150 15 205 48a24 24 0 0 1 13 23c0 14-11 23-23 23zm-31 76c-5 0-9-2-12-4-63-37-156-52-239-30-5 1-7 3-12 3-11 0-19-9-19-19s5-18 16-21a336 336 0 0 1 98-14c65 0 128 16 177 45 8 5 11 11 11 20a19 19 0 0 1-19 20zm-27 66c-4 0-7-1-11-4-62-38-135-39-207-25-4 1-9 3-12 3-10 0-16-8-16-16 0-10 6-15 14-17 82-18 166-17 237 26 6 4 10 7 10 16.9s-7 15.4-15 16z"></path></svg></a><a href="https://music.apple.com/us/artist/jennifer-gonzalez/708294552"><svg viewBox="0 0 361 361"><linearGradient id="a" x1="180" x2="180" y1="359" y2="8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fa233b"></stop><stop offset="1" stop-color="#fb5c74"></stop></linearGradient><path fill="url(#a)" d="M360 113V100c0-4 0-7-0-11-0-8-1-16-2-24a76 76 0 0 0-63-63C287 1 279 1 271.1.3L260 0H100c-4 0-7 0-10.8.2-8 0-15.9.7-24 2a76 76 0 0 0-63 63C1 73 1 81 0 89L0 100v148A2774 2774 0 0 0 0 271c0 8 1 16 2 24a76 76 0 0 0 63 63c8 1 16 2 24 2l11 0h160c4 0 7 0 11-0 8-0 16-1 24-2a76 76 0 0 0 63-63 171 171 0 0 0 2-24l0-11V113z"></path><path fill="#fff" d="M255 55c-1 0-9 1-10 2L138 78a15 15 0 0 0-7 3c-2 2-3 4-4 7-.1.6-0 2-0 4v134c0 3-0 6-2 9-2 3-5 3-8 4l-7 1a122 122 0 0 0-20 5 28 28 0 0 0-19 30 28 28 0 0 0 22 25c5 1 11 1 19-1a40 40 0 0 0 13-5 31 31 0 0 0 15-22 62 62 0 0 0 1-13V143c0-6 2-8 7-9l93-19c6-1 8.6.5 9 7v79c0 3 0 6-2 9-2 3-5 3-8 4l-7 1a122 122 0 0 0-20 5 28 28 0 0 0-19 30 28 28 0 0 0 22 24c5 1 11 1 19-1a39 39 0 0 0 13-5 31 31 0 0 0 15-22c1-5 1-9 1-13V65c0-6-3-10-9-10z"></path></svg></a><a href="https://music.youtube.com/channel/UCHoLHYGlKpL-TeNTejVlzgQ"><svg viewBox="0 0 176 176"><circle cx="88" cy="88" r="88" fill="red"></circle><path fill="#FFF" d="M88 46a42 42 0 1 1 0 84 42 42 0 0 1 0-84m0-4a46 46 0 1 0 0 92 46 46 0 0 0 0-92z"></path><path fill="#FFF" d="m72 111 39-24-39-22z"></path></svg></a><a href="https://music.amazon.com/artists/B0171RLIKU/jennifer-gonzalez"><svg viewBox="0 0 89 52"><g transform="translate(-.5 -18)"><linearGradient id="i" x1="-349.9" x2="-349.2" y1="353.4" y2="353.4" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#i)" d="M59.7 40.5c-.6.4-1.5.7-2.6.7-1.7 0-3.3-.2-5-.7l-.9-.2c-.3 0-.4.2-.4.6v1l.2.7.6.4c1.6.7 3.4 1 5.4 1 2 0 3.7-.5 5-1.5 1.3-1 2-2.3 2-4 0-1.2-.3-2-.9-3a7 7 0 0 0-3-2l-2.8-1c-1-.4-2-.8-2.2-1.2-.4-.4-.6-.8-.6-1.5 0-1.5 1-2.3 3.4-2.3 1.3 0 2.6.2 3.8.6l.8.2c.3 0 .5-.2.5-.6v-1l-.2-.7c-.1-.2-.3-.3-.6-.4-1.5-.5-3-.8-4.5-.8-2 0-3.5.5-4.7 1.4a4.5 4.5 0 0 0-1.8 3.7c0 2.3 1.3 4 4 5l3 1c1 .4 1.6.7 2 1.1.4.4.5.8.5 1.4 0 .8-.3 1.5-.9 2z"></path><linearGradient id="b" x1="-349.9" x2="-349.2" y1="353.5" y2="353.5" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#b)" d="M44 26v13.3a9.4 9.4 0 0 1-5 1.7c-1 0-2-.3-2.4-.9-.5-.6-.7-1.5-.7-2.8V26c0-.5-.2-.7-.7-.7H33c-.5 0-.7.2-.7.7v12.4c0 1.7.4 3 1.3 4 .9.9 2.2 1.4 3.8 1.4 2.3 0 4.6-.8 6.8-2.4l.2 1.2c0 .3.1.4.3.5l.6.1h1.5c.5 0 .7-.2.7-.7V26c0-.5-.2-.7-.7-.7h-2c-.6 0-.8.3-.8.7z"></path><linearGradient id="c" x1="-349.9" x2="-349.2" y1="353.6" y2="353.6" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#c)" d="M25 43.4h2c.5 0 .7-.2.7-.7V30.2c0-1.7-.4-3-1.3-4a5 5 0 0 0-3.8-1.4c-2.3 0-4.7.8-7 2.5-.8-1.7-2.3-2.5-4.5-2.5s-4.4.8-6.6 2.3l-.2-1c0-.3-.1-.4-.3-.5l-.5-.1H2c-.5 0-.7.2-.7.7v16.6c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V29.3c1.7-1 3.4-1.6 5.2-1.6 1 0 1.7.3 2.1.9.4.6.7 1.4.7 2.6v11.5c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V29.3a9.8 9.8 0 0 1 5.2-1.6c1 0 1.7.3 2.1.9.4.6.7 1.4.7 2.6v11.5c0 .5.2.7.7.7z"></path><linearGradient id="d" x1="-349.9" x2="-349.2" y1="353.3" y2="353.3" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#d)" d="M79.5 56.7a88.3 88.3 0 0 1-77.6-4.8l-.6-.2c-.7 0-1.1.8-.4 1.5a65.2 65.2 0 0 0 80 5.8c1.7-1.2.3-3-1.4-2.3z"></path><linearGradient id="e" x1="-349.9" x2="-349.2" y1="353.2" y2="353.2" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#e)" d="M79.2 29.4c.9-1 2.3-1.5 4.3-1.5 1 0 2 .1 2.9.4l.6.1c.3 0 .5-.2.5-.7v-1l-.2-.7-.5-.4c-1.3-.3-2.6-.6-3.8-.6-2.8 0-4.9.8-6.5 2.5a10 10 0 0 0-2.3 7c0 3 .7 5.3 2.2 7 1.5 1.6 3.6 2.4 6.4 2.4 1.5 0 3-.2 4-.7.3-.1.5-.2.6-.4l.1-.7v-1c0-.5-.2-.7-.5-.7a12.5 12.5 0 0 1-3.7.6c-2 0-3.3-.5-4.2-1.5-.9-1-1.3-2.6-1.3-4.7v-.5c.1-2.2.5-3.8 1.4-4.8z"></path><linearGradient id="f" x1="-349.9" x2="-349.2" y1="353.1" y2="353.1" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#f)" d="M83.7 66c5.2-4.4 6.6-13.5 5.5-15-.5-.6-3-1.2-6-1.2-3.2 0-7 .7-10 2.7-.9.6-.7 1.4.2 1.3 3-.4 10-1.2 11.4.4 1.2 1.6-1.4 8.2-2.6 11-.3.9.4 1.2 1.3.6z"></path><linearGradient id="g" x1="-349.9" x2="-349.2" y1="353.3" y2="353.3" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#g)" d="M69.8 25.4h-2c-.5 0-.7.2-.7.7v16.6c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V26c0-.4-.2-.7-.7-.7z"></path><linearGradient id="h" x1="-349.9" x2="-349.2" y1="353.4" y2="353.4" gradientTransform="matrix(91 -91 -91 -91 64008.5 390.5)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0c6cb3"></stop><stop offset=".3" stop-color="#1e84c4"></stop><stop offset=".9" stop-color="#4cc0ef"></stop><stop offset="1" stop-color="#4cc0ef"></stop></linearGradient><path fill="url(#h)" d="M70.4 18.6c-.4-.4-1-.6-1.7-.6s-1.2.2-1.6.6a2 2 0 0 0-.6 1.5c0 .6.2 1.2.6 1.5.4.4.9.6 1.6.6.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5s-.1-1.2-.5-1.5z"></path></g></svg></a><a href="https://www.pandora.com/artist/jennifer-gonzalez/ARbgpwmz6kpPdP9"><img>'),H=()=>(()=>{const o=F();return m(o.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstChild,"src","/482e72.webp"),e(()=>v(o,"a")),o})(),N="j",R=p('<div><div id="top"></div><div id="conocernos"><div><h2>Te Invitamos a Conocernos</h2><div>En este site, me conocerás personalmente, de una forma única y transparente, donde encontrarás Espiritualidad genuina, Testimonios en nuestros Vlogs y Vivencias en nuestro Podcast. Nuestra Música y Marca personal en nuestra Tienda de <i>Faith&LoveMerchandise</i>. Tambien conocerás un lado de mi nunca antes visto como Emprendedora en Nuestra Tienda Online de Modesty Love Design & Products donde encontraras un sin fin de productos para tu hogar tu vida personal y salud y bienestar.</div></div></div><div id="bio"><form action="https://www.paypal.com/donate" method="post" target="_blank"><input type="hidden" name="business" value="AT6X4DAVFMNDN"><input type="hidden" name="no_recurring" value="0"><input type="hidden" name="currency_code" value="USD"><input type="image" name="submit" alt="Donate"></form>Tu donación es una gran bendición para nuestro ministerio musical. ¡Únete a nosotros y apoya nuestra misión!</div><div id="sobre-mi"><div><h2>Sobre Mi</h2><div>Jennifer González es una apasionada de la nutrición y el bienestar, una emprendedora multifacética y una escritora de corazón. Además de sus habilidades como compositora y cantante, asume diversos roles en la actualidad, compartiendo su amor por el bienestar y la espiritualidad con mujeres de todo el mundo.</div><div>Actualmente, ministra grupos de apoyo transformadores como "Dios Me Hizo Mujer con Propósito Divino" y "Florece en Salud y Bienestar". Desde 2007, su ministerio musical ha llevado el mensaje de salvación a través de cánticos que elevan al cielo.</div><div>Jennifer ha tenido el privilegio de llevar su música y su mensaje a países como República Dominicana, México, Puerto Rico y Estados Unidos, tocando corazones como cantante y oradora.</div><div>Esta noche, te invitamos a descubrir su más reciente producción musical: <i>"La esencia de tu amor"</i>.</div><div>Jennifer González, una verdadera líder en el emprendimiento y el bienestar en Cristo Jesús. ¡Bienvenidos a su mundo de inspiración y transformación en su sitio web!</div></div></div><div><iframe src="https://www.youtube-nocookie.com/embed/H3r0f3DgJAc?si=Entt5PvZeHw74CJQ" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share" allowfullscreen></iframe></div><div id="trayectoria-musical"><div><h2>Trayectoria Musical</h2><div>Desde el año 2006 hasta la fecha actual, la trayectoria musical de Jennifer González ha estado marcada por la guía de Dios en su ministerio. Durante este período, ha sido dirigida hacia iglesias, donde ha participado en su crecimiento y ha tenido la oportunidad de desarrollar aún más sus talentos musicales.</div><div>En el año 2014, Jennifer González experimentó un importante acontecimiento en su carrera cuando Dios le permitió lanzar su primer sencillo titulado "Caminaré". Este evento abrió las puertas para que destacara en el ámbito de la música cristiana, compartiendo escenario con reconocidos intérpretes como Mike y Laura Rosario de<i> Revive and Forgiven</i>, Fausto y Camille Mercado, Daniel y Naomi López, Laura Ceballos, Bryan Daniel, Josue Interiano, Jorge De La Torre, Josue Baez y Roger Castillo.</div><div>En junio de 2016, su trayectoria musical dio un paso más allá al llevarla a ministrar internacionalmente en la República Dominicana como invitada del Ministerio Gospel Wave Ministry. Durante esta experiencia, tuvo el privilegio de participar junto a destacados artistas de la música cristiana como Jamagra, Haboner Hilton y el Grupo Elegidos. Además, durante su participación en la ciudad de Moca, República Dominicana, Jennifer tuvo la oportunidad de predicar en una pequeña Iglesia Adventista llamada "La Iglesia de la Fe".</div><div>Desde aquel momento hasta la fecha actual, la vida y carrera de Jennifer González han seguido siendo guiadas por la dirección divina. Su misión como sierva de Dios es evangelizar los corazones a través de su música y ministerio. Su dedicación y enfoque en compartir el mensaje de fe y esperanza han sido fundamentales en su trayectoria musical, y continúa abriendo camino hacia nuevas oportunidades para servir y alcanzar a las personas con su mensaje.</div></div></div><div id="bio"><div><h2>Biografía</h2><div>Jennifer Gonzalez es una cantante nacida un14 de Noviembre en una pequeña ciudad del estado de Oklahoma, en los Estados Unidos. Su historia está marcada por la influencia y sacrificio de su madre soltera, quien dejó su Ciudad de México natal en busca de un mejor futuro en Estados Unidos. La familia finalmente se estableció en el Estado de Texas. A pesar de los desafíos que enfrentaron, la vida de Jennifer estuvo siempre bajo el amparo de Dios, quien ocupó un lugar especial en su corazón desde temprana edad y fue su guía constante.</div><div>La trayectoria profesional de Jennifer González está entrelazada con su camino espiritual. El ministerio "Faith and Love" tuvo su origen en Abril de 2006, cuando Jennifer experimentó un profundo encuentro con Dios que transformó su fe y amor por Él. En ese momento, uno de sus más grandes anhelos de infancia se hizo realidad al conocer íntimamente a su Padre Celestial. Este acontecimiento marcó el inicio de su camino de testimonio en Cristo Jesús, convirtiéndola en un ejemplo viviente de fe y amor.</div><div>El propósito de Jennifer se definió a medida que Dios la guió para conocer el Evangelio y desarrollar los dones que le otorgó. Además de su talento como cantante, también es una hábil cantautora y escritora. Su música, letras y escritos están impregnados de su profundo vínculo con la espiritualidad y su relación con Dios. Cada canción es una expresión sincera de su fe y amor por Cristo, y su escritura refleja su deseo de compartir el mensaje del Evangelio con el mundo.</div><div>Jennifer González no solo se limita a expresarse a través de su música y escritura, sino que también se dedica a la evangelización, compartiendo su testimonio y el mensaje de esperanza que ha encontrado en su fe. Su voz y presencia inspiran a otros a profundizar en su relación con Dios y a experimentar la transformación que ella misma experimentó. A lo largo de su carrera, Jennifer ha logrado alcanzar a una audiencia diversa y tocar corazones con su música y mensaje. Su vida y obra son un recordatorio de cómo la fe, el amor y la determinación pueden superar las adversidades y llevar a una vida de propósito y significado. Su biografía es un testimonio de cómo el camino espiritual y profesional pueden converger en un poderoso mensaje de esperanza y amor en Cristo.</div></div></div><div>'),P=()=>(()=>{const o=R(),a=o.firstChild,n=a.nextSibling,t=n.nextSibling,i=t.firstChild.firstChild.nextSibling.nextSibling.nextSibling,s=t.nextSibling,r=s.nextSibling,c=r.nextSibling,l=c.nextSibling,d=l.nextSibling;return null!=`url(${L})`?a.style.setProperty("background-image",`url(${L})`):a.style.removeProperty("background-image"),h(a,f(H,{})),m(i,"src","/c4ca49.webp"),null!=`url(${$})`?d.style.setProperty("background-image",`url(${$})`):d.style.removeProperty("background-image"),h(d,f(O,{})),h(o,f(q,{}),null),e(e=>{const u=N,f=N,p=N,m=N;return"f"!==e._v$&&v(o,e._v$="f"),"g h"!==e._v$2&&v(a,e._v$2="g h"),u!==e._v$3&&v(n,e._v$3=u),"k"!==e._v$4&&v(t,e._v$4="k"),"l"!==e._v$5&&v(i,e._v$5="l"),f!==e._v$6&&v(s,e._v$6=f),"k"!==e._v$7&&v(r,e._v$7="k"),p!==e._v$8&&v(c,e._v$8=p),m!==e._v$9&&v(l,e._v$9=m),"g i"!==e._v$10&&v(d,e._v$10="g i"),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),o})(),I=p("<div>"),K=()=>(()=>{const o=I();return h(o,f(C,{}),null),h(o,f(P,{}),null),e(()=>v(o,"m")),o})();((e,a,n,t={})=>{let i;((e,a)=>{const n=T,t=U,i=0===e.length,r=void 0===a?t:a,c=i?D:{i:null,u:null,context:r?r.context:null,p:r},l=i?e:()=>e(()=>o(()=>d(c)));U=c,T=null;try{return s(l,!0)}finally{T=n,U=t}})(o=>{i=o,a===document?e():h(a,e(),a.firstChild?null:void 0,n)},t.p)})(()=>f(K,{}),document.querySelector("body"));
