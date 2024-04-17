"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[1547],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(3117),o=(r(7294),r(3905));const a={"\x3c!-- slug":"question --\x3e",title:"2024.04.16\uc758 \uad81\uae08\uc99d",authors:["seongkyu"],tags:["question"]},l=void 0,i={permalink:"/Blog/blog/2024/04/16/question",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2024-04-16-question.mdx",source:"@site/blog/2024-04-16-question.mdx",title:"2024.04.16\uc758 \uad81\uae08\uc99d",description:"1. Specification interface in DDD and JPA",date:"2024-04-16T00:00:00.000Z",formattedDate:"April 16, 2024",tags:[{label:"question",permalink:"/Blog/blog/tags/question"}],readingTime:.51,hasTruncateMarker:!1,authors:[{name:"Lim SeongKyu",title:"BE",url:"https://github.com/seongkyu-lim",imageURL:"https://github.com/seongkyu-lim.png",key:"seongkyu"}],frontMatter:{"\x3c!-- slug":"question --\x3e",title:"2024.04.16\uc758 \uad81\uae08\uc99d",authors:["seongkyu"],tags:["question"]},nextItem:{title:"2024.04.16\uc758 \uae68\ub2ec\uc74c",permalink:"/Blog/blog/2024/04/16/"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Specification interface in DDD and JPA"),(0,o.kt)("li",{parentName:"ol"},"JPA \ub3d9\uc801 \uc778\uc2a4\ud134\uc2a4 \uc0dd\uc131.")),(0,o.kt)("hr",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"fcm\uc5d0\uc11c \uc804\uc1a1\ud558\uba74 \ud574\ub2f9 \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ud45c\uc2dc\ub418\ub294 \uac83\uc774\uc9c0 ? \uac00\ub839 \uc704\ud37c\ube14\ub9ad \uc571\uc774 \ucf1c\uc838\uc788\uc73c\uba74 \uc571\uc5d0\uc11c \ubcf4\uc5ec\uc900\ub2e4 ?")),(0,o.kt)("hr",null),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"lock",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"shared lock (for share)"),(0,o.kt)("li",{parentName:"ul"},"exclusive lock (for update)"),(0,o.kt)("li",{parentName:"ul"},"\ube44\uad00\uc801 \ub77d, \ub099\uad00\uc801 \ub77d."),(0,o.kt)("li",{parentName:"ul"},"\ub77d\uc758 \ubc94\uc704, \ub77d \ud574\uc81c \uc2dc\uc810."))),(0,o.kt)("li",{parentName:"ol"},"msa",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ubd84\uc0b0 \ud2b8\ub79c\uc7ad\uc158")))))}s.isMDXComponent=!0}}]);