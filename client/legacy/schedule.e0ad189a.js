import{r as t,u as r,_ as a,a as n,b as s,c as e,i as c,s as o,d as i,S as f,f as u,t as l,e as h,j as v,k as p,l as m,h as d,g as E,m as g,n as w,o as y,v as R,q as D,w as S,p as x,x as A}from"./client.a172f277.js";import{t as I}from"./tsv.c906c42a.js";import{s as O}from"./helpers.38afc14c.js";function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=n(t);if(r){var c=n(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return s(this,a)}}function b(t,r,a){var n=t.slice();return n[2]=r[a],n}function F(t){var r,a,n,s,e,c,o,i,f,D,S,x=t[2].title+"",A=t[2].startTime+"",I=t[2].artist+"";return{c:function(){r=u("li"),a=l(x),n=l(" - "),s=l(A),e=h(),c=u("br"),o=h(),i=u("a"),f=l(I),S=h(),this.h()},l:function(t){r=v(t,"LI",{});var u=p(r);a=m(u,x),n=m(u," - "),s=m(u,A),e=d(u),c=v(u,"BR",{}),o=d(u),i=v(u,"A",{href:!0});var l=p(i);f=m(l,I),l.forEach(E),S=d(u),u.forEach(E),this.h()},h:function(){g(i,"href",D="artists/"+O(t[2].artist))},m:function(t,u){w(t,r,u),y(r,a),y(r,n),y(r,s),y(r,e),y(r,c),y(r,o),y(r,i),y(i,f),y(r,S)},p:function(t,r){1&r&&x!==(x=t[2].title+"")&&R(a,x),1&r&&A!==(A=t[2].startTime+"")&&R(s,A),1&r&&I!==(I=t[2].artist+"")&&R(f,I),1&r&&D!==(D="artists/"+O(t[2].artist))&&g(i,"href",D)},d:function(t){t&&E(r)}}}function $(t){for(var r,a,n,s,e,c,o,i,f,R,I,O,T,$,j,k,C,M,V,H,G=t[0],L=[],N=0;N<G.length;N+=1)L[N]=F(b(t,G,N));return{c:function(){r=h(),a=u("section"),n=u("div"),s=u("div"),e=u("h1"),c=l("Final Show - 2020"),o=h(),i=u("h2"),f=l("MA/MFA Computational Arts - Goldsmiths"),R=h(),I=u("section"),O=u("div"),T=u("div"),$=u("h2"),j=l("Event schedule"),k=h(),C=u("p"),M=l("TODO - make this in to a proper listing"),V=h(),H=u("ul");for(var t=0;t<L.length;t+=1)L[t].c();this.h()},l:function(t){D('[data-svelte="svelte-1llonc1"]',document.head).forEach(E),r=d(t),a=v(t,"SECTION",{class:!0});var u=p(a);n=v(u,"DIV",{class:!0});var l=p(n);s=v(l,"DIV",{class:!0});var h=p(s);e=v(h,"H1",{class:!0});var g=p(e);c=m(g,"Final Show - 2020"),g.forEach(E),o=d(h),i=v(h,"H2",{class:!0});var w=p(i);f=m(w,"MA/MFA Computational Arts - Goldsmiths"),w.forEach(E),h.forEach(E),l.forEach(E),u.forEach(E),R=d(t),I=v(t,"SECTION",{class:!0});var y=p(I);O=v(y,"DIV",{class:!0});var S=p(O);T=v(S,"DIV",{class:!0});var x=p(T);$=v(x,"H2",{});var A=p($);j=m(A,"Event schedule"),A.forEach(E),k=d(x),C=v(x,"P",{});var b=p(C);M=m(b,"TODO - make this in to a proper listing"),b.forEach(E),V=d(x),H=v(x,"UL",{});for(var F=p(H),G=0;G<L.length;G+=1)L[G].l(F);F.forEach(E),x.forEach(E),S.forEach(E),y.forEach(E),this.h()},h:function(){document.title="Schedule - Final Show - 2020",g(e,"class","title"),g(i,"class","subtitle"),g(s,"class","container"),g(n,"class","hero-body"),g(a,"class","hero is-primary"),g(T,"class","content"),g(O,"class","container"),g(I,"class","section")},m:function(t,u){w(t,r,u),w(t,a,u),y(a,n),y(n,s),y(s,e),y(e,c),y(s,o),y(s,i),y(i,f),w(t,R,u),w(t,I,u),y(I,O),y(O,T),y(T,$),y($,j),y(T,k),y(T,C),y(C,M),y(T,V),y(T,H);for(var l=0;l<L.length;l+=1)L[l].m(H,null)},p:function(t,r){var a=S(r,1)[0];if(1&a){var n;for(G=t[0],n=0;n<G.length;n+=1){var s=b(t,G,n);L[n]?L[n].p(s,a):(L[n]=F(s),L[n].c(),L[n].m(H,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=G.length}},i:x,o:x,d:function(t){t&&E(r),t&&E(a),t&&E(R),t&&E(I),A(L,t)}}}function j(t){return k.apply(this,arguments)}function k(){return(k=t(r.mark((function t(a){var n;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.params,t.next=3,this.fetch("api/events.tsv").then((function(t){return t.text()}));case 3:return n=t.sent,t.abrupt("return",{eventRows:n});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,r,a){var n,s=r.eventRows;return t.$set=function(t){"eventRows"in t&&a(1,s=t.eventRows)},t.$$.update=function(){2&t.$$.dirty&&a(0,n=I(s).map((function(t){return t})))},[n,s]}var M=function(t){a(n,f);var r=T(n);function n(t){var a;return e(this,n),a=r.call(this),c(i(a),t,C,$,o,{eventRows:1}),a}return n}();export default M;export{j as preload};
