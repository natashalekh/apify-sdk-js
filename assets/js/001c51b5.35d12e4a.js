"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{30433:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(34334);const l={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},65559:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(34334),o=r(63735),c=r(38224),i=r(5730);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function s(e){var t=e.className,r=e.block,c=e.selectedValue,i=e.selectValue,s=e.tabValues,d=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,r=d.indexOf(t),n=s[r].value;n!==c&&(p(t),i(n))},b=function(e){var t,r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var n,a=d.indexOf(e.currentTarget)+1;r=null!=(n=d[a])?n:d[0];break;case"ArrowLeft":var l,o=d.indexOf(e.currentTarget)-1;r=null!=(l=d[o])?l:d[d.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:function(e){return d.push(e)},onKeyDown:b,onClick:m},o,{className:(0,l.Z)("tabs__item",u.tabItem,null==o?void 0:o.className,{"tabs__item--active":c===t})}),null!=r?r:t)})))}function d(e){var t=e.lazy,r=e.children,n=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function p(e){var t=(0,c.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",u.tabList)},a.createElement(s,(0,n.Z)({},e,t)),a.createElement(d,(0,n.Z)({},e,t)))}function m(e){var t=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},38224:(e,t,r)=>{r.d(t,{Y:()=>p});var n=r(67294),a=r(16550),l=r(34423),o=r(20636),c=r(99200);function i(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:i(r);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,c=(0,a.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(c.location.search);t.set(i,e),c.replace(Object.assign({},c.location,{search:t.toString()}))}}),[i,c])]}function p(e){var t,r,a,l,o=e.defaultValue,i=e.queryString,p=void 0!==i&&i,m=e.groupId,b=u(e),f=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!s({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:b})})),y=f[0],g=f[1],I=d({queryString:p,groupId:m}),w=I[0],v=I[1],h=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),r=(0,c.Nk)(t),a=r[0],l=r[1],[a,(0,n.useCallback)((function(e){t&&l.set(e)}),[t,l])]),x=h[0],C=h[1],X=function(){var e=null!=w?w:x;return s({value:e,tabValues:b})?e:null}();return(0,n.useLayoutEffect)((function(){X&&g(X)}),[X]),{selectedValue:y,selectValue:(0,n.useCallback)((function(e){if(!s({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);g(e),v(e),C(e)}),[v,C,b]),tabValues:b}}},88466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=r(65559),c=r(30433);r(14563);const i={code:"import { Actor } from 'apify';\nimport { CheerioCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new CheerioCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IENoZWVyaW9DcmF3bGVyLCBkb3dubG9hZExpc3RPZlVybHMgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5hd2FpdCBBY3Rvci5pbml0KCk7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBDaGVlcmlvQ3Jhd2xlcih7XFxuICAgIC8vIEZ1bmN0aW9uIGNhbGxlZCBmb3IgZWFjaCBVUkxcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0IH0pIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QudXJsKTtcXG4gICAgfSxcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogMTAsIC8vIExpbWl0YXRpb24gZm9yIG9ubHkgMTAgcmVxdWVzdHMgKGRvIG5vdCB1c2UgaWYgeW91IHdhbnQgdG8gY3Jhd2wgYSBzaXRlbWFwKVxcbn0pO1xcblxcbmNvbnN0IGxpc3RPZlVybHMgPSBhd2FpdCBkb3dubG9hZExpc3RPZlVybHMoeyB1cmw6ICdodHRwczovL2FwaWZ5LmNvbS9zaXRlbWFwLnhtbCcgfSk7XFxuXFxuLy8gUnVuIHRoZSBjcmF3bGVyXFxuYXdhaXQgY3Jhd2xlci5ydW4obGlzdE9mVXJscyk7XFxuXFxuYXdhaXQgQWN0b3IuZXhpdCgpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjEwMjQsInRpbWVvdXQiOjE4MH19.mjmmhoSL7b0V2s0TY-HSOQg91w6fOa-Mp3r5P63y9XY"},u={code:"import { Actor } from 'apify';\nimport { PuppeteerCrawler, downloadListOfUrls } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIsIGRvd25sb2FkTGlzdE9mVXJscyB9IGZyb20gJ2NyYXdsZWUnO1xcblxcbmF3YWl0IEFjdG9yLmluaXQoKTtcXG5cXG5jb25zdCBjcmF3bGVyID0gbmV3IFB1cHBldGVlckNyYXdsZXIoe1xcbiAgICAvLyBGdW5jdGlvbiBjYWxsZWQgZm9yIGVhY2ggVVJMXFxuICAgIGFzeW5jIHJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCB9KSB7XFxuICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnVybCk7XFxuICAgIH0sXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLCAvLyBMaW1pdGF0aW9uIGZvciBvbmx5IDEwIHJlcXVlc3RzIChkbyBub3QgdXNlIGlmIHlvdSB3YW50IHRvIGNyYXdsIGEgc2l0ZW1hcClcXG59KTtcXG5cXG5jb25zdCBsaXN0T2ZVcmxzID0gYXdhaXQgZG93bmxvYWRMaXN0T2ZVcmxzKHsgdXJsOiAnaHR0cHM6Ly9hcGlmeS5jb20vc2l0ZW1hcC54bWwnIH0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlclxcbmF3YWl0IGNyYXdsZXIucnVuKGxpc3RPZlVybHMpO1xcblxcbmF3YWl0IEFjdG9yLmV4aXQoKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.a8BCwUkWxYn4sOiNxIqxqQ6FQfsKpHqw30RW56dHbig"},s={code:"import { PlaywrightCrawler, downloadListOfUrls } from 'crawlee';\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\nconst crawler = new PlaywrightCrawler({\n    // Function called for each URL\n    async requestHandler({ request }) {\n        console.log(request.url);\n    },\n    maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n});\n\nconst listOfUrls = await downloadListOfUrls({ url: 'https://apify.com/sitemap.xml' });\n\n// Run the crawler\nawait crawler.run(listOfUrls);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IFBsYXl3cmlnaHRDcmF3bGVyLCBkb3dubG9hZExpc3RPZlVybHMgfSBmcm9tICdjcmF3bGVlJztcXG5pbXBvcnQgeyBBY3RvciB9IGZyb20gJ2FwaWZ5JztcXG5cXG5hd2FpdCBBY3Rvci5pbml0KCk7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQbGF5d3JpZ2h0Q3Jhd2xlcih7XFxuICAgIC8vIEZ1bmN0aW9uIGNhbGxlZCBmb3IgZWFjaCBVUkxcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0IH0pIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QudXJsKTtcXG4gICAgfSxcXG4gICAgbWF4UmVxdWVzdHNQZXJDcmF3bDogMTAsIC8vIExpbWl0YXRpb24gZm9yIG9ubHkgMTAgcmVxdWVzdHMgKGRvIG5vdCB1c2UgaWYgeW91IHdhbnQgdG8gY3Jhd2wgYSBzaXRlbWFwKVxcbn0pO1xcblxcbmNvbnN0IGxpc3RPZlVybHMgPSBhd2FpdCBkb3dubG9hZExpc3RPZlVybHMoeyB1cmw6ICdodHRwczovL2FwaWZ5LmNvbS9zaXRlbWFwLnhtbCcgfSk7XFxuXFxuLy8gUnVuIHRoZSBjcmF3bGVyXFxuYXdhaXQgY3Jhd2xlci5ydW4obGlzdE9mVXJscyk7XFxuXFxuYXdhaXQgQWN0b3IuZXhpdCgpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjQwOTYsInRpbWVvdXQiOjE4MH19.FSqg5eweSp1Lf5NDrY70g6qyegn1fmR1EJAs4J6rC8c"};var d,p=["components"],m={id:"crawl-sitemap",title:"Crawl a sitemap"},b=void 0,f={unversionedId:"examples/crawl-sitemap",id:"examples/crawl-sitemap",title:"Crawl a sitemap",description:"This example downloads and crawls the URLs from a sitemap.",source:"@site/../docs/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/sdk/js/docs/next/examples/crawl-sitemap",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/sdk/js/docs/next/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/sdk/js/docs/next/examples/crawl-some-links"}},y={},g=[],I=(d="RunnableCodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),w={toc:g},v="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)(v,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,l.kt)(o.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"cheerio_crawler",label:"Cheerio Crawler",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,l.kt)(I,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},i)),(0,l.kt)(c.Z,{value:"puppeteer_crawler",label:"Puppeteer Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,l.kt)(I,{className:"language-js",type:"puppeteer",mdxType:"RunnableCodeBlock"},u)),(0,l.kt)(c.Z,{value:"playwright_crawler",label:"Playwright Crawler",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile.")),(0,l.kt)(I,{className:"language-js",type:"playwright",mdxType:"RunnableCodeBlock"},s))))}h.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);