(this.webpackJsonpsad=this.webpackJsonpsad||[]).push([[0],{170:function(t,e,c){},171:function(t,e,c){"use strict";c.r(e);var n,r,a=c(0),s=c(28),i=c.n(s),u=c(3),o=c(18),l=c.n(o),d=c(30),j=c(16),b=c(4),m=c(31),h=c.n(m),p=c(70),f=c.n(p),O=c(1),x=function(t){var e=t.content,c=t.children;return Object(O.jsxs)("div",{className:"badge",children:[c,Object(O.jsx)("span",{className:"badge-content",children:e})]})},v=c.p+"static/media/shopping-basket.7340c518.svg",g=Object.freeze({product:"/",cart:"/cart"}),_=function(){var t=Object(u.c)((function(t){return t.cart.reduce((function(t,e){return t+e.counter}),0)}));return Object(O.jsx)("header",{className:"shop-header",children:Object(O.jsxs)("div",{className:"shop-header__wrapper container-95",children:[Object(O.jsx)("p",{className:"shop-header__text",children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(O.jsx)(j.b,{to:g.cart,children:Object(O.jsx)(x,{content:t,children:Object(O.jsx)("img",{src:v,width:"40",height:"40",alt:"Cart"})})})]})})},N=c(17),y="https://murmuring-tor-81614.herokuapp.com/api",k=function(t){return Array.isArray(t)?t.reduce((function(t,e){return t+e}),y):y+t},C=function(t){var e=y.lastIndexOf("/");return y.slice(0,e)+t},w=Object(N.b)({name:"product",initialState:{loading:!1,error:{},products:[]},reducers:{fetchProductRequested:function(t){t.loading=!0},fetchProductSuccess:function(t,e){t.loading=!1,t.products=e.payload},fetchProductFailure:function(t,e){t.error=e.payload,t.error=!1}}}),I=w.actions,S=c(12),A=c(46),P=c.n(A),F=function(t,e){return t.findIndex((function(t){return t.name===e.name}))},R=function(t,e){return t.filter((function(t){return t.name!==e.name}))},J=Object(N.b)({name:"cart",initialState:[],reducers:{addItem:function(t,e){var c=F(t,e.payload);c>=0?t[c].counter++:t.push(Object(S.a)(Object(S.a)({},e.payload),{},{counter:1}))},removeItem:function(t,e){var c=F(t,e.payload);if(t[c].counter<=1)return R(t,e.payload);t[c].counter--},setCart:function(t,e){return e.payload},updateItem:function(t,e){t[F(t,e.payload)]=e.payload},removeItemFully:function(t,e){return R(t,e.payload)},clearAllCart:function(){return[]}}}),E=J.actions,$=c.p+"static/media/add.c6f2e133.svg",q=c.p+"static/media/minus.7aa3be90.svg",B=function(t){var e=t.handleClickAdd,c=t.handleClickRemove,n=t.value,r=t.className,a=t.disabled,s=t.handleChange;return Object(O.jsxs)("div",{className:"amount ".concat(r),children:[Object(O.jsx)("button",{type:"button",onClick:c,className:"amount-button",children:Object(O.jsx)("img",{src:q,width:"20",height:"20",alt:"Plus",className:"amount-image"})}),Object(O.jsx)("input",{type:"text",className:"amount-value",disabled:a,value:n,min:1,maxLength:3,onChange:function(t){s(t.target.value)}}),Object(O.jsx)("button",{type:"button",onClick:e,className:"amount-button",children:Object(O.jsx)("img",{src:$,width:"20",height:"20",alt:"Minus",className:"amount-image"})})]})},L=function(t){var e=t.product,c=Object(u.c)((function(t){return t.cart.find((function(t){return e.name===t.name}))})),n=Object(u.b)(),r=function(){n(E.addItem(e))};return Object(O.jsxs)("li",{className:"product__item",children:[Object(O.jsx)("img",{src:C(e.image),alt:e.name,className:"product__item-img",width:"200",height:"200"}),Object(O.jsx)("p",{className:"product__item-name",children:e.name}),Object(O.jsxs)("p",{className:"product__item-price",children:[e.price," $"]}),c?Object(O.jsx)(B,{value:c.counter,handleClickAdd:r,handleClickRemove:function(){n(E.removeItem(e))},disabled:!0}):Object(O.jsx)("button",{className:"product__item-button",type:"button",onClick:r,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})},M=(n=function(t){var e=t.products;return Object(O.jsx)("ul",{className:"product__list",children:e.map((function(t){return Object(O.jsx)(L,{product:t},t.name)}))})},r="product.loading",function(t){return Object(u.c)((function(t){return P()(t,r)}))?Object(O.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(O.jsx)(n,Object(S.a)({},t))}),z=Object(a.createContext)([]),T=function(){return Object(a.useContext)(z)},D=function(){var t=T().dealers,e=Object(u.c)((function(t){return t.product})),c=Object(u.b)();return Object(a.useEffect)((function(){c(function(t){return function(){var e=Object(d.a)(l.a.mark((function e(c){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(I.fetchProductRequested()),n=h()(t)?k("/goods"):k(["/goods","/?dealers=".concat(t.join(","))]),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:a=e.sent,c(I.fetchProductSuccess(a)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),c(I.fetchProductFailure(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()}(t))}),[]),Object(O.jsx)("section",{className:"product container-95",children:Object(O.jsx)(M,{products:e.products})})},G=function(t){var e=t.className,c=Object(b.f)(),n=["button-back",e];return Object(O.jsx)("button",{type:"button",className:n.join(" "),onClick:c.goBack,children:"\u041d\u0430\u0437\u0430\u0434"})},H=function(){var t=Object(u.b)(),e=Object(b.f)(),c=Object(u.c)((function(t){return t.cart.reduce((function(t,e){return t+e.counter*e.price}),0)}));return Object(O.jsxs)("div",{className:"cart__info",children:[Object(O.jsxs)("p",{className:"cart__info-price",children:["\u041a \u043e\u043f\u043b\u0430\u0442\u0435 :",Object(O.jsxs)("span",{children:[c.toFixed(2),"$"]})]}),Object(O.jsx)("button",{type:"button",className:"cart__info-button",onClick:function(){setTimeout((function(){t(E.clearAllCart()),e.push(g.product)}),500)},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})},K=function(t){var e=t.height,c=void 0===e?30:e,n=t.width,r=void 0===n?30:n,a=t.className,s=t.handleClick;return Object(O.jsx)("button",{type:"button",className:"button-close ".concat(a),onClick:s,children:Object(O.jsx)("img",{height:c,width:r,src:$,alt:"Remove"})})},Q=function(t){var e=t.product,c=Object(u.b)();return Object(O.jsxs)("li",{className:"cart__list-item",children:[Object(O.jsxs)("div",{className:"cart__item-left",children:[Object(O.jsx)("img",{src:C(e.image),alt:e.name,className:"cart__item-img",width:"75",height:"75"}),Object(O.jsxs)("p",{className:"cart__item-name",children:[" ",e.name]})]}),Object(O.jsxs)("div",{className:"cart__item-right",children:[Object(O.jsx)(B,{className:"h-50",value:e.counter,handleClickAdd:function(){c(E.addItem(e))},handleClickRemove:function(){c(E.removeItem(e))},handleChange:function(t){t<1e3&&c(E.updateItem(Object(S.a)(Object(S.a)({},e),{},{counter:+t})))}}),Object(O.jsxs)("p",{className:"cart__item-price",children:[e.price," $"]}),Object(O.jsx)("div",{children:Object(O.jsx)(K,{className:"cart__item-button-close",handleClick:function(){c(E.removeItemFully(e))}})})]})]})},U=function(){var t=Object(u.c)((function(t){return t.cart}));return Object(O.jsx)("ul",{className:"cart__list",children:t.map((function(t){return Object(O.jsx)(Q,{product:t},t.name)}))})},V=function(){var t=Object(u.c)((function(t){return t.cart}));return Object(O.jsxs)("section",{className:"cart container-95",children:[Object(O.jsx)(G,{}),Object(O.jsx)("h2",{className:"cart__title",children:"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),t.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(H,{})]}):Object(O.jsx)("p",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})]})};var W=function(){var t=Object(u.b)(),e=T().dealers,c=function(){var c=Object(d.a)(l.a.mark((function c(){var n,r,a,s;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!((n=JSON.parse(localStorage.getItem("cart")))&&n.length>0)){c.next=13;break}if(h()(e)){c.next=12;break}return c.next=5,fetch(k(["/goods","/?dealers=".concat(e.join(","))]));case 5:return r=c.sent,c.next=8,r.json();case 8:return a=c.sent,s=f()(n,a,"name"),t(E.setCart(s)),c.abrupt("return");case 12:t(E.setCart(n));case 13:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(a.useLayoutEffect)((function(){c()}),[]),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(_,{}),Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:g.product,component:D,exact:!0}),Object(O.jsx)(b.a,{path:g.cart,component:V,exact:!0})]})]})},X=c(9),Y=c(21),Z=Object(N.a)({reducer:Object(X.b)({product:w.reducer,cart:J.reducer}),middleware:[Y.a,function(t){return function(e){return function(c){var n=e(c);return n.type.includes("cart/")&&localStorage.setItem("cart",JSON.stringify(t.getState().cart)),n}}}]});c(170);window.app={startApp:function(t){i.a.render(Object(O.jsx)(z.Provider,{value:t,children:Object(O.jsx)(a.StrictMode,{children:Object(O.jsx)(u.a,{store:Z,children:Object(O.jsx)(W,{})})})}),document.getElementById("root"))}}}},[[171,1,2]]]);
//# sourceMappingURL=main.9a6b8405.chunk.js.map