"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Troubleshooting",o={unversionedId:"phone/getting-started/troubleshooting",id:"phone/getting-started/troubleshooting",title:"Troubleshooting",description:"Calls not connecting or disconnecting instantly",source:"@site/docs/phone/getting-started/6-troubleshooting.md",sourceDirName:"phone/getting-started",slug:"/phone/getting-started/troubleshooting",permalink:"/website/docs/phone/getting-started/troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"phone",previous:{title:"Configure Dialero App",permalink:"/website/docs/phone/getting-started/configure-dialero-app"},next:{title:"User Guide",permalink:"/website/docs/phone/user-guide"}},s={},p=[{value:"Calls not connecting or disconnecting instantly",id:"calls-not-connecting-or-disconnecting-instantly",level:2},{value:"Page dialero does not exist error",id:"page-dialero-does-not-exist-error",level:2},{value:"Unauthorized endpoint error",id:"unauthorized-endpoint-error",level:2},{value:"I&#39;ve setup everything but cannot see Dialero component or Dialero App",id:"ive-setup-everything-but-cannot-see-dialero-component-or-dialero-app",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"calls-not-connecting-or-disconnecting-instantly"},"Calls not connecting or disconnecting instantly"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Validate Twiml App",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Setup >> User Interface >> Sites and Domains >> Sites")),(0,r.kt)("li",{parentName:"ul"},"Click on the label of ",(0,r.kt)("strong",{parentName:"li"},"dialero")," site"),(0,r.kt)("li",{parentName:"ul"},"At the ",(0,r.kt)("strong",{parentName:"li"},"Custom URLs")," section look for the secure ",(0,r.kt)("strong",{parentName:"li"},"Domain Name"),' {% include inline_image.html file="site-base-url.png" %}'),(0,r.kt)("li",{parentName:"ul"},"Log into Twilio account and navigate to ",(0,r.kt)("strong",{parentName:"li"},"Phone Numbers >> Twiml Apps")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Dialero App")," and verify that the Site Domain Name matches the URLs ",(0,r.kt)("img",{src:n(595).Z,width:"700",height:"321"})),(0,r.kt)("li",{parentName:"ul"},"If the URLs do not match, update them with the following format:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Request Url")," should be: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://DOMAINNAME/dialero__dc")," where DOMAINNAME is the secure Site Domain Name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status Url")," should be: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://DOMAINNAME/dialero__ds")," where DOMAINNAME is the secure Site Domain Name")))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"configure-site#configure-site-pages"},"Validate enabled Site Visualforce pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"configure-site#configure-permissions-and-package-license-for-site-user"},"Validate Site User Permissions and License")),(0,r.kt)("li",{parentName:"ul"},"If assigning Permission Set fails, grant all the permissions manually:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Setup >> User Interface >> Sites and Domains >> Sites")),(0,r.kt)("li",{parentName:"ul"},"Click on the label of ",(0,r.kt)("strong",{parentName:"li"},"dialero")," site"),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Public Access Settings")," button"),(0,r.kt)("li",{parentName:"ul"},"Edit the profile, grant the following permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For Objects:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact and Lead: ",(0,r.kt)("strong",{parentName:"li"},"Read")),(0,r.kt)("li",{parentName:"ul"},"Call: ",(0,r.kt)("strong",{parentName:"li"},"Full Permissions")))),(0,r.kt)("li",{parentName:"ul"},"For Field-Level Security:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact and Lead: ",(0,r.kt)("strong",{parentName:"li"},"Read Access")," on all phone and name related fields (Name, Full Name, Phone, Mobile, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Call: ",(0,r.kt)("strong",{parentName:"li"},"Full Access")," on all fields")))))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"page-dialero-does-not-exist-error"},"Page dialero does not exist error"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to Call Centers section in Setup"),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit")," next to ",(0,r.kt)("strong",{parentName:"li"},"dialero")," entry"),(0,r.kt)("li",{parentName:"ul"},"Verify that the ",(0,r.kt)("strong",{parentName:"li"},"Adapter URL")," value is one of the following options:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/apex/dialero__dialero")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/apex/dialero")))),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"unauthorized-endpoint-error"},"Unauthorized endpoint error"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"configure-site#verify-remote-site-activation"},"Activate Remote Site"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"ive-setup-everything-but-cannot-see-dialero-component-or-dialero-app"},"I've setup everything but cannot see Dialero component or Dialero App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to Dialero Setup page in Setup >> Installed packages >> Configure"),(0,r.kt)("li",{parentName:"ul"},"Navigate to Manage Users Tab"),(0,r.kt)("li",{parentName:"ul"},"Verify that the users that don't see the component or the app are enabled and have licences")))}m.isMDXComponent=!0},595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/site-base-url-e6cdeea41f710ffbc1159eed9aa837d5.png"}}]);