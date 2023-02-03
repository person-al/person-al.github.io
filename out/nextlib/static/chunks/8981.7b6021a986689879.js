"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8981,8694],{7741:function(e,t,n){n.d(t,{hU:function(){return g},zx:function(){return f}});var o=n(7294),a=n(7761),r=n(2873),s=n(4520),i=n(8387),l=n(5610),h=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,[u,d]=(0,i.k)({strict:!1,name:"ButtonGroupContext"});function m(e){const{children:t,className:n,...a}=e,s=(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,i=h("chakra-button__icon",n);return o.createElement(r.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:i},s)}function p(e){const{label:t,placement:n,spacing:a="0.5rem",children:s=o.createElement(l.$,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:c,...u}=e,d=h("chakra-button__spinner",i),m="start"===n?"marginEnd":"marginStart",p=(0,o.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?a:0,fontSize:"1em",lineHeight:"normal",...c})),[c,t,m,a]);return o.createElement(r.m$.div,{className:d,...u,__css:p},s)}m.displayName="ButtonIcon",p.displayName="ButtonSpinner";var f=(0,r.Gp)(((e,t)=>{const n=d(),i=(0,r.mq)("Button",{...n,...e}),{isDisabled:l=(null==n?void 0:n.isDisabled),isLoading:u,isActive:m,children:f,leftIcon:g,rightIcon:w,loadingText:b,iconSpacing:k="0.5rem",type:x,spinner:v,spinnerPlacement:j="start",className:I,as:S,...E}=(0,s.Lr)(e),Y=(0,o.useMemo)((()=>{const e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}}),[i,n]),{ref:N,type:A}=function(e){const[t,n]=(0,o.useState)(!e);return{ref:(0,o.useCallback)((e=>{e&&n("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(S),T={rightIcon:w,leftIcon:g,iconSpacing:k,children:f};return o.createElement(r.m$.button,{disabled:l||u,ref:(0,a.qq)(t,N),as:S,type:x??A,"data-active":c(m),"data-loading":c(u),__css:Y,className:h("chakra-button",I),...E},u&&"start"===j&&o.createElement(p,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:k},v),u?b||o.createElement(r.m$.span,{opacity:0},o.createElement(y,{...T})):o.createElement(y,{...T}),u&&"end"===j&&o.createElement(p,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:k},v))}));function y(e){const{leftIcon:t,rightIcon:n,children:a,iconSpacing:r}=e;return o.createElement(o.Fragment,null,t&&o.createElement(m,{marginEnd:r},t),a,n&&o.createElement(m,{marginStart:r},n))}f.displayName="Button",(0,r.Gp)((function(e,t){const{size:n,colorScheme:a,variant:s,className:i,spacing:l="0.5rem",isAttached:c,isDisabled:d,...m}=e,p=h("chakra-button__group",i),f=(0,o.useMemo)((()=>({size:n,colorScheme:a,variant:s,isDisabled:d})),[n,a,s,d]);let y={display:"inline-flex"};return y=c?{...y,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...y,"& > *:not(style) ~ *:not(style)":{marginStart:l}},o.createElement(u,{value:f},o.createElement(r.m$.div,{ref:t,role:"group",__css:y,className:p,"data-attached":c?"":void 0,...m}))})).displayName="ButtonGroup";var g=(0,r.Gp)(((e,t)=>{const{icon:n,children:a,isRound:r,"aria-label":s,...i}=e,l=n||a,h=(0,o.isValidElement)(l)?(0,o.cloneElement)(l,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(f,{padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":s,...i},h)}));g.displayName="IconButton"},7761:function(e,t,n){n.d(t,{lq:function(){return a},qq:function(){return r}});var o=n(7294);function a(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(n){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function r(...e){return(0,o.useMemo)((()=>a(...e)),e)}},5610:function(e,t,n){n.d(t,{$:function(){return l}});var o=n(7294),a=n(917),r=n(2873),s=n(4520),i=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),l=(0,r.Gp)(((e,t)=>{const n=(0,r.mq)("Spinner",e),{label:a="Loading...",thickness:l="2px",speed:h="0.45s",emptyColor:c="transparent",className:u,...d}=(0,s.Lr)(e),m=((...e)=>e.filter(Boolean).join(" "))("chakra-spinner",u),p={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:l,borderBottomColor:c,borderLeftColor:c,animation:`${i} ${h} linear infinite`,...n};return o.createElement(r.m$.div,{ref:t,__css:p,className:m,...d},a&&o.createElement(r.m$.span,{srOnly:!0},a))}));l.displayName="Spinner"},8392:function(e,t,n){var o=n(5893),a=n(7294),r=n(1163),s=n(315),i=n(7741);t.Z=function(e){var t=e.children,n=void 0===t?"Reset":t,l=e.message,h=a.useContext(s.StoryContext),c=h.persistor,u=h.config,d=(0,r.useRouter)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.zx,{colorScheme:"red",onClick:function(){return function(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"Restart story from the beginning?",r="/"+o.basePath+t.identifier;e?confirm(a)&&n.flush().then((function(){n.pause(),localStorage.clear(),window.location.replace(r)})):n.flush().then((function(){n.pause(),localStorage.clear(),window.location.reload()}))}(!0,u,c,d,l)},children:n})})}},8694:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var o=n(5893),a=(n(7294),n(7927));function r(e){var t=e.children;return(0,o.jsx)(a.M5,{children:(0,o.jsx)(a.xu,{width:"70%",textAlign:"left",children:t})})}},1955:function(e,t,n){n.r(t),n.d(t,{Page:function(){return m}});var o=n(828),a=n(5893),r=n(7294),s=n(8712),i=n(8392),l=n(309),h=n(7881),c=n(3697),u=n(7996),d=n(8694),m=function(){var e=(0,o.Z)((0,h.Z)(["pocketAnimal","pocketBagel","locationChoice"]),3),t=e[0],n=e[1],m=e[2],p=["a piece of lint","a sparkly purple hairtie","a ten dollar bill"];t&&!t.includes("leave")&&p.push("a small ceramic ".concat((0,u.S)(t))),n&&n.includes("take")&&p.push("a slightly squished bagel");var f=(0,o.Z)((0,h.Z)(["identity","firstChoice","flattery","honesty","offering"]),5),y=f[0],g=f[1],w=f[2],b=f[3],k=f[4],x=(0,o.Z)(r.useState(!1),2),v=x[0],j=x[1];return r.useEffect((function(){y&&!v&&(y.includes("trickster")||y.includes("treasure"))&&j(!0)}),[y,v,j]),(0,a.jsx)(d.default,{children:(0,a.jsxs)(s.WC,{filename:"chapter3",children:[(0,a.jsxs)(s.$0,{children:[(0,a.jsx)("p",{children:"You push the heavy wooden door open slowly. The sound of bells tinkles through the air as you take in the sights and smells. It's a small, one-room hut, dimly lit by a single light-bulb hanging from the ceiling. Every square inch is packed with velvet, jewels, and bottled body parts. It smells like magic and dust. In front of you there's a wooden counter, also packed with bottles and plants and books. And behind the counter, with her backed turned to you, stands an old woman. Without turning around she says, \"I smell a human. Who goes there and what do you seek?\""}),y?(0,a.jsxs)("p",{children:["You answer without hesitating:"," ",(0,a.jsx)(s.R,{tag:"identity",options:{treasure:'"I am a treasure-hunter. I seek the wealth of your experience."',artist:'"I am an artist. I seek the intangible that makes life worth living."',explorer:'"I am an explorer: adventure is my goal."',trickster:'"I am a trickster. I love any kind of game."'}})]}):(0,a.jsxs)("p",{children:["Who are you? Are you a"," ",(0,a.jsx)(s.C,{options:[["treasure-hunter","artist","explorer","trickster"]],tag:"identity"}),"?"]})]}),(0,a.jsxs)(s.$0,{children:[(0,a.jsx)("p",{children:"The old woman turns, two pinpoints of red light shining from deep in a black hood. She pushes the hood back to reveal a shock of white hair; wrinkles running rivers across her cheekbones. Those red lights, it turns out, are two of her four eyes: the first two a glowing ruby red, the second two a vivid blue. You try your best not to shudder."}),(0,a.jsxs)("p",{children:['"And tell me, ',y,", what makes you think ",(0,a.jsx)("i",{children:"I"}),' have what you seek?"']}),(0,a.jsx)(s.nA,{condition:g,otherwise:(0,a.jsxs)("p",{children:["You need to make a positive first impression. But what does that mean for a creature like this? You can try to"," ",(0,a.jsx)(s.C,{options:[["flatter her","intimidate her","just be honest"]],tag:"firstChoice"}),"."]}),children:(0,a.jsx)("p",{children:(0,a.jsx)(s.R,{tag:"firstChoice",options:{flatter:"\"I've heard great things about your collection. If you don't have it, no one will.\"",intimidate:'"This isn\'t my first rodeo. I know who you are."',honest:"\"I don't know. But I've been told that those wish to understand the dwarves' final art piece must come to you.\""}})})})]}),(0,a.jsxs)(s.$0,{children:[(0,a.jsxs)(s.nA,{condition:g&&g.includes("intimidate"),children:[(0,a.jsx)("p",{children:"The light flickers, then dims further. Your toes curl as the heat flees your body like rats from a plague. The Shopkeeper grows impossibly large before your very eyes. Her blue set of eyes, each now as big as your head, loom inches from your nose."}),(0,a.jsxs)("p",{children:['"Oh, do you now?" she asks sweetly. "Then you must know ',(0,a.jsx)("i",{children:"just"})," how foolish you are to come here, little mortal. ",(0,a.jsx)("i",{children:"Don't you"}),'."']}),(0,a.jsx)("p",{children:'"I simply mean to say," you backtrack, struggling to keep your voice steady. No need to betray how close you are to wetting your pants. "I simply mean to say that I\'ve heard great things about your collection. If you don\'t have it, no one will."'}),(0,a.jsx)("p",{children:"It's as if your previous blunder had never occured. In the blink of an eye, she's back to her normal size, standing behind the counter smiling sweetly."}),(0,a.jsx)(s.C,{options:[["phew!"]],tag:"flattery",last:"",next:c.o6.None})]}),(0,a.jsxs)(s.nA,{condition:g&&g.includes("flatter")||w,children:[(0,a.jsxs)("p",{children:['"You\'re absolutely right, of course," she croons. "What ',(0,a.jsx)("i",{children:"are"}),' you looking for?"']}),(0,a.jsxs)("p",{children:["You hestiate for a moment."," ",(0,a.jsx)(s.R,{tag:"identity",options:{trickster:'"I\'ve heard of an ancient game, one made up of seven gems. Have you heard of it?"',treasure:'"I\'ve heard of seven gems, crafted by dwarves: each more valuable than the last."',explorer:'"I\'ve heard of an unfinished adventure: that of seven dwarves forced to leave their treasure behind."',artist:'"I\'ve heard of a glorious story unfinished. That of seven dwarves forced to leave their mountain. Their final poem lies dormant, waiting to be told."'}})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)(s.R,{tag:"identity",options:{trickster:'"Hah! That\'s a game that will play you, child." ',treasure:'"Hah! That is no simple trinket, pet. If these gems were made for traders like us, I\'d be seeking them myself." ',explorer:'"Hah! Do you seek to finish their adventure for them? Do you have what it takes?" ',artist:'"Hah! You humans truly are as foolish romantics." '}}),'She sees the disappointment on your face and lets out a hum. "No matter, little one.'," ",(0,a.jsx)(s.C,{options:[["Perhaps I can at least tell you their history..."]],tag:"honesty",next:c.o6.None}),'."']})]}),(0,a.jsxs)(s.nA,{condition:g&&g.includes("honest")||b,children:[(0,a.jsx)("p",{children:"She smiles knowingly, and you jump at a realization."}),(0,a.jsx)("p",{children:'"Of course," you say, "a story like this must be paid for."'}),(0,a.jsx)("p",{children:'She nods, "Yes, of course. A small token for a small story."'}),(0,a.jsx)("p",{children:"You reach into your pockets, your fingers rifling through your options:"}),(0,a.jsx)(s.C,{options:[p],tag:"offering",widget:l.hU}),k&&(0,a.jsxs)("p",{children:["You offer her ",k,"."]})]})]}),(0,a.jsxs)(s.$0,{children:[(0,a.jsxs)(s.nA,{condition:g&&k&&g.includes("intimidate")&&k.includes("lint"),children:[(0,a.jsx)("p",{children:"The Shopkeeper shrinks away from you, her face writhing with rage."}),(0,a.jsx)("p",{children:'"You were foolish to come, mortal. And even more foolish to offend me twice. Not to worry, I won\'t make you leave." She cackles, her red eyes sparkling. "No, I won\'t be so merciful."'}),(0,a.jsx)("p",{children:"Your skin begins to tighten: the pain is unimaginable."}),(0,a.jsx)("p",{children:'You look over to The Shopkeeper, whose laughter has faded to a bone-chilling grin, "I\'ve needed a new gargoyle. The last one finished his sentence years ago." Even her pointy teeth sparkle like laughter. "Don\'t worry, pet. A few years of customer service will fix your attitude right up!"'}),(0,a.jsx)(i.Z,{children:"Start Over"})]}),(0,a.jsxs)(s.nA,{condition:g&&k&&!g.includes("intimidate")&&k.includes("lint"),children:[(0,a.jsx)("p",{children:"The Shopkeeper shrinks away from you, her face writhing with rage."}),(0,a.jsx)("p",{children:"\"You were foolish to come, mortal. And even more foolish to offend me. You're lucky I'm about to let you leave alive.\""}),(0,a.jsxs)("p",{children:["You find yourself alone",m.includes("subway")?" on ".concat(m):" in ".concat(m),", not a hint of the shop to be found. You'll try again soon, after she's had time to forget you. Hopefully."]}),(0,a.jsx)(i.Z,{children:"Start Over"})]}),(0,a.jsx)(s.R,{tag:"offering",options:{hairtie:(0,a.jsx)("p",{children:'"I suppose that will do", she sighs, tying back her wiry silver hair. You almost wish you\'d offered something else. The clearer her face becomes, the scarier it is.'}),dollar:(0,a.jsxs)("p",{children:['"Oh, splendid!" She takes it quickly and claps her hands. "Ever since you idiots invented social security numbers, it\'s been near ',(0,a.jsx)("i",{children:"impossible"}),' to get human money."']}),frog:(0,a.jsx)("p",{children:'"Oh, splendid!" She claps her hands gleefully. "Familiars always go quickly." The frog grows slimy and warm, jumping out of your hands and disappearing around a corner.'}),bagel:(0,a.jsxs)("p",{children:['"Oh, splendid!" She takes it quickly and claps her hands. "Ever since you idiots invented social security numbers, it\'s been near ',(0,a.jsx)("i",{children:"impossible"}),' to buy a decent bagel myself."']}),tabby:(0,a.jsx)("p",{children:'"Oh, splendid!" She claps her hands gleefully. "Familiars always go quickly." The cat grows heavy and warm, jumping out of your hands and disappearing around a corner.'})}}),(0,a.jsxs)(s.nA,{condition:k&&!k.includes("lint"),children:[(0,a.jsx)("p",{children:"Against all odds, The Shopkeeper has seated you in a plush, purple velvet chair. She sits across from you, laying comfortably against a wooden rocking chair. Against all odds, you are both holding steaming cups of tea. You're unsure if it's safe to drink."}),(0,a.jsx)("p",{children:'"You\'re smart," the old woman laughs, resting a bony chin in an equally bony hand. Her fingers are lined with small, feathery tentacles that caress her face. "I\'ll give you that. Many humans would be dead by now. Don\'t worry, my tea is a gift, not a curse."'}),(0,a.jsx)("p",{children:"You take a tentative sip, as afraid to offend her as you are of the tea. It tastes like chamomile."}),(0,a.jsx)("p",{children:'All four eyes crinkle in a smile. "Now, you wished to hear of the dwarves\' final poem. What do you know already?"'}),(0,a.jsxs)("p",{children:['"I know it\'s encased in a series of gems," you share eagerly.',(0,a.jsx)(s.R,{tag:"identity",options:{trickster:' "And the gems are connected, like puzzle pieces."',treasure:' "Each more valuable than the last."',explorer:' "With the poem split across them. Whether the gems or poem are more valuable remains to be seen."',artist:" \"I've heard it's possible to release the poem, though I'm unsure how.\""}})]}),(0,a.jsxs)("p",{children:['"As expected," the old woman sighs, pausing to sip some tea.',(0,a.jsx)(s.R,{tag:"offering",options:{tabby:"Your roommate's tabby appears from behind a dusty lamp, rubbing its head against her black-clad ankles. ",bagel:" She pulls out the bagel and takes a large, jagged bite, chewing slowly before continuing. "}})," ",'"As expected, you mortals removed everything that matters from the story."']}),(0,a.jsxs)("p",{children:['She leans forward, her tone underscoring the seriousness of her words. "Sparkle means nothing in this world. ',(0,a.jsx)("i",{children:"Nothing"}),' compared to the raw power of magic. And that\'s what they are--" she leans back again, her eyes sparkling. "They are not gems. They are pure magic incarnate."']}),(0,a.jsxs)("p",{children:["You take your time drinking the tea, letting the natural pause mask"," ",(0,a.jsx)(s.C,{options:[["your thoughts."]],tag:"chapter3-yourthoughts"})," ",(0,a.jsx)(s.R,{tag:"identity",options:{trickster:"You're here to play a little game, and while the gems being some kind of physical manifestation of magic doesn't prevent that... Well, you're not sure exactly what that means.",treasure:"You're here for treasure, and magic is much harder to sell than rare gemstones.",explorer:'Your chest is beginning to hum with excitement. You came in search of adventure and "magic incarnate" sounds like quite the adventure.',artist:'Your chest is beginning to hum with excitement. You came in search of art and adventure and "magic incarnate" sounds like quite the medium to play with.'}})]})]})]}),(0,a.jsx)(s.$0,{children:(0,a.jsxs)(s.nA,{condition:k&&!k.includes("lint"),children:[(0,a.jsxs)("p",{children:['The merchant across from you chuckles lightly. "I see you, human," she practically purrs. "I see'," ",v?(0,a.jsxs)("span",{children:["your interest waning. How like your species! Unable to see past the sparkle. Still, you remind me of myself, such"," ",(0,a.jsx)("i",{children:"excitement"})," for the trade. It's cute."]}):"the sparkle in your eye. Powerful magic appeals to you! You remind me of a younger version of myself. Good instincts, but so much to learn.",'"']}),(0,a.jsxs)("p",{children:["You school your face into as neutral an expression you can muster. No reason to tip your hand before a negotiation. Plus, you must hide how you feel about...you hold back a shudder as the words"," ",(0,a.jsx)("i",{children:"you remind me of myself"})," ring in your ears. You glance again at the hollow eyes, the"," ",(0,a.jsx)(s.R,{tag:"offering",options:{hairtie:"tied back "}}),"silver hair that practically crackles when she moves. Hopefully this is how her species manifests and not a result of working with powerful magic all day. Hopefully."]}),(0,a.jsx)("p",{children:'"I\'m just surprised," you say. "Nothing in my research mentioned unusually powerful magic. Just magical gems."'}),(0,a.jsx)("p",{children:'"These dwarves came from Ruby Mountain," The Shopkeeper replies, "a village of miners. Of course they\'d choose a gem shape. But mark my words, no jeweler will be able to place the material. No one knows what they are or what magic was used to create them. There\'s nothing like them on any planet or plane I\'ve travelled. And trust me," her red lips curled into a slight sneer, "I\'ve seen many."'}),(0,a.jsx)("p",{children:'"Is the poem part real?"'}),(0,a.jsxs)("p",{children:['"',(0,a.jsx)(s.JL,{text:"Let me tell it proper.",next:"chapter4"}),'" She settles back in her chair, her rocking taking a slow, rhythmic pace.']})]})})]})})}}}]);