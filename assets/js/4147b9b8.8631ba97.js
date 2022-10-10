"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[7548],{7922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:3,title:"Persistence Management"},l="<span style={{color: '#4fddbf'}}>Persistence Management</span>",o={unversionedId:"JPA/persistaece-management",id:"JPA/persistaece-management",title:"Persistence Management",description:"JPA\ub294 \ud06c\uac8c \uc5d4\ud2f0\ud2f0\uc640 \ud14c\uc774\ube14\uc744 \ub9e4\ud551\ud558\ub294 \uc124\uacc4 \ubd80\ubd84\uacfc \ub9e4\ud551\ud55c \uc5d4\ud2f0\ud2f0\ub97c \uc2e4\uc81c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc73c\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/JPA/persistaece-management.mdx",sourceDirName:"JPA",slug:"/JPA/persistaece-management",permalink:"/Blog/docs/JPA/persistaece-management",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/JPA/persistaece-management.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Persistence Management"},sidebar:"tutorialSidebar",previous:{title:"JPA Start",permalink:"/Blog/docs/JPA/start"},next:{title:"Entity Mapping",permalink:"/Blog/docs/JPA/entity-mapping"}},c={},s=[{value:"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8 ( persistence context )",id:"\uc601\uc18d\uc131-\ucee8\ud14d\uc2a4\ud2b8--persistence-context-",level:2},{value:"\uc5d4\ud2f0\ud2f0 \uc0dd\uba85\uc8fc\uae30 ( Entity Lifecycle )",id:"\uc5d4\ud2f0\ud2f0-\uc0dd\uba85\uc8fc\uae30--entity-lifecycle-",level:2},{value:"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc758 \ud2b9\uc9d5",id:"\uc601\uc18d\uc131-\ucee8\ud14d\uc2a4\ud2b8\uc758-\ud2b9\uc9d5",level:2},{value:"Flush",id:"flush",level:2},{value:"\uc900\uc601\uc18d",id:"\uc900\uc601\uc18d",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"persistence-management"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"Persistence Management")),(0,a.kt)("p",null,"JPA\ub294 \ud06c\uac8c \uc5d4\ud2f0\ud2f0\uc640 \ud14c\uc774\ube14\uc744 \ub9e4\ud551\ud558\ub294 \uc124\uacc4 \ubd80\ubd84\uacfc \ub9e4\ud551\ud55c \uc5d4\ud2f0\ud2f0\ub97c \uc2e4\uc81c \uc0ac\uc6a9\ud558\ub294 \ubd80\ubd84\uc73c\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc601\uc18d\uc131-\ucee8\ud14d\uc2a4\ud2b8--persistence-context-"},"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8 ( persistence context )"),(0,a.kt)("p",null,"\uc5d4\ud2f0\ud2f0\ub97c \uc601\uad6c\ud788 \uc800\uc7a5\ud558\ub294 \ud658\uacbd\uc73c\ub85c, entity manager\ub294 \uc5d4\ud2f0\ud2f0\ub4e4\uc744 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ud558\uc5ec \uad00\ub9ac\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc989 JPA \uc2dc\uc791 \ub2e8\uacc4\uc5d0\uc11c \ub85c\uc9c1\uc73c\ub85c \uc9f0\ub358 member\ub97c \uc800\uc7a5\ud560 \ub54c \uc0ac\uc6a9\ud55c persist()\uba54\uc18c\ub4dc\ub294 \uc0ac\uc2e4 \ub2e8\uc21c\ud788 \uba64\ubc84 \uc5d4\ud2f0\ud2f0\ub97c \ud14c\uc774\ube14\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\uc774\uc544\ub2c8\ub77c \uc880 \ub354 \uc815\ud655\ud55c \ud45c\ud604\uc73c\ub85c\ub294 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ud558\ub294 \uba54\uc18c\ub4dc\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ubcf4\ud1b5 \uc5d4\ud2f0\ud2f0 \ub9e4\ub2c8\uc800\uac00 \uc0dd\uc131\ud560 \ub54c \ud558\ub098\uc529 \ub9cc\ub4e4\uc5b4\uc9d1\ub2c8\ub2e4. \ubb3c\ub860 \uc5ec\ub7ec \uc5d4\ud2f0\ud2f0\uac00 \uac19\uc740 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc811\uadfc\ud558\ub294 \uacbd\uc6b0\ub3c4 \uc874\uc7ac\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5d4\ud2f0\ud2f0-\uc0dd\uba85\uc8fc\uae30--entity-lifecycle-"},"\uc5d4\ud2f0\ud2f0 \uc0dd\uba85\uc8fc\uae30 ( Entity Lifecycle )"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ube44\uc601\uc18d(new/transient) : \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc640 \uc804\ud600 \uad00\uacc4\uac00 \uc5c6\ub294 \uc0c1\ud0dc"),(0,a.kt)("li",{parentName:"ul"},"\uc601\uc18d(managed) : \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ub41c \uc0c1\ud0dc"),(0,a.kt)("li",{parentName:"ul"},"\uc900\uc601\uc18d(detached) : \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc5d0 \uc800\uc7a5\ub418\uc5c8\ub2e4\uac00 \ubd84\ub9ac\ub41c \uc0c1\ud0dc"),(0,a.kt)("li",{parentName:"ul"},"\uc0ad\uc81c(removed) : \uc0ad\uc81c\ub41c \uc0c1\ud0dc")),(0,a.kt)("h2",{id:"\uc601\uc18d\uc131-\ucee8\ud14d\uc2a4\ud2b8\uc758-\ud2b9\uc9d5"},"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\uc758 \ud2b9\uc9d5"),(0,a.kt)("h2",{id:"flush"},"Flush"),(0,a.kt)("p",null,"DB\uc640 \ub3d9\uae30\ud654\ud558\ub294 \uacfc\uc815."),(0,a.kt)("p",null,"Trasaction commit \uc2dc \ubc1c\uc0dd."),(0,a.kt)("h2",{id:"\uc900\uc601\uc18d"},"\uc900\uc601\uc18d"))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);