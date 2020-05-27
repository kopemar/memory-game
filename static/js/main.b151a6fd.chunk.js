(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{44:function(e,n,t){e.exports=t(71)},49:function(e,n,t){},50:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(37),o=t.n(i),c=(t(49),t(5)),l=t(4),u=t(9),s=t(10),m=t(14),d=(t(50),t(12)),f=t(21),v=t(1),h=t(2);function p(){var e=Object(v.a)(["\n            @keyframes reject {\n                0% {transform: translateX(15px);}\n                50% {transform: translateX(-15px);}\n                100% {transform: translateX(0px)}\n            }\n            animation-name: reject;\n            animation-delay: ","s;\n            animation-duration: ","s;\n            animation-fill-mode: forwards;\n            "]);return p=function(){return e},e}var b="img/img_1.svg",g="img/img_2.svg",O="img/img_3.svg",y="img/img_4.svg",j="img/img_5.svg",w="img/img_6.svg",x="img/img_7.svg",E="img/img_8.svg",k="#6AA331",C="#ACD87E",S="#4a7524",P="#7AB341",F="#B8FF2C",T="#A0FF4F",I="#9CAF8C",_="#B7C59C",N="#96E6A1",B="#93D559",M="#FFFFFF",D="#BCBDBC",z="#7AD9EF",A="#D7D7D7",G="#E7DEB1",J="#E7C3B1",X="#877467",W="36px",L="24px",H="@media (min-width: 1000px)",Y="@media (max-width: 700px)",q="Hello and welcome to the memory game!",U="Select number of players",R="Insert name of Player",V="/multiplayer",$="/about",K="/",Q="#/",Z="https://api.github.com/users/kopemar",ee="multiplayer_in_storage",ne="has_been_welcome",te=Object(h.a)(p(),(function(e){var n=e.delay;return n||0}),(function(e){var n=e.duration;return n||.5})),ae=t(11),re=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e,a){var r;return Object(c.a)(this,t),(r=n.call(this,e)).activePlayer=0,r.timeout=null,r.players=a,r.activePlayer=r.getFirstPlayerIndex(),r}return Object(l.a)(t,[{key:"handleMatch",value:function(){Object(f.a)(Object(d.a)(t.prototype),"handleMatch",this).call(this),console.log(this),null!==this.activePlayer&&(this.players[this.activePlayer].score+=2)}},{key:"handleLoss",value:function(){Object(f.a)(Object(d.a)(t.prototype),"handleLoss",this).call(this),this.activePlayer=this.activePlayer+2>this.players.length?this.getFirstPlayerIndex():this.activePlayer+1,console.log(this.activePlayer)}}],[{key:"fromProps",value:function(e){var n=new t(e.cards.length,[]);Object(f.a)(Object(d.a)(t),"readGameProps",this).call(this,e,n);var a,r=Object(m.a)(e.players);try{for(r.s();!(a=r.n()).done;){var i=a.value;n.players.push(null===i?null:oe.fromProps(i))}}catch(o){r.e(o)}finally{r.f()}return n.activePlayer=e.activePlayer,n}}]),Object(l.a)(t,[{key:"getFirstPlayerIndex",value:function(){console.log(this.players);var e,n=Object(m.a)(this.players);try{for(n.s();!(e=n.n()).done;){var t=e.value;if(void 0!==t&&null!==t)return this.players.indexOf(t)}}catch(a){n.e(a)}finally{n.f()}}}]),t}(function(){function e(n){if(Object(c.a)(this,e),console.log("Game constructor"),this.count=n,n%2===0){this.cards=[];for(var t=0;t<n/2;t++)for(var a=0;a<2;a++)this.cards.push(new ie(t));this.activeCard=null,this.discovered=0,this.shuffle()}else console.error("Not even number of cards");console.log(this)}return Object(l.a)(e,null,[{key:"fromProps",value:function(n){try{var t=new e(n.cards.length);return this.readGameProps(n,t),t}catch(a){throw"Not a valid JSON game"}}},{key:"readGameProps",value:function(e,n){n.cards=[];var t,a=Object(m.a)(e.cards);try{for(a.s();!(t=a.n()).done;){var r=t.value;r&&n.cards.push(ie.fromProps(r))}}catch(i){a.e(i)}finally{a.f()}n.activeCard=null==e.activeCard?null:ie.fromProps(e.activeCard),n.discovered=e.discovered}}]),Object(l.a)(e,[{key:"isWon",value:function(){return this.count===this.discovered}},{key:"handleMatch",value:function(){console.log("Handle match")}},{key:"handleLoss",value:function(){}},{key:"shuffle",value:function(){for(var e=this.cards.length;e>0;){var n=Math.floor(Math.random()*e);e--;var t=this.cards[e];this.cards[e]=this.cards[n],this.cards[n]=t}}}]),e}()),ie=function(){function e(n){Object(c.a)(this,e),this.number=n,this.props=e.image[n],this.active=!1,this.id=e.getId(),this.discovered=!1,this.timeout=null,this.remainining=0}return Object(l.a)(e,null,[{key:"fromProps",value:function(n){try{var t=new e(n.number);return t.active=n.active,t.id=n.id,t.discovered=n.discovered,t.remainining=n.remainining,t}catch(a){throw"Invalid card"}}}]),Object(l.a)(e,[{key:"isTheSame",value:function(e){return this.valueEquals(e)&&this.id===e.id}},{key:"pairsWith",value:function(e){return this.valueEquals(e)&&!this.isTheSame(e)}},{key:"valueEquals",value:function(e){return void 0===e?void 0===this:null===e?null===this:!!e.hasOwnProperty("number")&&e.number===this.number}}]),e}();ie.counter=0,ie.getId=function(){return ie.counter++},ie.image={0:{color:N,src:b},1:{color:J,src:g},2:{color:A,src:O},3:{color:X,src:y},4:{color:G,src:j},5:{color:z,src:w},6:{color:A,src:x},7:{color:G,src:E}};var oe=function(){function e(n){Object(c.a)(this,e),this.score=0,this.name=n}return Object(l.a)(e,null,[{key:"fromProps",value:function(n){try{var t=new e(n.name);return t.score=n.score,t}catch(a){throw"Invalid player"}}}]),e}();Object(ae.a)(oe,{score:ae.b}),Object(ae.a)(re,{activePlayer:ae.b,timeout:ae.b});var ce=t(3);Object(a.createContext)({activeCard:null,setActiveCard:function(){},welcome:!1,setWelcome:function(e){return e},players:[],setPlayers:function(e){return e},loaded:!1,setGameLoaded:function(){}});function le(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return le=function(){return e},e}function ue(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return ue=function(){return e},e}function se(){var e=Object(v.a)(["\n    width: 100%;\n    height: 100%;\n    rx: 10;\n    fill: url(",");\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    \n    &:hover {\n        stroke: ","\n    }\n"]);return se=function(){return e},e}function me(){var e=Object(v.a)(["\n    perspective: 1000px;\n    position: relative; \n"]);return me=function(){return e},e}function de(){var e=Object(v.a)(["transform: rotateY(180deg);"]);return de=function(){return e},e}function fe(){var e=Object(v.a)(["\n    position: relative;\n    fill: transparent;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    text-align: center;\n    ","\n"]);return fe=function(){return e},e}function ve(){var e=Object(v.a)(["\n    box-sizing: border-box;\n    width: 25%;\n    padding: 10px;\n    border-radius: 10px;\n    perspective: 1000px;\n"]);return ve=function(){return e},e}var he=h.b.div(ve()),pe=h.b.g(fe(),(function(e){return e.active&&Object(h.a)(de())})),be=h.b.g(me()),ge=h.b.rect(se(),(function(e){return e.fill}),(function(e){return e.active?S:k}),S),Oe=h.b.rect(ue(),(function(e){return e.src}),(function(e){return e.active?k:S})),ye=h.b.image(le()),je=function(e){var n=e.card,t=e.clickHandler,i=e.timeoutHandler,o=e.game,c=Object(a.useState)(n.active),l=Object(ce.a)(c,2),u=l[0],s=l[1],m=Object(a.useState)(n.discovered),d=Object(ce.a)(m,2),f=d[0],v=d[1];n.remainining>0&&(n.timeout=setTimeout((function(){i(n),f||v(n.discovered),s(n.discovered)}),n.remainining));var h;return r.a.createElement(he,{onClick:function(){n.discovered||(t(n),s(!0),n.pairsWith(o.activeCard)&&clearTimeout(o.activeCard.timeout),n.timeout=setTimeout((function(){i(n),f||v(n.discovered),s(n.discovered)}),1500))}},r.a.createElement("svg",{viewBox:"0 0 ".concat(160," ").concat(160)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"green_linear_gradient"},r.a.createElement("stop",{stopColor:C,offset:"0%"}),r.a.createElement("stop",{stopColor:P,offset:"100%"})),r.a.createElement("pattern",{id:"img1",patternUnits:"userSpaceOnUse",width:"100",height:"100"},r.a.createElement("image",{href:"wall.jpg",x:"0",y:"0",width:"100",height:"100"}))),r.a.createElement(be,null,r.a.createElement(pe,{active:n.isTheSame(o.activeCard)||u||f,size:160},r.a.createElement(ge,{active:n.isTheSame(o.activeCard)||u||f,fill:(h="green_linear_gradient","#".concat(h)),id:"card_bg_rectangle",width:"100%",height:"100%",rx:"10"}),r.a.createElement(Oe,{active:n.isTheSame(o.activeCard)||u||f,src:n.props.color,width:"100%",height:"100%",rx:"10"}),r.a.createElement(ye,{href:n.props.src,width:"100%",height:"100%"})))))};function we(){var e=Object(v.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 700px;\n    padding: 10px;\n    background: ",";\n    border-radius: 4px;\n    border: 1px solid ",";\n    margin: 10px auto;\n"]);return we=function(){return e},e}var xe=h.b.section(we(),M,I),Ee=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(c.a)(this,t),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.game instanceof re&&this.setPlayerTimeout()}},{key:"setPlayerTimeout",value:function(){var e=this;this.props.game.timeout=setTimeout((function(){e.props.game.handleLoss(),e.setPlayerTimeout()}),6e3)}},{key:"render",value:function(){var e=this,n=[];this.props.game.cards.forEach((function(i){n.push(r.a.createElement(je,{clickHandler:function(e){return a(e)},card:i,game:e.props.game,timeoutHandler:function(e){return t(e)}}))}));var t=function(n){n.discovered||(n.active=!1),e.props.game.activeCard=null},a=function(n){n.active=!0,console.log(e.props.game),null===e.props.game.activeCard?e.props.game.activeCard=n:(e.props.game.activeCard.pairsWith(n)?(n.discovered||e.props.game.activeCard.discovered||(e.props.game.discovered+=2),e.props.game.activeCard.discovered=!0,n.discovered=!0,e.props.game.handleMatch()):(e.props.game.handleLoss(),clearTimeout(e.props.game.timeout),e.setPlayerTimeout(),e.props.game.activeCard.active=!1,n.active=!1),e.props.game instanceof re&&(clearTimeout(e.props.game.timeout),e.setPlayerTimeout()),e.props.game.activeCard=null,e.props.game.isWon()&&setTimeout((function(){e.props.game instanceof re?alert("Game has ended!"):alert("You won this game!")}),1e3))};return r.a.createElement(xe,null,n)}}]),t}(a.Component);function ke(){var e=Object(v.a)(["\n        @keyframes indicator {\n            from {\n                width: ","%;\n            }\n            to {\n                width: ","%;\n            }\n        }\n        animation-name: indicator; \n        animation-duration: ","ms; \n        animation-timing-function: linear;"]);return ke=function(){return e},e}function Ce(){var e=Object(v.a)(["\n    background: ",";\n    position: absolute;\n    height: 10px;\n    width: 100%;\n    left: 0;\n    bottom: 0;\n    margin-bottom: 4px;\n    transition: 2s linear;\n    \n    ","\n    \n    \n"]);return Ce=function(){return e},e}function Se(){var e=Object(v.a)(["\n    height: 0;\n    flex-grow: 1; \n    text-transform: uppercase;\n    padding: 20px;\n    font-size: ",";\n    color: ",";\n    transition: 1s linear;\n    \n    "," {\n        text-align: left;\n        padding: 5px;\n        font-size: ",";\n    }\n"]);return Se=function(){return e},e}function Pe(){var e=Object(v.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    text-align: center\n    "," {\n        position: absolute;\n    }\n"]);return Pe=function(){return e},e}function Fe(){var e=Object(v.a)(["\n    position: relative;\n    display: flex;\n    background: ","; \n    min-height: 100px;\n    "," {\n        padding: 6px 200px;\n    }\n    "," {\n        flex-direction: column; \n        padding: 20px;\n    }\n    > * {\n        text-align: center; \n    }\n"]);return Fe=function(){return e},e}var Te=h.b.div(Fe(),M,H,Y),Ie=h.b.div(Pe(),Y),_e=h.b.div(Se(),W,(function(e){return e.active?N:D}),Y,L),Ne=h.b.div(Ce(),N,(function(e){return e.shouldAnimate&&Object(h.a)(ke(),(function(e){var n=e.start;return n||100}),(function(e){var n=e.end;return n||0}),(function(e){var n=e.duration;return n||6e3}))})),Be=function(e){var n,t=e.game,i=Object(a.useState)(t.players[t.activePlayer]),o=Object(ce.a)(i,2),c=o[0],l=o[1],u=Object(a.useReducer)((function(e){return e+1}),0),s=Object(ce.a)(u,2)[1],d=Object(a.useState)(100),f=Object(ce.a)(d,2),v=f[0],h=(f[1],Object(a.useState)(0)),p=Object(ce.a)(h,2),b=p[0],g=(p[1],Object(a.useState)(6e3)),O=Object(ce.a)(g,2),y=O[0],j=(O[1],Object(a.useState)(!0)),w=Object(ce.a)(j,2),x=w[0],E=w[1],k=Object(m.a)(t.players);try{for(k.s();!(n=k.n()).done;){var C=n.value;null!==C&&Object(ae.c)(C,"score",(function(){s()}))}}catch(T){k.e(T)}finally{k.f()}Object(ae.c)(t,"activePlayer",(function(e){setTimeout((function(){l(t.players[e.newValue]),E(!1),setTimeout((function(){E(!0)}),500)}),500)})),Object(ae.c)(t,"timeout",(function(){E(!1),setTimeout((function(){E(!0)}),100)}));for(var S=[],P=1;P<t.players.length;P++){var F=t.players[P];F&&S.push(r.a.createElement(Ie,null,r.a.createElement(_e,{active:F===c},F.name," (",F.score,")")))}return r.a.createElement(Te,null,S,r.a.createElement(Ne,{start:v,end:b,duration:y,shouldAnimate:x}))};function Me(){var e=Object(v.a)(["\n        background-image: linear-gradient(to bottom , ",", ",");\n        cursor: not-allowed; \n        \n        &:hover {\n            opacity: 0.5;\n            ","\n        }\n    "]);return Me=function(){return e},e}function De(){var e=Object(v.a)(["\n    border: none; \n    height: 64px;\n    background-image: linear-gradient(to bottom , ",", ",");\n    min-width: 300px;\n    border-radius: 64px;\n    font-size: ",";\n    color: ",";\n    text-transform: uppercase;\n    font-family: 'Raleway', sans-serif;\n    opacity: 0.5; \n    transition: 1s; \n    cursor: pointer; \n    \n    "," {\n        min-width: 0;\n        width: 60vw; \n        opacity: 1;\n    }\n    \n    :hover {\n        opacity: 1;\n    }\n    \n    ","\n"]);return De=function(){return e},e}var ze=h.b.button(De(),F,T,L,M,Y,(function(e){return e.disabled&&Object(h.a)(Me(),I,_,te)})),Ae=function(e){var n=e.children,t=e.onClick,a=e.disabled;return r.a.createElement(ze,{disabled:a,type:"submit",onClick:function(e){!a&&t&&t(e)}},n)};function Ge(){var e=Object(v.a)(["\n    @keyframes move-from-right {\n        from {transform: translateX(100%);}\n        to {transform: translateX(0%);}\n    }\n    animation-name: move-from-right;\n    transform: translateX(100%)\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return Ge=function(){return e},e}function Je(){var e=Object(v.a)(["\n    @keyframes fade-in {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n    animation-name: fade-in;\n    opacity: 0;\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return Je=function(){return e},e}var Xe=h.b.div(Je(),(function(e){var n=e.delay;return n||0}),(function(e){var n=e.duration;return n||2})),We=h.b.div(Ge(),(function(e){var n=e.delay;return n||0}),(function(e){var n=e.duration;return n||2}));function Le(){var e=Object(v.a)(["\n    margin: 50px;\n    color: ","; \n    font-size: ",";\n    font-weight: 500;\n    text-align: center;\n    \n    "," {\n        font-size: ",";\n    }\n"]);return Le=function(){return e},e}var He=h.b.h2(Le(),M,W,Y,L);function Ye(){var e=Object(v.a)(["\n        transform: translateX(-100%);\n    "]);return Ye=function(){return e},e}function qe(){var e=Object(v.a)(["\n    max-width: 100%;\n    text-align: center;\n    transition: 1s;\n    \n    ","\n"]);return qe=function(){return e},e}var Ue=h.b.section(qe(),(function(e){return e.finished&&Object(h.a)(Ye())})),Re=function(e){var n=e.onFinished,t=Object(a.useState)(!1),i=Object(ce.a)(t,2),o=i[0],c=i[1];return r.a.createElement(Ue,{finished:o},r.a.createElement(Xe,{delay:1},r.a.createElement(He,null,q)),r.a.createElement(Xe,{delay:2},r.a.createElement(Ae,{onClick:function(){return c(!0),void n()}},"Next")))};function Ve(){var e=Object(v.a)(["\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n        border: 3px solid ","\n    "]);return Ve=function(){return e},e}function $e(){var e=Object(v.a)(["\n    margin: 10px;\n    width: 136px;\n    height: 168px;\n    border-radius: 60px; \n    text-align: center;\n    background: ",";\n    color: ",";\n    font-size: ",";\n    \n    &, >p {\n        transition: 2s;\n    }\n    \n    > p {\n        opacity: 0.5;\n        height: 20%;\n        padding: 40%;\n    }\n    \n    &:hover {\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n    }\n    \n    ","\n"]);return $e=function(){return e},e}var Ke=h.b.section($e(),I,M,W,B,(function(e){return e.enabled&&Object(h.a)(Ve(),B,S)})),Qe=function(e){var n=e.value,t=e.onSelect,a=e.enabled;return r.a.createElement(Ke,{onClick:function(){return t(n)},enabled:a},r.a.createElement("p",null,n))};function Ze(){var e=Object(v.a)(["\n    width: 100%;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n"]);return Ze=function(){return e},e}function en(){var e=Object(v.a)(["\n        transform: translateX(0%);\n    "]);return en=function(){return e},e}function nn(){var e=Object(v.a)(["\n    transform: translateX(100%);\n    transition: 1s; \n    text-align: center;\n    ","\n"]);return nn=function(){return e},e}var tn=h.b.main(nn(),(function(e){return e.shouldMove&&Object(h.a)(en())})),an=h.b.div(Ze()),rn=function(e){for(var n=e.onFinished,t=Object(a.useState)(!1),i=Object(ce.a)(t,2),o=i[0],c=i[1],l=Object(a.useState)(0),u=Object(ce.a)(l,2),s=u[0],m=u[1],d=function(e){m(e)},f=[],v=2;v<=4;v++)f.push(r.a.createElement(Qe,{value:v,enabled:s===v,onSelect:function(e){return d(e)}}));return setTimeout((function(){return c(!0)}),100),r.a.createElement("section",null,r.a.createElement(tn,{shouldMove:o},r.a.createElement(He,null,U),r.a.createElement(an,null,f),r.a.createElement(Ae,{disabled:0===s,onClick:function(){n(s)}},"Next")))},on=t(41),cn=t(19);function ln(){var e=Object(v.a)(["\n    width: 100vw;\n    bottom: 0;\n"]);return ln=function(){return e},e}function un(){var e=Object(v.a)(["\n    margin: 10px;\n"]);return un=function(){return e},e}function sn(){var e=Object(v.a)(["\n        fill: ","\n    "]);return sn=function(){return e},e}function mn(){var e=Object(v.a)(["\n        fill: ","\n    "]);return mn=function(){return e},e}function dn(){var e=Object(v.a)(["\n    fill: ",";\n    transition: 1s;\n    \n    ","\n    \n    ","\n"]);return dn=function(){return e},e}function fn(){var e=Object(v.a)(["\n    // position: absolute; \n    // right: 50%;\n    // left: 50%; \n    display: flex;\n    align-items: center;\n    text-align: center; \n    justify-content: center;\n"]);return fn=function(){return e},e}function vn(){var e=Object(v.a)(["\n    text-align: center; \n"]);return vn=function(){return e},e}function hn(){var e=Object(v.a)(["\n    display: block; \n    margin:  0 auto 64px;    \n    height: 64px;\n    min-width: 300px;\n    border-radius: 64px;\n    letter-spacing: 3px;\n    font-weight: 500;\n    font-size: ",";\n    text-align: center;\n    \n    color: ",";\n    padding: 10px;\n    border: 5px solid ","; \n    transition: 1s;\n    \n    "," {\n        &::placeholder {\n            font-size: ",";\n        }\n        min-width: 0;\n        width: 60vw; \n    }\n    \n    &::placeholder {\n        font-weight: 500;\n        opacity: 0.2;\n    }\n    \n    &:invalid {\n        border-color: ",";\n    }\n"]);return hn=function(){return e},e}function pn(){var e=Object(v.a)(["\n        left: ","%;\n    "]);return pn=function(){return e},e}function bn(){var e=Object(v.a)(["\n    width: 100vw;\n    display: inline-block;\n    position: absolute; \n    \n    ","\n"]);return bn=function(){return e},e}function gn(){var e=Object(v.a)(["\n        transform: translateX(-","%);\n    "]);return gn=function(){return e},e}function On(){var e=Object(v.a)(["\n    width: 100vw;\n    \n    ","\n    transition: 2s; \n"]);return On=function(){return e},e}function yn(){var e=Object(v.a)(["\n    position: relative; \n"]);return yn=function(){return e},e}var jn=h.b.div(yn()),wn=h.b.div(On(),(function(e){var n=e.active;return n&&Object(h.a)(gn(),100*(n-1))})),xn=h.b.section(bn(),(function(e){var n=e.number;return n&&Object(h.a)(pn(),100*(n-1))})),En=h.b.input(hn(),W,D,k,Y,L,_),kn=h.b.form(vn()),Cn=h.b.div(fn()),Sn=h.b.circle(dn(),M,(function(e){var n=e.disabled,t=e.active;return n&&!t&&Object(h.a)(mn(),_)}),(function(e){return e.active&&Object(h.a)(sn(),T)})),Pn=h.b.div(un()),Fn=Object(h.b)(We)(ln()),Tn=function(e){var n=e.active,t=e.disabled;return r.a.createElement(Pn,null,r.a.createElement("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22"},r.a.createElement(Sn,{cx:"11",cy:"11",r:"8",active:n,disabled:t})))},In=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={name:null,number:a.props.number},a.handleInputChange=a.handleInputChange.bind(Object(cn.a)(a)),a}return Object(l.a)(t,[{key:"handleInputChange",value:function(e){"name"===e.target.name&&null!=this.state.name&&e.target.value.length>=10?this.setState({isLong:!0}):this.setState(Object(on.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,n=this.state.name;return r.a.createElement(xn,{number:this.state.number},r.a.createElement(He,null,R," ",this.props.number),r.a.createElement(kn,{onSubmit:function(n){e.props.onSubmit(e.state),n.preventDefault()}},r.a.createElement(En,{autoComplete:"off",autocomplete:"off",name:"name",value:n,onChange:this.handleInputChange,type:"text",placeholder:"Player ".concat(this.props.number," name"),required:!0}),r.a.createElement(Ae,{disabled:null===this.state.name||this.state.name.length<1},"Next")))}}]),t}(a.Component),_n=function(e){for(var n=e.count,t=e.onFinished,i=Object(a.useState)(1),o=Object(ce.a)(i,2),c=o[0],l=o[1],u=Object(a.useState)([]),s=Object(ce.a)(u,1)[0],m=[],d=[],f=function(e){s[e.number]=new oe(e.name),e.number<n?l(e.number+1):e.number===n&&t&&t(s)},v=1;v<=n;v++){var h=void 0===s[v]||0===s[v].length;d.push(r.a.createElement(Tn,{active:c===v,disabled:h})),m.push(r.a.createElement(In,{filled:v<c,number:v,active:c===v,onSubmit:function(e){return f(e)}}))}return r.a.createElement(jn,null,r.a.createElement(We,null,r.a.createElement(wn,{active:c},m)),r.a.createElement(Fn,null,r.a.createElement(Cn,null,d)))},Nn=t(13);function Bn(){var e=Object(v.a)(["\n    text-align: center; \n    \n    > button {\n        margin: auto 30px;\n       \n        "," {\n            margin-bottom: 30px;\n        }\n    }\n"]);return Bn=function(){return e},e}var Mn=Object(h.b)(We)(Bn(),Y),Dn=function(){return r.a.createElement("section",null,r.a.createElement(Mn,null,r.a.createElement(He,null,"Choose type of the game"),r.a.createElement(Ae,{disabled:!0},"Single Player"),r.a.createElement(Nn.b,{to:V},r.a.createElement(Ae,null,"Multiplayer"))))},zn=t(15);function An(){var e=Object(v.a)(["\n    text-align: center; \n    \n    > button {\n        margin: auto 30px;\n        "," {\n            margin-bottom: 30px;\n        }\n    }\n"]);return An=function(){return e},e}var Gn=Object(h.b)(We)(An(),Y),Jn=function(e){var n=e.onSelected;return r.a.createElement("section",null,r.a.createElement(Gn,null,r.a.createElement(He,null,"Choose type of the game"),r.a.createElement(Ae,{disabled:void 0===window.localStorage.getItem(ee)||null===window.localStorage.getItem(ee),onClick:function(){console.log(window.localStorage.getItem(ee)),n(re.fromProps(JSON.parse(window.localStorage.getItem(ee))))}},"Load Game"),r.a.createElement(Ae,{onClick:function(){return n(null)}},"New Game")))},Xn=t(43),Wn=t.n(Xn);function Ln(){var e=Object(v.a)(["\n    position: absolute; \n    right: 0;\n    top: 25%; \n    bottom: 75%;\n    margin-right: 30px;\n    cursor: pointer; \n"]);return Ln=function(){return e},e}function Hn(){var e=Object(v.a)(["\n    position: absolute; \n    left: 0;\n    top: 25%; \n    bottom: 75%;\n    margin-left: 30px;\n    cursor: pointer; \n"]);return Hn=function(){return e},e}function Yn(){var e=Object(v.a)(['\n        width: 134px;\n        height: 87px; \n        background: url("img/logo_small.svg") no-repeat;\n        background-size: cover;\n    ']);return Yn=function(){return e},e}function qn(){var e=Object(v.a)(['\n    display: inline-block; \n    text-indent: -9999px;\n    margin: auto;\n    width: 401px; \n    height: 263px;\n    border: none;\n    background: url("img/logo_great.svg");\n    cursor: pointer;\n    transition: 1s;\n    ',"\n"]);return qn=function(){return e},e}function Un(){var e=Object(v.a)(["\n    text-align: center; \n    margin: 5px;\n    max-width: 100vw;\n    position: relative; \n    \n    "," {\n        max-width: 500px;\n        margin: auto;\n    }\n    \n    > img {\n        margin:auto;\n        max-width: 80%\n    }\n"]);return Un=function(){return e},e}var Rn=h.b.header(Un(),Y),Vn=h.b.h1(qn(),(function(e){return e.collapsed&&Object(h.a)(Yn())})),$n=h.b.nav(Hn()),Kn=h.b.nav(Ln()),Qn=function(e){var n=e.collapsed,t=e.onBack,a=r.a.createElement($n,{onClick:function(){t()}},r.a.createElement("img",{src:"img/back.svg",alt:"Go back"}));return r.a.createElement(Rn,null,r.a.createElement(zn.c,null,r.a.createElement(zn.a,{path:V},a),r.a.createElement(zn.a,{path:$},a)),r.a.createElement(Nn.b,{to:K},r.a.createElement(Vn,{collapsed:n},"Memory Board Game")),r.a.createElement(Kn,null,r.a.createElement(Nn.b,{to:$},r.a.createElement("img",{src:"img/info.svg"}))))};function Zn(){var e=Object(v.a)(["\n    margin: 24px; \n"]);return Zn=function(){return e},e}function et(){var e=Object(v.a)(["\n    justify-content: center;\n    align-items: center;\n   \n    & > img {\n        margin-top: -10px; \n        width: 250px;\n        height: 250px;\n   }\n   \n   & > * {\n    color: ",";\n    font-size: ",";\n    margin: 15px;\n    \n    & > a {\n        color: ","\n    }\n   }\n"]);return et=function(){return e},e}function nt(){var e=Object(v.a)(["\n    text-align:center; \n"]);return nt=function(){return e},e}var tt=h.b.section(nt()),at=h.b.div(et(),M,L,S),rt=h.b.div(Zn()),it=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={loaded:!1,user:null},a}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,n,t){return n!==this.state}},{key:"componentDidMount",value:function(){var e=this;Wn.a.get(Z).then((function(n){e.setState({user:n.data})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return r.a.createElement(tt,null,this.state.user&&r.a.createElement(He,null,"The author"),this.state.user&&r.a.createElement(at,null,r.a.createElement("img",{src:this.state.user.avatar_url}),r.a.createElement("div",null,this.state.user.name),r.a.createElement("div",null,r.a.createElement("a",{href:this.state.user.html_url},"@",this.state.user.login))),r.a.createElement(rt,null,r.a.createElement(Ae,{onClick:function(){window.confirm("You are about to delete the storage!")&&window.localStorage.clear()}},"Clear storage")))}}]),t}(a.Component);function ot(){var e=Object(v.a)(["\n    width: 100vw;\n    height: 3em;\n    display: block;\n    text-align: center;\n    bottom: 0;\n"]);return ot=function(){return e},e}var ct=h.b.footer(ot()),lt=function(){return r.a.createElement(ct,null,"(c) 2020")};function ut(){var e=Object(v.a)(["\n   position: relative; \n   flex-grow: 1; \n"]);return ut=function(){return e},e}function st(){var e=Object(v.a)(["\n    display: flex; \n    min-height: 100vh; \n    position: relative; \n    flex-direction: column;\n"]);return st=function(){return e},e}var mt=h.b.div(st()),dt=h.b.main(ut()),ft=function(e){var n=e.children,t=e.collapsed,a=r.a.createElement(Qn,{collapsed:null===t||void 0===t||t,onBack:function(){window.history.back()}});return r.a.createElement(Nn.a,{basename:"/"},r.a.createElement(mt,null,r.a.createElement(Xe,null,a),r.a.createElement(dt,null,n),r.a.createElement(lt,null)))},vt=function(){var e=setTimeout,n={};return setTimeout=function(t,a){var r=e(t,a);return n[r]=[Date.now(),a],r},function(e){var t=n[e];return t?Math.max(t[1]-Date.now()+t[0],0):NaN}}();function ht(e){console.log("saving game",e);var n,t=Object(m.a)(e.cards);try{for(t.s();!(n=t.n()).done;){var a=n.value;null!==a.timeout&&(a.remainining=vt(a.timeout),clearTimeout(a.timeout))}}catch(r){t.e(r)}finally{t.f()}console.log(e),window.localStorage.setItem(ee,JSON.stringify(e))}function pt(){return null!==JSON.parse(window.localStorage.getItem(ne))&&null!==JSON.parse(window.localStorage.getItem(ne)).welcome&&JSON.parse(window.localStorage.getItem(ne)).welcome}function bt(){window.localStorage.setItem(ne,JSON.stringify({welcome:!0}))}var gt=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={game:null,welcome:pt(),collapsed:!1,playerCount:!1,loaded:!1,activeCard:null},a}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=function(n){Object(s.a)(a,n);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),pt()||bt(),console.log("Multiplayer constructor"),n.state={game:null,welcome:pt(),collapsed:!0,playerCount:!1,activeCard:null},n}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){null!==this.state.game&&ht(this.state.game)}},{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,!this.state.loaded&&r.a.createElement(Jn,{onSelected:function(e){n.setState({loaded:!0}),null===e&&n.setState({playerCount:0}),n.setState({game:e})}}),this.state.loaded&&0===this.state.playerCount&&r.a.createElement(rn,{onFinished:function(e){return n.setState({playerCount:e})}}),this.state.loaded&&this.state.playerCount>0&&!this.state.game&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_n,{count:this.state.playerCount,onFinished:function(n){return function(n){var t=new re(16,n);e.setState({game:t}),ht(t)}(n)}})),this.state.loaded&&this.state.game&&this.state.game.players&&r.a.createElement(r.a.Fragment,null,this.state.game instanceof re&&r.a.createElement(Be,{game:this.state.game}),r.a.createElement(Ee,{game:this.state.game})))}}]),a}(a.Component);return r.a.createElement(ft,{collapsed:this.state.collapsed||this.state.welcome||window.location.hash!==Q,shouldFadeIn:!this.state.welcome},r.a.createElement(zn.c,null,r.a.createElement(zn.a,{path:V},r.a.createElement(n,null)),r.a.createElement(zn.a,{path:$},r.a.createElement(it,null)),r.a.createElement(zn.a,{path:K},!this.state.welcome&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Re,{onFinished:function(){e.setState({collapsed:!0}),setTimeout((function(){bt(),e.setState({welcome:JSON.parse(window.localStorage.getItem(ne)).welcome}),console.log(JSON.parse(window.localStorage.getItem(ne)).welcome)}),1e3)}})),this.state.welcome&&r.a.createElement(Dn,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b151a6fd.chunk.js.map