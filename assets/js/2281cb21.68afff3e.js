"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=n,h=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={title:"Dashboards",sidebar_position:3},i=void 0,l={unversionedId:"graft/dashboards",id:"graft/dashboards",title:"Dashboards",description:"Init dashboard",source:"@site/docs/graft/dashboards.md",sourceDirName:"graft",slug:"/graft/dashboards",permalink:"/docs/graft/dashboards",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/graft/dashboards.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Dashboards",sidebar_position:3},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/graft/config"},next:{title:"Panels",permalink:"/docs/graft/panels"}},s={},d=[{value:"Init dashboard",id:"init-dashboard",level:2},{value:"Backup dashboards",id:"backup-dashboards",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"init-dashboard"},"Init dashboard"),(0,n.kt)("p",null,"Dashboards initialized with graft are stored in the Eigen Layer folder in the Grafana instance. To initialize a new dashboard use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"graft dashboard create [title]\n")),(0,n.kt)("p",null,"Graft will create an empty dashboard with the specified title in the Eigen Layer folder."),(0,n.kt)("p",null,"This command could be executed in the folder with the configuration file or alternatively, the ",(0,n.kt)("inlineCode",{parentName:"p"},"--config/-c")," flag could be used to specify the path to it."),(0,n.kt)("h2",{id:"backup-dashboards"},"Backup dashboards"),(0,n.kt)("p",null,"Dashboards are saved in JSON format, and they could be restored using the Grafana UI later, or by using a Middleware wizard setup tool. To get all the dashboard JSON files in the Eigen Layer folder, use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"graft dashboard backup\n")),(0,n.kt)("p",null,"This will save all the JSON dashboards in the ",(0,n.kt)("inlineCode",{parentName:"p"},"dashboards")," directory in the current working directory. Could be useful to run it in the root of the Middleware profile directory to save dashboards following the Middleware package structure, follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/packaging/#profile"},"this link")," to learn more about the Middleware profile structure."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Note that the backup files will contain all the information necessary to restore the dashboards, including the ",(0,n.kt)("inlineCode",{parentName:"p"},"uid"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"title"),", and other relevant configuration settings.")))}u.isMDXComponent=!0}}]);