"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Dialero SMS Messaging",s={unversionedId:"phone/user-guide/sms",id:"phone/user-guide/sms",title:"Dialero SMS Messaging",description:"Add The 1-on-1 Messaging Component To Record Page",source:"@site/docs/phone/user-guide/5-sms.md",sourceDirName:"phone/user-guide",slug:"/phone/user-guide/sms",permalink:"/website/docs/phone/user-guide/sms",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"phone",previous:{title:"Call Recordings And Voicemail",permalink:"/website/docs/phone/user-guide/call-recordings-and-voicemail"},next:{title:"Release Notes",permalink:"/website/docs/phone/release-notes"}},l={},p=[{value:"Add The 1-on-1 Messaging Component To Record Page",id:"add-the-1-on-1-messaging-component-to-record-page",level:2},{value:"Sending Messages From The 1-on-1 Component",id:"sending-messages-from-the-1-on-1-component",level:2},{value:"Setting Up Automated Messages",id:"setting-up-automated-messages",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dialero-sms-messaging"},"Dialero SMS Messaging"),(0,o.kt)("h2",{id:"add-the-1-on-1-messaging-component-to-record-page"},"Add The 1-on-1 Messaging Component To Record Page"),(0,o.kt)("video",{controls:!0,width:"100%",controlsList:"nodownload"},(0,o.kt)("source",{src:"/video/messaging.mp4",type:"video/mp4"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the component requires deployed ",(0,o.kt)("strong",{parentName:"li"},"My Domain")," feature, please follow ",(0,o.kt)("a",{parentName:"li",href:"https://help.salesforce.com/articleView?id=domain_name_overview.htm"},"this guide")," before proceeding."),(0,o.kt)("li",{parentName:"ul"},"From the record detail page, click on ",(0,o.kt)("strong",{parentName:"li"},"Setup >> Edit Page")),(0,o.kt)("li",{parentName:"ul"},"Scroll down on the left sidebar and find the ",(0,o.kt)("strong",{parentName:"li"},"Dialero Text Messages")," component in the ",(0,o.kt)("strong",{parentName:"li"},"Custom")," section."),(0,o.kt)("li",{parentName:"ul"},"Drag the component to desired area in the page layout."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save")," and follow the process to assign and activate the page layout.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"sending-messages-from-the-1-on-1-component"},"Sending Messages From The 1-on-1 Component"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5698).Z,width:"684",height:"404"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Verify")," that valid phone numbers selected by clicking on the top right configuration button and selecting the proper From and To phone numbers before sending the message."),(0,o.kt)("li",{parentName:"ul"},"Type your message in the bottom text area, counter for the characters in the message will provide feedback for how many characters used in the current message. Standard SMS message is limited to 160 characters, if more characters used, the message will be split into multiple messages."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Send")," when done typing.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-automated-messages"},"Setting Up Automated Messages"),(0,o.kt)("video",{controls:!0,width:"100%",controlsList:"nodownload"},(0,o.kt)("source",{src:"/video/auto-sms.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"Sending Automated SMS text message is achieved from the Process Builder and applicable to any object with phone fields."),(0,o.kt)("p",null,"In this example, Lead object is chosen to demonstrate the setup process."),(0,o.kt)("p",null,"After defining the flow logic with the Process Builder, for process ",(0,o.kt)("strong",{parentName:"p"},"Actions")," choose:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Apex")),(0,o.kt)("li",{parentName:"ul"},"Apex Class: ",(0,o.kt)("strong",{parentName:"li"},"Dialero Send SMS"))),(0,o.kt)("p",null,"Add the following rows for the ",(0,o.kt)("strong",{parentName:"p"},"Apex Variables"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sender Phone Number: The Twilio SMS supported phone number in your account, this is the number the SMS will be sent from.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type: String"),(0,o.kt)("li",{parentName:"ul"},"Value: Phone Number"))),(0,o.kt)("li",{parentName:"ul"},"Recipient Phone Number: The phone number of the recipent that will receive the SMS message.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type: Field Reference"),(0,o.kt)("li",{parentName:"ul"},"Value: Mobile Phone or any phone field that has a SMS supported number."))),(0,o.kt)("li",{parentName:"ul"},"SMS Text Body: This is text that will be the body of the SMS message.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Type: String/Formula"),(0,o.kt)("li",{parentName:"ul"},"Use String to set non-dynamic messages, for dynamic messages use Text Formula. For example, to send a 'Hi {Name}!' message, use the formula: ",(0,o.kt)("inlineCode",{parentName:"li"},"'Hi ' & [Lead].FirstName & '!'"))))))}c.isMDXComponent=!0},5698:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/messaging-f3580b0819734119b4232ca588ab42e0.png"}}]);