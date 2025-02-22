(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9208,8575,3567,845,3920],{7174:function(e,t,n){"use strict";n.d(t,{hE:function(){return u},h_:function(){return x}});var r=n(7294),o=n(8387),i=n(4040),a=n(3935),[c,s]=(0,o.k)({strict:!1,name:"PortalManagerContext"});function u(e){const{children:t,zIndex:n}=e;return r.createElement(c,{value:{zIndex:n}},t)}u.displayName="PortalManager";var[l,f]=(0,o.k)({strict:!1,name:"PortalContext"}),d="chakra-portal",h=e=>r.createElement("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0}},e.children),p=e=>{const{appendToParentPortal:t,children:n}=e,[o,c]=(0,r.useState)(null),u=(0,r.useRef)(null),[,p]=(0,r.useState)({});(0,r.useEffect)((()=>p({})),[]);const m=f(),x=s();(0,i.G)((()=>{if(!o)return;const e=o.ownerDocument,n=t?m??e.body:e.body;if(!n)return;u.current=e.createElement("div"),u.current.className=d,n.appendChild(u.current),p({});const r=u.current;return()=>{n.contains(r)&&n.removeChild(r)}}),[o]);const C=(null==x?void 0:x.zIndex)?r.createElement(h,{zIndex:null==x?void 0:x.zIndex},n):n;return u.current?(0,a.createPortal)(r.createElement(l,{value:u.current},C),u.current):r.createElement("span",{ref:e=>{e&&c(e)}})},m=e=>{const{children:t,containerRef:n,appendToParentPortal:o}=e,c=n.current,s=c??("undefined"!==typeof window?document.body:void 0),u=(0,r.useMemo)((()=>{const e=null==c?void 0:c.ownerDocument.createElement("div");return e&&(e.className=d),e}),[c]),[,f]=(0,r.useState)({});return(0,i.G)((()=>f({})),[]),(0,i.G)((()=>{if(u&&s)return s.appendChild(u),()=>{s.removeChild(u)}}),[u,s]),s&&u?(0,a.createPortal)(r.createElement(l,{value:o?u:null},t),u):null};function x(e){const{containerRef:t,...n}=e;return t?r.createElement(m,{containerRef:t,...n}):r.createElement(p,{...n})}x.defaultProps={appendToParentPortal:!0},x.className=d,x.selector=".chakra-portal",x.displayName="Portal"},8392:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(1163),a=n(315),c=n(7741);t.Z=function(e){var t=e.children,n=void 0===t?"Reset":t,s=e.message,u=o.useContext(a.StoryContext),l=u.persistor,f=u.config,d=(0,i.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.zx,{colorScheme:"red",onClick:function(){return function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Restart story from the beginning?",i="/out/"+r.basePath+t.identifier;e?confirm(o)&&n.flush().then((function(){n.pause(),localStorage.clear(),window.location.replace(i)})):n.flush().then((function(){n.pause(),localStorage.clear(),window.location.reload()}))}(!0,f,l,d,s)},children:n})})}},3621:function(e,t,n){"use strict";n.r(t),n.d(t,{BlockchainContext:function(){return g},TokenStatus:function(){return r},useBlockchainContext:function(){return v}});var r,o=n(7568),i=n(828),a=n(4051),c=n.n(a),s=n(5893),u=n(7294),l=n(241),f=n(6076),d=n(7948),h=n(333),p=n(3920),m=n(3454);!function(e){e.Burned="BURN",e.Minted="MINT",e.Waiting="WAIT"}(r||(r={}));var x={metamask:void 0,contractConnection:void 0,getWriteConnection:function(){},clearWriteConnection:function(){},signer:void 0,chainId:"0x0",latestBlockNum:0,loadSigner:function(){},changeChainManually:function(e){},tokenInfo:new Map,setTokenInfo:function(e){},hasMinted:!1},C=u.createContext(x),v=function(){return u.useContext(C)},g=function(e){var t=e.child,n=window&&window.ethereum,r=(0,i.Z)(u.useState(),2),a=r[0],x=r[1],v=(0,i.Z)(u.useState(),2),g=v[0],E=v[1],P=(0,i.Z)(u.useState(),2),w=P[0],k=P[1],A=(0,i.Z)(u.useState("0x0"),2),y=A[0],N=A[1],S=(0,i.Z)(u.useState(0),2),b=S[0],I=S[1],R=(0,i.Z)(u.useState(new Map),2),_=R[0],M=R[1],T=(0,i.Z)(u.useState(!1),2),O=T[0],j=T[1];n&&n.on("chainChanged",(function(e){window&&window.location.reload()})),n&&n.on("accountsChanged",(function(e){e[0]!==w&&(w||g)&&L()}));var z=function(){var e=(0,o.Z)(c().mark((function e(){var t,r,o,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&p.SUPPORTED_CHAINS.includes(y)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=p.CONTRACT_INFO[y],r=new l.Q(n),o=r.getSigner(),i=new f.CH(t.address,t.abi,o),E(i),o.getAddress().then((function(e){return e!==w&&k(e)})),e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=g,e.t0){e.next=5;break}return e.next=4,z();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,o.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.request({method:"eth_requestAccounts"});case 2:(t=e.sent).length>0&&(r=t[0],k(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){E(void 0),k(void 0)},Z=function(){if(p.SUPPORTED_CHAINS.includes(y)&&(!a||a.provider.network.chainId!==Number(y))){var e,t=p.CONTRACT_INFO[y];n?e=new l.Q(n):(e=d.yl(Number(y),{etherscan:m.env.REACT_APP_ETHERSCAN_API_KEY,infura:"-",alchemy:m.env.REACT_APP_ALCHEMY_API_KEY,pocket:"-",ankr:"-"}),e=new h.D(Number(y),m.env.REACT_APP_ALCHEMY_API_KEY));var r=new f.CH(t.address,t.abi,e);r.name().then((function(e){e===p.CONTRACT_NAME&&x(r)}))}},B={metamask:n,chainId:y,signer:w,contractConnection:a,getWriteConnection:D,clearWriteConnection:L,latestBlockNum:b,loadSigner:H,changeChainManually:function(e){N(e),L(),Z(),M(new Map)},tokenInfo:_,setTokenInfo:M,hasMinted:O};return u.useEffect((function(){function e(){return(e=(0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.request({method:"eth_chainId"});case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n?function(){e.apply(this,arguments)}():N((0,p.getDefaultChainId)())}),[]),u.useEffect((function(){Z()}),[y]),u.useEffect((function(){a&&a.on("Transfer",(function(e,t,n,r){I(r.blockNumber)}))}),[a]),u.useEffect((function(){a&&w&&(console.log("Checking if minted before"),w&&a.totalMintedTo(w).then((function(e){j(e>0),console.log("minted: "+e)})))}),[a,w]),(0,s.jsx)(C.Provider,{value:B,children:t})}},5551:function(e,t,n){"use strict";n.r(t),n.d(t,{ColorModeSwitcher:function(){return s}});var r=n(6042),o=n(5893),i=(n(7294),n(8395)),a=n(7741),c=n(9583),s=function(e){var t=(0,i.If)().toggleColorMode,n=(0,i.ff)("dark","light"),s=(0,i.ff)(c.TLr,c.Mei);return(0,o.jsx)(a.hU,(0,r.Z)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:(0,o.jsx)(s,{}),"aria-label":"Switch to ".concat(n," mode")},e))}},3387:function(e,t,n){"use strict";n.r(t),n.d(t,{Header:function(){return x}});var r=n(5893),o=(n(7294),n(4373)),i=n(7927),a=n(5298),c=n(7026),s=n(7741),u=n(2494),l=n(845),f=n(3621),d=n(3920),h=n(5551),p=n(3567),m=n(8392),x=function(){var e=(0,f.useBlockchainContext)(),t=e.metamask,n=e.chainId,x=e.loadSigner,C=e.signer,v=e.clearWriteConnection,g=e.changeChainManually,E=(0,p.useNavContext)(),P=E.currPage,w=E.setCurrPage,k=function(){var e=l.default.colors.yellow[400];return"0x0"!==n&&(e=l.default.colors.green[500]),(0,u.IU)({displayName:"Status",viewBox:"0 0 200 200",path:(0,r.jsx)("path",{fill:e,d:"M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"})})},A=function(){return(0,r.jsxs)(o.Vp,{size:"lg",variant:"subtle",colorScheme:"cyan",children:[(0,r.jsx)(o.AD,{boxSize:"12px",as:k()}),(0,r.jsxs)(o.Sn,{children:[d.CHAIN_ID_TO_NAME[n],C&&" as 0x...".concat(C.substring(C.length-4,C.length))]})]})},y=function(){w(p.Pages.Home)};return(0,r.jsxs)(i.kC,{minWidth:"100%",maxHeight:"max-content",alignItems:"center",gap:"2",padding:"20px",children:[(0,r.jsx)(i.X6,{as:"h1",size:"lg",children:"P O E M"}),(0,r.jsx)(i.LZ,{}),(0,r.jsxs)(i.Ug,{children:[function(){var e=[];return P===p.Pages.About&&e.push((0,r.jsx)(m.Z,{},"reset")),P!==p.Pages.Home&&e.push((0,r.jsx)(s.zx,{variant:"outline",colorScheme:"yellow",onClick:y,children:"Home"},"nav")),e}(),!C&&(0,r.jsx)(c.u,{label:"Please install Metamask to connect your wallet.",shouldWrapChildren:!0,isDisabled:t,children:(0,r.jsx)(s.zx,{onClick:x,disabled:!t,children:"Connect Wallet"})}),C&&(0,r.jsx)(s.zx,{onClick:v,children:"Disconnect Wallet"}),t&&(0,r.jsx)(c.u,{label:"0x0"===n?"Do you have Metamask installed? This webside currently uses Metamask to connect to the blockchain.":"You can change networks using the Metamask extension. Support for non-Metamask users is in progress.",children:A()}),!t&&function(){var e=d.SUPPORTED_CHAINS.map((function(e){return(0,r.jsx)(a.sN,{onClick:function(){return g(e)},children:d.CHAIN_ID_TO_NAME[e]},e)}));return(0,r.jsxs)(a.v2,{children:[(0,r.jsx)(a.j2,{children:A()}),(0,r.jsx)(a.qy,{children:e})]})}(),(0,r.jsx)(h.ColorModeSwitcher,{})]})]})}},3567:function(e,t,n){"use strict";n.r(t),n.d(t,{NavContext:function(){return a},Pages:function(){return r},TutorialStep:function(){return o},useNavContext:function(){return c}});var r,o,i=n(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(r||(r={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(o||(o={}));var a=i.createContext({currPage:r.About,setCurrPage:function(e){},tutorialState:o.None,setTutorialState:function(e){}}),c=function(){return i.useContext(a)}},845:function(e,t,n){"use strict";n.r(t);var r=n(1677),o=n(3920),i=(0,r.B1)({config:{initialColorMode:"dark",useSystemColorMode:!1},styles:{global:{p:{paddingBottom:o.PARAGRAPH_SPACING},ul:{paddingLeft:50,paddingBottom:o.PARAGRAPH_SPACING}}}});t.default=i},3920:function(e,t,n){"use strict";n.r(t),n.d(t,{CHAIN_ID_TO_NAME:function(){return i},CONTRACT_INFO:function(){return s},CONTRACT_NAME:function(){return c},PARAGRAPH_SPACING:function(){return o},SUPPORTED_CHAINS:function(){return u},ZERO_ADDRESS:function(){return a},getDefaultChainId:function(){return l}});var r=n(8448),o=5,i={"0x0":"Not connected","0x1":"Ethereum","0x3":"Ropsten","0x4":"Rinkeby","0x5":"Goerli","0x2a":"Kovan","0xaa36a7":"Sepolia"},a="0x0000000000000000000000000000000000000000",c="Pathfinder",s={"0x5":{address:"0xC00eBE404C500AD9134344c4d1b1f8b2f1CfAD33",abi:r.abi,openSeaLink:"https://testnets.opensea.io/collection/pathfinder"},"0x1":{address:"0x31AEad502A16D491d55e6C2dB2DA245D45A71897",abi:r.abi}},u=Object.keys(s),l=function(){return void 0!==s["0x1"]?"0x1":"0x5"}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function s(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),s(e.child))}))}function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),s(e.child))}}function l(e){var t=function(t){var n,o=e.attr,i=e.size,s=e.title,u=c(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},6601:function(){},5820:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var r=n(7294),o=n(9304),i=n(9073),a=n(8868);function c(){const e=(0,r.useRef)(!1);return(0,a.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var s=n(240),u=n(6681);class l extends r.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function f({children:e,isPresent:t}){const n=(0,r.useId)(),o=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0});return(0,r.useInsertionEffect)((()=>{const{width:e,height:r,top:a,left:c}=i.current;if(t||!o.current||!e||!r)return;o.current.dataset.motionPopId=n;const s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${a}px !important;\n            left: ${c}px !important;\n          }\n        `),()=>{document.head.removeChild(s)}}),[t]),r.createElement(l,{isPresent:t,childRef:o,sizeRef:i},r.cloneElement(e,{ref:o}))}const d=({children:e,initial:t,isPresent:n,onExitComplete:o,custom:i,presenceAffectsLayout:a,mode:c})=>{const l=(0,u.h)(h),d=(0,r.useId)(),p=(0,r.useMemo)((()=>({id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{l.set(e,!0);for(const t of l.values())if(!t)return;o&&o()},register:e=>(l.set(e,!1),()=>l.delete(e))})),a?void 0:[n]);return(0,r.useMemo)((()=>{l.forEach(((e,t)=>l.set(t,!1)))}),[n]),r.useEffect((()=>{!n&&!l.size&&o&&o()}),[n]),"popLayout"===c&&(e=r.createElement(f,{isPresent:n},e)),r.createElement(s.O.Provider,{value:p},e)};function h(){return new Map}var p=n(5364),m=n(5411),x=n(6034);const C=e=>e.key||"";const v=({children:e,custom:t,initial:n=!0,onExitComplete:s,exitBeforeEnter:u,presenceAffectsLayout:l=!0,mode:f="sync"})=>{u&&(f="wait",(0,x.O)(!1,"Replace exitBeforeEnter with mode='wait'"));let[h]=function(){const e=c(),[t,n]=(0,r.useState)(0),o=(0,r.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,r.useCallback)((()=>i.ZP.postRender(o)),[o]),t]}();const v=(0,r.useContext)(p.p).forceRender;v&&(h=v);const g=c(),E=function(e){const t=[];return r.Children.forEach(e,(e=>{(0,r.isValidElement)(e)&&t.push(e)})),t}(e);let P=E;const w=new Set,k=(0,r.useRef)(P),A=(0,r.useRef)(new Map).current,y=(0,r.useRef)(!0);if((0,a.L)((()=>{y.current=!1,function(e,t){e.forEach((e=>{const n=C(e);t.set(n,e)}))}(E,A),k.current=P})),(0,m.z)((()=>{y.current=!0,A.clear(),w.clear()})),y.current)return r.createElement(r.Fragment,null,P.map((e=>r.createElement(d,{key:C(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:l,mode:f},e))));P=[...P];const N=k.current.map(C),S=E.map(C),b=N.length;for(let r=0;r<b;r++){const e=N[r];-1===S.indexOf(e)&&w.add(e)}return"wait"===f&&w.size&&(P=[]),w.forEach((e=>{if(-1!==S.indexOf(e))return;const n=A.get(e);if(!n)return;const o=N.indexOf(e);P.splice(o,0,r.createElement(d,{key:C(n),isPresent:!1,onExitComplete:()=>{A.delete(e),w.delete(e);const t=k.current.findIndex((t=>t.key===e));if(k.current.splice(t,1),!w.size){if(k.current=E,!1===g.current)return;h(),s&&s()}},custom:t,presenceAffectsLayout:l,mode:f},n))})),P=P.map((e=>{const t=e.key;return w.has(t)?e:r.createElement(d,{key:C(e),isPresent:!0,presenceAffectsLayout:l,mode:f},e)})),"production"!==o.O&&"wait"===f&&P.length>1&&console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'),r.createElement(r.Fragment,null,w.size?P:P.map((e=>(0,r.cloneElement)(e))))}}}]);