(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(27),n(7)),l=n(8),u=n(10),s=n(9),m=n(11),d=(n(29),n(39)),p=n(38),h=n(40),j=n(21),b=n(6),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a("data/projectList.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),c.a.createElement("div",{className:"container"},"Projects",this.state.data.map(function(e,t){return c.a.createElement(b.f,{sm:"6",key:"project"+t},c.a.createElement(b.b,null,c.a.createElement(b.c,null,c.a.createElement(b.e,null,e.title),c.a.createElement(b.d,null,e.description),c.a.createElement("a",{target:"_blank",href:e.link},c.a.createElement(b.a,null,"Link")))),c.a.createElement("br",null))}))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",null,"Major1: Informatics (Data Science)"),c.a.createElement("div",null,"Major2: International Studies (Internatinoal Political Economics)"))}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(b.g,null,"Changyu Li")}}]),t}(a.Component),v=(n(33),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(p.a,{to:"/"},"Home")," ",c.a.createElement(p.a,{to:"/projects"},"Projects")," ",c.a.createElement(p.a,{to:"/background"},"Background"),c.a.createElement(h.a,{exact:!0,path:"/",component:O}),c.a.createElement(h.a,{path:"/projects",component:E}),c.a.createElement(h.a,{path:"/background",component:f})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.5d40939a.chunk.js.map