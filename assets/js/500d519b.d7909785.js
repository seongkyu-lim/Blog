"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[3885],{4698:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const s={sidebar_position:3,title:"Properties"},i="<span style={{color: '#4fddbf'}}>Properties</span>",o={unversionedId:"kotlin/properties",id:"kotlin/properties",title:"Properties",description:"Class\uc758 Property\ub294 \ud544\ub4dc\uc640 \uc811\uadfc\uc790\ub97c \ud1b5\uce6d\ud558\ub294 \ub9d0\uc785\ub2c8\ub2e4.",source:"@site/docs/kotlin/properties.mdx",sourceDirName:"kotlin",slug:"/kotlin/properties",permalink:"/Blog/docs/kotlin/properties",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/kotlin/properties.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Properties"},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/Blog/docs/kotlin/class"},next:{title:"What is Design Pattern ?",permalink:"/Blog/docs/design-pattern/designpattern"}},l={},p=[{value:"Getters and Setters",id:"getters-and-setters",level:3},{value:"<strong>Late-initialized properties and variables</strong>",id:"late-initialized-properties-and-variables",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"properties"},(0,a.kt)("span",{style:{color:"#4fddbf"}},"Properties")),(0,a.kt)("p",null,"Class\uc758 Property\ub294 \ud544\ub4dc\uc640 \uc811\uadfc\uc790\ub97c \ud1b5\uce6d\ud558\ub294 \ub9d0\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud544\ub4dc\ub294 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \ubcc0\uc218\ub97c \uc758\ubbf8\ud558\uba70, \uc811\uadfc\uc790\ub294 \ud574\ub2f9 \ud544\ub4dc\uc5d0 \uc811\uadfc\ud558\uc5ec \uac12\uc744 \uc870\ud68c\ud558\uac70\ub098 \uc218\uc815\ud558\ub294 getter, setter\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ucf54\ud2c0\ub9b0\uc5d0\uc11c \ud504\ub85c\ud37c\ud2f0\ub294 var, val\ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec mutable\ud55c\uc9c0, read-only\uc778\uc9c0\ub97c \uc815\ud574\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"val \ud0a4\uc6cc\ub4dc\ub97c \uc0ac\uc6a9\ud558\uba74 \ud574\ub2f9 \ud504\ub85c\ud37c\ud2f0\ub294 read-only\uc774\uba70, \ub530\ub77c\uc11c setter\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Address {\n    var name: String = "Holmes, Sherlock"\n    var street: String = "Baker"\n    var city: String = "London"\n    var state: String? = null\n    var zip: String = "123456"\n}\n')),(0,a.kt)("p",null,"\ud504\ub85c\ud37c\ud2f0\uc5d0 \uc811\uadfc\ud558\uac70\ub098 \uc0ac\uc6a9\ud558\ub824\uba74 \uac04\ub2e8\ud558\uac8c \uc774\ub984\uc73c\ub85c \u2018.\u2019\uacfc \ud568\uaed8 \uc811\uadfc\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun copyAddress(address: Address): Address {\n    val result = Address() // there's no 'new' keyword in Kotlin\n    result.name = address.name // accessors are called\n    result.street = address.street\n    // ...\n    return result\n}\n")),(0,a.kt)("h3",{id:"getters-and-setters"},"Getters and Setters"),(0,a.kt)("p",null,"\uc55e\uc11c \uc124\uba85\ud558\uc600\ub4ef\uc774 val \ud0a4\uc6cc\ub4dc\ub85c \uc120\uc5b8\uc744\ud55c \ud504\ub85c\ud37c\ud2f0\ub294 setter\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"getter\uc640 setter\ub97c \ucee4\uc2a4\ud140\ud558\uc5ec \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\uba70 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Rectangle(val width: Int, val height: Int) {\n    val area: Int // property type is optional since it can be inferred from the getter's return type\n        get() = this.width * this.height\n\n        var stringRepresentation: String\n            get() = this.toString()\n            set(value) {\n                setDataFromString(value) // parses the string and assigns values to other properties\n            }\n}\n")),(0,a.kt)("h3",{id:"late-initialized-properties-and-variables"},(0,a.kt)("strong",{parentName:"h3"},"Late-initialized properties and variables")))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);