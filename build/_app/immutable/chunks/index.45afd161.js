function b(){}const G=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return t()}function et(){return Object.create(null)}function v(t){t.forEach(rt)}function C(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let z;function Ft(t,e){return z||(z=document.createElement("a")),z.href=e,t===z.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(gt(e,n))}function It(t,e,n,i){if(t){const r=st(t,e,n,i);return t[0](r)}}function st(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Jt(t,e,n,i,r,l){if(r){const s=st(e,n,i,l);t.p(s,r)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){return t??""}function Ut(t){return t&&C(t.destroy)?t.destroy:b}function Vt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const ot=typeof window<"u";let J=ot?()=>window.performance.now():()=>Date.now(),K=ot?t=>requestAnimationFrame(t):b;const N=new Set;function ct(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&K(ct)}function Q(t){let e;return N.size===0&&K(ct),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let B=!1;function bt(){B=!0}function $t(){B=!1}function xt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:xt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[d]+1;const a=d+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(s[c],d)}}function lt(t,e){t.appendChild(e)}function ut(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=V("style");return Et(ut(t),e),e.sheet}function Et(t,e){return lt(t.head||t,e),e.sheet}function kt(t,e){if(B){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){B&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function Zt(){return X(" ")}function te(){return X("")}function nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,r=!1){St(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ft(t,e,n,i){return at(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return ft(t,e,n,V)}function ie(t,e,n){return ft(t,e,n,Nt)}function Ct(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function re(t){return Ct(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let O;function jt(){if(O===void 0){O=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{O=!0}}return O}function le(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=V("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=jt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=nt(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=nt(i.contentWindow,"resize",e),e()}),lt(t,i),()=>{(r||l&&i.contentWindow)&&l(),U(i)}}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(r)):l===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function fe(t,e){return new t(e)}const R=new Map;let q=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:vt(e),rules:{}};return R.set(t,n),n}function L(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);u+=p*100+`%{${s(y,1-y)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(d)}_${o}`,h=ut(t),{stylesheet:f,rules:_}=R.get(h)||Tt(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||zt())}function zt(){K(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),R.clear())})}let T;function M(t){T=t}function Y(){if(!T)throw new Error("Function called outside component initialization");return T}function de(t){Y().$$.on_mount.push(t)}function _e(t){Y().$$.after_update.push(t)}function he(t){Y().$$.on_destroy.push(t)}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const k=[],it=[];let A=[];const H=[],dt=Promise.resolve();let I=!1;function _t(){I||(I=!0,dt.then(ht))}function pe(){return _t(),dt}function S(t){A.push(t)}function ye(t){H.push(t)}const F=new Set;let E=0;function ht(){if(E!==0)return;const t=T;do{try{for(;E<k.length;){const e=k[E];E++,M(e),Ot(e.$$)}}catch(e){throw k.length=0,E=0,e}for(M(null),k.length=0,E=0;it.length;)it.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];F.has(n)||(F.add(n),n())}A.length=0}while(k.length);for(;H.length;)H.pop()();I=!1,F.clear(),M(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Pt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let D;function Z(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function w(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function ge(){g={r:0,c:[],p:g}}function be(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function $e(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const tt={duration:0};function xe(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,s,o,c=0;function u(){s&&W(t,s)}function d(){const{delay:h=0,duration:f=300,easing:_=G,tick:m=b,css:p}=r||tt;p&&(s=L(t,0,1,f,h,_,p,c++)),m(0,1);const y=J()+h,j=y+f;o&&o.abort(),l=!0,S(()=>w(t,!0,"start")),o=Q($=>{if(l){if($>=j)return m(1,0),w(t,!0,"end"),u(),l=!1;if($>=y){const x=_(($-y)/f);m(x,1-x)}}return l})}let a=!1;return{start(){a||(a=!0,W(t),C(r)?(r=r(i),Z().then(d)):d())},invalidate(){a=!1},end(){l&&(u(),l=!1)}}}function we(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,s;const o=g;o.r+=1;function c(){const{delay:u=0,duration:d=300,easing:a=G,tick:h=b,css:f}=r||tt;f&&(s=L(t,1,0,d,u,a,f));const _=J()+u,m=_+d;S(()=>w(t,!1,"start")),Q(p=>{if(l){if(p>=m)return h(0,1),w(t,!1,"end"),--o.r||v(o.c),!1;if(p>=_){const y=a((p-_)/d);h(1-y,y)}}return l})}return C(r)?Z().then(()=>{r=r(i),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),l&&(s&&W(t,s),l=!1)}}}function ve(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function d(){u&&W(t,u)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=G,tick:y=b,css:j}=l||tt,$={start:J()+_,b:f};f||($.group=g,g.r+=1),o||c?c=$:(j&&(d(),u=L(t,s,f,m,_,p,j)),f&&y(0,1),o=a($,m),S(()=>w(t,f,"start")),Q(x=>{if(c&&x>c.start&&(o=a(c,m),c=null,w(t,o.b,"start"),j&&(d(),u=L(t,s,o.b,o.duration,0,p,l.css))),o){if(x>=o.end)y(s=o.b,1-s),w(t,o.b,"end"),c||(o.b?d():--o.group.r||v(o.group.c)),o=null;else if(x>=o.start){const mt=x-o.start;s=o.a+o.d*p(mt/o.duration),y(s,1-s)}}return!!(o||c)}))}return{run(f){C(l)?Z().then(()=>{l=l(r),h(f)}):h(f)},end(){d(),o=c=null}}}const Ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ke(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ne(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Se(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(rt).filter(C);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(S)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(k.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,r,l,s,o=[-1]){const c=T;M(t);const u=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:et(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),d&&Wt(t,a)),h}):[],u.update(),d=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){bt();const a=At(e.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&Rt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),$t(),ht()}M(c)}class De{$destroy(){Lt(this,1),this.$destroy=b}$on(e,n){if(!C(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ae as $,qt as A,Lt as B,It as C,Jt as D,Kt as E,Gt as F,kt as G,b as H,Ht as I,Ft as J,he as K,G as L,Vt as M,S as N,nt as O,Yt as P,ue as Q,le as R,De as S,v as T,Ee as U,me as V,C as W,ve as X,xe as Y,we as Z,Qt as _,Zt as a,ye as a0,pt as a1,ke as a2,Ne as a3,Nt as a4,ie as a5,oe as a6,Ut as a7,ae as a8,Xt as b,re as c,$e as d,te as e,be as f,Rt as g,U as h,je as i,_e as j,V as k,ne as l,At as m,ee as n,de as o,ce as p,X as q,Ct as r,Bt as s,pe as t,se as u,ge as v,it as w,fe as x,Se as y,Ce as z};
