"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:0},o="Introduction",s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"In the EigenLayer ecosystem, Ethereum validators can restake their beacon chain ETH, accept delegations in the form of native ETH or LSTs, and run node software specific to Actively Validated Services (AVS). A Data Availability Layer such as EigenDA serves as a prime example of an AVS.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",next:{title:"AVS Node Specification",permalink:"/docs/category/avs-node-specification"}},c={},l=[{value:"Definitions",id:"definitions",level:2},{value:"MUST",id:"must",level:3},{value:"SHOULD",id:"should",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://www.eigenlayer.xyz/"},"EigenLayer")," ecosystem, Ethereum validators can restake their beacon chain ETH, accept delegations in the form of native ETH or LSTs, and run node software specific to ",(0,a.kt)("a",{parentName:"p",href:"/docs/glossary#avs-actively-validated-service"},"Actively Validated Services (AVS)"),". A Data Availability Layer such as EigenDA serves as a prime example of an AVS."),(0,a.kt)("p",null,"With the increasing number of AVS use cases, there is a need for a convention on how to develop, maintain, create interoperability, and monitor them. This documentation describes the AVS Node Specification."),(0,a.kt)("p",null,"The documentation is divided into the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/category/avs-node-specification"},"AVS Node Specification"),": A full description of the specification that covers from AVS packaging to Standard Metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/category/keys-management"},"Key Management"),": Good practices for keys management.")),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("h3",{id:"must"},"MUST"),(0,a.kt)("p",null,'When the term "',(0,a.kt)("strong",{parentName:"p"},"MUST"),'" is used in this documentation, it denotes an absolute requirement. Failing to follow a "',(0,a.kt)("strong",{parentName:"p"},"MUST"),'" directive may result in the AVS  not functioning as intended or could lead to undesirable outcomes. It is imperative that operators and AVS developers adhere to any instruction or guideline marked with "',(0,a.kt)("strong",{parentName:"p"},"MUST"),'" to ensure the correct and optimal operation of the AVS.'),(0,a.kt)("p",null,"Example Usage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Operators ',(0,a.kt)("strong",{parentName:"li"},"MUST"),' safeguard their keys."'),(0,a.kt)("li",{parentName:"ul"},'"The AVS ',(0,a.kt)("strong",{parentName:"li"},"MUST"),' be updated to the latest version to access new features."')),(0,a.kt)("h3",{id:"should"},"SHOULD"),(0,a.kt)("p",null,'The term "',(0,a.kt)("strong",{parentName:"p"},"SHOULD"),'" in this documentation indicates a strong recommendation. While not an absolute requirement like "',(0,a.kt)("strong",{parentName:"p"},"MUST"),'", following a "',(0,a.kt)("strong",{parentName:"p"},"SHOULD"),'" directive is highly advised to achieve the best possible experience or outcome. Ignoring a "',(0,a.kt)("strong",{parentName:"p"},"SHOULD"),'" guideline might not break the AVS, but it could lead to suboptimal results or missed opportunities for enhanced functionality.'),(0,a.kt)("p",null,"Example Usage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Operators ',(0,a.kt)("strong",{parentName:"li"},"SHOULD"),' regularly back up their data to prevent potential loss."'),(0,a.kt)("li",{parentName:"ul"},'"For optimal performance, you ',(0,a.kt)("strong",{parentName:"li"},"SHOULD"),' stick to the AVS hardware requirements."')))}d.isMDXComponent=!0}}]);