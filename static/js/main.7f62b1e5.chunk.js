(this["webpackJsonpdelete-data"]=this["webpackJsonpdelete-data"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),i=n(1),o=n(2),u=n(4),s=n(3),m=[{_id:"101",title:"Forest Gump",stock:6,rate:3.5,director:"Robert Zemeckis",genre:"Comedy"},{_id:"102",title:"Harry Potter",stock:7,rate:3.7,director:"Mike Newell",genre:"Fantasy Fiction"},{_id:"103",title:"Titanic",stock:3,rate:2.5,director:"James Cameron",genre:"Romance"},{_id:"104",title:"Best Worst Movie",stock:4,rate:2.1,director:"Michael Stephen",genre:"Comedy"},{_id:"105",title:"Troll 2",stock:6,rate:4,director:"Shawn Black",genre:"Horror"}];function d(){return m}var h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:d()},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.movies.length;return 0===t?r.a.createElement("h3",null,"There are no movies in the database \ud83d\ude25"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Showing ",t," movies in the database"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Genre"),r.a.createElement("th",null,"Stock"),r.a.createElement("th",null,"Rate"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.state.movies.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.genre),r.a.createElement("td",null,t.stock),r.a.createElement("td",null,t.rate),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.handleDelete(t)},className:"btn btn-danger btn-sm"},"Delete")))})))))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement(h,null))}}]),n}(r.a.Component);n(12),n(13);c.a.render(r.a.createElement(E,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7f62b1e5.chunk.js.map