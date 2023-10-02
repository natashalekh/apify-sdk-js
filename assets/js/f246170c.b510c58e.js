"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9921],{68889:(e,r,t)=>{t.d(r,{Z:()=>p});var n=t(67294),a=t(88746),c=t(6141),o=t(6832);const p=function(e){var r=e.to,t=e.children,p=(0,c.E)(),l=p.version,i=p.isLast;if((0,o.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+r},t);var u=l+"/";return"current"===l?u="next/":i&&(u=""),n.createElement(a.default,{to:"/api/"+u+r},t)}},26569:(e,r,t)=>{t.d(r,{B:()=>p,T:()=>o});var n=t(67294),a=t(88746),c="https://crawlee.dev",o=function(e){var r=e.to,t=e.children,o=e.version;return n.createElement(a.default,{href:c+"/api"+(o?"/"+o:"")+"/"+r},t)},p=function(e){var r=e.to,t=e.children;return n.createElement(a.default,{href:c+"/"+r},t)}},19161:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var n=t(87462),a=t(63366),c=(t(67294),t(3905)),o=(t(14563),t(68889),t(26569));const p={code:"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page, enqueueLinks }) {\n        const title = await page.title();\n        console.log(`Title of ${request.url}: ${title}`);\n\n        await enqueueLinks({\n            pseudoUrls: ['https://www.iana.org/[.*]'],\n        });\n    },\n    maxRequestsPerCrawl: 10,\n});\n\nawait crawler.run(['https://www.iana.org/']);\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IFB1cHBldGVlckNyYXdsZXIgfSBmcm9tICdjcmF3bGVlJztcXG5cXG5hd2FpdCBBY3Rvci5pbml0KCk7XFxuXFxuY29uc3QgY3Jhd2xlciA9IG5ldyBQdXBwZXRlZXJDcmF3bGVyKHtcXG4gICAgYXN5bmMgcmVxdWVzdEhhbmRsZXIoeyByZXF1ZXN0LCBwYWdlLCBlbnF1ZXVlTGlua3MgfSkge1xcbiAgICAgICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwYWdlLnRpdGxlKCk7XFxuICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGUgb2YgJHtyZXF1ZXN0LnVybH06ICR7dGl0bGV9YCk7XFxuXFxuICAgICAgICBhd2FpdCBlbnF1ZXVlTGlua3Moe1xcbiAgICAgICAgICAgIHBzZXVkb1VybHM6IFsnaHR0cHM6Ly93d3cuaWFuYS5vcmcvWy4qXSddLFxcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLFxcbn0pO1xcblxcbmF3YWl0IGNyYXdsZXIucnVuKFsnaHR0cHM6Ly93d3cuaWFuYS5vcmcvJ10pO1xcblxcbmF3YWl0IEFjdG9yLmV4aXQoKTtcXG5cIn0iLCJvcHRpb25zIjp7ImJ1aWxkIjoibGF0ZXN0IiwiY29udGVudFR5cGUiOiJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04IiwibWVtb3J5Ijo0MDk2LCJ0aW1lb3V0IjoxODB9fQ.8btSf7N11TyAU4POBztQTOCmNYkaZxZ9FeoCUoRa5YE"};var l,i=["components"],u={id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},s=void 0,d={unversionedId:"examples/puppeteer-recursive-crawl",id:"examples/puppeteer-recursive-crawl",title:"Puppeteer recursive crawl",description:"Run the following example to perform a recursive crawl of a website using PuppeteerCrawler.",source:"@site/../docs/examples/puppeteer_recursive_crawl.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-recursive-crawl",permalink:"/sdk/js/docs/next/examples/puppeteer-recursive-crawl",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},sidebar:"docs",previous:{title:"Puppeteer crawler",permalink:"/sdk/js/docs/next/examples/puppeteer-crawler"},next:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/next/examples/puppeteer-with-proxy"}},m={},f=[],y=(l="RunnableCodeBlock",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",e)}),b={toc:f},w="wrapper";function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,c.kt)(w,(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Run the following example to perform a recursive crawl of a website using ",(0,c.kt)(o.T,{to:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"CrawleeApiLink"},(0,c.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")),"."),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,c.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,c.kt)(y,{className:"language-js",type:"puppeteer",mdxType:"RunnableCodeBlock"},p))}g.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(t),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var i=2;i<c;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);