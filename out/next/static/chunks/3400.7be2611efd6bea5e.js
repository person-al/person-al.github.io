"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3400],{3400:function(t,r,e){e.r(r),e.d(r,{MintModal:function(){return O}});var o=e(828),i=e(5893),n=e(7294),s=e(3621),a=e(6441),m=e(1581),u=e(8794),l=e(2593);const f=new m.Yd(u.i),c={},h=l.O$.from(0),d=l.O$.from(-1);function g(t,r,e,o){const i={fault:r,operation:e};return void 0!==o&&(i.value=o),f.throwError(t,m.Yd.errors.NUMERIC_FAULT,i)}let w="0";for(;w.length<256;)w+=w;function v(t){if("number"!==typeof t)try{t=l.O$.from(t).toNumber()}catch(r){}return"number"===typeof t&&t>=0&&t<=256&&!(t%1)?"1"+w.substring(0,t):f.throwArgumentError("invalid decimal size","decimals",t)}function x(t,r){null==r&&(r=0);const e=v(r),o=(t=l.O$.from(t)).lt(h);o&&(t=t.mul(d));let i=t.mod(e).toString();for(;i.length<e.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const n=t.div(e).toString();return t=1===e.length?n:n+"."+i,o&&(t="-"+t),t}function p(t,r){null==r&&(r=0);const e=v(r);"string"===typeof t&&t.match(/^-?[0-9.]+$/)||f.throwArgumentError("invalid decimal value","value",t);const o="-"===t.substring(0,1);o&&(t=t.substring(1)),"."===t&&f.throwArgumentError("missing value","value",t);const i=t.split(".");i.length>2&&f.throwArgumentError("too many decimal points","value",t);let n=i[0],s=i[1];for(n||(n="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>e.length-1&&g("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<e.length-1;)s+="0";const a=l.O$.from(n),m=l.O$.from(s);let u=a.mul(e).add(m);return o&&(u=u.mul(d)),u}class _{constructor(t,r,e,o){t!==c&&f.throwError("cannot use FixedFormat constructor; use FixedFormat.from",m.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=r,this.width=e,this.decimals=o,this.name=(r?"":"u")+"fixed"+String(e)+"x"+String(o),this._multiplier=v(o),Object.freeze(this)}static from(t){if(t instanceof _)return t;"number"===typeof t&&(t=`fixed128x${t}`);let r=!0,e=128,o=18;if("string"===typeof t)if("fixed"===t);else if("ufixed"===t)r=!1;else{const i=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||f.throwArgumentError("invalid fixed format","format",t),r="u"!==i[1],e=parseInt(i[2]),o=parseInt(i[3])}else if(t){const i=(r,e,o)=>null==t[r]?o:(typeof t[r]!==e&&f.throwArgumentError("invalid fixed format ("+r+" not "+e+")","format."+r,t[r]),t[r]);r=i("signed","boolean",r),e=i("width","number",e),o=i("decimals","number",o)}return e%8&&f.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",e),o>80&&f.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",o),new _(c,r,e,o)}}class b{constructor(t,r,e,o){t!==c&&f.throwError("cannot use FixedNumber constructor; use FixedNumber.from",m.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=o,this._hex=r,this._value=e,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&f.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const r=p(this._value,this.format.decimals),e=p(t._value,t.format.decimals);return b.fromValue(r.add(e),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const r=p(this._value,this.format.decimals),e=p(t._value,t.format.decimals);return b.fromValue(r.sub(e),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const r=p(this._value,this.format.decimals),e=p(t._value,t.format.decimals);return b.fromValue(r.mul(e).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const r=p(this._value,this.format.decimals),e=p(t._value,t.format.decimals);return b.fromValue(r.mul(this.format._multiplier).div(e),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");1===t.length&&t.push("0");let r=b.from(t[0],this.format);const e=!t[1].match(/^(0*)$/);return this.isNegative()&&e&&(r=r.subUnsafe(y.toFormat(r.format))),r}ceiling(){const t=this.toString().split(".");1===t.length&&t.push("0");let r=b.from(t[0],this.format);const e=!t[1].match(/^(0*)$/);return!this.isNegative()&&e&&(r=r.addUnsafe(y.toFormat(r.format))),r}round(t){null==t&&(t=0);const r=this.toString().split(".");if(1===r.length&&r.push("0"),(t<0||t>80||t%1)&&f.throwArgumentError("invalid decimal count","decimals",t),r[1].length<=t)return this;const e=b.from("1"+w.substring(0,t),this.format),o=E.toFormat(this.format);return this.mulUnsafe(e).addUnsafe(o).floor().divUnsafe(e)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(t){if(null==t)return this._hex;t%8&&f.throwArgumentError("invalid byte width","width",t);const r=l.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return(0,a.$m)(r,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return b.fromString(this._value,t)}static fromValue(t,r,e){return null!=e||null==r||(0,l.Zm)(r)||(e=r,r=null),null==r&&(r=0),null==e&&(e="fixed"),b.fromString(x(t,r),_.from(e))}static fromString(t,r){null==r&&(r="fixed");const e=_.from(r),o=p(t,e.decimals);!e.signed&&o.lt(h)&&g("unsigned value cannot be negative","overflow","value",t);let i=null;e.signed?i=o.toTwos(e.width).toHexString():(i=o.toHexString(),i=(0,a.$m)(i,e.width/8));const n=x(o,e.decimals);return new b(c,i,n,e)}static fromBytes(t,r){null==r&&(r="fixed");const e=_.from(r);if((0,a.lE)(t).length>e.width/8)throw new Error("overflow");let o=l.O$.from(t);e.signed&&(o=o.fromTwos(e.width));const i=o.toTwos((e.signed?0:1)+e.width).toHexString(),n=x(o,e.decimals);return new b(c,i,n,e)}static from(t,r){if("string"===typeof t)return b.fromString(t,r);if((0,a._t)(t))return b.fromBytes(t,r);try{return b.fromValue(t,0,r)}catch(e){if(e.code!==m.Yd.errors.INVALID_ARGUMENT)throw e}return f.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!(!t||!t._isFixedNumber)}}const y=b.from(1),E=b.from("0.5"),F=new m.Yd("units/5.7.0"),S=["wei","kwei","mwei","gwei","szabo","finney","ether"];function N(t){return function(t,r){if("string"!==typeof t&&F.throwArgumentError("value must be a string","value",t),"string"===typeof r){const t=S.indexOf(r);-1!==t&&(r=3*t)}return p(t,null!=r?r:18)}(t,18)}var A=e(2562),O=function(t){var r=t.onSuccess,e=t.onError,a=(0,s.useBlockchainContext)().contractConnection,m=(0,o.Z)(n.useState(""),2),u=m[0],l=m[1];n.useEffect((function(){a&&a.mintFee().then((function(t){var r=t/Math.pow(10,17);l(r.toString())}))}),[a]);return(0,i.jsx)(A.ContractWriteModal,{triggerButtonText:"Buy",triggerButtonColorScheme:"yellow",header:"Buy a gem",confirmButtonText:"Buy",inProgressMessage:"completing transaction, please wait until the transaction is confirmed...",successMessage:"Gem purchased!",modalBody:(0,i.jsxs)("span",{children:["This gem costs ",u," ETH. You may only buy one gem from The Shopkeeper directly, and you may only hold 3 gems at a time. Ready? Note that this action requires Metamask."]}),callContract:function(t){return t.mint({value:N(u)})},onSuccess:r,onError:e})}}}]);