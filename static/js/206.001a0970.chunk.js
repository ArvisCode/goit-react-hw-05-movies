"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[206],{1893:function(n,t,e){e.d(t,{O:function(){return _}});var r,a,i,c,o,u,p=e(168),s=e(6031),f=s.ZP.ul(r||(r=(0,p.Z)(["\n  min-height: 100vh;\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 50px 80px 50px;\n"]))),x=e(501),d=e(6871),h=s.ZP.li(a||(a=(0,p.Z)(["\npadding:10px;\n  border-radius: 2px;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    &:hover {\n      transform: scale(1.03);\n      cursor: zoom-in;\n"]))),g=s.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),l=s.ZP.img(c||(c=(0,p.Z)(["\n  width: 300px;\n  height: 440px;\n  margin-bottom: 10px;\n  object-fit: cover;\n  }\n"]))),v=s.ZP.h2(o||(o=(0,p.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: #585858;\n"]))),m=s.ZP.p(u||(u=(0,p.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: #585858;\n"]))),b=e(536),w=e(184);var y=function(n){var t=n.id,e=n.title,r=n.poster,a=n.vote,i=(0,d.TH)();return(0,w.jsx)(h,{children:(0,w.jsxs)(x.rU,{to:"/movies/".concat(t),state:{from:i.pathname+i.search},children:[(0,w.jsx)(l,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):b,alt:e}),(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:e||"No Title"}),(0,w.jsxs)(m,{children:["Vote: ",a]})]})]})})},_=function(n){var t=n.movies;return(0,w.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.original_title,r=n.poster_path,a=n.vote_average;return(0,w.jsx)(y,{id:t,title:e,poster:r,vote:a},t)}))})}},1206:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),a=e(1893),i=e(2791),c=e(4390),o=e(5590),u=e(184);function p(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1];return(0,i.useEffect)((function(){(0,c.wr)().then((function(n){var t=(0,o.P)(n.results);p(t)}))}),[]),e&&(0,u.jsx)(a.O,{movies:e})}},4390:function(n,t,e){e.d(t,{FE:function(){return s},Y5:function(){return h},sv:function(){return m},uV:function(){return l},wr:function(){return x}});var r=e(5861),a=e(7757),i=e.n(a),c=e(4569),o=e.n(c),u="https://api.themoviedb.org/3",p="d783920aea034ba2adae6031a0bf96c0";function s(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/search/movie?api_key=").concat(p,"&query=").concat(t,"&page=1"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(u,"/trending/movie/day?api_key=").concat(p,"&page=",1),n.next=3,o().get("".concat(t)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"?api_key=").concat(p,"&language=en-US"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(p),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(p,"&language=en-US&page=1"),n.next=3,o().get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5590:function(n,t,e){e.d(t,{P:function(){return r}});var r=function(n){return n.map((function(n){return{poster_path:n.poster_path,id:n.id,original_title:n.original_title,vote_average:n.vote_average}}))}},536:function(n,t,e){n.exports=e.p+"static/media/no_poster.7dd23eb875fc11164f17.jpg"}}]);
//# sourceMappingURL=206.001a0970.chunk.js.map