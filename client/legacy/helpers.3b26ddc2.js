var n=new Date,e=new Date;function t(r,u,o,i){function c(n){return r(n=0===arguments.length?new Date:new Date(+n)),n}return c.floor=function(n){return r(n=new Date(+n)),n},c.ceil=function(n){return r(n=new Date(n-1)),u(n,1),r(n),n},c.round=function(n){var e=c(n),t=c.ceil(n);return n-e<t-n?e:t},c.offset=function(n,e){return u(n=new Date(+n),null==e?1:Math.floor(e)),n},c.range=function(n,e,t){var o,i=[];if(n=c.ceil(n),t=null==t?1:Math.floor(t),!(n<e&&t>0))return i;do{i.push(o=new Date(+n)),u(n,t),r(n)}while(o<n&&n<e);return i},c.filter=function(n){return t((function(e){if(e>=e)for(;r(e),!n(e);)e.setTime(e-1)}),(function(e,t){if(e>=e)if(t<0)for(;++t<=0;)for(;u(e,-1),!n(e););else for(;--t>=0;)for(;u(e,1),!n(e););}))},o&&(c.count=function(t,u){return n.setTime(+t),e.setTime(+u),r(n),r(e),Math.floor(o(n,e))},c.every=function(n){return n=Math.floor(n),isFinite(n)&&n>0?n>1?c.filter(i?function(e){return i(e)%n==0}:function(e){return c.count(0,e)%n==0}):c:null}),c}var r=t((function(n){return n.setHours(0,0,0,0)}),(function(n,e){return n.setDate(n.getDate()+e)}),(function(n,e){return(e-n-6e4*(e.getTimezoneOffset()-n.getTimezoneOffset()))/864e5}),(function(n){return n.getDate()-1}));function u(n){return t((function(e){e.setDate(e.getDate()-(e.getDay()+7-n)%7),e.setHours(0,0,0,0)}),(function(n,e){n.setDate(n.getDate()+7*e)}),(function(n,e){return(e-n-6e4*(e.getTimezoneOffset()-n.getTimezoneOffset()))/6048e5}))}var o=u(0),i=u(1),c=(u(2),u(3),u(4)),a=(u(5),u(6),t((function(n){n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e)}),(function(n,e){return e.getFullYear()-n.getFullYear()}),(function(n){return n.getFullYear()})));a.every=function(n){return isFinite(n=Math.floor(n))&&n>0?t((function(e){e.setFullYear(Math.floor(e.getFullYear()/n)*n),e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,t){e.setFullYear(e.getFullYear()+t*n)})):null};var f=t((function(n){n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCDate(n.getUTCDate()+e)}),(function(n,e){return(e-n)/864e5}),(function(n){return n.getUTCDate()-1}));function l(n){return t((function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-n)%7),e.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCDate(n.getUTCDate()+7*e)}),(function(n,e){return(e-n)/6048e5}))}var s=l(0),g=l(1),h=(l(2),l(3),l(4)),T=(l(5),l(6),t((function(n){n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e)}),(function(n,e){return e.getUTCFullYear()-n.getUTCFullYear()}),(function(n){return n.getUTCFullYear()})));function C(n){if(0<=n.y&&n.y<100){var e=new Date(-1,n.m,n.d,n.H,n.M,n.S,n.L);return e.setFullYear(n.y),e}return new Date(n.y,n.m,n.d,n.H,n.M,n.S,n.L)}function v(n){if(0<=n.y&&n.y<100){var e=new Date(Date.UTC(-1,n.m,n.d,n.H,n.M,n.S,n.L));return e.setUTCFullYear(n.y),e}return new Date(Date.UTC(n.y,n.m,n.d,n.H,n.M,n.S,n.L))}function y(n,e,t){return{y:n,m:e,d:t,H:0,M:0,S:0,L:0}}T.every=function(n){return isFinite(n=Math.floor(n))&&n>0?t((function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/n)*n),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,t){e.setUTCFullYear(e.getUTCFullYear()+t*n)})):null};var D,U,M={"-":"",_:" ",0:"0"},d=/^\s*\d+/,m=/^%/,w=/[\\^$*+?|[\]().{}]/g;function F(n,e,t){var r=n<0?"-":"",u=(r?-n:n)+"",o=u.length;return r+(o<t?new Array(t-o+1).join(e)+u:u)}function Y(n){return n.replace(w,"\\$&")}function x(n){return new RegExp("^(?:"+n.map(Y).join("|")+")","i")}function H(n){return new Map(n.map((function(n,e){return[n.toLowerCase(),e]})))}function p(n,e,t){var r=d.exec(e.slice(t,t+1));return r?(n.w=+r[0],t+r[0].length):-1}function S(n,e,t){var r=d.exec(e.slice(t,t+1));return r?(n.u=+r[0],t+r[0].length):-1}function A(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.U=+r[0],t+r[0].length):-1}function L(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.V=+r[0],t+r[0].length):-1}function b(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.W=+r[0],t+r[0].length):-1}function Z(n,e,t){var r=d.exec(e.slice(t,t+4));return r?(n.y=+r[0],t+r[0].length):-1}function W(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.y=+r[0]+(+r[0]>68?1900:2e3),t+r[0].length):-1}function V(n,e,t){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(t,t+6));return r?(n.Z=r[1]?0:-(r[2]+(r[3]||"00")),t+r[0].length):-1}function O(n,e,t){var r=d.exec(e.slice(t,t+1));return r?(n.q=3*r[0]-3,t+r[0].length):-1}function j(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.m=r[0]-1,t+r[0].length):-1}function q(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.d=+r[0],t+r[0].length):-1}function z(n,e,t){var r=d.exec(e.slice(t,t+3));return r?(n.m=0,n.d=+r[0],t+r[0].length):-1}function J(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.H=+r[0],t+r[0].length):-1}function Q(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.M=+r[0],t+r[0].length):-1}function X(n,e,t){var r=d.exec(e.slice(t,t+2));return r?(n.S=+r[0],t+r[0].length):-1}function I(n,e,t){var r=d.exec(e.slice(t,t+3));return r?(n.L=+r[0],t+r[0].length):-1}function B(n,e,t){var r=d.exec(e.slice(t,t+6));return r?(n.L=Math.floor(r[0]/1e3),t+r[0].length):-1}function G(n,e,t){var r=m.exec(e.slice(t,t+1));return r?t+r[0].length:-1}function P(n,e,t){var r=d.exec(e.slice(t));return r?(n.Q=+r[0],t+r[0].length):-1}function N(n,e,t){var r=d.exec(e.slice(t));return r?(n.s=+r[0],t+r[0].length):-1}function $(n,e){return F(n.getDate(),e,2)}function E(n,e){return F(n.getHours(),e,2)}function R(n,e){return F(n.getHours()%12||12,e,2)}function _(n,e){return F(1+r.count(a(n),n),e,3)}function k(n,e){return F(n.getMilliseconds(),e,3)}function K(n,e){return k(n,e)+"000"}function nn(n,e){return F(n.getMonth()+1,e,2)}function en(n,e){return F(n.getMinutes(),e,2)}function tn(n,e){return F(n.getSeconds(),e,2)}function rn(n){var e=n.getDay();return 0===e?7:e}function un(n,e){return F(o.count(a(n)-1,n),e,2)}function on(n){var e=n.getDay();return e>=4||0===e?c(n):c.ceil(n)}function cn(n,e){return n=on(n),F(c.count(a(n),n)+(4===a(n).getDay()),e,2)}function an(n){return n.getDay()}function fn(n,e){return F(i.count(a(n)-1,n),e,2)}function ln(n,e){return F(n.getFullYear()%100,e,2)}function sn(n,e){return F((n=on(n)).getFullYear()%100,e,2)}function gn(n,e){return F(n.getFullYear()%1e4,e,4)}function hn(n,e){var t=n.getDay();return F((n=t>=4||0===t?c(n):c.ceil(n)).getFullYear()%1e4,e,4)}function Tn(n){var e=n.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+F(e/60|0,"0",2)+F(e%60,"0",2)}function Cn(n,e){return F(n.getUTCDate(),e,2)}function vn(n,e){return F(n.getUTCHours(),e,2)}function yn(n,e){return F(n.getUTCHours()%12||12,e,2)}function Dn(n,e){return F(1+f.count(T(n),n),e,3)}function Un(n,e){return F(n.getUTCMilliseconds(),e,3)}function Mn(n,e){return Un(n,e)+"000"}function dn(n,e){return F(n.getUTCMonth()+1,e,2)}function mn(n,e){return F(n.getUTCMinutes(),e,2)}function wn(n,e){return F(n.getUTCSeconds(),e,2)}function Fn(n){var e=n.getUTCDay();return 0===e?7:e}function Yn(n,e){return F(s.count(T(n)-1,n),e,2)}function xn(n){var e=n.getUTCDay();return e>=4||0===e?h(n):h.ceil(n)}function Hn(n,e){return n=xn(n),F(h.count(T(n),n)+(4===T(n).getUTCDay()),e,2)}function pn(n){return n.getUTCDay()}function Sn(n,e){return F(g.count(T(n)-1,n),e,2)}function An(n,e){return F(n.getUTCFullYear()%100,e,2)}function Ln(n,e){return F((n=xn(n)).getUTCFullYear()%100,e,2)}function bn(n,e){return F(n.getUTCFullYear()%1e4,e,4)}function Zn(n,e){var t=n.getUTCDay();return F((n=t>=4||0===t?h(n):h.ceil(n)).getUTCFullYear()%1e4,e,4)}function Wn(){return"+0000"}function Vn(){return"%"}function On(n){return+n}function jn(n){return Math.floor(+n/1e3)}D=function(n){var e=n.dateTime,t=n.date,u=n.time,o=n.periods,c=n.days,a=n.shortDays,l=n.months,s=n.shortMonths,h=x(o),T=H(o),D=x(c),U=H(c),d=x(a),m=H(a),w=x(l),F=H(l),Y=x(s),on=H(s),xn={a:function(n){return a[n.getDay()]},A:function(n){return c[n.getDay()]},b:function(n){return s[n.getMonth()]},B:function(n){return l[n.getMonth()]},c:null,d:$,e:$,f:K,g:sn,G:hn,H:E,I:R,j:_,L:k,m:nn,M:en,p:function(n){return o[+(n.getHours()>=12)]},q:function(n){return 1+~~(n.getMonth()/3)},Q:On,s:jn,S:tn,u:rn,U:un,V:cn,w:an,W:fn,x:null,X:null,y:ln,Y:gn,Z:Tn,"%":Vn},qn={a:function(n){return a[n.getUTCDay()]},A:function(n){return c[n.getUTCDay()]},b:function(n){return s[n.getUTCMonth()]},B:function(n){return l[n.getUTCMonth()]},c:null,d:Cn,e:Cn,f:Mn,g:Ln,G:Zn,H:vn,I:yn,j:Dn,L:Un,m:dn,M:mn,p:function(n){return o[+(n.getUTCHours()>=12)]},q:function(n){return 1+~~(n.getUTCMonth()/3)},Q:On,s:jn,S:wn,u:Fn,U:Yn,V:Hn,w:pn,W:Sn,x:null,X:null,y:An,Y:bn,Z:Wn,"%":Vn},zn={a:function(n,e,t){var r=d.exec(e.slice(t));return r?(n.w=m.get(r[0].toLowerCase()),t+r[0].length):-1},A:function(n,e,t){var r=D.exec(e.slice(t));return r?(n.w=U.get(r[0].toLowerCase()),t+r[0].length):-1},b:function(n,e,t){var r=Y.exec(e.slice(t));return r?(n.m=on.get(r[0].toLowerCase()),t+r[0].length):-1},B:function(n,e,t){var r=w.exec(e.slice(t));return r?(n.m=F.get(r[0].toLowerCase()),t+r[0].length):-1},c:function(n,t,r){return Xn(n,e,t,r)},d:q,e:q,f:B,g:W,G:Z,H:J,I:J,j:z,L:I,m:j,M:Q,p:function(n,e,t){var r=h.exec(e.slice(t));return r?(n.p=T.get(r[0].toLowerCase()),t+r[0].length):-1},q:O,Q:P,s:N,S:X,u:S,U:A,V:L,w:p,W:b,x:function(n,e,r){return Xn(n,t,e,r)},X:function(n,e,t){return Xn(n,u,e,t)},y:W,Y:Z,Z:V,"%":G};function Jn(n,e){return function(t){var r,u,o,i=[],c=-1,a=0,f=n.length;for(t instanceof Date||(t=new Date(+t));++c<f;)37===n.charCodeAt(c)&&(i.push(n.slice(a,c)),null!=(u=M[r=n.charAt(++c)])?r=n.charAt(++c):u="e"===r?" ":"0",(o=e[r])&&(r=o(t,u)),i.push(r),a=c+1);return i.push(n.slice(a,c)),i.join("")}}function Qn(n,e){return function(t){var u,o,c=y(1900,void 0,1);if(Xn(c,n,t+="",0)!=t.length)return null;if("Q"in c)return new Date(c.Q);if("s"in c)return new Date(1e3*c.s+("L"in c?c.L:0));if(e&&!("Z"in c)&&(c.Z=0),"p"in c&&(c.H=c.H%12+12*c.p),void 0===c.m&&(c.m="q"in c?c.q:0),"V"in c){if(c.V<1||c.V>53)return null;"w"in c||(c.w=1),"Z"in c?(o=(u=v(y(c.y,0,1))).getUTCDay(),u=o>4||0===o?g.ceil(u):g(u),u=f.offset(u,7*(c.V-1)),c.y=u.getUTCFullYear(),c.m=u.getUTCMonth(),c.d=u.getUTCDate()+(c.w+6)%7):(o=(u=C(y(c.y,0,1))).getDay(),u=o>4||0===o?i.ceil(u):i(u),u=r.offset(u,7*(c.V-1)),c.y=u.getFullYear(),c.m=u.getMonth(),c.d=u.getDate()+(c.w+6)%7)}else("W"in c||"U"in c)&&("w"in c||(c.w="u"in c?c.u%7:"W"in c?1:0),o="Z"in c?v(y(c.y,0,1)).getUTCDay():C(y(c.y,0,1)).getDay(),c.m=0,c.d="W"in c?(c.w+6)%7+7*c.W-(o+5)%7:c.w+7*c.U-(o+6)%7);return"Z"in c?(c.H+=c.Z/100|0,c.M+=c.Z%100,v(c)):C(c)}}function Xn(n,e,t,r){for(var u,o,i=0,c=e.length,a=t.length;i<c;){if(r>=a)return-1;if(37===(u=e.charCodeAt(i++))){if(u=e.charAt(i++),!(o=zn[u in M?e.charAt(i++):u])||(r=o(n,t,r))<0)return-1}else if(u!=t.charCodeAt(r++))return-1}return r}return xn.x=Jn(t,xn),xn.X=Jn(u,xn),xn.c=Jn(e,xn),qn.x=Jn(t,qn),qn.X=Jn(u,qn),qn.c=Jn(e,qn),{format:function(n){var e=Jn(n+="",xn);return e.toString=function(){return n},e},parse:function(n){var e=Qn(n+="",!1);return e.toString=function(){return n},e},utcFormat:function(n){var e=Jn(n+="",qn);return e.toString=function(){return n},e},utcParse:function(n){var e=Qn(n+="",!0);return e.toString=function(){return n},e}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),U=D.format,D.parse,D.utcFormat,D.utcParse;var qn=function(n){return n.toLowerCase().replace(/[^a-z]+/g," ").trim().replace(/ /g,"-")};function zn(n,e,t){ga("send","event",n,e,t)}var Jn=U("%A %d %b"),Qn=U("%A"),Xn=U("%H.%M"),In=U("%A %d %b %H.%M");export{Jn as a,Xn as b,In as c,Qn as f,qn as s,zn as t};