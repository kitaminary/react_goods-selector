(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(7),r=c(5),a=c(6),i=c(9),l=c(8),d=c(3),u=c.n(d),h=c(1),j=c.n(h),g=(c(14),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic","Beer","Vodka"],m=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={currentGoods:["Jam"],counter:1},e.clear=function(){e.setState({currentGoods:[]}),e.setState({counter:0})},e.checkGoods=function(t){return e.state.currentGoods.includes(t)},e.selectAndRemove=function(t){var c=Object(s.a)(e.state.currentGoods);return c.includes(t)?(c.splice(c.indexOf(t),1),e.state.counter-=1):(c.push(t),e.state.counter+=1),e.setState({currentGoods:c})},e.printGoods=function(){var t=e.state.currentGoods,c=t.slice(-1,t.length);return t.length>1?"".concat(t.slice(0,t.length-1).join(", ")," and ").concat(c," are selected."):"".concat(t," is selected.")},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.currentGoods,n=t.counter;return Object(g.jsxs)("div",{className:"good content is-medium",itemID:"top",children:[Object(g.jsx)("h2",{className:"good__title",children:"Selected good: ".concat(n)}),Object(g.jsx)("h3",{className:"good__subtitle",children:0===c.length?Object(g.jsx)(g.Fragment,{children:"No goods selected"}):Object(g.jsx)(g.Fragment,{children:this.printGoods()})}),Object(g.jsxs)("ul",{className:"good__list",children:[b.map((function(t){return Object(g.jsxs)("li",{className:"good__item good__".concat(t.split(" ").join("-").toLowerCase()),children:[t,Object(g.jsx)("button",{type:"button",onClick:function(){e.selectAndRemove(t)},className:u()("good__buttons is-rounded",e.checkGoods(t)?"button is-danger":"button is-primary"),children:e.checkGoods(t)?Object(g.jsx)(g.Fragment,{children:"Remove"}):Object(g.jsx)(g.Fragment,{children:"Select"})})]},t)})),Object(g.jsx)("a",{href:"#top",onClick:this.clear,className:u()("good__clear button is-danger",{"is-invisible":0===c.length}),children:"Clear"})]})]})}}]),c}(j.a.Component),p=m;o.a.render(Object(g.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e1706e7d.chunk.js.map