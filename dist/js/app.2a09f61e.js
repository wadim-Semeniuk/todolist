(function(t){function e(e){for(var n,i,a=e[0],c=e[1],d=e[2],u=0,f=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todolist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"20a6":function(t,e,o){},"284b":function(t,e,o){"use strict";o("c3ca")},"457b":function(t,e,o){"use strict";o("20a6")},"4a83":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",class:t.theme},[o("HeaderTodo",{attrs:{theme:t.theme},on:{toggle:t.toggle}}),o("TodoList",{class:t.theme})],1)},r=[],i=(o("96cf"),o("1da1")),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},[o("div",{staticClass:"todo-input-wrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoText,expression:"todoText"}],staticClass:"todo-input",attrs:{type:"text",placeholder:"New Task..."},domProps:{value:t.todoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.todoText=e.target.value)}}}),o("button",{staticClass:"btn-add",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},click:t.addTodo}},[t._v("+")])]),o("TodoItem",{attrs:{theme:t.theme,todos:t.ObjTodos,doneTodos:t.arrIsDone},on:{addDoneTask:t.getDoneTask}}),o("TodoDone",{attrs:{isDoneTodos:t.arrIsDone,allTodos:t.ObjTodos}})],1)},c=[],d=(o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item"},t._l(t.todos,(function(e,n){return o("div",{key:e.id,staticClass:"todo-item-content"},[o("div",{staticClass:"todo-item-index"},[t._v(t._s(n+1)+".")]),o("span",{staticClass:"todo-item-title",attrs:{contenteditable:"true"}},[t._v(t._s(e.title)+" ")]),o("button",{staticClass:"btn-done",on:{click:function(o){e.isDone=!e.isDone,t.addDoneTodo(),t.deleteFromObjTodos(n),t.tryTodo()}}},[t._v(" ✔ ")]),o("button",{staticClass:"btn-delete",on:{click:function(o){return t.deleteEvent(n,e.title)}}},[t._v(" + ")]),o("TodoDone",{staticClass:"none",attrs:{isDoneTodos:t.doneTodos}})],1)})),0)}),l=[],u=(o("4160"),o("a434"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item todo-done"},[o("h1",{staticClass:"todo-done-title"},[t._v("Tasks Done")]),o("span",{staticClass:"have-no-task",class:t.hiddenOdjDone},[t._v("You have no completed tasks.")]),t._l(t.isDoneTodos,(function(e,n){return o("div",{key:e.id,staticClass:"todo-item-content"},[o("div",{staticClass:"todo-item-index"},[t._v(t._s(n+1)+".")]),o("span",{staticClass:"todo-item-title"},[t._v(t._s(e.item.title)+" ")]),o("button",{staticClass:"btn-done btn-todo-done",on:{click:function(o){e.isDone=!e.isDone,t.goBackTodo(),t.deleteEvent(n)}}},[t._v("⮌")]),o("button",{staticClass:"btn-delete",on:{click:function(e){return t.deleteEvent(n)}}},[t._v("+")])])})),o("div",{staticClass:"container-progress"},[o("div",{staticClass:"progress-bar",class:t.hiddenOdjDoneReverse},[o("div",{staticClass:"progress-counter"},[t._v(t._s(t.counterDone)+" / "+t._s(t.counterAll)+" ("),o("span",{staticClass:"percent-sum"},[t._v(t._s(t.percentSum)+"%")]),t._v(" done)")]),o("div",{staticClass:"percentage",style:{width:t.percentSum+"%"}})])])],2)}),f=[],h={name:"TodoDone",props:{isDoneTodos:{type:Array},allTodos:{type:Array}},methods:{deleteEvent:function(t){this.isDoneTodos.splice(t,1),localStorage.setItem("redoValue",JSON.stringify(this.isDoneTodos))},goBackTodo:function(){var t=this;this.isDoneTodos.forEach((function(e){e.isDone&&t.allTodos.push({title:e.item.title}),localStorage.setItem("todos",JSON.stringify(t.allTodos))}))}},computed:{counterDone:function(){return this.isDoneTodos.length},counterAll:function(){return this.isDoneTodos.length+this.allTodos.length},percentSum:function(){return Math.floor(this.counterDone/this.counterAll*100)},hiddenOdjDone:function(){return{block:!this.isDoneTodos.length,none:this.isDoneTodos.length}},hiddenOdjDoneReverse:function(){return{block:this.isDoneTodos.length,none:!this.isDoneTodos.length}}}},p=h,m=(o("edc6"),o("2877")),g=Object(m["a"])(p,u,f,!1,null,"38883c9c",null),T=g.exports,v={name:"TodoItem",components:{TodoDone:T},props:{todos:{type:Array},doneTodos:{type:Array}},computed:{doneData:function(){return this.doneTodos}},methods:{tryTodo:function(){this.$emit("addDoneTask",this.doneData)},deleteEvent:function(t,e){var o=confirm('Are you realy want to delete "'.concat(e,'"'));o&&(this.todos.splice(t,1),localStorage.setItem("todos",JSON.stringify(this.todos)))},deleteFromObjTodos:function(t){this.todos.splice(t,1),localStorage.setItem("todos",JSON.stringify(this.todos))},addDoneTodo:function(){var t=this;console.log(this.theme),this.todos.forEach((function(e){e.isDone&&(t.doneTodos.push({item:e}),localStorage.setItem("todos",JSON.stringify(t.todos)),localStorage.setItem("todoDone",JSON.stringify(t.doneTodos)))}))}}},b=v,y=(o("6959"),Object(m["a"])(b,d,l,!1,null,null,null)),D=y.exports,O=o("11c1"),_={name:"TodoList",components:{TodoItem:D,TodoDone:T},data:function(){return{todoText:"",ObjTodos:[],arrIsDone:[]}},props:["theme"],mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("todos");case 2:return o=e.sent,e.next=5,localStorage.getItem("redoValue");case 5:n=e.sent,o&&(t.ObjTodos=JSON.parse(o)),n&&(t.arrIsDone=JSON.parse(n));case 8:case"end":return e.stop()}}),e)})))()},methods:{getDoneTask:function(t){localStorage.setItem("redoValue",JSON.stringify(t))},addTodo:function(){this.todoText.trim()&&(this.ObjTodos.push({title:this.todoText?this.todoText:this.todoText=!1,id:Object(O["v1"])(),isDone:!1}),localStorage.setItem("todos",JSON.stringify(this.ObjTodos)),this.todoText="")}}},k=_,x=(o("457b"),Object(m["a"])(k,a,c,!1,null,"150f18d1",null)),C=x.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h2",{staticClass:"header-title"},[t._v(t._s(t.theme)+" Theme")]),o("h1",{staticClass:"header-main-title"},[t._v("Task List")]),o("ToggleTodo",{attrs:{theme:t.theme},on:{toggle:function(e){return t.$emit("toggle")}}})],1)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"toggle-todo-wrapper"},[o("label",{staticClass:"toggle"},[o("input",{staticClass:"toggle-input",attrs:{type:"checkbox"},domProps:{checked:"dark"===t.theme&&"checked"},on:{change:function(e){return t.$emit("toggle")}}}),o("span",{staticClass:"toggler round"})])])},I=[],E={props:["theme"]},J=E,N=(o("d223"),Object(m["a"])(J,w,I,!1,null,"023ebf16",null)),$=N.exports,A={name:"HeaderTodo",components:{ToggleTodo:$},props:["theme"]},P=A,R=(o("284b"),Object(m["a"])(P,S,j,!1,null,"ae7dd4f8",null)),M=R.exports,L={name:"App",mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("theme");case 2:o=e.sent,o&&(t.theme=JSON.parse(o));case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{theme:"dark"}},components:{TodoList:C,HeaderTodo:M},methods:{toggle:function(){"dark"===this.theme?this.theme="light":this.theme="dark",localStorage.setItem("theme",JSON.stringify(this.theme))}}},H=L,V=(o("034f"),Object(m["a"])(H,s,r,!1,null,null,null)),B=V.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},6959:function(t,e,o){"use strict";o("4a83")},"85ec":function(t,e,o){},ba43:function(t,e,o){},bf21:function(t,e,o){},c3ca:function(t,e,o){},d223:function(t,e,o){"use strict";o("bf21")},edc6:function(t,e,o){"use strict";o("ba43")}});
//# sourceMappingURL=app.2a09f61e.js.map