(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(11),s=a.n(c),i=a(2),l=a(3),o=a(5),j=a(4),u=(a(16),a(0)),d=function(){return Object(u.jsxs)("header",{className:"app__header",children:[Object(u.jsx)("h1",{className:"app__title",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(u.jsx)("nav",{className:"app__menu",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=(a(18),a(6)),m=a(8),b=Object(l.a)((function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=141b0bea7dbf20cf498a499e7ecd1a09",this._BaseOffset=210,this.getResource=function(){var e=Object(m.a)(Object(h.a)().mark((function e(t){var a;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(m.a)(Object(h.a)().mark((function e(){var a,r,n=arguments;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._BaseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(m.a)(Object(h.a)().mark((function e(a){var r;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,hompage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}})),f=b,O=a.p+"static/media/mjolnir.61f31e18.png",p=function(){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(u.jsx)("g",{transform:"translate(80,50)",children:Object(u.jsx)("g",{transform:"rotate(0)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(45)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(u.jsx)("g",{transform:"translate(50,80)",children:Object(u.jsx)("g",{transform:"rotate(90)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(u.jsx)("g",{transform:"rotate(135)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(u.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(u.jsx)("g",{transform:"rotate(180)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(u.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(u.jsx)("g",{transform:"rotate(225)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(u.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(u.jsx)("g",{transform:"rotate(270)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(u.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(u.jsx)("g",{transform:"rotate(315)",children:Object(u.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(u.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},x=a.p+"static/media/error.42292aa1.gif",v=function(){return Object(u.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:x,alt:"Error"})},g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={char:{},loading:!0,error:!1},r.marvelService=new f,r.onCharLoaded=function(e){r.setState({char:e,loading:!1})},r.onCharLoading=function(){r.setState({loading:!0})},r.onError=function(){r.setState({loading:!1,error:!0})},r.upDateChar=function(){var e=Math.floor(400*Math.random()+1011e3);r.onCharLoading(),r.marvelService.getCharacter(e).then(r.onCharLoaded).catch(r.onError)},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.upDateChar()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=r?Object(u.jsx)(v,{}):null,c=a?Object(u.jsx)(p,{}):null,s=a||r?null:Object(u.jsx)(_,{char:t});return Object(u.jsxs)("div",{className:"randomchar",children:[n,c,s,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",children:Object(u.jsx)("div",{className:"inner",onClick:this.upDateChar,children:"try it"})}),Object(u.jsx)("img",{src:O,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),_=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.hompage,s=t.wiki;return Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:a}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,N=a(10),C=(a(19),function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:210,charEnded:!1},e.marvelService=new f,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){e.setState((function(e){var a=e.offset,r=e.charList;return{charList:[].concat(Object(N.a)(r),Object(N.a)(t)),loading:!1,newItemLoading:!1,offset:a+9}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.itemRef=[],e.myRef=function(t){e.itemRef.push(t)},e.getFocusClass=function(t){e.itemRef.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRef[t].classList.add("char__item_selected"),e.itemRef[t].focus()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,a=e.map((function(e,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(r={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",tabIndex:0,ref:t.myRef,onClick:function(){t.props.onCharSelected(e.id),t.getFocusClass(a)},children:[Object(u.jsx)("img",{src:e.thumbnail,alt:e.name,style:r}),Object(u.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.charList,r=t.loading,n=t.error,c=t.offset,s=t.newItemLoading,i=this.renderItems(a),l=n?Object(u.jsx)(v,{}):null,o=r?Object(u.jsx)(p,{}):null,j=r||n?null:i;return Object(u.jsxs)("div",{className:"char__list",children:[l,o,j,Object(u.jsx)("button",{className:"button button__main button__long",disabled:s,onClick:function(){return e.onRequest(c)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),k=C,w=(a(20),a(21),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),L=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(u.jsx)(w,{}),c=r?Object(u.jsx)(v,{}):null,s=a?Object(u.jsx)(p,{}):null,i=a||r||!t?null:Object(u.jsx)(T,{char:t});return Object(u.jsxs)("div",{className:"char__info",children:[n,c,s,i]})}}]),a}(r.Component),T=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:n,alt:a}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:a}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:c,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:r}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"there is no comics with this character",i.map((function(e,t){if(!(t>9))return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},S=L,R=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(u.jsx)(v,{}):this.props.children}}]),a}(r.Component),E=I,D=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(d,{}),Object(u.jsxs)("main",{children:[Object(u.jsx)(E,{children:Object(u.jsx)(y,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsx)(E,{children:Object(u.jsx)(k,{onCharSelected:this.onCharSelected})}),Object(u.jsx)(E,{children:Object(u.jsx)(S,{charId:this.state.selectedChar})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:R,alt:"vision"})]})]})}}]),a}(r.Component),M=D;a(22);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.3dcd6a4e.chunk.js.map