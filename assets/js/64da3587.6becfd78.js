"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[4480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const l={sidebar_position:3,title:"Exception Handling"},i="<span style={{color: '#4fddbf'}}>\uc608\uc678\ucc98\ub9ac (Exception Handling)</span>",o={unversionedId:"java/exception",id:"java/exception",title:"Exception Handling",description:"\uc608\uc678 \ucc98\ub9ac\ub780 ?",source:"@site/docs/java/exception.mdx",sourceDirName:"java",slug:"/java/exception",permalink:"/Blog/docs/java/exception",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/java/exception.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Exception Handling"},sidebar:"tutorialSidebar",previous:{title:"Inheritance, polimorphism",permalink:"/Blog/docs/java/inheritance"},next:{title:"Static",permalink:"/Blog/docs/java/static"}},p={},c=[{value:"\uc608\uc678 \ucc98\ub9ac\ub780 ?",id:"\uc608\uc678-\ucc98\ub9ac\ub780-",level:2},{value:"\uc608\uc678\ucc98\ub9ac\ud558\uae30",id:"\uc608\uc678\ucc98\ub9ac\ud558\uae30",level:2},{value:"\uc608\uc678 \ubc1c\uc0dd\uc2dc\ud0a4\uae30",id:"\uc608\uc678-\ubc1c\uc0dd\uc2dc\ud0a4\uae30",level:2},{value:"\uc608\uc678 \ub418\ub358\uc9c0\uae30 (exception re-throwing)",id:"\uc608\uc678-\ub418\ub358\uc9c0\uae30-exception-re-throwing",level:2},{value:"\uc0ac\uc6a9\uc790\uc815\uc758 \uc608\uc678",id:"\uc0ac\uc6a9\uc790\uc815\uc758-\uc608\uc678",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\uc608\uc678\ucc98\ub9ac-exception-handling"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"\uc608\uc678\ucc98\ub9ac (Exception Handling)")),(0,a.kt)("h2",{id:"\uc608\uc678-\ucc98\ub9ac\ub780-"},"\uc608\uc678 \ucc98\ub9ac\ub780 ?"),(0,a.kt)("p",null,"\uc608\uc678\ucc98\ub9ac\ub780, \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc2dc \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc608\uae30\uce58 \ubabb\ud55c \uc608\uc678\uc758 \ubc1c\uc0dd\uc5d0 \ub300\ube44\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc608\uc678\ucc98\ub9ac\ub97c \ud568\uc73c\ub85c\uc368 \ud504\ub85c\uadf8\ub7a8\uc758 \ube44\uc815\uc0c1\uc801\uc778 \uc885\ub8cc\ub97c \ub9c9\uace0, \uc815\uc0c1\uc801\uc778 \uc2e4\ud589\uc0c1\ud0dc\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\ub3c4\ub85d\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc5d0\ub7ec ( Error )"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \uc5d0\ub7ec - \ucef4\ud30c\uc77c \uc2dc\uc5d0 \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec"),(0,a.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784 \uc5d0\ub7ec - \ub7f0\ud0c0\uc784(\uc2e4\ud589) \uc2dc\uc5d0 \ubc1c\uc0dd\ud558\ub294 \uc5d0\ub7ec"),(0,a.kt)("li",{parentName:"ul"},"\ub17c\ub9ac\uc801 \uc5d0\ub7ec - \uc2e4\ud589\uc740 \ub418\uc9c0\ub9cc, \uc758\ub3c4\uc640 \ub2e4\ub974\uac8c \ub3d9\uc791\ud558\ub294 \uac83")),(0,a.kt)("p",null,"\uc790\ubc14\uc5d0\uc11c\ub294 \uc2e4\ud589 \uc2dc\uc5d0 \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \ud504\ub85c\uadf8\ub7a8 \uc624\ub958\ub97c \uc5d0\ub7ec(Error)\uc640 \uc608\uc678(Exception) \ub450 \uac00\uc9c0\ub85c \uad6c\ubd84\ud569\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5d0\ub7ec - \ubc1c\uc0dd\ud558\uba74 \ubcf5\uad6c\ud560 \uc218 \uc5c6\ub294 \uc2ec\uac01\ud55c \uc624\ub958, \ube44\uc815\uc0c1\uc801 \uc885\ub8cc\ub97c \ub9c9\uc744 \uc218 \uc5c6\uc74c."),(0,a.kt)("li",{parentName:"ul"},"\uc608\uc678 - \ubc1c\uc0dd\ud558\ub354\ub77c\ub3c4 \uc218\uc2b5\ub420 \uc218 \uc788\ub294 \ube44\uad50\uc801 \ub35c \uc2ec\uac01\ud55c \uac83, \uc801\uc808\ud55c \ucf54\ub4dc\ub97c \ubbf8\ub9ac \uc791\uc131\ud568\uc73c\ub85c\uc368 \ube44\uc815\uc0c1\uc801\uc778 \uc885\ub8cc \ub9c9\uc744 \uc218 \uc788\uc74c.")),(0,a.kt)("p",null,"\uc790\ubc14\uc5d0\uc11c\ub294 \uc624\ub958\uc640 \uc608\uc678\ub97c \ud074\ub798\uc2a4\ub85c \uc815\uc758\ud558\uc600\uc2b5\ub2c8\ub2e4. ( Class Error, Class Exception )"),(0,a.kt)("p",null,"Exception\ud074\ub798\uc2a4\uc758 \uc885\ub958\ub294 \ud06c\uac8c Exception\uc744 \uc0c1\uc18d\ubc1b\uc740 \uc608\uc678\ub4e4\uacfc, Exception\uc744 \uc0c1\uc18d\ubc1b\uc740 RuntimeException \ud558\uc704\uc758 \uc608\uc678\ub4e4\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exception",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc678\ubd80\uc758 \uc601\ud5a5\uc73c\ub85c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uac83\ub4e4."),(0,a.kt)("li",{parentName:"ul"},"\ubc1c\uc0dd \uac00\ub2a5\uc131\uc774 \uc788\uc744 \ub54c, \uc608\uc678\ucc98\ub9ac \uac15\uc81c\ud568."),(0,a.kt)("li",{parentName:"ul"},"FileNotFoundException, ClassNotFoundException, DataFormatException"))),(0,a.kt)("li",{parentName:"ul"},"RuntimeException",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc758 \ud504\ub85c\uadf8\ub798\ubc0d \uc694\uc18c\ub4e4\uacfc \uad00\uacc4\uac00 \uae4a\uc74c."),(0,a.kt)("li",{parentName:"ul"},"\uc608\uc678\ucc98\ub9ac \uac15\uc81c X"),(0,a.kt)("li",{parentName:"ul"},"IndexOutOfBoundsException, NullPointerException, ClassCastException, ArithmeticException.")))),(0,a.kt)("h2",{id:"\uc608\uc678\ucc98\ub9ac\ud558\uae30"},"\uc608\uc678\ucc98\ub9ac\ud558\uae30"),(0,a.kt)("p",null,"\ubc1c\uc0dd\ud55c \uc608\uc678\ub97c \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud558\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694 ? \ud504\ub85c\uadf8\ub7a8\uc740 \ube44\uc815\uc0c1\uc801\uc73c\ub85c \uc885\ub8cc\ub418\uba70, \ucc98\ub9ac\ub418\uc9c0 \ubabb\ud55c \uc608\uc678\ub294 JVM\uc758 \uc608\uc678\ucc98\ub9ac\uae30(UncaughtExceptionHandler)\uac00 \ubc1b\uc544\uc11c \uc608\uc678\uc758 \uc6d0\uc778\uc744 \ud654\uba74\uc5d0 \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"try-catch \uad6c\ubb38")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String args[]){\n\n    try {\n        // logic.\n    } catch (Exception e){\n        System.out.println(e);\n    }\n}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc608\uc678\ub97c \uba54\uc18c\ub4dc\uc5d0 \uc120\uc5b8\ud558\ub294 \ubc29\ubc95.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"void method() throws Exception1, Exception2 {\n\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uc608\uc678\ub97c \uba85\uc2dc\ud558\uba74 \uba54\uc11c\ub4dc \ub0b4\ubd80\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc608\uc678\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c RuntimeException\uc740 \uc801\uc9c0 \uc54a\uc73c\uba70 Exception\uad00\ub828 \uc608\uc678\ub9cc \uc801\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"(Exception\uc740 checked \uc608\uc678\uc774\uba70 RuntimeException\uc740  unchecked \uc608\uc678\uc774\uae30 \ub54c\ubb38\uc5d0)"),(0,a.kt)("p",null,"\uc774\ub807\uac8c \uba54\uc11c\ub4dc\uc758 throws\ub97c \uba85\uc2dc\ud558\ub294 \uac83\uc740 \uc0ac\uc2e4 \uc608\uc678\ub97c \ucc98\ub9ac\ud55c\ub2e4\uae30\ubcf4\ub2e4\ub294 \uc790\uc2e0\uc744 \ud638\ucd9c\ud55c \uba54\uc11c\ub4dc\uc5d0\uac8c \uc608\uc678\ub97c \ub5a0\ub9e1\uae30\ub294 \uac83\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"(\uacb0\uad6d \uc5b4\ub290 \ud55c \uc9c0\uc810\uc5d0\uc11c (\ucd5c\uc885\uc801\uc73c\ub85c\ub294 main \uba54\uc18c\ub4dc\uac00 \ub420 \uac83 ) \uc608\uc678\uc5d0 \ub300\ud55c \ucc98\ub9ac\uac00 \ub418\uc9c0\uc54a\uc73c\uba74 \ud504\ub85c\uadf8\ub7a8\uc740 \ub2e4\uc6b4\ub420 \uac83 \uc785\ub2c8\ub2e4.)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"finally \ube14\ub7ed"),(0,a.kt)("p",{parentName:"li"},"try-catch\ubb38\uacfc \ud568\uaed8 \uc608\uc678\uc758 \ubc1c\uc0dd\uc5ec\ubd80\uc5d0 \uc0c1\uad00\uc5c6\uc774 \uc2e4\ud589\ub418\uc5b4\uc57c\ud560 \ucf54\ub4dc\ub97c \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"try {\n    // \uba54\uc778 \ub85c\uc9c1.\n} catch (Exception1 e) {\n    // \uc608\uc678 \ucc98\ub9ac.\n} finally {\n  // \uc608\uc678 \ucc98\ub9ac\uac00 \uc774\ub8e8\uc5b4\uc9c0\ub4e0 \uba54\uc778 \ub85c\uc9c1\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub4e0 \uc0c1\uad00\uc5c6\uc774 \ub3d9\uc791\ub418\ub294 \ucf54\ub4dc.\n}\n\n")),(0,a.kt)("h2",{id:"\uc608\uc678-\ubc1c\uc0dd\uc2dc\ud0a4\uae30"},"\uc608\uc678 \ubc1c\uc0dd\uc2dc\ud0a4\uae30"),(0,a.kt)("p",null,"\ud0a4\uc6cc\ub4dc throw\uc744 \uc0ac\uc6a9\ud558\uba74 \uace0\uc758\ub85c \uc608\uc678\ub97c \ubc1c\uc0dd\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc608\uc678-\ub418\ub358\uc9c0\uae30-exception-re-throwing"},"\uc608\uc678 \ub418\ub358\uc9c0\uae30 (exception re-throwing)"),(0,a.kt)("p",null,"\uc608\uc678\ub97c \ucc98\ub9ac\ud55c \ud6c4\uc5d0 \uc778\uc704\uc801\uc73c\ub85c \ub2e4\uc2dc \ubc1c\uc0dd\uc2dc\ud0a4\uace0, \ubc1c\uc0dd\ud55c \uc608\uc678\ub97c throws\ub85c \uc120\uc5b8\ud568\uc73c\ub85c\uc368 \uc608\uc678\ub97c \ubc1c\uc0dd\ud55c \uba54\uc11c\ub4dc\uc640 \ud638\ucd9c \uba54\uc11c\ub4dc\uc5d0\uc11c \ub098\ub204\uc5b4 \ucc98\ub9ac\ud558\ub3c4\ub85d \ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"\uc0ac\uc6a9\uc790\uc815\uc758-\uc608\uc678"},"\uc0ac\uc6a9\uc790\uc815\uc758 \uc608\uc678"),(0,a.kt)("p",null,"\uae30\uc874\uc758 \uc815\uc758\ub41c \uc608\uc678 \ud074\ub798\uc2a4 \uc678\uc5d0 \ud544\uc694\uc5d0 \ub530\ub77c \ud504\ub85c\uadf8\ub798\uba38\uac00 \uc0c8\ub85c\uc6b4 \uc608\uc678 \ud074\ub798\uc2a4\ub97c \uc815\uc758\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class CustomException extends RuntimeException {\n\n    //\uba54\uc138\uc9c0\ub97c \uc778\uc790\ub85c \ubc1b\ub294 \uc0dd\uc131\uc790.\n    MyException(String msg) {\n        super(msg);\n    }\n}\n")),(0,a.kt)("p",null,"RuntimeException\uc744 \uc0c1\uc18d\ubc1b\uc740 \ucee4\uc2a4\ud140 \uc608\uc678\ub294 \uc608\uc678 \ubc1c\uc0dd\uc2dc \uc608\uc678 \ucc98\ub9ac\uac00 \uac15\uc81c\ub418\uc9c0 \uc54a\uc9c0\ub9cc Exception\uc744 \uc0c1\uc18d\ubc1b\uc744\uacbd\uc6b0 \uc608\uc678 \ucc98\ub9ac\uac00 \uac15\uc81c\ub429\ub2c8\ub2e4. \uc800\uc790\ub294 RuntimeException\uc744 \uac1c\uc778\uc801\uc73c\ub85c \ucd94\ucc9c."))}s.isMDXComponent=!0}}]);