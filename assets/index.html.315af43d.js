import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as d,a as e,b as o,d as a,w as n,f as s,r as i}from"./app.4763b10d.js";const h={},p=s('<h2 id="为什么创造alova" tabindex="-1"><a class="header-anchor" href="#为什么创造alova" aria-hidden="true">#</a> 为什么创造alova</h2><p>数据请求一直是应用程序必不可少的重要部分，只是自从XMLHttpRequest诞生以来，<code>$.ajax</code>、<code>axios</code>、<code>react-query</code>，以及<code>fetch api</code>等等绝大部分请求工具都以面向开发者而设计，请求的编码形式从回调函数到Promise，到async/await，再到usehook，而少有针对用户体验而设计。</p><p>在用户体验方面，基本以业务开发者根据数据交互场景自行定制开发，数据交互的用户体验设计也从最初的无状态（卡死），到等待状态展示（loading）、骨架屏展示，以及旧数据占位展示不断发展，以及响应数据本地缓存等场景，还有没有更广阔的请求场景呢，我们觉得是有的。</p>',3),u=e("code",null,"react-query",-1),g=e("code",null,"axios",-1),_=e("code",null,"superagent",-1),b=e("code",null,"fetch-api",-1),m=e("code",null,"react-query",-1),v=e("code",null,"axios",-1),f=e("p",null,[o("它目前支持"),e("code",null,"vue"),o("、"),e("code",null,"react"),o("、"),e("code",null,"svelte"),o("，更多MVVM框架支持敬请期待...")],-1),k=e("h2",{id:"特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#特性","aria-hidden":"true"},"#"),o(" 特性")],-1),y={href:"https://www.npmjs.com/package/alova",target:"_blank",rel:"noopener noreferrer"},z=e("img",{src:"https://img.shields.io/npm/v/alova",alt:"npm",loading:"lazy"},null,-1),x={href:"https://github.com/JOU-amjs/alova/actions/workflows/main.yml",target:"_blank",rel:"noopener noreferrer"},w=e("img",{src:"https://github.com/JOU-amjs/alova/actions/workflows/main.yml/badge.svg?branch=main",alt:"build",loading:"lazy"},null,-1),q={href:"https://coveralls.io/github/JOU-amjs/alova?branch=main",target:"_blank",rel:"noopener noreferrer"},R=e("img",{src:"https://coveralls.io/repos/github/JOU-amjs/alova/badge.svg?branch=main",alt:"coverage status",loading:"lazy"},null,-1),M={href:"https://bundlephobia.com/package/alova",target:"_blank",rel:"noopener noreferrer"},V=e("img",{src:"https://badgen.net/bundlephobia/minzip/alova",alt:"minzipped size",loading:"lazy"},null,-1),j={href:"https://bundlephobia.com/package/alova",target:"_blank",rel:"noopener noreferrer"},L=e("img",{src:"https://badgen.net/bundlephobia/dependency-count/alova",alt:"dependency",loading:"lazy"},null,-1),S={href:"https://bundlephobia.com/package/alova",target:"_blank",rel:"noopener noreferrer"},N=e("img",{src:"https://badgen.net/bundlephobia/tree-shaking/alova",alt:"tree shaking",loading:"lazy"},null,-1),J=e("img",{src:"https://badgen.net/badge/icon/typescript?icon=typescript&label",alt:"typescript",loading:"lazy"},null,-1),O=e("img",{src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license",loading:"lazy"},null,-1),T=s('<ol><li><strong>[多框架支持]</strong> alova通过states hook的设计将框架依赖分离，一套代码同时支持React/React Native/Vue/Svelte，或更多...</li><li><strong>[实时自动管理状态]</strong> 您的一切请求数据和状态都将由alova管理，您只需直接使用即可</li><li><strong>[简单且熟悉]</strong> 与axios相似的api设计，让您上手更简单熟悉</li><li><strong>[轻量级]</strong> 压缩版只有4kb，只有axios的40%</li><li><strong>[简化请求逻辑]</strong> 声明式请求实现，无需您编写请求数据和状态，以及特定场景下的请求代码</li><li><strong>[与任意请求库协作]</strong> 不管您喜欢使用axios、superagent，还是浏览器的fetch-api，alova都可以不失特性地完美兼容</li><li><strong>[多模式缓存服务端数据]</strong> 提供内存模式、持久化模式等多种服务端数据缓存模式，提升用户体验，同时降低服务端压力</li><li><strong>[更安全的乐观更新]</strong> alova实现了后台轮询机制，即使重新进入仍有效，直到请求成功，并配合独有的延迟数据更新机制，保证了乐观更新的安全性</li><li><strong>[数据预拉取]</strong> 在任何情况下自定义提前拉取接口数据，这意味着用户可以更快看到信息，无需等待</li><li><strong>[Typescript支持]</strong> 如果您喜欢使用typescript，alova的一切都将是类型化的</li><li><strong>[离线提交]</strong> 独有的请求缓存，即使在离线下也让请求具有可用性，而不打断正在使用的用户</li><li><strong>[TreeShaking支持]</strong> alova未使用到的api将不会打包进生产包，这意味着alova的生产体积往往小于4kb</li></ol><h2 id="为什么选择alova" tabindex="-1"><a class="header-anchor" href="#为什么选择alova" aria-hidden="true">#</a> 为什么选择alova</h2><ol><li>自动化缓存key管理</li><li>不论你使用<code>axios</code>还是<code>fetch</code>，还是<code>XMLHttpRequest</code>，alova的全局请求钩子和响应钩子等特性依然可用，而<code>react-query</code>、<code>swr</code>等必须依赖axios才能方便实现</li><li>静默提交和延迟数据更新机制，实现更安全的乐观更新</li><li>离线提交</li><li>丰富的扩展，包括mock数据、更丰富的usehook、taro适配器、uniapp适配器</li><li>轻量级，只有<code>react-query</code>体积的30%，<code>axios</code>的40%</li></ol><h2 id="各类库的体积对比" tabindex="-1"><a class="header-anchor" href="#各类库的体积对比" aria-hidden="true">#</a> 各类库的体积对比</h2>',4),U=e("thead",null,[e("tr",null,[e("th",null,"alova"),e("th",null,"react-query"),e("th",null,"vue-request"),e("th",null,"vue"),e("th",null,"react")])],-1),B={href:"https://bundlephobia.com/package/alova",target:"_blank",rel:"noopener noreferrer"},E=e("img",{src:"https://badgen.net/bundlephobia/minzip/alova",alt:"minzipped size",loading:"lazy"},null,-1),I={href:"https://bundlephobia.com/package/react-query",target:"_blank",rel:"noopener noreferrer"},C=e("img",{src:"https://badgen.net/bundlephobia/minzip/react-query",alt:"minzipped size",loading:"lazy"},null,-1),H={href:"https://bundlephobia.com/package/vue-request",target:"_blank",rel:"noopener noreferrer"},X=e("img",{src:"https://badgen.net/bundlephobia/minzip/vue-request",alt:"minzipped size",loading:"lazy"},null,-1),P={href:"https://bundlephobia.com/package/vue",target:"_blank",rel:"noopener noreferrer"},$=e("img",{src:"https://badgen.net/bundlephobia/minzip/vue",alt:"minzipped size",loading:"lazy"},null,-1),A={href:"https://bundlephobia.com/package/react-dom",target:"_blank",rel:"noopener noreferrer"},D=e("img",{src:"https://badgen.net/bundlephobia/minzip/react-dom",alt:"minzipped size",loading:"lazy"},null,-1);function F(G,K){const l=i("RouterLink"),t=i("ExternalLinkIcon");return c(),d("div",null,[p,e("p",null,[o("在这个基础上，我们将请求场景进行抽象提出了 "),a(l,{to:"/zh/overview/RSM.html"},{default:n(()=>[o("请求场景管理的概念（RSM）")]),_:1}),o("，而alova就说一个RSM实现库，它将承载着我们对请求场景的探索之路。我们对alova的预期是一个兼具开发体验和用户体验的请求工具，它拥有很灵活的扩展能力来实现更多的请求场景，并且它除了具备"),u,o("的能力外，还具备更安全的无感数据交互能力，它让用户在一定程度上无需等待数据交互，这得益于alova独特的数据预拉取、静默提交、延迟数据更新特性，无感数据交互能力也会是我们接下来继续探索的方向。")]),e("p",null,[o("除此以外，alova还能与"),g,o("、"),_,o("，还是浏览器的"),b,o("等任意请求库/函数完美兼容 "),a(l,{to:"/zh/overview/relationship-with-http-lib.html"},{default:n(()=>[o("看看alova与请求库的关系")]),_:1}),o("，同时还具备离线提交能力，以及更轻量的体积，是"),m,o("体积的30%，"),v,o("的40%。")]),f,k,e("p",null,[e("a",y,[z,a(t)]),e("a",x,[w,a(t)]),e("a",q,[R,a(t)]),e("a",M,[V,a(t)]),e("a",j,[L,a(t)]),e("a",S,[N,a(t)]),J,O]),T,e("table",null,[U,e("tbody",null,[e("tr",null,[e("td",null,[e("a",B,[E,a(t)])]),e("td",null,[e("a",I,[C,a(t)])]),e("td",null,[e("a",H,[X,a(t)])]),e("td",null,[e("a",P,[$,a(t)])]),e("td",null,[e("a",A,[D,a(t)])])])])])])}const Y=r(h,[["render",F],["__file","index.html.vue"]]);export{Y as default};
