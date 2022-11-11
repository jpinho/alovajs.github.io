import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.4763b10d.js";const t={},p=e(`<p>缓存模式可以更好地多次利用服务端数据，而不需要每次请求时都发送请求获取数据。<code>alova</code>分别提供了3种缓存模式来满足不同的缓存场景，分别为内存模式、缓存占位模式、恢复模式。缓存模式可在全局或请求级等不同粒度下设置。全局设置时，所有由相同alova实例创建的<code>Method</code>实例都会继承该设置。</p><h2 id="内存模式-默认" tabindex="-1"><a class="header-anchor" href="#内存模式-默认" aria-hidden="true">#</a> 内存模式（默认）</h2><p>内存模式将缓存放在内存中，这意味着刷新页面缓存即失效，是最常用的缓存模式。</p><p>当你在写 todo 详情页的时候，你可能会想到用户会频繁在 todo 列表中点击查看详情，如果用户重复查看某条详情时不再重复请求接口，并且能立即返回数据，提升了响应速度的同事也减小了服务器压力。此时我们就可以为某个 todo 详情<code>Method</code>实例设置响应数据缓存。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>alovaInstance<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">&#39;/todo/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// 设置缓存模式为内存模式</span>
		<span class="token literal-property property">mode</span><span class="token operator">:</span> cacheMode<span class="token punctuation">.</span><span class="token constant">MEMORY</span><span class="token punctuation">,</span>

		<span class="token comment">// 单位为毫秒</span>
		<span class="token comment">// 当设置为\`Infinity\`，表示数据永不过期，设置为0或负数时表示不缓存</span>
		<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内存模式为默认模式，你可以这样简写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>alovaInstance<span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">(</span><span class="token string">&#39;/todo/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>GET请求将默认设置 300000ms(5分钟)的内存缓存时间，开发者也可以自定义设置。</p></blockquote><blockquote><p>如果你需要全局统一设置缓存模式，见本节底部的 <a href="#%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE%E7%BC%93%E5%AD%98%E6%A8%A1%E5%BC%8F">全局设置缓存模式</a></p></blockquote><h2 id="缓存占位模式" tabindex="-1"><a class="header-anchor" href="#缓存占位模式" aria-hidden="true">#</a> 缓存占位模式</h2><p>当你不希望应用每次进入时都显示Loading，而希望使用旧数据替代Loading时，你可以使用缓存占位模式，它的体验比Loading更好。</p><p>缓存占位模式下，<code>data</code>将立即被赋值为上次缓存的旧数据，你可以判断如果有旧数据则使用它替代Loading展示，同时它将发送请求获取最新数据并更新缓存，这样就达到了既快速展示实际数据，又获取了最新的数据。</p><p>在<code>Method</code>实例上设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> todoListGetter <span class="token operator">=</span> alovaInstance<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;/todo/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置缓存模式为持久化占位模式</span>
		<span class="token literal-property property">mode</span><span class="token operator">:</span> cacheMode<span class="token punctuation">.</span><span class="token constant">STORAGE_PLACEHOLDER</span><span class="token punctuation">,</span>
    <span class="token comment">// 缓存时间</span>
		<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果你需要全局统一设置缓存模式，见本节底部的 <a href="#%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE%E7%BC%93%E5%AD%98%E6%A8%A1%E5%BC%8F">全局设置缓存模式</a></p></blockquote><h2 id="恢复模式" tabindex="-1"><a class="header-anchor" href="#恢复模式" aria-hidden="true">#</a> 恢复模式</h2><p>此模式下，服务端缓存数据将持久化，如果过期时间未到即使刷新页面缓存也不会失效，它一般用于一些需要服务端管理，但基本不变的数据，如每年的节假日具体日期有所不同，但不会再变动，这种场景下我们只需设置缓存过期时间为今年的最后一刻即可。</p><p>在<code>Method</code>实例上设置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> todoListGetter <span class="token operator">=</span> alovaInstance<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;/todo/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置缓存模式为持久化模式</span>
		<span class="token literal-property property">mode</span><span class="token operator">:</span> cacheMode<span class="token punctuation">.</span><span class="token constant">STORAGE_RESTORE</span><span class="token punctuation">,</span>
    <span class="token comment">// 缓存时间</span>
		<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果你需要全局统一设置缓存模式，见本节底部的 <a href="#%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE%E7%BC%93%E5%AD%98%E6%A8%A1%E5%BC%8F">全局设置缓存模式</a></p></blockquote><h3 id="恢复模式下数据有变怎么办" tabindex="-1"><a class="header-anchor" href="#恢复模式下数据有变怎么办" aria-hidden="true">#</a> 恢复模式下数据有变怎么办？</h3><p>当设置了恢复模式的<code>Method</code>实例，可能由于接口数据变动，或前端处理响应数据的逻辑变动，此时需要在发布应用后让用户重新缓存变动后的数据，此时你可以通过<code>tag</code>属性设置缓存标签，每一份持久化数据都包含一个<code>tag</code>标识，当<code>tag</code>改变后原有的持久化数据将会失效，并重新获取新的数据，并用新的<code>tag</code>进行标识。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> todoListGetter <span class="token operator">=</span> alovaInstance<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&#39;/todo/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// ...</span>
	<span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">mode</span><span class="token operator">:</span> cacheMode<span class="token punctuation">.</span><span class="token constant">STORAGE_RESTORE</span><span class="token punctuation">,</span>
		<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>

		<span class="token comment">// 新增或修改tag参数，已缓存的数据将失效</span>
		<span class="token comment">// 建议使用版本号的形式管理</span>
		<span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局设置缓存模式" tabindex="-1"><a class="header-anchor" href="#全局设置缓存模式" aria-hidden="true">#</a> 全局设置缓存模式</h2><div class="custom-container info"><p class="custom-container-title">提示</p><p>v1.3.0+</p></div><p>以上设置均是在<code>Method</code>上单独设置缓存模式的，如果你需要全局设置缓存模式，可以按如下方式做：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> alovaInstance <span class="token operator">=</span> <span class="token function">createAlova</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 统一设置POST的缓存模式</span>
    <span class="token constant">POST</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> cacheMode<span class="token punctuation">.</span><span class="token constant">STORAGE_PLACEHOLDER</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 统一设置HEAD请求的缓存模式</span>
    <span class="token constant">HEAD</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此后，通过<code>alovaInstance</code>实例创建的<code>Method</code>实例，都将默认使用这份缓存设置，同时也可以在<code>Method</code>实例中覆盖它。</p><blockquote><p>注意：当全局设置了缓存模式后，原有的5分钟GET缓存模式将被覆盖。</p></blockquote><h2 id="过期时间类型" tabindex="-1"><a class="header-anchor" href="#过期时间类型" aria-hidden="true">#</a> 过期时间类型</h2><p>过期时间有两种类型可供选择，分别为 <strong>相对时间</strong> 和 <strong>绝对时间</strong></p><h3 id="相对时间" tabindex="-1"><a class="header-anchor" href="#相对时间" aria-hidden="true">#</a> 相对时间</h3><p>即在保存缓存数据时开始，过期的时长，以 <strong>毫秒</strong> 为单位，以上示例均为此类型。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绝对时间" tabindex="-1"><a class="header-anchor" href="#绝对时间" aria-hidden="true">#</a> 绝对时间</h3><p>以一个具体时间点为过期时间，缓存将在设定的时间点过期</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2030-01-01&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">localCache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">expire</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&#39;2030-01-01&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存key自动维护" tabindex="-1"><a class="header-anchor" href="#缓存key自动维护" aria-hidden="true">#</a> 缓存key自动维护</h2><p>响应数据缓存的key是由 method 实例的请求方法(method)、请求地址(url)、请求头参数(headers)、url 参数(params)、请求体参数(requestBody)组合作为唯一标识，任意一个位置不同都将被当做不同的 key。</p>`,41),o=[p];function i(l,c){return n(),a("div",null,o)}const u=s(t,[["render",i],["__file","response-cache.html.vue"]]);export{u as default};
