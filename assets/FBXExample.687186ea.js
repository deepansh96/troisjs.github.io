import{A as e,f as a,al as t,am as r,an as s,i as o,n as i,P as n,j as d,q as c,ao as h,ap as l,aq as m,ar as p}from"./trois.module.83557d8a.js";import{r as f,o as g,c as u,w,b as x}from"./app.cc8ad125.js";const b={components:{AmbientLight:e,Camera:a,DirectionalLight:t,FbxModel:r,HemisphereLight:s,Renderer:o,PhongMaterial:i,Plane:n,Scene:d},data:()=>({target:new c(0,100,0)}),mounted(){this.$refs.scene.scene.fog=new h(10526880,200,1e3);const e=new l(2e3,20,0,0);e.material.opacity=.5,e.material.transparent=!0,this.$refs.scene.add(e)},methods:{onLoad(e){this.mixer=new m(e);this.mixer.clipAction(e.animations[0]).play(),e.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})),this.clock=new p,this.$refs.renderer.onBeforeRender(this.updateMixer)},updateMixer(){this.mixer.update(this.clock.getDelta())}}};b.render=function(e,a,t,r,s,o){const i=f("Camera"),n=f("HemisphereLight"),d=f("DirectionalLight"),c=f("PhongMaterial"),h=f("Plane"),l=f("FbxModel"),m=f("Scene"),p=f("Renderer");return g(),u(p,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0,target:s.target},resize:"",shadow:""},{default:w((()=>[x(i,{position:{x:100,y:200,z:300}}),x(m,{ref:"scene",background:"#a0a0a0"},{default:w((()=>[x(n),x(d,{position:{x:0,y:200,z:100},"cast-shadow":"","shadow-camera":{top:180,bottom:-120,left:-120,right:120}}),x(h,{width:2e3,height:2e3,rotation:{x:-Math.PI/2},"receive-shadow":""},{default:w((()=>[x(c,{color:"#999999",props:{depthWrite:!1}})])),_:1},8,["rotation"]),x(l,{src:"/assets/models/Samba Dancing.fbx",onLoad:o.onLoad},null,8,["onLoad"])])),_:1},512)])),_:1},8,["orbit-ctrl"])};export default b;