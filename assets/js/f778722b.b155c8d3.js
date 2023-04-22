"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[791],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),d=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return i.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(g,o(o({ref:a},p),{},{components:t})):i.createElement(g,o({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4917:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7462),n=(t(7294),t(3905));const r={sidebar_position:5,id:"upgrading"},o="Keeping Middleware Software Easily Updatable",s={unversionedId:"packaging/upgrading",id:"packaging/upgrading",title:"Keeping Middleware Software Easily Updatable",description:"Ensuring that your middleware software is easily updatable by users is crucial for a smooth user experience. Users should be able to update your software without making changes to CLI commands, Docker files, or dealing with schema and database version updates manually. Here's a guide on how to achieve this.",source:"@site/docs/packaging/upgrading.md",sourceDirName:"packaging",slug:"/packaging/upgrading",permalink:"/middleware-spec/docs/packaging/upgrading",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/upgrading.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"upgrading"},sidebar:"tutorialSidebar",previous:{title:"Reference package",permalink:"/middleware-spec/docs/packaging/reference"},next:{title:"Backup and Restore",permalink:"/middleware-spec/docs/category/backup-and-restore"}},l={},d=[{value:"1. Containerization and Orchestration",id:"1-containerization-and-orchestration",level:2},{value:"Tips:",id:"tips",level:3},{value:"2. Database Migration and Compatibility Management",id:"2-database-migration-and-compatibility-management",level:2},{value:"Tips:",id:"tips-1",level:3},{value:"3. Shared State Management and Automatic Updates",id:"3-shared-state-management-and-automatic-updates",level:2},{value:"Tips:",id:"tips-2",level:3},{value:"4. Middleware Package Management with CLI Tool and Searchable Prefix",id:"4-middleware-package-management-with-cli-tool-and-searchable-prefix",level:2},{value:"Tips:",id:"tips-3",level:3}],p={toc:d},u="wrapper";function c(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"keeping-middleware-software-easily-updatable"},"Keeping Middleware Software Easily Updatable"),(0,n.kt)("p",null,"Ensuring that your middleware software is easily updatable by users is crucial for a smooth user experience. Users should be able to update your software without making changes to CLI commands, Docker files, or dealing with schema and database version updates manually. Here's a guide on how to achieve this."),(0,n.kt)("h2",{id:"1-containerization-and-orchestration"},"1. Containerization and Orchestration"),(0,n.kt)("p",null,"Leverage containerization technologies like Docker and orchestration tools like Docker Compose to package your middleware software with its dependencies, ensuring consistent behavior across different environments. This approach makes it easier for users to update the software without worrying about breaking changes in the underlying infrastructure."),(0,n.kt)("h3",{id:"tips"},"Tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a well-structured Dockerfile that builds an optimized and secure container image."),(0,n.kt)("li",{parentName:"ul"},"Publish updated container images to a container registry (e.g., Docker Hub) and follow a versioning scheme, allowing users to update easily."),(0,n.kt)("li",{parentName:"ul"},"Write a Docker Compose file to define your services, networks, and volumes, making it easy for users to manage the application stack.")),(0,n.kt)("h2",{id:"2-database-migration-and-compatibility-management"},"2. Database Migration and Compatibility Management"),(0,n.kt)("p",null,"Implement a database migration management system for relational databases to handle schema changes and version updates automatically. Additionally, ensure that key-value databases are backward compatible when updating them and automatically update the DB files to the latest version. This will enable users to update your middleware without manual intervention for database-related tasks."),(0,n.kt)("h3",{id:"tips-1"},"Tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use a key-value databases that maintains backward compatibility and automatically updates DB files during the update process."),(0,n.kt)("li",{parentName:"ul"},"Use a database migration tool (e.g., Flyway, Sequelize, Entity Framework migrations) to manage schema changes and version updates in relational databases."),(0,n.kt)("li",{parentName:"ul"},"Include migration scripts in your version control system to track changes and ensure consistency across environments."),(0,n.kt)("li",{parentName:"ul"},"Run migrations automatically during application startup.")),(0,n.kt)("h2",{id:"3-shared-state-management-and-automatic-updates"},"3. Shared State Management and Automatic Updates"),(0,n.kt)("p",null,"Design your middleware software to handle shared state updates automatically. This will ensure that users do not have to manually update shared state information when updating the middleware, providing a seamless user experience."),(0,n.kt)("h3",{id:"tips-2"},"Tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implement a robust shared state management system that synchronizes state across different services and components."),(0,n.kt)("li",{parentName:"ul"},"Use event-driven architectures or message queues (e.g., Kafka, RabbitMQ) to propagate state updates efficiently."),(0,n.kt)("li",{parentName:"ul"},"Design your middleware to detect and handle changes in the shared state without manual intervention, such as by subscribing to relevant events or periodically polling for updates."),(0,n.kt)("li",{parentName:"ul"},"Test your middleware to ensure that it can handle shared state updates gracefully, even during version updates.")),(0,n.kt)("h2",{id:"4-middleware-package-management-with-cli-tool-and-searchable-prefix"},"4. Middleware Package Management with CLI Tool and Searchable Prefix"),(0,n.kt)("p",null,"Leverage the Middleware setup wizard, inspired by the Homebrew Tap approach, for managing middleware packages and their versions. This tool will handle each middleware as a git repository with a defined structure, simplifying the process for clients setting up and managing middleware. To make middleware repositories easily searchable on GitHub, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"eigen")," prefix for the repository name similar to the Homebrew naming convention."),(0,n.kt)("h3",{id:"tips-3"},"Tips:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use the provided CLI tool that follows a standard structure for middleware git repositories to streamline the installation and management process."),(0,n.kt)("li",{parentName:"ul"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"eigen")," prefix for middleware repository names to make them easily discoverable on GitHub, following the Homebrew convention."),(0,n.kt)("li",{parentName:"ul"},"Instruct users to add middleware by running commands such as ",(0,n.kt)("inlineCode",{parentName:"li"},"$ tool add https://github.com/some/eigen-middleware")," or, if GitHub is the default source, ",(0,n.kt)("inlineCode",{parentName:"li"},"$ tool add some/eigen-middleware"),". Providing that a core tap repository is maintained with the names or URLs of Middleware services repositories, the CLI tool could easily use this index to get the available taps, and this way, the users don\u2019t have to register or add a Middleware service to the tool."),(0,n.kt)("li",{parentName:"ul"},"For a new version of the Middleware service, the Middleware provider will create a new package following the proposed standard structure and specification and put it in the Tap repo with a new git tag representing the new release."),(0,n.kt)("li",{parentName:"ul"},"The existing CLI tool will clone the repo, identify the appropriate version (git tag), and follow the necessary steps for setup based on the repository's structure. Installation and upgrading of a Middleware service will be the same for the CLI tool. The main difference between the two processes will be that the CLI tool will try to keep unchanged settings and data between the old and new versions."),(0,n.kt)("li",{parentName:"ul"},"Offer additional commands for tasks like:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Initializing an empty git repository with the defined structure: ",(0,n.kt)("inlineCode",{parentName:"p"},"$ tool init some/eigen-middleware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Checking the repository structure: ",(0,n.kt)("inlineCode",{parentName:"p"},"$ tool check some/eigen-middleware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Viewing middleware versions and marking the current version, if possible: ",(0,n.kt)("inlineCode",{parentName:"p"},"$ tool version some/eigen-middleware")),(0,n.kt)("p",{parentName:"li"},"Tooling for initializing the Tap and managing the Middleware packages will be available in future versions. Also, CI pipelines that Middleware providers can use to validate new packages for new versions will be published."))))),(0,n.kt)("p",null,"Making your middleware software easily updatable by users is critical for ensuring a smooth user experience. By leveraging containerization technologies, implementing database migration and compatibility management, designing your middleware to handle shared state updates automatically, and using a CLI tool for middleware package management, you can simplify the process of updating your software for your users."))}c.isMDXComponent=!0}}]);