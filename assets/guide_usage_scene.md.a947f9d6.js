import{o as e,c as s,d as n}from"./app.ebbcc3c2.js";const a='{"title":"Scene","description":"","frontmatter":{},"headers":[{"level":3,"title":"Access ThreeJS scene","slug":"access-threejs-scene"}],"relativePath":"guide/usage/scene.md","lastUpdated":1621090895485}',t={},c=n('<h1 id="scene"><a class="header-anchor" href="#scene" aria-hidden="true">#</a> Scene</h1><p>See <a href="https://github.com/troisjs/trois/blob/master/src/core/Scene.ts" target="_blank" rel="noopener noreferrer">Scene.ts</a> and <a href="https://threejs.org/docs/#api/en/scenes/Scene" target="_blank" rel="noopener noreferrer">THREE.Scene</a>.</p><table><tbody><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr><tr><td><code>background</code></td><td>Background color.</td><td>String, Number</td><td></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you need a transparent renderer, you should use <code>alpha</code> on the <a href="./renderer.html">renderer</a>.</p></div><h3 id="access-threejs-scene"><a class="header-anchor" href="#access-threejs-scene" aria-hidden="true">#</a> Access ThreeJS scene</h3><p>You should set a <em>ref</em> on the scene :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scene<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>You can then access ThreeJS scene in your component script :</p><div class="language-js"><pre><code><span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>scene<span class="token punctuation">;</span>\n</code></pre></div>',9);t.render=function(n,a,t,o,r,p){return e(),s("div",null,[c])};export default t;export{a as __pageData};