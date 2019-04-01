(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(87)},36:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,l,s,u,p,m,h,f,b,g,O,y,j,k,v,d,w,E,x,P=n(0),I=n.n(P),N=n(11),z=n.n(N),C=(n(36),n(5)),A=n(6),T=n(8),F=n(7),S=n(9),B=n(4),D=n(17),H=Object(B.b)("pokemons")(a=Object(B.c)(a=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(T.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).changeType=function(e){(0,n.props.pokemons.setType)(e.currentTarget.value)},n.onSearch=function(e){(0,n.props.pokemons.setHighlightPattern)(e.currentTarget.value)},n}return Object(S.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e,t=this.props.pokemons,n=t.types,a=t.category,r=t.highlightPattern;return I.a.createElement("div",{className:"input-group",style:{flex:1,flexWrap:"wrap",flexDirection:"row"}},I.a.createElement("select",{className:"form-control",onChange:this.changeType,defaultValue:a,style:{flex:1,width:"auto"}},I.a.createElement("option",{value:""},"All"),n.map(function(e){return I.a.createElement("option",{key:e.url,value:e.url},e.name)})),I.a.createElement("input",{type:"text",className:"form-control",placeholder:"type a name to highlight pokemons",onChange:this.onSearch,value:r,style:(e={flexGrow:1,flexBasis:"fill",flex:1},Object(D.a)(e,"flex",1),Object(D.a)(e,"width","auto"),e)}),I.a.createElement("span",{style:{flex:1}}))}}]),t}(P.Component))||a)||a,W=n(29),_=n.n(W),J=n(30),L=n.n(J),G=Object(B.b)("pokemons")(r=Object(B.c)(r=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(T.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).changeOnPage=function(e){(0,n.props.pokemons.setItemsOnPage)(parseInt(e.currentTarget.value))},n.onNext=function(e){e.preventDefault(),(0,n.props.pokemons.nextPage)()},n.onBack=function(e){e.preventDefault(),(0,n.props.pokemons.previousPage)()},n}return Object(S.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.pokemons,t=e.offset,n=e.itemsOnPage,a=e.showNext;return I.a.createElement("div",null,I.a.createElement("div",{className:"form-group"},I.a.createElement("label",{htmlFor:"onpage"},"On page:"),I.a.createElement("select",{htmlFor:"id",className:"form-control",name:"onpage",value:n,onChange:this.changeOnPage},I.a.createElement("option",{value:"10"},"10"),I.a.createElement("option",{value:"20"},"20"),I.a.createElement("option",{value:"50"},"50"))),I.a.createElement("nav",{"aria-label":"..."},I.a.createElement("ul",{className:"pager"},t>0&&I.a.createElement("li",{className:"previous",onClick:null},I.a.createElement("a",{onClick:this.onBack,href:"#"},"Previous")),a&&I.a.createElement("li",{className:"next",onClick:null},I.a.createElement("a",{onClick:this.onNext,href:"#"},"Next")))))}}]),t}(P.Component))||r)||r,M=Object(B.b)("pokemons")(o=Object(B.c)(o=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(T.a)(this,Object(F.a)(t).call(this,e))).onInfo=function(e){n.props.pokemons.changePockemonInoState(e.currentTarget.getAttribute("id"))},n}return Object(S.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.pokemons.init()}},{key:"render",value:function(){var e=this,t=this.props.pokemons,n=(t.offset,t.pokemonsOnPage),a=t.highlightPattern,r=t.infoOpenedForId,o=t.pokemonsInfo,i=[];return n.forEach(function(t,n){var c=Object.assign({},t),l=parseInt(c.url.replace(/\/$/,"").split("/").pop());c.id=l,c.avatar="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(l,".png");var s=!a.length||c.name.toLowerCase().startsWith(a),u=o.get(l),p={};s||(p.opacity=.1),i.push(I.a.createElement("tr",{key:c.name,style:Object.assign({height:"100px",verticalAlign:"middle"},p)},I.a.createElement("td",null,c.id),I.a.createElement("td",{style:{width:"100px",minHeight:"96px"}},I.a.createElement(L.a,{src:c.avatar,style:{verticalAlign:"middle",height:"96px"}})),I.a.createElement("td",null,c.name),I.a.createElement("td",null,I.a.createElement("button",{id:l,onClick:e.onInfo,className:"no_button"},I.a.createElement("i",{className:"material-icons",style:r==c.id?{color:"green"}:{}},"\ue88f"))))),i.push(I.a.createElement("tr",{key:"".concat(c.name,"_info"),style:Object.assign({verticalAlign:"middle",borderBottom:"solid 1px rgba(21,21,21,0.15)"},p)},I.a.createElement("td",{colSpan:"4"},r==c.id&&I.a.createElement("div",null,void 0===u&&I.a.createElement("div",{style:{width:"70px",height:"70px",margin:"0 auto"}},I.a.createElement(_.a,null)),I.a.createElement("div",{className:"row",style:{maxWidth:"560px",maxHeight:"380px",overflow:"auto",marginBottom:"10px"}},I.a.createElement("pre",null,JSON.stringify(u,null,4)))))))}),I.a.createElement("div",{style:{width:"100%"}},I.a.createElement(G,null),i.length>0?I.a.createElement("table",{style:{width:"100%",maxWidth:"560px",borderCollapse:"collapse"}},I.a.createElement("thead",null,I.a.createElement("tr",null,I.a.createElement("th",null,"id"),I.a.createElement("th",null,"Avatar"),I.a.createElement("th",null,"Name"),I.a.createElement("th",null))),I.a.createElement("tbody",null,i)):I.a.createElement("h5",{style:{textAlign:"center"}},"No pokemons to show"),I.a.createElement(G,null))}}]),t}(P.Component))||o)||o,V=Object(B.b)("pokemons")(i=function(e){function t(){return Object(C.a)(this,t),Object(T.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return I.a.createElement("div",null,I.a.createElement("h1",null,"All Pokemons"),I.a.createElement("section",{className:"main_container"},I.a.createElement("div",{className:"wrapper",style:{maxWidth:"580px",margin:"0 auto"}},I.a.createElement("main",{className:"main_content"},I.a.createElement(H,null),I.a.createElement(M,null)))))}}]),t}(P.Component))||i,$=n(12),q=n.n($),K=n(14),Q=n(3),R=n(2),U=(n(86),n(1)),X="http://pokeapi.co/api/v2",Y=new(c=function(){function e(){var t=this;Object(C.a)(this,e),Object(Q.a)(this,"highlightPattern",l,this),Object(Q.a)(this,"count",s,this),Object(Q.a)(this,"busy",u,this),this.previous=null,this.next="".concat(X,"/pokemon/"),Object(Q.a)(this,"offset",p,this),Object(Q.a)(this,"itemsOnPage",m,this),Object(Q.a)(this,"pokemons",h,this),Object(Q.a)(this,"pokemonsInfo",f,this),Object(Q.a)(this,"types",b,this),Object(Q.a)(this,"category",g,this),Object(Q.a)(this,"itemsOnPage",O,this),Object(Q.a)(this,"infoOpenedForId",y,this),Object(Q.a)(this,"init",j,this),Object(Q.a)(this,"setType",k,this),Object(Q.a)(this,"nextPage",v,this),Object(Q.a)(this,"previousPage",d,this),Object(Q.a)(this,"setItemsOnPage",w,this),Object(Q.a)(this,"setHighlightPattern",E,this),Object(Q.a)(this,"changePockemonInoState",x,this),this.getInfo=function(e){return fetch("".concat(X,"/pokemon/").concat(e,"/")).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).catch(function(e){console.error(e)})},this.getTypes=function(){var e=t;return fetch("".concat(X,"/type/")).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(t){t.results&&(e.types=t.results)}).catch(function(e){console.error(e)})},this.getPockemons=Object(K.a)(q.a.mark(function e(){var n,a,r,o,i=arguments;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"".concat(X,"/pokemon/"),a=i.length>1&&void 0!==i[1]?i[1]:null,(r=t).busy=!0,o=a||{},null,e.abrupt("return",(r.category?fetch(r.category).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return r.pokemons=e.pokemon.map(function(e){return e.pokemon}),r.count=e.pokemon.length,r.pokemons}):fetch(n,o).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return r.previous=e.previous,r.next=e.next,r.count=e.count,r.pokemons=r.pokemons.concat(e.results),r.pokemons})).then(function(){return r.busy=!1}).catch(function(e){r.busy=!1}));case 7:case"end":return e.stop()}},e)}))}return Object(A.a)(e,[{key:"showNext",get:function(){return this.offset+this.itemsOnPage<this.count}},{key:"pokemonsOnPage",get:function(){return this.offset>this.count?[]:this.pokemons.slice(this.offset,this.offset+this.itemsOnPage)}}]),e}(),l=Object(R.a)(c.prototype,"highlightPattern",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(R.a)(c.prototype,"count",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=Object(R.a)(c.prototype,"busy",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=Object(R.a)(c.prototype,"offset",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=Object(R.a)(c.prototype,"itemsOnPage",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),h=Object(R.a)(c.prototype,"pokemons",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=Object(R.a)(c.prototype,"pokemonsInfo",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new U.b}}),Object(R.a)(c.prototype,"showNext",[U.f],Object.getOwnPropertyDescriptor(c.prototype,"showNext"),c.prototype),Object(R.a)(c.prototype,"pokemonsOnPage",[U.f],Object.getOwnPropertyDescriptor(c.prototype,"pokemonsOnPage"),c.prototype),b=Object(R.a)(c.prototype,"types",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=Object(R.a)(c.prototype,"category",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=Object(R.a)(c.prototype,"itemsOnPage",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),y=Object(R.a)(c.prototype,"infoOpenedForId",[U.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=Object(R.a)(c.prototype,"init",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.populated||(e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,Promise.all([e.getTypes(),e.getPockemons()]).then(function(){return e.populated=!0}))}}}),k=Object(R.a)(c.prototype,"setType",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,e.getPockemons()}}}),v=Object(R.a)(c.prototype,"nextPage",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(K.a)(q.a.mark(function t(){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.pokemons.length<=e.offset+e.itemsOnPage&&e.next)){t.next=8;break}return t.prev=1,t.next=4,e.getPockemons(e.next);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:e.offset+e.itemsOnPage>=e.count?e.offset=e.count:e.offset=e.offset+e.itemsOnPage;case 9:case"end":return t.stop()}},t,null,[[1,6]])}))}}),d=Object(R.a)(c.prototype,"previousPage",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=e.offset-e.itemsOnPage;e.offset=t>0?t:0}}}),w=Object(R.a)(c.prototype,"setItemsOnPage",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.itemsOnPage=t}}}),E=Object(R.a)(c.prototype,"setHighlightPattern",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.highlightPattern=t.toLowerCase()}}}),x=Object(R.a)(c.prototype,"changePockemonInoState",[U.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(K.a)(q.a.mark(function t(n){var a,r;return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e,r=parseInt(n),a.infoOpenedForId!==r){t.next=6;break}a.infoOpenedForId=null,t.next=21;break;case 6:if(a.infoOpenedForId=r,!a.pokemonsInfo.has(r)){t.next=9;break}return t.abrupt("return");case 9:return t.prev=9,t.t0=a.pokemonsInfo,t.t1=r,t.next=14,a.getInfo(r);case 14:t.t2=t.sent,t.t0.set.call(t.t0,t.t1,t.t2),t.next=21;break;case 18:t.prev=18,t.t3=t.catch(9),console.log(t.t3);case 21:case"end":return t.stop()}},t,null,[[9,18]])}));return function(e){return t.apply(this,arguments)}}()}}),c),Z=function(e){function t(){return Object(C.a)(this,t),Object(T.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return I.a.createElement(B.a,{pokemons:Y},I.a.createElement(V,null))}}]),t}(I.a.Component);z.a.render(I.a.createElement(Z,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.254c1783.chunk.js.map