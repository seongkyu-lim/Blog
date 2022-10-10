"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[1922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_position:4,title:"Behavioral pattern"},o="Behavioral Pattern",i={unversionedId:"design-pattern/behavirolpattern",id:"design-pattern/behavirolpattern",title:"Behavioral pattern",description:"Templete Method",source:"@site/docs/design-pattern/behavirolpattern.md",sourceDirName:"design-pattern",slug:"/design-pattern/behavirolpattern",permalink:"/Blog/docs/design-pattern/behavirolpattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design-pattern/behavirolpattern.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Behavioral pattern"},sidebar:"tutorialSidebar",previous:{title:"Structural pattern",permalink:"/Blog/docs/design-pattern/structuralpattern"},next:{title:"How is the design pattern actually applied?",permalink:"/Blog/docs/design-pattern/application"}},p={},s=[{value:"Templete Method",id:"templete-method",level:2},{value:"Intent",id:"intent",level:3},{value:"Structure",id:"structure",level:3},{value:"Example",id:"example",level:3},{value:"Templete method \uad6c\ud604",id:"templete-method-\uad6c\ud604",level:3},{value:"Advantage",id:"advantage",level:3},{value:"command",id:"command",level:2},{value:"observer",id:"observer",level:2},{value:"Iterator",id:"iterator",level:2},{value:"CoR",id:"cor",level:2}],d={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"behavioral-pattern"},"Behavioral Pattern"),(0,a.kt)("h2",{id:"templete-method"},"Templete Method"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"intent"},"Intent"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 operation\uc758 \uc54c\uace0\ub9ac\uc998 skeleton\uc744 \ubbf8\ub9ac \uc9c0\uc815\ud558\uc5ec operation\uc758 \uc2e4\ud589 \uc21c\uc11c\ub294 \ubcf4\uc7a5\ud558\uace0, operation \ub0b4\ubd80\uc758 \uac01\uac01\uc758 step\uc740 \uc218\uc815\ud558\uac70\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"structure"},"Structure"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"templetemethod1.png",src:r(4519).Z,width:"1062",height:"614"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"templetemethod2.png",src:r(9897).Z,width:"978",height:"594"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"templetemethod3.png",src:r(5310).Z,width:"1202",height:"1162"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"templete-method-\uad6c\ud604"},"Templete method \uad6c\ud604"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Standardize the skeleton of an algorithm in a base class "template" method'),(0,a.kt)("li",{parentName:"ol"},"Common implementations of individual steps are defined in the base class"),(0,a.kt)("li",{parentName:"ol"},'Steps requiring peculiar implementations are "placeholders" in base class'),(0,a.kt)("li",{parentName:"ol"},"Derived classes can override placeholder methods"),(0,a.kt)("li",{parentName:"ol"},"Derived classes can override implemented methods"),(0,a.kt)("li",{parentName:"ol"},'Derived classes can override and "call back to" base class methods')),(0,a.kt)("p",null,"public method\uc640 \uadf8\ub0e5 method\uc758 \ucc28\uc774 ?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"templetemethod4.png",src:r(6810).Z,width:"1296",height:"1554"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"templetemethod5.png",src:r(2477).Z,width:"1304",height:"1114"})),(0,a.kt)("p",null,"\u2192 skeleton \uc21c\uc11c\ub97c \ud655\uc7a5 \uac00\ub2a5\ud558\uad6c\ub098!"),(0,a.kt)("p",null,"\u2192 variant\uc640 invariant\ub97c \uad6c\ubd84\ud558\uc5ec \uad00\ub9ac\ud558\ub294 \uac83\uc774 \ud6a8\uc728\uc801\uc774\uad6c\ub098!"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"advantage"},"Advantage"),(0,a.kt)("p",null,"\uac19\uc740 \uc21c\uc11c\ub85c \ub3d9\uc791\ud558\ub294 \uc5ec\ub7ec\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc5d0 \ub300\ud574\uc11c \ud2b9\uc815 \uc808\ucc28\ub97c \uc218\uc815\ud574\uc57c\ud558\ub294\ub370 \uc5ec\ub7ec\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \uc11c\ub85c \uc5f0\uad00\uc131\uc774 \uc5c6\uae30\uc5d0 \uc77c\uc77c\uc774 \ubaa8\ub450 \uc218\uc815\ud574\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\u2192 Templete method\ub97c \uc801\uc6a9\ud558\uba74 \ud55c\ubc88\uc5d0 \uc218\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"command"},"command"),(0,a.kt)("h2",{id:"observer"},"observer"),(0,a.kt)("h2",{id:"iterator"},"Iterator"),(0,a.kt)("h2",{id:"cor"},"CoR"))}c.isMDXComponent=!0},4519:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/templetemethod1-21398aa978f86bcc8a01262bb10bf470.png"},9897:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/templetemethod2-fd96a7be997a84f418fc5af9ccb3f8f0.png"},5310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/templetemethod3-9f757eb7e0b4c0a45231bba451e61229.png"},6810:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/templetemethod4-cde85ffe3139b56698f5d5bce904831e.png"},2477:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/templetemethod5-f78768bc4d21eb1800765c680984c4bc.png"}}]);