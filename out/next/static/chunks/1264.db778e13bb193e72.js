(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1264,8575,3567,3920],{5868:function(e,n,t){"use strict";t.d(n,{P:function(){return s}});var o=t(7294),r=t(2494),a=t(2873),i=t(4520);function c(e){return o.createElement(r.JO,{focusable:"false","aria-hidden":!0,...e},o.createElement("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}))}var s=(0,a.Gp)((function(e,n){const t=(0,a.mq)("CloseButton",e),{children:r,isDisabled:s,__css:u,...l}=(0,i.Lr)(e);return o.createElement(a.m$.button,{type:"button","aria-label":"Close",ref:n,disabled:s,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...t,...u},...l},r||o.createElement(c,{width:"1em",height:"1em"}))}));s.displayName="CloseButton"},2415:function(e,n,t){"use strict";t.d(n,{J2:function(){return I},QH:function(){return M},b:function(){return R},us:function(){return O},yk:function(){return H},DT:function(){return Z},Yt:function(){return F},xo:function(){return $}});var o=t(7294),r=t(2873),a=t(4520),i=t(8387),c=t(1179),s=t(3926);var u=()=>"undefined"!==typeof window;var l=e=>u()&&e.test(function(){const e=navigator.userAgentData;return(null==e?void 0:e.platform)??navigator.platform}()),f=()=>{return l(/mac|iphone|ipad|ipod/i)&&(e=/apple/i,u()&&e.test(navigator.vendor));var e};var d=t(6181),p=t(9755),v=t(9948),m=t(7761),h=t(2359),g=t(5868),C=t(7564),k=(...e)=>e.filter(Boolean).join(" ");var w=e=>"function"===typeof e;function y(...e){return function(n){e.some((e=>(null==e||e(n),null==n?void 0:n.defaultPrevented)))}}function P(...e){return function(n){e.forEach((e=>{null==e||e(n)}))}}var[x,b]=(0,i.k)({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[_,E]=(0,i.k)({name:"PopoverStylesContext",errorMessage:"usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" "}),N={click:"click",hover:"hover"};function T(e={}){const{closeOnBlur:n=!0,closeOnEsc:t=!0,initialFocusRef:r,id:a,returnFocusOnClose:i=!0,autoFocus:u=!0,arrowSize:l,arrowShadowColor:g,trigger:C=N.click,openDelay:k=200,closeDelay:w=200,isLazy:P,lazyBehavior:x="unmount",computePositionOnMount:b,..._}=e,{isOpen:E,onClose:T,onOpen:I,onToggle:M}=(0,p.q)(e),R=(0,o.useRef)(null),O=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useRef)(!1),L=(0,o.useRef)(!1);E&&(L.current=!0);const[j,H]=(0,o.useState)(!1),[Z,F]=(0,o.useState)(!1),$=(0,o.useId)(),G=a??$,[q,z,K,U]=["popover-trigger","popover-content","popover-header","popover-body"].map((e=>`${e}-${G}`)),{referenceRef:Y,getArrowProps:W,getPopperProps:Q,getArrowInnerProps:J,forceUpdate:V}=(0,v.D)({..._,enabled:E||!!b}),X=(0,c.h)({isOpen:E,ref:D});!function(e){const{ref:n,elements:t,enabled:o}=e,r=()=>{var e;return(null==(e=n.current)?void 0:e.ownerDocument)??document};(0,s.O)(r,"pointerdown",(e=>{if(!f()||!o)return;const a=e.target,i=(t??[n]).some((e=>{const n="current"in e?e.current:e;return(null==n?void 0:n.contains(a))||n===a}));r().activeElement!==a&&i&&(e.preventDefault(),a.focus())}))}({enabled:E,ref:O}),(0,d.C)(D,{focusRef:O,visible:E,shouldFocus:i&&C===N.click}),(0,d.G)(D,{focusRef:r,visible:E,shouldFocus:u&&C===N.click});const ee=(0,h.k)({wasSelected:L.current,enabled:P,mode:x,isSelected:X.present}),ne=(0,o.useCallback)(((e={},o=null)=>{const r={...e,style:{...e.style,transformOrigin:v.j.transformOrigin.varRef,[v.j.arrowSize.var]:l?`${l}px`:void 0,[v.j.arrowShadowColor.var]:g},ref:(0,m.lq)(D,o),children:ee?e.children:null,id:z,tabIndex:-1,role:"dialog",onKeyDown:y(e.onKeyDown,(e=>{t&&"Escape"===e.key&&T()})),onBlur:y(e.onBlur,(e=>{const t=A(e),o=S(D.current,t),r=S(O.current,t);E&&n&&(!o&&!r)&&T()})),"aria-labelledby":j?K:void 0,"aria-describedby":Z?U:void 0};return C===N.hover&&(r.role="tooltip",r.onMouseEnter=y(e.onMouseEnter,(()=>{B.current=!0})),r.onMouseLeave=y(e.onMouseLeave,(e=>{null!==e.nativeEvent.relatedTarget&&(B.current=!1,setTimeout((()=>T()),w))}))),r}),[ee,z,j,K,Z,U,C,t,T,E,n,w,g,l]),te=(0,o.useCallback)(((e={},n=null)=>Q({...e,style:{visibility:E?"visible":"hidden",...e.style}},n)),[E,Q]),oe=(0,o.useCallback)(((e,n=null)=>({...e,ref:(0,m.lq)(n,R,Y)})),[R,Y]),re=(0,o.useRef)(),ae=(0,o.useRef)(),ie=(0,o.useCallback)((e=>{null==R.current&&Y(e)}),[Y]),ce=(0,o.useCallback)(((e={},t=null)=>{const o={...e,ref:(0,m.lq)(O,t,ie),id:q,"aria-haspopup":"dialog","aria-expanded":E,"aria-controls":z};return C===N.click&&(o.onClick=y(e.onClick,M)),C===N.hover&&(o.onFocus=y(e.onFocus,(()=>{void 0===re.current&&I()})),o.onBlur=y(e.onBlur,(e=>{const t=A(e),o=!S(D.current,t);E&&n&&o&&T()})),o.onKeyDown=y(e.onKeyDown,(e=>{"Escape"===e.key&&T()})),o.onMouseEnter=y(e.onMouseEnter,(()=>{B.current=!0,re.current=window.setTimeout((()=>I()),k)})),o.onMouseLeave=y(e.onMouseLeave,(()=>{B.current=!1,re.current&&(clearTimeout(re.current),re.current=void 0),ae.current=window.setTimeout((()=>{!1===B.current&&T()}),w)}))),o}),[q,E,z,C,ie,M,I,n,T,k,w]);(0,o.useEffect)((()=>()=>{re.current&&clearTimeout(re.current),ae.current&&clearTimeout(ae.current)}),[]);const se=(0,o.useCallback)(((e={},n=null)=>({...e,id:K,ref:(0,m.lq)(n,(e=>{H(!!e)}))})),[K]),ue=(0,o.useCallback)(((e={},n=null)=>({...e,id:U,ref:(0,m.lq)(n,(e=>{F(!!e)}))})),[U]);return{forceUpdate:V,isOpen:E,onAnimationComplete:X.onComplete,onClose:T,getAnchorProps:oe,getArrowProps:W,getArrowInnerProps:J,getPopoverPositionerProps:te,getPopoverProps:ne,getTriggerProps:ce,getHeaderProps:se,getBodyProps:ue}}function S(e,n){return e===n||(null==e?void 0:e.contains(n))}function A(e){const n=e.currentTarget.ownerDocument.activeElement;return e.relatedTarget??n}function I(e){const n=(0,r.jC)("Popover",e),{children:t,...i}=(0,a.Lr)(e),c=T({...i,direction:(0,r.Fg)().direction});return o.createElement(x,{value:c},o.createElement(_,{value:n},function(e,...n){return w(e)?e(...n):e}(t,{isOpen:c.isOpen,onClose:c.onClose,forceUpdate:c.forceUpdate})))}function M(e){const{bg:n,bgColor:t,backgroundColor:a}=e,{getArrowProps:i,getArrowInnerProps:c}=b(),s=E(),u=n??t??a;return o.createElement(r.m$.div,{...i(),className:"chakra-popover__arrow-positioner"},o.createElement(r.m$.div,{className:k("chakra-popover__arrow",e.className),...c(e),__css:{...s.arrow,"--popper-arrow-bg":u?`colors.${u}, ${u}`:void 0}}))}I.displayName="Popover",M.displayName="PopoverArrow";var R=(0,r.Gp)((function(e,n){const{getBodyProps:t}=b(),a=E();return o.createElement(r.m$.div,{...t(e,n),className:k("chakra-popover__body",e.className),__css:a.body})}));R.displayName="PopoverBody";var O=(0,r.Gp)((function(e,n){const{onClose:t}=b(),r=E();return o.createElement(g.P,{size:"sm",onClick:t,className:k("chakra-popover__close-btn",e.className),__css:r.closeButton,ref:n,...e})}));function D(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}O.displayName="PopoverCloseButton";var B={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},L=(0,r.m$)(C.E.section),j=(0,r.Gp)((function(e,n){const{variants:t=B,...r}=e,{isOpen:a}=b();return o.createElement(L,{ref:n,variants:D(t),initial:!1,animate:a?"enter":"exit",...r})}));j.displayName="PopoverTransition";var H=(0,r.Gp)((function(e,n){const{rootProps:t,motionProps:a,...i}=e,{getPopoverProps:c,getPopoverPositionerProps:s,onAnimationComplete:u}=b(),l=E(),f={position:"relative",display:"flex",flexDirection:"column",...l.content};return o.createElement(r.m$.div,{...s(t),__css:l.popper,className:"chakra-popover__popper"},o.createElement(j,{...a,...c(i,n),onAnimationComplete:P(u,i.onAnimationComplete),className:k("chakra-popover__content",e.className),__css:f}))}));function Z(e){const n=E();return o.createElement(r.m$.footer,{...e,className:k("chakra-popover__footer",e.className),__css:n.footer})}H.displayName="PopoverContent",Z.displayName="PopoverFooter";var F=(0,r.Gp)((function(e,n){const{getHeaderProps:t}=b(),a=E();return o.createElement(r.m$.header,{...t(e,n),className:k("chakra-popover__header",e.className),__css:a.header})}));function $(e){const n=o.Children.only(e.children),{getTriggerProps:t}=b();return(0,o.cloneElement)(n,t(n.props,n.ref))}F.displayName="PopoverHeader",$.displayName="PopoverTrigger"},3621:function(e,n,t){"use strict";t.r(n),t.d(n,{BlockchainContext:function(){return k},TokenStatus:function(){return o},useBlockchainContext:function(){return C}});var o,r=t(7568),a=t(828),i=t(4051),c=t.n(i),s=t(5893),u=t(7294),l=t(241),f=t(6076),d=t(7948),p=t(333),v=t(3920),m=t(3454);!function(e){e.Burned="BURN",e.Minted="MINT",e.Waiting="WAIT"}(o||(o={}));var h={metamask:void 0,contractConnection:void 0,getWriteConnection:function(){},clearWriteConnection:function(){},signer:void 0,chainId:"0x0",latestBlockNum:0,loadSigner:function(){},changeChainManually:function(e){},tokenInfo:new Map,setTokenInfo:function(e){},hasMinted:!1},g=u.createContext(h),C=function(){return u.useContext(g)},k=function(e){var n=e.child,t=window&&window.ethereum,o=(0,a.Z)(u.useState(),2),i=o[0],h=o[1],C=(0,a.Z)(u.useState(),2),k=C[0],w=C[1],y=(0,a.Z)(u.useState(),2),P=y[0],x=y[1],b=(0,a.Z)(u.useState("0x0"),2),_=b[0],E=b[1],N=(0,a.Z)(u.useState(0),2),T=N[0],S=N[1],A=(0,a.Z)(u.useState(new Map),2),I=A[0],M=A[1],R=(0,a.Z)(u.useState(!1),2),O=R[0],D=R[1];t&&t.on("chainChanged",(function(e){window&&window.location.reload()})),t&&t.on("accountsChanged",(function(e){e[0]!==P&&(P||k)&&H()}));var B=function(){var e=(0,r.Z)(c().mark((function e(){var n,o,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&v.SUPPORTED_CHAINS.includes(_)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,n=v.CONTRACT_INFO[_],o=new l.Q(t),r=o.getSigner(),a=new f.CH(n.address,n.abi,r),w(a),r.getAddress().then((function(e){return e!==P&&x(e)})),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=k,e.t0){e.next=5;break}return e.next=4,B();case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(c().mark((function e(){var n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_requestAccounts"});case 2:(n=e.sent).length>0&&(o=n[0],x(o));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){w(void 0),x(void 0)},Z=function(){if(v.SUPPORTED_CHAINS.includes(_)&&(!i||i.provider.network.chainId!==Number(_))){var e,n=v.CONTRACT_INFO[_];t?e=new l.Q(t):(e=d.yl(Number(_),{etherscan:m.env.REACT_APP_ETHERSCAN_API_KEY,infura:"-",alchemy:m.env.REACT_APP_ALCHEMY_API_KEY,pocket:"-",ankr:"-"}),e=new p.D(Number(_),m.env.REACT_APP_ALCHEMY_API_KEY));var o=new f.CH(n.address,n.abi,e);o.name().then((function(e){e===v.CONTRACT_NAME&&h(o)}))}},F={metamask:t,chainId:_,signer:P,contractConnection:i,getWriteConnection:L,clearWriteConnection:H,latestBlockNum:T,loadSigner:j,changeChainManually:function(e){E(e),H(),Z(),M(new Map)},tokenInfo:I,setTokenInfo:M,hasMinted:O};return u.useEffect((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({method:"eth_chainId"});case 2:n=e.sent,E(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t?function(){e.apply(this,arguments)}():E((0,v.getDefaultChainId)())}),[]),u.useEffect((function(){Z()}),[_]),u.useEffect((function(){i&&i.on("Transfer",(function(e,n,t,o){S(o.blockNumber)}))}),[i]),u.useEffect((function(){i&&P&&(console.log("Checking if minted before"),P&&i.totalMintedTo(P).then((function(e){D(e>0),console.log("minted: "+e)})))}),[i,P]),(0,s.jsx)(g.Provider,{value:F,children:n})}},3567:function(e,n,t){"use strict";t.r(n),t.d(n,{NavContext:function(){return i},Pages:function(){return o},TutorialStep:function(){return r},useNavContext:function(){return c}});var o,r,a=t(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(o||(o={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(r||(r={}));var i=a.createContext({currPage:o.About,setCurrPage:function(e){},tutorialState:r.None,setTutorialState:function(e){}}),c=function(){return a.useContext(i)}},1948:function(e,n,t){"use strict";t.r(n),t.d(n,{PoemSvg:function(){return d}});var o=t(828),r=t(5893),a=t(7294),i=t(8395),c=t(7927),s=t(7741),u=t(3621),l=t(2415),f=t(3567),d=function(){var e=(0,i.If)().colorMode,n=(0,u.useBlockchainContext)(),t=n.contractConnection,d=n.metamask,p=(0,f.useNavContext)(),v=p.setTutorialState,m=p.tutorialState,h=(0,o.Z)(a.useState("Fetching blockchain info..."),2),g=h[0],C=h[1];a.useEffect((function(){t?t.getDefaultSvg().then((function(e){C(e)})):C("Can't fetch Poem contract info. Do you have Metamask installed? This site uses the Metamask to query the Ethereum blockchain without using any of your personal data.")}),[t]);return d&&!t?(0,r.jsx)(c.M5,{children:"Poem is currently only launched on the Rinkeby and Goerli networks. Please use Metamask to switch networks."}):t?(0,r.jsxs)(l.J2,{isOpen:m===f.TutorialStep.Image,placement:"right-start",children:[(0,r.jsx)(l.xo,{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",viewBox:"0 0 800 800",dangerouslySetInnerHTML:{__html:function(n){var t="dark"===e?"#a9a9a9":"#999999",o="dark"===e?"#555555":"#aaaaaa",r="dark"===e?"white":"black",a="dark"===e?"#333333":"#cccccc";return n.replace('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" style="background:#1a1a1a">','<style>[class*="node"]{font-size:21px !important; overflow:hidden !important;}.node{color:'.concat(t," !important;} .nodeNotSelected{color:").concat(o," !important;} .nodeSelected{color:").concat(r," !important;} .nodeHidden{color:").concat(a," !important;}")+".sentence{font-size:70px !important;color:".concat(r," !important;text-align:left;font-family:serif}</style>"))}(g)}})}),(0,r.jsxs)(l.yk,{children:[(0,r.jsx)(l.QH,{}),(0,r.jsx)(l.us,{onClick:function(){v(f.TutorialStep.None)}}),(0,r.jsx)(l.Yt,{children:"The Poem"}),(0,r.jsx)(l.b,{fontSize:"16px",padding:"20px",children:"The poem is stored on the blockchain both as text and as the image you see here, available in each token's metadata. With every transaction, the view changes: switching between the poem we've constructed so far and a birds' eye view of the diamond"}),(0,r.jsxs)(l.DT,{as:c.kC,children:[(0,r.jsx)(c.LZ,{}),(0,r.jsx)(s.zx,{onClick:function(){v(f.TutorialStep.TokenList)},children:"next"})]})]})]}):(0,r.jsx)(c.M5,{children:g})}},3920:function(e,n,t){"use strict";t.r(n),t.d(n,{CHAIN_ID_TO_NAME:function(){return a},CONTRACT_INFO:function(){return s},CONTRACT_NAME:function(){return c},PARAGRAPH_SPACING:function(){return r},SUPPORTED_CHAINS:function(){return u},ZERO_ADDRESS:function(){return i},getDefaultChainId:function(){return l}});var o=t(8448),r=5,a={"0x0":"Not connected","0x1":"Ethereum","0x3":"Ropsten","0x4":"Rinkeby","0x5":"Goerli","0x2a":"Kovan"},i="0x0000000000000000000000000000000000000000",c="Pathfinder",s={"0x5":{address:"0xC00eBE404C500AD9134344c4d1b1f8b2f1CfAD33",abi:o.abi,openSeaLink:"https://testnets.opensea.io/collection/pathfinder"}},u=Object.keys(s),l=function(){return void 0!==s["0x1"]?"0x1":"0x5"}},6601:function(){}}]);