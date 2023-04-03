(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9318,8694,8575,3567,3920],{7741:function(e,n,t){"use strict";t.d(n,{hU:function(){return g},zx:function(){return h}});var r=t(7294),a=t(7761),o=t(2873),i=t(4520),c=t(8387),u=t(5610),s=(...e)=>e.filter(Boolean).join(" "),l=e=>e?"":void 0,[f,d]=(0,c.k)({strict:!1,name:"ButtonGroupContext"});function m(e){const{children:n,className:t,...a}=e,i=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,c=s("chakra-button__icon",t);return r.createElement(o.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:c},i)}function p(e){const{label:n,placement:t,spacing:a="0.5rem",children:i=r.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:l,...f}=e,d=s("chakra-button__spinner",c),m="start"===t?"marginEnd":"marginStart",p=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[m]:n?a:0,fontSize:"1em",lineHeight:"normal",...l})),[l,n,m,a]);return r.createElement(o.m$.div,{className:d,...f,__css:p},i)}m.displayName="ButtonIcon",p.displayName="ButtonSpinner";var h=(0,o.Gp)(((e,n)=>{const t=d(),c=(0,o.mq)("Button",{...t,...e}),{isDisabled:u=(null==t?void 0:t.isDisabled),isLoading:f,isActive:m,children:h,leftIcon:g,rightIcon:C,loadingText:b,iconSpacing:E="0.5rem",type:N,spinner:x,spinnerPlacement:y="start",className:_,as:S,...k}=(0,i.Lr)(e),A=(0,r.useMemo)((()=>{const e={...null==c?void 0:c._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...c,...!!t&&{_focus:e}}}),[c,t]),{ref:w,type:I}=function(e){const[n,t]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&t("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(S),T={rightIcon:C,leftIcon:g,iconSpacing:E,children:h};return r.createElement(o.m$.button,{disabled:u||f,ref:(0,a.qq)(n,w),as:S,type:N??I,"data-active":l(m),"data-loading":l(f),__css:A,className:s("chakra-button",_),...k},f&&"start"===y&&r.createElement(p,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:E},x),f?b||r.createElement(o.m$.span,{opacity:0},r.createElement(v,{...T})):r.createElement(v,{...T}),f&&"end"===y&&r.createElement(p,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:E},x))}));function v(e){const{leftIcon:n,rightIcon:t,children:a,iconSpacing:o}=e;return r.createElement(r.Fragment,null,n&&r.createElement(m,{marginEnd:o},n),a,t&&r.createElement(m,{marginStart:o},t))}h.displayName="Button",(0,o.Gp)((function(e,n){const{size:t,colorScheme:a,variant:i,className:c,spacing:u="0.5rem",isAttached:l,isDisabled:d,...m}=e,p=s("chakra-button__group",c),h=(0,r.useMemo)((()=>({size:t,colorScheme:a,variant:i,isDisabled:d})),[t,a,i,d]);let v={display:"inline-flex"};return v=l?{...v,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...v,"& > *:not(style) ~ *:not(style)":{marginStart:u}},r.createElement(f,{value:h},r.createElement(o.m$.div,{ref:n,role:"group",__css:v,className:p,"data-attached":l?"":void 0,...m}))})).displayName="ButtonGroup";var g=(0,o.Gp)(((e,n)=>{const{icon:t,children:a,isRound:o,"aria-label":i,...c}=e,u=t||a,s=(0,r.isValidElement)(u)?(0,r.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(h,{padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":i,...c},s)}));g.displayName="IconButton"},7761:function(e,n,t){"use strict";t.d(n,{lq:function(){return a},qq:function(){return o}});var r=t(7294);function a(...e){return n=>{e.forEach((e=>{!function(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}else e(n)}(e,n)}))}}function o(...e){return(0,r.useMemo)((()=>a(...e)),e)}},5610:function(e,n,t){"use strict";t.d(n,{$:function(){return u}});var r=t(7294),a=t(917),o=t(2873),i=t(4520),c=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),u=(0,o.Gp)(((e,n)=>{const t=(0,o.mq)("Spinner",e),{label:a="Loading...",thickness:u="2px",speed:s="0.45s",emptyColor:l="transparent",className:f,...d}=(0,i.Lr)(e),m=((...e)=>e.filter(Boolean).join(" "))("chakra-spinner",f),p={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:u,borderBottomColor:l,borderLeftColor:l,animation:`${c} ${s} linear infinite`,...t};return r.createElement(o.m$.div,{ref:n,__css:p,className:m,...d},a&&r.createElement(o.m$.span,{srOnly:!0},a))}));u.displayName="Spinner"},8694:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(5893),a=(t(7294),t(7927));function o(e){var n=e.children;return(0,r.jsx)(a.M5,{children:(0,r.jsx)(a.xu,{width:"70%",textAlign:"left",children:n})})}},3418:function(e,n,t){"use strict";t.r(n),t.d(n,{Page:function(){return s}});var r=t(5893),a=(t(7294),t(8712)),o=t(7741),i=t(8694),c=t(3621),u=t(3567),s=function(){var e=(0,c.useBlockchainContext)().hasMinted,n=(0,u.useNavContext)().setCurrPage;return(0,r.jsx)(i.default,{children:(0,r.jsx)(a.WC,{filename:"chapter6",children:(0,r.jsxs)(a.$0,{children:[(0,r.jsxs)("p",{children:["You arrive back to your apartment just before the break of dawn, a renewed excitement vibrating through every bone in your body. You don't know if you'll ever see The Shopkeeper again, but you know you'll never forget her.",e?" In the meantime, well, you have another adventure to begin.":" Besides, you have a feeling your adventure is only just beginning."]}),(0,r.jsx)(o.zx,{colorScheme:"yellow",onClick:function(){return n(u.Pages.CurrStatus)},children:"End"})]})})})}},3621:function(e,n,t){"use strict";t.r(n),t.d(n,{BlockchainContext:function(){return b},TokenStatus:function(){return r},useBlockchainContext:function(){return C}});var r,a=t(7568),o=t(828),i=t(4051),c=t.n(i),u=t(5893),s=t(7294),l=t(241),f=t(6076),d=t(7948),m=t(333),p=t(3920),h=t(3454);!function(e){e.Burned="BURN",e.Minted="MINT",e.Waiting="WAIT"}(r||(r={}));var v={metamask:void 0,contractConnection:void 0,getWriteConnection:function(){},clearWriteConnection:function(){},signer:void 0,chainId:"0x0",latestBlockNum:0,loadSigner:function(){},changeChainManually:function(e){},tokenInfo:new Map,setTokenInfo:function(e){},hasMinted:!1},g=s.createContext(v),C=function(){return s.useContext(g)},b=function(e){var n=e.child,t=window&&window.ethereum,r=(0,o.Z)(s.useState(),2),i=r[0],v=r[1],C=(0,o.Z)(s.useState(),2),b=C[0],E=C[1],N=(0,o.Z)(s.useState(),2),x=N[0],y=N[1],_=(0,o.Z)(s.useState("0x0"),2),S=_[0],k=_[1],A=(0,o.Z)(s.useState(0),2),w=A[0],I=A[1],T=(0,o.Z)(s.useState(new Map),2),P=T[0],R=T[1],M=(0,o.Z)(s.useState(!1),2),B=M[0],O=M[1];t&&t.on("chainChanged",(function(e){window&&window.location.reload()})),t&&t.on("accountsChanged",(function(e){e[0]!==x&&(x||b)&&H()}));var D=function(){var e=(0,a.Z)(c().mark((function e(){var n,r,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&p.SUPPORTED_CHAINS.includes(S)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=p.CONTRACT_INFO[S],r=new l.Q(t),a=r.getSigner(),o=new f.CH(n.address,n.abi,a),E(o),a.getAddress().then((function(e){return e!==x&&y(e)})),e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=b,e.t0){e.next=5;break}return e.next=4,D();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,a.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:(n=e.sent).length>0&&(r=n[0],y(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){E(void 0),y(void 0)},L=function(){if(p.SUPPORTED_CHAINS.includes(S)&&(!i||i.provider.network.chainId!==Number(S))){var e,n=p.CONTRACT_INFO[S];t?e=new l.Q(t):(e=d.yl(Number(S),{etherscan:h.env.REACT_APP_ETHERSCAN_API_KEY,infura:"-",alchemy:h.env.REACT_APP_ALCHEMY_API_KEY,pocket:"-",ankr:"-"}),e=new m.D(Number(S),h.env.REACT_APP_ALCHEMY_API_KEY));var r=new f.CH(n.address,n.abi,e);r.name().then((function(e){e===p.CONTRACT_NAME&&v(r)}))}},Z={metamask:t,chainId:S,signer:x,contractConnection:i,getWriteConnection:j,clearWriteConnection:H,latestBlockNum:w,loadSigner:$,changeChainManually:function(e){k(e),H(),L(),R(new Map)},tokenInfo:P,setTokenInfo:R,hasMinted:B};return s.useEffect((function(){function e(){return(e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_chainId"});case 2:n=e.sent,k(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?function(){e.apply(this,arguments)}():k((0,p.getDefaultChainId)())}),[]),s.useEffect((function(){L()}),[S]),s.useEffect((function(){i&&i.on("Transfer",(function(e,n,t,r){I(r.blockNumber)}))}),[i]),s.useEffect((function(){i&&x&&(console.log("Checking if minted before"),x&&i.totalMintedTo(x).then((function(e){O(e>0),console.log("minted: "+e)})))}),[i,x]),(0,u.jsx)(g.Provider,{value:Z,children:n})}},3567:function(e,n,t){"use strict";t.r(n),t.d(n,{NavContext:function(){return i},Pages:function(){return r},TutorialStep:function(){return a},useNavContext:function(){return c}});var r,a,o=t(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(r||(r={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(a||(a={}));var i=o.createContext({currPage:r.About,setCurrPage:function(e){},tutorialState:a.None,setTutorialState:function(e){}}),c=function(){return o.useContext(i)}},3920:function(e,n,t){"use strict";t.r(n),t.d(n,{CHAIN_ID_TO_NAME:function(){return o},CONTRACT_INFO:function(){return u},CONTRACT_NAME:function(){return c},PARAGRAPH_SPACING:function(){return a},SUPPORTED_CHAINS:function(){return s},ZERO_ADDRESS:function(){return i},getDefaultChainId:function(){return l}});var r=t(8448),a=5,o={"0x0":"Not connected","0x1":"Ethereum","0x3":"Ropsten","0x4":"Rinkeby","0x5":"Goerli","0x2a":"Kovan"},i="0x0000000000000000000000000000000000000000",c="Pathfinder",u={"0x5":{address:"0xC00eBE404C500AD9134344c4d1b1f8b2f1CfAD33",abi:r.abi,openSeaLink:"https://testnets.opensea.io/collection/pathfinder"}},s=Object.keys(u),l=function(){return void 0!==u["0x1"]?"0x1":"0x5"}},6601:function(){}}]);