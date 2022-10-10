"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[3661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),a=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=a(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=a(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?o.createElement(y,c(c({ref:t},d),{},{components:n})):o.createElement(y,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var a=2;a<l;a++)c[a]=n[a];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var o=n(3117),r=(n(7294),n(3905));const l={sidebar_position:5,title:"Deploy"},c="<span style={{color: '#4fddbf'}}>\ubc30\ud3ec \ubc0f \ud504\ub85d\uc2dc \uc11c\ubc84 \uc801\uc6a9\ud558\uae30.</span>",p={unversionedId:"dano-lunch/deploy",id:"dano-lunch/deploy",title:"Deploy",description:"\ubc30\ud3ec\ud558\uae30!",source:"@site/docs/dano-lunch/deploy.mdx",sourceDirName:"dano-lunch",slug:"/dano-lunch/deploy",permalink:"/Blog/docs/dano-lunch/deploy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/dano-lunch/deploy.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Deploy"},sidebar:"tutorialSidebar",previous:{title:"Slack Webhook",permalink:"/Blog/docs/dano-lunch/slack"},next:{title:"Entity in ko-pring",permalink:"/Blog/docs/kitchen-force/entity-kopring"}},i={},a=[{value:"\ubc30\ud3ec\ud558\uae30!",id:"\ubc30\ud3ec\ud558\uae30",level:2},{value:"Step 1. docker-compose\ub85c \uc774\ubbf8\uc9c0\ub9cc\ub4e4\uae30.",id:"step-1-docker-compose\ub85c-\uc774\ubbf8\uc9c0\ub9cc\ub4e4\uae30",level:3},{value:"Step 2. ncloud\uc5d0 docker container \ub744\uc6b0\uae30.",id:"step-2-ncloud\uc5d0-docker-container-\ub744\uc6b0\uae30",level:3},{value:"Step 3. nginx\ub85c \ud504\ub85d\uc2dc \uc11c\ubc84 \uc138\ud305\ud558\uae30.",id:"step-3-nginx\ub85c-\ud504\ub85d\uc2dc-\uc11c\ubc84-\uc138\ud305\ud558\uae30",level:3}],d={toc:a};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ubc30\ud3ec-\ubc0f-\ud504\ub85d\uc2dc-\uc11c\ubc84-\uc801\uc6a9\ud558\uae30"},(0,r.kt)("span",{style:{color:"#4fddbf"}},"\ubc30\ud3ec \ubc0f \ud504\ub85d\uc2dc \uc11c\ubc84 \uc801\uc6a9\ud558\uae30.")),(0,r.kt)("h2",{id:"\ubc30\ud3ec\ud558\uae30"},"\ubc30\ud3ec\ud558\uae30!"),(0,r.kt)("p",null,"\ubc30\ud3ec \uc804\ub7b5\uc73c\ub85c ncloud \uc11c\ubc84\uc5d0 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uacfc DB\ub294 \ub3c4\ucee4 \ucee8\ud14c\uc774\ub108\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub744\uc6b0\uace0, nginx\ub97c \uc55e\ub2e8\uc5d0 \ub450\uc5b4 \ud504\ub85d\uc2dc \uc11c\ubc84\ub97c \ud1b5\ud574 \uc11c\ubc84\uc5d0 \uc811\uadfc\ud558\ub3c4\ub85d \ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"step-1-docker-compose\ub85c-\uc774\ubbf8\uc9c0\ub9cc\ub4e4\uae30"},"Step 1. docker-compose\ub85c \uc774\ubbf8\uc9c0\ub9cc\ub4e4\uae30."),(0,r.kt)("p",null,"\uc6b0\uc120 application\uacfc db\ub97c \uc6d0\uaca9 \uc11c\ubc84\uc5d0\uc11c \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d docker-compose\ub97c \uc138\ud305\ud558\uace0, application \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-1.png",src:n(3396).Z,width:"1100",height:"2292"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-2.png",src:n(2430).Z,width:"1610",height:"1122"})),(0,r.kt)("p",null,"docker-compose\ub97c build\ud558\uc5ec app \uc774\ubbf8\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uace0, \ud574\ub2f9 \uc774\ubbf8\uc9c0\ub97c \uc6d0\uaca9 \uc11c\ubc84\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d docker registry\uc5d0 \ud478\uc26c\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("p",null,"db\ub294 mongodb\ub97c \uc0ac\uc6a9\ud588\uc73c\uba70 ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/mongo"},"docker hub\uc5d0 image\uac00 \uc874\uc7ac"),"\ud558\uae30 \ub54c\ubb38\uc5d0 \ub530\ub85c \ub4f1\ub85d\ud574\uc904 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"step-2-ncloud\uc5d0-docker-container-\ub744\uc6b0\uae30"},"Step 2. ncloud\uc5d0 docker container \ub744\uc6b0\uae30."),(0,r.kt)("p",null,"cloud \uc11c\ube44\uc2a4\ub85c ncloud\ub97c \uc0ac\uc6a9\ud558\uc600\uc73c\uba70 ssh\ub97c \ud1b5\ud574 \uc6d0\uaca9\uc11c\ubc84\uc5d0 \uc811\uadfc\ud558\uc5ec container \uc0dd\uc131\uc744 \uc704\ud574 docker-compose.yml\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\uace0 docker registry\uc5d0 \ub4f1\ub85d\ud558\uc600\ub358 app \uc774\ubbf8\uc9c0\ub97c pull\ud574\uc635\ub2c8\ub2e4."),(0,r.kt)("p",null,"docker-compose up -d \ub85c \uc774\ubbf8\uc9c0\ub97c \ube4c\ub4dc\ud558\uace0 \ucee8\ud14c\uc774\ub108\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"step-3-nginx\ub85c-\ud504\ub85d\uc2dc-\uc11c\ubc84-\uc138\ud305\ud558\uae30"},"Step 3. nginx\ub85c \ud504\ub85d\uc2dc \uc11c\ubc84 \uc138\ud305\ud558\uae30."),(0,r.kt)("p",null,"\uc6d0\uaca9 \uc11c\ubc84\uc5d0 nginx\ub97c \uc124\uce58\ud558\uace0 \uc124\uc815 \ud30c\uc77c\uc5d0\uc11c \uc9c0\uc815\ud55c domain\uc73c\ub85c \uc811\uadfc \uc2dc nginx\ub85c \uc811\uadfc\ub418\ub3c4\ub85d\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"80 port\uc640 443 port\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc124\uc815\ub418\uc5b4\uc788\uc73c\uba70 80\uc73c\ub85c \uc811\uadfc\uc2dc 443 (https)\ub85c \ub9ac\ub2e4\uc774\ub809\ud2b8 \ub418\ub3c4\ub85d \uc124\uc815\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"letsencrypt\uc640 certbot\uc744 \uc0ac\uc6a9\ud558\uc5ec ssl \uc778\uc99d\uc11c\ub97c \ubc1c\uae09\ubc1b\uace0 https\uc811\uadfc\uc744 \uac00\ub2a5\ud558\ub3c4\ub85d \ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"deploy-3.png",src:n(4340).Z,width:"1684",height:"3642"})))}s.isMDXComponent=!0},3396:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploy-1-60a0a4b6c2ba9e00e1fc41947802e388.png"},2430:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploy-2-d5b610d5de16a014b1e6f9c690dfd610.png"},4340:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploy-3-19f84ddbd53bbb7d2f6641398cc2714a.png"}}]);