import{o as e,c as r,d as o}from"./app.c379e925.js";const t='{"title":"Using Geometries","description":"","frontmatter":{},"relativePath":"guide/meshes/geometries.md","lastUpdated":1614535114589}',s={},a=o('<h1 id="using-geometries"><a class="header-anchor" href="#using-geometries" aria-hidden="true">#</a> Using Geometries</h1><p>Instead using predefined meshes, you can create mesh with geometry like this :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mesh</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BoxGeometry</span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicMaterial</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Mesh</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>TroisJS includes all buffer geometries from ThreeJS :</p><ul><li><code>BoxGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/BoxGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/BoxBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>CircleGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/CircleGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/CircleBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>ConeGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/ConeGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/ConeBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>CylinderGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/CylinderGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/CylinderBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>DodecahedronGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/DodecahedronGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/DodecahedronBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>IcosahedronGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/IcosahedronGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/IcosahedronBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>LatheGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/LatheGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/LatheBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>OctahedronGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/OctahedronGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/OctahedronBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>PlaneGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/PlaneGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/PlaneBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>PolyhedronGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/PolyhedronGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/PolyhedronBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>RingGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/RingGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/RingBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>SphereGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/SphereGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/SphereBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>TetrahedronGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/TetrahedronGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/TetrahedronBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>TorusGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/TorusGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/TorusBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>TorusKnotGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/TorusKnotGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/TorusKnotBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li><li><code>TubeGeometry</code> (<a href="https://github.com/troisjs/trois/blob/master/src/geometries/TubeGeometry.js" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://threejs.org/docs/#api/en/geometries/TubeBufferGeometry" target="_blank" rel="noopener noreferrer">threejs doc</a>)</li></ul>',5);s.render=function(o,t,s,n,i,c){return e(),r("div",null,[a])};export default s;export{t as __pageData};
