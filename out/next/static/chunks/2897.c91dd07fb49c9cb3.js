"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2897],{3926:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(7294),o=n(1784);function u(e,t,n,u){const s=(0,o.W)(n);return(0,r.useEffect)((()=>{const r="function"===typeof e?e():e??document;if(n&&r)return r.addEventListener(t,s,u),()=>{r.removeEventListener(t,s,u)}}),[t,e,u,s,n]),()=>{const n="function"===typeof e?e():e??document;null==n||n.removeEventListener(t,s,u)}}},5314:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(7294);function o(e,t){const n=(0,r.useRef)(!1),o=(0,r.useRef)(!1);(0,r.useEffect)((()=>{if(n.current&&o.current)return e();o.current=!0}),t),(0,r.useEffect)((()=>(n.current=!0,()=>{n.current=!1})),[])}},5982:function(e,t,n){n.r(t),n.d(t,{BurnModal:function(){return i}});var r=n(828),o=n(5893),u=n(7294),s=n(7742),c=n(2562),i=function(){var e=(0,r.Z)(u.useState(0),2),t=e[0],n=e[1];return(0,o.jsx)(c.ContractWriteModal,{triggerButtonText:"Destroy",triggerButtonColorScheme:"red",header:"Destroy a gem",confirmButtonText:"Burn",inProgressMessage:"destroying...",successMessage:"Destroyed!",modalBody:(0,o.jsxs)(o.Fragment,{children:["This will burn your token. Doing so will take us one step closer to our final poem. You may only destroy a gem you own. Are you ready? Note that this action requires Metamask.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"Select a gem to destroy:",(0,o.jsxs)(s.Y2,{min:0,max:6,onChange:function(e,t){return n(t)},value:t,children:[(0,o.jsx)(s.zu,{}),(0,o.jsxs)(s.Fi,{children:[(0,o.jsx)(s.WQ,{}),(0,o.jsx)(s.Y_,{})]})]})]}),callContract:function(e){return e.burn(t)}})}}}]);