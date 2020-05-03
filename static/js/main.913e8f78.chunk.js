(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{18:function(n,e,t){n.exports=t(27)},23:function(n,e,t){},24:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),c=(t(23),t(3)),u=(t(24),t(4)),l=t(5),s=t(1),f=t(2);function d(){var n=Object(s.a)(["\n            @keyframes reject {\n                0% {transform: translateX(15px);}\n                50% {transform: translateX(-15px);}\n                100% {transform: translateX(0px)}\n            }\n            animation-name: reject;\n            animation-delay: ","s;\n            animation-duration: ","s;\n            animation-fill-mode: forwards;\n            "]);return d=function(){return n},n}var m="#6AA331",b="#ACD87E",v="#4a7524",h="#7AB341",p="#B8FF2C",g="#A0FF4F",j="#9CAF8C",O="#B7C59C",x="#96E6A1",E="#93D559",y="#1AD7E4",w="#E41ABB",C="#C90000",k="#482666",S="#FFD100",F="#12407B",B="#FF6200",T="#FFFFFF",z="#BCBDBC",W="36px",X="24px",A="@media (min-width: 1000px)",I="@media (max-width: 700px)",M="Hello and welcome to the memory game!",_="Select number of players",D="Insert name of Player",P=Object(f.a)(d(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||.5})),H=function(){function n(e,t){var r=this;if(Object(u.a)(this,n),this.isWon=function(){return r.count===r.discovered},console.log("Game constructor"),this.count=e,this.players=t,e%2===0){this.cards=[];for(var a=0;a<e/2;a++)for(var i=0;i<2;i++)this.cards.push(new N(a));this.activeCard=null,this.discovered=0,this.shuffle()}else console.error("Not even number of cards");console.log(this)}return Object(l.a)(n,[{key:"shuffle",value:function(){for(var n=this.cards.length;n>0;){var e=Math.floor(Math.random()*n);n--;var t=this.cards[n];this.cards[n]=this.cards[e],this.cards[e]=t}}}]),n}(),N=function(){function n(e){Object(u.a)(this,n),console.log("card constructor"),this.number=e,this.src=n.image[e],this.active=!1,this.id=n.getId(),this.discovered=!1,this.timeout=null}return Object(l.a)(n,[{key:"isTheSame",value:function(n){return this.valueEquals(n)&&this.id===n.id}},{key:"pairsWith",value:function(n){return this.valueEquals(n)&&!this.isTheSame(n)}},{key:"valueEquals",value:function(n){return null===n?null===this:!!n.hasOwnProperty("number")&&n.number===this.number}}]),n}();N.counter=0,N.getId=function(){return N.counter++},N.image={0:"".concat(B),1:"".concat(w),2:"".concat(C),3:"".concat(k),4:"".concat(S),5:"".concat(y),6:"".concat(F),7:"".concat(p)};var q=function n(e){Object(u.a)(this,n),this.name=e,this.score=0},U=Object(r.createContext)({cCard:null,setCCard:function(n){return n},welcome:!1,setWelcome:function(n){return n},players:[],setPlayers:function(n){return n}}),Y=function(n){var e=n.children,t=Object(r.useState)(null),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)(!1),s=Object(c.a)(l,2),f=s[0],d=s[1],m=Object(r.useState)([]),b=Object(c.a)(m,2),v=b[0],h=b[1];return a.a.createElement(U.Provider,{value:{cCard:o,setCCard:function(n){return u(n)},welcome:f,setWelcome:function(n){return d(n)},players:v,setPlayers:function(n){return h(n)}}},e)};function G(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    rx: 10;\n    fill: ",";\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    transform: rotateY(180deg);\n"]);return G=function(){return n},n}function J(){var n=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    rx: 10;\n    fill: url(",");\n    stroke: ","; \n    position: absolute;\n    backface-visibility: hidden;\n    \n    &:hover {\n        stroke: ","\n    }\n"]);return J=function(){return n},n}function L(){var n=Object(s.a)(["\n    perspective: 1000px;\n    position: relative; \n"]);return L=function(){return n},n}function R(){var n=Object(s.a)(["transform: rotateY(180deg);"]);return R=function(){return n},n}function $(){var n=Object(s.a)(["\n    position: relative;\n    fill: transparent;\n    transition: transform 0.6s;\n    transform-style: preserve-3d;\n    text-align: center;\n    ","\n"]);return $=function(){return n},n}function K(){var n=Object(s.a)(["\n    box-sizing: border-box;\n    width: 25%;\n    padding: 10px;\n    border-radius: 10px;\n    perspective: 1000px;\n"]);return K=function(){return n},n}var Q=f.b.div(K()),V=f.b.g($(),(function(n){return n.active&&Object(f.a)(R())})),Z=f.b.g(L()),nn=f.b.rect(J(),(function(n){return n.fill}),(function(n){return n.active?v:m}),v),en=f.b.rect(G(),(function(n){return n.src}),(function(n){return n.active?m:v})),tn=function(n){var e,t=n.card,i=n.clickHandler,o=n.timeoutHandler,u=Object(r.useState)(t.active),l=Object(c.a)(u,2),s=l[0],f=l[1],d=Object(r.useState)(!1),m=Object(c.a)(d,2),v=m[0],p=m[1],g=Object(r.useContext)(U).cCard;return a.a.createElement(Q,{onClick:function(){t.discovered||(i(t),f(!0),t.pairsWith(g)&&(console.log("clearing timeout"),clearTimeout(g.timeout)),setTimeout((function(){f(t.active),v||p(t.discovered)}),500),t.timeout=setTimeout((function(){f(t.discovered),o(t)}),1500),console.log(t))}},a.a.createElement("svg",{viewBox:"0 0 ".concat(160," ").concat(160)},a.a.createElement("defs",null,a.a.createElement("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"green_linear_gradient"},a.a.createElement("stop",{stopColor:b,offset:"0%"}),a.a.createElement("stop",{stopColor:h,offset:"100%"})),a.a.createElement("pattern",{id:"img1",patternUnits:"userSpaceOnUse",width:"100",height:"100"},a.a.createElement("image",{href:"wall.jpg",x:"0",y:"0",width:"100",height:"100"}))),a.a.createElement(Z,null,a.a.createElement(V,{active:t.isTheSame(g)||s||v,size:160},a.a.createElement(nn,{active:t.isTheSame(g)||s||v,fill:(e="green_linear_gradient","#".concat(e)),id:"card_bg_rectangle"}),a.a.createElement(en,{active:t.isTheSame(g)||s||v,src:t.src,fill:"#img1"})))))};function rn(){var n=Object(s.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    max-width: 700px;\n    padding: 10px;\n    background: ",";\n    border-radius: 4px;\n    border: 1px solid ",";\n    margin: 10px;\n"]);return rn=function(){return n},n}var an=f.b.main(rn(),T,j),on=function(n){var e=n.game,t=[],i=Object(r.useContext)(U).setCCard;e.cards.forEach((function(n){t.push(a.a.createElement(tn,{clickHandler:function(n){return function(n){n.active=!0,console.log(e),null===e.activeCard?(e.activeCard=n,i(n)):(e.activeCard.pairsWith(n)?(console.log("Match!"),!n.discovered&&e.activeCard.discovered&&(e.discovered+=2),e.activeCard.discovered=!0,n.discovered=!0):(e.activeCard.active=!1,n.active=!1),e.activeCard=null,i(null));console.log(e),e.isWon()&&(console.log("YOU WON!"),alert("You won!"))}(n)},card:n,timeoutHandler:function(n){return o(n)}}))}));var o=function(n){console.log("TIMEOUT",n),n.discovered||(n.active=!1),i(null),e.activeCard=null};return a.a.createElement(an,null,t)};function cn(){var n=Object(s.a)(['\n        width: 134px;\n        height: 87px; \n        background: url("img/logo_small.svg") no-repeat;\n        background-size: cover;\n    ']);return cn=function(){return n},n}function un(){var n=Object(s.a)(['\n    text-indent: -9999px;\n    margin: auto;\n    width: 401px; \n    height: 263px;\n    border: none;\n    background: url("img/logo_great.svg");\n    transition: 1s;\n    ',"\n"]);return un=function(){return n},n}function ln(){var n=Object(s.a)(["\n    text-align: center; \n    margin: 5px;\n    max-width: 100vw;\n    \n    "," {\n        max-width: 500px;\n        margin: auto;\n    }\n    \n    > img {\n        margin:auto;\n        max-width: 80%\n    }\n"]);return ln=function(){return n},n}var sn=f.b.header(ln(),I),fn=f.b.h1(un(),(function(n){return n.collapsed&&Object(f.a)(cn())})),dn=function(n){var e=n.collapsed;return a.a.createElement(sn,null,a.a.createElement(fn,{collapsed:e},"Memory Board Game"))};function mn(){var n=Object(s.a)(["\n    background: ",";\n    position: absolute;\n    height: 10px;\n    width: 100%;\n    right: 0;\n    bottom: 0;\n    margin-bottom: 4px;\n"]);return mn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    height: 0;\n    flex-grow: 1; \n    text-transform: uppercase;\n    padding: 20px;\n    font-size: ",";\n    color: ",";\n    \n    "," {\n        padding: 5px;\n        font-size: ",";\n    }\n"]);return bn=function(){return n},n}function vn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    text-align: center\n    "," {\n        position: absolute;\n    }\n"]);return vn=function(){return n},n}function hn(){var n=Object(s.a)(["\n    position: relative;\n    display: flex;\n    background: ","; \n    min-height: 100px;\n    "," {\n        padding: 6px 200px;\n    }\n    "," {\n        flex-direction: column; \n        padding: 20px;\n    }\n"]);return hn=function(){return n},n}var pn=f.b.div(hn(),T,A,I),gn=f.b.div(vn(),I),jn=f.b.div(bn(),W,(function(n){return n.active?x:z}),I,X),On=f.b.div(mn(),x),xn=function(n){var e=n.players;console.log(e);for(var t=Object(r.useState)(e[1]),i=Object(c.a)(t,2),o=i[0],u=(i[1],[]),l=1;l<=e.length;l++){var s=e[l];s&&u.push(a.a.createElement(gn,null,a.a.createElement(jn,{active:s===o},s.name)))}return a.a.createElement(pn,null,u,a.a.createElement(On,null))};function En(){var n=Object(s.a)(["\n        background-image: linear-gradient(to bottom , ",", ",");\n        cursor: not-allowed; \n        \n        &:hover {\n            opacity: 0.5;\n            ","\n        }\n    "]);return En=function(){return n},n}function yn(){var n=Object(s.a)(["\n    border: none; \n    height: 64px;\n    background-image: linear-gradient(to bottom , ",", ",");\n    min-width: 300px;\n    border-radius: 64px;\n    font-size: ",";\n    color: ",";\n    text-transform: uppercase;\n    font-family: 'Raleway', sans-serif;\n    opacity: 0.5; \n    transition: 1s; \n    cursor: pointer; \n    \n    "," {\n        min-width: 0;\n        width: 60vw; \n        opacity: 1;\n    }\n    \n    :hover {\n        opacity: 1;\n    }\n    \n    ","\n"]);return yn=function(){return n},n}var wn=f.b.button(yn(),p,g,X,T,I,(function(n){return n.disabled&&Object(f.a)(En(),j,O,P)})),Cn=function(n){var e=n.children,t=n.onClick,r=n.disabled;return a.a.createElement(wn,{disabled:r,type:"submit",onClick:function(n){!r&&t&&t(n)}},e)};function kn(){var n=Object(s.a)(["\n    @keyframes move-from-right {\n        from {transform: translateX(100%);}\n        to {transform: translateX(0%);}\n    }\n    animation-name: move-from-right;\n    transform: translateX(100%)\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n    @keyframes fade-in {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n    animation-name: fade-in;\n    opacity: 0;\n    animation-delay: ","s;\n    animation-duration: ","s;\n    animation-fill-mode: forwards;\n"]);return Sn=function(){return n},n}var Fn=f.b.div(Sn(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2})),Bn=f.b.div(kn(),(function(n){var e=n.delay;return e||0}),(function(n){var e=n.duration;return e||2}));function Tn(){var n=Object(s.a)(["\n    margin: 50px;\n    color: ","; \n    font-size: ",";\n    font-weight: 500;\n    text-align: center;\n    \n    "," {\n        font-size: ",";\n    }\n"]);return Tn=function(){return n},n}var zn=f.b.h2(Tn(),T,W,I,X);function Wn(){var n=Object(s.a)(["\n        transform: translateX(-100%);\n    "]);return Wn=function(){return n},n}function Xn(){var n=Object(s.a)(["\n    max-width: 100%;\n    text-align: center;\n    transition: 1s;\n    \n    ","\n"]);return Xn=function(){return n},n}var An=f.b.main(Xn(),(function(n){return n.finished&&Object(f.a)(Wn())})),In=function(n){var e=n.onFinished,t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],u=i[1];return a.a.createElement(An,{finished:o},a.a.createElement(Fn,{delay:1},a.a.createElement(zn,null,M)),a.a.createElement(Fn,{delay:2},a.a.createElement(Cn,{onClick:function(){return u(!0),void e()}},"Next")))};function Mn(){var n=Object(s.a)(["\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n        border: 3px solid ","\n    "]);return Mn=function(){return n},n}function _n(){var n=Object(s.a)(["\n    margin: 10px;\n    width: 136px;\n    height: 168px;\n    border-radius: 60px; \n    text-align: center;\n    background: ",";\n    color: ",";\n    font-size: ",";\n    \n    &, >p {\n        transition: 2s;\n    }\n    \n    > p {\n        opacity: 0.5;\n        height: 20%;\n        padding: 40%;\n    }\n    \n    &:hover {\n        > p {\n            opacity: 1;\n        }\n        background: ",";\n    }\n    \n    ","\n"]);return _n=function(){return n},n}var Dn=f.b.div(_n(),j,T,W,E,(function(n){return n.enabled&&Object(f.a)(Mn(),E,v)})),Pn=function(n){var e=n.value,t=n.onSelect,r=n.enabled;return a.a.createElement(Dn,{onClick:function(){return t(e)},enabled:r},a.a.createElement("p",null,e))};function Hn(){var n=Object(s.a)(["\n    width: 100%;\n    display: flex;\n    margin: auto;\n    justify-content: center;\n"]);return Hn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n        transform: translateX(0%);\n    "]);return Nn=function(){return n},n}function qn(){var n=Object(s.a)(["\n    transform: translateX(100%);\n    transition: 1s; \n    text-align: center;\n    ","\n"]);return qn=function(){return n},n}var Un=f.b.main(qn(),(function(n){return n.shouldMove&&Object(f.a)(Nn())})),Yn=f.b.div(Hn()),Gn=function(n){for(var e=n.onFinished,t=Object(r.useState)(!1),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)(0),s=Object(c.a)(l,2),f=s[0],d=s[1],m=function(n){d(n)},b=[],v=2;v<=4;v++)b.push(a.a.createElement(Pn,{value:v,enabled:f===v,onSelect:function(n){return m(n)}}));return setTimeout((function(){return u(!0)}),100),a.a.createElement(Un,{shouldMove:o},a.a.createElement(zn,null,_),a.a.createElement(Yn,null,b),a.a.createElement(Cn,{disabled:0===f,onClick:function(){e(f)}},"Next"))},Jn=t(15),Ln=t(7),Rn=t(16),$n=t(17);function Kn(){var n=Object(s.a)(["\n    width: 100vw;\n    position: absolute; \n    bottom: 0;\n"]);return Kn=function(){return n},n}function Qn(){var n=Object(s.a)(["\n    margin: 10px;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(s.a)(["\n        fill: ","\n    "]);return Vn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n        fill: ","\n    "]);return Zn=function(){return n},n}function ne(){var n=Object(s.a)(["\n    fill: ",";\n    transition: 1s;\n    \n    ","\n    \n    ","\n"]);return ne=function(){return n},n}function ee(){var n=Object(s.a)(["\n    // position: absolute; \n    // right: 50%;\n    // left: 50%; \n    display: flex;\n    align-items: center;\n    text-align: center; \n    justify-content: center;\n"]);return ee=function(){return n},n}function te(){var n=Object(s.a)(["\n    text-align: center; \n"]);return te=function(){return n},n}function re(){var n=Object(s.a)(["\n    display: block; \n    margin:  0 auto 64px;    \n    height: 64px;\n    min-width: 300px;\n    border-radius: 64px;\n    letter-spacing: 3px;\n    font-weight: 500;\n    font-size: ",";\n    text-align: center;\n    \n    color: ",";\n    padding: 10px;\n    border: 5px solid ","; \n    transition: 1s;\n    \n    "," {\n        &::placeholder {\n            font-size: ",";\n        }\n        min-width: 0;\n        width: 60vw; \n    }\n    \n    &::placeholder {\n        font-weight: 500;\n        opacity: 0.2;\n    }\n    \n    &:invalid {\n        border-color: ",";\n    }\n"]);return re=function(){return n},n}function ae(){var n=Object(s.a)(["\n        left: ","%;\n    "]);return ae=function(){return n},n}function ie(){var n=Object(s.a)(["\n    width: 100vw;\n    display: inline-block;\n    position: absolute; \n    \n    ","\n"]);return ie=function(){return n},n}function oe(){var n=Object(s.a)(["\n        transform: translateX(-","%);\n    "]);return oe=function(){return n},n}function ce(){var n=Object(s.a)(["\n    width: 100vw;\n    \n    ","\n    transition: 2s; \n"]);return ce=function(){return n},n}function ue(){var n=Object(s.a)(["\n    \n"]);return ue=function(){return n},n}var le=f.b.div(ue()),se=f.b.main(ce(),(function(n){var e=n.active;return e&&Object(f.a)(oe(),100*(e-1))})),fe=f.b.section(ie(),(function(n){var e=n.number;return e&&Object(f.a)(ae(),100*(e-1))})),de=f.b.input(re(),W,z,m,I,X,O),me=f.b.form(te()),be=f.b.div(ee()),ve=f.b.circle(ne(),T,(function(n){var e=n.disabled,t=n.active;return e&&!t&&Object(f.a)(Zn(),O)}),(function(n){return n.active&&Object(f.a)(Vn(),g)})),he=f.b.div(Qn()),pe=Object(f.b)(Bn)(Kn()),ge=function(n){var e=n.active,t=n.disabled;return a.a.createElement(he,null,a.a.createElement("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22"},a.a.createElement(ve,{cx:"11",cy:"11",r:"8",active:e,disabled:t})))},je=function(n){Object($n.a)(t,n);var e=Object(Rn.a)(t);function t(n){var r;return Object(u.a)(this,t),(r=e.call(this,n)).state={name:null,number:r.props.number},r.handleInputChange=r.handleInputChange.bind(Object(Ln.a)(r)),r}return Object(l.a)(t,[{key:"handleInputChange",value:function(n){"name"===n.target.name&&null!=this.state.name&&n.target.value.length>=10?this.state.isLong=!0:this.setState(Object(Jn.a)({},n.target.name,n.target.value))}},{key:"render",value:function(){var n=this,e=this.state.name;return a.a.createElement(fe,{number:this.state.number},a.a.createElement(zn,null,D," ",this.props.number),a.a.createElement(me,{onSubmit:function(e){n.props.onSubmit(n.state),e.preventDefault()}},a.a.createElement(de,{autoComplete:"off",autocomplete:"off",name:"name",value:e,onChange:this.handleInputChange,type:"text",placeholder:"Player ".concat(this.props.number," name"),required:!0}),a.a.createElement(Cn,{disabled:null===this.state.name||this.state.name.length<1},"Next")))}}]),t}(r.Component),Oe=function(n){for(var e=n.count,t=n.onFinished,i=Object(r.useState)(1),o=Object(c.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)([]),f=Object(c.a)(s,1)[0],d=[],m=[],b=function(n){f[n.number]=new q(n.name),n.number<e?l(n.number+1):n.number===e&&t&&t(f)},v=1;v<=e;v++){var h=void 0===f[v]||0===f[v].length;m.push(a.a.createElement(ge,{active:u===v,disabled:h})),d.push(a.a.createElement(je,{filled:v<u,number:v,active:u===v,onSubmit:function(n){return b(n)}}))}return a.a.createElement(le,null,a.a.createElement(Bn,null,a.a.createElement(se,{active:u},d)),a.a.createElement(pe,null,a.a.createElement(be,null,m)))};var xe=function(){var n=Object(r.useState)(null),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),u=Object(c.a)(o,2),l=u[0],s=u[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),m=d[0],b=d[1],v=Object(r.useState)(0),h=Object(c.a)(v,2),p=h[0],g=h[1];return a.a.createElement(Y,null,a.a.createElement(Fn,null,a.a.createElement(dn,{collapsed:m})),!l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(In,{onFinished:function(){b(!0),setTimeout((function(){s(!0)}),1e3)}})),l&&0===p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Gn,{onFinished:function(n){return g(n)}})),l&&p>0&&!t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Oe,{count:p,onFinished:function(n){return function(n){i(new H(16,n))}(n)}})),t&&t.players&&a.a.createElement(a.a.Fragment,null,a.a.createElement(xn,{players:t.players}),a.a.createElement(on,{game:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.913e8f78.chunk.js.map