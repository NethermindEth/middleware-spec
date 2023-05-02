"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8961:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={title:"Introduction",sidebar_position:1},o=void 0,l={unversionedId:"wizard/intro",id:"wizard/intro",title:"Introduction",description:"The specification described throughout this document can be used to manage multiple Middleware services in the same host machine with a Middleware wizard setup tool. Such a tool will be built and will provide the following functionalities:",source:"@site/docs/wizard/intro.md",sourceDirName:"wizard",slug:"/wizard/intro",permalink:"/docs/wizard/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/wizard/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"sidebar",previous:{title:"Setup wizard",permalink:"/docs/category/setup-wizard"},next:{title:"Packaging & Upgrading",permalink:"/docs/category/packaging--upgrading"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The specification described throughout this document can be used to manage multiple Middleware services in the same host machine with a ",(0,i.kt)("strong",{parentName:"p"},"Middleware wizard setup tool"),". Such a tool will be built and will provide the following functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install, Update, and Uninstall Middleware services"),(0,i.kt)("li",{parentName:"ul"},"Set up a Monitoring stack for Middleware services using Prometheus and Grafana"),(0,i.kt)("li",{parentName:"ul"},"Backup and Restore Middleware services"),(0,i.kt)("li",{parentName:"ul"},"Run a ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugin/intro"},"plugin")," on a given Middleware service setup"),(0,i.kt)("li",{parentName:"ul"},"Display Middleware services logs"),(0,i.kt)("li",{parentName:"ul"},"Describe the status of an already set up Middleware service")),(0,i.kt)("admonition",{title:"Disclaimer",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Middleware wizard setup tool has yet to be made available. It is currently in its development phase.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"A work-in-progress description of the tool functionalities can be found ",(0,i.kt)("a",{parentName:"p",href:"https://nethermind.notion.site/Wizard-Tool-Functionalities-96e5f2d682ce49bba78d38b6e4df4665b"},"here"))),(0,i.kt)("p",null,"The tool will be open-source for on-premise setups only on Linux machines and must be installed by node operators that want access to all the tool's features. It will be developed and maintained jointly by Layr Labs Inc and Nethermind."),(0,i.kt)("p",null,"As more information becomes available and can be published in the futurei, this section will be progressively updated with additional details and insights regarding the setup wizard."))}u.isMDXComponent=!0}}]);