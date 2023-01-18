"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const l={sidebar_position:5,title:"How is the design pattern actually applied?"},o=void 0,i={unversionedId:"design-pattern/application",id:"design-pattern/application",title:"How is the design pattern actually applied?",description:"Review",source:"@site/docs/design-pattern/application.md",sourceDirName:"design-pattern",slug:"/design-pattern/application",permalink:"/Blog/docs/design-pattern/application",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design-pattern/application.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"How is the design pattern actually applied?"},sidebar:"tutorialSidebar",previous:{title:"Behavioral pattern",permalink:"/Blog/docs/design-pattern/behavirolpattern"},next:{title:"Spring Triangle",permalink:"/Blog/docs/spring/spring-triangle"}},p={},s=[{value:"Review",id:"review",level:2},{value:"Design Pattern in Spring",id:"design-pattern-in-spring",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"review"},"Review"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Creational patterns"),"\xa0: provide object creation mechanisms that increase flexibility and reuse of existing code.(\uac1d\uccb4\uc758\xa0",(0,r.kt)("strong",{parentName:"li"},"\uc0dd\uc131 \ubc29\uc2dd"),"\xa0\uacb0\uc815)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Structural patterns"),"\xa0explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.(\uac1d\uccb4\uac04\uc758\xa0",(0,r.kt)("strong",{parentName:"li"},"\uad00\uacc4"),"\ub97c \uc870\uc9c1)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Behavioral patterns"),"\xa0take care of effective communication and the assignment of responsibilities between objects.(\uac1d\uccb4\uc758\xa0",(0,r.kt)("strong",{parentName:"li"},"\ud589\uc704"),"\ub97c \uc870\uc9c1, \uad00\ub9ac, \uc5f0\ud569)")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creational pattern")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"provide object creation mechanisms that increase flexibility and reuse of existing code.")),(0,r.kt)("p",null,"abstract factory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub9ce\uc740 \uc218\uc758 \uc5f0\uad00\ub41c \uc11c\ube0c \ud074\ub798\uc2a4\ub97c \ud2b9\uc815 \uadf8\ub8f9\uc73c\ub85c \ubb36\uc5b4 \ud55c\ubc88\uc5d0 \uad50\uccb4\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5c8\ub2e4.")),(0,r.kt)("p",null,"factory method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c (\uc0dd\uc131\uc790 \ub300\uc2e0) \uc81c\uacf5\ud558\uc5ec \ucd08\uae30\ud654 \uacfc\uc815\uc744 \uc678\ubd80\uc5d0\uc11c \ubcf4\uc9c0 \ubabb\ud558\uac8c \uc228\uae30\uace0 \ubc18\ud658 \ud0c0\uc785\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95.")),(0,r.kt)("p",null,"builder"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ube4c\ub354 \ud074\ub798\uc2a4\ub294 \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\uc790\ub97c \ud1b5\ud574 \uc9c1\uc811 \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0, \ube4c\ub354\ub77c\ub294 \ub0b4\ubd80 \ud074\ub798\uc2a4\ub97c \ud1b5\ud574 \uac04\uc811\uc801\uc73c\ub85c \uc0dd\uc131\ud558\uac8c \ud558\ub294 \ud328\ud134\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Builder")," lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction\xa0code.")),(0,r.kt)("p",null,"singleton"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0a4\ubcf4\ub4dc \ub9ac\ub354, \ud504\ub9b0\ud130 \uc2a4\ud480\ub7ec, \uc810\uc218\uae30\ub85d\ud45c \ub4f1 \ud074\ub798\uc2a4\uc758 \uac1d\uccb4\ub97c \ud558\ub098\ub9cc \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud55c\ub2e4. \ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c \uc778\uc2a4\ud134\uc2a4\uac00 \ub2e8 \ud558\ub098\ubfd0\uc784\uc744 \ubcf4\uc7a5\ud558\ubbc0\ub85c, \ud504\ub85c\uadf8\ub7a8 \uc804\uc5ed\uc5d0\uc11c \ud574\ub2f9 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc14\ub85c \uc5bb\uc744 \uc218 \uc788\uace0, \ubd88\ud544\uc694\ud55c \uba54\ubaa8\ub9ac \ub0ad\ube44\ub97c \ucd5c\uc18c\ud654\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Singleton"),"\xa0lets you ensure that a class has only one instance, while providing a global access point to this\xa0instance.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Structural pattern")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.")),(0,r.kt)("p",null,"adaptor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adapter")," allows objects with incompatible interfaces to\xa0collaborate.")),(0,r.kt)("p",null,"composite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Composite lets you compose objects into tree structures and then work with these structures as if they were individual objects.")),(0,r.kt)("p",null,"facade"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc27d\uac8c \uc124\uba85\ud558\uc790\uba74 \ubcf5\uc7a1\ud55c \ud638\ucd9c\uacfc\uc815\uc744 \ub300\uc2e0 \ucc98\ub9ac\ud574\uc8fc\ub294 wrapper \uac1d\uccb4\ub97c \ub530\ub85c \ub9cc\ub4dc\ub294 \uac83. \ud568\uc218 \ud638\ucd9c \ube44\uc6a9\uc774 \uc870\uae08 \ub4e4\uc5b4\uac00\ub098 \ud6e8\uc52c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("p",null,"decorator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Decorator"),"\xa0lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the\xa0behaviors.")),(0,r.kt)("p",null,"proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uc0b0\uc744 \ud560 \ub54c \uac1d\uccb4 \uc2a4\uc2a4\ub85c\uac00 \uc9c1\uc811 \ucc98\ub9ac\ud558\uc9c0 \uc54a\uace0 \uc911\uac04\uc5d0 \ub2e4\ub978 '\uc228\uaca8\uc9c4' \uac1d\uccb4\ub97c \ud1b5\ud574 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95.(\uac1d\uccb4\ub97c \uac10\uc2f8\ub294 \uac1d\uccb4)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy")," lets you provide a substitute or placeholder for another object.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Behavioral pattern")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"take care of effective communication and the assignment of responsibilities between objects.")),(0,r.kt)("p",null,"command"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Command"),"\xa0turns a request into a stand-alone object that contains all information about the request.")),(0,r.kt)("p",null,"observer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Observer")," lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they\u2019re\xa0observing.")),(0,r.kt)("p",null,"templete method"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc804\uccb4\uc801\uc778 \ub808\uc774\uc544\uc6c3\uc744 \ud1b5\uc77c\uc2dc\ud0a4\uc9c0\ub9cc \uc0c1\uc18d\ubc1b\uc740 \ud074\ub798\uc2a4\uac00 \uc720\uc5f0\uc131\uc744 \uac00\uc9c8 \uc218 \uc788\uac8c \ub9cc\ub4dc\ub294 \ud328\ud134.")),(0,r.kt)("p",null,"Iterator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc9c0\ud5a5 \uc5b8\uc5b4\uc5d0\uc11c \uac00\uc7a5 \uc811\ud558\uae30 \uc26c\uc6b4 \ud328\ud134."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Iterator")," lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree,\xa0etc.).")),(0,r.kt)("p",null,"CoR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain of Responsibility")," lets you pass requests along a chain of handlers.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"design-pattern-in-spring"},"Design Pattern in Spring"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Singleton pattern")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"spring\uc740 \uac1d\uccb4 \uc0dd\uc131(bean)\uc2dc default\uac00 singleton\uc774\ub2e4. \uc989, \uc5ec\ub7ec\uac1c\uc758 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc600\uc744 \ub54c, \uc5ec\ub7ec \uac1d\uccb4\ub4e4\uc740 \ub3d9\uc77c\ud55c \uc778\uc2a4\ud134\uc2a4\ub97c \uac00\ub9ac\ud0a8\ub2e4.\n\n\uac1d\uccb4\ub4e4\uc758 \ubc94\uc704\ub97c \uc81c\ud55c\ud558\uac70\ub098 \ubd84\ub9ac \uc2dc\ud0a4\uae30 \uc704\ud574\uc11c\ub294 @Scope \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud55c\ub2e4.\n\nFor example, we can create two controllers within a single application context and inject a bean of the same type into each.\n\n![\uc2a4\ud06c\ub9b0\uc0f7 2022-01-12 \uc624\ud6c4 8.44.58.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.44.58.png)\n\n![\uc2a4\ud06c\ub9b0\uc0f7 2022-01-12 \uc624\ud6c4 8.45.10.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.45.10.png)\n\nWe then start this application and perform a GET on\xa0*/count*\xa0and\xa0*/book/1:*\n\n![\uc2a4\ud06c\ub9b0\uc0f7 2022-01-12 \uc624\ud6c4 8.46.53.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.46.53.png)\n\n![\uc2a4\ud06c\ub9b0\uc0f7 2022-01-12 \uc624\ud6c4 8.45.45.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.45.45.png)\n\nThe\xa0*BookRepository*\xa0object IDs in the\xa0*LibraryController*\xa0and\xa0*BookController*\xa0are the same, proving that Spring injected the same bean into both controllers.\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Proxy pattern")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\uc2a4\ud504\ub9c1\uc758 AOP\ub294 \ub7f0\ud0c0\uc784\uc2dc, \ub3d9\uc801\uc73c\ub85c \uac1d\uccb4\ub4e4\uc758 \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uc5b4 \uc6d0\ub798 \uac1d\uccb4\uc5d0 \ub300\ud55c \uc811\uadfc\uc744 \uc81c\uc5b4\ud558\uace0 \uc2f6\uac70\ub098, \ubd80\uac00 \uae30\ub2a5\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uac8c\ud558\uace0 \uae30\ub2a5\ubcc4\ub85c \ud074\ub798\uc2a4\ub97c \ubaa8\ub4c8(aspect)\ud654\ud55c\ub2e4.\n\nIn Spring, beans are proxied to control access to the underlying bean. We see this approach when using transactions.\n\n![\uc2a4\ud06c\ub9b0\uc0f7 2022-01-12 \uc624\ud6c4 8.39.20.png](%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%89%E1%85%A5%E1%86%BC%E1%84%80%E1%85%B2%20863a83afff774042961f232f88296d38/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-01-12_%EC%98%A4%ED%9B%84_8.39.20.png)\n\nIn our\xa0*BookManager*\xa0class, we annotate the\xa0*create*\xa0method with the\xa0*@Transactional*\xa0annotation. This annotation instructs Spring to atomically execute our\xa0*create*\xa0method. Without a proxy, Spring wouldn't be able to control access to our\xa0*BookRepository*\xa0bean and ensure its transactional consistency.\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Template method pattern"),(0,r.kt)("p",{parentName:"li"},"In many frameworks, a significant portion of the code is boilerplate code."),(0,r.kt)("p",{parentName:"li"},"For example, when executing a query on a database, the same series of steps must be completed:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Establish a connection"),(0,r.kt)("li",{parentName:"ol"},"Execute query"),(0,r.kt)("li",{parentName:"ol"},"Perform cleanup"),(0,r.kt)("li",{parentName:"ol"},"Close the connection")),(0,r.kt)("p",{parentName:"li"},"These steps are an ideal scenario for the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-template-method-pattern"},"template method pattern"),"."),(0,r.kt)("p",{parentName:"li"},"JDBC\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 jdbc template, jpa\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc0ac\uc6a9\ub418\ub294 jpa template\ub4f1\uc740 \ubaa8\ub450 template metehod pattern\ub85c \uad6c\ud604\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},"\ub530\ub77c\uc11c \ud575\uc2ec \ub85c\uc9c1\uc740 \uc0c1\uc704 \ud074\ub798\uc2a4\uc5d0 \uad6c\ud604\uc774 \ub418\uc5b4\uc788\uc73c\uba70, \uad6c\ud604\uccb4\uc5d0 \ub530\ub77c db\uc758 \uc885\ub958, \ucffc\ub9ac\ubb38\ubc95\ub4f1\uc744 \ub2e4\ub974\uac8c \ud558\uc5ec \uc801\uc6a9\ub420 \uac83\uc784."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\uae68\ub2ec\uc74c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OOP\ub2e8\uc810\uc778 \uc124\uacc4\uc2dc \uc624\ub79c\uc2dc\uac04\uc774 \uac78\ub9ac\uba70 \uc218\uc815\uc774 \ud544\uc694\ud560 \ub54c \ub9ac\uc2a4\ud06c\uac00 \ud06c\ub2e4."),(0,r.kt)("p",{parentName:"li"},"\u2192 \uc774\uac83\uc744 \ud574\uacb0\ud558\uae30\uc704\ud574 \ub514\uc790\uc778 \ud328\ud134\uc740 flexibility, reuse, efficient\ub4f1\uc744 \uac15\uc870."))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/gyoogle/tech-interview-for-developer"},"https://github.com/gyoogle/tech-interview-for-developer")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://refactoring.guru/"},"Refactoring and Design Patterns")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-framework-design-patterns"},"Design Patterns in the Spring Framework | Baeldung")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://namu.wiki/w/%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%8C%A8%ED%84%B4"})))))}c.isMDXComponent=!0}}]);