"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3954],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?t.createElement(f,o(o({ref:n},p),{},{components:r})):t.createElement(f,o({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6188:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4,id:"reference"},o="Reference package",l={unversionedId:"packaging/reference",id:"packaging/reference",title:"Reference package",description:"Package structure",source:"@site/docs/packaging/reference.md",sourceDirName:"packaging",slug:"/packaging/reference",permalink:"/docs/packaging/reference",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/reference.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"reference"},sidebar:"sidebar",previous:{title:"Profile file",permalink:"/docs/packaging/profiles"},next:{title:"Keeping Middleware Software Easily Updatable",permalink:"/docs/packaging/upgrading"}},c={},s=[{value:"Package structure",id:"package-structure",level:2},{value:"<code>manifest.yml</code>",id:"manifestyml",level:2},{value:"<code>docker-compose.yml</code>",id:"docker-composeyml",level:2},{value:"<code>.env</code>",id:"env",level:2},{value:"<code>profile.yml</code>",id:"profileyml",level:2}],p={toc:s},m="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(m,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-package"},"Reference package"),(0,a.kt)("h2",{id:"package-structure"},"Package structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./\n\u251c\u2500\u2500 profile/\n\u2502   \u251c\u2500\u2500 alerts/\n\u2502   \u251c\u2500\u2500 dashboards/\n\u2502   \u251c\u2500\u2500 panels/\n\u2502   \u251c\u2500\u2500 .env\n\u2502   \u251c\u2500\u2500 docker-compose.yml\n\u2502   \u2514\u2500\u2500 profile.yml\n\u2514\u2500\u2500 manifest.yml\n")),(0,a.kt)("h2",{id:"manifestyml"},(0,a.kt)("inlineCode",{parentName:"h2"},"manifest.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "v1.0.0"\nmiddleware_version: "v0.1.0"\nname: eigenDA\nupgrade: required\nprofiles:\n  - name: "profile"\n    src: "./profile"\n')),(0,a.kt)("h2",{id:"docker-composeyml"},(0,a.kt)("inlineCode",{parentName:"h2"},"docker-compose.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\n\nservices:\n  main-service:\n    image: your-organization/main-service:latest\n    container_name: ${MAIN_SERVICE_NAME}\n    command:\n    - eigen \n    - --flag-x=${X_VALUE}\n    - --flag-y=<value-for-flag-y>\n    ports:\n      - \"${MAIN_PORT}:8080\"\n    depends_on:\n      - db-service\n    networks:\n      - eigenlayer\n\n  db-service:\n    image: postgres:latest\n    container_name: ${DB_SERVICE_NAME}\n    environment:\n      - POSTGRES_USER=${DB_USER}\n      - POSTGRES_PASSWORD=${DB_PASSWORD}\n      - POSTGRES_DB=${DB_NAME}\n    volumes:\n      - db-data:/var/lib/postgresql/data\n    networks:\n      - eigenlayer\n\n  utility-service:\n    build: ./path/to/utility-service-dockerfile\n    container_name: ${UTILITY_SERVICE_NAME}\n    environment:\n      - MAIN_SERVICE_HOST=main-service\n      - MAIN_SERVICE_PORT=8080\n    depends_on:\n      - main-service\n    networks:\n      - eigenlayer\n\nnetworks:\n  eigenlayer:\n    name: ${NETWORK_NAME}\n\nvolumes:\n  db-data:\n    name: ${VOLUME_NAME}\n")),(0,a.kt)("h2",{id:"env"},(0,a.kt)("inlineCode",{parentName:"h2"},".env")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"X_VALUE=value1\nDB_NAME=example_name\n")),(0,a.kt)("h2",{id:"profileyml"},(0,a.kt)("inlineCode",{parentName:"h2"},"profile.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "1.0"\n\noptions:\n  - name: "main-container-name"\n    target: MAIN_SERVICE_NAME\n    type: id\n    default: "main-service"\n    help: "Main service container name"\n  - name: "flag-x"\n    target: X_VALUE\n    type: enum\n    values: [value1, value2, value3]\n    help: "The flag-x defines X behavior. Possible values are value1, value2, and value3"\n  - name: "main-port"\n    target: MAIN_PORT\n    type: port\n    default: 8080\n    help: "Main service server port"\n  - name: "db-container-name"\n    target: DB_SERVICE_NAME\n    type: id\n    default: "db-service"\n    help: "DB service container name"\n  - name: "db-user"\n    target: DB_USER\n    type: str\n    help: "Postgres DB user"\n  - name: "db-password"\n    target: DB_PASSWORD\n    type: str\n    validate:\n      re2_regex: "^[^#]{8,}$"\n    help: "Postgres DB user password. Must have at least 8 characters and it can\'t contain the \'#\' symbol"\n  - name: "utility-container-name"\n    target: UTILITY_SERVICE_NAME\n    type: id\n    default: "utility-service"\n    help: "Utility service container name"\n  - name: "network-name"\n    target: NETWORK_NAME\n    type: str\n    default: eigenlayer\n    help: "Docker network name"\n  - name: "volume-name"\n    target: VOLUME_NAME\n    type: str\n    default: db-data\n    help: "Docker volume name for Postgres DB"\n\nmonitoring:\n  tag: mainnet-da\n    targets:\n      - service: main-service\n        port: 9000\n        path: /metrics\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"flag-x")," is present in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," (",(0,a.kt)("inlineCode",{parentName:"p"},"X_VALUE")," var) and the reference file but without a default value. In this case, if the user doesn\u2019t provide a value using the flag (for a Middleware setup wizard), the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," value will be used.")))}d.isMDXComponent=!0}}]);