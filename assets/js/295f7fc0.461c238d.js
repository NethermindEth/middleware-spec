"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,id:"profiles"},o="Profile file",l={unversionedId:"packaging/profiles",id:"packaging/profiles",title:"Profile file",description:"The configuration/profile file should be in YAML format and contain information about the Middleware profile and its options. Options are any argument, flag, configuration value, or environment variable of any services within the Middleware service docker-compose.yml whose value might be required from the user input.",source:"@site/docs/packaging/profiles.md",sourceDirName:"packaging",slug:"/packaging/profiles",permalink:"/docs/packaging/profiles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/profiles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"profiles"},sidebar:"sidebar",previous:{title:"Manifest file",permalink:"/docs/packaging/manifest"},next:{title:"Reference package",permalink:"/docs/packaging/reference"}},s={},p=[{value:"Profile file specification",id:"profile-file-specification",level:2},{value:"Profile file",id:"profile-file-1",level:3},{value:"<code>&lt;hardware_requirements_overrides&gt;</code>",id:"hardware_requirements_overrides",level:3},{value:"<code>&lt;plugin_overrides&gt;</code>",id:"plugin_overrides",level:3},{value:"<code>&lt;option&gt;</code>",id:"option",level:3},{value:"<code>&lt;type&gt;</code>",id:"type",level:3},{value:"<code>&lt;validate&gt;</code>",id:"validate",level:3},{value:"<code>&lt;monitoring&gt;</code>",id:"monitoring",level:3},{value:"<code>&lt;monitoring-target&gt;</code>",id:"monitoring-target",level:3},{value:"Monitoring and metrics settings",id:"monitoring-and-metrics-settings",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"profile-file"},"Profile file"),(0,r.kt)("p",null,"The configuration/profile file should be in YAML format and contain information about the Middleware profile and its options. Options are any argument, flag, configuration value, or environment variable of any services within the Middleware service ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," whose value might be required from the user input. "),(0,r.kt)("p",null,"The file\u2019s name must be ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.yml"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is designed for a given setup of a given Middleware version, and may have hardcoded values or settings, either in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," or in the form of environment variables in a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file with values. Settings could also be declared in the profile file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," section, considering that an option is a flag mapping to an environment variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file. "),(0,r.kt)("p",null,"The Middleware setup wizard tool would use each option or setting in the profile file to get this information from the user via prompts, arguments, or CLI flags. In case of an upgrade, values of unchanged settings can be used in the new version, and values for new settings would have to be requested by the user. "),(0,r.kt)("p",null,"Because values for settings could be declared in more than one place, we need to define some precedence rules, which are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The value set with a CLI flag because the option is in the package profile"),(0,r.kt)("li",{parentName:"ol"},"The default value in the package profile if it is defined and is not set with the CLI"),(0,r.kt)("li",{parentName:"ol"},"Value hardcoded in the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," provided in the package by the Middleware developer")),(0,r.kt)("h2",{id:"profile-file-specification"},"Profile file specification"),(0,r.kt)("h3",{id:"profile-file-1"},"Profile file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Version of Profile file specification\nversion: <string>\n\n# Metadata about middleware\nmetadata: <metadata>\n\n# Hardware Requirements overrides that will replace requirements from the manifest file for this profile\nhardware_requirements_overrides: <hardware_requirements_overrides>\n\n# Plugin overrides that will replace plugin from the manifest file for this profile\nplugin_overrides: <plugin_overrides>\n\n# List of options the user can set or use default values if defined in the <option>. Each option is an environment variable in the docker-compose file, Middleware developers need to be careful about what options to expose here\noptions:\n    [ - <option> ]\n\n# Monitoring options\nmonitoring: <monitoring>\n")),(0,r.kt)("h3",{id:"hardware_requirements_overrides"},(0,r.kt)("inlineCode",{parentName:"h3"},"<hardware_requirements_overrides>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Minimum number of CPU cores\nmin_cpu_cores: <int>\n\n# Minimum free memory space needed to run this profile in MiB\nmin_ram: <int>\n\n# Minimum free disk space needed to run this profile in MiB\nmin_free_space: <int>\n\n")),(0,r.kt)("h3",{id:"plugin_overrides"},(0,r.kt)("inlineCode",{parentName:"h3"},"<plugin_overrides>")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/plugin/intro"},"plugin documentation")," to learn more about the plugin system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Pre-built image name ready to be pulled.\nimage: <string>\n\n# URL to a Git repository to build the image from the source.\ngit: <string>\n")),(0,r.kt)("h3",{id:"option"},(0,r.kt)("inlineCode",{parentName:"h3"},"<option>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Name of the flag that the end-user will use to reference this option with the Middleware setup wizard\nname: <string>\n\n# Key of the env variable used in the docker-compose file\ntarget: <string>\n\n# Data type of the option: enum, int, float, string, bool, etc. These types are defined below with more details\ntype: <type>\n\n# Default value\ndefault: <default>\n\n# Custom validation defined for this value\nvalidate: <validate>\n\n# Help description about this \nhelp: <string>\n")),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"<type>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'int: 42\nfloat: 3.14\nbool: true\nstr: "Hello, World!"\npath_dir: ./path/to/a/dir\npath_file: ./path/to/a/file\nuri: https://eigenlayer.com\nenum: [value1, value2, value3]\nport: 8080\nid: "eigenlayer"\n')),(0,r.kt)("p",null,"These types will be used for automatic validation of the values provided by the user. For instance, if the setting\u2019s type is ",(0,r.kt)("inlineCode",{parentName:"p"},"path_file"),", the Middleware setup wizard tool would validate that a file exists on the provided path."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Any port exposed under the ",(0,r.kt)("inlineCode",{parentName:"p"},"ports:")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be represented by an ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," list in the profile file, and the type ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," ",(0,r.kt)("strong",{parentName:"p"},"MUST")," be used. This allows port collision checks between multiple Middleware services running in the same host machine."),(0,r.kt)("p",{parentName:"admonition"},"The Middleware setup wizard tool could do these checks to guarantee an open port for each port target.")),(0,r.kt)("p",null,"The type ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," should be used for those values that need to be unique across several Middleware setups, for example, container names."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"container_name")," service field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," is optional, but if it is used, it is ",(0,r.kt)("strong",{parentName:"p"},"mandatory")," to provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," list with type ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the profile file. This allows name collision checks between multiple Middleware services running in the same host machine."),(0,r.kt)("p",{parentName:"admonition"},"The Middleware setup wizard tool could do the necessary checks to guarantee unique container names.")),(0,r.kt)("h3",{id:"validate"},(0,r.kt)("inlineCode",{parentName:"h3"},"<validate>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# RE2 regex https://github.com/google/re2/wiki/Syntax. Will be ignored if it is used for a type different from <string>\nre2_regex: <string>\n\n# Format of the file to validate. Will be ignored if it is used for a type different from <path_file>\nformat: <string>\n\n# List of accepted URL schemes. Will be ignored if it is used for a type different from <uri>\nuri_scheme: [ - <string> ]\n\n# Min value that could be, included. Will be ignored if it is used for a type different from <int> or <float>\nmin_value: <int|float>\n\n# Max value that could be, included. Will be ignored if it is used for a type different from <int> or <float>\nmax_value: <int|float>\n")),(0,r.kt)("h3",{id:"monitoring"},(0,r.kt)("inlineCode",{parentName:"h3"},"<monitoring>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tag to be used for the Middleware setup wizard tool alongside the `name` from the manifest file to create a unique label that allows metrics to differentiate from other middleware instances metrics\ntag: <string>\n\n# List of metric targets inside the docker-compose\ntargets:\n    [ - <monitoring-target> ]\n")),(0,r.kt)("h3",{id:"monitoring-target"},(0,r.kt)("inlineCode",{parentName:"h3"},"<monitoring-target>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Name of the docker-compose service\nservice: <string>\n\n# Port serving the metrics\nport: <int>\n\n# Metrics path, for instance: /metrics\npath: <string>\n")),(0,r.kt)("h2",{id:"monitoring-and-metrics-settings"},"Monitoring and metrics settings"),(0,r.kt)("p",null,"A Middleware environment is a set of services deployed with Docker in the same Docker network. Prometheus metrics can be fetched from exporters that each service could implement. To know where these metrics are, we can rely on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/container-networking/"},"docker container networking")," to reference services."),(0,r.kt)("p",null,"The monitoring setup is the set of a Grafana instance, Prometheus, and Node Exporter. Grafana has a global dashboard with metrics from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter"},"Node Exporter")," to monitor host performance. To view Middleware dashboards in Grafana, the Middleware package contains ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboards/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"panels/")," folders that would be deployed to the Grafana instance when the Middleware service is added. Also, alerting rules could be provided following the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#provision-alert-rules"},"Grafana file provisioning")," for alerting. Any alert rules that the Middleware service would like to add to Grafana should be under the ",(0,r.kt)("inlineCode",{parentName:"p"},"alerts/")," folder."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Middleware setup wizard tool could take care of the monitoring stack setup based on the settings provided in the profile file.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Alerting contact points would be configured with the setup wizard regardless of the Middleware service, for instance: ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#e-mail"},"Email"),", ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#opsgenie"},"Opsgenie"),", ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#slack"},"Slack")," or ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#telegram"},"Telegram"),".")),(0,r.kt)("p",null,"The profile file is the place to declare Prometheus targets inside the Middleware setup mentioning the service name, port, and path to get metrics. Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," value is declared, this value is important to differentiate metrics from different middleware instances. "),(0,r.kt)("p",null,"The metrics port could be exposed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," for it to be reachable from outside the host machine, but is not mandatory to do so."))}m.isMDXComponent=!0}}]);