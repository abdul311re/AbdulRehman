import{R as Le}from"./index-IIjRxbMo.js";function ir(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ar(e,n,t){return n&&ir(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var on="(prefers-reduced-motion: reduce)",Ce=1,or=2,Me=3,Fe=4,Ze=5,at=6,ct=7,ur={CREATED:Ce,MOUNTED:or,IDLE:Me,MOVING:Fe,SCROLLING:Ze,DRAGGING:at,DESTROYED:ct};function de(e){e.length=0}function Ae(e,n,t){return Array.prototype.slice.call(e,n,t)}function z(e){return e.bind.apply(e,[null].concat(Ae(arguments,1)))}var yn=setTimeout,wt=function(){};function un(e){return requestAnimationFrame(e)}function ht(e,n){return typeof n===e}function We(e){return!Ut(e)&&ht("object",e)}var kt=Array.isArray,Sn=z(ht,"function"),me=z(ht,"string"),Je=z(ht,"undefined");function Ut(e){return e===null}function Tn(e){try{return e instanceof(e.ownerDocument.defaultView||window).HTMLElement}catch{return!1}}function Qe(e){return kt(e)?e:[e]}function ne(e,n){Qe(e).forEach(n)}function Gt(e,n){return e.indexOf(n)>-1}function ot(e,n){return e.push.apply(e,Qe(n)),e}function fe(e,n,t){e&&ne(n,function(r){r&&e.classList[t?"add":"remove"](r)})}function oe(e,n){fe(e,me(n)?n.split(" "):n,!0)}function je(e,n){ne(n,e.appendChild.bind(e))}function zt(e,n){ne(e,function(t){var r=(n||t).parentNode;r&&r.insertBefore(t,n)})}function He(e,n){return Tn(e)&&(e.msMatchesSelector||e.matches).call(e,n)}function pn(e,n){var t=e?Ae(e.children):[];return n?t.filter(function(r){return He(r,n)}):t}function et(e,n){return n?pn(e,n)[0]:e.firstElementChild}var Ye=Object.keys;function Re(e,n,t){return e&&(t?Ye(e).reverse():Ye(e)).forEach(function(r){r!=="__proto__"&&n(e[r],r)}),e}function Xe(e){return Ae(arguments,1).forEach(function(n){Re(n,function(t,r){e[r]=n[r]})}),e}function ge(e){return Ae(arguments,1).forEach(function(n){Re(n,function(t,r){kt(t)?e[r]=t.slice():We(t)?e[r]=ge({},We(e[r])?e[r]:{},t):e[r]=t})}),e}function sn(e,n){ne(n||Ye(e),function(t){delete e[t]})}function ue(e,n){ne(e,function(t){ne(n,function(r){t&&t.removeAttribute(r)})})}function x(e,n,t){We(n)?Re(n,function(r,i){x(e,i,r)}):ne(e,function(r){Ut(t)||t===""?ue(r,n):r.setAttribute(n,String(t))})}function Pe(e,n,t){var r=document.createElement(e);return n&&(me(n)?oe(r,n):x(r,n)),t&&je(t,r),r}function re(e,n,t){if(Je(t))return getComputedStyle(e)[n];Ut(t)||(e.style[n]=""+t)}function qe(e,n){re(e,"display",n)}function Ln(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function ie(e,n){return e.getAttribute(n)}function cn(e,n){return e&&e.classList.contains(n)}function ee(e){return e.getBoundingClientRect()}function Ne(e){ne(e,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function Rn(e){return et(new DOMParser().parseFromString(e,"text/html").body)}function ce(e,n){e.preventDefault(),n&&(e.stopPropagation(),e.stopImmediatePropagation())}function Nn(e,n){return e&&e.querySelector(n)}function Bt(e,n){return n?Ae(e.querySelectorAll(n)):[]}function ve(e,n){fe(e,n,!1)}function Dt(e){return e.timeStamp}function pe(e){return me(e)?e:e?e+"px":""}var tt="splide",Wt="data-"+tt;function ze(e,n){if(!e)throw new Error("["+tt+"] "+(n||""))}var _e=Math.min,ft=Math.max,vt=Math.floor,Ke=Math.ceil,j=Math.abs;function In(e,n,t){return j(e-n)<t}function ut(e,n,t,r){var i=_e(n,t),l=ft(n,t);return r?i<e&&e<l:i<=e&&e<=l}function we(e,n,t){var r=_e(n,t),i=ft(n,t);return _e(ft(r,e),i)}function Ct(e){return+(e>0)-+(e<0)}function Pt(e,n){return ne(n,function(t){e=e.replace("%s",""+t)}),e}function Ht(e){return e<10?"0"+e:""+e}var fn={};function sr(e){return""+e+Ht(fn[e]=(fn[e]||0)+1)}function On(){var e=[];function n(a,s,c,v){i(a,s,function(o,m,d){var h="addEventListener"in o,u=h?o.removeEventListener.bind(o,m,c,v):o.removeListener.bind(o,c);h?o.addEventListener(m,c,v):o.addListener(c),e.push([o,m,d,c,u])})}function t(a,s,c){i(a,s,function(v,o,m){e=e.filter(function(d){return d[0]===v&&d[1]===o&&d[2]===m&&(!c||d[3]===c)?(d[4](),!1):!0})})}function r(a,s,c){var v,o=!0;return typeof CustomEvent=="function"?v=new CustomEvent(s,{bubbles:o,detail:c}):(v=document.createEvent("CustomEvent"),v.initCustomEvent(s,o,!1,c)),a.dispatchEvent(v),v}function i(a,s,c){ne(a,function(v){v&&ne(s,function(o){o.split(" ").forEach(function(m){var d=m.split(".");c(v,d[0],d[1])})})})}function l(){e.forEach(function(a){a[4]()}),de(e)}return{bind:n,unbind:t,dispatch:r,destroy:l}}var ye="mounted",bt="ready",he="move",ke="moved",Yt="click",wn="active",Dn="inactive",Cn="visible",Pn="hidden",q="refresh",J="updated",Ve="resize",Et="resized",bn="drag",Mn="dragging",Vn="dragged",gt="scroll",Oe="scrolled",cr="overflow",Xt="destroy",xn="arrows:mounted",Fn="arrows:updated",kn="pagination:mounted",Un="pagination:updated",qt="navigation:mounted",Kt="autoplay:play",Gn="autoplay:playing",$t="autoplay:pause",Zt="lazyload:loaded",zn="sk",Bn="sh",lt="ei";function H(e){var n=e?e.event.bus:document.createDocumentFragment(),t=On();function r(l,a){t.bind(n,Qe(l).join(" "),function(s){a.apply(a,kt(s.detail)?s.detail:[])})}function i(l){t.dispatch(n,l,Ae(arguments,1))}return e&&e.event.on(Xt,t.destroy),Xe(t,{bus:n,on:r,off:z(t.unbind,n),emit:i})}function mt(e,n,t,r){var i=Date.now,l,a=0,s,c=!0,v=0;function o(){if(!c){if(a=e?_e((i()-l)/e,1):1,t&&t(a),a>=1&&(n(),l=i(),r&&++v>=r))return d();s=un(o)}}function m(_){_||u(),l=i()-(_?a*e:0),c=!1,s=un(o)}function d(){c=!0}function h(){l=i(),a=0,t&&t(a)}function u(){s&&cancelAnimationFrame(s),a=0,s=0,c=!0}function f(_){e=_}function A(){return c}return{start:m,rewind:h,pause:d,cancel:u,set:f,isPaused:A}}function fr(e){var n=e;function t(i){n=i}function r(i){return Gt(Qe(i),n)}return{set:t,is:r}}function vr(e,n){var t=mt(0,e,null,1);return function(){t.isPaused()&&t.start()}}function lr(e,n,t){var r=e.state,i=t.breakpoints||{},l=t.reducedMotion||{},a=On(),s=[];function c(){var u=t.mediaQuery==="min";Ye(i).sort(function(f,A){return u?+f-+A:+A-+f}).forEach(function(f){o(i[f],"("+(u?"min":"max")+"-width:"+f+"px)")}),o(l,on),m()}function v(u){u&&a.destroy()}function o(u,f){var A=matchMedia(f);a.bind(A,"change",m),s.push([u,A])}function m(){var u=r.is(ct),f=t.direction,A=s.reduce(function(_,g){return ge(_,g[1].matches?g[0]:{})},{});sn(t),h(A),t.destroy?e.destroy(t.destroy==="completely"):u?(v(!0),e.mount()):f!==t.direction&&e.refresh()}function d(u){matchMedia(on).matches&&(u?ge(t,l):sn(t,Ye(l)))}function h(u,f,A){ge(t,u),f&&ge(Object.getPrototypeOf(t),u),(A||!r.is(Ce))&&e.emit(J,t)}return{setup:c,destroy:v,reduce:d,set:h}}var _t="Arrow",At=_t+"Left",yt=_t+"Right",Wn=_t+"Up",Hn=_t+"Down",vn="rtl",St="ttb",Rt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Wn,yt],ArrowRight:[Hn,At]};function dr(e,n,t){function r(l,a,s){s=s||t.direction;var c=s===vn&&!a?1:s===St?0:-1;return Rt[l]&&Rt[l][c]||l.replace(/width|left|right/i,function(v,o){var m=Rt[v.toLowerCase()][c]||v;return o>0?m.charAt(0).toUpperCase()+m.slice(1):m})}function i(l){return l*(t.direction===vn?1:-1)}return{resolve:r,orient:i}}var le="role",be="tabindex",hr="disabled",ae="aria-",nt=ae+"controls",Yn=ae+"current",ln=ae+"selected",te=ae+"label",Jt=ae+"labelledby",Xn=ae+"hidden",Qt=ae+"orientation",$e=ae+"roledescription",dn=ae+"live",hn=ae+"busy",En=ae+"atomic",jt=[le,be,hr,nt,Yn,te,Jt,Xn,Qt,$e],se=tt+"__",Se="is-",Nt=tt,gn=se+"track",Er=se+"list",Tt=se+"slide",qn=Tt+"--clone",gr=Tt+"__container",en=se+"arrows",pt=se+"arrow",Kn=pt+"--prev",$n=pt+"--next",Lt=se+"pagination",Zn=Lt+"__page",mr=se+"progress",_r=mr+"__bar",Ar=se+"toggle",yr=se+"spinner",Sr=se+"sr",Tr=Se+"initialized",Ie=Se+"active",Jn=Se+"prev",Qn=Se+"next",Mt=Se+"visible",Vt=Se+"loading",jn=Se+"focus-in",er=Se+"overflow",pr=[Ie,Mt,Jn,Qn,Vt,jn,er],Lr={slide:Tt,clone:qn,arrows:en,arrow:pt,prev:Kn,next:$n,pagination:Lt,page:Zn,spinner:yr};function Rr(e,n){if(Sn(e.closest))return e.closest(n);for(var t=e;t&&t.nodeType===1&&!He(t,n);)t=t.parentElement;return t}var Nr=5,mn=200,tr="touchstart mousedown",It="touchmove mousemove",Ot="touchend touchcancel mouseup click";function Ir(e,n,t){var r=H(e),i=r.on,l=r.bind,a=e.root,s=t.i18n,c={},v=[],o=[],m=[],d,h,u;function f(){E(),P(),g()}function A(){i(q,_),i(q,f),i(J,g),l(document,tr+" keydown",function(S){u=S.type==="keydown"},{capture:!0}),l(a,"focusin",function(){fe(a,jn,!!u)})}function _(S){var O=jt.concat("style");de(v),ve(a,o),ve(d,m),ue([d,h],O),ue(a,S?O:["style",$e])}function g(){ve(a,o),ve(d,m),o=M(Nt),m=M(gn),oe(a,o),oe(d,m),x(a,te,t.label),x(a,Jt,t.labelledby)}function E(){d=I("."+gn),h=et(d,"."+Er),ze(d&&h,"A track/list element is missing."),ot(v,pn(h,"."+Tt+":not(."+qn+")")),Re({arrows:en,pagination:Lt,prev:Kn,next:$n,bar:_r,toggle:Ar},function(S,O){c[O]=I("."+S)}),Xe(c,{root:a,track:d,list:h,slides:v})}function P(){var S=a.id||sr(tt),O=t.role;a.id=S,d.id=d.id||S+"-track",h.id=h.id||S+"-list",!ie(a,le)&&a.tagName!=="SECTION"&&O&&x(a,le,O),x(a,$e,s.carousel),x(h,le,"presentation")}function I(S){var O=Nn(a,S);return O&&Rr(O,"."+Nt)===a?O:void 0}function M(S){return[S+"--"+t.type,S+"--"+t.direction,t.drag&&S+"--draggable",t.isNavigation&&S+"--nav",S===Nt&&Ie]}return Xe(c,{setup:f,mount:A,destroy:_})}var xe="slide",Ue="loop",rt="fade";function Or(e,n,t,r){var i=H(e),l=i.on,a=i.emit,s=i.bind,c=e.Components,v=e.root,o=e.options,m=o.isNavigation,d=o.updateOnMove,h=o.i18n,u=o.pagination,f=o.slideFocus,A=c.Direction.resolve,_=ie(r,"style"),g=ie(r,te),E=t>-1,P=et(r,"."+gr),I;function M(){E||(r.id=v.id+"-slide"+Ht(n+1),x(r,le,u?"tabpanel":"group"),x(r,$e,h.slide),x(r,te,g||Pt(h.slideLabel,[n+1,e.length]))),S()}function S(){s(r,"click",z(a,Yt,b)),s(r,"keydown",z(a,zn,b)),l([ke,Bn,Oe],p),l(qt,k),d&&l(he,C)}function O(){I=!0,i.destroy(),ve(r,pr),ue(r,jt),x(r,"style",_),x(r,te,g||"")}function k(){var D=e.splides.map(function(T){var w=T.splide.Components.Slides.getAt(n);return w?w.slide.id:""}).join(" ");x(r,te,Pt(h.slideX,(E?t:n)+1)),x(r,nt,D),x(r,le,f?"button":""),f&&ue(r,$e)}function C(){I||p()}function p(){if(!I){var D=e.index;L(),R(),fe(r,Jn,n===D-1),fe(r,Qn,n===D+1)}}function L(){var D=F();D!==cn(r,Ie)&&(fe(r,Ie,D),x(r,Yn,m&&D||""),a(D?wn:Dn,b))}function R(){var D=Y(),T=!D&&(!F()||E);if(e.state.is([Fe,Ze])||x(r,Xn,T||""),x(Bt(r,o.focusableNodes||""),be,T?-1:""),f&&x(r,be,T?-1:0),D!==cn(r,Mt)&&(fe(r,Mt,D),a(D?Cn:Pn,b)),!D&&document.activeElement===r){var w=c.Slides.getAt(e.index);w&&Ln(w.slide)}}function V(D,T,w){re(w&&P||r,D,T)}function F(){var D=e.index;return D===n||o.cloneStatus&&D===t}function Y(){if(e.is(rt))return F();var D=ee(c.Elements.track),T=ee(r),w=A("left",!0),U=A("right",!0);return vt(D[w])<=Ke(T[w])&&vt(T[U])<=Ke(D[U])}function W(D,T){var w=j(D-n);return!E&&(o.rewind||e.is(Ue))&&(w=_e(w,e.length-w)),w<=T}var b={index:n,slideIndex:t,slide:r,container:P,isClone:E,mount:M,destroy:O,update:p,style:V,isWithin:W};return b}function wr(e,n,t){var r=H(e),i=r.on,l=r.emit,a=r.bind,s=n.Elements,c=s.slides,v=s.list,o=[];function m(){d(),i(q,h),i(q,d)}function d(){c.forEach(function(p,L){f(p,L,-1)})}function h(){I(function(p){p.destroy()}),de(o)}function u(){I(function(p){p.update()})}function f(p,L,R){var V=Or(e,L,R,p);V.mount(),o.push(V),o.sort(function(F,Y){return F.index-Y.index})}function A(p){return p?M(function(L){return!L.isClone}):o}function _(p){var L=n.Controller,R=L.toIndex(p),V=L.hasFocus()?1:t.perPage;return M(function(F){return ut(F.index,R,R+V-1)})}function g(p){return M(p)[0]}function E(p,L){ne(p,function(R){if(me(R)&&(R=Rn(R)),Tn(R)){var V=c[L];V?zt(R,V):je(v,R),oe(R,t.classes.slide),O(R,z(l,Ve))}}),l(q)}function P(p){Ne(M(p).map(function(L){return L.slide})),l(q)}function I(p,L){A(L).forEach(p)}function M(p){return o.filter(Sn(p)?p:function(L){return me(p)?He(L.slide,p):Gt(Qe(p),L.index)})}function S(p,L,R){I(function(V){V.style(p,L,R)})}function O(p,L){var R=Bt(p,"img"),V=R.length;V?R.forEach(function(F){a(F,"load error",function(){--V||L()})}):L()}function k(p){return p?c.length:o.length}function C(){return o.length>t.perPage}return{mount:m,destroy:h,update:u,register:f,get:A,getIn:_,getAt:g,add:E,remove:P,forEach:I,filter:M,style:S,getLength:k,isEnough:C}}function Dr(e,n,t){var r=H(e),i=r.on,l=r.bind,a=r.emit,s=n.Slides,c=n.Direction.resolve,v=n.Elements,o=v.root,m=v.track,d=v.list,h=s.getAt,u=s.style,f,A,_;function g(){E(),l(window,"resize load",vr(z(a,Ve))),i([J,q],E),i(Ve,P)}function E(){f=t.direction===St,re(o,"maxWidth",pe(t.width)),re(m,c("paddingLeft"),I(!1)),re(m,c("paddingRight"),I(!0)),P(!0)}function P(b){var D=ee(o);(b||A.width!==D.width||A.height!==D.height)&&(re(m,"height",M()),u(c("marginRight"),pe(t.gap)),u("width",O()),u("height",k(),!0),A=D,a(Et),_!==(_=W())&&(fe(o,er,_),a(cr,_)))}function I(b){var D=t.padding,T=c(b?"right":"left");return D&&pe(D[T]||(We(D)?0:D))||"0px"}function M(){var b="";return f&&(b=S(),ze(b,"height or heightRatio is missing."),b="calc("+b+" - "+I(!1)+" - "+I(!0)+")"),b}function S(){return pe(t.height||ee(d).width*t.heightRatio)}function O(){return t.autoWidth?null:pe(t.fixedWidth)||(f?"":C())}function k(){return pe(t.fixedHeight)||(f?t.autoHeight?null:C():S())}function C(){var b=pe(t.gap);return"calc((100%"+(b&&" + "+b)+")/"+(t.perPage||1)+(b&&" - "+b)+")"}function p(){return ee(d)[c("width")]}function L(b,D){var T=h(b||0);return T?ee(T.slide)[c("width")]+(D?0:F()):0}function R(b,D){var T=h(b);if(T){var w=ee(T.slide)[c("right")],U=ee(d)[c("left")];return j(w-U)+(D?0:F())}return 0}function V(b){return R(e.length-1)-R(0)+L(0,b)}function F(){var b=h(0);return b&&parseFloat(re(b.slide,c("marginRight")))||0}function Y(b){return parseFloat(re(m,c("padding"+(b?"Right":"Left"))))||0}function W(){return e.is(rt)||V(!0)>p()}return{mount:g,resize:P,listSize:p,slideSize:L,sliderSize:V,totalSize:R,getPadding:Y,isOverflow:W}}var Cr=2;function Pr(e,n,t){var r=H(e),i=r.on,l=n.Elements,a=n.Slides,s=n.Direction.resolve,c=[],v;function o(){i(q,m),i([J,Ve],h),(v=A())&&(u(v),n.Layout.resize(!0))}function m(){d(),o()}function d(){Ne(c),de(c),r.destroy()}function h(){var _=A();v!==_&&(v<_||!_)&&r.emit(q)}function u(_){var g=a.get().slice(),E=g.length;if(E){for(;g.length<_;)ot(g,g);ot(g.slice(-_),g.slice(0,_)).forEach(function(P,I){var M=I<_,S=f(P.slide,I);M?zt(S,g[0].slide):je(l.list,S),ot(c,S),a.register(S,I-_+(M?0:E),P.index)})}}function f(_,g){var E=_.cloneNode(!0);return oe(E,t.classes.clone),E.id=e.root.id+"-clone"+Ht(g+1),E}function A(){var _=t.clones;if(!e.is(Ue))_=0;else if(Je(_)){var g=t[s("fixedWidth")]&&n.Layout.slideSize(0),E=g&&Ke(ee(l.track)[s("width")]/g);_=E||t[s("autoWidth")]&&e.length||t.perPage*Cr}return _}return{mount:o,destroy:d}}function br(e,n,t){var r=H(e),i=r.on,l=r.emit,a=e.state.set,s=n.Layout,c=s.slideSize,v=s.getPadding,o=s.totalSize,m=s.listSize,d=s.sliderSize,h=n.Direction,u=h.resolve,f=h.orient,A=n.Elements,_=A.list,g=A.track,E;function P(){E=n.Transition,i([ye,Et,J,q],I)}function I(){n.Controller.isBusy()||(n.Scroll.cancel(),S(e.index),n.Slides.update())}function M(T,w,U,$){T!==w&&b(T>U)&&(p(),O(C(V(),T>U),!0)),a(Fe),l(he,w,U,T),E.start(w,function(){a(Me),l(ke,w,U,T),$&&$()})}function S(T){O(R(T,!0))}function O(T,w){if(!e.is(rt)){var U=w?T:k(T);re(_,"transform","translate"+u("X")+"("+U+"px)"),T!==U&&l(Bn)}}function k(T){if(e.is(Ue)){var w=L(T),U=w>n.Controller.getEnd(),$=w<0;($||U)&&(T=C(T,U))}return T}function C(T,w){var U=T-W(w),$=d();return T-=f($*(Ke(j(U)/$)||1))*(w?1:-1),T}function p(){O(V(),!0),E.cancel()}function L(T){for(var w=n.Slides.get(),U=0,$=1/0,K=0;K<w.length;K++){var Ee=w[K].index,y=j(R(Ee,!0)-T);if(y<=$)$=y,U=Ee;else break}return U}function R(T,w){var U=f(o(T-1)-Y(T));return w?F(U):U}function V(){var T=u("left");return ee(_)[T]-ee(g)[T]+f(v(!1))}function F(T){return t.trimSpace&&e.is(xe)&&(T=we(T,0,f(d(!0)-m()))),T}function Y(T){var w=t.focus;return w==="center"?(m()-c(T,!0))/2:+w*c(T)||0}function W(T){return R(T?n.Controller.getEnd():0,!!t.trimSpace)}function b(T){var w=f(C(V(),T));return T?w>=0:w<=_[u("scrollWidth")]-ee(g)[u("width")]}function D(T,w){w=Je(w)?V():w;var U=T!==!0&&f(w)<f(W(!1)),$=T!==!1&&f(w)>f(W(!0));return U||$}return{mount:P,move:M,jump:S,translate:O,shift:C,cancel:p,toIndex:L,toPosition:R,getPosition:V,getLimit:W,exceededLimit:D,reposition:I}}function Mr(e,n,t){var r=H(e),i=r.on,l=r.emit,a=n.Move,s=a.getPosition,c=a.getLimit,v=a.toPosition,o=n.Slides,m=o.isEnough,d=o.getLength,h=t.omitEnd,u=e.is(Ue),f=e.is(xe),A=z(V,!1),_=z(V,!0),g=t.start||0,E,P=g,I,M,S;function O(){k(),i([J,q,lt],k),i(Et,C)}function k(){I=d(!0),M=t.perMove,S=t.perPage,E=b();var y=we(g,0,h?E:I-1);y!==g&&(g=y,a.reposition())}function C(){E!==b()&&l(lt)}function p(y,G,Q){if(!Ee()){var X=R(y),Z=W(X);Z>-1&&(G||Z!==g)&&(U(Z),a.move(X,Z,P,Q))}}function L(y,G,Q,X){n.Scroll.scroll(y,G,Q,function(){var Z=W(a.toIndex(s()));U(h?_e(Z,E):Z),X&&X()})}function R(y){var G=g;if(me(y)){var Q=y.match(/([+\-<>])(\d+)?/)||[],X=Q[1],Z=Q[2];X==="+"||X==="-"?G=F(g+ +(""+X+(+Z||1)),g):X===">"?G=Z?D(+Z):A(!0):X==="<"&&(G=_(!0))}else G=u?y:we(y,0,E);return G}function V(y,G){var Q=M||(K()?1:S),X=F(g+Q*(y?-1:1),g,!(M||K()));return X===-1&&f&&!In(s(),c(!y),1)?y?0:E:G?X:W(X)}function F(y,G,Q){if(m()||K()){var X=Y(y);X!==y&&(G=y,y=X,Q=!1),y<0||y>E?!M&&(ut(0,y,G,!0)||ut(E,G,y,!0))?y=D(T(y)):u?y=Q?y<0?-(I%S||S):I:y:t.rewind?y=y<0?E:0:y=-1:Q&&y!==G&&(y=D(T(G)+(y<G?-1:1)))}else y=-1;return y}function Y(y){if(f&&t.trimSpace==="move"&&y!==g)for(var G=s();G===v(y,!0)&&ut(y,0,e.length-1,!t.rewind);)y<g?--y:++y;return y}function W(y){return u?(y+I)%I||0:y}function b(){for(var y=I-(K()||u&&M?1:S);h&&y-- >0;)if(v(I-1,!0)!==v(y,!0)){y++;break}return we(y,0,I-1)}function D(y){return we(K()?y:S*y,0,E)}function T(y){return K()?_e(y,E):vt((y>=E?I-1:y)/S)}function w(y){var G=a.toIndex(y);return f?we(G,0,E):G}function U(y){y!==g&&(P=g,g=y)}function $(y){return y?P:g}function K(){return!Je(t.focus)||t.isNavigation}function Ee(){return e.state.is([Fe,Ze])&&!!t.waitForTransition}return{mount:O,go:p,scroll:L,getNext:A,getPrev:_,getAdjacent:V,getEnd:b,setIndex:U,getIndex:$,toIndex:D,toPage:T,toDest:w,hasFocus:K,isBusy:Ee}}var Vr="http://www.w3.org/2000/svg",xr="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",it=40;function Fr(e,n,t){var r=H(e),i=r.on,l=r.bind,a=r.emit,s=t.classes,c=t.i18n,v=n.Elements,o=n.Controller,m=v.arrows,d=v.track,h=m,u=v.prev,f=v.next,A,_,g={};function E(){I(),i(J,P)}function P(){M(),E()}function I(){var L=t.arrows;L&&!(u&&f)&&k(),u&&f&&(Xe(g,{prev:u,next:f}),qe(h,L?"":"none"),oe(h,_=en+"--"+t.direction),L&&(S(),p(),x([u,f],nt,d.id),a(xn,u,f)))}function M(){r.destroy(),ve(h,_),A?(Ne(m?[u,f]:h),u=f=null):ue([u,f],jt)}function S(){i([ye,ke,q,Oe,lt],p),l(f,"click",z(O,">")),l(u,"click",z(O,"<"))}function O(L){o.go(L,!0)}function k(){h=m||Pe("div",s.arrows),u=C(!0),f=C(!1),A=!0,je(h,[u,f]),!m&&zt(h,d)}function C(L){var R='<button class="'+s.arrow+" "+(L?s.prev:s.next)+'" type="button"><svg xmlns="'+Vr+'" viewBox="0 0 '+it+" "+it+'" width="'+it+'" height="'+it+'" focusable="false"><path d="'+(t.arrowPath||xr)+'" />';return Rn(R)}function p(){if(u&&f){var L=e.index,R=o.getPrev(),V=o.getNext(),F=R>-1&&L<R?c.last:c.prev,Y=V>-1&&L>V?c.first:c.next;u.disabled=R<0,f.disabled=V<0,x(u,te,F),x(f,te,Y),a(Fn,u,f,R,V)}}return{arrows:g,mount:E,destroy:M,update:p}}var kr=Wt+"-interval";function Ur(e,n,t){var r=H(e),i=r.on,l=r.bind,a=r.emit,s=mt(t.interval,e.go.bind(e,">"),S),c=s.isPaused,v=n.Elements,o=n.Elements,m=o.root,d=o.toggle,h=t.autoplay,u,f,A=h==="pause";function _(){h&&(g(),d&&x(d,nt,v.track.id),A||E(),M())}function g(){t.pauseOnHover&&l(m,"mouseenter mouseleave",function(k){u=k.type==="mouseenter",I()}),t.pauseOnFocus&&l(m,"focusin focusout",function(k){f=k.type==="focusin",I()}),d&&l(d,"click",function(){A?E():P(!0)}),i([he,gt,q],s.rewind),i(he,O)}function E(){c()&&n.Slides.isEnough()&&(s.start(!t.resetProgress),f=u=A=!1,M(),a(Kt))}function P(k){k===void 0&&(k=!0),A=!!k,M(),c()||(s.pause(),a($t))}function I(){A||(u||f?P(!1):E())}function M(){d&&(fe(d,Ie,!A),x(d,te,t.i18n[A?"play":"pause"]))}function S(k){var C=v.bar;C&&re(C,"width",k*100+"%"),a(Gn,k)}function O(k){var C=n.Slides.getAt(k);s.set(C&&+ie(C.slide,kr)||t.interval)}return{mount:_,destroy:s.cancel,play:E,pause:P,isPaused:c}}function Gr(e,n,t){var r=H(e),i=r.on;function l(){t.cover&&(i(Zt,z(s,!0)),i([ye,J,q],z(a,!0)))}function a(c){n.Slides.forEach(function(v){var o=et(v.container||v.slide,"img");o&&o.src&&s(c,o,v)})}function s(c,v,o){o.style("background",c?'center/cover no-repeat url("'+v.src+'")':"",!0),qe(v,c?"none":"")}return{mount:l,destroy:z(a,!1)}}var zr=10,Br=600,Wr=.6,Hr=1.5,Yr=800;function Xr(e,n,t){var r=H(e),i=r.on,l=r.emit,a=e.state.set,s=n.Move,c=s.getPosition,v=s.getLimit,o=s.exceededLimit,m=s.translate,d=e.is(xe),h,u,f=1;function A(){i(he,P),i([J,q],I)}function _(S,O,k,C,p){var L=c();if(P(),k&&(!d||!o())){var R=n.Layout.sliderSize(),V=Ct(S)*R*vt(j(S)/R)||0;S=s.toPosition(n.Controller.toDest(S%R))+V}var F=In(L,S,1);f=1,O=F?0:O||ft(j(S-L)/Hr,Yr),u=C,h=mt(O,g,z(E,L,S,p),1),a(Ze),l(gt),h.start()}function g(){a(Me),u&&u(),l(Oe)}function E(S,O,k,C){var p=c(),L=S+(O-S)*M(C),R=(L-p)*f;m(p+R),d&&!k&&o()&&(f*=Wr,j(R)<zr&&_(v(o(!0)),Br,!1,u,!0))}function P(){h&&h.cancel()}function I(){h&&!h.isPaused()&&(P(),g())}function M(S){var O=t.easingFunc;return O?O(S):1-Math.pow(1-S,4)}return{mount:A,destroy:P,scroll:_,cancel:I}}var De={passive:!1,capture:!0};function qr(e,n,t){var r=H(e),i=r.on,l=r.emit,a=r.bind,s=r.unbind,c=e.state,v=n.Move,o=n.Scroll,m=n.Controller,d=n.Elements.track,h=n.Media.reduce,u=n.Direction,f=u.resolve,A=u.orient,_=v.getPosition,g=v.exceededLimit,E,P,I,M,S,O=!1,k,C,p;function L(){a(d,It,wt,De),a(d,Ot,wt,De),a(d,tr,V,De),a(d,"click",W,{capture:!0}),a(d,"dragstart",ce),i([ye,J],R)}function R(){var N=t.drag;an(!N),M=N==="free"}function V(N){if(k=!1,!C){var B=Z(N);X(N.target)&&(B||!N.button)&&(m.isBusy()?ce(N,!0):(p=B?d:window,S=c.is([Fe,Ze]),I=null,a(p,It,F,De),a(p,Ot,Y,De),v.cancel(),o.cancel(),b(N)))}}function F(N){if(c.is(at)||(c.set(at),l(bn)),N.cancelable)if(S){v.translate(E+Q(K(N)));var B=Ee(N)>mn,Te=O!==(O=g());(B||Te)&&b(N),k=!0,l(Mn),ce(N)}else w(N)&&(S=T(N),ce(N))}function Y(N){c.is(at)&&(c.set(Me),l(Vn)),S&&(D(N),ce(N)),s(p,It,F),s(p,Ot,Y),S=!1}function W(N){!C&&k&&ce(N,!0)}function b(N){I=P,P=N,E=_()}function D(N){var B=U(N),Te=$(B),Ge=t.rewind&&t.rewindByDrag;h(!1),M?m.scroll(Te,0,t.snap):e.is(rt)?m.go(A(Ct(B))<0?Ge?"<":"-":Ge?">":"+"):e.is(xe)&&O&&Ge?m.go(g(!0)?">":"<"):m.go(m.toDest(Te),!0),h(!0)}function T(N){var B=t.dragMinThreshold,Te=We(B),Ge=Te&&B.mouse||0,rr=(Te?B.touch:+B)||10;return j(K(N))>(Z(N)?rr:Ge)}function w(N){return j(K(N))>j(K(N,!0))}function U(N){if(e.is(Ue)||!O){var B=Ee(N);if(B&&B<mn)return K(N)/B}return 0}function $(N){return _()+Ct(N)*_e(j(N)*(t.flickPower||600),M?1/0:n.Layout.listSize()*(t.flickMaxPages||1))}function K(N,B){return G(N,B)-G(y(N),B)}function Ee(N){return Dt(N)-Dt(y(N))}function y(N){return P===N&&I||P}function G(N,B){return(Z(N)?N.changedTouches[0]:N)["page"+f(B?"Y":"X")]}function Q(N){return N/(O&&e.is(xe)?Nr:1)}function X(N){var B=t.noDrag;return!He(N,"."+Zn+", ."+pt)&&(!B||!He(N,B))}function Z(N){return typeof TouchEvent<"u"&&N instanceof TouchEvent}function nr(){return S}function an(N){C=N}return{mount:L,disable:an,isDragging:nr}}var Kr={Spacebar:" ",Right:yt,Left:At,Up:Wn,Down:Hn};function tn(e){return e=me(e)?e:e.key,Kr[e]||e}var _n="keydown";function $r(e,n,t){var r=H(e),i=r.on,l=r.bind,a=r.unbind,s=e.root,c=n.Direction.resolve,v,o;function m(){d(),i(J,h),i(J,d),i(he,f)}function d(){var _=t.keyboard;_&&(v=_==="global"?window:s,l(v,_n,A))}function h(){a(v,_n)}function u(_){o=_}function f(){var _=o;o=!0,yn(function(){o=_})}function A(_){if(!o){var g=tn(_);g===c(At)?e.go("<"):g===c(yt)&&e.go(">")}}return{mount:m,destroy:h,disable:u}}var Be=Wt+"-lazy",st=Be+"-srcset",Zr="["+Be+"], ["+st+"]";function Jr(e,n,t){var r=H(e),i=r.on,l=r.off,a=r.bind,s=r.emit,c=t.lazyLoad==="sequential",v=[ke,Oe],o=[];function m(){t.lazyLoad&&(d(),i(q,d))}function d(){de(o),h(),c?_():(l(v),i(v,u),u())}function h(){n.Slides.forEach(function(g){Bt(g.slide,Zr).forEach(function(E){var P=ie(E,Be),I=ie(E,st);if(P!==E.src||I!==E.srcset){var M=t.classes.spinner,S=E.parentElement,O=et(S,"."+M)||Pe("span",M,S);o.push([E,g,O]),E.src||qe(E,"none")}})})}function u(){o=o.filter(function(g){var E=t.perPage*((t.preloadPages||1)+1)-1;return g[1].isWithin(e.index,E)?f(g):!0}),o.length||l(v)}function f(g){var E=g[0];oe(g[1].slide,Vt),a(E,"load error",z(A,g)),x(E,"src",ie(E,Be)),x(E,"srcset",ie(E,st)),ue(E,Be),ue(E,st)}function A(g,E){var P=g[0],I=g[1];ve(I.slide,Vt),E.type!=="error"&&(Ne(g[2]),qe(P,""),s(Zt,P,I),s(Ve)),c&&_()}function _(){o.length&&f(o.shift())}return{mount:m,destroy:z(de,o),check:u}}function Qr(e,n,t){var r=H(e),i=r.on,l=r.emit,a=r.bind,s=n.Slides,c=n.Elements,v=n.Controller,o=v.hasFocus,m=v.getIndex,d=v.go,h=n.Direction.resolve,u=c.pagination,f=[],A,_;function g(){E(),i([J,q,lt],g);var C=t.pagination;u&&qe(u,C?"":"none"),C&&(i([he,gt,Oe],k),P(),k(),l(kn,{list:A,items:f},O(e.index)))}function E(){A&&(Ne(u?Ae(A.children):A),ve(A,_),de(f),A=null),r.destroy()}function P(){var C=e.length,p=t.classes,L=t.i18n,R=t.perPage,V=o()?v.getEnd()+1:Ke(C/R);A=u||Pe("ul",p.pagination,c.track.parentElement),oe(A,_=Lt+"--"+S()),x(A,le,"tablist"),x(A,te,L.select),x(A,Qt,S()===St?"vertical":"");for(var F=0;F<V;F++){var Y=Pe("li",null,A),W=Pe("button",{class:p.page,type:"button"},Y),b=s.getIn(F).map(function(T){return T.slide.id}),D=!o()&&R>1?L.pageX:L.slideX;a(W,"click",z(I,F)),t.paginationKeyboard&&a(W,"keydown",z(M,F)),x(Y,le,"presentation"),x(W,le,"tab"),x(W,nt,b.join(" ")),x(W,te,Pt(D,F+1)),x(W,be,-1),f.push({li:Y,button:W,page:F})}}function I(C){d(">"+C,!0)}function M(C,p){var L=f.length,R=tn(p),V=S(),F=-1;R===h(yt,!1,V)?F=++C%L:R===h(At,!1,V)?F=(--C+L)%L:R==="Home"?F=0:R==="End"&&(F=L-1);var Y=f[F];Y&&(Ln(Y.button),d(">"+F),ce(p,!0))}function S(){return t.paginationDirection||t.direction}function O(C){return f[v.toPage(C)]}function k(){var C=O(m(!0)),p=O(m());if(C){var L=C.button;ve(L,Ie),ue(L,ln),x(L,be,-1)}if(p){var R=p.button;oe(R,Ie),x(R,ln,!0),x(R,be,"")}l(Un,{list:A,items:f},C,p)}return{items:f,mount:g,destroy:E,getAt:O,update:k}}var jr=[" ","Enter"];function ei(e,n,t){var r=t.isNavigation,i=t.slideFocus,l=[];function a(){e.splides.forEach(function(u){u.isParent||(v(e,u.splide),v(u.splide,e))}),r&&o()}function s(){l.forEach(function(u){u.destroy()}),de(l)}function c(){s(),a()}function v(u,f){var A=H(u);A.on(he,function(_,g,E){f.go(f.is(Ue)?E:_)}),l.push(A)}function o(){var u=H(e),f=u.on;f(Yt,d),f(zn,h),f([ye,J],m),l.push(u),u.emit(qt,e.splides)}function m(){x(n.Elements.list,Qt,t.direction===St?"vertical":"")}function d(u){e.go(u.index)}function h(u,f){Gt(jr,tn(f))&&(d(u),ce(f))}return{setup:z(n.Media.set,{slideFocus:Je(i)?r:i},!0),mount:a,destroy:s,remount:c}}function ti(e,n,t){var r=H(e),i=r.bind,l=0;function a(){t.wheel&&i(n.Elements.track,"wheel",s,De)}function s(v){if(v.cancelable){var o=v.deltaY,m=o<0,d=Dt(v),h=t.wheelMinThreshold||0,u=t.wheelSleep||0;j(o)>h&&d-l>u&&(e.go(m?"<":">"),l=d),c(m)&&ce(v)}}function c(v){return!t.releaseWheel||e.state.is(Fe)||n.Controller.getAdjacent(v)!==-1}return{mount:a}}var ni=90;function ri(e,n,t){var r=H(e),i=r.on,l=n.Elements.track,a=t.live&&!t.isNavigation,s=Pe("span",Sr),c=mt(ni,z(o,!1));function v(){a&&(d(!n.Autoplay.isPaused()),x(l,En,!0),s.textContent="…",i(Kt,z(d,!0)),i($t,z(d,!1)),i([ke,Oe],z(o,!0)))}function o(h){x(l,hn,h),h?(je(l,s),c.start()):(Ne(s),c.cancel())}function m(){ue(l,[dn,En,hn]),Ne(s)}function d(h){a&&x(l,dn,h?"off":"polite")}return{mount:v,disable:d,destroy:m}}var ii=Object.freeze({__proto__:null,Media:lr,Direction:dr,Elements:Ir,Slides:wr,Layout:Dr,Clones:Pr,Move:br,Controller:Mr,Arrows:Fr,Autoplay:Ur,Cover:Gr,Scroll:Xr,Drag:qr,Keyboard:$r,LazyLoad:Jr,Pagination:Qr,Sync:ei,Wheel:ti,Live:ri}),ai={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},oi={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Lr,i18n:ai,reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ui(e,n,t){var r=n.Slides;function i(){H(e).on([ye,q],l)}function l(){r.forEach(function(s){s.style("transform","translateX(-"+100*s.index+"%)")})}function a(s,c){r.style("transition","opacity "+t.speed+"ms "+t.easing),yn(c)}return{mount:i,start:a,cancel:wt}}function si(e,n,t){var r=n.Move,i=n.Controller,l=n.Scroll,a=n.Elements.list,s=z(re,a,"transition"),c;function v(){H(e).bind(a,"transitionend",function(h){h.target===a&&c&&(m(),c())})}function o(h,u){var f=r.toPosition(h,!0),A=r.getPosition(),_=d(h);j(f-A)>=1&&_>=1?t.useScroll?l.scroll(f,_,!1,u):(s("transform "+_+"ms "+t.easing),r.translate(f,!0),c=u):(r.jump(h),u())}function m(){s(""),l.cancel()}function d(h){var u=t.rewindSpeed;if(e.is(xe)&&u){var f=i.getIndex(!0),A=i.getEnd();if(f===0&&h>=A||f>=A&&h===0)return u}return t.speed}return{mount:v,start:o,cancel:m}}var ci=function(){function e(t,r){this.event=H(),this.Components={},this.state=fr(Ce),this.splides=[],this._o={},this._E={};var i=me(t)?Nn(document,t):t;ze(i,i+" is invalid."),this.root=i,r=ge({label:ie(i,te)||"",labelledby:ie(i,Jt)||""},oi,e.defaults,r||{});try{ge(r,JSON.parse(ie(i,Wt)))}catch{ze(!1,"Invalid JSON")}this._o=Object.create(ge({},r))}var n=e.prototype;return n.mount=function(r,i){var l=this,a=this.state,s=this.Components;ze(a.is([Ce,ct]),"Already mounted!"),a.set(Ce),this._C=s,this._T=i||this._T||(this.is(rt)?ui:si),this._E=r||this._E;var c=Xe({},ii,this._E,{Transition:this._T});return Re(c,function(v,o){var m=v(l,s,l._o);s[o]=m,m.setup&&m.setup()}),Re(s,function(v){v.mount&&v.mount()}),this.emit(ye),oe(this.root,Tr),a.set(Me),this.emit(bt),this},n.sync=function(r){return this.splides.push({splide:r}),r.splides.push({splide:this,isParent:!0}),this.state.is(Me)&&(this._C.Sync.remount(),r.Components.Sync.remount()),this},n.go=function(r){return this._C.Controller.go(r),this},n.on=function(r,i){return this.event.on(r,i),this},n.off=function(r){return this.event.off(r),this},n.emit=function(r){var i;return(i=this.event).emit.apply(i,[r].concat(Ae(arguments,1))),this},n.add=function(r,i){return this._C.Slides.add(r,i),this},n.remove=function(r){return this._C.Slides.remove(r),this},n.is=function(r){return this._o.type===r},n.refresh=function(){return this.emit(q),this},n.destroy=function(r){r===void 0&&(r=!0);var i=this.event,l=this.state;return l.is(Ce)?H(this).on(bt,this.destroy.bind(this,r)):(Re(this._C,function(a){a.destroy&&a.destroy(r)},!0),i.emit(Xt),i.destroy(),r&&de(this.splides),l.set(ct)),this},ar(e,[{key:"options",get:function(){return this._o},set:function(r){this._C.Media.set(r,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),e}(),nn=ci;nn.defaults={};nn.STATES=ur;var An=[[ye,"onMounted"],[bt,"onReady"],[he,"onMove"],[ke,"onMoved"],[Yt,"onClick"],[wn,"onActive"],[Dn,"onInactive"],[Cn,"onVisible"],[Pn,"onHidden"],[q,"onRefresh"],[J,"onUpdated"],[Ve,"onResize"],[Et,"onResized"],[bn,"onDrag"],[Mn,"onDragging"],[Vn,"onDragged"],[gt,"onScroll"],[Oe,"onScrolled"],[Xt,"onDestroy"],[xn,"onArrowsMounted"],[Fn,"onArrowsUpdated"],[kn,"onPaginationMounted"],[Un,"onPaginationUpdated"],[qt,"onNavigationMounted"],[Kt,"onAutoplayPlay"],[Gn,"onAutoplayPlaying"],[$t,"onAutoplayPause"],[Zt,"onLazyLoadLoaded"]];function rn(...e){return e.filter(Boolean).join(" ")}function dt(e){return e!==null&&typeof e=="object"}function xt(e,n){if(Array.isArray(e)&&Array.isArray(n))return e.length===n.length&&!e.some((t,r)=>!xt(t,n[r]));if(dt(e)&&dt(n)){const t=Object.keys(e),r=Object.keys(n);return t.length===r.length&&!t.some(i=>!Object.prototype.hasOwnProperty.call(n,i)||!xt(e[i],n[i]))}return e===n}function fi(e,n){return e.length===n.length&&!e.some((t,r)=>t!==n[r])}function vi(e,n){if(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const i=t[r];if(i!=="__proto__"&&n(e[i],i)===!1)break}}return e}function Ft(e,n){const t=e;return vi(n,(r,i)=>{Array.isArray(r)?t[i]=r.slice():dt(r)?t[i]=Ft(dt(t[i])?t[i]:{},r):t[i]=r}),t}var li=({children:e,className:n,...t})=>Le.createElement("div",{className:rn("splide__track",n),...t},Le.createElement("ul",{className:"splide__list"},e)),hi=class extends Le.Component{constructor(){super(...arguments),this.splideRef=Le.createRef(),this.slides=[]}componentDidMount(){const{options:e,extensions:n,transition:t}=this.props,{current:r}=this.splideRef;r&&(this.splide=new nn(r,e),this.bind(this.splide),this.splide.mount(n,t),this.options=Ft({},e||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:e}=this.props;e&&!xt(this.options,e)&&(this.splide.options=e,this.options=Ft({},e));const n=this.getSlides();fi(this.slides,n)||(this.splide.refresh(),this.slides=n)}sync(e){var n;(n=this.splide)==null||n.sync(e)}go(e){var n;(n=this.splide)==null||n.go(e)}getSlides(){var e;if(this.splide){const n=(e=this.splide.Components.Elements)==null?void 0:e.list.children;return n&&Array.prototype.slice.call(n)||[]}return[]}bind(e){An.forEach(([n,t])=>{const r=this.props[t];typeof r=="function"&&e.on(n,(...i)=>{r(e,...i)})})}omit(e,n){return n.forEach(t=>{Object.prototype.hasOwnProperty.call(e,t)&&delete e[t]}),e}render(){const{className:e,tag:n="div",hasTrack:t=!0,children:r,...i}=this.props;return Le.createElement(n,{className:rn("splide",e),ref:this.splideRef,...this.omit(i,["options",...An.map(l=>l[1])])},t?Le.createElement(li,null,r):r)}},Ei=({children:e,className:n,...t})=>Le.createElement("li",{className:rn("splide__slide",n),...t},e);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */export{hi as S,Ei as a};
