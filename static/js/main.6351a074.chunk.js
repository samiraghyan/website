(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(87)},35:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,l,s,u,p,m,h,f,b,g,O,y,j,k,v,d,w,x,E,P=n(0),I=n.n(P),N=n(11),z=n.n(N),C=(n(35),n(5)),T=n(6),A=n(8),F=n(7),D=n(9),B=n(4),H=n(17),S=Object(B.b)("pokemons")(a=Object(B.c)(a=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(A.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).changeType=function(e){(0,n.props.pokemons.setType)(e.currentTarget.value)},n.onSearch=function(e){(0,n.props.pokemons.setHighlightPattern)(e.currentTarget.value)},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e,t=this.props.pokemons,n=t.types,a=t.category,r=t.highlightPattern;return I.a.createElement("div",{className:"input-group",style:{flex:1,flexWrap:"wrap",flexDirection:"row"}},I.a.createElement("select",{className:"form-control",onChange:this.changeType,defaultValue:a,style:{flex:1,width:"auto"}},I.a.createElement("option",{value:""},"All"),n.map(function(e){return I.a.createElement("option",{key:e.url,value:e.url},e.name)})),I.a.createElement("input",{type:"text",className:"form-control",placeholder:"type a name to highlight pokemons",onChange:this.onSearch,value:r,style:(e={flexGrow:1,flexBasis:"fill",flex:1},Object(H.a)(e,"flex",1),Object(H.a)(e,"width","auto"),e)}),I.a.createElement("span",{style:{flex:1}}))}}]),t}(P.Component))||a)||a,W=(n(37),n(29)),J=n.n(W),L=Object(B.b)("pokemons")(r=Object(B.c)(r=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(A.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).changeOnPage=function(e){(0,n.props.pokemons.setItemsOnPage)(parseInt(e.currentTarget.value))},n.onNext=function(e){e.preventDefault(),(0,n.props.pokemons.nextPage)()},n.onBack=function(e){e.preventDefault(),(0,n.props.pokemons.previousPage)()},n}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props.pokemons,t=e.offset,n=e.itemsOnPage,a=e.showNext;return I.a.createElement("div",null,I.a.createElement("div",{className:"form-group"},I.a.createElement("label",{htmlFor:"onpage"},"On page:"),I.a.createElement("select",{htmlFor:"id",className:"form-control",name:"onpage",value:n,onChange:this.changeOnPage},I.a.createElement("option",{value:"10"},"10"),I.a.createElement("option",{value:"20"},"20"),I.a.createElement("option",{value:"50"},"50"))),I.a.createElement("nav",{"aria-label":"..."},I.a.createElement("ul",{className:"pager"},t>0&&I.a.createElement("li",{className:"previous",onClick:null},I.a.createElement("a",{onClick:this.onBack,href:"#"},"Previous")),a&&I.a.createElement("li",{className:"next",onClick:null},I.a.createElement("a",{onClick:this.onNext,href:"#"},"Next")))))}}]),t}(P.Component))||r)||r,_=Object(B.b)("pokemons")(o=Object(B.c)(o=function(e){function t(e){return Object(C.a)(this,t),Object(A.a)(this,Object(F.a)(t).call(this,e))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.pokemons.init()}},{key:"render",value:function(){var e=this.props.pokemons,t=(e.offset,e.pokemonsOnPage),n=e.highlightPattern,a=e.pokemonsInfo,r=[];return t.forEach(function(e,t){console.log("aaa",e);var o=Object.assign({},e),i=parseInt(o.url.replace(/\/$/,"").split("/").pop());o.id=i,o.avatar="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(i,".png");var c=!n.length||o.name.toLowerCase().startsWith(n),l=(a.get(i),{});c||(l.opacity=.1),r.push(I.a.createElement("tr",{key:o.name,style:Object.assign({height:"100px",verticalAlign:"middle"},l)},I.a.createElement("td",null,o.id),I.a.createElement("td",{style:{width:"100px",minHeight:"96px"}},I.a.createElement(J.a,{src:o.avatar,style:{verticalAlign:"middle",height:"96px"}})),I.a.createElement("td",null,o.name),I.a.createElement("td",null,o.type)))}),I.a.createElement("div",{style:{width:"100%"}},I.a.createElement(L,null),r.length>0?I.a.createElement("table",{style:{width:"100%",maxWidth:"560px",borderCollapse:"collapse"}},I.a.createElement("thead",null,I.a.createElement("tr",null,I.a.createElement("th",null,"id"),I.a.createElement("th",null,"Avatar"),I.a.createElement("th",null,"Name"),I.a.createElement("th",null,"Type"))),I.a.createElement("tbody",null,r)):I.a.createElement("h5",{style:{textAlign:"center"}},"No pokemons to show"),I.a.createElement(L,null))}}]),t}(P.Component))||o)||o,G=Object(B.b)("pokemons")(i=function(e){function t(){return Object(C.a)(this,t),Object(A.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return I.a.createElement("div",null,I.a.createElement("h1",null,"All Pokemons"),I.a.createElement("section",{className:"main_container"},I.a.createElement("div",{className:"wrapper",style:{maxWidth:"580px",margin:"0 auto"}},I.a.createElement("main",{className:"main_content"},I.a.createElement(S,null),I.a.createElement(_,null)))))}}]),t}(P.Component))||i,M=n(12),V=n.n(M),$=n(14),q=n(3),K=n(2),Q=(n(86),n(1)),R="http://pokeapi.co/api/v2",U=new(c=function(){function e(){var t=this;Object(C.a)(this,e),Object(q.a)(this,"highlightPattern",l,this),Object(q.a)(this,"count",s,this),Object(q.a)(this,"busy",u,this),this.previous=null,this.next="".concat(R,"/pokemon/"),Object(q.a)(this,"offset",p,this),Object(q.a)(this,"itemsOnPage",m,this),Object(q.a)(this,"pokemons",h,this),Object(q.a)(this,"pokemonsInfo",f,this),Object(q.a)(this,"types",b,this),Object(q.a)(this,"category",g,this),Object(q.a)(this,"itemsOnPage",O,this),Object(q.a)(this,"infoOpenedForId",y,this),Object(q.a)(this,"init",j,this),Object(q.a)(this,"setType",k,this),Object(q.a)(this,"nextPage",v,this),Object(q.a)(this,"previousPage",d,this),Object(q.a)(this,"setItemsOnPage",w,this),Object(q.a)(this,"setHighlightPattern",x,this),Object(q.a)(this,"changePockemonInoState",E,this),this.getTypes=function(){var e=t;return fetch("".concat(R,"/type/")).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(t){t.results&&(e.types=t.results)}).catch(function(e){console.error(e)})},this.getPockemons=Object($.a)(V.a.mark(function e(){var n,a,r,o=arguments;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"".concat(R,"/pokemon/limit=50"),a=o.length>1&&void 0!==o[1]?o[1]:null,t.busy=!0,r=a||{},null,e.abrupt("return",(t.category?fetch(t.category).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return t.pokemons=e.pokemon.map(function(e){return e.pokemon}),t.count=e.pokemon.length,t.pokemons}):fetch(n,r).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return t.previous=e.previous,t.next=e.next,t.count=e.count,t.pokemons=t.pokemons.concat(e.results),t.pokemons})).then(function(){return t.busy=!1}).catch(function(e){t.busy=!1}));case 6:case"end":return e.stop()}},e)}))}return Object(T.a)(e,[{key:"showNext",get:function(){return this.offset+this.itemsOnPage<this.count}},{key:"pokemonsOnPage",get:function(){return this.offset>this.count?[]:this.pokemons.slice(this.offset,this.offset+this.itemsOnPage)}}]),e}(),l=Object(K.a)(c.prototype,"highlightPattern",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(K.a)(c.prototype,"count",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=Object(K.a)(c.prototype,"busy",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),p=Object(K.a)(c.prototype,"offset",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=Object(K.a)(c.prototype,"itemsOnPage",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),h=Object(K.a)(c.prototype,"pokemons",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=Object(K.a)(c.prototype,"pokemonsInfo",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Q.b}}),Object(K.a)(c.prototype,"showNext",[Q.f],Object.getOwnPropertyDescriptor(c.prototype,"showNext"),c.prototype),Object(K.a)(c.prototype,"pokemonsOnPage",[Q.f],Object.getOwnPropertyDescriptor(c.prototype,"pokemonsOnPage"),c.prototype),b=Object(K.a)(c.prototype,"types",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),g=Object(K.a)(c.prototype,"category",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=Object(K.a)(c.prototype,"itemsOnPage",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),y=Object(K.a)(c.prototype,"infoOpenedForId",[Q.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=Object(K.a)(c.prototype,"init",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.populated||(e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,Promise.all([e.getTypes(),e.getPockemons()]).then(function(){return e.populated=!0}))}}}),k=Object(K.a)(c.prototype,"setType",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,e.getPockemons()}}}),v=Object(K.a)(c.prototype,"nextPage",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object($.a)(V.a.mark(function t(){return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.pokemons.length<=e.offset+e.itemsOnPage&&e.next)){t.next=8;break}return t.prev=1,t.next=4,e.getPockemons(e.next);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:e.offset+e.itemsOnPage>=e.count?e.offset=e.count:e.offset=e.offset+e.itemsOnPage;case 9:case"end":return t.stop()}},t,null,[[1,6]])}))}}),d=Object(K.a)(c.prototype,"previousPage",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=e.offset-e.itemsOnPage;e.offset=t>0?t:0}}}),w=Object(K.a)(c.prototype,"setItemsOnPage",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.itemsOnPage=t}}}),x=Object(K.a)(c.prototype,"setHighlightPattern",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.highlightPattern=t.toLowerCase()}}}),E=Object(K.a)(c.prototype,"changePockemonInoState",[Q.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object($.a)(V.a.mark(function t(n){var a,r;return V.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e,r=parseInt(n),a.infoOpenedForId!==r){t.next=6;break}a.infoOpenedForId=null,t.next=21;break;case 6:if(a.infoOpenedForId=r,!a.pokemonsInfo.has(r)){t.next=9;break}return t.abrupt("return");case 9:return t.prev=9,t.t0=a.pokemonsInfo,t.t1=r,t.next=14,a.getInfo(r);case 14:t.t2=t.sent,t.t0.set.call(t.t0,t.t1,t.t2),t.next=21;break;case 18:t.prev=18,t.t3=t.catch(9),console.log(t.t3);case 21:case"end":return t.stop()}},t,null,[[9,18]])}));return function(e){return t.apply(this,arguments)}}()}}),c),X=function(e){function t(){return Object(C.a)(this,t),Object(A.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return I.a.createElement(B.a,{pokemons:U},I.a.createElement(G,null))}}]),t}(I.a.Component);z.a.render(I.a.createElement(X,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6351a074.chunk.js.map