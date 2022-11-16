(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6958,8575,308,3567,845,3920],{2359:function(e,n,t){"use strict";function r(e){const{wasSelected:n,enabled:t,isSelected:r,mode:o="unmount"}=e;return!t||(!!r||!("keepMounted"!==o||!n))}t.d(n,{k:function(){return r}})},7174:function(e,n,t){"use strict";t.d(n,{hE:function(){return a},h_:function(){return v}});var r=t(7294),o=t(8387),c=t(4040),i=t(3935),[u,s]=(0,o.k)({strict:!1,name:"PortalManagerContext"});function a(e){const{children:n,zIndex:t}=e;return r.createElement(u,{value:{zIndex:t}},n)}a.displayName="PortalManager";var[l,f]=(0,o.k)({strict:!1,name:"PortalContext"}),d="chakra-portal",h=e=>r.createElement("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0}},e.children),p=e=>{const{appendToParentPortal:n,children:t}=e,[o,u]=(0,r.useState)(null),a=(0,r.useRef)(null),[,p]=(0,r.useState)({});(0,r.useEffect)((()=>p({})),[]);const m=f(),v=s();(0,c.G)((()=>{if(!o)return;const e=o.ownerDocument,t=n?m??e.body:e.body;if(!t)return;a.current=e.createElement("div"),a.current.className=d,t.appendChild(a.current),p({});const r=a.current;return()=>{t.contains(r)&&t.removeChild(r)}}),[o]);const x=(null==v?void 0:v.zIndex)?r.createElement(h,{zIndex:null==v?void 0:v.zIndex},t):t;return a.current?(0,i.createPortal)(r.createElement(l,{value:a.current},x),a.current):r.createElement("span",{ref:e=>{e&&u(e)}})},m=e=>{const{children:n,containerRef:t,appendToParentPortal:o}=e,u=t.current,s=u??("undefined"!==typeof window?document.body:void 0),a=(0,r.useMemo)((()=>{const e=null==u?void 0:u.ownerDocument.createElement("div");return e&&(e.className=d),e}),[u]),[,f]=(0,r.useState)({});return(0,c.G)((()=>f({})),[]),(0,c.G)((()=>{if(a&&s)return s.appendChild(a),()=>{s.removeChild(a)}}),[a,s]),s&&a?(0,i.createPortal)(r.createElement(l,{value:o?a:null},n),a):null};function v(e){const{containerRef:n,...t}=e;return n?r.createElement(m,{containerRef:n,...t}):r.createElement(p,{...t})}v.defaultProps={appendToParentPortal:!0},v.className=d,v.selector=".chakra-portal",v.displayName="Portal"},1179:function(e,n,t){"use strict";t.d(n,{h:function(){return i}});var r=t(7294),o=t(3926),c=t(5771);function i(e){const{isOpen:n,ref:t}=e,[i,u]=(0,r.useState)(n),[s,a]=(0,r.useState)(!1);(0,r.useEffect)((()=>{s||(u(n),a(!0))}),[n,s,i]),(0,o.O)((()=>t.current),"animationend",(()=>{u(n)}));return{present:!(!n&&!i),onComplete(){var e;const n=new((0,c.kR)(t.current).CustomEvent)("animationend",{bubbles:!0});null==(e=t.current)||e.dispatchEvent(n)}}}},6181:function(e,n,t){"use strict";t.d(n,{C:function(){return s},G:function(){return l}});var r=t(5771),o=t(3926),c=t(4040),i=t(5314),u=t(7294);function s(e,n){const{shouldFocus:t,visible:o,focusRef:c}=n,u=t&&!o;(0,i.r)((()=>{if(!u)return;if(function(e){const n=e.current;if(!n)return!1;const t=(0,r.vY)(n);return!!t&&!n.contains(t)&&!!(0,r.Wq)(t)}(e))return;const n=(null==c?void 0:c.current)||e.current;n&&requestAnimationFrame((()=>{n.focus()}))}),[u,e,c])}var a={preventScroll:!0,shouldFocus:!1};function l(e,n=a){const{focusRef:t,preventScroll:s,shouldFocus:l,visible:f}=n,d="current"in e?e.current:e;const h=l&&f,p=(0,u.useRef)(h),m=(0,u.useRef)(f);(0,c.G)((()=>{!m.current&&f&&(p.current=h),m.current=f}),[f,h]);const v=(0,u.useCallback)((()=>{if(f&&d&&p.current&&(p.current=!1,!d.contains(document.activeElement)))if(null==t?void 0:t.current)requestAnimationFrame((()=>{var e;null==(e=t.current)||e.focus({preventScroll:s})}));else{const e=(0,r.t5)(d);e.length>0&&requestAnimationFrame((()=>{e[0].focus({preventScroll:s})}))}}),[f,s,d,t]);(0,i.r)((()=>{v()}),[v]),(0,o.O)(d,"transitionend",v)}},5314:function(e,n,t){"use strict";t.d(n,{r:function(){return o}});var r=t(7294);function o(e,n){const t=(0,r.useRef)(!1),o=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(t.current&&o.current)return e();o.current=!0}),n),(0,r.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[])}},8392:function(e,n,t){"use strict";var r=t(5893),o=t(7294),c=t(1163),i=t(315),u=t(7741);n.Z=function(e){var n=e.children,t=void 0===n?"Reset":n,s=e.message,a=o.useContext(i.StoryContext),l=a.persistor,f=a.config,d=(0,c.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u.zx,{colorScheme:"red",onClick:function(){return function(e,n,t,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Restart story from the beginning?",c="/out/"+r.basePath+n.identifier;e?confirm(o)&&t.flush().then((function(){t.pause(),localStorage.clear(),window.location.replace(c)})):t.flush().then((function(){t.pause(),localStorage.clear(),window.location.reload()}))}(!0,f,l,d,s)},children:t})})}},8065:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return c}});var r=t(5893),o=(t(7294),t(3387)),c=function(e){var n=e.body;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Header,{}),n]})}},3621:function(e,n,t){"use strict";t.r(n),t.d(n,{BlockchainContext:function(){return g},TokenStatus:function(){return r},useBlockchainContext:function(){return C}});var r,o=t(7568),c=t(828),i=t(4051),u=t.n(i),s=t(5893),a=t(7294),l=t(241),f=t(6076),d=t(7948),h=t(333),p=t(3920),m=t(3454);!function(e){e.Burned="BURN",e.Minted="MINT",e.Waiting="WAIT"}(r||(r={}));var v={metamask:void 0,contractConnection:void 0,getWriteConnection:function(){},clearWriteConnection:function(){},signer:void 0,chainId:"0x0",latestBlockNum:0,loadSigner:function(){},changeChainManually:function(e){},tokenInfo:new Map,setTokenInfo:function(e){},isOwner:!1,isSubscriber:!1},x=a.createContext(v),C=function(){return a.useContext(x)},g=function(e){var n=e.child,t=window&&window.ethereum,r=(0,c.Z)(a.useState(),2),i=r[0],v=r[1],C=(0,c.Z)(a.useState(),2),g=C[0],E=C[1],P=(0,c.Z)(a.useState(),2),S=P[0],k=P[1],w=(0,c.Z)(a.useState("0x0"),2),b=w[0],A=w[1],R=(0,c.Z)(a.useState(0),2),N=R[0],I=R[1],y=(0,c.Z)(a.useState(new Map),2),_=y[0],T=y[1],M=(0,c.Z)(a.useState(!1),2),O=M[0],j=M[1],z=(0,c.Z)(a.useState(!1),2),D=z[0];z[1];t&&t.on("chainChanged",(function(e){window&&window.location.reload()})),t&&t.on("accountsChanged",(function(e){e[0]!==S&&(S||g)&&B()}));var H=function(){var e=(0,o.Z)(u().mark((function e(){var n,r,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&p.SUPPORTED_CHAINS.includes(b)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=p.CONTRACT_INFO[b],r=new l.Q(t),o=r.getSigner(),c=new f.CH(n.address,n.abi,o),E(c),k(o._address),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=g,e.t0){e.next=5;break}return e.next=4,H();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=(0,o.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:(n=e.sent).length>0&&(r=n[0],k(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){E(void 0),k(void 0)},F=function(){if(p.SUPPORTED_CHAINS.includes(b)&&(!i||i.provider.network.chainId!==Number(b))){var e,n=p.CONTRACT_INFO[b];t?e=new l.Q(t):(e=d.yl(Number(b),{etherscan:m.env.REACT_APP_ETHERSCAN_API_KEY,infura:"-",alchemy:m.env.REACT_APP_ALCHEMY_API_KEY,pocket:"-",ankr:"-"}),e=new h.D(Number(b),m.env.REACT_APP_ALCHEMY_API_KEY));var r=new f.CH(n.address,n.abi,e);r.name().then((function(e){e===p.CONTRACT_NAME&&v(r)}))}},G={metamask:t,chainId:b,signer:S,contractConnection:i,getWriteConnection:L,clearWriteConnection:B,latestBlockNum:N,loadSigner:Z,changeChainManually:function(e){A(e),B(),F(),T(new Map)},tokenInfo:_,setTokenInfo:T,isOwner:O,isSubscriber:D};return a.useEffect((function(){function e(){return(e=(0,o.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_chainId"});case 2:n=e.sent,A(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?function(){e.apply(this,arguments)}():A("0x5")}),[]),a.useEffect((function(){F()}),[b]),a.useEffect((function(){i&&(i.on("Transfer",(function(e,n,t,r){I(r.blockNumber)})),S&&i.balanceOf(S).then((function(e){j(e>0)})))}),[i]),(0,s.jsx)(x.Provider,{value:G,children:n})}},5551:function(e,n,t){"use strict";t.r(n),t.d(n,{ColorModeSwitcher:function(){return s}});var r=t(6042),o=t(5893),c=(t(7294),t(8395)),i=t(7741),u=t(9583),s=function(e){var n=(0,c.If)().toggleColorMode,t=(0,c.ff)("dark","light"),s=(0,c.ff)(u.TLr,u.Mei);return(0,o.jsx)(i.hU,(0,r.Z)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:n,icon:(0,o.jsx)(s,{}),"aria-label":"Switch to ".concat(t," mode")},e))}},3387:function(e,n,t){"use strict";t.r(n),t.d(n,{Header:function(){return v}});var r=t(5893),o=(t(7294),t(4373)),c=t(7927),i=t(5298),u=t(7026),s=t(7741),a=t(2494),l=t(845),f=t(3621),d=t(3920),h=t(5551),p=t(3567),m=t(8392),v=function(){var e=(0,f.useBlockchainContext)(),n=e.metamask,t=e.chainId,v=e.loadSigner,x=e.signer,C=e.clearWriteConnection,g=e.changeChainManually,E=(0,p.useNavContext)(),P=E.currPage,S=E.setCurrPage,k=function(){var e=l.default.colors.yellow[400];return"0x0"!==t&&(e=l.default.colors.green[500]),(0,a.IU)({displayName:"Status",viewBox:"0 0 200 200",path:(0,r.jsx)("path",{fill:e,d:"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"})})},w=function(){return(0,r.jsxs)(o.Vp,{size:"lg",variant:"subtle",colorScheme:"cyan",children:[(0,r.jsx)(o.AD,{boxSize:"12px",as:k()}),(0,r.jsxs)(o.Sn,{children:[d.CHAIN_ID_TO_NAME[t],x&&" as 0x...".concat(x.substring(x.length-4,x.length))]})]})},b=function(){S(p.Pages.Home)};return(0,r.jsxs)(c.kC,{minWidth:"100%",maxHeight:"max-content",alignItems:"center",gap:"2",padding:"20px",children:[(0,r.jsx)(c.X6,{as:"h1",size:"lg",children:"P O E M"}),(0,r.jsx)(c.LZ,{}),(0,r.jsxs)(c.Ug,{children:[function(){var e=[];return P===p.Pages.About&&e.push((0,r.jsx)(m.Z,{},"reset")),P!==p.Pages.Home&&e.push((0,r.jsx)(s.zx,{variant:"outline",colorScheme:"yellow",onClick:b,children:"Home"},"nav")),e}(),!x&&(0,r.jsx)(u.u,{label:"Please install Metamask to connect your wallet.",shouldWrapChildren:!0,isDisabled:n,children:(0,r.jsx)(s.zx,{onClick:v,disabled:!n,children:"Connect Wallet"})}),x&&(0,r.jsx)(s.zx,{onClick:C,children:"Disconnect Wallet"}),n&&(0,r.jsx)(u.u,{label:"0x0"===t?"Do you have Metamask installed? This webside currently uses Metamask to connect to the blockchain.":"You can change networks using the Metamask extension. Support for non-Metamask users is in progress.",children:w()}),!n&&function(){var e=d.SUPPORTED_CHAINS.map((function(e){return(0,r.jsx)(i.sN,{onClick:function(){return g(e)},children:d.CHAIN_ID_TO_NAME[e]},e)}));return(0,r.jsxs)(i.v2,{children:[(0,r.jsx)(i.j2,{children:w()}),(0,r.jsx)(i.qy,{children:e})]})}(),(0,r.jsx)(h.ColorModeSwitcher,{})]})]})}},3567:function(e,n,t){"use strict";t.r(n),t.d(n,{NavContext:function(){return i},Pages:function(){return r},TutorialStep:function(){return o},useNavContext:function(){return u}});var r,o,c=t(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(r||(r={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(o||(o={}));var i=c.createContext({currPage:r.About,setCurrPage:function(e){},tutorialState:o.None,setTutorialState:function(e){}}),u=function(){return c.useContext(i)}},845:function(e,n,t){"use strict";t.r(n);var r=t(1677),o=t(3920),c=(0,r.B1)({config:{initialColorMode:"dark",useSystemColorMode:!1},styles:{global:{p:{paddingBottom:o.PARAGRAPH_SPACING},ul:{paddingLeft:50,paddingBottom:o.PARAGRAPH_SPACING}}}});n.default=c},3920:function(e,n,t){"use strict";t.r(n),t.d(n,{CHAIN_ID_TO_NAME:function(){return c},CONTRACT_INFO:function(){return s},CONTRACT_NAME:function(){return u},PARAGRAPH_SPACING:function(){return o},SUPPORTED_CHAINS:function(){return a},ZERO_ADDRESS:function(){return i}});var r=t(6971),o=5,c={"0x0":"Not connected","0x1":"Ethereum","0x3":"Ropsten","0x4":"Rinkeby","0x5":"Goerli","0x2a":"Kovan"},i="0x0000000000000000000000000000000000000000",u="PoemPathfinder",s={"0x4":{address:"0xDeE90CcC0ebD4b1cf3373621946b8fee22660f47",abi:r.abi,openSeaLink:"https://testnets.opensea.io/collection/poempathfinder"},"0x5":{address:"0x9b92C19698D61E6f8899CAD25390857FAD6eA5Cc",abi:r.abi}},a=Object.keys(s)},6601:function(){},5820:function(e,n,t){"use strict";t.d(n,{M:function(){return C}});var r=t(7294),o=t(9304),c=t(9073),i=t(8868);function u(){const e=(0,r.useRef)(!1);return(0,i.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=t(240),a=t(6681);class l extends r.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=n.offsetHeight||0,e.width=n.offsetWidth||0,e.top=n.offsetTop,e.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:n}){const t=(0,r.useId)(),o=(0,r.useRef)(null),c=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:i,left:u}=c.current;if(n||!o.current||!e||!r)return;o.current.dataset.motionPopId=t;const s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`\n          [data-motion-pop-id="${t}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${i}px !important;\n            left: ${u}px !important;\n          }\n        `),()=>{document.head.removeChild(s)}}),[n]),r.createElement(l,{isPresent:n,childRef:o,sizeRef:c},r.cloneElement(e,{ref:o}))}const d=({children:e,initial:n,isPresent:t,onExitComplete:o,custom:c,presenceAffectsLayout:i,mode:u})=>{const l=(0,a.h)(h),d=(0,r.useId)(),p=(0,r.useMemo)((()=>({id:d,initial:n,isPresent:t,custom:c,onExitComplete:e=>{l.set(e,!0);for(const n of l.values())if(!n)return;o&&o()},register:e=>(l.set(e,!1),()=>l.delete(e))})),i?void 0:[t]);return(0,r.useMemo)((()=>{l.forEach(((e,n)=>l.set(n,!1)))}),[t]),r.useEffect((()=>{!t&&!l.size&&o&&o()}),[t]),"popLayout"===u&&(e=r.createElement(f,{isPresent:t},e)),r.createElement(s.O.Provider,{value:p},e)};function h(){return new Map}var p=t(5364),m=t(5411),v=t(6034);const x=e=>e.key||"";const C=({children:e,custom:n,initial:t=!0,onExitComplete:s,exitBeforeEnter:a,presenceAffectsLayout:l=!0,mode:f="sync"})=>{a&&(f="wait",(0,v.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[h]=function(){const e=u(),[n,t]=(0,r.useState)(0),o=(0,r.useCallback)((()=>{e.current&&t(n+1)}),[n]);return[(0,r.useCallback)((()=>c.ZP.postRender(o)),[o]),n]}();const C=(0,r.useContext)(p.p).forceRender;C&&(h=C);const g=u(),E=function(e){const n=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&n.push(e)})),n}(e);let P=E;const S=new Set,k=(0,r.useRef)(P),w=(0,r.useRef)(new Map).current,b=(0,r.useRef)(!0);if((0,i.L)((()=>{b.current=!1,function(e,n){e.forEach((e=>{const t=x(e);n.set(t,e)}))}(E,w),k.current=P})),(0,m.z)((()=>{b.current=!0,w.clear(),S.clear()})),b.current)return r.createElement(r.Fragment,null,P.map((e=>r.createElement(d,{key:x(e),isPresent:!0,initial:!!t&&void 0,presenceAffectsLayout:l,mode:f},e))));P=[...P];const A=k.current.map(x),R=E.map(x),N=A.length;for(let r=0;r<N;r++){const e=A[r];-1===R.indexOf(e)&&S.add(e)}return"wait"===f&&S.size&&(P=[]),S.forEach((e=>{if(-1!==R.indexOf(e))return;const t=w.get(e);if(!t)return;const o=A.indexOf(e);P.splice(o,0,r.createElement(d,{key:x(t),isPresent:!1,onExitComplete:()=>{w.delete(e),S.delete(e);const n=k.current.findIndex((n=>n.key===e));if(k.current.splice(n,1),!S.size){if(k.current=E,!1===g.current)return;h(),s&&s()}},custom:n,presenceAffectsLayout:l,mode:f},t))})),P=P.map((e=>{const n=e.key;return S.has(n)?e:r.createElement(d,{key:x(e),isPresent:!0,presenceAffectsLayout:l,mode:f},e)})),"production"!==o.O&&"wait"===f&&P.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,S.size?P:P.map((e=>(0,r.cloneElement)(e))))}}}]);