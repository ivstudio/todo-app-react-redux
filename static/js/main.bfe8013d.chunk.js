(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){e.exports=n(267)},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),l=n.n(o),i=n(19),c=n(100),u=n(101),d=n(112),s=n(102),m=n(113),p=n(16),f=0,E=function(e,t){return{type:"UPDATE_TODO",payload:{id:e,content:t}}},O=function(e){return{type:"DELETE_TODO",payload:{id:e}}},T=function(e){return{type:"TOGGLE_DONE_TODO",payload:{id:e}}},h=function(e){return{type:"SET_FILTER_TODOS",filter:e}},y=n(61),g=n.n(y),b=n(42),v=n.n(b),D=n(59),C=n.n(D),_=n(105),k=n.n(_),L=n(104),j=n.n(L),F=n(60),S=n.n(F),A=n(106),x=n.n(A),I=n(103),W=n.n(I),w=n(62),H=n.n(w),P=n(33),z=n.n(P),G=function(e){var t=e.todoItem,n=e.onItemDelete,o=e.onUpdateTodo,l=e.onItemToggleComplete;return r.a.createElement(a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement(H.a,{title:"Completed",placement:"right"},r.a.createElement(W.a,{checked:t.completed,onChange:function(){return l(t.id)}})),r.a.createElement(j.a,{primary:r.a.createElement(z.a,{multiline:!0,value:t.content,onChange:function(e){return function(e){o(t.id,e.target.value)}(e)}})}),r.a.createElement(k.a,{onClick:function(){return n(t.id)}},r.a.createElement(H.a,{title:"Delete",placement:"right"},r.a.createElement(S.a,{"aria-label":"delete todo"},r.a.createElement(x.a,null))))),r.a.createElement(v.a,null))},M={container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"150px",color:"#313777",fontFamily:"Montserrat, sans-serif"},title:{fontSize:"24px",fontWeight:"bold",margin:"15px 0 5px"},subtitle:{fontSize:"16px",margin:"5px 0"}},R=function(e){var t=e.activeFilter;return r.a.createElement("span",{style:M.container},function(){switch(t){case"SHOW_ALL":return r.a.createElement(a.Fragment,null,r.a.createElement("h2",{style:M.title},"All clear"),r.a.createElement("p",{style:M.subtitle},"Looks like everything's done."));case"SHOW_COMPLETED":return r.a.createElement(a.Fragment,null,r.a.createElement("h2",{style:M.title},"Been busy?"),r.a.createElement("p",{style:M.subtitle},"You haven't completed any tasks recently."));case"SHOW_ACTIVE":return r.a.createElement(a.Fragment,null,r.a.createElement("h2",{style:M.title},"Cheers!"),r.a.createElement("p",{style:M.subtitle},"Looks like you're caught up with your tasks."))}}())},U=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderTodos",value:function(){var e=this.props,t=e.todos,n=e.deleteTodo,a=e.updateTodo,o=e.toggleDoneTodo,l=e.todosFilter,i=t.map(function(e){return r.a.createElement(G,{key:e.id,todoItem:e,onItemDelete:function(e){return n(e)},onUpdateTodo:function(e,t){return a(e,t)},onItemToggleComplete:function(e){return o(e)}})});return r.a.createElement(g.a,null,t.length>0&&r.a.createElement(v.a,null),!t.length&&r.a.createElement(R,{activeFilter:l}),i)}},{key:"render",value:function(){return this.renderTodos()}}]),t}(a.Component),B=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});default:return e}};var V=Object(i.b)(function(e){var t=e.todos,n=e.todosFilter;return{todos:B(t,n),todosFilter:n}},function(e){return Object(p.bindActionCreators)({deleteTodo:O,updateTodo:E,toggleDoneTodo:T},e)})(U),J=n(43),N=n.n(J),Y=n(107),q=n.n(Y),K=Object(i.b)()(function(e){var t,n=e.dispatch;return r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),t.value.trim()&&(n({type:"ADD_TODO",payload:{content:t.value,id:f++}}),t.value="",t.style.height="auto")}},r.a.createElement(q.a,{id:"addTask",inputRef:function(e){return t=e},placeholder:"Empty task",fullWidth:!0,margin:"normal",variant:"outlined",autoFocus:!0,multiline:!0,spellCheck:"false",InputLabelProps:{shrink:!0}}),r.a.createElement(N.a,{style:{float:"right",marginTop:"8px"},variant:"contained",size:"medium",color:"primary",type:"submit"},"Add Task"))}),Q=n(110),X=n(108),Z=n.n(X),$=n(44),ee=n.n($);var te=Object(i.b)(function(e){return{todosFilter:e.todosFilter}},function(e){return Object(p.bindActionCreators)({filterTodos:h},e)})(function(e){var t=r.a.useState(null),n=Object(Q.a)(t,2),a=n[0],o=n[1],l=Boolean(a);function i(){o(null)}function c(t){e.filterTodos(t),i()}return r.a.createElement("div",null,r.a.createElement(N.a,{"aria-owns":l?"fade-menu":void 0,"aria-haspopup":"true",size:"small",onClick:function(e){o(e.currentTarget)}},e.todosFilter.split("_").join(" ")),r.a.createElement(Z.a,{id:"fade-menu",anchorEl:a,open:l,onClose:i},r.a.createElement(ee.a,{onClick:function(){return c("SHOW_ALL")}},"All"),r.a.createElement(ee.a,{onClick:function(){return c("SHOW_ACTIVE")}},"Active"),r.a.createElement(ee.a,{onClick:function(){return c("SHOW_COMPLETED")}},"Completed")))}),ne=n(45),ae=n.n(ne),re={container:{maxWidth:500,margin:"50px auto"}},oe=function(){return r.a.createElement("div",{style:re.container},r.a.createElement(ae.a,{container:!0,spacing:24},r.a.createElement(ae.a,{item:!0,xs:12},r.a.createElement(te,null),r.a.createElement(K,null)),r.a.createElement(ae.a,{item:!0,xs:12},r.a.createElement(V,null))))},le=n(63),ie=n(111),ce={todos:[],todosFilter:"SHOW_ALL"},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce.todosFilter,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER_TODOS":return t.filter;default:return e}},de=Object(p.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce.todos,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"ADD_TODO":return[].concat(Object(ie.a)(e),[{id:n.id,completed:!1,content:n.content}]);case"UPDATE_TODO":return e.map(function(e){return e.id===t.payload.id?Object(le.a)({},e,{content:n.content}):e});case"DELETE_TODO":return e.filter(function(e){return e.id!==n.id});case"TOGGLE_DONE_TODO":return e.map(function(e){return e.id===n.id?Object(le.a)({},e,{completed:!e.completed}):e});default:return e}},todosFilter:ue}),se=n(109),me=Object(p.createStore)(de,ce,Object(se.composeWithDevTools)());l.a.render(r.a.createElement(i.a,{store:me},r.a.createElement(oe,null)),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.bfe8013d.chunk.js.map