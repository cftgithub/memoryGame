(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Iris","image":"clickygame/images/iris.jpg","clicked":false},{"id":2,"name":"Protea","image":"/clickygame/images/protea.jpg","clicked":false},{"id":3,"name":"Bird of Paradise","image":"./clickygame/images/paradise.jpg","clicked":false},{"id":4,"name":"Yellow Summer","image":"./clickygame/images/yellowSummer.jpg","clicked":false},{"id":5,"name":"Rose","image":"./clickygame/images/rose.jpg","clicked":false},{"id":6,"name":"Plumeria","image":"./clickygame/images/plumeria.jpg","clicked":false},{"id":7,"name":"Tulip","image":"./clickygame/images/tulip.jpg","clicked":false},{"id":8,"name":"Peony","image":"./clickygame/images/peony.jpg","clicked":false},{"id":9,"name":"St John\'s Wort","image":"./clickygame/images/stJohnsWort.jpg","clicked":false},{"id":10,"name":"Dandelion","image":"./clickygame/images/dandelion.jpg","clicked":false},{"id":11,"name":"Crown of Christ","image":"./clickygame/images/crown.jpg","clicked":false},{"id":12,"name":"Orchid","image":"./clickygame/images/orchid.jpg","clicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(2),r=t.n(i),l=t(3),s=t(4),m=t(7),o=t(6);t(13);var g=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-card",onClick:function(){return e.click(e.id)}},n.a.createElement("img",{className:"flower",alt:e.name,src:e.image})),n.a.createElement("div",{className:"content"},n.a.createElement("strong",null,e.name)))};t(14);var d=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};t(15);var u=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"navSpace text-center"},"Your Score: ",e.score),n.a.createElement("div",{className:"navSpace text-center"},e.message),n.a.createElement("div",{className:"navSpace text-center"}," Top Score: ",e.highScore))};t(16);var f=function(){return n.a.createElement("div",{className:"hero"},n.a.createElement("h1",null,"Clicky Game"),n.a.createElement("h2",null,"Click each flower only once!",n.a.createElement("br",null),"Get all twelve and WIN!!!"))};t(17);var k=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer-title"},"Clicky Game"))},h=t(5),p=(t(18),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={cards:h,score:0,highScore:0,message:"Click a Flower to Play"},e.clickCard=function(a){var t=e.state.cards.find((function(e){return e.id===a}));!1===t.clicked?(t.clicked=!0,e.state.cards.sort((function(){return Math.random()-.5})),e.state.score+1>e.state.highScore&&e.setState({highScore:e.state.highScore+1}),e.state.score+1===12?e.win():e.setState({score:e.state.score+1,message:"Nice!"})):(e.state.cards.sort((function(){return Math.random()-.5})),e.restart()),console.log(a)},e.restart=function(){e.state.cards.forEach((function(e){return e.clicked=!1})),e.setState({score:0,message:"Try to beat the Top Score!"})},e.win=function(){e.state.cards.forEach((function(e){return e.clicked=!1})),e.setState({score:0,message:"YOU WIN!"})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(u,{message:this.state.message,score:this.state.score,highScore:this.state.highScore}),n.a.createElement(f,null),n.a.createElement(d,null,this.state.cards.map((function(a){return n.a.createElement(g,{key:a.id,id:a.id,name:a.name,image:a.image,click:e.clickCard})}))),n.a.createElement(k,null))}}]),t}(c.Component));t(19);r.a.render(n.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.797f2de8.chunk.js.map