"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7405,3683,3567,3038,2157],{3038:function(e,n,t){t.d(n,{Cd:function(){return j},X:function(){return p},bZ:function(){return g},zM:function(){return C}});var r=t(7294),o=t(2873),a=t(4520),s=t(8387),c=t(2494),i=t(5610),l=(...e)=>e.filter(Boolean).join(" ");function u(e){return r.createElement(c.JO,{viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}var[d,h]=(0,s.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[f,m]=(0,s.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),x={info:{icon:function(e){return r.createElement(c.JO,{viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}))},colorScheme:"blue"},warning:{icon:u,colorScheme:"orange"},success:{icon:function(e){return r.createElement(c.JO,{viewBox:"0 0 24 24",...e},r.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))},colorScheme:"green"},error:{icon:u,colorScheme:"red"},loading:{icon:i.$,colorScheme:"blue"}};var g=(0,o.Gp)((function(e,n){const{status:t="info",addRole:s=!0,...c}=(0,a.Lr)(e),i=e.colorScheme??function(e){return x[e].colorScheme}(t),u=(0,o.jC)("Alert",{...e,colorScheme:i}),h={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...u.container};return r.createElement(d,{value:{status:t}},r.createElement(f,{value:u},r.createElement(o.m$.div,{role:s?"alert":void 0,ref:n,...c,className:l("chakra-alert",e.className),__css:h})))}));g.displayName="Alert";var p=(0,o.Gp)((function(e,n){const t={display:"inline",...m().description};return r.createElement(o.m$.div,{ref:n,...e,className:l("chakra-alert__desc",e.className),__css:t})}));function C(e){const{status:n}=h(),t=function(e){return x[e].icon}(n),a=m(),s="loading"===n?a.spinner:a.icon;return r.createElement(o.m$.span,{display:"inherit",...e,className:l("chakra-alert__icon",e.className),__css:s},e.children||r.createElement(t,{h:"100%",w:"100%"}))}p.displayName="AlertDescription",C.displayName="AlertIcon";var j=(0,o.Gp)((function(e,n){const t=m();return r.createElement(o.m$.div,{ref:n,...e,className:l("chakra-alert__title",e.className),__css:t.title})}));j.displayName="AlertTitle"},5982:function(e,n,t){t.r(n),t.d(n,{BurnModal:function(){return i}});var r=t(828),o=t(5893),a=t(7294),s=t(7742),c=t(2562),i=function(){var e=(0,r.Z)(a.useState(0),2),n=e[0],t=e[1];return(0,o.jsx)(c.ContractWriteModal,{triggerButtonText:"Destroy",triggerButtonColorScheme:"red",header:"Destroy a gem",confirmButtonText:"Burn",inProgressMessage:"destroying...",successMessage:"Destroyed!",modalBody:(0,o.jsxs)(o.Fragment,{children:["This will burn your token. Doing so will take us one step closer to our final poem. You may only destroy a gem you own. Are you ready? Note that this action requires Metamask.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Select a gem to destroy:",(0,o.jsxs)(s.Y2,{min:0,max:6,onChange:function(e,n){return t(n)},value:n,children:[(0,o.jsx)(s.zu,{}),(0,o.jsxs)(s.Fi,{children:[(0,o.jsx)(s.WQ,{}),(0,o.jsx)(s.Y_,{})]})]})]}),callContract:function(e){return e.burn(n)}})}},3683:function(e,n,t){t.r(n),t.d(n,{ContractWriteOptions:function(){return x}});var r=t(5893),o=(t(7294),t(7741)),a=t(3621),s=t(5982),c=t(3920),i=t(3750),l=t(2494),u=t(7927),d=t(2415),h=t(2157),f=t(3567),m=t(9755),x=function(){var e=(0,a.useBlockchainContext)(),n=e.contractConnection,t=e.chainId,x=(0,f.useNavContext)(),g=x.setTutorialState,p=x.setCurrPage,C=(0,m.q)(),j=C.onOpen,v=C.onClose;return(0,r.jsxs)(u.kC,{flexWrap:"wrap",paddingTop:"10px",gap:5,children:[(0,r.jsxs)(d.J2,{returnFocusOnClose:!1,onOpen:function(){g(f.TutorialStep.Rules),j()},onClose:v,placement:"left-end",children:[(0,r.jsx)(d.xo,{children:(0,r.jsx)(o.hU,{variant:"ghost","aria-label":"the rules",fontSize:"20px",icon:(0,r.jsx)(l.ZP,{as:i.Hfo})})}),(0,r.jsxs)(d.yk,{children:[(0,r.jsx)(d.QH,{}),(0,r.jsx)(d.us,{}),(0,r.jsx)(d.Yt,{children:"Rules"}),(0,r.jsx)(d.b,{fontSize:"16px",padding:"20px",children:(0,r.jsx)(h.Rules,{})}),(0,r.jsxs)(d.DT,{as:u.kC,children:[(0,r.jsx)(u.LZ,{}),(0,r.jsx)(o.zx,{onClick:function(){g(f.TutorialStep.Image)},children:"next"})]})]})]}),(0,r.jsx)(o.zx,{colorScheme:"yellow",onClick:function(){return p(f.Pages.About)},children:"Find"},"nav"),(0,r.jsx)(s.BurnModal,{}),(0,r.jsx)(o.zx,{onClick:function(){return window.open("https://".concat(c.CHAIN_ID_TO_NAME[t].toLowerCase(),".etherscan.io/address/").concat(c.CONTRACT_INFO[t].address,"#readContract"))},disabled:!n,children:"Etherscan"}),c.CONTRACT_INFO[t]&&c.CONTRACT_INFO[t].openSeaLink&&(0,r.jsx)(o.zx,{onClick:function(){return window.open(c.CONTRACT_INFO[t].openSeaLink)},children:"OpenSea"})]})}},3567:function(e,n,t){t.r(n),t.d(n,{NavContext:function(){return s},Pages:function(){return r},TutorialStep:function(){return o},useNavContext:function(){return c}});var r,o,a=t(7294);!function(e){e.CurrStatus="POEM",e.About="STORY",e.Home="LAND"}(r||(r={})),function(e){e.None="NONE",e.Rules="RULES",e.Image="IMAGE",e.TokenList="TOKENLIST"}(o||(o={}));var s=a.createContext({currPage:r.About,setCurrPage:function(e){},tutorialState:o.None,setTutorialState:function(e){}}),c=function(){return a.useContext(s)}},2157:function(e,n,t){t.r(n),t.d(n,{Rules:function(){return a}});var r=t(5893),o=(t(7294),t(7927)),a=function(e){var n=e.headingSize;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(o.X6,{size:n,children:"Rules"}),(0,r.jsxs)(o.QI,{textAlign:"left",children:[(0,r.jsx)(o.HC,{children:"there are 7 total NFTs available"}),(0,r.jsx)(o.HC,{children:"you may mint a maximum of one token"}),(0,r.jsx)(o.HC,{children:"you may hold up to 3 tokens at a time"}),(0,r.jsx)(o.HC,{children:"minting, transferring, and holding all impact the path we take down the diamond"}),(0,r.jsx)(o.HC,{children:"burning a token is the only way to take our next step"})]})]})}},7405:function(e,n,t){t.r(n),t.d(n,{TransactionList:function(){return g}});var r,o=t(828),a=t(5893),s=t(7927),c=t(1943),i=t(7294),l=t(3621),u=t(8193),d=t(3854),h=t(9583),f=t(3920),m=t(3038),x=t(3683),g=function(){var e=(0,l.useBlockchainContext)(),n=e.contractConnection,t=e.setTokenInfo,r=(0,o.Z)(i.useState(!1),2),u=r[0],d=r[1],h=(0,o.Z)(i.useState(),2),g=h[0],C=h[1],j=(0,o.Z)(i.useState([]),2),v=j[0],N=j[1];i.useEffect((function(){n&&(d(!0),n.queryFilter(n.filters.Transfer()).then((function(e){N(e.sort((function(e,n){return e.blockNumber-n.blockNumber})))})).catch((function(e){return C(e)})).finally((function(){return d(!1)})))}),[n]),i.useEffect((function(){var e=new Set,n=new Map;v.slice().reverse().forEach((function(t){var r=Number(t.args.tokenId);e.has(r)||(t.args.to===f.ZERO_ADDRESS?n.set(r,{owner:f.ZERO_ADDRESS,status:l.TokenStatus.Burned}):n.set(r,{owner:t.args.to,status:l.TokenStatus.Minted}),e.add(r))})),t(n)}),[v,t]);return(0,a.jsxs)(s.kC,{width:"100%",height:"100%",direction:"column",children:[u&&(0,a.jsxs)(s.kC,{width:"100%",height:"100%",alignItems:"center",gap:5,padding:30,children:[(0,a.jsx)(c.D8,{isIndeterminate:!0,color:"teal.400"}),(0,a.jsx)("div",{children:"Fetching relevant transactions"})]}),g&&(0,a.jsxs)(m.bZ,{status:"error",children:[(0,a.jsx)(m.zM,{}),"Error fetching transactions: ",g.message]}),!u&&v.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.X6,{as:"h5",size:"md",textAlign:"left",children:"Transactions"}),(0,a.jsx)(s.aV,{spacing:5,textAlign:"left",padding:"20px",overflow:"scroll",children:v.map((function(e){return(0,a.jsx)(p,{from:e.args.from,to:e.args.to,tokenId:e.args.tokenId,blockNumber:e.blockNumber},e.blockNumber)}))}),(0,a.jsx)(s.LZ,{})]}),(0,a.jsx)(x.ContractWriteOptions,{})]})};!function(e){e.Burn="BURN",e.Mint="MINT",e.Transfer="TRANSFER"}(r||(r={}));var p=function(e){var n=e.from,t=e.to,o=e.tokenId,c=r.Transfer;n===f.ZERO_ADDRESS?c=r.Mint:t===f.ZERO_ADDRESS&&(c=r.Burn);return(0,a.jsxs)(s.HC,{children:[function(){switch(c){case r.Burn:return(0,a.jsx)(s.DE,{as:u.o$9,color:"red.500"});case r.Mint:return(0,a.jsx)(s.DE,{as:d.dvR,color:"yellow.500"});case r.Transfer:return(0,a.jsx)(s.DE,{as:h.Cq,color:"cyan.500"});default:return(0,a.jsx)(s.DE,{as:h.Cq})}}(),function(){var e=n.length,a="0x...".concat(n.substring(e-5)),s="0x...".concat(t.substring(e-5));switch(c){case r.Burn:return"Gem ".concat(o," burned by ").concat(a);case r.Mint:return"Gem ".concat(o," minted by ").concat(s);case r.Transfer:return"Gem ".concat(o," transferred from ").concat(a," to ").concat(s);default:return"unrecognized transaction"}}()]})}}}]);