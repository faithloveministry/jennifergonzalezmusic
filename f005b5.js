function e(e,a){const n=q,o=_,r=0===e.length,t=void 0===a?o:a,s=r?E:{i:null,o:null,context:t?t.context:null,t},c=r?e:()=>e(()=>i(()=>v(s)));_=s,q=null;try{return l(c,!0)}finally{q=n,_=o}}function a(e,a){const n={value:e,observers:null,l:null,u:(a=a?Object.assign({},A,a):A).equals||void 0};return[o.bind(n),e=>("function"==typeof e&&(e=e(n.value)),r(n,e))]}function n(e,a,n){t(s(e,a,!1,$))}function i(e){if(null===q)return e();const a=q;q=null;try{return e()}finally{q=a}}function o(){if(this.sources&&this.state)if(this.state===$)t(this);else{const e=B;B=null,l(()=>d(this),!1),B=e}if(q){const e=this.observers?this.observers.length:0;q.sources?(q.sources.push(this),q.m.push(e)):(q.sources=[this],q.m=[e]),this.observers?(this.observers.push(q),this.l.push(q.sources.length-1)):(this.observers=[q],this.l=[q.sources.length-1])}return this.value}function r(e,a,n){return e.u&&e.u(e.value,a)||(e.value=a,e.observers&&e.observers.length&&l(()=>{for(let a=0;e.observers.length>a;a+=1){const n=e.observers[a],i=V&&V.v;i&&V.p.has(n),(i?n.h:n.state)||(n.M?B.push(n):L.push(n),n.observers&&m(n)),i||(n.state=$)}if(B.length>1e6)throw B=[],Error()},!1)),a}function t(e){if(!e.fn)return;v(e);const a=_,n=q;q=_=e,((e,a,n)=>{let i;try{i=e.fn(a)}catch(o){return e.M&&(e.state=$,e.i&&e.i.forEach(v),e.i=null),e.D=n+1,f(o)}e.D&&e.D>n||(null!=e.D&&"observers"in e?r(e,i):e.value=i,e.D=n)})(e,e.value,C),q=n,_=a}function s(e,a,n,i=$,o){const r={fn:e,state:i,D:null,i:null,sources:null,m:null,o:null,value:a,t:_,context:_?_.context:null,M:n};return null===_||_!==E&&(_.i?_.i.push(r):_.i=[r]),r}function c(e){if(0===e.state)return;if(e.state===J)return d(e);if(e.j&&i(e.j.k))return e.j.A.push(e);const a=[e];for(;(e=e.t)&&(!e.D||C>e.D);)e.state&&a.push(e);for(let n=a.length-1;n>=0;n--)if((e=a[n]).state===$)t(e);else if(e.state===J){const n=B;B=null,l(()=>d(e,a[0]),!1),B=n}}function l(e,a){if(B)return e();let n=!1;a||(B=[]),L?n=!0:L=[],C++;try{const a=e();return(e=>{if(B&&(u(B),B=null),e)return;const a=L;L=null,a.length&&l(()=>T(a),!1)})(n),a}catch(i){n||(L=null),B=null,f(i)}}function u(e){for(let a=0;e.length>a;a++)c(e[a])}function d(e,a){e.state=0;for(let n=0;e.sources.length>n;n+=1){const i=e.sources[n];if(i.sources){const e=i.state;e===$?i===a||i.D&&i.D>=C||c(i):e===J&&d(i,a)}}}function m(e){for(let a=0;e.observers.length>a;a+=1){const n=e.observers[a];n.state||(n.state=J,n.M?B.push(n):L.push(n),n.observers&&m(n))}}function v(e){let a;if(e.sources)for(;e.sources.length;){const a=e.sources.pop(),n=e.m.pop(),i=a.observers;if(i&&i.length){const e=i.pop(),o=a.l.pop();i.length>n&&(e.m[o]=n,i[n]=e,a.l[n]=o)}}if(e.i){for(a=e.i.length-1;a>=0;a--)v(e.i[a]);e.i=null}if(e.o){for(a=e.o.length-1;a>=0;a--)e.o[a]();e.o=null}e.state=0}function f(e,a=_){throw ""}function p(e){for(let a=0;e.length>a;a++)e[a]()}function h(e,a){return i(()=>e(a||{}))}function y(n){return((e,a,n)=>{n=n?Object.assign({},A,n):A;const i=s(e,void 0,!0,0);return i.observers=null,i.l=null,i.u=n.equals||void 0,t(i),o.bind(i)})(((n,o,r={})=>{let t,s=[],c=[],l=[],u=[],d=0;var m;return m=()=>p(l),null===_||(null===_.o?_.o=[m]:_.o.push(m)),()=>{function m(e){l[t]=e;const[n,i]=a(v[t]);return u[t]=i,o(n,t)}const v=n()||[];return i(()=>{if(0===v.length)return 0!==d&&(p(l),l=[],s=[],c=[],d=0,u=[]),r.fallback&&(s=[S],c[0]=e(e=>(l[0]=e,r.fallback())),d=1),c;for(s[0]===S&&(l[0](),l=[],s=[],c=[],d=0),t=0;v.length>t;t++)s.length>t&&s[t]!==v[t]?u[t](()=>v[t]):s.length>t||(c[t]=e(m));for(;s.length>t;t++)l[t]();return d=u.length=l.length=v.length,s=v.slice(0),c=c.slice(0,d)})}})(()=>n.each,n.children,"fallback"in n&&{fallback:()=>n.fallback}||void 0))}function g(e,a,n){let o;const r=()=>{const a=document.createElement("template");return a.innerHTML=e,n?a.content.firstChild.firstChild:a.content.firstChild},t=a?()=>i(()=>document.importNode(o||(o=r()),!0)):()=>(o||(o=r())).cloneNode(!0);return t.cloneNode=t,t}function b(e,a=window.document){const n=a[G]||(a[G]=new Set);for(let i=0,o=e.length;o>i;i++){const o=e[i];n.has(o)||(n.add(o),a.addEventListener(o,M))}}function z(e,a){null==a?e.removeAttribute("class"):e.className=a}function w(e,a,i,o){if(void 0===i||o||(o=[]),"function"!=typeof a)return D(e,a,o,i);n(n=>D(e,a(),n,i),o)}function M(e){const a="$$"+e.type;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n||document});n;){const i=n[a];if(i&&!n.disabled){const o=n[a+"Data"];if(void 0!==o?i.call(n,o,e):i.call(n,e),e.cancelBubble)return}n=n.T||n.parentNode||n.host}}function D(e,a,i,o,r){for(;"function"==typeof i;)i=i();if(a===i)return i;const t=typeof a,s=void 0!==o;if(e=s&&i[0]&&i[0].parentNode||e,"string"===t||"number"===t)if("number"===t&&(a=""+a),s){let n=i[0];n&&3===n.nodeType?n.data=a:n=document.createTextNode(a),i=x(e,i,o,n)}else i=""!==i&&"string"==typeof i?e.firstChild.data=a:e.textContent=a;else if(null==a||"boolean"===t)i=x(e,i,o);else{if("function"===t)return n(()=>{let n=a();for(;"function"==typeof n;)n=n();i=D(e,n,i,o)}),()=>i;if(Array.isArray(a)){const t=[],c=i&&Array.isArray(i);if(j(t,a,i,r))return n(()=>i=D(e,t,i,o,!0)),()=>i;if(0===t.length){if(i=x(e,i,o),s)return i}else c?0===i.length?k(e,t,o):((e,a,n)=>{let i=n.length,o=a.length,r=i,t=0,s=0,c=a[o-1].nextSibling,l=null;for(;o>t||r>s;)if(a[t]!==n[s]){for(;a[o-1]===n[r-1];)o--,r--;if(o===t){const a=i>r?s?n[s-1].nextSibling:n[r-s]:c;for(;r>s;)e.insertBefore(n[s++],a)}else if(r===s)for(;o>t;)l&&l.has(a[t])||a[t].remove(),t++;else if(a[t]===n[r-1]&&n[s]===a[o-1]){const i=a[--o].nextSibling;e.insertBefore(n[s++],a[t++].nextSibling),e.insertBefore(n[--r],i),a[o]=n[r]}else{if(!l){l=new Map;let e=s;for(;r>e;)l.set(n[e],e++)}const i=l.get(a[t]);if(null!=i)if(i>s&&r>i){let c,u=t,d=1;for(;++u<o&&r>u&&null!=(c=l.get(a[u]))&&c===i+d;)d++;if(d>i-s){const o=a[t];for(;i>s;)e.insertBefore(n[s++],o)}else e.replaceChild(n[s++],a[t++])}else t++;else a[t++].remove()}}else t++,s++})(e,i,t):(i&&x(e),k(e,t));i=t}else if(a.nodeType){if(Array.isArray(i)){if(s)return i=x(e,i,o,a);x(e,i,null,a)}else null!=i&&""!==i&&e.firstChild?e.replaceChild(a,e.firstChild):e.appendChild(a);i=a}}return i}function j(e,a,n,i){let o=!1;for(let r=0,t=a.length;t>r;r++){let t,s=a[r],c=n&&n[r];if(null==s||!0===s||!1===s);else if("object"==(t=typeof s)&&s.nodeType)e.push(s);else if(Array.isArray(s))o=j(e,s,c)||o;else if("function"===t)if(i){for(;"function"==typeof s;)s=s();o=j(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||o}else e.push(s),o=!0;else{const a=s+"";e.push(c&&3===c.nodeType&&c.data===a?c:document.createTextNode(a))}}return o}function k(e,a,n=null){for(let i=0,o=a.length;o>i;i++)e.insertBefore(a[i],n)}function x(e,a,n,i){if(void 0===n)return e.textContent="";const o=i||document.createTextNode("");if(a.length){let i=!1;for(let r=a.length-1;r>=0;r--){const t=a[r];if(o!==t){const a=t.parentNode===e;i||r?a&&t.remove():a?e.replaceChild(o,t):e.insertBefore(o,n)}else i=!0}}else e.insertBefore(o,n);return[o]}Symbol();const A={equals:(e,a)=>e===a};let T=u;const $=1,J=2,E={i:null,o:null,context:null,t:null};var _=null;let V=null,q=null,B=null,L=null,C=0;const S=Symbol(),G="_$DX_DELEGATE",H=g('<div><div><a href=#top aria-label="Return to Top">Jennifer Gonzalez</a><a href=#inicio>Inicio</a><a href=#sobre-mi>Sobre Mi</a><a href=#trayectoria-musical>Trayectoria Musical</a><a href=#bio>Biografía</a></div><button>^'),N=()=>{const[e,i]=a(!0);return(()=>{const a=H(),o=a.firstChild,r=o.firstChild;return o.nextSibling.$$click=()=>i(e=>!e),n(n=>{const i="l "+(e()?"o":"");return i!==n.$&&z(a,n.$=i),"m"!==n.J&&z(o,n.J="m"),"n"!==n._&&z(r,n._="n"),n},{$:void 0,J:void 0,_:void 0}),a})()};b(["click"]);const R="/7da769.jpg",F="/74b398.jpg",I="/51cab4.jpg",P=g("<div><div></div><div>"),U=g("<button>"),O=e=>{const[i,o]=a(0),[r,t]=a(0);let s=!1;const c=()=>setTimeout(()=>{s||t(a=>(a+1)%e.V),s=!1,c()},8e3);return c(),(()=>{const a=P(),c=a.firstChild,l=c.nextSibling;return w(c,h(y,{get each(){return[...Array(e.V)]},children:(e,a)=>(()=>{const e=U();return e.$$click=()=>t(a)+1&&(s=!0),n(()=>z(e,a===i()?"f":"")),e})()})),l.$$touchend=e=>{setTimeout(()=>o(Math.round(e.target.parentElement.scrollLeft/window.innerWidth)),1450),s=!0},l.addEventListener("scrollend",e=>o(e.target.scrollLeft/window.innerWidth>>0)),w(l,()=>e.children),n(e=>{const n=r()*window.innerWidth;return"c"!==e.$&&z(a,e.$="c"),"e"!==e.J&&z(c,e.J="e"),"d"!==e._&&z(l,e._="d"),n!==e.q&&(l.scrollLeft=e.q=n),e},{$:void 0,J:void 0,_:void 0,q:void 0}),a})()};b(["touchend","click"]);const Y=g('<div><span><i>Designed by qeleb</i><a href=https://github.com/qeleb aria-label="Developer GitHub"><svg width=1.6rem viewBox="0 0 98 96"><path fill=#443850 d="M49 0C22 0 0 22 0 49 0 71 14 89 34 96c2.4.5 3-1.1 3-2.4 0-1.1-.1-5.1-.1-9.1-14 3-16-5.9-16.4-5.9-2.2-5.7-5.4-7.2-5.4-7.2-4.5-3.0.3-3.0.3-3.0 4.9.3 7.5 5 7.5 5 4.4 7.5 11 5.4 14.2 4.1.4-3.2 1.7-5.4 3.1-6.6-11-1.1-22-5.4-22.3-24.3 0-5.4 2-9.8 5-13.2-.5-1.2-2.2-6.3.5-13.0 0 0 4-1.3 13.4 5a47 47 0 0 1 12.2-1.6 47 47 0 0 1 12.2 1.6c9.3-6.4 13-5.1 13.4-5.1 2.7 6.8.97 11.8.5 13a19 19 0 0 1 5 13.2c0 19-11 23-22.3 24.3 1.8 1.6 3.3 4.5 3.3 9 0 6.6-.1 12-.1 13.5 0 1.3.9 2.9 3.3 2.4a49 49 0 0 0 33.4-47C98 22 76 0 49 0z"></path></svg></a></span><span>Jennifer Gonzalez Music — 2023'),K=()=>(()=>{const e=Y();return n(()=>z(e,"a")),e})(),X=g('<div><a href=https://www.facebook.com/jennifer.gonzalez.58760 aria-label=Facebook><svg viewBox="11.5 7.5 17.5 32.5"><path d="m28 25.6.9-5.6h-5.3v-4c0-1.6.6-3 3-3H29V8c-1.4-0-3-.4-4.4-.4-4.6 0-8 3-8 8V20h-5v5.6h5v14a18.4 18.4 0 0 0 6.6 0V25.6h4.4z"></path></svg></a><a href=https://www.instagram.com/jennifergonzalezmusic aria-label=Instagram><svg viewBox="8 8 497 497"><path d="M96 23c-16 6-30 15-44 29-13 13-22 27-28 43s-10 34-11 60-2 34-2 101l2 102c1 26 5 44 11 59 6 17 15 30 29 44 13 14 27 22 43 28s34 11 60 12l101 1 102-1c26-2 44-6 59-12a121 121 0 0 0 72-72c6-15 11-33 12-59l1-102-1-101c-2-26-6-44-12-60s-14-30-28-43c-14-14-27-22-44-29-15-6-33-10-59-11-27-1-35-2-102-2l-101 2c-26 1-44 5-60 11zm261 33c24 1 37 5 45 9 12 4 20 9 29 18 8 9 14 17 18 28 3 9 7 22 9 46l1 99c0 65 0 74-2 100-1 24-5 37-8 45a77 77 0 0 1-47 47c-8 4-21 8-45 9l-100 1-99-1c-24-1-37-5-46-9a81 81 0 0 1-47-47c-3-8-7-21-8-45l-1-100 1-99c1-24 5-37 8-46 5-11 10-19 19-28 8-9 17-14 28-18 9-4 22-8 46-9l99-1 100 1z"></path><path d="M131 256a126 126 0 1 0 253 0 126 126 0 0 0-253 0zm208 0a82 82 0 1 1-164 0 82 82 0 0 1 164 0z"></path><g><circle cx=388.6 cy=125 r=29.5></circle></g></svg></a><a href=https://www.youtube.com/@JenniferGonzalezMusic aria-label=YouTube><svg viewBox="0 0 461 461"><path d="M365 67H96c-53 0-96 43-96 96v135c0 53 43 96 96 96h269c53 0 96-43 96-96V163c0-53-43-96-96-96zm-64 170-127 60c-3 2-7-1-7-4V169c0-4 4-7 8-5l126 64c3 2 3 7 0 9z"></path></svg></a><a href=https://www.tiktok.com/@jennifergonzalezmusic aria-label=TikTok><svg viewBox="2 2 20 20"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.3V2h-3.4v13.7a2.9 2.9 0 0 1-5.2 1.7 2.9 2.9 0 0 1 3.2-4.5V9.4A6.3 6.3 0 0 0 5 20.1a6.3 6.3 0 0 0 10.8-4.4v-7a8.2 8.2 0 0 0 4.8 1.5V6.8a4.8 4.8 0 0 1-1-.1z">'),Q=()=>(()=>{const e=X();return n(()=>z(e,"b")),e})(),W=g('<div><a href=https://open.spotify.com/artist/6wsnBNKBlKHCNtLXeuDhXy aria-label=Spotify><svg viewBox="-9 -9 514 522"><circle stroke-width=19 cx=248 cy=256 r=247></circle><path d="M407 231a23 23 0 0 1-13-4c-71-43-199-53-281-30-4 1-8 3-13 3a23 23 0 0 1-23-24c0-14 8-21 17-24a419 419 0 0 1 118-15c73 0 150 15 205 48a24 24 0 0 1 13 23c0 14-11 23-23 23zm-31 76c-5 0-9-2-12-4-63-37-156-52-239-30-5 1-7 3-12 3-11 0-19-9-19-19s5-18 16-21a336 336 0 0 1 98-14c65 0 128 16 177 45 8 5 11 11 11 20a19 19 0 0 1-19 20zm-27 66c-4 0-7-1-11-4-62-38-135-39-207-25-4 1-9 3-12 3-10 0-16-8-16-16 0-10 6-15 14-17 82-18 166-17 237 26 6 4 10 7 10 16.9s-7 15.4-15 16z"></path></svg></a><a href=https://music.apple.com/us/artist/jennifer-gonzalez/708294552 aria-label="Apple Music"><svg viewBox="-6 -6 373 373"><rect stroke-width=14 width=361 height=361 rx=81></rect><path d="M255 55c-1 0-9 1-10 2L138 78a15 15 0 0 0-7 3c-2 2-3 4-4 7-.1.6-0 2-0 4v134c0 3-0 6-2 9-2 3-5 3-8 4l-7 1a122 122 0 0 0-20 5 28 28 0 0 0-19 30 28 28 0 0 0 22 25c5 1 11 1 19-1a40 40 0 0 0 13-5 31 31 0 0 0 15-22 62 62 0 0 0 1-13V143c0-6 2-8 7-9l93-19c6-1 8.6.5 9 7v79c0 3 0 6-2 9-2 3-5 3-8 4l-7 1a122 122 0 0 0-20 5 28 28 0 0 0-19 30 28 28 0 0 0 22 24c5 1 11 1 19-1a39 39 0 0 0 13-5 31 31 0 0 0 15-22c1-5 1-9 1-13V65c0-6-3-10-9-10z"></path></svg></a><a href=https://music.youtube.com/channel/UCHoLHYGlKpL-TeNTejVlzgQ aria-label="YouTube Music"><svg viewBox="-4 -4 184 184"><circle stroke-width=7 cx=88 cy=88 r=88></circle><path d="M88 46a42 42 0 1 1 0 84 42 42 0 0 1 0-84m0-4a46 46 0 1 0 0 92 46 46 0 0 0 0-92z"></path><path d="m72 111 39-24-39-22z"></path></svg></a><a href=https://music.amazon.com/artists/B0171RLIKU/jennifer-gonzalez aria-label="Amazon Music"><svg viewBox="0.5 18 89 52"><path d="M25 43.4h2c.5 0 .7-.2.7-.7V30.2c0-1.7-.4-3-1.3-4a5 5 0 0 0-3.8-1.4c-2.3 0-4.7.8-7 2.5-.8-1.7-2.3-2.5-4.5-2.5s-4.4.8-6.6 2.3l-.2-1c0-.3-.1-.4-.3-.5l-.5-.1H2c-.5 0-.7.2-.7.7v16.6c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V29.3c1.7-1 3.4-1.6 5.2-1.6 1 0 1.7.3 2.1.9.4.6.7 1.4.7 2.6v11.5c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V29.3a9.8 9.8 0 0 1 5.2-1.6c1 0 1.7.3 2.1.9.4.6.7 1.4.7 2.6v11.5c0 .5.2.7.7.7z"></path><path d="M44 26v13.3a9.4 9.4 0 0 1-5 1.7c-1 0-2-.3-2.4-.9-.5-.6-.7-1.5-.7-2.8V26c0-.5-.2-.7-.7-.7H33c-.5 0-.7.2-.7.7v12.4c0 1.7.4 3 1.3 4 .9.9 2.2 1.4 3.8 1.4 2.3 0 4.6-.8 6.8-2.4l.2 1.2c0 .3.1.4.3.5l.6.1h1.5c.5 0 .7-.2.7-.7V26c0-.5-.2-.7-.7-.7h-2c-.6 0-.8.3-.8.7z"></path><path d="M59.7 40.5c-.6.4-1.5.7-2.6.7-1.7 0-3.3-.2-5-.7l-.9-.2c-.3 0-.4.2-.4.6v1l.2.7.6.4c1.6.7 3.4 1 5.4 1 2 0 3.7-.5 5-1.5 1.3-1 2-2.3 2-4 0-1.2-.3-2-.9-3a7 7 0 0 0-3-2l-2.8-1c-1-.4-2-.8-2.2-1.2-.4-.4-.6-.8-.6-1.5 0-1.5 1-2.3 3.4-2.3 1.3 0 2.6.2 3.8.6l.8.2c.3 0 .5-.2.5-.6v-1l-.2-.7c-.1-.2-.3-.3-.6-.4-1.5-.5-3-.8-4.5-.8-2 0-3.5.5-4.7 1.4a4.5 4.5 0 0 0-1.8 3.7c0 2.3 1.3 4 4 5l3 1c1 .4 1.6.7 2 1.1.4.4.5.8.5 1.4 0 .8-.3 1.5-.9 2z"></path><path d="M69.8 25.4h-2c-.5 0-.7.2-.7.7v16.6c0 .5.2.7.7.7h2c.5 0 .7-.2.7-.7V26c0-.4-.2-.7-.7-.7z"></path><path d="M70.4 18.6c-.4-.4-1-.6-1.7-.6s-1.2.2-1.6.6a2 2 0 0 0-.6 1.5c0 .6.2 1.2.6 1.5.4.4.9.6 1.6.6.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.5s-.1-1.2-.5-1.5z"></path><path d="M79.2 29.4c.9-1 2.3-1.5 4.3-1.5 1 0 2 .1 2.9.4l.6.1c.3 0 .5-.2.5-.7v-1l-.2-.7-.5-.4c-1.3-.3-2.6-.6-3.8-.6-2.8 0-4.9.8-6.5 2.5a10 10 0 0 0-2.3 7c0 3 .7 5.3 2.2 7 1.5 1.6 3.6 2.4 6.4 2.4 1.5 0 3-.2 4-.7.3-.1.5-.2.6-.4l.1-.7v-1c0-.5-.2-.7-.5-.7a12.5 12.5 0 0 1-3.7.6c-2 0-3.3-.5-4.2-1.5-.9-1-1.3-2.6-1.3-4.7v-.5c.1-2.2.5-3.8 1.4-4.8z"></path><path d="M79.5 56.7a88.3 88.3 0 0 1-77.6-4.8l-.6-.2c-.7 0-1.1.8-.4 1.5a65.2 65.2 0 0 0 80 5.8c1.7-1.2.3-3-1.4-2.3z"></path><path d="M83.7 66c5.2-4.4 6.6-13.5 5.5-15-.5-.6-3-1.2-6-1.2-3.2 0-7 .7-10 2.7-.9.6-.7 1.4.2 1.3 3-.4 10-1.2 11.4.4 1.2 1.6-1.4 8.2-2.6 11-.3.9.4 1.2 1.3.6z">'),Z=()=>(()=>{const e=W();return n(()=>z(e,"b")),e})(),ee="h",ae=g("<div id=top>"),ne=g("<div>"),ie=g('<div><div id=inicio><div><h2>Te Invitamos a Conocernos</h2><div>En este site, me conocerás personalmente, de una forma única y transparente, donde encontrarás Espiritualidad genuina, Testimonios en nuestros Vlogs y Vivencias en nuestro Podcast. Nuestra Música y Marca personal en nuestra Tienda de <i>Faith&LoveMerchandise</i>. Tambien conocerás un lado de mi nunca antes visto como Emprendedora en Nuestra Tienda Online de Modesty Love Design & Products donde encontraras un sin fin de productos para tu hogar tu vida personal y salud y bienestar.</div></div></div><div><form action=https://www.paypal.com/donate method=post target=_blank><input type=hidden name=business value=AT6X4DAVFMNDN><input type=hidden name=no_recurring value=0><input type=hidden name=currency_code value=USD><input type=image name=submit alt=Donate></form>Tu donación es una gran bendición para nuestro ministerio musical. ¡Únete a nosotros y apoya nuestra misión!</div><div id=sobre-mi><div><h2>Sobre Mi</h2><div>Jennifer González es una apasionada de la nutrición y el bienestar, una emprendedora multifacética y una escritora de corazón. Además de sus habilidades como compositora y cantante, asume diversos roles en la actualidad, compartiendo su amor por el bienestar y la espiritualidad con mujeres de todo el mundo.</div><div>Actualmente, ministra grupos de apoyo transformadores como "Dios Me Hizo Mujer con Propósito Divino" y "Florece en Salud y Bienestar". Desde 2007, su ministerio musical ha llevado el mensaje de salvación a través de cánticos que elevan al cielo.</div><div>Jennifer ha tenido el privilegio de llevar su música y su mensaje a países como República Dominicana, México, Puerto Rico y Estados Unidos, tocando corazones como cantante y oradora.</div><div>Te invitamos a descubrir su más reciente producción musical: "La Esencia de Tu Amor".</div><div>Jennifer González, una verdadera líder en el emprendimiento y el bienestar en Cristo Jesús. ¡Bienvenidos a su mundo de inspiración y transformación en su sitio web!</div></div></div><div><iframe src="https://www.youtube-nocookie.com/embed/PkZ_N9RghsA?si=-hNQ4bI3WT14qnwd"title="La Esencia De Tu Amor Music Video on Youtube"allow=accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share allowfullscreen loading=lazy></iframe> </div><div id=trayectoria-musical><div><h2>Trayectoria Musical</h2><div>Desde el año 2006 hasta la fecha actual, la trayectoria musical de Jennifer González ha estado marcada por la guía de Dios en su ministerio. Durante este período, ha sido dirigida hacia iglesias, donde ha participado en su crecimiento y ha tenido la oportunidad de desarrollar aún más sus talentos musicales.</div><div>En el año 2014, Jennifer González experimentó un importante acontecimiento en su carrera cuando Dios le permitió lanzar su primer sencillo titulado "Caminaré". Este evento abrió las puertas para que destacara en el ámbito de la música cristiana, compartiendo escenario con reconocidos intérpretes como Mike y Laura Rosario de<i> Revive and Forgiven</i>, Fausto y Camille Mercado, Daniel y Naomi López, Laura Ceballos, Bryan Daniel, Josue Interiano, Jorge De La Torre, Josue Baez y Roger Castillo.</div><div>En junio de 2016, su trayectoria musical dio un paso más allá al llevarla a ministrar internacionalmente en la República Dominicana como invitada del Ministerio Gospel Wave Ministry. Durante esta experiencia, tuvo el privilegio de participar junto a destacados artistas de la música cristiana como Jamayra Nuñez, Habner Hilton y el Grupo Elegidos. Además, durante su participación en la ciudad de Moca, República Dominicana, Jennifer tuvo la oportunidad de predicar en una pequeña Iglesia Adventista llamada "La Iglesia de la Fe".</div><div>Desde aquel momento hasta la fecha actual, la vida y carrera de Jennifer González han seguido siendo guiadas por la dirección divina. Su misión como sierva de Dios es evangelizar los corazones a través de su música y ministerio. Su dedicación y enfoque en compartir el mensaje de fe y esperanza han sido fundamentales en su trayectoria musical, y continúa abriendo camino hacia nuevas oportunidades para servir y alcanzar a las personas con su mensaje.</div></div></div><div><iframe src="https://www.youtube-nocookie.com/embed/H3r0f3DgJAc?si=Entt5PvZeHw74CJQ"title="La Bondad de Dios Music Video on Youtube"allow=accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share allowfullscreen loading=lazy></iframe></div><div id=bio><div><h2>Biografía</h2><div>Jennifer Gonzalez es una cantante nacida un 14 de Noviembre en una pequeña ciudad del estado de Oklahoma, en los Estados Unidos. Su historia está marcada por la influencia y sacrificio de su madre soltera, quien dejó su Ciudad de México natal en busca de un mejor futuro en Estados Unidos. La familia finalmente se estableció en el Estado de Texas. A pesar de los desafíos que enfrentaron, la vida de Jennifer estuvo siempre bajo el amparo de Dios, quien ocupó un lugar especial en su corazón desde temprana edad y fue su guía constante.</div><div>La trayectoria profesional de Jennifer González está entrelazada con su camino espiritual. El ministerio "Faith and Love" tuvo su origen en Abril de 2006, cuando Jennifer experimentó un profundo encuentro con Dios que transformó su fe y amor por Él. En ese momento, uno de sus más grandes anhelos de infancia se hizo realidad al conocer íntimamente a su Padre Celestial. Este acontecimiento marcó el inicio de su camino de testimonio en Cristo Jesús, convirtiéndola en un ejemplo viviente de fe y amor.</div><div>El propósito de Jennifer se definió a medida que Dios la guió para conocer el evangelio y desarrollar los dones que le otorgó. Además de su talento como cantante, también es una hábil cantautora y escritora. Su música, letras y escritos están impregnados de su profundo vínculo con la espiritualidad y su relación con Dios. Cada canción es una expresión sincera de su fe y amor por Cristo, y su escritura refleja su deseo de compartir el mensaje del evangelio con el mundo.</div><div>Jennifer González no solo se limita a expresarse a través de su música y escritura, sino que también se dedica a la evangelización, compartiendo su testimonio y el mensaje de esperanza que ha encontrado en su fe. Su voz y presencia inspiran a otros a profundizar en su relación con Dios y a experimentar la transformación que ella misma experimentó. A lo largo de su carrera, Jennifer ha logrado alcanzar a una audiencia diversa y tocar corazones con su música y mensaje. Su vida y obra son un recordatorio de cómo la fe, el amor y la determinación pueden superar las adversidades y llevar a una vida de propósito y significado. Su biografía es un testimonio de cómo el camino espiritual y profesional pueden converger en un poderoso mensaje de esperanza y amor en Cristo.</div></div></div><div>'),oe=()=>(()=>{const e=ie(),a=e.firstChild,i=a.nextSibling,o=i.firstChild.firstChild.nextSibling.nextSibling.nextSibling,r=i.nextSibling,t=r.nextSibling,s=t.firstChild,c=s.nextSibling,l=t.nextSibling,u=l.nextSibling,d=u.nextSibling,m=d.nextSibling;return w(e,h(O,{V:2,get children(){return[(()=>{const e=ae();return null!=`url(${I})`?e.style.setProperty("background-image",`url(${I})`):e.style.removeProperty("background-image"),e})(),(()=>{const e=ne();return null!=`url(${F})`?e.style.setProperty("background-image",`url(${F})`):e.style.removeProperty("background-image"),e.style.setProperty("background-position","center"),e})()]}}),a),o.src="/c4ca49.webp",s.style.setProperty("margin","0 0 1.5rem"),w(t,h(Z,{}),c),null!=`url(${R})`?m.style.setProperty("background-image",`url(${R})`):m.style.removeProperty("background-image"),w(m,h(Q,{})),w(e,h(K,{}),null),n(n=>{const s=ee,c=ee,v=ee,f=ee;return"g"!==n.$&&z(e,n.$="g"),s!==n.J&&z(a,n.J=s),"i"!==n._&&z(i,n._="i"),"j"!==n.q&&z(o,n.q="j"),c!==n.B&&z(r,n.B=c),"i"!==n.L&&z(t,n.L="i"),v!==n.C&&z(l,n.C=v),"i"!==n.S&&z(u,n.S="i"),f!==n.G&&z(d,n.G=f),"k"!==n.H&&z(m,n.H="k"),n},{$:void 0,J:void 0,_:void 0,q:void 0,B:void 0,L:void 0,C:void 0,S:void 0,G:void 0,H:void 0}),e})(),re=g("<div>"),te=()=>(()=>{const e=re();return w(e,h(N,{}),null),w(e,h(oe,{}),null),n(()=>z(e,"_")),e})();((a,n,i,o={})=>{let r;e(e=>{r=e,n===document?a():w(n,a(),n.firstChild?null:void 0,i)},o.t)})(()=>h(te,{}),document.querySelector("body"));