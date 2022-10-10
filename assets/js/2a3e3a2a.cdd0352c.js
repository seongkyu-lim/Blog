"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[5374],{6025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={sidebar_position:4,title:"Entity Mapping"},l="<span style={{color: '#4fddbf'}}>Entity Mapping</span>",p={unversionedId:"JPA/entity-mapping",id:"JPA/entity-mapping",title:"Entity Mapping",description:"\uc774\ubc88 \ucc55\ud130\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0\uc640 \ud14c\uc774\ube14\uc744 \uc815\ud655\ud558\uac8c \ub9e4\ud551\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uc5b4\ub178\ud14c\uc774\uc158\ub4e4\uc5d0 \ub300\ud574\uc11c \uc18c\uac1c\ud569\ub2c8\ub2e4.",source:"@site/docs/JPA/entity-mapping.mdx",sourceDirName:"JPA",slug:"/JPA/entity-mapping",permalink:"/Blog/docs/JPA/entity-mapping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/JPA/entity-mapping.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Entity Mapping"},sidebar:"tutorialSidebar",previous:{title:"Persistence Management",permalink:"/Blog/docs/JPA/persistaece-management"},next:{title:"Relational Mapping-Basic",permalink:"/Blog/docs/JPA/relational-mapping-basic"}},o={},u=[{value:"@Entity",id:"entity",level:2},{value:"@Table",id:"table",level:2},{value:"@Id",id:"id",level:2},{value:"\uc5d4\ud2f0\ud2f0 \ud544\ub4dc \u2194\xa0\ud14c\uc774\ube14 \uceec\ub7fc \ub9e4\ud551 \uc5b4\ub178\ud14c\uc774\uc158",id:"\uc5d4\ud2f0\ud2f0-\ud544\ub4dc-\ud14c\uc774\ube14-\uceec\ub7fc-\ub9e4\ud551-\uc5b4\ub178\ud14c\uc774\uc158",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entity-mapping"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"Entity Mapping")),(0,a.kt)("p",null,"\uc774\ubc88 \ucc55\ud130\uc5d0\uc11c\ub294 \uc5d4\ud2f0\ud2f0\uc640 \ud14c\uc774\ube14\uc744 \uc815\ud655\ud558\uac8c \ub9e4\ud551\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 \uc5b4\ub178\ud14c\uc774\uc158\ub4e4\uc5d0 \ub300\ud574\uc11c \uc18c\uac1c\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uc640 \ud14c\uc774\ube14 \ub9e4\ud551 : @Entity, @Table"),(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \ud0a4 \ub9e4\ud551 : @Id"),(0,a.kt)("li",{parentName:"ul"},"\ud544\ub4dc\uc640 \uceec\ub7fc \ub9e4\ud551 : @Column"),(0,a.kt)("li",{parentName:"ul"},"\uc5f0\uad00\uad00\uacc4 \ub9e4\ud551 : @ManyToOne, @JoinColumn ..etc.")),(0,a.kt)("h2",{id:"entity"},"@Entity"),(0,a.kt)("p",null,"\ud14c\uc774\ube14\uacfc \ub9e4\ud551\ud560 \ud074\ub798\uc2a4\ub294 \ud544\uc218\uc801\uc73c\ub85c @Entity \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ubd99\uc5ec\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc8fc\uc758\uc0ac\ud56d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uae30\ubcf8 \uc0dd\uc131\uc790\ub294 \ud544\uc218\uc785\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},"  \uc790\ubc14\uc5d0\uc11c \uc0dd\uc131\uc790\ub97c \ud558\ub098\ub3c4 \uc124\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uae30\ubcf8\uc801\uc73c\ub85c \uc778\uc790\uac00 \uc5c6\ub294 \uae30\ubcf8 \uc0dd\uc131\uc790\ub97c \uc0dd\uc131\ud574\uc90d\ub2c8\ub2e4. \ub2e4\ub9cc \uae30\ubcf8 \uc0dd\uc131\uc790\uac00 \uc544\ub2cc \uc0dd\uc131\uc790\uac00 \ud558\ub098\ub77c\ub3c4 \uc788\uc744 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud574\uc8fc\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc774\ub54c\ub294 \uae30\ubcf8 \uc0dd\uc131\uc790\ub3c4 \uc0dd\uc131\ud574 \uc8fc\uc5b4\uc57c\ud569\ub2c8\ub2e4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"final, enum, interface, inner \ud074\ub798\uc2a4\uc5d0\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc800\uc7a5\ud560 \ud544\ub4dc\uc5d0 final\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548 \ub429\ub2c8\ub2e4."))),(0,a.kt)("h2",{id:"table"},"@Table"),(0,a.kt)("p",null,"@entity\uc5b4\ub178\ud14c\uc774\uc158\uacfc \ubc18\ub300\ub85c \uc5d4\ud2f0\ud2f0\uc640 \ub9e4\ud551\ud560 \u2018\ud14c\uc774\ube14\u2019\uc744 \uc9c0\uc815\ud574\uc90d\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"id"},"@Id"),(0,a.kt)("p",null,"DB\ub9c8\ub2e4 \uc81c\uacf5\ud558\ub294 \uae30\ubcf8 \ud0a4 \uc0dd\uc131 \ubc29\uc2dd\uc740 \ub2e4\ub985\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30\uc704\ud574 JPA\ub294 \uc5b4\ub5a4 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud588\uc744\uae4c\uc694 ?"),(0,a.kt)("p",null,"JPA\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ubcf8 \ud0a4 \uc0dd\uc131 \uc804\ub7b5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc9c1\uc811 \ud560\ub2f9 : \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \uc9c1\uc811 \ud560\ub2f9\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\uc790\ub3d9 \uc0dd\uc131 :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"IDENTITY : \uae30\ubcf8 \ud0a4 \uc0dd\uc131\uc744 \ub514\ube44\uc5d0 \uc704\uc784\ud569\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},"   \ud574\ub2f9 \uc0dd\uc131 \uc804\ub7b5\uc740 \uc5d4\ud2f0\ud2f0\ub97c \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ud574\uc57c \uc2dd\ubcc4\uc790\ub97c \uad6c\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c persist()\uba54\uc18c\ub4dc\uac00 \ud638\ucd9c\ub418\ub294 \uc989\uc2dc INSERT SQL\uc774 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc804\ub2ec\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc9c0\uc6d0\ud558\ub294 \uc4f0\uae30 \uc9c0\uc5f0\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SEQUENCE : \ub514\ube44 \uc2dc\ud000\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc11c \uae30\ubcf8 \ud0a4\ub97c \ud560\ub2f9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},"  sequence\ub294 \uc720\uc77c\ud55c \uac12\uc744 \uc21c\uc11c\ub300\ub85c \uc0dd\uc131\ud558\ub294 \ud2b9\ubcc4\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc624\ube0c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \uc774 \uc2dc\ud000\uc2a4\ub97c \ud65c\uc6a9\ud574 \uae30\ubcf8 \ud0a4\ub97c \uc0dd\uc131\ud558\uba70 \uc2dc\ud000\uc2a4\ub97c \uc9c0\uc6d0\ud558\ub294 \ub514\ube44\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TABLE : \ud0a4 \uc0dd\uc131 \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,a.kt)("p",{parentName:"li"},"  \ud0a4 \uc0dd\uc131 \uc804\uc6a9 \ud14c\uc774\ube14\uc744 \ud558\ub098 \ub9cc\ub4e4\uace0 \uc5ec\uae30\uc5d0 \uc774\ub984\uacfc \uac12\uc73c\ub85c \uc0ac\uc6a9\ud560 \uceec\ub7fc\uc744 \ub9cc\ub4e4\uc5b4 \ub514\ube44 \uc2dc\ud000\uc2a4\ub97c \ud749\ub0b4\ub0b4\ub294 \uc804\ub7b5\uc785\ub2c8\ub2e4. \uc774 \uc804\ub7b5\uc740 \ud14c\uc774\ube14\uc744 \uc0ac\uc6a9\ud558\ubbc0\ub85c \ubaa8\ub4e0 \ub514\ube44\uc5d0 \uc801\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AUTO : \uc0ac\uc6a9\ud558\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ubc29\uc5b8\uc5d0 \ub530\ub77c \uc704\uc758 \uc804\ub7b5 \uc911 \ud558\ub098\ub97c \uc790\ub3d9\uc73c\ub85c \uc120\ud0dd\ud558\uac8c\ub054 \ud558\ub294 \uc804\ub7b5\uc785\ub2c8\ub2e4. mysql\uc744 \uc0ac\uc6a9\ud558\uba74 IDENTITY\ub97c oraqle\uc744 \uc120\ud0dd\ud558\uba74 SEQUENCE\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))))),(0,a.kt)("p",null,"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\ub294 \uc5d4\ud2f0\ud2f0\ub97c \uc2dd\ubcc4\uc790 \uac12\uc73c\ub85c \uad6c\ubd84\ud558\ubbc0\ub85c \uc5d4\ud2f0\ud2f0\ub97c \uc601\uc18d \uc0c1\ud0dc\ub85c \ub9cc\ub4e4\uae30\uc704\ud574\uc11c\ub294 \uc2dd\ubcc4\uc790 \uac12\uc774 \ubc18\ub4dc\uc2dc \ud544\uc694\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc5d4\ud2f0\ud2f0-\ud544\ub4dc-\ud14c\uc774\ube14-\uceec\ub7fc-\ub9e4\ud551-\uc5b4\ub178\ud14c\uc774\uc158"},"\uc5d4\ud2f0\ud2f0 \ud544\ub4dc \u2194\xa0\ud14c\uc774\ube14 \uceec\ub7fc \ub9e4\ud551 \uc5b4\ub178\ud14c\uc774\uc158"),(0,a.kt)("p",null,"Column, Enumerated, Temporal, Lob, Transient,  Access"))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),y=a,d=s["".concat(o,".").concat(y)]||s[y]||m[y]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);