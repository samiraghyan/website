(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(41)},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,l,s,u,p,m,h,f,b,g,O,j,y,k,v,w,d,E=n(0),P=n.n(E),x=n(10),N=n.n(x),z=(n(23),n(5)),C=n(6),I=n(8),T=n(7),A=n(9),D=n(4),B=Object(D.b)("pokemons")(a=Object(D.c)(a=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(I.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).changeType=function(e){(0,n.props.pokemons.setType)(e.currentTarget.value)},n.onSearch=function(e){(0,n.props.pokemons.setHighlightPattern)(e.currentTarget.value)},n}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.pokemons,t=e.types,n=e.category,a=e.highlightPattern;return P.a.createElement("div",{className:"input-group",style:{flex:1,flexWrap:"wrap",flexDirection:"row"}},P.a.createElement("select",{className:"form-control",onChange:this.changeType,defaultValue:n,style:{flex:1,width:"auto"}},P.a.createElement("option",{value:""},"All"),t.map(function(e){return P.a.createElement("option",{key:e.url,value:e.url},e.name)})),P.a.createElement("input",{type:"text",className:"form-control",placeholder:"type a name to highlight pokemons",onChange:this.onSearch,value:a,style:{flexGrow:1,flexBasis:"fill",flex:1,width:"auto",marginLeft:"10px"}}),P.a.createElement("span",{style:{flex:1}}))}}]),t}(E.Component))||a)||a,F=n(17),H=n.n(F),W=Object(D.b)("pokemons")(r=Object(D.c)(r=function(e){function t(){var e,n;Object(z.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(I.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(r)))).changeOnPage=function(e){(0,n.props.pokemons.setItemsOnPage)(parseInt(e.currentTarget.value))},n.onNext=function(e){e.preventDefault(),(0,n.props.pokemons.nextPage)()},n.onBack=function(e){e.preventDefault(),(0,n.props.pokemons.previousPage)()},n}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){var e=this.props.pokemons,t=e.offset,n=e.itemsOnPage,a=e.showNext;return P.a.createElement("div",null,P.a.createElement("div",{className:"form-group"},P.a.createElement("label",{htmlFor:"onpage"},"On page:"),P.a.createElement("select",{htmlFor:"id",className:"form-control",name:"onpage",value:n,onChange:this.changeOnPage},P.a.createElement("option",{value:"10"},"10"),P.a.createElement("option",{value:"20"},"20"),P.a.createElement("option",{value:"50"},"50"))),P.a.createElement("nav",{"aria-label":"..."},P.a.createElement("ul",{className:"pager"},t>0&&P.a.createElement("li",{className:"previous",onClick:null},P.a.createElement("a",{onClick:this.onBack,href:"#"},"Previous")),a&&P.a.createElement("li",{className:"next",onClick:null},P.a.createElement("a",{onClick:this.onNext,href:"#"},"Next")))))}}]),t}(E.Component))||r)||r,L=Object(D.b)("pokemons")(o=Object(D.c)(o=function(e){function t(e){return Object(z.a)(this,t),Object(I.a)(this,Object(T.a)(t).call(this,e))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){this.props.pokemons.init()}},{key:"render",value:function(){var e=this.props.pokemons,t=e.pokemonsOnPage,n=e.highlightPattern,a=[];return t.forEach(function(e,t){var r=Object.assign({},e),o=parseInt(r.url.replace(/\/$/,"").split("/").pop());r.id=o,r.avatar="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(o,".png"),console.log("val",r);var i={};!n.length||r.name.toLowerCase().startsWith(n)||(i.opacity=.1),a.push(P.a.createElement("tr",{key:r.name,style:Object.assign({height:"100px",verticalAlign:"middle"},i)},P.a.createElement("td",null,r.id),P.a.createElement("td",{style:{width:"100px",minHeight:"96px"}},P.a.createElement(H.a,{src:r.avatar,style:{verticalAlign:"middle",height:"96px"}})),P.a.createElement("td",null,r.name),P.a.createElement("td",null,r.type.name)))}),P.a.createElement("div",{style:{width:"100%"}},P.a.createElement(W,null),a.length>0?P.a.createElement("table",{style:{width:"100%",maxWidth:"560px",borderCollapse:"collapse"}},P.a.createElement("thead",null,P.a.createElement("tr",null,P.a.createElement("th",null,"id"),P.a.createElement("th",null,"Avatar"),P.a.createElement("th",null,"Name"),P.a.createElement("th",null,"Type"))),P.a.createElement("tbody",null,a)):P.a.createElement("h5",{style:{textAlign:"center"}},"No pokemons to show"),P.a.createElement(W,null))}}]),t}(E.Component))||o)||o,J=Object(D.b)("pokemons")(i=function(e){function t(){return Object(z.a)(this,t),Object(I.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return P.a.createElement("div",null,P.a.createElement("h1",null,"All Pokemons"),P.a.createElement("section",{className:"main_container"},P.a.createElement("div",{className:"wrapper",style:{maxWidth:"580px",margin:"0 auto"}},P.a.createElement("main",{className:"main_content"},P.a.createElement(B,null),P.a.createElement(L,null)))))}}]),t}(E.Component))||i,S=n(11),_=n.n(S),G=n(12),M=n(3),V=n(2),$=(n(40),n(1)),q="https://pokeapi.co/api/v2",K=new(c=function(){function e(){var t=this;Object(z.a)(this,e),Object(M.a)(this,"highlightPattern",l,this),Object(M.a)(this,"count",s,this),this.previous=null,this.next="".concat(q,"/pokemon/"),Object(M.a)(this,"offset",u,this),Object(M.a)(this,"itemsOnPage",p,this),Object(M.a)(this,"pokemons",m,this),Object(M.a)(this,"pokemonsInfo",h,this),Object(M.a)(this,"types",f,this),Object(M.a)(this,"category",b,this),Object(M.a)(this,"itemsOnPage",g,this),Object(M.a)(this,"infoOpenedForId",O,this),Object(M.a)(this,"init",j,this),Object(M.a)(this,"setType",y,this),Object(M.a)(this,"nextPage",k,this),Object(M.a)(this,"previousPage",v,this),Object(M.a)(this,"setItemsOnPage",w,this),Object(M.a)(this,"setHighlightPattern",d,this),this.getTypes=function(){return fetch("".concat(q,"/type/")).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){e.results&&(t.types=e.results)}).catch(function(e){console.error(e)})},this.getPockemons=Object(G.a)(_.a.mark(function e(){var n,a,r,o=arguments;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:"".concat(q,"/pokemon/"),a=o.length>1&&void 0!==o[1]?o[1]:null,r=a||{},null,e.abrupt("return",(t.category?fetch(t.category).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return t.pokemons=e.pokemon.map(function(e){return e.pokemon}),t.count=e.pokemon.length,t.pokemons}):fetch(n,r).then(function(e){if(200!==e.status)throw e;return e}).then(function(e){return e.json()}).then(function(e){return t.previous=e.previous,t.next=e.next,t.count=e.count,t.pokemons=t.pokemons.concat(e.results),t.pokemons})).catch(function(e){console.log(e)}));case 5:case"end":return e.stop()}},e)}))}return Object(C.a)(e,[{key:"showNext",get:function(){return this.offset+this.itemsOnPage<this.count}},{key:"pokemonsOnPage",get:function(){return this.offset>this.count?[]:this.pokemons.slice(this.offset,this.offset+this.itemsOnPage)}}]),e}(),l=Object(V.a)(c.prototype,"highlightPattern",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(V.a)(c.prototype,"count",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=Object(V.a)(c.prototype,"offset",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=Object(V.a)(c.prototype,"itemsOnPage",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),m=Object(V.a)(c.prototype,"pokemons",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=Object(V.a)(c.prototype,"pokemonsInfo",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new $.b}}),Object(V.a)(c.prototype,"showNext",[$.f],Object.getOwnPropertyDescriptor(c.prototype,"showNext"),c.prototype),Object(V.a)(c.prototype,"pokemonsOnPage",[$.f],Object.getOwnPropertyDescriptor(c.prototype,"pokemonsOnPage"),c.prototype),f=Object(V.a)(c.prototype,"types",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=Object(V.a)(c.prototype,"category",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=Object(V.a)(c.prototype,"itemsOnPage",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),O=Object(V.a)(c.prototype,"infoOpenedForId",[$.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),j=Object(V.a)(c.prototype,"init",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.populated||(e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,Promise.all([e.getTypes(),e.getPockemons()]).then(function(){return e.populated=!0}))}}}),y=Object(V.a)(c.prototype,"setType",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.category=t,e.offset=0,e.next=null,e.pokemons=[],e.count=0,e.getPockemons()}}}),k=Object(V.a)(c.prototype,"nextPage",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(G.a)(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.pokemons.length<=e.offset+e.itemsOnPage&&e.next)){t.next=8;break}return t.prev=1,t.next=4,e.getPockemons(e.next);case 4:t.next=8;break;case 6:t.prev=6,t.t0=t.catch(1);case 8:e.offset+e.itemsOnPage>=e.count?e.offset=e.count:e.offset=e.offset+e.itemsOnPage;case 9:case"end":return t.stop()}},t,null,[[1,6]])}))}}),v=Object(V.a)(c.prototype,"previousPage",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=e.offset-e.itemsOnPage;e.offset=t>0?t:0}}}),w=Object(V.a)(c.prototype,"setItemsOnPage",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){return e.itemsOnPage=t}}}),d=Object(V.a)(c.prototype,"setHighlightPattern",[$.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.highlightPattern=t.toLowerCase()}}}),c),Q=function(e){function t(){return Object(z.a)(this,t),Object(I.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(C.a)(t,[{key:"render",value:function(){return P.a.createElement(D.a,{pokemons:K},P.a.createElement(J,null))}}]),t}(P.a.Component);N.a.render(P.a.createElement(Q,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.347335bf.chunk.js.map