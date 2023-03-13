"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5850],{13340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id_old:"version-1.3-cheerio-crawler-options",title:"CheerioCrawlerOptions",id:"cheerio-crawler-options"},s=void 0,p={unversionedId:"typedefs/cheerio-crawler-options",id:"version-1.3/typedefs/cheerio-crawler-options",title:"CheerioCrawlerOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/CheerioCrawlerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/cheerio-crawler-options",permalink:"/sdk/js/docs/1.3/typedefs/cheerio-crawler-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1678723125,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id_old:"version-1.3-cheerio-crawler-options",title:"CheerioCrawlerOptions",id:"cheerio-crawler-options"},sidebar:"version-1.3/docs",previous:{title:"BasicCrawlerOptions",permalink:"/sdk/js/docs/1.3/typedefs/basic-crawler-options"},next:{title:"PlaywrightCrawlerOptions",permalink:"/sdk/js/docs/1.3/typedefs/playwright-crawler-options"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>handlePageFunction</code>",id:"handlepagefunction",level:3},{value:"<code>requestList</code>",id:"requestlist",level:3},{value:"<code>requestQueue</code>",id:"requestqueue",level:3},{value:"<code>prepareRequestFunction</code>",id:"preparerequestfunction",level:3},{value:"<code>postResponseFunction</code>",id:"postresponsefunction",level:3},{value:"<code>handlePageTimeoutSecs</code>",id:"handlepagetimeoutsecs",level:3},{value:"<code>requestTimeoutSecs</code>",id:"requesttimeoutsecs",level:3},{value:"<code>ignoreSslErrors</code>",id:"ignoresslerrors",level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",level:3},{value:"<code>handleFailedRequestFunction</code>",id:"handlefailedrequestfunction",level:3},{value:"<code>preNavigationHooks</code>",id:"prenavigationhooks",level:3},{value:"<code>postNavigationHooks</code>",id:"postnavigationhooks",level:3},{value:"<code>additionalMimeTypes</code>",id:"additionalmimetypes",level:3},{value:"<code>suggestResponseEncoding</code>",id:"suggestresponseencoding",level:3},{value:"<code>forceResponseEncoding</code>",id:"forceresponseencoding",level:3},{value:"<code>maxRequestRetries</code>",id:"maxrequestretries",level:3},{value:"<code>maxRequestsPerCrawl</code>",id:"maxrequestspercrawl",level:3},{value:"<code>autoscaledPoolOptions</code>",id:"autoscaledpooloptions",level:3},{value:"<code>minConcurrency</code>",id:"minconcurrency",level:3},{value:"<code>maxConcurrency</code>",id:"maxconcurrency",level:3},{value:"<code>useSessionPool</code>",id:"usesessionpool",level:3},{value:"<code>sessionPoolOptions</code>",id:"sessionpooloptions",level:3},{value:"<code>persistCookiesPerSession</code>",id:"persistcookiespersession",level:3}],d={toc:c},h="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"cheeriocrawleroptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"handlepagefunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"handlePageFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/cheerio-handle-page",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"CheerioHandlePage"))),(0,a.kt)("p",null,"User-provided function that performs the logic of the crawler. It is called for each page loaded and parsed by the crawler."),(0,a.kt)("p",null,"The function receives the following object as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  // The Cheerio object's function with the parsed HTML.\n  $: Cheerio,\n\n  // The request body of the web page, whose type depends on the content type.\n  body: String|Buffer,\n\n  // The parsed object from JSON for responses with the \"application/json\" content types.\n  // For other content types it's null.\n  json: Object,\n\n  // Apify.Request object with details of the requested web page\n  request: Request,\n\n  // Parsed Content-Type HTTP header: { type, encoding }\n  contentType: Object,\n\n  // An instance of Node's http.IncomingMessage object,\n  response: Object,\n\n  // Session object, useful to work around anti-scraping protections\n  session: Session\n\n  // ProxyInfo object with information about currently used proxy\n  proxyInfo: ProxyInfo\n\n  // The running cheerio crawler instance.\n  crawler: CheerioCrawler\n}\n")),(0,a.kt)("p",null,"Type of ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," depends on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," header of the web page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String for ",(0,a.kt)("inlineCode",{parentName:"li"},"text/html"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"application/xhtml+xml"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"application/xml")," MIME content types"),(0,a.kt)("li",{parentName:"ul"},"Buffer for others MIME content types")),(0,a.kt)("p",null,"Parsed ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," header using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/content-type",target:"_blank",rel:"noopener"},"content-type package")," is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"contentType"),"."),(0,a.kt)("p",null,"Cheerio is available only for HTML and XML content types."),(0,a.kt)("p",null,"With the ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," object representing the URL to crawl."),(0,a.kt)("p",null,"If the function returns, the returned promise is awaited by the crawler."),(0,a.kt)("p",null,"If the function throws an exception, the crawler will try to re-crawl the request later, up to ",(0,a.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times. If all the retries\nfail, the crawler calls the function provided to the ",(0,a.kt)("inlineCode",{parentName:"p"},"handleFailedRequestFunction")," parameter. To make this work, you should ",(0,a.kt)("strong",{parentName:"p"},"always")," let your\nfunction throw exceptions rather than catch them. The exceptions are logged to the request using the\n",(0,a.kt)("a",{parentName:"p",href:"../api/request#pusherrormessage",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request.pushErrorMessage()"))," function."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestlist"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,a.kt)("p",null,"Static list of URLs to be processed. Either ",(0,a.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be provided (or both)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requestqueue"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,a.kt)("p",null,"Dynamic queue of URLs to be processed. This is useful for recursive crawling of websites. Either ",(0,a.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be\nprovided (or both)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preparerequestfunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"prepareRequestFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/prepare-request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"PrepareRequest"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option is deprecated, use ",(0,a.kt)("inlineCode",{parentName:"p"},"preNavigationHooks")," instead.")),(0,a.kt)("p",null,"A function that executes before the HTTP request is made to the target resource. This function is suitable for setting dynamic properties such as\ncookies to the ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request")),"."),(0,a.kt)("p",null,"The function receives the following object as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  session: Session,\n  proxyInfo: ProxyInfo,\n  crawler: CheerioCrawler,\n}\n")),(0,a.kt)("p",null,"where the ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," instance corresponds to the initialized request and the ",(0,a.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Session"))," instance corresponds to used\nsession."),(0,a.kt)("p",null,"The function should modify the properties of the passed ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," instance in place because there are already earlier references to\nit. Making a copy and returning it from this function is therefore not supported, because it would create inconsistencies where different parts of SDK\nwould have access to a different ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," instance."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"postresponsefunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"postResponseFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/post-response",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"PostResponse"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This option is deprecated, use ",(0,a.kt)("inlineCode",{parentName:"p"},"postNavigationHooks")," instead.")),(0,a.kt)("p",null,"A function that executes right after the HTTP request is made to the target resource and response is returned. This function is suitable for\noverriding custom properties of response e.g. setting headers because of response parsing."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const cheerioCrawlerOptions = {\n    // ...\n    postResponseFunction: ({ request, response }) => {\n        if (request.userData.parseAsJSON) {\n            response.headers['content-type'] = 'application/json; charset=utf-8';\n        }\n    },\n};\n")),(0,a.kt)("p",null,"The function receives the following object as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  response: Object,\n  request: Request,\n  session: Session,\n  proxyInfo: ProxyInfo,\n  crawler: CheerioCrawler,\n}\n")),(0,a.kt)("p",null,"The response is an instance of Node's http.IncomingMessage object."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"handlepagetimeoutsecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"handlePageTimeoutSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 60")),(0,a.kt)("p",null,"Timeout in which the function passed as ",(0,a.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," needs to finish, given in seconds."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"requesttimeoutsecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"requestTimeoutSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 30")),(0,a.kt)("p",null,"Timeout in which the HTTP request to the resource needs to finish, given in seconds."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ignoresslerrors"},(0,a.kt)("inlineCode",{parentName:"h3"},"ignoreSslErrors")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = true")),(0,a.kt)("p",null,"If set to true, SSL certificate errors will be ignored."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyconfiguration"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,a.kt)("p",null,"If set, ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," will be configured for all connections to use ",(0,a.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," or your own Proxy URLs provided and\nrotated according to the configuration. For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"documentation"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"handlefailedrequestfunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"handleFailedRequestFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/handle-failed-request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"HandleFailedRequest"))),(0,a.kt)("p",null,"A function to handle requests that failed more than ",(0,a.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times. The function receives the following object as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n  error: Error,\n  request: Request,\n  session: Session,\n  $: Cheerio,\n  body: String|Buffer,\n  json: Object,\n  contentType: Object,\n  response: Object,\n  proxyInfo: ProxyInfo,\n  crawler: CheerioCrawler,\n}\n")),(0,a.kt)("p",null,"where the ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))," instance corresponds to the failed request, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," instance represents the last error thrown during\nprocessing of the request."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-js/blob/master/src/crawlers/cheerio_crawler.js#L13",target:"_blank",rel:"noopener"},"source code")," for the default implementation of this function."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prenavigationhooks"},(0,a.kt)("inlineCode",{parentName:"h3"},"preNavigationHooks")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/hook",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Array<Hook>"))),(0,a.kt)("p",null,"Async functions that are sequentially evaluated before the navigation. Good for setting additional cookies or browser properties before navigation.\nThe function accepts two parameters, ",(0,a.kt)("inlineCode",{parentName:"p"},"crawlingContext")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"requestAsBrowserOptions"),", which are passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestAsBrowser()")," function the\ncrawler calls to navigate. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"preNavigationHooks: [\n    async (crawlingContext, requestAsBrowserOptions) => {\n        requestAsBrowserOptions.forceUrlEncoding = true;\n    }\n]\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"postnavigationhooks"},(0,a.kt)("inlineCode",{parentName:"h3"},"postNavigationHooks")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/hook",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Array<Hook>"))),(0,a.kt)("p",null,"Async functions that are sequentially evaluated after the navigation. Good for checking if the navigation was successful. The function accepts\n",(0,a.kt)("inlineCode",{parentName:"p"},"crawlingContext")," as the only parameter. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"postNavigationHooks: [\n    async (crawlingContext) => {\n        // ...\n    };\n]\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"additionalmimetypes"},(0,a.kt)("inlineCode",{parentName:"h3"},"additionalMimeTypes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,a.kt)("p",null,"An array of ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types",target:"_blank"},"MIME types")," you want the crawler to load and process. By default, only ",(0,a.kt)("inlineCode",{parentName:"p"},"text/html")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"application/xhtml+xml")," MIME types are\nsupported."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"suggestresponseencoding"},(0,a.kt)("inlineCode",{parentName:"h3"},"suggestResponseEncoding")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," will extract correct encoding from the HTTP response headers. Sadly, there are some websites which use invalid headers.\nThose are encoded using the UTF-8 encoding. If those sites actually use a different encoding, the response will be corrupted. You can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"suggestResponseEncoding")," to fall back to a certain encoding, if you know that your target website uses it. To force a certain encoding, disregarding\nthe response headers, use ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#forceresponseencoding",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.forceResponseEncoding"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Will fall back to windows-1250 encoding if none found\nsuggestResponseEncoding: 'windows-1250'\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"forceresponseencoding"},(0,a.kt)("inlineCode",{parentName:"h3"},"forceResponseEncoding")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," will extract correct encoding from the HTTP response headers. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"forceResponseEncoding")," to force a certain encoding,\ndisregarding the response headers. To only provide a default for missing encodings, use\n",(0,a.kt)("a",{parentName:"p",href:"../typedefs/cheerio-crawler-options#suggestresponseencoding",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"CheerioCrawlerOptions.suggestResponseEncoding"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// Will force windows-1250 encoding even if headers say otherwise\nforceResponseEncoding: 'windows-1250'\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxrequestretries"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxRequestRetries")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 3")),(0,a.kt)("p",null,"Indicates how many times the request is retried if either ",(0,a.kt)("inlineCode",{parentName:"p"},"requestFunction")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," fails."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxrequestspercrawl"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxRequestsPerCrawl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Maximum number of pages that the crawler will open. The crawl will stop when this limit is reached. Always set this value in order to prevent infinite\nloops in misconfigured crawlers. Note that in cases of parallel crawling, the actual number of pages visited might be slightly higher than this value."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"autoscaledpooloptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"autoscaledPoolOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))),(0,a.kt)("p",null,"Custom options passed to the underlying ",(0,a.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," constructor. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"runTaskFunction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"isTaskReadyFunction"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"isFinishedFunction")," options are provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," and cannot be overridden. Reasonable ",(0,a.kt)("a",{parentName:"p",href:"../api/snapshotter",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshotter"))," and\n",(0,a.kt)("a",{parentName:"p",href:"../api/system-status",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SystemStatus"))," defaults are provided to account for the fact that ",(0,a.kt)("inlineCode",{parentName:"p"},"cheerio")," parses HTML synchronously and therefore blocks the\nevent loop."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"minconcurrency"},(0,a.kt)("inlineCode",{parentName:"h3"},"minConcurrency")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 1")),(0,a.kt)("p",null,"Sets the minimum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,a.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your crawler will run extremely slow or crash. If\nyou're not sure, just keep the default value and the concurrency will scale up automatically."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxconcurrency"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxConcurrency")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 1000")),(0,a.kt)("p",null,"Sets the maximum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,a.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usesessionpool"},(0,a.kt)("inlineCode",{parentName:"h3"},"useSessionPool")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = true")),(0,a.kt)("p",null,"If set to true Crawler will automatically use Session Pool. It will automatically retire sessions on 403, 401 and 429 status codes. It also marks\nSession as bad after a request timeout."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sessionpooloptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionPoolOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions"))),(0,a.kt)("p",null,"Custom options passed to the underlying ",(0,a.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SessionPool"))," constructor."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"persistcookiespersession"},(0,a.kt)("inlineCode",{parentName:"h3"},"persistCookiesPerSession")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Automatically saves cookies to Session. Works only if Session Pool is used."),(0,a.kt)("p",null,'It parses cookie from response "set-cookie" header saves or updates cookies for session and once the session is used for next request. It passes the\n"Cookie" header to the request with the session cookies.'),(0,a.kt)("hr",null))}k.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,k=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);