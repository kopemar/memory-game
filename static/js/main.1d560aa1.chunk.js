(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{28:function(n,e,t){n.exports=t(41)},33:function(n,e,t){},34:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(21),o=t.n(i),c=(t(33),t(22)),u=t(6),l=t(8),s=t(14),m=t(15),d=(t(34),t(1)),f=t(2);function b(){var n=Object(d.a)(["\n            @keyframes reject {\n                0% {transform: translateX(15px);}\n                50% {transform: translateX(-15px);}\n                100% {transform: translateX(0px)}\n            }\n            animation-name: reject;\n            animation-delay: ","s;\n            animation-duration: ","s;\n            animation-fill-mode: forwards;\n            "]);return b=function(){return n},n}var v="img/img_1.svg",h="img/img_2.svg",p="img/img_3.svg",g="img/img_4.svg",x="img/img_5.svg",j="img/img_6.svg",E="img/img_7.svg",O="img/img_8.svg",y="#6AA331",w="#ACD87E",C="#4a7524",k="#7AB341",S="#B8FF2C",F="#A0FF4F",B="#9CAF8C",_="#B7C59C",z="#96E6A1",A="#93D559",X="#FFFFFF",D="#BCBDBC",T="#7AD9EF",I="#D7D7D7",M="#E7DEB1",W="#E7C3B1",G="#877467",H="36px",N="24px",P="@media (min-width: 1000px)",q="@media (max-width: 700px)",L="Hello and welcome to the memory game!",Y="Select number of players",J="Insert name of Player",U="/multiplayer",R="/",$=Object(f.a)(b(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||.5})),K=function(){function n(e,t){var a=this;if(Object(u.a)(this,n),this.isWon=function(){return a.count===a.discovered},console.log("Game constructor"),this.count=e,this.players=t,e%2===0){this.cards=[];for(var r=0;r<e/2;r++)for(var i=0;i<2;i++)this.cards.push(new Q(r));this.activeCard=null,this.discovered=0,this.shuffle()}else console.error("Not even number of cards");console.log(this)}return Object(l.a)(n,[{key:"shuffle",value:function(){for(var n=this.cards.length;n>0;){var e=Math.floor(Math.random()*n);n--;var t=this.cards[n];this.cards[n]=this.cards[e],this.cards[e]=t}}}]),n}(),Q=function(){function n(e){Object(u.a)(this,n),console.log("card constructor"),this.number=e,this.props=n.image[e],this.active=!1,this.id=n.getId(),this.discovered=!1,this.timeout=null}return Object(l.a)(n,[{key:"isTheSame",value:function(n){return this.valueEquals(n)&&this.id===n.id}},{key:"pairsWith",value:function(n){return this.valueEquals(n)&&!this.isTheSame(n)}},{key:"valueEquals",value:function(n){return void 0===n?void 0===this:null===n?null===this:!!n.hasOwnProperty("number")&&n.number===this.number}}]),n}();Q.counter=0,Q.getId=function(){return Q.counter++},Q.image={0:{color:z,src:v},1:{color:W,src:h},2:{color:I,src:p},3:{color:G,src:g},4:{color:M,src:x},5:{color:T,src:j},6:{color:I,src:E},7:{color:M,src:O}};var V=function n(e){Object(u.a)(this,n),this.name=e,this.score=0},Z=t(3),nn=Object(a.createContext)({activeCard:null,setActiveCard:function(){},welcome:!1,setWelcome:function(n){return n},players:[],setPlayers:function(n){return n},loaded:!1,setGameLoaded:function(){}});function en(){var n=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return en=function(){return n},n}function tn(){var n=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return tn=function(){return n},n}function an(){var n=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n    rx: 10;\n    fill: url(",");\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    \n    &:hover {\n        stroke: ","\n    }\n"]);return an=function(){return n},n}function rn(){var n=Object(d.a)(["\n    perspective: 1000px;\n    position: relative; \n"]);return rn=function(){return n},n}function on(){var n=Object(d.a)(["transform: rotateY(180deg);"]);return on=function(){return n},n}function cn(){var n=Object(d.a)(["\n    position: relative;\n    fill: transparent;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    text-align: center;\n    ","\n"]);return cn=function(){return n},n}function un(){var n=Object(d.a)(["\n    box-sizing: border-box;\n    width: 25%;\n    padding: 10px;\n    border-radius: 10px;\n    perspective: 1000px;\n"]);return un=function(){return n},n}var ln=f.b.div(un()),sn=f.b.g(cn(),(function(n){return n.active&&Object(f.a)(on())})),mn=f.b.g(rn()),dn=f.b.rect(an(),(function(n){return n.fill}),(function(n){return n.active?C:y}),C),fn=f.b.rect(tn(),(function(n){return n.src}),(function(n){return n.active?y:C})),bn=f.b.image(en()),vn=function(n){var e=n.card,t=n.clickHandler,i=n.timeoutHandler,o=Object(a.useState)(e.active),c=Object(Z.a)(o,2),u=c[0],l=c[1],s=Object(a.useState)(!1),m=Object(Z.a)(s,2),d=m[0],f=m[1],b=Object(a.useContext)(nn).activeCard;Object(a.useEffect)((function(){e.active=u}),[u,e.active]);var v;return r.a.createElement(ln,{onClick:function(){e.discovered||(t(e),l(!0),console.log("Handle Click",e),e.pairsWith(b)&&(console.log("clearing timeout"),clearTimeout(b.timeout)),e.timeout=setTimeout((function(){d||f(e.discovered),l(e.discovered),i(e)}),1500))}},r.a.createElement("svg",{viewBox:"0 0 ".concat(160," ").concat(160)},r.a.createElement("defs",null,r.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"green_linear_gradient"},r.a.createElement("stop",{stopColor:w,offset:"0%"}),r.a.createElement("stop",{stopColor:k,offset:"100%"})),r.a.createElement("pattern",{id:"img1",patternUnits:"userSpaceOnUse",width:"100",height:"100"},r.a.createElement("image",{href:"wall.jpg",x:"0",y:"0",width:"100",height:"100"}))),r.a.createElement(mn,null,r.a.createElement(sn,{active:e.isTheSame(b)||u||d,size:160},r.a.createElement(dn,{active:e.isTheSame(b)||u||d,fill:(v="green_linear_gradient","#".concat(v)),id:"card_bg_rectangle",width:"100%",height:"100%",rx:"10"}),r.a.createElement(fn,{active:e.isTheSame(b)||u||d,src:e.props.color,width:"100%",height:"100%",rx:"10"}),r.a.createElement(bn,{href:e.props.src,width:"100%",height:"100%"})))))};function hn(){var n=Object(d.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 700px;\n    padding: 10px;\n    background: ",";\n    border-radius: 4px;\n    border: 1px solid ",";\n    margin: 10px;\n"]);return hn=function(){return n},n}var pn=f.b.main(hn(),X,B),gn=function(n){var e=n.game,t=[],i=Object(a.useContext)(nn).setActiveCard;e.cards.forEach((function(n){t.push(r.a.createElement(vn,{clickHandler:function(n){return function(n){n.active=!0,console.log(e),null===e.activeCard?(e.activeCard=n,i(n)):(e.activeCard.pairsWith(n)?(!n.discovered&&e.activeCard.discovered&&(e.discovered+=2),e.activeCard.discovered=!0,n.discovered=!0):(e.activeCard.active=!1,n.active=!1),e.activeCard=null,i(null))}(n)},card:n,timeoutHandler:function(n){return o(n)}}))}));var o=function(n){n.discovered||(n.active=!1),i(null),e.activeCard=null};return r.a.createElement(pn,null,t)},xn=t(7),jn=t(9);function En(){var n=Object(d.a)(["\n    position: absolute; \n    left: 0;\n    top: 25%; \n    bottom: 75%;\n    margin-left: 30px;\n    cursor: pointer; \n"]);return En=function(){return n},n}function On(){var n=Object(d.a)(['\n        width: 134px;\n        height: 87px; \n        background: url("img/logo_small.svg") no-repeat;\n        background-size: cover;\n    ']);return On=function(){return n},n}function yn(){var n=Object(d.a)(['\n    display: inline-block; \n    text-indent: -9999px;\n    margin: auto;\n    width: 401px; \n    height: 263px;\n    border: none;\n    background: url("img/logo_great.svg");\n    cursor: pointer;\n    transition: 1s;\n    ',"\n"]);return yn=function(){return n},n}function wn(){var n=Object(d.a)(["\n    text-align: center; \n    margin: 5px;\n    max-width: 100vw;\n    position: relative; \n    \n    "," {\n        max-width: 500px;\n        margin: auto;\n    }\n    \n    > img {\n        margin:auto;\n        max-width: 80%\n    }\n"]);return wn=function(){return n},n}var Cn=f.b.header(wn(),q),kn=f.b.h1(yn(),(function(n){return n.collapsed&&Object(f.a)(On())})),Sn=f.b.nav(En()),Fn=function(n){var e=n.collapsed,t=n.onBack;return r.a.createElement(Cn,null,r.a.createElement(xn.c,null,r.a.createElement(xn.a,{path:U},r.a.createElement(Sn,{onClick:function(){t()}},r.a.createElement("img",{src:"img/back.svg"})))),r.a.createElement(jn.b,{to:R},r.a.createElement(kn,{collapsed:e},"Memory Board Game")))};function Bn(){var n=Object(d.a)(["\n    background: ",";\n    position: absolute;\n    height: 10px;\n    width: 100%;\n    right: 0;\n    bottom: 0;\n    margin-bottom: 4px;\n"]);return Bn=function(){return n},n}function _n(){var n=Object(d.a)(["\n    height: 0;\n    flex-grow: 1; \n    text-transform: uppercase;\n    padding: 20px;\n    font-size: ",";\n    color: ",";\n    \n    "," {\n        text-align: left;\n        padding: 5px;\n        font-size: ",";\n    }\n"]);return _n=function(){return n},n}function zn(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    text-align: center\n    "," {\n        position: absolute;\n    }\n"]);return zn=function(){return n},n}function An(){var n=Object(d.a)(["\n    position: relative;\n    display: flex;\n    background: ","; \n    min-height: 100px;\n    "," {\n        padding: 6px 200px;\n    }\n    "," {\n        flex-direction: column; \n        padding: 20px;\n    }\n    > * {\n        text-align: center; \n    }\n"]);return An=function(){return n},n}var Xn=f.b.div(An(),X,P,q),Dn=f.b.div(zn(),q),Tn=f.b.div(_n(),H,(function(n){return n.active?z:D}),q,N),In=f.b.div(Bn(),z),Mn=function(n){for(var e=n.players,t=Object(a.useState)(e[1]),i=Object(Z.a)(t,2),o=i[0],c=(i[1],[]),u=1;u<e.length;u++){var l=e[u];l&&c.push(r.a.createElement(Dn,null,r.a.createElement(Tn,{active:l===o},l.name)))}return r.a.createElement(Xn,null,c,r.a.createElement(In,null))};function Wn(){var n=Object(d.a)(["\n        background-image: linear-gradient(to bottom , ",", ",");\n        cursor: not-allowed; \n        \n        &:hover {\n            opacity: 0.5;\n            ","\n        }\n    "]);return Wn=function(){return n},n}function Gn(){var n=Object(d.a)(["\n    border: none; \n    height: 64px;\n    background-image: linear-gradient(to bottom , ",", ",");\n    min-width: 300px;\n    border-radius: 64px;\n    font-size: ",";\n    color: ",";\n    text-transform: uppercase;\n    font-family: 'Raleway', sans-serif;\n    opacity: 0.5; \n    transition: 1s; \n    cursor: pointer; \n    \n    "," {\n        min-width: 0;\n        width: 60vw; \n        opacity: 1;\n    }\n    \n    :hover {\n        opacity: 1;\n    }\n    \n    ","\n"]);return Gn=function(){return n},n}var Hn=f.b.button(Gn(),S,F,N,X,q,(function(n){return n.disabled&&Object(f.a)(Wn(),B,_,$)})),Nn=function(n){var e=n.children,t=n.onClick,a=n.disabled;return r.a.createElement(Hn,{disabled:a,type:"submit",onClick:function(n){!a&&t&&t(n)}},e)};function Pn(){var n=Object(d.a)(["\n    @keyframes move-from-right {\n        from {transform: translateX(100%);}\n        to {transform: translateX(0%);}\n    }\n    animation-name: move-from-right;\n    transform: translateX(100%)\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return Pn=function(){return n},n}function qn(){var n=Object(d.a)(["\n    @keyframes fade-in {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n    animation-name: fade-in;\n    opacity: 0;\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return qn=function(){return n},n}var Ln=f.b.div(qn(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2})),Yn=f.b.div(Pn(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2}));function Jn(){var n=Object(d.a)(["\n    margin: 50px;\n    color: ","; \n    font-size: ",";\n    font-weight: 500;\n    text-align: center;\n    \n    "," {\n        font-size: ",";\n    }\n"]);return Jn=function(){return n},n}var Un=f.b.h2(Jn(),X,H,q,N);function Rn(){var n=Object(d.a)(["\n        transform: translateX(-100%);\n    "]);return Rn=function(){return n},n}function $n(){var n=Object(d.a)(["\n    max-width: 100%;\n    text-align: center;\n    transition: 1s;\n    \n    ","\n"]);return $n=function(){return n},n}var Kn=f.b.main($n(),(function(n){return n.finished&&Object(f.a)(Rn())})),Qn=function(n){var e=n.onFinished,t=Object(a.useState)(!1),i=Object(Z.a)(t,2),o=i[0],c=i[1];return r.a.createElement(Kn,{finished:o},r.a.createElement(Ln,{delay:1},r.a.createElement(Un,null,L)),r.a.createElement(Ln,{delay:2},r.a.createElement(Nn,{onClick:function(){return c(!0),void e()}},"Next")))};function Vn(){var n=Object(d.a)(["\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n        border: 3px solid ","\n    "]);return Vn=function(){return n},n}function Zn(){var n=Object(d.a)(["\n    margin: 10px;\n    width: 136px;\n    height: 168px;\n    border-radius: 60px; \n    text-align: center;\n    background: ",";\n    color: ",";\n    font-size: ",";\n    \n    &, >p {\n        transition: 2s;\n    }\n    \n    > p {\n        opacity: 0.5;\n        height: 20%;\n        padding: 40%;\n    }\n    \n    &:hover {\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n    }\n    \n    ","\n"]);return Zn=function(){return n},n}var ne=f.b.div(Zn(),B,X,H,A,(function(n){return n.enabled&&Object(f.a)(Vn(),A,C)})),ee=function(n){var e=n.value,t=n.onSelect,a=n.enabled;return r.a.createElement(ne,{onClick:function(){return t(e)},enabled:a},r.a.createElement("p",null,e))};function te(){var n=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n"]);return te=function(){return n},n}function ae(){var n=Object(d.a)(["\n        transform: translateX(0%);\n    "]);return ae=function(){return n},n}function re(){var n=Object(d.a)(["\n    transform: translateX(100%);\n    transition: 1s; \n    text-align: center;\n    ","\n"]);return re=function(){return n},n}var ie=f.b.main(re(),(function(n){return n.shouldMove&&Object(f.a)(ae())})),oe=f.b.div(te()),ce=function(n){for(var e=n.onFinished,t=Object(a.useState)(!1),i=Object(Z.a)(t,2),o=i[0],c=i[1],u=Object(a.useState)(0),l=Object(Z.a)(u,2),s=l[0],m=l[1],d=function(n){m(n)},f=[],b=2;b<=4;b++)f.push(r.a.createElement(ee,{value:b,enabled:s===b,onSelect:function(n){return d(n)}}));return setTimeout((function(){return c(!0)}),100),r.a.createElement(ie,{shouldMove:o},r.a.createElement(Un,null,Y),r.a.createElement(oe,null,f),r.a.createElement(Nn,{disabled:0===s,onClick:function(){e(s)}},"Next"))},ue=t(27),le=t(13);function se(){var n=Object(d.a)(["\n    width: 100vw;\n    position: absolute; \n    bottom: 0;\n"]);return se=function(){return n},n}function me(){var n=Object(d.a)(["\n    margin: 10px;\n"]);return me=function(){return n},n}function de(){var n=Object(d.a)(["\n        fill: ","\n    "]);return de=function(){return n},n}function fe(){var n=Object(d.a)(["\n        fill: ","\n    "]);return fe=function(){return n},n}function be(){var n=Object(d.a)(["\n    fill: ",";\n    transition: 1s;\n    \n    ","\n    \n    ","\n"]);return be=function(){return n},n}function ve(){var n=Object(d.a)(["\n    // position: absolute; \n    // right: 50%;\n    // left: 50%; \n    display: flex;\n    align-items: center;\n    text-align: center; \n    justify-content: center;\n"]);return ve=function(){return n},n}function he(){var n=Object(d.a)(["\n    text-align: center; \n"]);return he=function(){return n},n}function pe(){var n=Object(d.a)(["\n    display: block; \n    margin:  0 auto 64px;    \n    height: 64px;\n    min-width: 300px;\n    border-radius: 64px;\n    letter-spacing: 3px;\n    font-weight: 500;\n    font-size: ",";\n    text-align: center;\n    \n    color: ",";\n    padding: 10px;\n    border: 5px solid ","; \n    transition: 1s;\n    \n    "," {\n        &::placeholder {\n            font-size: ",";\n        }\n        min-width: 0;\n        width: 60vw; \n    }\n    \n    &::placeholder {\n        font-weight: 500;\n        opacity: 0.2;\n    }\n    \n    &:invalid {\n        border-color: ",";\n    }\n"]);return pe=function(){return n},n}function ge(){var n=Object(d.a)(["\n        left: ","%;\n    "]);return ge=function(){return n},n}function xe(){var n=Object(d.a)(["\n    width: 100vw;\n    display: inline-block;\n    position: absolute; \n    \n    ","\n"]);return xe=function(){return n},n}function je(){var n=Object(d.a)(["\n        transform: translateX(-","%);\n    "]);return je=function(){return n},n}function Ee(){var n=Object(d.a)(["\n    width: 100vw;\n    \n    ","\n    transition: 2s; \n"]);return Ee=function(){return n},n}function Oe(){var n=Object(d.a)(["\n    \n"]);return Oe=function(){return n},n}var ye=f.b.div(Oe()),we=f.b.main(Ee(),(function(n){var e=n.active;return e&&Object(f.a)(je(),100*(e-1))})),Ce=f.b.section(xe(),(function(n){var e=n.number;return e&&Object(f.a)(ge(),100*(e-1))})),ke=f.b.input(pe(),H,D,y,q,N,_),Se=f.b.form(he()),Fe=f.b.div(ve()),Be=f.b.circle(be(),X,(function(n){var e=n.disabled,t=n.active;return e&&!t&&Object(f.a)(fe(),_)}),(function(n){return n.active&&Object(f.a)(de(),F)})),_e=f.b.div(me()),ze=Object(f.b)(Yn)(se()),Ae=function(n){var e=n.active,t=n.disabled;return r.a.createElement(_e,null,r.a.createElement("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22"},r.a.createElement(Be,{cx:"11",cy:"11",r:"8",active:e,disabled:t})))},Xe=function(n){Object(m.a)(t,n);var e=Object(s.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).state={name:null,number:a.props.number},a.handleInputChange=a.handleInputChange.bind(Object(le.a)(a)),a}return Object(l.a)(t,[{key:"handleInputChange",value:function(n){"name"===n.target.name&&null!=this.state.name&&n.target.value.length>=10?this.state.isLong=!0:this.setState(Object(ue.a)({},n.target.name,n.target.value))}},{key:"render",value:function(){var n=this,e=this.state.name;return r.a.createElement(Ce,{number:this.state.number},r.a.createElement(Un,null,J," ",this.props.number),r.a.createElement(Se,{onSubmit:function(e){n.props.onSubmit(n.state),e.preventDefault()}},r.a.createElement(ke,{autoComplete:"off",autocomplete:"off",name:"name",value:e,onChange:this.handleInputChange,type:"text",placeholder:"Player ".concat(this.props.number," name"),required:!0}),r.a.createElement(Nn,{disabled:null===this.state.name||this.state.name.length<1},"Next")))}}]),t}(a.Component),De=function(n){for(var e=n.count,t=n.onFinished,i=Object(a.useState)(1),o=Object(Z.a)(i,2),c=o[0],u=o[1],l=Object(a.useState)([]),s=Object(Z.a)(l,1)[0],m=[],d=[],f=function(n){s[n.number]=new V(n.name),n.number<e?u(n.number+1):n.number===e&&t&&t(s)},b=1;b<=e;b++){var v=void 0===s[b]||0===s[b].length;d.push(r.a.createElement(Ae,{active:c===b,disabled:v})),m.push(r.a.createElement(Xe,{filled:b<c,number:b,active:c===b,onSubmit:function(n){return f(n)}}))}return r.a.createElement(ye,null,r.a.createElement(Yn,null,r.a.createElement(we,{active:c},m)),r.a.createElement(ze,null,r.a.createElement(Fe,null,d)))};function Te(){var n=Object(d.a)(["\n    text-align: center; \n    \n    > button {\n        margin: auto 30px;\n       \n        "," {\n            margin-bottom: 30px;\n        }\n    }\n"]);return Te=function(){return n},n}var Ie=Object(f.b)(Yn)(Te(),q),Me=function(){return r.a.createElement(Ie,null,r.a.createElement(Un,null,"Choose type of the game"),r.a.createElement(Nn,{disabled:!0},"Single Player"),r.a.createElement(jn.b,{to:U},r.a.createElement(Nn,null,"Multiplayer")))};function We(){var n=Object(d.a)(["\n    text-align: center; \n    \n    > button {\n        margin: auto 30px;\n       \n        "," {\n            margin-bottom: 30px;\n        }\n    }\n"]);return We=function(){return n},n}var Ge=Object(f.b)(Yn)(We(),q),He=function(n){var e=n.game,t=n.onSelected;return r.a.createElement(Ge,null,r.a.createElement(Un,null,"Choose type of the game"),r.a.createElement(Nn,{disabled:null===e,onClick:function(n){return t(n)}},"Load Game"),r.a.createElement(Nn,{onClick:function(){return t(null)}},"New Game"))},Ne=function(n){Object(m.a)(t,n);var e=Object(s.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).state={game:null,welcome:!1,collapsed:!1,playerCount:!1,loaded:!1,activeCard:null},a}return Object(l.a)(t,[{key:"render",value:function(){var n=this;console.log(this.state);var e=function(e){return Object(c.a)(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(Fn,{context:n.state,collapsed:!0,onBack:function(){console.log("back"),window.history.back(),n.setState({loaded:!1})}}),!n.state.loaded&&r.a.createElement(He,{game:n.state.game,onSelected:function(e){console.log(n.state.loaded),n.setState({loaded:!0}),null===e&&(n.setState({playerCount:0}),n.setState({game:null}))}}),n.state.loaded&&0===n.state.playerCount&&r.a.createElement(ce,{onFinished:function(e){return n.setState({playerCount:e})}}),n.state.loaded&&n.state.playerCount>0&&!n.state.game&&r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{count:n.state.playerCount,onFinished:function(e){return function(e){n.setState({game:new K(16,e)})}(e)}})),n.state.loaded&&n.state.game&&n.state.game.players&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Mn,{players:n.state.game.players}),r.a.createElement(gn,{game:n.state.game})),"}")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(jn.a,null,r.a.createElement(xn.c,null,r.a.createElement(xn.a,{path:"/multiplayer"},r.a.createElement(e,null)),r.a.createElement(xn.a,{path:R},r.a.createElement(Ln,null,r.a.createElement(Fn,{collapsed:this.state.collapsed,onBack:function(){window.history.back(),n.setState({loaded:!1})}})),!this.state.welcome&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Qn,{onFinished:function(){n.setState({collapsed:!0}),setTimeout((function(){n.setState({welcome:!0}),console.log(n.state)}),1e3)}})),this.state.welcome&&r.a.createElement(Me,null)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.1d560aa1.chunk.js.map