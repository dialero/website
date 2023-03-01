"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5241],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>y});var n=r(3117),o=r(7294),a=r(3905),c=r(7536),l=r(1119),i=r(8723),u=r(9025);function s(){const{control:e,handleSubmit:t,formState:{errors:r}}=(0,c.cI)(),a=t((e=>{console.log(e);const t=new FormData;for(const r in e)t.append(r,e[r]);fetch("https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8",{method:"post",body:t})}));return o.createElement(o.Fragment,null,o.createElement("form",{onSubmit:a},o.createElement("input",{type:"hidden",name:"captcha_settings",value:'{"keyname":"dialero_site","fallback":"true","orgId":"00D0Y000001iXjC","ts":""}'}),o.createElement("input",{type:"hidden",name:"orgid",value:"00D0Y000001iXjC"}),o.createElement("input",{type:"hidden",name:"retURL",value:"http://help.dialero.com/dialero_contact_support.html?sent=true"}),o.createElement("h3",null,"Please fill in your contact information and describe your issue"),o.createElement(c.Qr,{name:"name",control:e,rules:{required:!0},render:e=>{let{field:t}=e;return o.createElement(l.ZP,(0,n.Z)({},t,{placeholder:"Name",status:r&&r.name?"error":null}))}}),o.createElement(i.Z,{y:.5}),o.createElement(c.Qr,{name:"email",control:e,rules:{required:!0},render:e=>{let{field:t}=e;return o.createElement(l.ZP,(0,n.Z)({},t,{type:"email",placeholder:"Email",status:r&&r.email?"error":null}))}}),o.createElement(i.Z,{y:.5}),o.createElement(c.Qr,{name:"subject",control:e,rules:{required:!0},render:e=>{let{field:t}=e;return o.createElement(l.ZP,(0,n.Z)({},t,{placeholder:"Subject",status:r&&r.subject?"error":null}))}}),o.createElement(i.Z,{y:.5}),o.createElement(c.Qr,{name:"message",control:e,render:e=>{let{field:t}=e;return o.createElement(u.Z,(0,n.Z)({},t,{maxLength:500,rows:7,placeholder:"Describe your issue"}))}}),o.createElement(i.Z,{y:.5}),o.createElement("div",{className:"g-recaptcha","data-sitekey":"6Ld7XDUUAAAAABxymJikCkzen8dDbHrFBtGrIdCk"}),o.createElement("button",{type:"submit",className:"button button--primary"},"Submit")))}const p={},m="Contact Support",d={unversionedId:"contact",id:"contact",title:"Contact Support",description:"",source:"@site/docs/contact.mdx",sourceDirName:".",slug:"/contact",permalink:"/docs/contact",draft:!1,tags:[],version:"current",frontMatter:{}},f={},y=[],b={toc:y};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contact-support"},"Contact Support"),(0,a.kt)(s,{mdxType:"ContactSupportForm"}))}h.isMDXComponent=!0}}]);