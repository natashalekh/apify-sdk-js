"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id_old:"version-1.3-session-state",title:"SessionState",id:"session-state"},l=void 0,p={unversionedId:"typedefs/session-state",id:"version-1.3/typedefs/session-state",title:"SessionState",description:"Persistable Session state.",source:"@site/versioned_docs/version-1.3/typedefs/SessionState.md",sourceDirName:"typedefs",slug:"/typedefs/session-state",permalink:"/docs/1.3/typedefs/session-state",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Zuzka Pelechov\xe1",lastUpdatedAt:1666618783,formattedLastUpdatedAt:"Oct 24, 2022",frontMatter:{id_old:"version-1.3-session-state",title:"SessionState",id:"session-state"},sidebar:"version-1.3/docs",previous:{title:"RequestListState",permalink:"/docs/1.3/typedefs/request-list-state"},next:{title:"SocialHandles",permalink:"/docs/1.3/typedefs/social-handles"}},d={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>cookieJar</code>",id:"cookiejar",level:3},{value:"<code>userData</code>",id:"userdata",level:3},{value:"<code>errorScore</code>",id:"errorscore",level:3},{value:"<code>maxErrorScore</code>",id:"maxerrorscore",level:3},{value:"<code>errorScoreDecrement</code>",id:"errorscoredecrement",level:3},{value:"<code>usageCount</code>",id:"usagecount",level:3},{value:"<code>expiresAt</code>",id:"expiresat",level:3},{value:"<code>createdAt</code>",id:"createdat",level:3}],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"sessionstate"}),(0,a.kt)("p",null,"Persistable ",(0,a.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Session"))," state."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"cookiejar"},(0,a.kt)("inlineCode",{parentName:"h3"},"cookieJar")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CookieJar")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"userdata"},(0,a.kt)("inlineCode",{parentName:"h3"},"userData")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorscore"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorScore")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxerrorscore"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxErrorScore")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"errorscoredecrement"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorScoreDecrement")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usagecount"},(0,a.kt)("inlineCode",{parentName:"h3"},"usageCount")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"expiresat"},(0,a.kt)("inlineCode",{parentName:"h3"},"expiresAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdat"},(0,a.kt)("inlineCode",{parentName:"h3"},"createdAt")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);