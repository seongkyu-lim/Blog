"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[6169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const l={sidebar_position:4,title:"data compression"},o="<span style={{color: '#4fddbf'}}># \ub370\uc774\ud130 \uc555\ucd95</span>",i={unversionedId:"database/mysql/mysql-4",id:"database/mysql/mysql-4",title:"data compression",description:"\ub370\uc774\ud130 \uc555\ucd95",source:"@site/docs/database/mysql/mysql-4.mdx",sourceDirName:"database/mysql",slug:"/database/mysql/mysql-4",permalink:"/Blog/docs/database/mysql/mysql-4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/database/mysql/mysql-4.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"data compression"},sidebar:"tutorialSidebar",previous:{title:"Transaction&Lock",permalink:"/Blog/docs/database/mysql/mysql-3"},next:{title:"Project Setting",permalink:"/Blog/docs/project/dano-lunch/pyenv"}},s={},p=[{value:"6.1 \ud398\uc774\uc9c0 \uc555\ucd95",id:"61-\ud398\uc774\uc9c0-\uc555\ucd95",level:2},{value:"6.2 \ud14c\uc774\ube14 \uc555\ucd95",id:"62-\ud14c\uc774\ube14-\uc555\ucd95",level:2},{value:"Step 1. \uc555\ucd95 \ud14c\uc774\ube14\uc744 \uc0dd\uc131",id:"step-1-\uc555\ucd95-\ud14c\uc774\ube14\uc744-\uc0dd\uc131",level:3},{value:"Step 2. KEY_BLOCK_SIZE \uacb0\uc815",id:"step-2-key_block_size-\uacb0\uc815",level:3},{value:"Step 3. \uc555\ucd95\ub41c \ud398\uc774\uc9c0\uc758 \ubc84\ud37c \ud480 \uc801\uc7ac \ubc0f \uc801\uc6a9",id:"step-3-\uc555\ucd95\ub41c-\ud398\uc774\uc9c0\uc758-\ubc84\ud37c-\ud480-\uc801\uc7ac-\ubc0f-\uc801\uc6a9",level:3},{value:"Step 4. \ud14c\uc774\ube14 \uc555\ucd95 \uad00\ub828 \uc124\uc815",id:"step-4-\ud14c\uc774\ube14-\uc555\ucd95-\uad00\ub828-\uc124\uc815",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\ub370\uc774\ud130-\uc555\ucd95"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"# \ub370\uc774\ud130 \uc555\ucd95")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MySQL \uc11c\ubc84\uc5d0\uc11c \ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130 \ud30c\uc77c\uc758 \ud06c\uae30\ub294 \ucffc\ub9ac\uc758 \ucc98\ub9ac \uc131\ub2a5 \ubc0f \ubc31\uc5c5, \ubcf5\uad6c \uc2dc\uac04\uacfc\ub3c4 \ubc00\uc811\ud558\uac8c \uc5f0\uacb0\ub418\uae30 \ub54c\ubb38\uc5d0, \ub370\uc774\ud130 \uc555\ucd95 \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14 \uc555\ucd95\uacfc \ud398\uc774\uc9c0 \uc555\ucd95\uc774 \uc874\uc7ac.")),(0,a.kt)("h2",{id:"61-\ud398\uc774\uc9c0-\uc555\ucd95"},"6.1 \ud398\uc774\uc9c0 \uc555\ucd95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub514\uc2a4\ud06c\uc5d0 \uc800\uc7a5\ud558\ub294 \uc2dc\uc810\uc5d0 \ub370\uc774\ud130 \ud398\uc774\uc9c0\uac00 \uc555\ucd95\ub418\uc5b4 \uc800\uc7a5\ub418\uace0, \ub370\uc774\ud130 \ud398\uc774\uc9c0\ub97c \uc77d\uc5b4\uc62c \ub54c \uc555\ucd95\uc774 \ud574\uc81c\ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc555\ucd95\ud55c \uacb0\uacfc\uac00 \uc6a9\ub7c9\uc774 \uc5bc\ub9c8\ub098 \ub420\uc9c0 \uc608\uce21\uc774 \ubd88\uac00\ub2a5\ud55c\ub370 \ud558\ub098\uc758 \ud14c\uc774\ube14\uc740 \ub3d9\uc77c\ud55c \ud06c\uae30\uc758 \ud398\uc774\uc9c0\ub85c \ud1b5\uc77c\ub418\uc57c\ud558\ub294 \ubb38\uc81c\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ud380\uce58 \ud640\uc774\ub77c\ub294 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ub0a8\uc740 \uacf5\uac04\uc5d0 \ub300\ud574 \ud380\uce58\ud640\uc744 \uc0dd\uc131\ud558\uba74 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc740 \ube48 \uacf5\uac04\uc744 \uc6b4\uc601\uccb4\uc81c\ub85c \ub2e4\uc2dc \ubc18\ub0a9."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \ud380\uce58 \ud640 \uae30\ub2a5\uc740 \uc6b4\uc601\uccb4\uc81c\ubfd0\ub9cc \uc544\ub2c8\ub77c \ud558\ub4dc\uc6e8\uc5b4 \uc790\uccb4\uc5d0\uc11c\ub3c4 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud574\uc57c \uc0ac\uc6a9\uac00\ub2a5\ud558\ub2e4\ub294 \ub2e8\uc810\uc774 \uc874\uc7ac\ud55c\ub2e4. \ub610 \ud30c\uc77c \uc2dc\uc2a4\ud15c \uad00\ub828 \uba85\ub839\uc5b4\uac00 \ud380\uce58 \ud640\uc744 \uc9c0\uc6d0\ud558\uc9c0 \ubabb\ud574\uc11c cp\uc640 \uac19\uc774 \uc555\ucd95\ub41c \ud30c\uc77c\uc744 \ubcf5\uc0ac\ud558\uac70\ub098 \ud558\uba74 \ud380\uce58 \ud640\uc774 \ub2e4\uc2dc \ucc44\uc6cc\uc838\uc11c \uc6d0\ubcf8 \ud06c\uae30\uac00 \ub418\ubc84\ub9b4 \uc218 \uc788\ub2e4. \ucc45\uc5d0\uc11c\ub294 \ud398\uc774\uc9c0 \uc555\ucd95\uc5d0 \ub300\ud574\uc11c\ub294 \uc790\uc138\ud788 \uc5b8\uae09\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\uac70\ub098 \ubcc0\uacbd\ud560 \ub54c COMPRESSION \uc635\uc158\uc744 \uc124\uc815\ud558\uc5ec \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h2",{id:"62-\ud14c\uc774\ube14-\uc555\ucd95"},"6.2 \ud14c\uc774\ube14 \uc555\ucd95"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14 \uc555\ucd95\uc740 \uc6b4\uc601\uccb4\uc81c\ub098 \ud558\ub4dc\uc6e8\uc5b4\uc5d0 \ub300\ud55c \uc81c\uc57d \uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \uc77c\ubc18\uc801\uc73c\ub85c \ub354 \ud65c\uc6a9\ub3c4\uac00 \ub192\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uba87 \uac00\uc9c0 \ub2e8\uc810 \uc874\uc7ac.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\ubc84\ud37c \ud480 \uacf5\uac04 \ud65c\uc6a9\ub960\uc774 \ub0ae\uc74c."),(0,a.kt)("li",{parentName:"ol"},"\ucffc\ub9ac \ucc98\ub9ac \uc131\ub2a5\uc774 \ub0ae\uc74c."),(0,a.kt)("li",{parentName:"ol"},"\ube48\ubc88\ud55c \ub370\uc774\ud130 \ubcc0\uacbd \uc2dc \uc555\ucd95\ub960\uc774 \ub5a8\uc5b4\uc9d0.")))),(0,a.kt)("h3",{id:"step-1-\uc555\ucd95-\ud14c\uc774\ube14\uc744-\uc0dd\uc131"},"Step 1. \uc555\ucd95 \ud14c\uc774\ube14\uc744 \uc0dd\uc131"),(0,a.kt)("h3",{id:"step-2-key_block_size-\uacb0\uc815"},"Step 2. KEY_BLOCK_SIZE \uacb0\uc815"),(0,a.kt)("h3",{id:"step-3-\uc555\ucd95\ub41c-\ud398\uc774\uc9c0\uc758-\ubc84\ud37c-\ud480-\uc801\uc7ac-\ubc0f-\uc801\uc6a9"},"Step 3. \uc555\ucd95\ub41c \ud398\uc774\uc9c0\uc758 \ubc84\ud37c \ud480 \uc801\uc7ac \ubc0f \uc801\uc6a9"),(0,a.kt)("h3",{id:"step-4-\ud14c\uc774\ube14-\uc555\ucd95-\uad00\ub828-\uc124\uc815"},"Step 4. \ud14c\uc774\ube14 \uc555\ucd95 \uad00\ub828 \uc124\uc815"))}u.isMDXComponent=!0}}]);