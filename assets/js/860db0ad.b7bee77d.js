"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(67294),a=t(86010);const l="tabItem_Ymn6";function o(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},r)}},65488:(e,r,t)=>{t.d(r,{Z:()=>f});var n=t(87462),a=t(67294),l=t(86010),o=t(12466),u=t(70989),i=t(72389);const s="tabList__CuJ",c="tabItem_LNqP";function p(e){var r=e.className,t=e.block,u=e.selectedValue,i=e.selectValue,s=e.tabValues,p=[],m=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var r=e.currentTarget,t=p.indexOf(r),n=s[t].value;n!==u&&(m(r),i(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=p.indexOf(e.currentTarget)+1;t=null!=(n=p[a])?n:p[0];break;case"ArrowLeft":var l,o=p.indexOf(e.currentTarget)-1;t=null!=(l=p[o])?l:p[p.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r)},s.map((function(e){var r=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:function(e){return p.push(e)},onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":u===r})}),null!=t?t:r)})))}function m(e){var r=e.lazy,t=e.children,n=e.selectedValue;if(t=Array.isArray(t)?t:[t],r){var l=t.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function d(e){var r=(0,u.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",s)},a.createElement(p,(0,n.Z)({},e,r)),a.createElement(m,(0,n.Z)({},e,r)))}function f(e){var r=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(r)},e))}},70989:(e,r,t)=>{t.d(r,{Y:()=>m});var n=t(67294),a=t(16550),l=t(91980),o=t(67392),u=t(50012);function i(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function s(e){var r=e.values,t=e.children;return(0,n.useMemo)((function(){var e=null!=r?r:i(t);return function(e){var r=(0,o.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function c(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,t=void 0!==r&&r,o=e.groupId,u=(0,a.k6)(),i=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:o});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var r=new URLSearchParams(u.location.search);r.set(i,e),u.replace(Object.assign({},u.location,{search:r.toString()}))}}),[i,u])]}function m(e){var r,t,a,l,o=e.defaultValue,i=e.queryString,m=void 0!==i&&i,d=e.groupId,f=s(e),w=(0,n.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:f})})),y=w[0],v=w[1],h=p({queryString:m,groupId:d}),b=h[0],k=h[1],g=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(r),a=t[0],l=t[1],[a,(0,n.useCallback)((function(e){r&&l.set(e)}),[r,l])]),C=g[0],x=g[1],q=function(){var e=null!=b?b:C;return c({value:e,tabValues:f})?e:null}();return(0,n.useLayoutEffect)((function(){q&&v(q)}),[q]),{selectedValue:y,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),x(e)}),[k,x,f]),tabValues:f}}},27520:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>f});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),o=t(65488),u=t(85162),i=t(41435);var s=["components"],c={id:"crawl-all-links",title:"Crawl all links on a website"},p=void 0,m={unversionedId:"examples/crawl-all-links",id:"examples/crawl-all-links",title:"Crawl all links on a website",description:"This example uses the enqueueLinks() method to add new links to the RequestQueue as the crawler navigates from page to page. If only the",source:"@site/../docs/examples/crawl_all_links.mdx",sourceDirName:"examples",slug:"/examples/crawl-all-links",permalink:"/sdk/js/docs/next/examples/crawl-all-links",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675948160,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{id:"crawl-all-links",title:"Crawl all links on a website"},sidebar:"docs",previous:{title:"Cheerio crawler",permalink:"/sdk/js/docs/next/examples/cheerio-crawler"},next:{title:"Crawl multiple URLs",permalink:"/sdk/js/docs/next/examples/crawl-multiple-urls"}},d={},f=[],w={toc:f};function y(e){var r=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},w,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"enqueueLinks()")," method to add new links to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RequestQueue")," as the crawler navigates from page to page. If only the\nrequired parameters are defined, all links will be crawled."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { CheerioCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n")),(0,l.kt)(u.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n")),(0,l.kt)(u.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add all links from page to RequestQueue\n        await enqueueLinks();\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl all links)\n});\n\n// Run the crawler\nawait crawler.run(['https://apify.com/']);\n\nawait Actor.exit();\n"))))}y.isMDXComponent=!0}}]);