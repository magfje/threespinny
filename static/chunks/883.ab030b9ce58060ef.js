"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883,499],{6499:function(t,e,r){r.r(e),r.d(e,{Blob:function(){return f},Boat:function(){return j},Dog:function(){return b},Duck:function(){return d},Logo:function(){return p}});var o=r(3827),n=r(4579),i=r(9931),a=r(2997),s=r(4435),u=r(7315),l=r(3696),c=r(7907),h=r(4090),m=r(6376);let f=t=>{let{route:e="/",...r}=t,a=(0,c.useRouter)(),[s,u]=(0,h.useState)(!1);return(0,n.j)(s),(0,o.jsxs)("mesh",{onClick:()=>a.push(e),onPointerOver:()=>u(!0),onPointerOut:()=>u(!1),...r,children:[(0,o.jsx)("sphereGeometry",{args:[1,64,64]}),(0,o.jsx)(i.Y,{roughness:.5,color:s?"hotpink":"#1fb2f5"})]})},p=t=>{let{route:e="/blob",...r}=t,i=(0,h.useRef)(null),s=(0,c.useRouter)(),[l,f]=(0,h.useState)(!1),p=(0,h.useMemo)(()=>new m.EllipseCurve(0,0,3,1.15,0,2*Math.PI,!1,0).getPoints(100),[]);return(0,n.j)(l),(0,u.C)((t,e)=>{let r=t.clock.getElapsedTime();i.current.rotation.y=Math.PI/8*Math.sin(r),i.current.rotation.x=Math.PI/8*Math.cos(r),i.current.rotation.z-=e/4}),(0,o.jsxs)("group",{ref:i,...r,children:[(0,o.jsx)(a.x,{worldUnits:!0,points:p,color:"#1fb2f5",lineWidth:.15}),(0,o.jsx)(a.x,{worldUnits:!0,points:p,color:"#1fb2f5",lineWidth:.15,rotation:[0,0,1]}),(0,o.jsx)(a.x,{worldUnits:!0,points:p,color:"#1fb2f5",lineWidth:.15,rotation:[0,0,-1]}),(0,o.jsxs)("mesh",{onClick:()=>s.push(e),onPointerOver:()=>f(!0),onPointerOut:()=>f(!1),children:[(0,o.jsx)("sphereGeometry",{args:[.55,64,64]}),(0,o.jsx)("meshPhysicalMaterial",{roughness:.5,color:l?"hotpink":"#1fb2f5"})]})]})};function d(t){let{scene:e}=(0,s.L)("/duck.glb");return(0,u.C)((t,r)=>e.rotation.y+=r),(0,o.jsx)("primitive",{object:e,...t})}function b(t){let{scene:e}=(0,s.L)("/dog.glb");return(0,o.jsx)("primitive",{object:e,...t})}function j(t){let{selectedDash:e,selectedMotor:r,...n}=t,{scene:i}=(0,s.L)("/boattestglb.glb"),a=(0,h.useRef)(),c=(0,h.useRef)();return(0,u.C)(t=>{let e=t.clock.getElapsedTime();a.current.rotation.set(Math.cos(e/4)/18,Math.sin(e/4)/20,-.2-(1+Math.sin(e/1.5))/50),a.current.position.y=(1+Math.sin(e/1.5))/30}),(0,h.useEffect)(()=>{i.traverse(t=>{t.isMesh&&("dash1"===t.name||"dash2"===t.name||"motor1"===t.name||"motor2"===t.name)&&(t.material&&(t.material.transparent=!0,t.material.opacity=0),t.visible=!1)}),i.traverse(t=>{t.isMesh&&t.material&&t.name===r&&(t.visible=!0,l.ZP.to(t.material,{opacity:1,duration:1}))}),i.traverse(t=>{t.isMesh&&t.material&&t.name===e&&(t.visible=!0,l.ZP.to(t.material,{opacity:1,duration:1}))}),i.traverse(t=>{(t.isMesh&&"dash1"===t.name||"dash2"===t.name)&&(c.current=t)})},[i,e,r]),(0,u.C)(()=>{c.current&&c.current.material.opacity<1&&(c.current.rotation.y+=.01)}),(0,h.useEffect)(()=>{let t=i.getObjectByName("dash1"),r=i.getObjectByName("dash2"),o="dash1"===e?t:r,n="dash1"===e?r:t;o&&n&&(l.ZP.to(n.material,{opacity:0,duration:1}),l.ZP.fromTo(o.material,{opacity:0},{opacity:1,duration:1}),l.ZP.to(o.rotation,{y:2*Math.PI,duration:1,onComplete:()=>o.rotation.y=0}))},[e]),(0,o.jsx)("primitive",{ref:a,object:i,...n})}}}]);