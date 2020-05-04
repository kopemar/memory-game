(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{27:function(n,e,t){n.exports=t(40)},32:function(n,e,t){},33:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(19),o=t.n(i),c=(t(32),t(3)),u=(t(33),t(8)),l=t(11),s=t(1),m=t(2);function f(){var n=Object(s.a)(["\n            @keyframes reject {\n                0% {transform: translateX(15px);}\n                50% {transform: translateX(-15px);}\n                100% {transform: translateX(0px)}\n            }\n            animation-name: reject;\n            animation-delay: ","s;\n            animation-duration: ","s;\n            animation-fill-mode: forwards;\n            "]);return f=function(){return n},n}var d="img/img_1.svg",b="img/img_2.svg",v="img/img_3.svg",h="img/img_4.svg",p="img/img_5.svg",g="img/img_6.svg",j="img/img_7.svg",O="img/img_8.svg",x="#6AA331",E="#ACD87E",y="#4a7524",w="#7AB341",C="#B8FF2C",k="#A0FF4F",S="#9CAF8C",F="#B7C59C",_="#96E6A1",B="#93D559",z="#FFFFFF",T="#BCBDBC",W="#7AD9EF",X="#D7D7D7",D="#E7DEB1",I="#E7C3B1",M="#877467",A="36px",P="24px",H="@media (min-width: 1000px)",N="@media (max-width: 700px)",Y="Hello and welcome to the memory game!",q="Select number of players",U="Insert name of Player",G="/multiplayer",J="/",L=Object(m.a)(f(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||.5})),R=function(){function n(e,t){var r=this;if(Object(u.a)(this,n),this.isWon=function(){return r.count===r.discovered},console.log("Game constructor"),this.count=e,this.players=t,e%2===0){this.cards=[];for(var a=0;a<e/2;a++)for(var i=0;i<2;i++)this.cards.push(new $(a));this.activeCard=null,this.discovered=0,this.shuffle()}else console.error("Not even number of cards");console.log(this)}return Object(l.a)(n,[{key:"shuffle",value:function(){for(var n=this.cards.length;n>0;){var e=Math.floor(Math.random()*n);n--;var t=this.cards[n];this.cards[n]=this.cards[e],this.cards[e]=t}}}]),n}(),$=function(){function n(e){Object(u.a)(this,n),console.log("card constructor"),this.number=e,this.props=n.image[e],this.active=!1,this.id=n.getId(),this.discovered=!1,this.timeout=null}return Object(l.a)(n,[{key:"isTheSame",value:function(n){return this.valueEquals(n)&&this.id===n.id}},{key:"pairsWith",value:function(n){return this.valueEquals(n)&&!this.isTheSame(n)}},{key:"valueEquals",value:function(n){return null===n?null===this:!!n.hasOwnProperty("number")&&n.number===this.number}}]),n}();$.counter=0,$.getId=function(){return $.counter++},$.image={0:{color:_,src:d},1:{color:I,src:b},2:{color:X,src:v},3:{color:M,src:h},4:{color:D,src:p},5:{color:W,src:g},6:{color:X,src:j},7:{color:D,src:O}};var K=function n(e){Object(u.a)(this,n),this.name=e,this.score=0},Q=Object(r.createContext)({cCard:null,setCCard:function(n){return n},welcome:!1,setWelcome:function(n){return n},players:[],setPlayers:function(n){return n}}),V=function(n){var e=n.children,t=Object(r.useState)(null),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)(!1),s=Object(c.a)(l,2),m=s[0],f=s[1],d=Object(r.useState)([]),b=Object(c.a)(d,2),v=b[0],h=b[1];return a.a.createElement(Q.Provider,{value:{cCard:o,setCCard:function(n){return u(n)},welcome:m,setWelcome:function(n){return f(n)},players:v,setPlayers:function(n){return h(n)}}},e)};function Z(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return Z=function(){return n},n}function nn(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    rx: 10;\n    fill: url(",");\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    \n    &:hover {\n        stroke: ","\n    }\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n    perspective: 1000px;\n    position: relative; \n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(["transform: rotateY(180deg);"]);return rn=function(){return n},n}function an(){var n=Object(s.a)(["\n    position: relative;\n    fill: transparent;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    text-align: center;\n    ","\n"]);return an=function(){return n},n}function on(){var n=Object(s.a)(["\n    box-sizing: border-box;\n    width: 25%;\n    padding: 10px;\n    border-radius: 10px;\n    perspective: 1000px;\n"]);return on=function(){return n},n}var cn=m.b.div(on()),un=m.b.g(an(),(function(n){return n.active&&Object(m.a)(rn())})),ln=m.b.g(tn()),sn=m.b.rect(en(),(function(n){return n.fill}),(function(n){return n.active?y:x}),y),mn=m.b.rect(nn(),(function(n){return n.src}),(function(n){return n.active?x:y})),fn=m.b.image(Z()),dn=function(n){var e,t=n.card,i=n.clickHandler,o=n.timeoutHandler,u=Object(r.useState)(t.active),l=Object(c.a)(u,2),s=l[0],m=l[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),b=d[0],v=d[1],h=Object(r.useContext)(Q).cCard;return a.a.createElement(cn,{onClick:function(){t.discovered||(i(t),m(!0),t.pairsWith(h)&&(console.log("clearing timeout"),clearTimeout(h.timeout)),t.timeout=setTimeout((function(){b||v(t.discovered),m(t.discovered),o(t)}),1500),console.log(t))}},a.a.createElement("svg",{viewBox:"0 0 ".concat(160," ").concat(160)},a.a.createElement("defs",null,a.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"green_linear_gradient"},a.a.createElement("stop",{stopColor:E,offset:"0%"}),a.a.createElement("stop",{stopColor:w,offset:"100%"})),a.a.createElement("pattern",{id:"img1",patternUnits:"userSpaceOnUse",width:"100",height:"100"},a.a.createElement("image",{href:"wall.jpg",x:"0",y:"0",width:"100",height:"100"}))),a.a.createElement(ln,null,a.a.createElement(un,{active:t.isTheSame(h)||s||b,size:160},a.a.createElement(sn,{active:t.isTheSame(h)||s||b,fill:(e="green_linear_gradient","#".concat(e)),id:"card_bg_rectangle",width:"100%",height:"100%",rx:"10"}),a.a.createElement(mn,{active:t.isTheSame(h)||s||b,src:t.props.color,width:"100%",height:"100%",rx:"10"}),a.a.createElement(fn,{href:t.props.src,width:"100%",height:"100%"})))))};function bn(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 700px;\n    padding: 10px;\n    background: ",";\n    border-radius: 4px;\n    border: 1px solid ",";\n    margin: 10px;\n"]);return bn=function(){return n},n}var vn=m.b.main(bn(),z,S),hn=function(n){var e=n.game,t=[],i=Object(r.useContext)(Q).setCCard;e.cards.forEach((function(n){t.push(a.a.createElement(dn,{clickHandler:function(n){return function(n){n.active=!0,console.log(e),null===e.activeCard?(e.activeCard=n,i(n)):(e.activeCard.pairsWith(n)?(console.log("Match!"),!n.discovered&&e.activeCard.discovered&&(e.discovered+=2),e.activeCard.discovered=!0,n.discovered=!0):(e.activeCard.active=!1,n.active=!1),e.activeCard=null,i(null));console.log(e),e.isWon()&&(console.log("YOU WON!"),alert("You won!"))}(n)},card:n,timeoutHandler:function(n){return o(n)}}))}));var o=function(n){console.log("TIMEOUT",n),n.discovered||(n.active=!1),i(null),e.activeCard=null};return a.a.createElement(vn,null,t)},pn=t(6),gn=t(7);function jn(){var n=Object(s.a)(['\n        width: 134px;\n        height: 87px; \n        background: url("img/logo_small.svg") no-repeat;\n        background-size: cover;\n    ']);return jn=function(){return n},n}function On(){var n=Object(s.a)(['\n    text-indent: -9999px;\n    margin: auto;\n    width: 401px; \n    height: 263px;\n    border: none;\n    background: url("img/logo_great.svg");\n    cursor: pointer;\n    transition: 1s;\n    ',"\n"]);return On=function(){return n},n}function xn(){var n=Object(s.a)(["\n    text-align: center; \n    margin: 5px;\n    max-width: 100vw;\n    \n    "," {\n        max-width: 500px;\n        margin: auto;\n    }\n    \n    > img {\n        margin:auto;\n        max-width: 80%\n    }\n"]);return xn=function(){return n},n}var En=m.b.header(xn(),N),yn=m.b.h1(On(),(function(n){return n.collapsed&&Object(m.a)(jn())})),wn=function(n){var e=n.collapsed,t=Object(pn.f)();return console.log(t),a.a.createElement(En,null,a.a.createElement(gn.b,{to:"".concat(t.path)},a.a.createElement(yn,{collapsed:e},"Memory Board Game")))};function Cn(){var n=Object(s.a)(["\n    background: ",";\n    position: absolute;\n    height: 10px;\n    width: 100%;\n    right: 0;\n    bottom: 0;\n    margin-bottom: 4px;\n"]);return Cn=function(){return n},n}function kn(){var n=Object(s.a)(["\n    height: 0;\n    flex-grow: 1; \n    text-transform: uppercase;\n    padding: 20px;\n    font-size: ",";\n    color: ",";\n    \n    "," {\n        text-align: left;\n        padding: 5px;\n        font-size: ",";\n    }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    text-align: center\n    "," {\n        position: absolute;\n    }\n"]);return Sn=function(){return n},n}function Fn(){var n=Object(s.a)(["\n    position: relative;\n    display: flex;\n    background: ","; \n    min-height: 100px;\n    "," {\n        padding: 6px 200px;\n    }\n    "," {\n        flex-direction: column; \n        padding: 20px;\n    }\n    > * {\n        text-align: center; \n    }\n"]);return Fn=function(){return n},n}var _n=m.b.div(Fn(),z,H,N),Bn=m.b.div(Sn(),N),zn=m.b.div(kn(),A,(function(n){return n.active?_:T}),N,P),Tn=m.b.div(Cn(),_),Wn=function(n){for(var e=n.players,t=Object(r.useState)(e[1]),i=Object(c.a)(t,2),o=i[0],u=(i[1],[]),l=1;l<e.length;l++){var s=e[l];s&&u.push(a.a.createElement(Bn,null,a.a.createElement(zn,{active:s===o},s.name)))}return a.a.createElement(_n,null,u,a.a.createElement(Tn,null))};function Xn(){var n=Object(s.a)(["\n        background-image: linear-gradient(to bottom , ",", ",");\n        cursor: not-allowed; \n        \n        &:hover {\n            opacity: 0.5;\n            ","\n        }\n    "]);return Xn=function(){return n},n}function Dn(){var n=Object(s.a)(["\n    border: none; \n    height: 64px;\n    background-image: linear-gradient(to bottom , ",", ",");\n    min-width: 300px;\n    border-radius: 64px;\n    font-size: ",";\n    color: ",";\n    text-transform: uppercase;\n    font-family: 'Raleway', sans-serif;\n    opacity: 0.5; \n    transition: 1s; \n    cursor: pointer; \n    \n    "," {\n        min-width: 0;\n        width: 60vw; \n        opacity: 1;\n    }\n    \n    :hover {\n        opacity: 1;\n    }\n    \n    ","\n"]);return Dn=function(){return n},n}var In=m.b.button(Dn(),C,k,P,z,N,(function(n){return n.disabled&&Object(m.a)(Xn(),S,F,L)})),Mn=function(n){var e=n.children,t=n.onClick,r=n.disabled;return a.a.createElement(In,{disabled:r,type:"submit",onClick:function(n){!r&&t&&t(n)}},e)};function An(){var n=Object(s.a)(["\n    @keyframes move-from-right {\n        from {transform: translateX(100%);}\n        to {transform: translateX(0%);}\n    }\n    animation-name: move-from-right;\n    transform: translateX(100%)\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return An=function(){return n},n}function Pn(){var n=Object(s.a)(["\n    @keyframes fade-in {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n    animation-name: fade-in;\n    opacity: 0;\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return Pn=function(){return n},n}var Hn=m.b.div(Pn(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2})),Nn=m.b.div(An(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2}));function Yn(){var n=Object(s.a)(["\n    margin: 50px;\n    color: ","; \n    font-size: ",";\n    font-weight: 500;\n    text-align: center;\n    \n    "," {\n        font-size: ",";\n    }\n"]);return Yn=function(){return n},n}var qn=m.b.h2(Yn(),z,A,N,P);function Un(){var n=Object(s.a)(["\n        transform: translateX(-100%);\n    "]);return Un=function(){return n},n}function Gn(){var n=Object(s.a)(["\n    max-width: 100%;\n    text-align: center;\n    transition: 1s;\n    \n    ","\n"]);return Gn=function(){return n},n}var Jn=m.b.main(Gn(),(function(n){return n.finished&&Object(m.a)(Un())})),Ln=function(n){var e=n.onFinished,t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],u=i[1];return a.a.createElement(Jn,{finished:o},a.a.createElement(Hn,{delay:1},a.a.createElement(qn,null,Y)),a.a.createElement(Hn,{delay:2},a.a.createElement(Mn,{onClick:function(){return u(!0),void e()}},"Next")))};function Rn(){var n=Object(s.a)(["\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n        border: 3px solid ","\n    "]);return Rn=function(){return n},n}function $n(){var n=Object(s.a)(["\n    margin: 10px;\n    width: 136px;\n    height: 168px;\n    border-radius: 60px; \n    text-align: center;\n    background: ",";\n    color: ",";\n    font-size: ",";\n    \n    &, >p {\n        transition: 2s;\n    }\n    \n    > p {\n        opacity: 0.5;\n        height: 20%;\n        padding: 40%;\n    }\n    \n    &:hover {\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n    }\n    \n    ","\n"]);return $n=function(){return n},n}var Kn=m.b.div($n(),S,z,A,B,(function(n){return n.enabled&&Object(m.a)(Rn(),B,y)})),Qn=function(n){var e=n.value,t=n.onSelect,r=n.enabled;return a.a.createElement(Kn,{onClick:function(){return t(e)},enabled:r},a.a.createElement("p",null,e))};function Vn(){var n=Object(s.a)(["\n    width: 100%;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n        transform: translateX(0%);\n    "]);return Zn=function(){return n},n}function ne(){var n=Object(s.a)(["\n    transform: translateX(100%);\n    transition: 1s; \n    text-align: center;\n    ","\n"]);return ne=function(){return n},n}var ee=m.b.main(ne(),(function(n){return n.shouldMove&&Object(m.a)(Zn())})),te=m.b.div(Vn()),re=function(n){for(var e=n.onFinished,t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)(0),s=Object(c.a)(l,2),m=s[0],f=s[1],d=function(n){f(n)},b=[],v=2;v<=4;v++)b.push(a.a.createElement(Qn,{value:v,enabled:m===v,onSelect:function(n){return d(n)}}));return setTimeout((function(){return u(!0)}),100),a.a.createElement(ee,{shouldMove:o},a.a.createElement(qn,null,q),a.a.createElement(te,null,b),a.a.createElement(Mn,{disabled:0===m,onClick:function(){e(m)}},"Next"))},ae=t(24),ie=t(13),oe=t(25),ce=t(26);function ue(){var n=Object(s.a)(["\n    width: 100vw;\n    position: absolute; \n    bottom: 0;\n"]);return ue=function(){return n},n}function le(){var n=Object(s.a)(["\n    margin: 10px;\n"]);return le=function(){return n},n}function se(){var n=Object(s.a)(["\n        fill: ","\n    "]);return se=function(){return n},n}function me(){var n=Object(s.a)(["\n        fill: ","\n    "]);return me=function(){return n},n}function fe(){var n=Object(s.a)(["\n    fill: ",";\n    transition: 1s;\n    \n    ","\n    \n    ","\n"]);return fe=function(){return n},n}function de(){var n=Object(s.a)(["\n    // position: absolute; \n    // right: 50%;\n    // left: 50%; \n    display: flex;\n    align-items: center;\n    text-align: center; \n    justify-content: center;\n"]);return de=function(){return n},n}function be(){var n=Object(s.a)(["\n    text-align: center; \n"]);return be=function(){return n},n}function ve(){var n=Object(s.a)(["\n    display: block; \n    margin:  0 auto 64px;    \n    height: 64px;\n    min-width: 300px;\n    border-radius: 64px;\n    letter-spacing: 3px;\n    font-weight: 500;\n    font-size: ",";\n    text-align: center;\n    \n    color: ",";\n    padding: 10px;\n    border: 5px solid ","; \n    transition: 1s;\n    \n    "," {\n        &::placeholder {\n            font-size: ",";\n        }\n        min-width: 0;\n        width: 60vw; \n    }\n    \n    &::placeholder {\n        font-weight: 500;\n        opacity: 0.2;\n    }\n    \n    &:invalid {\n        border-color: ",";\n    }\n"]);return ve=function(){return n},n}function he(){var n=Object(s.a)(["\n        left: ","%;\n    "]);return he=function(){return n},n}function pe(){var n=Object(s.a)(["\n    width: 100vw;\n    display: inline-block;\n    position: absolute; \n    \n    ","\n"]);return pe=function(){return n},n}function ge(){var n=Object(s.a)(["\n        transform: translateX(-","%);\n    "]);return ge=function(){return n},n}function je(){var n=Object(s.a)(["\n    width: 100vw;\n    \n    ","\n    transition: 2s; \n"]);return je=function(){return n},n}function Oe(){var n=Object(s.a)(["\n    \n"]);return Oe=function(){return n},n}var xe=m.b.div(Oe()),Ee=m.b.main(je(),(function(n){var e=n.active;return e&&Object(m.a)(ge(),100*(e-1))})),ye=m.b.section(pe(),(function(n){var e=n.number;return e&&Object(m.a)(he(),100*(e-1))})),we=m.b.input(ve(),A,T,x,N,P,F),Ce=m.b.form(be()),ke=m.b.div(de()),Se=m.b.circle(fe(),z,(function(n){var e=n.disabled,t=n.active;return e&&!t&&Object(m.a)(me(),F)}),(function(n){return n.active&&Object(m.a)(se(),k)})),Fe=m.b.div(le()),_e=Object(m.b)(Nn)(ue()),Be=function(n){var e=n.active,t=n.disabled;return a.a.createElement(Fe,null,a.a.createElement("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22"},a.a.createElement(Se,{cx:"11",cy:"11",r:"8",active:e,disabled:t})))},ze=function(n){Object(ce.a)(t,n);var e=Object(oe.a)(t);function t(n){var r;return Object(u.a)(this,t),(r=e.call(this,n)).state={name:null,number:r.props.number},r.handleInputChange=r.handleInputChange.bind(Object(ie.a)(r)),r}return Object(l.a)(t,[{key:"handleInputChange",value:function(n){"name"===n.target.name&&null!=this.state.name&&n.target.value.length>=10?this.state.isLong=!0:this.setState(Object(ae.a)({},n.target.name,n.target.value))}},{key:"render",value:function(){var n=this,e=this.state.name;return a.a.createElement(ye,{number:this.state.number},a.a.createElement(qn,null,U," ",this.props.number),a.a.createElement(Ce,{onSubmit:function(e){n.props.onSubmit(n.state),e.preventDefault()}},a.a.createElement(we,{autoComplete:"off",autocomplete:"off",name:"name",value:e,onChange:this.handleInputChange,type:"text",placeholder:"Player ".concat(this.props.number," name"),required:!0}),a.a.createElement(Mn,{disabled:null===this.state.name||this.state.name.length<1},"Next")))}}]),t}(r.Component),Te=function(n){for(var e=n.count,t=n.onFinished,i=Object(r.useState)(1),o=Object(c.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)([]),m=Object(c.a)(s,1)[0],f=[],d=[],b=function(n){m[n.number]=new K(n.name),n.number<e?l(n.number+1):n.number===e&&t&&t(m)},v=1;v<=e;v++){var h=void 0===m[v]||0===m[v].length;d.push(a.a.createElement(Be,{active:u===v,disabled:h})),f.push(a.a.createElement(ze,{filled:v<u,number:v,active:u===v,onSubmit:function(n){return b(n)}}))}return a.a.createElement(xe,null,a.a.createElement(Nn,null,a.a.createElement(Ee,{active:u},f)),a.a.createElement(_e,null,a.a.createElement(ke,null,d)))};function We(){var n=Object(s.a)(["\n    text-align: center; \n    \n    > button {\n        margin: auto 30px;\n       \n        "," {\n            margin-bottom: 30px;\n        }\n    }\n"]);return We=function(){return n},n}var Xe=Object(m.b)(Nn)(We(),N),De=function(){return a.a.createElement(Xe,null,a.a.createElement(qn,null,"Choose type of the game"),a.a.createElement(Mn,{disabled:!0},"Single Player"),a.a.createElement(gn.b,{to:G},a.a.createElement(Mn,null,"Multiplayer")))};var Ie=function(){var n=Object(r.useState)(null),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),u=Object(c.a)(o,2),l=u[0],s=u[1],m=Object(r.useState)(!1),f=Object(c.a)(m,2),d=f[0],b=f[1],v=Object(r.useState)(0),h=Object(c.a)(v,2),p=h[0],g=h[1],j=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(wn,{collapsed:!0}),0===p&&a.a.createElement(re,{onFinished:function(n){return g(n)}}),p>0&&!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Te,{count:p,onFinished:function(n){return function(n){i(new R(16,n))}(n)}})),t&&t.players&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Wn,{players:t.players}),a.a.createElement(hn,{game:t})))};return a.a.createElement(V,null,a.a.createElement(gn.a,null,a.a.createElement(pn.c,null,a.a.createElement(pn.a,{path:G},a.a.createElement(j,null)),a.a.createElement(pn.a,{path:J},a.a.createElement(Hn,null,a.a.createElement(wn,{collapsed:d})),!l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ln,{onFinished:function(){b(!0),setTimeout((function(){s(!0)}),1e3)}})),l&&a.a.createElement(De,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.305c6845.chunk.js.map