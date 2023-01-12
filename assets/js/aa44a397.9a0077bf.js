"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[62],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},l="Step 1: Store (Docker)",i={unversionedId:"installation/store-with-docker",id:"installation/store-with-docker",title:"Step 1: Store (Docker)",description:"Dependencies",source:"@site/docs/installation/02-store-with-docker.md",sourceDirName:"installation",slug:"/installation/store-with-docker",permalink:"/docs/installation/store-with-docker",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/installation/02-store-with-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Step 1: Store",permalink:"/docs/installation/store"},next:{title:"Step 2: Runtime",permalink:"/docs/installation/runtime"}},s={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Download",id:"download",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Deploy",id:"deploy-1",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-1-store-docker"},"Step 1: Store (Docker)"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,"Download the Binary code (recommended: 4.9.*) from ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/dowloading/releases/"},"RocketMQ Official"),". Here we take 4.9.2 as an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unzip rocketmq-all-4.9.2-bin-release.zip\ncd rocketmq-4.9.2/\n")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"start-name-server"},"Start Name Server"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqnamesrv &\ntail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"start-broker"},"Start Broker"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"The deployment of eventmesh-store has finished, please go to the next step: ",(0,o.kt)("a",{parentName:"p",href:"docs/en/instruction/02-runtime.md"},"Start Eventmesh-Runtime")),(0,o.kt)("h2",{id:"deploy-1"},"Deploy"),(0,o.kt)("p",null,"Pull RocketMQ image from Docker Hub\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\u83b7\u53d6namesrv\u955c\u50cf\nsudo docker pull rocketmqinc/rocketmq-namesrv:4.5.0-alpine\n#\u83b7\u53d6broker\u955c\u50cf\nsudo docker pull rocketmqinc/rocketmq-broker:4.5.0-alpine\n")),(0,o.kt)("p",null,"Start namesrv  and broker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#\u8fd0\u884cnamerv\u5bb9\u5668\nsudo docker run -d -p 9876:9876 -v `pwd` /data/namesrv/logs:/root/logs -v `pwd`/data/namesrv/store:/root/store --name rmqnamesrv  rocketmqinc/rocketmq-namesrv:4.5.0-alpine sh mqnamesrv\n\n#\u8fd0\u884cbroker\u5bb9\u5668\nsudo docker run -d -p 10911:10911 -p 10909:10909 -v `pwd`/data/broker/logs:/root/logs -v `pwd`/data/broker/store:/root/store --name rmqbroker --link rmqnamesrv:namesrv -e "NAMESRV_ADDR=namesrv:9876" rocketmqinc/rocketmq-broker:4.5.0-alpine sh mqbroker -c ../conf/broker.conf\n')),(0,o.kt)("p",null,"Please note that the ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-broker ip")," is ",(0,o.kt)("strong",{parentName:"p"},"pod ip"),". If you want to modify this ip, you can set it your custom value in ",(0,o.kt)("strong",{parentName:"p"},"broker.conf"),"\u3002"),(0,o.kt)("p",null,"By now, the deployment of eventmesh-store has finished, please go to the next step: ",(0,o.kt)("a",{parentName:"p",href:"docs/en/instruction/02-runtime-with-docker.md"},"Start Eventmesh-Runtime Using Docker")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"For more details about RocketMQ\uff0cplease refer to ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/")))}m.isMDXComponent=!0}}]);