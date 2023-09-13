"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),s=n(6010),i=n(2466),l=n(6550),o=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[o,p]=v({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),h=(()=>{const e=o??c;return m({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,s]),tabValues:s}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==l&&(c(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},a.createElement(f,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},1564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),s=n(4866),i=n(5162);const l={sidebar_position:1,id:"api"},o="AVS Node API",p={unversionedId:"spec/api/api",id:"spec/api/api",title:"AVS Node API",description:"The AVS Node HTTP RESTful API provides a common interface for Nodes designed for the EigenLayer protocol.",source:"@site/docs/spec/api/api.mdx",sourceDirName:"spec/api",slug:"/spec/api/",permalink:"/docs/spec/api/",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/spec/api/api.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"api"},sidebar:"sidebar",previous:{title:"AVS Node API",permalink:"/docs/category/avs-node-api"},next:{title:"Implementation reference",permalink:"/docs/spec/api/api-examples"}},u={},c=[{value:"Base URL",id:"base-url",level:2},{value:"API Versioning",id:"api-versioning",level:2},{value:"Node",id:"node",level:2},{value:"GET /eigen/node/spec-version",id:"get-eigennodespec-version",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Responses",id:"responses",level:4},{value:"GET /eigen/node/version",id:"get-eigennodeversion",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Responses",id:"responses-1",level:4},{value:"GET /eigen/node/health",id:"get-eigennodehealth",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Responses",id:"responses-2",level:4},{value:"GET /eigen/node/services",id:"get-eigennodeservices",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Responses",id:"responses-3",level:4},{value:"GET /eigen/node/services/{service_ID}/health",id:"get-eigennodeservicesservice_idhealth",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Responses",id:"responses-4",level:4}],d={toc:c},m="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avs-node-api"},"AVS Node API"),(0,a.kt)("p",null,"The AVS Node HTTP RESTful API provides a common interface for Nodes designed for the EigenLayer protocol."),(0,a.kt)("h2",{id:"base-url"},"Base URL"),(0,a.kt)("p",null,"The base URL for the API is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/eigen\n")),(0,a.kt)("h2",{id:"api-versioning"},"API Versioning"),(0,a.kt)("p",null,"This document describes the AVS Node API version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.0.1"),". The API version follows the same Eigenlayer AVS Node specification version."),(0,a.kt)("p",null,"The API version can be included in the query string as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/eigen/endpoint?version=0.0.2\n")),(0,a.kt)("p",null,"In case of handling a request without the version query parameter, the API will respond with the latest version of the API."),(0,a.kt)("p",null,"If the requested version is not supported, the API will respond with a 404 Not Found error and the following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "API version not found"\n}\n')),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("p",null,"Endpoints to query Node related information."),(0,a.kt)("h3",{id:"get-eigennodespec-version"},"GET /eigen/node/spec-version"),(0,a.kt)("p",null,"Provides API identity information in a format similar to ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7231#section-5.5.3"},"HTTP User-Agent")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"No parameters"),(0,a.kt)("h4",{id:"responses"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"200")," - Request successful"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "api_version": "v0.0.1"\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "api_version": {\n      "type": "string",\n      "description": "API specification version"\n    }\n  },\n  "required": [\n    "version"\n  ]\n}\n')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"500")," - Internal server error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Internal server error"\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "message": {\n      "type": "string",\n      "description": "Error message"\n    }\n  },\n  "required": [\n    "message"\n  ]\n}\n')))),(0,a.kt)("h3",{id:"get-eigennodeversion"},"GET /eigen/node/version"),(0,a.kt)("p",null,"Provides AVS Node identity information in a format similar to ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc7231#section-5.5.3"},"HTTP User-Agent")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,"No parameters"),(0,a.kt)("h4",{id:"responses-1"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"200")," - Request successful"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "EigenLayer-AVS/v1.0.0"\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "version": {\n      "type": "string",\n      "description": "Node version"\n    }\n  },\n  "required": [\n    "version"\n  ]\n}\n')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"500")," - Internal server error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Internal server error"\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "message": {\n      "type": "string",\n      "description": "Error message"\n    }\n  },\n  "required": [\n    "message"\n  ]\n}\n')))),(0,a.kt)("h3",{id:"get-eigennodehealth"},"GET /eigen/node/health"),(0,a.kt)("p",null,"Returns AVS Node health status in HTTP status codes."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,"No parameters"),(0,a.kt)("h4",{id:"responses-2"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"200")," - AVS Node is healthy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"206")," - AVS Node is partially healthy. It is either initializing or some backing services are not healthy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"503")," - AVS Node is unhealthy or having issues."),(0,a.kt)("h3",{id:"get-eigennodeservices"},"GET /eigen/node/services"),(0,a.kt)("p",null,"Returns a list of all backing services that are currently registered with the AVS Node setup. Useful to determine if a service is currently registered with the AVS Node and to get the service ID for health endpoint."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("p",null,"No parameters"),(0,a.kt)("h4",{id:"responses-3"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"200")," - Request successful"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    {\n      "id": "db-1",\n      "name": "Database",\n      "description": "Database description",\n      "status": "Up",\n    },\n    {\n      "id": "idx-2",\n      "name": "Indexer",\n      "description": "Indexer description",\n      "status": "Down",\n    }\n  ]\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "services": {\n      "type": "array",\n      "description": "List of backing services",\n      "items": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "string",\n            "description": "Service ID"\n          },\n          "name": {\n            "type": "string",\n            "description": "Service name"\n          },\n          "description": {\n            "type": "string",\n            "description": "Service description"\n          },\n          "status": {\n            "type": "string",\n            "description": "Service status. Possible values are Up, Down, or Initializing."\n\n          }\n        },\n        "required": [\n          "id",\n          "name",\n          "description"\n        ]\n      }\n    }\n  },\n  "required": [\n    "services"\n  ]\n}\n')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"500")," - Internal server error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content-Type:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"example",label:"Example Value",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "Internal server error"\n}\n'))),(0,a.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties": {\n    "message": {\n      "type": "string",\n      "description": "Error message"\n    }\n  },\n  "required": [\n    "message"\n  ]\n}\n')))),(0,a.kt)("h3",{id:"get-eigennodeservicesservice_idhealth"},"GET /eigen/node/services/{service_ID}/health"),(0,a.kt)("p",null,"Returns the health status of the given service in HTTP status codes. The service ID is the service ID returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"/eigen/services")," endpoint. The service is considered healthy if the service is registered with the AVS Node and the service is currently online."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"service_ID")," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ",(0,a.kt)("inlineCode",{parentName:"p"},"(path)")," - Service ID"),(0,a.kt)("h4",{id:"responses-4"},"Responses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"200")," - Backing service is healthy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"206")," - Backing service is partially healthy. It is either initializing or not ready yet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"503")," - Backing service is unhealthy or having issues."))}v.isMDXComponent=!0}}]);