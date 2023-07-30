"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2977],{87245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id_old:"version-1.3-data-storage",title:"Data Storage",id:"data-storage"},l=void 0,u={unversionedId:"guides/data-storage",id:"version-1.3/guides/data-storage",title:"Data Storage",description:"The Apify SDK has several data storage types that are useful for specific tasks. The data is stored either on local disk to a directory defined by the",source:"@site/versioned_docs/version-1.3/guides/data_storage.md",sourceDirName:"guides",slug:"/guides/data-storage",permalink:"/sdk/js/docs/1.3/guides/data-storage",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1690590428,formattedLastUpdatedAt:"Jul 29, 2023",frontMatter:{id_old:"version-1.3-data-storage",title:"Data Storage",id:"data-storage"}},p={},d=[{value:"Key-value store",id:"key-value-store",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Request queue",id:"request-queue",level:2}],c={toc:d},h="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Apify SDK has several data storage types that are useful for specific tasks. The data is stored either on local disk to a directory defined by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable, or on the ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform")," under the user account\nidentified by the API token defined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable. If neither of these variables is defined, by default Apify SDK sets\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage")," in the current working directory and prints a warning."),(0,o.kt)("p",null,"Typically, you will be developing the code on your local computer and thus set the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable. Once the code is\nready, you will deploy it to the Apify platform, where it will automatically set the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable and thus use cloud storage. No\ncode changes are needed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Related links")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage",target:"_blank",rel:"noopener"},"Apify platform storage documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://my.apify.com/storage",target:"_blank",rel:"noopener"},"View storage in Apify app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apify.com/docs/api/v2#/reference/key-value-stores",target:"_blank",rel:"noopener"},"API reference"))),(0,o.kt)("h2",{id:"key-value-store"},"Key-value store"),(0,o.kt)("p",null,"The key-value store is used for saving and reading data records or files. Each data record is represented by a unique key and associated with a MIME\ncontent type. Key-value stores are ideal for saving screenshots of web pages, PDFs or to persist the state of crawlers."),(0,o.kt)("p",null,"Each actor run is associated with a ",(0,o.kt)("strong",{parentName:"p"},"default key-value store"),", which is created exclusively for the actor run. By convention, the actor run input\nand output is stored in the default key-value store under the ",(0,o.kt)("inlineCode",{parentName:"p"},"INPUT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT")," key, respectively. Typically the input and output is a JSON file,\nalthough it can be any other format."),(0,o.kt)("p",null,"In the Apify SDK, the key-value store is represented by the ",(0,o.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"KeyValueStore"))," class. In order to simplify access to the default\nkey-value store, the SDK also provides ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#getvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.getValue()"))," and\n",(0,o.kt)("a",{parentName:"p",href:"../api/apify#setvalue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.setValue()"))," functions."),(0,o.kt)("p",null,"In local configuration, the data is stored in the directory specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/key_value_stores/{STORE_ID}/{KEY}.{EXT}\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"{STORE_ID}")," is the name or ID of the key-value store. The default key value store has ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_KEY_VALUE_STORE_ID")," environment variable. The ",(0,o.kt)("inlineCode",{parentName:"p"},"{KEY}")," is the key of the record and ",(0,o.kt)("inlineCode",{parentName:"p"},"{EXT}")," corresponds to the MIME content type of the\ndata value."),(0,o.kt)("p",null,"The following code demonstrates basic operations of key-value stores:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Get actor input from the default key-value store\nconst input = await Apify.getInput();\n\n// Write actor output to the default key-value store.\nawait Apify.setValue('OUTPUT', { myResult: 123 });\n\n// Open a named key-value store\nconst store = await Apify.openKeyValueStore('some-name');\n\n// Write record. JavaScript object is automatically converted to JSON,\n// strings and binary buffers are stored as they are\nawait store.setValue('some-key', { foo: 'bar' });\n\n// Read record. Note that JSON is automatically parsed to a JavaScript object,\n// text data returned as a string and other data is returned as binary buffer\nconst value = await store.getValue('some-key');\n\n// Delete record\nawait store.setValue('some-key', null);\n")),(0,o.kt)("p",null,"To see a real-world example of how to get the input from the key-value store, see the ",(0,o.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/examples/screenshots",target:null,rel:null},"Screenshots")," example."),(0,o.kt)("h2",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"Datasets are used to store structured data where each object stored has the same attributes, such as online store products or real estate offers. You\ncan imagine a dataset as a table, where each object is a row and its attributes are columns. Dataset is an append-only storage - you can only add new\nrecords to it but you cannot modify or remove existing records."),(0,o.kt)("p",null,"When the dataset is stored on the ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform"),", you can export its data to the following formats: HTML,\nJSON, CSV, Excel, XML and RSS. The datasets are displayed on the actor run details page and in the\n",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/storage",target:"_blank",rel:"noopener"},"Storage")," section in the Apify app. The actual data is exported using the\n",(0,o.kt)("a",{parentName:"p",href:"https://apify.com/docs/api/v2#/reference/datasets/item-collection/get-items",target:"_blank",rel:"noopener"},"Get dataset items")," Apify API endpoint. This\nway you can easily share crawling results."),(0,o.kt)("p",null,"Each actor run is associated with a ",(0,o.kt)("strong",{parentName:"p"},"default dataset"),", which is created exclusively for the actor run. Typically, it is used to store crawling\nresults specific for the actor run. Its usage is optional."),(0,o.kt)("p",null,"In the Apify SDK, the dataset is represented by the ",(0,o.kt)("a",{parentName:"p",href:"../api/dataset",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Dataset"))," class. In order to simplify writes to the default dataset, the SDK\nalso provides the ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#pushdata",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.pushData()"))," function."),(0,o.kt)("p",null,"In local configuration, the data is stored in the directory specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/datasets/{DATASET_ID}/{INDEX}.json\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"{DATASET_ID}")," is the name or ID of the dataset. The default dataset has ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_DATASET_ID")," environment variable. Each dataset item is stored as a separate JSON file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"{INDEX}")," is a zero-based index of the\nitem in the dataset."),(0,o.kt)("p",null,"The following code demonstrates basic operations of the dataset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Write a single row to the default dataset\nawait Apify.pushData({ col1: 123, col2: 'val2' });\n\n// Open a named dataset\nconst dataset = await Apify.openDataset('some-name');\n\n// Write a single row\nawait dataset.pushData({ foo: 'bar' });\n\n// Write multiple rows\nawait dataset.pushData([{ foo: 'bar2', col2: 'val2' }, { col3: 123 }]);\n")),(0,o.kt)("p",null,"To see how to use the dataset to store crawler results, see the ",(0,o.kt)("a",{parentName:"p",href:"../examples/cheerio-crawler",target:null,rel:null},"Cheerio Crawler")," example."),(0,o.kt)("h2",{id:"request-queue"},"Request queue"),(0,o.kt)("p",null,"The request queue is a storage of URLs to crawl. The queue is used for the deep crawling of websites, where you start with several URLs and then\nrecursively follow links to other pages. The data structure supports both breadth-first and depth-first crawling orders."),(0,o.kt)("p",null,"Each actor run is associated with a ",(0,o.kt)("strong",{parentName:"p"},"default request queue"),", which is created exclusively for the actor run. Typically, it is used to store URLs to\ncrawl in the specific actor run. Its usage is optional."),(0,o.kt)("p",null,"In Apify SDK, the request queue is represented by the ",(0,o.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," class."),(0,o.kt)("p",null,"In local configuration, the request queue data is stored in the directory specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/request_queues/{QUEUE_ID}/{STATE}/{NUMBER}.json\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"{QUEUE_ID}")," is the name or ID of the request queue. The default queue has ID ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_REQUEST_QUEUE_ID")," environment variable. Each request in the queue is stored as a separate JSON file, where ",(0,o.kt)("inlineCode",{parentName:"p"},"{STATE}")," is either\n",(0,o.kt)("inlineCode",{parentName:"p"},"handled")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pending"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"{NUMBER}")," is an integer indicating the position of the request in the queue."),(0,o.kt)("p",null,"The following code demonstrates basic operations of the request queue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Open the default request queue associated with the actor run\nconst queue = await Apify.openRequestQueue();\n\n// Open a named request queue\nconst queueWithName = await Apify.openRequestQueue('some-name');\n\n// Enqueue few requests\nawait queue.addRequest({ url: 'http://example.com/aaa' });\nawait queue.addRequest({ url: 'http://example.com/bbb' });\nawait queue.addRequest({ url: 'http://example.com/foo/bar' }, { forefront: true });\n\n// Get requests from queue\nconst request1 = await queue.fetchNextRequest();\nconst request2 = await queue.fetchNextRequest();\nconst request3 = await queue.fetchNextRequest();\n\n// Mark a request as handled\nawait queue.markRequestHandled(request1);\n\n// If processing fails then reclaim the request back to the queue, so that it's crawled again\nawait queue.reclaimRequest(request2);\n")),(0,o.kt)("p",null,"To see how to use the request queue with a crawler, see the ",(0,o.kt)("a",{parentName:"p",href:"../examples/puppeteer-crawler",target:null,rel:null},"Puppeteer Crawler")," example."))}f.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);