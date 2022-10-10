"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[9541],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>c});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},k=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),s=o(l),c=n,d=s["".concat(p,".").concat(c)]||s[c]||m[c]||a;return l?r.createElement(d,i(i({ref:t},k),{},{components:l})):r.createElement(d,i({ref:t},k))}));function c(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}s.displayName="MDXCreateElement"},2280:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=l(3117),n=(l(7294),l(3905));const a={sidebar_position:3,title:"Spring-Basic"},i="<span style={{color: '#4fddbf'}}>\uc2a4\ud504\ub9c1 \uc785\ubb38 - \ucf54\ub4dc\ub85c \ubc30\uc6b0\ub294 \uc2a4\ud504\ub9c1 \ubd80\ud2b8, \uc6f9 MVC, DB \uc811\uadfc \uae30\uc220</span>",u={unversionedId:"spring/lecture-1",id:"spring/lecture-1",title:"Spring-Basic",description:"\ubcf8 \ub0b4\uc6a9\uc740 \uae40\uc601\ud55c\ub2d8\uc758 \uc778\ud504\ub7f0 \uac15\uc758 \uc911 \uae00 \uc81c\ubaa9\uc758 \uac15\uc758\ub97c \ubcf4\uace0 \uc815\ub9ac\ud55c \uae00\uc785\ub2c8\ub2e4. (\uc815\ub9ac\uae4c\uc9c0\ub294 \uc544\ub2c8\uace0 \uba54\ubaa8?)",source:"@site/docs/spring/lecture-1.mdx",sourceDirName:"spring",slug:"/spring/lecture-1",permalink:"/Blog/docs/spring/lecture-1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/spring/lecture-1.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Spring-Basic"},sidebar:"tutorialSidebar",previous:{title:"Lombok",permalink:"/Blog/docs/spring/lombok"},next:{title:"JPA Introduce",permalink:"/Blog/docs/JPA/introduce"}},p={},o=[{value:"gradle\uc740 \uc758\uc874\uad00\uacc4\uac00 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud568\uaed8 \ub2e4\uc6b4\ub85c\ub4dc \ud55c\ub2e4.",id:"gradle\uc740-\uc758\uc874\uad00\uacc4\uac00-\uc788\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\ud568\uaed8-\ub2e4\uc6b4\ub85c\ub4dc-\ud55c\ub2e4",level:2},{value:"\uc2a4\ud504\ub9c1 \ubd80\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac",id:"\uc2a4\ud504\ub9c1-\ubd80\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9ac",level:2},{value:"View",id:"view",level:2},{value:"Build",id:"build",level:2},{value:"\uc2a4\ud504\ub9c1 \uc6f9 \uac1c\ubc1c \uae30\ucd08",id:"\uc2a4\ud504\ub9c1-\uc6f9-\uac1c\ubc1c-\uae30\ucd08",level:2},{value:"\uc2e4\uc2b5",id:"\uc2e4\uc2b5",level:2},{value:"AOP",id:"aop",level:3}],k={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\uc2a4\ud504\ub9c1-\uc785\ubb38---\ucf54\ub4dc\ub85c-\ubc30\uc6b0\ub294-\uc2a4\ud504\ub9c1-\ubd80\ud2b8-\uc6f9-mvc-db-\uc811\uadfc-\uae30\uc220"},(0,n.kt)("span",{style:{color:"#4fddbf"}},"\uc2a4\ud504\ub9c1 \uc785\ubb38 - \ucf54\ub4dc\ub85c \ubc30\uc6b0\ub294 \uc2a4\ud504\ub9c1 \ubd80\ud2b8, \uc6f9 MVC, DB \uc811\uadfc \uae30\uc220")),(0,n.kt)("p",null,"\ubcf8 \ub0b4\uc6a9\uc740 \uae40\uc601\ud55c\ub2d8\uc758 \uc778\ud504\ub7f0 \uac15\uc758 \uc911 \uae00 \uc81c\ubaa9\uc758 \uac15\uc758\ub97c \ubcf4\uace0 \uc815\ub9ac\ud55c \uae00\uc785\ub2c8\ub2e4. (\uc815\ub9ac\uae4c\uc9c0\ub294 \uc544\ub2c8\uace0 \uba54\ubaa8?)"),(0,n.kt)("h2",{id:"gradle\uc740-\uc758\uc874\uad00\uacc4\uac00-\uc788\ub294-\ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c-\ud568\uaed8-\ub2e4\uc6b4\ub85c\ub4dc-\ud55c\ub2e4"},"gradle\uc740 \uc758\uc874\uad00\uacc4\uac00 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud568\uaed8 \ub2e4\uc6b4\ub85c\ub4dc \ud55c\ub2e4."),(0,n.kt)("p",null,"+\ube4c\ub4dc, \ub77c\uc774\ube0c\ub7ec\ub9ac\uad00\ub9ac"),(0,n.kt)("p",null,"\uc544\ub798 \ucea1\uccd0\ud654\uba74\uc744 \ubcf4\uba74 \uc2a4\ud504\ub9c1 \uc774\ub2c8\uc15c\ub77c\uc774\uc838\ub97c \ud1b5\ud574 \ud504\ub85c\uc81d\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c, thymeleaf\uc640 web \ub77c\uc774\ube0c\ub7ec\ub9ac\ub9cc \ucd94\uac00\ud574\uc11c \uc0dd\uc131\ud588\uc9c0\ub9cc \ub77c\uc774\ube0c\ub7ec\ub9ac \uc758\uc874 \uad00\uacc4\ub97c \ubcf4\uba74 \uc5ec\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc5f0\uacb0\ub418\uc5b4\uc788\uace0 gradle\uc774 \uc758\uc874\uad00\uacc4\uac00 \uc788\ub294 \ubaa8\ub4e0 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc744 \uac19\uc774 \uac00\uc838\uc640\uc8fc\ub294 \uac83\uc744 \uc54c \uc218 \uc788\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"spring-basic-1.png",src:l(6441).Z,width:"1084",height:"1382"})),(0,n.kt)("h2",{id:"\uc2a4\ud504\ub9c1-\ubd80\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9ac"},"\uc2a4\ud504\ub9c1 \ubd80\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"spring-boot-starter-web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spring-boot-starter-tomcat"),(0,n.kt)("li",{parentName:"ul"},"spring-webmvc: \uc2a4\ud504\ub9c1 \uc6f9 MVC"))),(0,n.kt)("li",{parentName:"ul"},"spring-boot-starter(\uacf5\ud1b5): \uc2a4\ud504\ub9c1\ubd80\ud2b8 + \uc2a4\ud504\ub9c1 \ucf54\uc5b4 + \ub85c\uae45",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spring-boot",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spring-core"))),(0,n.kt)("li",{parentName:"ul"},"spring-boot-starter-logging",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"logback, slf4j"))))),(0,n.kt)("li",{parentName:"ul"},"spring-boot-starter-test",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"junit : \ud14c\uc2a4\ud2b8 \ud504\ub808\uc784\uc6cc\ud06c"),(0,n.kt)("li",{parentName:"ul"},"mockito : mock \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,n.kt)("li",{parentName:"ul"},"assertj"),(0,n.kt)("li",{parentName:"ul"},"spring-test : \uc2a4\ud504\ub9c1 \ud1b5\ud569 \ud14c\uc2a4\ud2b8 \uc9c0\uc6d0")))),(0,n.kt)("h2",{id:"view"},"View"),(0,n.kt)("p",null,"thymeleaf \uc0ac\uc6a9."),(0,n.kt)("p",null,"controller\uc5d0\uc11c html \ud30c\uc77c\uba85\uc744 \ubb38\uc790\uc5f4\ub85c \ubc18\ud658\ud558\uba74 \ubdf0 \ub9ac\uc878\ubc84(viewResolver)\uac00 \ud654\uba74\uc744 \ucc3e\uc544\uc11c \ucc98\ub9ac\ud55c\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubb38\uc790\uc5f4 \uc55e \ub4a4\uc5d0 resource:templates/ \uc640 .html\uc744 \ucd94\uac00 \ud6c4 \ub9e4\ud551.")),(0,n.kt)("h2",{id:"build"},"Build"),(0,n.kt)("p",null,"\uc778\ud154\ub9ac\uc81c\uc774\uc5d0\uc11c\uac00 \uc544\ub2cc \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud574\ubcf4\uae30."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"./gradlew build\ub85c \ud504\ub85c\uc81d\ud2b8\uc758 jar \ud30c\uc77c \uc0dd\uc131( ./build/libs/ )"),(0,n.kt)("li",{parentName:"ul"},"java -jar {\ud30c\uc77c\uba85}\uc744 \ud558\uba74 \uc2e4\ud589"),(0,n.kt)("li",{parentName:"ul"},"./gradlew clean \uc73c\ub85c build \ud30c\uc77c \uc81c\uac70")),(0,n.kt)("h2",{id:"\uc2a4\ud504\ub9c1-\uc6f9-\uac1c\ubc1c-\uae30\ucd08"},"\uc2a4\ud504\ub9c1 \uc6f9 \uac1c\ubc1c \uae30\ucd08"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc815\uc801 \ucee8\ud150\uce20",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud504\ub9c1 \ubd80\ud2b8\ub294 \uc815\uc801 \ucee8\ud150\uce20 \uc81c\uacf5 \uae30\ub2a5(web server)\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"/resources/static \ud3f4\ub354\uc5d0 \uc815\uc801 \ucee8\ud150\uce20\ub97c \ub9cc\ub4e4\uba74 \uc11c\ubc84\uc5d0\uc11c \uc804\ub2ec\ud574\uc90c."),(0,n.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \ud560 \uc218\ub294 \uc5c6\ub2e4. \uadf8\ub300\ub85c \ubc18\ud658\ud55c\ub2e4."))),(0,n.kt)("li",{parentName:"ul"},"MVC\uc640 \ud15c\ud50c\ub9bf \uc5d4\uc9c4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uacfc\uac70\uc5d0\ub294 JSP\ub85c view, \ub514\ube44\uc811\uadfc, \ub85c\uc9c1 \ucc98\ub9ac\ub97c \ubaa8\ub450 \ud55c\uacf3\uc5d0\uc11c \ucc98\ub9ac\ud558\uae30\ub3c4 \ud568."),(0,n.kt)("li",{parentName:"ul"},"MVC \ud328\ud134\uc740 \uad00\uc2ec\uc0ac\ub97c \ubd84\ub9ac\ud558\ub294 \uac83."),(0,n.kt)("li",{parentName:"ul"},"ViewResolver\uac00 \uacbd\ub85c\ub97c \ubd99\uc774\uace0 html\ud398\uc774\uc9c0\ub97c \ucc3e\uace0, html\ub85c \ubcc0\ud658\uc744 \uc2dc\ucf1c\uc11c \ubc18\ud658."))),(0,n.kt)("li",{parentName:"ul"},"API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ViewResolver \ub300\uc2e0 JsonConverter, SpringConverter\uac00 \ub3d9\uc791.")))),(0,n.kt)("h2",{id:"\uc2e4\uc2b5"},"\uc2e4\uc2b5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucee8\ud2b8\ub864\ub7ec : \uc6f9 MVC\uc758 \ucee8\ud2b8\ub864\ub7ec \uc5ed\ud560"),(0,n.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 : \ud575\uc2ec \ube44\uc9c0\ub2c8\uc2a4 \ub85c\uc9c1 \uad6c\ud604"),(0,n.kt)("li",{parentName:"ul"},"\ub808\ud3ec\uc9c0\ud1a0\ub9ac : \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc811\uadfc, \ub3c4\uba54\uc778 \uac1d\uccb4\ub97c DB\uc5d0 \uc800\uc7a5\ud558\uace0 \uad00\ub9ac"),(0,n.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 : \ube44\uc988\ub2c8\uc2a4 \ub3c4\uba54\uc778 \uac1d\uccb4")),(0,n.kt)("p",null,"repository\ub294 DB\ub97c \ub2e4\ub8e8\ub294 \ubaa9\uc801\uc758 \uc758\ubbf8."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc608\ub97c\ub4e4\uc5b4 \uc870\ud68c, \uc0dd\uc131, \uc218\uc815, \uc0ad\uc81c.")),(0,n.kt)("p",null,"service\uc758 \uba54\uc18c\ub4dc\ub294 \uc880 \ub354 \ube44\uc988\ub2c8\uc2a4\uc801\uc778 \uc758\ubbf8."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud68c\uc6d0\uac00\uc785, \uc804\uccb4 \ud68c\uc6d0 \uc870\ud68c \ub4f1\ub4f1"),(0,n.kt)("li",{parentName:"ul"},"\ub530\ub77c\uc11c service\uc758 \uba54\uc18c\ub4dc \uba85\uc740 \uc880 \ub354 \ube44\uc988\ub2c8\uc2a4\uc801\uc778 \ub124\uc774\ubc0d\uc744 \ud574\uc918\uc57c  \uc88b\ub2e4. \uadf8\ub798\uc57c \uc774 \ud6c4\uc5d0 \ucf54\ub4dc\ub97c \ucc3e\uc544 \ub4e4\uc5b4\uac08 \ub54c \ud3b8\ub9ac.")),(0,n.kt)("p",null,"DI (Dependency Injection)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc678\ubd80\uc5d0\uc11c \uc758\uc874\uc131\uc744 \uc8fc\uc785\ud574\uc900\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc27d\uac8c \uc598\uae30\ud558\uba74 \uc678\ubd80\uc5d0\uc11c \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc11c \ub123\uc5b4\uc900\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc608\uc81c\uc5d0\uc11c\ub294 \ud55c \uac1d\uccb4\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac1d\uccb4\uac00 \uc678\ubd80\uc758 \ub2e4\ub978 \uac1d\uccb4\uc5d0\uc11c \ub3d9\uc77c\ud558\uac8c \uc0ac\uc6a9\ub420 \ub54c, DI\ub97c \ud574\uc8fc\uc9c0 \uc54a\uc73c\uba74 \uc678\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uac1d\uccb4\uc640 \uc678\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uac1d\uccb4 \ub0b4\ubd80\uc758 \uac1d\uccb4\uac00 \ub3d9\uc77c\ud55c \uac83\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \ub530\ub85c \uc0dd\uc131\uc774 \ub428. \uc678\ubd80\uc5d0\uc11c \uc5b4\ucc28\ud53c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0dd\uc131\ud558\uace0 \ub3d9\uc77c\ud55c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac1d\uccb4\uc5d0 \ub300\ud574\uc11c\ub294 \uc0dd\uc131\uc790\ub97c \ud1b5\ud574 \uac1d\uccb4\ub97c \ub123\uc5b4\uc90c.")),(0,n.kt)("p",null,"DI \ubc29\ubc95"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud544\ub4dc \uc8fc\uc785"),(0,n.kt)("li",{parentName:"ul"},"\uc138\ud130 \uc8fc\uc785"),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc790 \uc8fc\uc785 (\uad8c\uc7a5)")),(0,n.kt)("p",null,"\uc758\uc874\uad00\uacc4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@Component\uc73c\ub85c \ud574\ub2f9 \ud074\ub798\uc2a4 \uac1d\uccb4\ub97c \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc5d0\uc11c \uad00\ub9ac\ud558\ub3c4\ub85d \ud558\uace0, \uc0dd\uc131\uc790\uc5d0 @Autowired\ub97c \ub2ec\uc544\uc8fc\uba74 \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \uac1d\uccb4\uac00 \uc0dd\uc131\ub420 \ub54c \ud574\ub2f9 \uc0dd\uc131\uc790\ub85c \uac1d\uccb4\ub97c \ub123\uc5b4\uc900\ub2e4(\uc0dd\uc131\ud574\uc8fc\ub294 \ub300\uc2e0\uc5d0).(DI)","  \u2192 \ud574\ub2f9 \uac1d\uccb4\ub97c \uc5ec\ub7ec \ud074\ub798\uc2a4\uc5d0\uc11c \uc0ac\uc6a9\ud558\uba74 \uad73\uc774 \uadf8 \ub54c \uadf8 \ub54c \ub9cc\ub4e4\uc5b4\uc904 \ud544\uc694\uc5c6\uc774 \ub3d9\uc77c\ud55c \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud558\uac8c \ub428.\n")),(0,n.kt)("p",null,"\ube48 \ub4f1\ub85d \ubc29\ubc95"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\uce94"),(0,n.kt)("p",{parentName:"li"},"\u2192 \uc704\uc758 \uc758\uc874\uad00\uacc4\uc5d0\uc11c \ub9d0\ud55c @Component \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc790\ubc14 \ucf54\ub4dc\ub85c \uc9c1\uc811 \ube48\ub4f1\ub85d"))),(0,n.kt)("p",null,"H2 \uc124\uce58\ud558\uace0 \uc6f9\ucf58\uc194\ub85c \uc2e4\ud589\uc2dc\ucf1c\ubcf4\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc601\ud55c\ub2d8\uc740 DB \uad6c\ucd95\ud558\uac70\ub098 \ud560 \ub54c \uc0ac\uc6a9\ud55c \ucffc\ub9ac\ubb38\ub4e4\uc744 \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub530\ub85c \ud3f4\ub354\ub97c \ud558\ub098 \ub9cc\ub4e4\uc5b4 \uad00\ub9ac\ud55c\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"django\uc758 migrate \ud3f4\ub354\uc640 \uac19\uc774 DB\ud604\uc7ac \uc0c1\ud0dc \ud30c\uc545 \ubc0f \uc774\ub825 \uad00\ub9ac \ub290\ub08c\uc73c\ub85c \uc0ac\uc6a9\ud558\uc2dc\ub294 \ub4ef.")))),(0,n.kt)("p",null,"\uc21c\uc218 JDBC\ub97c \uc774\uc6a9\ud574\uc11c \ud504\ub85c\uc81d\ud2b8\uc640 DB\ub97c \uc5f0\uacb0\ud574\ubcf4\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"JDBC\uc640 h2 \uc758\uc874\uc131 \uc8fc\uc785 \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"implementation 'org.springframework.boot:spring-boot-starter-jdbc'\nruntimeOnly 'com.h2database:h2'\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uc9c0\ud5a5\uc758 \ub2e4\ud615\uc131\uc744 \uc774\uc6a9\ud574\uc11c MemberRepository\ub97c \uad6c\ud604\ud55c \ub2e4\ub978 Repository\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uace0, Config\uc5d0 \uac1d\uccb4\ub9cc \ud574\ub2f9 \uac1d\uccb4\ub85c \uc218\uc815\ud558\uba74 \ub2e4\ub978 \uc218\uc815\uc774 \ud544\uc694\uc5c6\uac8c \ub41c\ub2e4. SOLID\uc758 \uac1c\ubc29-\ud3d0\uc1c4\uc6d0\uce59\uc5d0\ub3c4 \ubd80\ud569\ud558\uac8c \uad6c\ud604")),(0,n.kt)("p",null,"JDBC\ub97c \uc801\uc6a9\ud55c DB \uc811\uadfc \ub85c\uc9c1\uacfc \uad00\ub828\ud55c \ud14c\uc2a4\ud2b8 \ucf54\ub4dc \uc791\uc131\ud558\uae30."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test\ucf54\ub4dc\uc5d0\uc11c \ube48\uc8fc\uc785\uc740 \uac00\uc7a5 \ud3b8\ud55c \ubc29\ubc95, \ubcf4\ud1b5 \ud544\ub4dc\uc8fc\uc785\uc744 \uc0ac\uc6a9\ud55c\ub2e4. \ub9e8 \ub05d\ub2e8\uc774\uba70 \ud14c\uc2a4\ud2b8 \ucf54\ub4dc\uc5d0\uc11c \uc8fc\uc785\ud55c \ube48\ub4e4\uc774 \ub2e4\ub978\ub370\uc11c \uc0ac\uc6a9\ub418\uac70\ub098 \ud558\ub294 \uac83\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0."),(0,n.kt)("li",{parentName:"ul"},"@SpringBootTest : \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\uc640 \ud14c\uc2a4\ud2b8\ub97c \ud568\uaed8 \uc2e4\ud589\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"@Transactional : \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4\uc5d0 \uc774 \uc560\ub178\ud14c\uc774\uc158\uc774 \uc788\uc73c\uba74, \ud14c\uc2a4\ud2b8 \uc2dc\uc791 \uc804\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc2dc\uc791\ud558\uace0,\n\ud14c\uc2a4\ud2b8 \uc644\ub8cc \ud6c4\uc5d0 \ud56d\uc0c1 \ub864\ubc31\ud55c\ub2e4. \uc774\ub807\uac8c \ud558\uba74 DB\uc5d0 \ub370\uc774\ud130\uac00 \ub0a8\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ub2e4\uc74c \ud14c\uc2a4\ud2b8\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0\n\uc54a\ub294\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8\uc640 \ud1b5\ud569 \ud14c\uc2a4\ud2b8. \uc21c\uc218\ud55c \ub2e8\uc704 \ud14c\uc2a4\ud2b8\uac00 \ud6e8\uc52c \ub354 \uc88b\uc740 \ud14c\uc2a4\ud2b8\uc77c \ud655\ub960\uc774 \ub192\ub2e4.(\uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\ub97c \ub744\uc6b0\uc9c0 \uc54a\uace0 \ud14c\uc2a4\ud2b8)")),(0,n.kt)("p",null,"Spring JDBC Template \uc0ac\uc6a9\ud574\ubcf4\uae30."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \uc21c\uc218 JDBC\ub97c \uc0ac\uc6a9\ud574\ubcfc \ub54c\uc640 \uadf8\ub300\ub85c."),(0,n.kt)("li",{parentName:"ul"},"JDBC\uc5d0\uc11c \ubc18\ubcf5\ub418\ub294 \ucf54\ub4dc\ub4e4\uc744 \ub9ce\uc774 \uc81c\uac70\ud574\uc90c. SQL\ubb38\uc740 \ub611\uac19\uc774 \uc791\uc131 \ud544\uc694."),(0,n.kt)("li",{parentName:"ul"},"JDBC Template\uc740 \uc2e4\ubb34\uc5d0\uc11c\ub3c4 \ub9ce\uc774 \uc500.")),(0,n.kt)("p",null,"JPA(Hibernate) \uc0ac\uc6a9\ud574\ubcf4\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQL\ubb38 \uc870\ucc28 \uc791\uc131\uc548\ud574\ub3c4 \ub41c\ub2e4!")),(0,n.kt)("p",null,"Spring Data JPA \uc0ac\uc6a9\ud574\ubcf4\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\ub9cc \ub9cc\ub4e4\uba74 \ub41c\ub2e4!!"),(0,n.kt)("li",{parentName:"ul"},"\uc2a4\ud504\ub9c1 Data JPA\uac00 \ud574\ub2f9 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcf4\uace0 \uad6c\ud604\uccb4\ub97c \uc790\ub3d9\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc11c \ube48 \ub4f1\ub85d\ud574\uc8fc\uae30 \ub54c\ubb38."),(0,n.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ucffc\ub9ac\uc5d0\ub294 \uc81c\ud55c\uc774 \uc788\uae30\uc5d0 \ub3d9\uc801 \ucffc\ub9ac \uc0ac\uc6a9\uc2dc Query DSL \ub9ce\uc774 \uc0ac\uc6a9.")),(0,n.kt)("h3",{id:"aop"},"AOP"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uad00\uc810 \uc9c0\ud5a5 \ud504\ub85c\uadf8\ub798\ubc0d - \uae30\ub2a5\uc744 \uc911\uc2ec\uc73c\ub85c \ubc14\ub77c\ubcf4\uace0 \uacf5\ud1b5 \uad00\uc2ec \uc0ac\ud56d\ub4e4\uc740 \ubcc4\ub3c4\ub85c \ubd84\ub9ac\ud558\ub294 \uac83."),(0,n.kt)("li",{parentName:"ul"},"\uacf5\ud1b5 \uad00\uc2ec \uc0ac\ud56d\uacfc \ud575\uc2ec \uad00\uc2ec \uc0ac\ud56d\uc744 \ubd84\ub9ac.")))}m.isMDXComponent=!0},6441:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/spring-basic-1-4b477c73a0b178d8eca233a4d479cb79.png"}}]);