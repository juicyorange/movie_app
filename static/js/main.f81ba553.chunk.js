(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{50:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e.n(i),c=e(20),o=e.n(c),s=e(7),u=e.n(s),p=e(21),x=e(9),b=e(3),d=e(22),l=e.n(d),f=e(4);function j(){var n=Object(b.a)(["\n    margin-top: 5px;\n    list-style: none;\n    padding: 0;\n    display : flex;\n\n    li {\n        margin-right : 10px;\n        font-size : 14px;\n    }\n"]);return j=function(){return n},n}function g(){var n=Object(b.a)(["\n"]);return g=function(){return n},n}function m(){var n=Object(b.a)(["\n    margin : 0;\n    font-weight: 300;\n"]);return m=function(){return n},n}function h(){var n=Object(b.a)(["\n    margin-bottom: 5px;\n    font-size: 24px;\n    color: #2c2c2c;\n"]);return h=function(){return n},n}function O(){var n=Object(b.a)(["\n    grid-template-columns: minmax(150px, 1fr) 2fr;\n    grid-gap: 20px;\n    text-decoration: none;\n    color: inherit\n"]);return O=function(){return n},n}function v(){var n=Object(b.a)(["\n    width: 45%;\n    background-color: white;\n    margin-bottom: 70px;\n    display : flex;\n    align-items : flex-start;\n    font-weight: 300;\n    padding: 20px;\n    border-radius: 5px;\n    color: #adaeb9;\n    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),\n        0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);\n\n    img {\n        position: relative;\n        top: -50px;\n        max-width: 150px;\n        width: 100%;\n        margin-right: 30px;\n        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n          0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n    }\n    "]);return v=function(){return n},n}var y=f.b.div(v()),w=f.b.div(O()),_=f.b.h3(h()),k=f.b.h5(m()),S=f.b.p(g()),z=f.b.ul(j());var B=function(n){n.id;var t=n.year,e=n.title,i=n.summary,a=n.poster,c=n.genres;return Object(r.jsxs)(y,{children:[Object(r.jsx)("img",{src:a,alt:e,title:e}),Object(r.jsxs)(w,{children:[Object(r.jsx)(_,{children:e}),Object(r.jsx)(k,{children:t}),Object(r.jsx)(z,{children:c.map((function(n,t){return Object(r.jsx)("li",{children:n},t)}))}),Object(r.jsxs)(S,{children:[i.slice(0,140),"..."]})]})]})};function E(){var n=Object(b.a)(["\n  display : flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding : 50px;\n  padding-top : 70px;\n  width: 80%;\n"]);return E=function(){return n},n}function F(){var n=Object(b.a)(["\n  width : 100%;\n  height : 100%;\n  display : flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 300;  \n"]);return F=function(){return n},n}function I(){var n=Object(b.a)(["\n  height : 100%;\n  display: flex;\n  justify-content: center;\n"]);return I=function(){return n},n}function J(){var n=Object(b.a)(['\n  body {\n    margin : 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    background-color : #eff3f7;\n    height : 100%;\n  }\n']);return J=function(){return n},n}var M=Object(f.a)(J()),N=f.b.section(I()),U=f.b.div(F()),C=f.b.div(E());var H=function(){var n=Object(i.useState)(!0),t=Object(x.a)(n,2),e=t[0],a=t[1],c=Object(i.useState)([]),o=Object(x.a)(c,2),s=o[0],b=o[1];Object(i.useEffect)((function(){d()}),[]);var d=function(){var n=Object(p.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=n.sent,b(t.data.data.movies),a(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{}),Object(r.jsx)(N,{children:e?Object(r.jsx)(U,{children:Object(r.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(r.jsx)(C,{children:s.map((function(n){return Object(r.jsx)(B,{id:n.id,year:n.year,title:n.title,summary:n.summary,poster:n.medium_cover_image,genres:n.genres},n.id)}))})})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f81ba553.chunk.js.map