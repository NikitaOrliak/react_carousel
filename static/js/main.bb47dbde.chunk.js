(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(6),i=n(8),s=n(9),l=n(7),u=n(1),o=n.n(u),m=(n(14),n(3)),b=(n(15),n(0)),j=function(e){var t=e.images,n=Object(u.useState)(0),a=Object(m.a)(n,2),r=a[0],c=a[1],i=Object(u.useState)(130),s=Object(m.a)(i,2),l=s[0],o=s[1],j=Object(u.useState)(3),d=Object(m.a)(j,2),g=d[0],p=d[1],h=Object(u.useState)(3),O=Object(m.a)(h,2),x=O[0],f=O[1],v=Object(u.useState)(1e3),C=Object(m.a)(v,2),_=C[0],y=C[1],N=100-100/t.length*g,I=100/t.length*x;var S={width:"".concat(l,"px"),height:"".concat(l,"px")},w={width:"".concat(g*l,"px")},k={transform:"translateX(-".concat(r,"%)"),width:"".concat(l*g*(t.length/g),"px"),transition:"transform ".concat(_,"ms")};return Object(b.jsxs)("div",{className:"Carousel",children:[Object(b.jsx)("div",{className:"Carousel__container",style:w,children:Object(b.jsx)("ul",{className:"Carousel__list",style:k,children:t.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:e,alt:String(t+1),style:S})},e)}))})}),Object(b.jsx)("button",{type:"button",onClick:function(){c((function(e){return e-I<0?0:e-I}))},disabled:r<=0,children:"Prev"}),Object(b.jsx)("button",{type:"button",onClick:function(){c((function(e){return e+I>N?N:e+I}))},disabled:r>=N,"data-cy":"next",children:"Next"}),Object(b.jsxs)("div",{className:"Carousel__params",children:[Object(b.jsx)("label",{htmlFor:"itemId",className:"Carousel__params--label",children:"Width of image in px:"}),Object(b.jsx)("input",{type:"number",id:"itemId",value:l,onChange:function(e){return o(Number(e.target.value))}}),Object(b.jsx)("label",{htmlFor:"frameId",className:"Carousel__params--label",children:"Size of frame:"}),Object(b.jsx)("input",{type:"number",id:"frameId",value:g,min:1,max:t.length,onChange:function(e){return p(Number(e.target.value))}}),Object(b.jsx)("label",{htmlFor:"stepId",className:"Carousel__params--label",children:"Step of scroll"}),Object(b.jsx)("input",{type:"number",id:"stepId",value:x,min:1,max:t.length,onChange:function(e){return f(Number(e.target.value))}}),Object(b.jsx)("label",{htmlFor:"durationAnimationId",className:"Carousel__params--label",children:"Duration of animation in ms"}),Object(b.jsx)("input",{type:"number",id:"durationAnimationId",value:_,min:0,onChange:function(e){return y(Number(e.target.value))}})]})]})},d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.images;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(b.jsx)(j,{images:e})]})}}]),n}(o.a.Component),g=d;r.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bb47dbde.chunk.js.map