import{A as e,f as o,h as r,i as a,j as t,a9 as s,aa as n}from"./trois.module.eafdde0d.js";import{z as i,r as f,o as l,c,w as d,b as m,F as u,l as h}from"./app.b0ad6587.js";const b={components:{AmbientLight:e,Camera:o,PointLight:r,Renderer:a,Scene:t,ToonMaterial:s,Torus:n},data:()=>({n:30,cscale:i.scale(["#dd3e1b","#0b509c"])}),mounted(){this.$refs.renderer.onBeforeRender((()=>{const e=Date.now();let o,r;for(let a=1;a<=this.n;a++)o=this.$refs["mesh"+a].mesh,r=e-500*a,o.rotation.x=15e-5*r,o.rotation.y=2e-4*r,o.rotation.z=17e-5*r}))},methods:{color(e){return this.cscale(e/this.n).css()},onClick(e){this.cscale=i.scale([i.random(),i.random(),i.random()])}}};b.render=function(e,o,r,a,t,s){const n=f("Camera"),i=f("AmbientLight"),b=f("PointLight"),p=f("ToonMaterial"),g=f("Torus"),z=f("Scene"),k=f("Renderer");return l(),c(k,{ref:"renderer",antialias:"",resize:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05},onClick:s.onClick},{default:d((()=>[m(n,{position:{z:15}}),m(z,{background:"#ffffff"},{default:d((()=>[m(i,{color:"#808080"}),m(b,{color:"#ffffff",position:{y:50,z:0}}),m(b,{color:"#ffffff",position:{y:-50,z:0}}),m(b,{color:"#ffffff",position:{y:0,z:0}}),(l(!0),c(u,null,h(t.n,(e=>(l(),c(g,{key:e,ref:`mesh${e}`,radius:.2*e,tube:.1,"radial-segments":8,"tubular-segments":4*(e+2)},{default:d((()=>[m(p,{color:s.color(e)},null,8,["color"])])),_:2},1032,["radius","tube","tubular-segments"])))),128))])),_:1})])),_:1},8,["orbit-ctrl","onClick"])};export default b;