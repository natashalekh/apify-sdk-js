"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4259],{68889:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(88746),o=r(6141),i=r(6832);const l=function(e){var t=e.to,r=e.children,l=(0,o.E)(),p=l.version,s=l.isLast;if((0,i.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var c=p+"/";return"current"===p?c="next/":s&&(c=""),n.createElement(a.default,{to:"/api/"+c+t},r)}},40830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=(r(68889),["components"]),l={id:"apify-platform",title:"Apify Platform"},p=void 0,s={unversionedId:"guides/apify-platform",id:"version-3.0/guides/apify-platform",title:"Apify Platform",description:"Apify is a platform built to serve large-scale and high-performance web scraping",source:"@site/versioned_docs/version-3.0/guides/apify_platform.mdx",sourceDirName:"guides",slug:"/guides/apify-platform",permalink:"/sdk/js/docs/3.0/guides/apify-platform",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1693097434,formattedLastUpdatedAt:"Aug 27, 2023",frontMatter:{id:"apify-platform",title:"Apify Platform"},sidebar:"docs",previous:{title:"Guides",permalink:"/sdk/js/docs/3.0/guides"},next:{title:"Request Storage",permalink:"/sdk/js/docs/3.0/guides/request-storage"}},c={},u=[{value:"Logging into Apify platform from Apify SDK",id:"logging-into-apify-platform-from-apify-sdk",level:2},{value:"Log in with CLI",id:"log-in-with-cli",level:3},{value:"Log in with environment variables",id:"log-in-with-environment-variables",level:3},{value:"What is an actor",id:"what-is-an-actor",level:2}],f={toc:u},m="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apify is a ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com",target:"_blank",rel:"noopener"},"platform")," built to serve large-scale and high-performance web scraping\nand automation needs. It provides easy access to ",(0,o.kt)("a",{parentName:"p",href:"#what-is-an-actor",target:null,rel:null},"compute instances (Actors)"),",\nconvenient ",(0,o.kt)("a",{parentName:"p",href:"./request-storage",target:null,rel:null},"request")," and ",(0,o.kt)("a",{parentName:"p",href:"./result-storage",target:null,rel:null},"result")," storages, ",(0,o.kt)("a",{parentName:"p",href:"./proxy-management",target:null,rel:null},"proxies"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/scheduler",target:"_blank",rel:"noopener"},"scheduling"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/webhooks",target:"_blank",rel:"noopener"},"webhooks"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/",target:"_blank",rel:"noopener"},"more"),", accessible through a ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com",target:"_blank",rel:"noopener"},"web interface"),"\nor an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/api",target:"_blank",rel:"noopener"},"API"),"."),(0,o.kt)("p",null,"While we think that the Apify platform is super cool, and you should definitely sign up for a\n",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener"},"free account"),", ",(0,o.kt)("strong",{parentName:"p"},"Apify SDK is and will always be open source"),",\nrunnable locally or on any cloud infrastructure."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that we do not test Apify SDK in other cloud environments such as Lambda or on specific\narchitectures such as Raspberry PI. We strive to make it work, but there are no guarantees.")),(0,o.kt)("h2",{id:"logging-into-apify-platform-from-apify-sdk"},"Logging into Apify platform from Apify SDK"),(0,o.kt)("p",null,"To access your ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/sign-up",target:"_blank",rel:"noopener"},"Apify account")," from the SDK, you must provide\ncredentials - ",(0,o.kt)("a",{parentName:"p",href:"https://console.apify.com/account#/integrations",target:"_blank",rel:"noopener"},"your API token"),". You can do that\neither by utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify CLI")," or with environment\nvariables."),(0,o.kt)("p",null,"Once you provide credentials to your scraper, you will be able to use all the Apify platform\nfeatures of the SDK, such as calling actors, saving to cloud storages, using Apify proxies,\nsetting up webhooks and so on."),(0,o.kt)("h3",{id:"log-in-with-cli"},"Log in with CLI"),(0,o.kt)("p",null,"Apify CLI allows you to log in to your Apify account on your computer. If you then run your\nscraper using the CLI, your credentials will automatically be added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g apify-cli\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apify login -t YOUR_API_TOKEN\n")),(0,o.kt)("p",null,"In your project folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apify run -p\n")),(0,o.kt)("h3",{id:"log-in-with-environment-variables"},"Log in with environment variables"),(0,o.kt)("p",null,"If you prefer not to use Apify CLI, you can always provide credentials to your scraper\nby setting the ",(0,o.kt)("a",{parentName:"p",href:"./environment-variables#apify_token",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_TOKEN"))," environment\nvariable to your API token."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"There's also the ",(0,o.kt)("a",{parentName:"p",href:"./environment-variables#apify_proxy_password",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"APIFY_PROXY_PASSWORD")),"\nenvironment variable. It is automatically inferred from your token by the SDK, but it can be useful\nwhen you need to access proxies from a different account than your token represents.")),(0,o.kt)("h2",{id:"what-is-an-actor"},"What is an actor"),(0,o.kt)("p",null,"When you deploy your script to the Apify platform, it becomes an ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/actors",target:"_blank",rel:"noopener"},"actor"),".\nAn actor is a serverless microservice that accepts an input and produces an output. It can run for\na few seconds, hours or even infinitely. An actor can perform anything from a simple action such\nas filling out a web form or sending an email, to complex operations such as crawling an entire website\nand removing duplicates from a large dataset."),(0,o.kt)("p",null,"Actors can be shared in the ",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Apify Store")," so that other people can use them.\nBut don't worry, if you share your actor in the store and somebody uses it, it runs under their account,\nnot yours."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related links")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/store",target:"_blank",rel:"noopener"},"Store of existing actors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/actor",target:"_blank",rel:"noopener"},"Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.apify.com/actors",target:"_blank",rel:"noopener"},"View actors in Apify Console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/docs/api/v2#/reference/actors",target:"_blank",rel:"noopener"},"API reference"))))}y.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);