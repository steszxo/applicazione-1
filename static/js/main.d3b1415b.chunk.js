(this.webpackJsonppackage=this.webpackJsonppackage||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),i=(a(13),a(3)),s=a(4),l=a(6),u=a(5),m=a(7),h=function(t){var e=t.contacts;return c.a.createElement("div",null,c.a.createElement("center",null,c.a.createElement("h1",null,"Contact List")),e.map((function(t){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("p",{class:"card-Img"},t.avatarUrl),c.a.createElement("h5",{class:"card-title"},t.platformUserIdentifier),c.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},t.email)))})))},d=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[]},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement(h,{contacts:this.state.contacts})}},{key:"componentDidMount",value:function(){var t=this;fetch("https://api.tracker.gg/api/v2/tft/standard/search?platform=riot&query=1001001010&region=EUW").then((function(t){return t.json()})).then((function(e){t.setState({contacts:e})})).catch(console.log)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);