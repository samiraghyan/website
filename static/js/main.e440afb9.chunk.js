(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){e.exports=t(245)},107:function(e,a,t){},245:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(15),o=t.n(l),c=(t(107),t(49)),i=t(50),s=t(57),h=t(51),u=t(58),p=t(56),g=t(98),m=t.n(g),d=t(99),P=t.n(d),E=t(22),w=t.n(E),f=t(100),b=t.n(f),C=t(101),k=t.n(C),v=t(36),y=t.n(v),j=t(48),O=t.n(j),B=t(21),S=t.n(B),x=t(53),N=t.n(x),M=t(55),L=t.n(M),W=t(54),A=t.n(W),F=t(52),R=t.n(F),T=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).handleFirstPageButtonClick=function(e){t.props.onChangePage(e,0)},t.handleBackButtonClick=function(e){t.props.onChangePage(e,t.props.page-1)},t.handleNextButtonClick=function(e){t.props.onChangePage(e,t.props.page+1)},t.handleLastPageButtonClick=function(e){t.props.onChangePage(e,Math.max(0,Math.ceil(t.props.count/t.props.rowsPerPage)-1))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.count,n=e.page,l=e.rowsPerPage,o=e.theme;return r.a.createElement("div",{className:a.root},r.a.createElement(S.a,{onClick:this.handleFirstPageButtonClick,disabled:0===n,"aria-label":"First Page"},"rtl"===o.direction?r.a.createElement(R.a,null):r.a.createElement(N.a,null)),r.a.createElement(S.a,{onClick:this.handleBackButtonClick,disabled:0===n,"aria-label":"Previous Page"},"rtl"===o.direction?r.a.createElement(A.a,null):r.a.createElement(L.a,null)),r.a.createElement(S.a,{onClick:this.handleNextButtonClick,disabled:n>=Math.ceil(t/l)-1,"aria-label":"Next Page"},"rtl"===o.direction?r.a.createElement(L.a,null):r.a.createElement(A.a,null)),r.a.createElement(S.a,{onClick:this.handleLastPageButtonClick,disabled:n>=Math.ceil(t/l)-1,"aria-label":"Last Page"},"rtl"===o.direction?r.a.createElement(N.a,null):r.a.createElement(R.a,null)))}}]),a}(r.a.Component),J=Object(p.withStyles)(function(e){return{root:{flexShrink:0,color:e.palette.text.secondary,marginLeft:2.5*e.spacing.unit}}},{withTheme:!0})(T),G=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={rows:[],page:0,rowsPerPage:5},t.handleChangePage=function(e,a){t.setState({page:a})},t.handleChangeRowsPerPage=function(e){t.setState({page:0,rowsPerPage:e.target.value})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("http://pokeapi.co/api/v2/pokemon/25",{method:"GET"}).then(function(e){return e.json()}).then(function(a){e.setState({rows:a.results})}),console.log("state",this.state.rows)}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.rows,n=a.rowsPerPage,l=a.page,o=n-Math.min(n,t.length-l*n);return r.a.createElement(O.a,{className:e.root},r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(m.a,{className:e.table},r.a.createElement(P.a,null,t.slice(l*n,l*n+n).map(function(e){return r.a.createElement(y.a,{key:e.id},r.a.createElement(w.a,{component:"th",scope:"row"},e.name),r.a.createElement(w.a,{align:"right"},e.id),r.a.createElement(w.a,{align:"right"},e.type))}),o>0&&r.a.createElement(y.a,{style:{height:48*o}},r.a.createElement(w.a,{colSpan:6}))),r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{rowsPerPageOptions:[10,20,50],colSpan:3,count:t.length,rowsPerPage:n,page:l,SelectProps:{native:!0},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage,ActionsComponent:J}))))))}}]),a}(r.a.Component),I=Object(p.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:500},tableWrapper:{overflowX:"auto"}}})(G);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[102,1,2]]]);
//# sourceMappingURL=main.e440afb9.chunk.js.map