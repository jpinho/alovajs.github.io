"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"request method instance",sidebar_position:20},s=void 0,i={unversionedId:"get-started/request-method-instance",id:"get-started/request-method-instance",title:"request method instance",description:"In alova, each request corresponds to a method instance representation, which describes the url, request header, request parameters of a request, and request behavior parameters such as response data processing, cache processing data, etc., but it does not actually send a request .",source:"@site/docs/03-get-started/02-request-method-instance.md",sourceDirName:"03-get-started",slug:"/get-started/request-method-instance",permalink:"/get-started/request-method-instance",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-get-started/02-request-method-instance.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"request method instance",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"start",permalink:"/get-started/start"},next:{title:"Cache Mode",permalink:"/get-started/response-cache"}},c={},l=[{value:"create instance",id:"create-instance",level:2},{value:"Set a finer grained timeout",id:"set-a-finer-grained-timeout",level:2},{value:"request method type",id:"request-method-type",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"alova"),", each request corresponds to a method instance representation, which describes the url, request header, request parameters of a request, and request behavior parameters such as response data processing, cache processing data, etc., but it does not actually send a request ."),(0,a.kt)("h2",{id:"create-instance"},"create instance"),(0,a.kt)("p",null,"The creation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Method")," instance is similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," request sending function. Let's first create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Method")," instance that gets the todo list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a Get instance to describe the information of a Get request\nconst todoListGetter = alovaInstance.Get('/todo/list', {\n  // request header\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  },\n  // The params parameter will be spliced \u200b\u200bafter the url in the form of ?\n  params: {\n    userId: 1\n  }\n});\n")),(0,a.kt)("p",null,"Then create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Method")," instance that submits the todo, POST request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// create a Post instance\nconst createTodoPoster = alovaInstance.Post(\n  '/todo/create',\n  // The second parameter is the http body data\n  {\n    title: 'test todo',\n    time: '12:00'\n  },\n  // The third parameter is the request configuration related information\n  {\n    headers: {\n      'Content-Type': 'application/json;charset=UTF-8'\n    },\n    params: {\n      // ...\n    }\n  }\n);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"Method")," instance only stores the information required for the request, it will not send the request, but needs to send the request through the ",(0,a.kt)("inlineCode",{parentName:"p"},"use hook")," (details later), which is different from ",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),".")),(0,a.kt)("h2",{id:"set-a-finer-grained-timeout"},"Set a finer grained timeout"),(0,a.kt)("p",null,"The global request timeout applies to all ",(0,a.kt)("inlineCode",{parentName:"p"},"Method")," instances, but in many cases we need to set different timeouts according to special requests. At this time, we can set the request-level timeout, which will override the global ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// request timeout at request level\nconst todoListGetter = alovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  timeout: 10000\n  // highlight-end\n});\n")),(0,a.kt)("h2",{id:"request-method-type"},"request method type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alova")," provides abstract instances of seven request methods including GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH. details)."))}u.isMDXComponent=!0}}]);