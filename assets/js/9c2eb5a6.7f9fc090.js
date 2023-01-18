"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[8217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||a;return n?o.createElement(d,l(l({ref:t},s),{},{components:n})):o.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_position:4,title:"Slack Webhook"},l="<span style={{color: '#4fddbf'}}>Slack Incomming Webhook \uc0ac\uc6a9\ud558\uae30.</span>",i={unversionedId:"project/dano-lunch/slack",id:"project/dano-lunch/slack",title:"Slack Webhook",description:"Slack Incomming Webhook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0\uc11c \ud2b9\uc815 \ub85c\uc9c1\uc774 \uc218\ud589\ub420 \ub54c, \uc2ac\ub799\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc54c\ub9bc\uc774 \uac00\ub3c4\ub85d \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/docs/project/dano-lunch/slack.mdx",sourceDirName:"project/dano-lunch",slug:"/project/dano-lunch/slack",permalink:"/Blog/docs/project/dano-lunch/slack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/project/dano-lunch/slack.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Slack Webhook"},sidebar:"tutorialSidebar",previous:{title:"Auth",permalink:"/Blog/docs/project/dano-lunch/auth"},next:{title:"Deploy",permalink:"/Blog/docs/project/dano-lunch/deploy"}},c={},p=[{value:"step 1. incomming webhook\uc571 \uc0dd\uc131",id:"step-1-incomming-webhook\uc571-\uc0dd\uc131",level:3},{value:"step 2. \uc571\uc758 incomming webhook \ud65c\uc131\ud654 \ubc0f workspace\uc640 \uc5f0\uacb0.",id:"step-2-\uc571\uc758-incomming-webhook-\ud65c\uc131\ud654-\ubc0f-workspace\uc640-\uc5f0\uacb0",level:3},{value:"step 3. \ubc1c\uae09\ubc1b\uc740 webhook URL\ub85c post+ json data \uc694\uccad.",id:"step-3-\ubc1c\uae09\ubc1b\uc740-webhook-url\ub85c-post-json-data-\uc694\uccad",level:3},{value:"step 4.  \ub0b4\uc6a9 \uafb8\ubbf8\uae30",id:"step-4--\ub0b4\uc6a9-\uafb8\ubbf8\uae30",level:3},{value:"FastAPI\uc5d0\uc11c \uc694\uccad.",id:"fastapi\uc5d0\uc11c-\uc694\uccad",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slack-incomming-webhook-\uc0ac\uc6a9\ud558\uae30"},(0,r.kt)("span",{style:{color:"#4fddbf"}},"Slack Incomming Webhook \uc0ac\uc6a9\ud558\uae30.")),(0,r.kt)("p",null,"Slack Incomming Webhook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc11c\ubc84\uc5d0\uc11c \ud2b9\uc815 \ub85c\uc9c1\uc774 \uc218\ud589\ub420 \ub54c, \uc2ac\ub799\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc54c\ub9bc\uc774 \uac00\ub3c4\ub85d \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"Sending messages using Incoming Webhooks")),(0,r.kt)("p",null,"\uc2ac\ub799\uc5d0\uc11c\ub294 \ub2e4\uc591\ud55c API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d\ud569\ub2c8\ub2e4, \uadf8 \uc911 Incomming Webhook(\uc218\uc2e0 \uc6f9\ud6c5)\uc744 \uc9c1\uc811 \ub9cc\ub4e4\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"step-1-incomming-webhook\uc571-\uc0dd\uc131"},"step 1. incomming webhook\uc571 \uc0dd\uc131"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc218\uc2e0 \uc6f9\ud6c5\uc744 \uc0dd\uc131\ud558\uace0 \uc694\uccad url, \uc571 \uc774\ubbf8\uc9c0 \ub4f1 \uc815\ubcf4\ub97c \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2ac\ub799 \ubb38\uc11c\ub97c \ub530\ub77c\uc11c \uc9c4\ud589\ud558\uba74 \ud070 \uc5b4\ub824\uc6c0\uc5c6\uc774 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"slack api \uad00\ub9ac : ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/apps/A03FJ80PQDC"},"https://api.slack.com/apps/A03FJ80PQDC"))),(0,r.kt)("h3",{id:"step-2-\uc571\uc758-incomming-webhook-\ud65c\uc131\ud654-\ubc0f-workspace\uc640-\uc5f0\uacb0"},"step 2. \uc571\uc758 incomming webhook \ud65c\uc131\ud654 \ubc0f workspace\uc640 \uc5f0\uacb0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc54c\ub9bc\uc744 \ub744\uc6b8 \uc2ac\ub799 \uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4 \ucc44\ub110\uc5d0 \ub9cc\ub4e0 \uc571\uc744 \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc6cc\ud06c\uc2a4\ud398\uc774\uc2a4\uc5d0 \uc0dd\uc131\ud55c \uc571\uc744 \uc124\uce58 \ud560 \ub54c, \u2018*",(0,r.kt)("strong",{parentName:"li"},"*\uc124\uce58\ud560 \ubd07 \uc0ac\uc6a9\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4\u2019**"),"\ub77c\ub294 \uc5d0\ub7ec\uac00 \ub09c\ub2e4\uba74, ",(0,r.kt)("a",{parentName:"li",href:"https://velog.io/@dulcis-hortus/slackbot-%EC%84%A4%EC%B9%98%ED%95%A0-%EB%B4%87-%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4"},"\ud574\ub2f9 \ube14\ub85c\uadf8 \uae00"),"\uc744 \ucc38\uace0\ud574\uc8fc\uc138\uc694!")),(0,r.kt)("h3",{id:"step-3-\ubc1c\uae09\ubc1b\uc740-webhook-url\ub85c-post-json-data-\uc694\uccad"},"step 3. \ubc1c\uae09\ubc1b\uc740 webhook URL\ub85c post+ json data \uc694\uccad."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 url\uc740 \ub2e8\uc77c \uc0ac\uc6a9\uc790 \ubc0f \ub2e8\uc77c \ucc44\ub110\uc5d0 \uace0\uc720\ud55c url."),(0,r.kt)("li",{parentName:"ul"},"json data\uc758 \ud615\uc2dd\uc774 \uc815\ud574\uc838\uc788\uae30 \ub54c\ubb38\uc5d0 \uc815\ud574\uc9c4 \ud615\uc2dd\uc744 \uc9c0\ucf1c\uc57c \uc815\uc0c1\uc801\uc73c\ub85c \uba54\uc138\uc9c0\uac00 \ub744\uc6cc\uc9d1\ub2c8\ub2e4!")),(0,r.kt)("h3",{id:"step-4--\ub0b4\uc6a9-\uafb8\ubbf8\uae30"},"step 4.  \ub0b4\uc6a9 \uafb8\ubbf8\uae30"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc804\uc1a1\ud560 \ub370\uc774\ud130\ub97c \ub9c8\uc74c \uaecf \uafb8\ubc00 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2ac\ub799 \ubb38\uc11c\uc5d0 \ub370\uc774\ud130 \ud615\uc2dd\uacfc \uafb8\ubbf8\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc124\uba85\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4!")),(0,r.kt)("h2",{id:"fastapi\uc5d0\uc11c-\uc694\uccad"},"FastAPI\uc5d0\uc11c \uc694\uccad."),(0,r.kt)("p",null,"FastAPI\uc5d0\uc11c \ud574\ub2f9 \uc694\uccad \ub85c\uc9c1\uc744 \ube44\ub3d9\uae30\ub85c \ucc98\ub9ac\ud574\uc8fc\uae30 \uc704\ud574\uc11c\ub294 request \ub77c\uc774\ube0c\ub7ec\ub9ac \ub300\uc2e0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.python-httpx.org/async/"},"httpx"),"\ub77c\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc57c\ud569\ub2c8\ub2e4. (request\ub294 \ube44\ub3d9\uae30 \ucc98\ub9ac\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc74c.)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"slack-1.png",src:n(6535).Z,width:"1356",height:"582"})))}u.isMDXComponent=!0},6535:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/slack-1-8954ce9f7937127ed43c9eda324b53f1.png"}}]);