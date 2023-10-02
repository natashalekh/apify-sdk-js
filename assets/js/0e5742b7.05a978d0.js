"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8290],{68889:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(88746),l=n(6141),c=n(6832);const o=function(e){var t=e.to,n=e.children,o=(0,l.E)(),i=o.version,s=o.isLast;if((0,c.default)().siteConfig.presets[0][1].docs.disableVersioning)return r.createElement(a.default,{to:"/api/"+t},n);var g=i+"/";return"current"===i?g="next/":s&&(g=""),r.createElement(a.default,{to:"/api/"+g+t},n)}},26569:(e,t,n)=>{n.d(t,{B:()=>o,T:()=>c});var r=n(67294),a=n(88746),l="https://crawlee.dev",c=function(e){var t=e.to,n=e.children,c=e.version;return r.createElement(a.default,{href:l+"/api"+(c?"/"+c:"")+"/"+t},n)},o=function(e){var t=e.to,n=e.children;return r.createElement(a.default,{href:l+"/"+t},n)}},84770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>C,frontMatter:()=>g,metadata:()=>I,toc:()=>m});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),c=(n(14563),n(68889),n(26569));const o={code:"import { CheerioCrawler, log, LogLevel } from 'crawlee';\n\n// Crawlers come with various utilities, e.g. for logging.\n// Here we use debug level of logging to improve the debugging experience.\n// This functionality is optional!\nlog.setLevel(LogLevel.DEBUG);\n\n// Create an instance of the CheerioCrawler class - a crawler\n// that automatically loads the URLs and parses their HTML using the cheerio library.\nconst crawler = new CheerioCrawler({\n    // The crawler downloads and processes the web pages in parallel, with a concurrency\n    // automatically managed based on the available system memory and CPU (see AutoscaledPool class).\n    // Here we define some hard limits for the concurrency.\n    minConcurrency: 10,\n    maxConcurrency: 50,\n\n    // On error, retry each page at most once.\n    maxRequestRetries: 1,\n\n    // Increase the timeout for processing of each page.\n    requestHandlerTimeoutSecs: 30,\n\n    // Limit to 10 requests per one crawl\n    maxRequestsPerCrawl: 10,\n\n    // This function will be called for each URL to crawl.\n    // It accepts a single parameter, which is an object with options as:\n    // https://sdk.apify.com/docs/typedefs/cheerio-crawler-options#handlepagefunction\n    // We use for demonstration only 2 of them:\n    // - request: an instance of the Request class with information such as URL and HTTP method\n    // - $: the cheerio object containing parsed HTML\n    async requestHandler({ request, $ }) {\n        log.debug(`Processing ${request.url}...`);\n\n        // Extract data from the page using cheerio.\n        const title = $('title').text();\n        const h1texts = [];\n        $('h1').each((index, el) => {\n            h1texts.push({\n                text: $(el).text(),\n            });\n        });\n\n        // Store the results to the dataset. In local configuration,\n        // the data will be stored as JSON files in ./storage/datasets/default\n        await Actor.pushData({\n            url: request.url,\n            title,\n            h1texts,\n        });\n    },\n\n    // This function is called if the page processing failed more than maxRequestRetries+1 times.\n    failedRequestHandler({ request }) {\n        log.debug(`Request ${request.url} failed twice.`);\n    },\n});\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nlog.debug('Crawler finished.');\n",hash:"eyJ1IjoiRWdQdHczb2VqNlRhRHQ1cW4iLCJ2IjoxfQ.eyJpbnB1dCI6IntcImNvZGVcIjpcImltcG9ydCB7IENoZWVyaW9DcmF3bGVyLCBsb2csIExvZ0xldmVsIH0gZnJvbSAnY3Jhd2xlZSc7XFxuXFxuLy8gQ3Jhd2xlcnMgY29tZSB3aXRoIHZhcmlvdXMgdXRpbGl0aWVzLCBlLmcuIGZvciBsb2dnaW5nLlxcbi8vIEhlcmUgd2UgdXNlIGRlYnVnIGxldmVsIG9mIGxvZ2dpbmcgdG8gaW1wcm92ZSB0aGUgZGVidWdnaW5nIGV4cGVyaWVuY2UuXFxuLy8gVGhpcyBmdW5jdGlvbmFsaXR5IGlzIG9wdGlvbmFsIVxcbmxvZy5zZXRMZXZlbChMb2dMZXZlbC5ERUJVRyk7XFxuXFxuLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBDaGVlcmlvQ3Jhd2xlciBjbGFzcyAtIGEgY3Jhd2xlclxcbi8vIHRoYXQgYXV0b21hdGljYWxseSBsb2FkcyB0aGUgVVJMcyBhbmQgcGFyc2VzIHRoZWlyIEhUTUwgdXNpbmcgdGhlIGNoZWVyaW8gbGlicmFyeS5cXG5jb25zdCBjcmF3bGVyID0gbmV3IENoZWVyaW9DcmF3bGVyKHtcXG4gICAgLy8gVGhlIGNyYXdsZXIgZG93bmxvYWRzIGFuZCBwcm9jZXNzZXMgdGhlIHdlYiBwYWdlcyBpbiBwYXJhbGxlbCwgd2l0aCBhIGNvbmN1cnJlbmN5XFxuICAgIC8vIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCBiYXNlZCBvbiB0aGUgYXZhaWxhYmxlIHN5c3RlbSBtZW1vcnkgYW5kIENQVSAoc2VlIEF1dG9zY2FsZWRQb29sIGNsYXNzKS5cXG4gICAgLy8gSGVyZSB3ZSBkZWZpbmUgc29tZSBoYXJkIGxpbWl0cyBmb3IgdGhlIGNvbmN1cnJlbmN5LlxcbiAgICBtaW5Db25jdXJyZW5jeTogMTAsXFxuICAgIG1heENvbmN1cnJlbmN5OiA1MCxcXG5cXG4gICAgLy8gT24gZXJyb3IsIHJldHJ5IGVhY2ggcGFnZSBhdCBtb3N0IG9uY2UuXFxuICAgIG1heFJlcXVlc3RSZXRyaWVzOiAxLFxcblxcbiAgICAvLyBJbmNyZWFzZSB0aGUgdGltZW91dCBmb3IgcHJvY2Vzc2luZyBvZiBlYWNoIHBhZ2UuXFxuICAgIHJlcXVlc3RIYW5kbGVyVGltZW91dFNlY3M6IDMwLFxcblxcbiAgICAvLyBMaW1pdCB0byAxMCByZXF1ZXN0cyBwZXIgb25lIGNyYXdsXFxuICAgIG1heFJlcXVlc3RzUGVyQ3Jhd2w6IDEwLFxcblxcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIFVSTCB0byBjcmF3bC5cXG4gICAgLy8gSXQgYWNjZXB0cyBhIHNpbmdsZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMgYXM6XFxuICAgIC8vIGh0dHBzOi8vc2RrLmFwaWZ5LmNvbS9kb2NzL3R5cGVkZWZzL2NoZWVyaW8tY3Jhd2xlci1vcHRpb25zI2hhbmRsZXBhZ2VmdW5jdGlvblxcbiAgICAvLyBXZSB1c2UgZm9yIGRlbW9uc3RyYXRpb24gb25seSAyIG9mIHRoZW06XFxuICAgIC8vIC0gcmVxdWVzdDogYW4gaW5zdGFuY2Ugb2YgdGhlIFJlcXVlc3QgY2xhc3Mgd2l0aCBpbmZvcm1hdGlvbiBzdWNoIGFzIFVSTCBhbmQgSFRUUCBtZXRob2RcXG4gICAgLy8gLSAkOiB0aGUgY2hlZXJpbyBvYmplY3QgY29udGFpbmluZyBwYXJzZWQgSFRNTFxcbiAgICBhc3luYyByZXF1ZXN0SGFuZGxlcih7IHJlcXVlc3QsICQgfSkge1xcbiAgICAgICAgbG9nLmRlYnVnKGBQcm9jZXNzaW5nICR7cmVxdWVzdC51cmx9Li4uYCk7XFxuXFxuICAgICAgICAvLyBFeHRyYWN0IGRhdGEgZnJvbSB0aGUgcGFnZSB1c2luZyBjaGVlcmlvLlxcbiAgICAgICAgY29uc3QgdGl0bGUgPSAkKCd0aXRsZScpLnRleHQoKTtcXG4gICAgICAgIGNvbnN0IGgxdGV4dHMgPSBbXTtcXG4gICAgICAgICQoJ2gxJykuZWFjaCgoaW5kZXgsIGVsKSA9PiB7XFxuICAgICAgICAgICAgaDF0ZXh0cy5wdXNoKHtcXG4gICAgICAgICAgICAgICAgdGV4dDogJChlbCkudGV4dCgpLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICAvLyBTdG9yZSB0aGUgcmVzdWx0cyB0byB0aGUgZGF0YXNldC4gSW4gbG9jYWwgY29uZmlndXJhdGlvbixcXG4gICAgICAgIC8vIHRoZSBkYXRhIHdpbGwgYmUgc3RvcmVkIGFzIEpTT04gZmlsZXMgaW4gLi9zdG9yYWdlL2RhdGFzZXRzL2RlZmF1bHRcXG4gICAgICAgIGF3YWl0IEFjdG9yLnB1c2hEYXRhKHtcXG4gICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxcbiAgICAgICAgICAgIHRpdGxlLFxcbiAgICAgICAgICAgIGgxdGV4dHMsXFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaWYgdGhlIHBhZ2UgcHJvY2Vzc2luZyBmYWlsZWQgbW9yZSB0aGFuIG1heFJlcXVlc3RSZXRyaWVzKzEgdGltZXMuXFxuICAgIGZhaWxlZFJlcXVlc3RIYW5kbGVyKHsgcmVxdWVzdCB9KSB7XFxuICAgICAgICBsb2cuZGVidWcoYFJlcXVlc3QgJHtyZXF1ZXN0LnVybH0gZmFpbGVkIHR3aWNlLmApO1xcbiAgICB9LFxcbn0pO1xcblxcbi8vIFJ1biB0aGUgY3Jhd2xlciBhbmQgd2FpdCBmb3IgaXQgdG8gZmluaXNoLlxcbmF3YWl0IGNyYXdsZXIucnVuKCk7XFxuXFxubG9nLmRlYnVnKCdDcmF3bGVyIGZpbmlzaGVkLicpO1xcblwifSIsIm9wdGlvbnMiOnsiYnVpbGQiOiJsYXRlc3QiLCJjb250ZW50VHlwZSI6ImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgiLCJtZW1vcnkiOjEwMjQsInRpbWVvdXQiOjE4MH19.dOZILM56nUwSSVMoLgQB0brbbjQm2W2FDao35eLD72s"};var i,s=["components"],g={id:"cheerio-crawler",title:"Cheerio crawler"},d=void 0,I={unversionedId:"examples/cheerio-crawler",id:"examples/cheerio-crawler",title:"Cheerio crawler",description:"This example demonstrates how to use CheerioCrawler to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the Cheerio library and extract some data from it: the page title and all h1 tags.",source:"@site/../docs/examples/cheerio_crawler.mdx",sourceDirName:"examples",slug:"/examples/cheerio-crawler",permalink:"/sdk/js/docs/next/examples/cheerio-crawler",draft:!1,tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1696247727,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{id:"cheerio-crawler",title:"Cheerio crawler"},sidebar:"docs",previous:{title:"Call actor",permalink:"/sdk/js/docs/next/examples/call-actor"},next:{title:"Crawl all links on a website",permalink:"/sdk/js/docs/next/examples/crawl-all-links"}},u={},m=[],b=(i="RunnableCodeBlock",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),p={toc:m},h="wrapper";function C(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)(h,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example demonstrates how to use ",(0,l.kt)(c.T,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"CrawleeApiLink"},(0,l.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," to crawl a list of URLs from an external file, load each URL using a plain HTTP request, parse the HTML using the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cheerio",target:"_blank",rel:"noopener"},"Cheerio library")," and extract some data from it: the page title and all ",(0,l.kt)("inlineCode",{parentName:"p"},"h1")," tags."),(0,l.kt)(b,{className:"language-js",type:"cheerio",mdxType:"RunnableCodeBlock"},o))}C.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||I[u]||l;return n?r.createElement(m,c(c({ref:t},g),{},{components:n})):r.createElement(m,c({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);