(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(9),c=a(10),s=a(12),l=a(11),m=a(1),o=a.n(m),u=(a(17),a(3)),j=a(7),b=a(5),d=(a(18),a(0)),h=function(e){var t=e.images,a=e.frameSize,n=e.itemWidth,i=e.animationDuration,r=e.translate,c={width:"".concat(n,"px"),height:"".concat(n,"px")},s={width:"".concat(a*n,"px")},l={transform:"translateX(-".concat(r,"%)"),width:"".concat(n*a*(t.length/a),"px"),transition:"transform ".concat(i,"ms")};return Object(d.jsx)("div",{className:"Carousel",children:Object(d.jsx)("div",{className:"Carousel__container",style:s,children:Object(d.jsx)("ul",{className:"Carousel__list",style:l,children:t.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:e,alt:String(t+1),style:c})},e)}))})})})},p=function(e){var t=e.images,a=Object(m.useState)(0),n=Object(b.a)(a,2),i=n[0],r=n[1],c=Object(m.useState)(!1),s=Object(b.a)(c,2),l=s[0],o=s[1],p=Object(m.useState)({itemWidth:130,frameSize:3,step:3,animationDuration:1e3}),g=Object(b.a)(p,2),O=g[0],f=g[1],x=100-100/t.length*O.frameSize,v=100/t.length*O.step,y=i<=0,_=i>=x;function C(e){var t=e.target,a=t.name,n=t.value;f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,Number(n)))}))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{images:t,frameSize:O.frameSize,itemWidth:O.itemWidth,animationDuration:O.animationDuration,translate:i}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",onClick:function(){r((function(e){return 0===e?x:e-v<0?0:e-v}))},disabled:y&&!l||y&&_,children:"Prev"}),Object(d.jsx)("button",{type:"button",onClick:function(){r((function(e){return e===x?0:e+v>x?x:e+v}))},disabled:_&&!l||_&&y,"data-cy":"next",children:"Next"}),Object(d.jsxs)("div",{className:"Carousel__params",children:[Object(d.jsx)("label",{htmlFor:"itemId",className:"Carousel__params--label",children:"Width of image in px:"}),Object(d.jsx)("input",{type:"number",id:"itemId",value:O.itemWidth,name:"itemWidth",onChange:C}),Object(d.jsx)("label",{htmlFor:"frameId",className:"Carousel__params--label",children:"Size of frame:"}),Object(d.jsx)("input",{type:"number",id:"frameId",value:O.frameSize,min:1,max:t.length,name:"frameSize",onChange:C}),Object(d.jsx)("label",{htmlFor:"stepId",className:"Carousel__params--label",children:"Step of scroll:"}),Object(d.jsx)("input",{type:"number",id:"stepId",value:O.step,min:1,max:t.length,name:"step",onChange:C}),Object(d.jsx)("label",{htmlFor:"durationAnimationId",className:"Carousel__params--label",children:"Duration of animation in ms:"}),Object(d.jsx)("input",{type:"number",id:"durationAnimationId",value:O.animationDuration,min:0,name:"animationDuration",onChange:C}),Object(d.jsxs)("div",{className:"Carousel__params--infinity",children:[Object(d.jsx)("label",{htmlFor:"infinityId",className:"Carousel__params--label",children:"Infinity mode:"}),Object(d.jsx)("input",{type:"checkbox",id:"infinityId",checked:l,onClick:function(){o((function(e){return!e}))}})]})]})]})]})},g=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.images;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",e.length," images"]}),Object(d.jsx)(p,{images:e})]})}}]),a}(o.a.Component),O=g;i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.384fa26a.chunk.js.map