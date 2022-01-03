"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[922],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:4,title:"Behavioral pattern"},p="Behavioral Pattern",c={unversionedId:"design-pattern/behavirolpattern",id:"design-pattern/behavirolpattern",isDocsHomePage:!1,title:"Behavioral pattern",description:"Templete Method",source:"@site/docs/design-pattern/behavirolpattern.md",sourceDirName:"design-pattern",slug:"/design-pattern/behavirolpattern",permalink:"/Blog/docs/design-pattern/behavirolpattern",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design-pattern/behavirolpattern.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Behavioral pattern"},sidebar:"tutorialSidebar",previous:{title:"Structural pattern",permalink:"/Blog/docs/design-pattern/structuralpattern"},next:{title:"How is the design pattern actually applied?",permalink:"/Blog/docs/design-pattern/application"}},s=[{value:"Templete Method",id:"templete-method",children:[{value:"Intent",id:"intent",children:[],level:3},{value:"Structure",id:"structure",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Templete method \uad6c\ud604",id:"templete-method-\uad6c\ud604",children:[],level:3},{value:"Advantage",id:"advantage",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"behavioral-pattern"},"Behavioral Pattern"),(0,l.kt)("h2",{id:"templete-method"},"Templete Method"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"intent"},"Intent"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud2b9\uc815 operation\uc758 \uc54c\uace0\ub9ac\uc998 skeleton\uc744 \ubbf8\ub9ac \uc9c0\uc815\ud558\uc5ec operation\uc758 \uc2e4\ud589 \uc21c\uc11c\ub294 \ubcf4\uc7a5\ud558\uace0, operation \ub0b4\ubd80\uc758 \uac01\uac01\uc758 step\uc740 \uc218\uc815\ud558\uac70\ub098 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"structure"},"Structure"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"templetemethod1.png",src:n(4553).Z})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"templetemethod2.png",src:n(9969).Z})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"templetemethod3.png",src:n(9420).Z})),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"templete-method-\uad6c\ud604"},"Templete method \uad6c\ud604"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Standardize the skeleton of an algorithm in a base class "template" method'),(0,l.kt)("li",{parentName:"ol"},"Common implementations of individual steps are defined in the base class"),(0,l.kt)("li",{parentName:"ol"},'Steps requiring peculiar implementations are "placeholders" in base class'),(0,l.kt)("li",{parentName:"ol"},"Derived classes can override placeholder methods"),(0,l.kt)("li",{parentName:"ol"},"Derived classes can override implemented methods"),(0,l.kt)("li",{parentName:"ol"},'Derived classes can override and "call back to" base class methods')),(0,l.kt)("p",null,"public method\uc640 \uadf8\ub0e5 method\uc758 \ucc28\uc774 ?"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"templetemethod4.png",src:n(581).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"templetemethod5.png",src:n(8819).Z})),(0,l.kt)("p",null,"\u2192 skeleton \uc21c\uc11c\ub97c \ud655\uc7a5 \uac00\ub2a5\ud558\uad6c\ub098!"),(0,l.kt)("p",null,"\u2192 variant\uc640 invariant\ub97c \uad6c\ubd84\ud558\uc5ec \uad00\ub9ac\ud558\ub294 \uac83\uc774 \ud6a8\uc728\uc801\uc774\uad6c\ub098!"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"advantage"},"Advantage"),(0,l.kt)("p",null,"\uac19\uc740 \uc21c\uc11c\ub85c \ub3d9\uc791\ud558\ub294 \uc5ec\ub7ec\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc5d0 \ub300\ud574\uc11c \ud2b9\uc815 \uc808\ucc28\ub97c \uc218\uc815\ud574\uc57c\ud558\ub294\ub370 \uc5ec\ub7ec\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \uc11c\ub85c \uc5f0\uad00\uc131\uc774 \uc5c6\uae30\uc5d0 \uc77c\uc77c\uc774 \ubaa8\ub450 \uc218\uc815\ud574\uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\u2192 Templete method\ub97c \uc801\uc6a9\ud558\uba74 \ud55c\ubc88\uc5d0 \uc218\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"##command"),(0,l.kt)("p",null,"##observer"),(0,l.kt)("p",null,"##Iterator"),(0,l.kt)("p",null,"##CoR"))}d.isMDXComponent=!0},4553:function(e,t,n){t.Z=n.p+"assets/images/templetemethod1-21398aa978f86bcc8a01262bb10bf470.png"},9969:function(e,t,n){t.Z=n.p+"assets/images/templetemethod2-fd96a7be997a84f418fc5af9ccb3f8f0.png"},9420:function(e,t,n){t.Z=n.p+"assets/images/templetemethod3-9f757eb7e0b4c0a45231bba451e61229.png"},581:function(e,t,n){t.Z=n.p+"assets/images/templetemethod4-cde85ffe3139b56698f5d5bce904831e.png"},8819:function(e,t,n){t.Z=n.p+"assets/images/templetemethod5-f78768bc4d21eb1800765c680984c4bc.png"}}]);