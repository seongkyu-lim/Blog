"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[2739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,f=m["".concat(u,".").concat(g)]||m[g]||s[g]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const a={"\x3c!-- slug":"question --\x3e",title:"2024.04.12\uc758 \uad81\uae08\uc99d",authors:["seongkyu"],tags:["question"]},l=void 0,i={permalink:"/Blog/blog/2024/04/12/question",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2024-04-12-question.mdx",source:"@site/blog/2024-04-12-question.mdx",title:"2024.04.12\uc758 \uad81\uae08\uc99d",description:"1. value-object pattern",date:"2024-04-12T00:00:00.000Z",formattedDate:"April 12, 2024",tags:[{label:"question",permalink:"/Blog/blog/tags/question"}],readingTime:1.105,hasTruncateMarker:!1,authors:[{name:"Lim SeongKyu",title:"BE",url:"https://github.com/seongkyu-lim",imageURL:"https://github.com/seongkyu-lim.png",key:"seongkyu"}],frontMatter:{"\x3c!-- slug":"question --\x3e",title:"2024.04.12\uc758 \uad81\uae08\uc99d",authors:["seongkyu"],tags:["question"]},nextItem:{title:"2024.04.09\uc758 \uae68\ub2ec\uc74c",permalink:"/Blog/blog/2024/04/11/"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"value-object pattern",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"feature. make and return new object when member value is changed."))),(0,o.kt)("li",{parentName:"ol"},"\ubc31\uc5d4\ub4dc \uc5b8\uc5b4\uc640 \ud504\ub808\uc784\uc6cc\ud06c \uc0ac\uc6a9 \ucd94\uc138.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud55c\uad6d\uc5d0\uc11c\ub294 go, kotlin(spring)\uc73c\ub85c \uc2e0\uaddc\ud504\ub85c\uc81d\ud2b8 \uc9c4\ud589\uc744 \ub9ce\uc774 \ud558\ub294 \ucd94\uc138."),(0,o.kt)("li",{parentName:"ul"},"kotlin\uc740 \uacfc\uac70\ubd80\ud130 \ub9ce\uc774 \uc0ac\uc6a9\ub41c java \uae30\ubc18\uc758 spring\uacfc \uc644\ubcbd\ud788 \ud638\ud658\ub418\uae30 \ub54c\ubb38\uc5d0 \uc804\ud658\uc774 \ube44\uad50\uc801 \uc26c\uc6b0\ub098, JVM \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2eb\uc5b4\ud558\ub294 \uc0ac\ub78c\ub3c4 \ub9ce\uc740 \uac83 \uac19\ub2e4.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"kotlin\uc740 \uba40\ud2f0\ud50c\ub7ab\ud3fc\uc5b8\uc5b4\uc774\uae30 \ub54c\ubb38\uc5d0 JVM\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 NATIVE\ub85c \ubc14\ub85c \ucef4\ud30c\uc77c\ub418\ub294 \uac83\uc758 \uc131\ub2a5\uc774 \uc88b\uc544\uc9c0\uba74 \ub610 \ubd84\uc704\uae30\uac00 \ubc14\ub014\uc9c0\ub3c4 ?"),(0,o.kt)("li",{parentName:"ul"},"kotlin\uc774 \uc5b4\ub5a4 \uc6d0\ub9ac\ub85c \uc5ec\ub7ec \uac83\ub4e4\ub85c \ucef4\ud30c\uc77c\ub420 \uc218 \uc788\ub294\uc9c0\uc774\ud574\ud574\ubcf4\uc790, \uadf8\ub9ac\uace0 \uc774\ub7f0 \ub3c5\ubcf4\uc801\uc778 \ud2b9\uc9d5\uc73c\ub85c \ubc1c\uc804 \uac00\ub2a5\uc131\uc774 \uc5b4\ub290\uc815\ub3c4\uae4c\uc9c0 \uc77c\uc9c0 \ud310\ub2e8\ud574\ubcf4\uc790.")))))))}s.isMDXComponent=!0}}]);