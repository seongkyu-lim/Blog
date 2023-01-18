"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[3646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:2,title:"Inheritance, polimorphism"},l="<span style={{color: '#4fddbf'}}>\uc0c1\uc18d\uacfc \ub2e4\ud615\uc131</span>",o={unversionedId:"language/java/inheritance",id:"language/java/inheritance",title:"Inheritance, polimorphism",description:"\uc0c1\uc18d\uc774\ub780 ? ( Inheritance )",source:"@site/docs/language/java/inheritance.mdx",sourceDirName:"language/java",slug:"/language/java/inheritance",permalink:"/Blog/docs/language/java/inheritance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/language/java/inheritance.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Inheritance, polimorphism"},sidebar:"tutorialSidebar",previous:{title:"NoteBook",permalink:"/Blog/docs/language/java/notebook"},next:{title:"Exception Handling",permalink:"/Blog/docs/language/java/exception"}},c={},p=[{value:"\uc0c1\uc18d\uc774\ub780 ? ( Inheritance )",id:"\uc0c1\uc18d\uc774\ub780---inheritance-",level:2},{value:"\uc0c1\uc18d\uc740 \uc5b8\uc81c \uc0ac\uc6a9\ud560\uae4c ?",id:"\uc0c1\uc18d\uc740-\uc5b8\uc81c-\uc0ac\uc6a9\ud560\uae4c-",level:2},{value:"\uc5c5\uce90\uc2a4\ud305 ( Upcasting )",id:"\uc5c5\uce90\uc2a4\ud305--upcasting-",level:2},{value:"\uc624\ubc84\ub77c\uc774\ub529 ( Overriding )",id:"\uc624\ubc84\ub77c\uc774\ub529--overriding-",level:2},{value:"\ub2e4\ud615\uc131\uc774\ub780 ?",id:"\ub2e4\ud615\uc131\uc774\ub780-",level:2}],u={toc:p};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc0c1\uc18d\uacfc-\ub2e4\ud615\uc131"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"\uc0c1\uc18d\uacfc \ub2e4\ud615\uc131")),(0,a.kt)("h2",{id:"\uc0c1\uc18d\uc774\ub780---inheritance-"},"\uc0c1\uc18d\uc774\ub780 ? ( Inheritance )"),(0,a.kt)("p",null,"\ud074\ub798\uc2a4\ub97c \uc815\uc758\ud560 \ub54c, \uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \uc0c1\uc18d\ud558\ub294 \ud074\ub798\uc2a4\uc758 \uc18d\uc131\uc774\ub098 \uae30\ub2a5\uc744 \ud655\uc7a5\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud558\uc704 \ud074\ub798\uc2a4\uc640 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uad00\uacc4\ub294 \uc77c\ubc18\uc801\uc778 \uac1c\ub150\uc5d0\uc11c \uad6c\uccb4\uc801\uc778 \uac1c\ub150\uc73c\ub85c \ub098\uc544\uac00\uc57c \ud560 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc0c1\uc18d\uc744 \ubc1b\uc740 \ud558\uc704 \ud074\ub798\uc2a4\uac00 \uc0dd\uc131\ub420 \ub54c\ub294, \uc0c1\uc18d\uc744 \ud55c \uc0c1\uc704 \ud074\ub798\uc2a4\uac00 \uba3c\uc800 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,a.kt)("p",null,"\u2192 \ucef4\ud30c\uc77c \ub2e8\uacc4\uc5d0\uc11c \ud558\uc704 \ud074\ub798\uc2a4\uc758 \uc0dd\uc131\uc790\uc5d0 super() \ucf54\ub4dc\uac00 \ucd94\uac00\ub418\uba70 \ud574\ub2f9 \ucf54\ub4dc\ub294 \uc0c1\uc704 \ud074\ub798\uc2a4\ub97c \ucc38\uc870(\uc0c1\uc704 \ud074\ub798\uc2a4 \uc8fc\uc19f\uac12\uc744 \uc774\uc6a9\ud574\uc11c)\ud558\uc5ec \uc0c1\uc704 \ud074\ub798\uc2a4 \ub514\ud3f4\ud2b8 \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\u2192 \uc0c1\uc18d\uc744 \ubc1b\uc9c0 \uc54a\uc740 \uc77c\ubc18 \ud074\ub798\uc2a4\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc0dd\uc131\uc790\uac00 \ud638\ucd9c\ub420 \ub54c super() \ucf54\ub4dc\uac00 \ucd94\uac00\ub418\uba70 object \ud074\ub798\uc2a4\uc5d0 \uc811\uadfc\ud558\uc5ec \uc0dd\uc131\uc790\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4. (\uc790\ubc14\uc5d0\uc11c \ubaa8\ub4e0 \ud074\ub798\uc2a4\uc758 \ucd5c\uc0c1\uc704 \ud074\ub798\uc2a4\ub294 Object \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.)"),(0,a.kt)("p",null,"\u2192 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uba64\ubc84\ubcc0\uc218, \uba54\uc18c\ub4dc\ub97c \ud799 \uba54\ubaa8\ub9ac\uc5d0 \uba3c\uc800 \uc0dd\uc131\ud558\uace0, \ud558\uc704 \ud074\ub798\uc2a4\uc758 \uba64\ubc84\ubcc0\uc218, \uba54\uc18c\ub4dc\ub4e4\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inheritance1.png",src:n(5097).Z,width:"1642",height:"680"})),(0,a.kt)("h2",{id:"\uc0c1\uc18d\uc740-\uc5b8\uc81c-\uc0ac\uc6a9\ud560\uae4c-"},"\uc0c1\uc18d\uc740 \uc5b8\uc81c \uc0ac\uc6a9\ud560\uae4c ?"),(0,a.kt)("p",null,"\ud074\ub798\uc2a4\ub4e4 \uc0ac\uc774\uc758 \uad00\uacc4\uac00,"),(0,a.kt)("p",null,"IS-A \uad00\uacc4 (is a relationshipe - inheritance )"),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \uac1c\ub150\uacfc \uad6c\uccb4\uc801\uc778 \uac1c\ub150\uc758 \uad00\uacc4\uc77c \ub54c,"),(0,a.kt)("p",null,"HAS-A \uad00\uacc4 (composition)"),(0,a.kt)("p",null,"\ud55c \ud074\ub798\uc2a4\uac00 \ub2e4\ub978 \ud074\ub798\uc2a4\ub97c \uc18c\uc720\ud55c \uad00\uacc4\uc77c \ub54c ( \ud559\uc0dd - \ub4e3\ub294 \uc218\uc5c5 )"),(0,a.kt)("p",null,"\uc801\uc6a9\ud558\uba74 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5c5\uce90\uc2a4\ud305--upcasting-"},"\uc5c5\uce90\uc2a4\ud305 ( Upcasting )"),(0,a.kt)("p",null,"\ud558\uc704 \ud074\ub798\uc2a4\ub294 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \ud0c0\uc785\uc744 \ub0b4\ud3ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud558\uc704 \ud074\ub798\uc2a4\uc758 \ud0c0\uc785\uc744 \uc0c1\uc704\ud074\ub798\uc2a4\ub85c\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud0c0\uc785\uc774 \uc0c1\uc704 \ud074\ub798\uc2a4\ub85c \uc9c0\uc815\ub418\uc5b4\uc788\uae30 \ub54c\ubb38\uc5d0 \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\ub9cc \uc815\uc758\ub41c \uba64\ubc84 \ubcc0\uc218\ub098 \uba54\uc18c\ub4dc\uc5d0 \uc811\uadfc\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\u2194\xa0\ub2e4\uc6b4 \uce90\uc2a4\ud305."),(0,a.kt)("h2",{id:"\uc624\ubc84\ub77c\uc774\ub529--overriding-"},"\uc624\ubc84\ub77c\uc774\ub529 ( Overriding )"),(0,a.kt)("p",null,"\uc0c1\uc704 \ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \uba54\uc18c\ub4dc \uc911 \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uae30\ub2a5\uc774 \ub9de\uc9c0 \uc54a\uac70\ub098 \ucd94\uac00 \uae30\ub2a5\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 \uc0c1\uc704 \ud074\ub798\uc2a4\uc758 \uba54\uc18c\ub4dc\uc640 \uac19\uc740 \uc774\ub984, \ub9e4\uac1c\ubcc0\uc218\ub85c \ud558\uc704 \ud074\ub798\uc2a4\uc5d0\uc11c \uc7ac\uc815\uc758(\uc624\ubc84\ub77c\uc774\ub529)\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc624\ubc84\ub77c\uc774\ub529\uc740 \uc790\ubc14\uc5d0\uc11c \uac00\uc0c1 \uba54\uc18c\ub4dc( virtual method ) \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uae30 \ub54c\ubb38\uc5d0 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc790\ubc14\uc5d0\uc11c \uac00\uc0c1 \uba54\uc18c\ub4dc\ub294 \ubaa8\ub4e0 \uba54\uc18c\ub4dc\uc5d0 \uc801\uc6a9\uc774 \ub418\uba70, \uac1d\uccb4\uc758 \ud0c0\uc785\uacfc \uad00\uacc4\uc5c6\uc774 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\uc758 \uba54\uc18c\ub4dc\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc989, \uc7ac\uc815\uc758\ub41c \uba54\uc18c\ub4dc\uc5d0 \ub300\ud574\uc11c \uc0c1\uc704\ud074\ub798\uc2a4\uc758 \uba54\uc18c\ub4dc\uac00 \uc544\ub2cc, \ud558\uc704 \ud074\ub798\uc2a4\uc758 \uba54\uc18c\ub4dc\uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\ub2e4\ud615\uc131\uc774\ub780-"},"\ub2e4\ud615\uc131\uc774\ub780 ?"),(0,a.kt)("p",null,"\ud558\ub098\uc758 \ucf54\ub4dc\uac00 \uc5ec\ub7ec\uac00\uc9c0 \uc790\ub8cc\ud615\uc73c\ub85c \uad6c\ud604\ub418\uc5b4 \uc2e4\ud589\ub418\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc815\ubcf4\uc740\ub2c9, \uc0c1\uc18d\uacfc \ub354\ubd88\uc5b4 \uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \uac00\uc7a5 \ud070 \ud2b9\uc9d5 \uc911 \ud558\ub098\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uac1d\uccb4\uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d\uc758 \uc720\uc5f0\uc131, \uc7ac\ud65c\uc6a9\uc131, \uc720\uc9c0\ubcf4\uc218\uc131\uc5d0 \uae30\ubcf8\uc774 \ub418\ub294 \ud2b9\uc9d5\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inheritance2.png",src:n(9162).Z,width:"1464",height:"2954"})))}s.isMDXComponent=!0},5097:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/inheritance1-b03bdaa483a5f6e2ddcc125d73d2183b.png"},9162:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/inheritance2-a5dbd3fe8e0200962a84d786b10d03bd.png"}}]);