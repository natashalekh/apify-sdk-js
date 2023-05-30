"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{1483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id_old:"version-1.3-screenshots",title:"Screenshots",id:"screenshots"},l=void 0,c={unversionedId:"examples/screenshots",id:"version-1.3/examples/screenshots",title:"Screenshots",description:"This example demonstrates how to read and write data to the default key-value store using Apify.getValue() and",source:"@site/versioned_docs/version-1.3/examples/screenshots.md",sourceDirName:"examples",slug:"/examples/screenshots",permalink:"/sdk/js/docs/1.3/examples/screenshots",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"natashalekh",lastUpdatedAt:1685444628,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{id_old:"version-1.3-screenshots",title:"Screenshots",id:"screenshots"},sidebar:"version-1.3/docs",previous:{title:"Puppeteer with proxy",permalink:"/sdk/js/docs/1.3/examples/puppeteer-with-proxy"},next:{title:"Synchronous run",permalink:"/sdk/js/docs/1.3/examples/synchronous-run"}},p={},u=[],f={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to read and write data to the default key-value store using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#apifygetvaluekey",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.getValue()"))," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/apify#apifysetvaluekey-value-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.setValue()")),"."),(0,o.kt)("p",null,"The script crawls a list of URLs using Puppeteer, captures a screenshot of each page, and saves it to the store. The list of URLs is provided as actor\ninput that is also read from the store."),(0,o.kt)("p",null,"In local configuration, the input is stored in the default key-value store's directory as a JSON file at\n",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage/key_value_stores/default/INPUT.json"),". You need to create the file and set it with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "sources": [{ "url": "https://www.google.com" }, { "url": "https://www.duckduckgo.com" }] }\n')),(0,o.kt)("p",null,"On the Apify cloud, the input can be either set manually in the UI app or passed as the POST payload to the\n",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/actors/run-collection/run-actor",target:"_blank",rel:"noopener"},"Run actor API call"),". For more details, see\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/run#input-and-output",target:"_blank",rel:"noopener"},"Input and output")," in the Apify Actor documentation."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js 12 + Chrome on Debian (apify/actor-node-chrome)")," base image on the source tab of your\nactor configuration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Read the actor input configuration containing the URLs for the screenshot.\n    // By convention, the input is present in the actor's default key-value store under the \"INPUT\" key.\n    const input = await Apify.getInput();\n    if (!input) throw new Error('Have you passed the correct INPUT ?');\n\n    const { sources } = input;\n\n    const requestList = new Apify.RequestList({ sources });\n    await requestList.initialize();\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction: async ({ page, request }) => {\n            console.log(`Processing ${request.url}...`);\n\n            // This is a Puppeteer function that takes a screenshot of the page and returns its buffer.\n            const screenshotBuffer = await page.screenshot();\n\n            // The record key may only include the following characters: a-zA-Z0-9!-_.'()\n            const key = request.url.replace(/[:/]/g, '_');\n\n            // Save the screenshot. Choosing the right content type will automatically\n            // assign the local file the right extension, in this case .png.\n            // The screenshots will be stored in ./apify_storage/key_value_stores/default/\n            await Apify.setValue(key, screenshotBuffer, { contentType: 'image/png' });\n            console.log(`Screenshot of ${request.url} saved.`);\n        },\n    });\n\n    // Run crawler.\n    await crawler.run();\n\n    console.log('Crawler finished.');\n});\n")))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);