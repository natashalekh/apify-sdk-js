"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8578],{68889:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(88746),l=r(6141),c=r(6832);const o=function(e){var t=e.to,r=e.children,o=(0,l.E)(),i=o.version,s=o.isLast;if((0,c.default)().siteConfig.presets[0][1].docs.disableVersioning)return a.createElement(n.default,{to:"/api/"+t},r);var d=i+"/";return"current"===i?d="next/":s&&(d=""),a.createElement(n.default,{to:"/api/"+d+t},r)}},26569:(e,t,r)=>{r.d(t,{B:()=>o,T:()=>c});var a=r(67294),n=r(88746),l="https://crawlee.dev",c=function(e){var t=e.to,r=e.children,c=e.version;return a.createElement(n.default,{href:l+"/api"+(c?"/"+c:"")+"/"+t},r)},o=function(e){var t=e.to,r=e.children;return a.createElement(n.default,{href:l+"/"+t},r)}},42327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>I,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),c=(r(14563),r(68889),r(26569));const o={code:"import { Actor } from 'apify';\nimport { BasicCrawler } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\n// Create a dataset where we will store the results.\n// Create a BasicCrawler - the simplest crawler that enables\n// users to implement the crawling logic themselves.\nconst crawler = new BasicCrawler({\n    // This function will be called for each URL to crawl.\n    async requestHandler({ request }) {\n        const { url } = request;\n        console.log(`Processing ${url}...`);\n\n        // Fetch the page HTML via Apify utils gotScraping\n        const { body } = await gotScraping({ url });\n\n        // Store the HTML and URL to the default dataset.\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.\nawait crawler.run([\n    { url: 'http://www.google.com/' },\n    { url: 'http://www.example.com/' },\n    { url: 'http://www.bing.com/' },\n    { url: 'http://www.wikipedia.com/' },\n]);\n\nconsole.log('Crawler finished.');\n\nawait Actor.exit();\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnYXBpZnknO1xcbmltcG9ydCB7IEJhc2ljQ3Jhd2xlciB9IGZyb20gJ2NyYXdsZWUnO1xcbmltcG9ydCB7IGdvdFNjcmFwaW5nIH0gZnJvbSAnZ290LXNjcmFwaW5nJztcXG5cXG5hd2FpdCBBY3Rvci5pbml0KCk7XFxuXFxuLy8gQ3JlYXRlIGEgZGF0YXNldCB3aGVyZSB3ZSB3aWxsIHN0b3JlIHRoZSByZXN1bHRzLlxcbi8vIENyZWF0ZSBhIEJhc2ljQ3Jhd2xlciAtIHRoZSBzaW1wbGVzdCBjcmF3bGVyIHRoYXQgZW5hYmxlc1xcbi8vIHVzZXJzIHRvIGltcGxlbWVudCB0aGUgY3Jhd2xpbmcgbG9naWMgdGhlbXNlbHZlcy5cXG5jb25zdCBjcmF3bGVyID0gbmV3IEJhc2ljQ3Jhd2xlcih7XFxuICAgIC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2ggVVJMIHRvIGNyYXdsLlxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QgfSkge1xcbiAgICAgICAgY29uc3QgeyB1cmwgfSA9IHJlcXVlc3Q7XFxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvY2Vzc2luZyAke3VybH0uLi5gKTtcXG5cXG4gICAgICAgIC8vIEZldGNoIHRoZSBwYWdlIEhUTUwgdmlhIEFwaWZ5IHV0aWxzIGdvdFNjcmFwaW5nXFxuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IGF3YWl0IGdvdFNjcmFwaW5nKHsgdXJsIH0pO1xcblxcbiAgICAgICAgLy8gU3RvcmUgdGhlIEhUTUwgYW5kIFVSTCB0byB0aGUgZGVmYXVsdCBkYXRhc2V0LlxcbiAgICAgICAgYXdhaXQgQWN0b3IucHVzaERhdGEoe1xcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXFxuICAgICAgICAgICAgaHRtbDogYm9keSxcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcbn0pO1xcblxcbi8vIFRoZSBpbml0aWFsIGxpc3Qgb2YgVVJMcyB0byBjcmF3bC4gSGVyZSB3ZSB1c2UganVzdCBhIGZldyBoYXJkLWNvZGVkIFVSTHMuXFxuYXdhaXQgY3Jhd2xlci5ydW4oW1xcbiAgICB7IHVybDogJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbS8nIH0sXFxuICAgIHsgdXJsOiAnaHR0cDovL3d3dy5leGFtcGxlLmNvbS8nIH0sXFxuICAgIHsgdXJsOiAnaHR0cDovL3d3dy5iaW5nLmNvbS8nIH0sXFxuICAgIHsgdXJsOiAnaHR0cDovL3d3dy53aWtpcGVkaWEuY29tLycgfSxcXG5dKTtcXG5cXG5jb25zb2xlLmxvZygnQ3Jhd2xlciBmaW5pc2hlZC4nKTtcXG5cXG5hd2FpdCBBY3Rvci5leGl0KCk7XFxuXCJ9Iiwib3B0aW9ucyI6eyJidWlsZCI6ImxhdGVzdCIsImNvbnRlbnRUeXBlIjoiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCIsIm1lbW9yeSI6MTAyNCwidGltZW91dCI6MTgwfX0.-TdH8qt-fjSHPGoP8mJHr2LqYkhq6aWUhY9IdesMFrM"};var i,s=["components"],d={id:"basic-crawler",title:"Basic crawler"},p=void 0,g={unversionedId:"examples/basic-crawler",id:"version-3.1/examples/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the BasicCrawler. You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers",source:"@site/versioned_docs/version-3.1/examples/basic_crawler.mdx",sourceDirName:"examples",slug:"/examples/basic-crawler",permalink:"/sdk/js/docs/examples/basic-crawler",draft:!1,tags:[],version:"3.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"basic-crawler",title:"Basic crawler"},sidebar:"docs",previous:{title:"Add data to dataset",permalink:"/sdk/js/docs/examples/add-data-to-dataset"},next:{title:"Call actor",permalink:"/sdk/js/docs/examples/call-actor"}},u={},b=[],m=(i="RunnableCodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),h={toc:b},w="wrapper";function I(e){var t=e.components,r=(0,n.Z)(e,s);return(0,l.kt)(w,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the ",(0,l.kt)(c.T,{to:"basic-crawler/class/BasicCrawler",mdxType:"CrawleeApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"BasicCrawler")),". You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers\nlike ",(0,l.kt)(c.T,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"CrawleeApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," or ",(0,l.kt)(c.T,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"CrawleeApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"."),(0,l.kt)("p",null,"The script simply downloads several web pages with plain HTTP requests using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,l.kt)("inlineCode",{parentName:"a"},"got-scraping")),"\nnpm package and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,l.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,l.kt)(m,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},o))}I.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,b=p["".concat(i,".").concat(u)]||p[u]||g[u]||l;return r?a.createElement(b,c(c({ref:t},d),{},{components:r})):a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);