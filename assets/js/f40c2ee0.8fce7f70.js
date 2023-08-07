"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),f=i,u=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return t?r.createElement(u,o(o({ref:n},d),{},{components:t})):r.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2,id:"manifest"},o="Manifest file",s={unversionedId:"packaging/manifest",id:"packaging/manifest",title:"Manifest file",description:"The Manifest file is an essential component of the Node package structure. It provides crucial information about the Node version, its name, and the list of profiles that are included in the package. The upgrade field of the Manifest file indicates whether an upgrade is optional, recommended, or required, which allows users to determine how and when to upgrade their Node to the latest version.",source:"@site/docs/packaging/manifest.md",sourceDirName:"packaging",slug:"/packaging/manifest",permalink:"/docs/packaging/manifest",draft:!1,editUrl:"https://github.com/NethermindEth/el-node-spec/edit/main/docs/docs/packaging/manifest.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"manifest"},sidebar:"sidebar",previous:{title:"Packaging procedure",permalink:"/docs/packaging/"},next:{title:"Profile file",permalink:"/docs/packaging/profiles"}},l={},p=[{value:"Manifest format",id:"manifest-format",level:2},{value:"<code>&lt;hardware_requirements&gt;</code>",id:"hardware_requirements",level:3},{value:"<code>&lt;plugin&gt;</code>",id:"plugin",level:3}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manifest-file"},"Manifest file"),(0,i.kt)("p",null,"The Manifest file is an essential component of the Node package structure. It provides crucial information about the Node version, its name, and the list of profiles that are included in the package. The ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade")," field of the Manifest file indicates whether an upgrade is optional, recommended, or required, which allows users to determine how and when to upgrade their Node to the latest version."),(0,i.kt)("p",null,"Additionally, the Manifest file specifies the structure of the Node package, which includes a ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," folder and a ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," file. The ",(0,i.kt)("inlineCode",{parentName:"p"},"profile")," folder contains a Docker Compose file, an ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file with default values for environment variables, and folders for Grafana alerts, dashboards, and panels. This folder structure ensures that all the necessary files to set up the Node in an on-premise setup using Docker Compose as a service manager are included in the package."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml")," file specifies the version of the Node, its name, and a list of profiles. The profile list includes the name of each profile and its relative path within the package. This information is crucial for users to understand what profiles are available and how to access them within the package."),(0,i.kt)("p",null,"The file\u2019s name must be ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"."),(0,i.kt)("h2",{id:"manifest-format"},"Manifest format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# AVS Specification version\nversion: <string>\n\n# Node version\nnode_version: <string>\n\n# Name of the Node\nname: <string>\n\n# Upgrade recommendation: optional, recommended, required\nupgrade: <string>\n\n# Hardware Requirements\nhardware_requirements: <hardware_requirements>\n\n# Plugin source\nplugin: <plugin>\n\n# List of Node package profiles\nprofiles:\n[ - <string> ]\n")),(0,i.kt)("h3",{id:"hardware_requirements"},(0,i.kt)("inlineCode",{parentName:"h3"},"<hardware_requirements>")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Minimum number of CPU cores\nmin_cpu_cores: <int>\n\n# Minimum free memory space needed to run this profile in MiB\nmin_ram: <int>\n\n# Minimum free disk space needed to run this profile in MiB\nmin_free_space: <int>\n\n# true if setup should not proceed if any hardware requirement is not met\nstop_if_requirements_are_not_met: <bool>\n")),(0,i.kt)("h3",{id:"plugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"<plugin>")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugin/intro"},"plugin documentation")," to learn more about the plugin system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Pre-built image name ready to be pulled.\nimage: <string>\n\n# URL to build the image from source. Can refer to Git repositories. Look at https://docs.docker.com/engine/reference/commandline/build/#description for details. We don't support plain text files or pre-packaged tarball contexts currently.\nbuild_from: <string>\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," has more priority than the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," option. If both are provided, the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," will be used.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"build_from")," field can only refer to ",(0,i.kt)("strong",{parentName:"p"},"remote")," Git repositories at the moment.")))}m.isMDXComponent=!0}}]);