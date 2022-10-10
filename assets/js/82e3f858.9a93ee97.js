"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[9607],{7792:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(3117),n=(r(7294),r(3905));const l={sidebar_position:2,title:"Creational pattern"},o="Creational Pattern",i={unversionedId:"design-pattern/creationalpattern",id:"design-pattern/creationalpattern",title:"Creational pattern",description:"- \uc0dd\uc131 \ud328\ud134\uc740 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uc808\ucc28\ub97c \ucd94\uc0c1\ud654\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4.",source:"@site/docs/design-pattern/creationalpattern.md",sourceDirName:"design-pattern",slug:"/design-pattern/creationalpattern",permalink:"/Blog/docs/design-pattern/creationalpattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design-pattern/creationalpattern.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Creational pattern"},sidebar:"tutorialSidebar",previous:{title:"What is Design Pattern ?",permalink:"/Blog/docs/design-pattern/designpattern"},next:{title:"Structural pattern",permalink:"/Blog/docs/design-pattern/structuralpattern"}},c={},u=[{value:"Abstract Factory",id:"abstract-factory",level:2},{value:"\ud65c\uc6a9\uc131",id:"\ud65c\uc6a9\uc131",level:3},{value:"\uc608\uc81c  Java ",id:"\uc608\uc81c--java-",level:3},{value:"Abstract factory \ud328\ud134\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc5bb\ub294 \uc774\uc775\uacfc \ubd80\ub2f4.",id:"abstract-factory-\ud328\ud134\uc744-\uc0ac\uc6a9\ud568\uc73c\ub85c\uc368-\uc5bb\ub294-\uc774\uc775\uacfc-\ubd80\ub2f4",level:3},{value:"\uad00\ub828\ud328\ud134",id:"\uad00\ub828\ud328\ud134",level:3},{value:"Factory Method",id:"factory-method",level:2},{value:"\ud65c\uc6a9\uc131",id:"\ud65c\uc6a9\uc131-1",level:3},{value:"\uc608\uc81c Java ",id:"\uc608\uc81c-java-",level:3},{value:"\uad00\ub828 \ud328\ud134",id:"\uad00\ub828-\ud328\ud134",level:3},{value:"Builder",id:"builder",level:2},{value:"Prototype",id:"prototype",level:3},{value:"Singleton",id:"singleton",level:3},{value:"\ucc38\uace0 \uc790\ub8cc",id:"\ucc38\uace0-\uc790\ub8cc",level:3}],p={toc:u};function d(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creational-pattern"},"Creational Pattern"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ud328\ud134\uc740 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uc808\ucc28\ub97c ",(0,n.kt)("strong",{parentName:"li"},"\ucd94\uc0c1\ud654"),"\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131, \ud569\uc131\ud558\ub294 \ubc29\ubc95\uc774\ub098 \uac1d\uccb4\uc758 \ud45c\ud604 \ubc29\ubc95\uacfc \uc2dc\uc2a4\ud15c(\uc18c\ud504\ud2b8\uc6e8\uc5b4)(user)\uc744 \ubd84\ub9ac\ud574 \uc90d\ub2c8\ub2e4.")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ud328\ud134\uc740 \uc2dc\uc2a4\ud15c\uc774 \uc5b4\ub5a4 \uad6c\uccb4 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c ",(0,n.kt)("strong",{parentName:"li"},"\ucea1\uc290\ud654"),"\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ud328\ud134\uc740 \uc774\ub4e4 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub4e4\uc774 \uc5b4\ub5bb\uac8c \ub9cc\ub4e4\uace0 \uc5b4\ub5bb\uac8c \uc11c\ub85c \ub9de\ubd99\ub294\uc9c0\uc5d0 \ub300\ud55c \ubd80\ubd84\uc744 \uc644\uc804\ud788 \uac00\ub824\uc90d\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\u2192 \uc0dd\uc131 \ud328\ud134\uc744 \uc774\uc6a9\ud558\uba74 \ubb34\uc5c7\uc774 \uc0dd\uc131\ub418\uace0, \ub204\uac00 \uc774\uac83\uc744 \uc0dd\uc131\ud558\uba70, \uc774\uac83\uc774 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0, \uc5b8\uc81c \uc0dd\uc131\ud560 \uac83\uc778\uc9c0 \uacb0\uc815\ud558\ub294 \ub370 \uc720\uc5f0\uc131\uc744 \ud655\ubcf4\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ud328\ud134\uc73c\ub85c \ubd84\ub958\ub418\ub294 \ud328\ud134\uc740 \uc5ec\ub7ec \uac1c\uc778\ub370, \uc774\ub7f0 \uc5ec\ub7ec \uc0dd\uc131 \ud328\ud134\ub4e4\uc740 \uc11c\ub85c \ubcf4\uc644\uc801\uc77c \uc218\ub3c4 \uc788\uace0 \uc120\ud0dd\ub418\uae30 \uc704\ud574 \uc11c\ub85c \uacbd\uc7c1\uc801\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uc989, \ub3d9\uc77c\ud55c \ubb38\uc81c \ud574\uacb0\uc744 \uc704\ud574\uc11c \uc5b4\ub5a4 \uc0dd\uc131 \ud328\ud134\uc744 \uc0ac\uc6a9\ud574\uc57c \ud560\uc9c0 \uacb0\uc815\uc744 \ub0b4\ub9ac\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131 \ud328\ud134 \uac04\uc5d0\ub294 \ub9e4\uc6b0 \ubc00\uc811\ud55c \uad00\ub828\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4. (\uc5b4\ub5a0\ud55c \ud328\ud134\uc744 \uad6c\ud604\ud558\ub294\ub370 \ub2e4\ub978 \ud328\ud134\uc744 \uc774\uc6a9)")),(0,n.kt)("h2",{id:"abstract-factory"},"Abstract Factory"),(0,n.kt)("aside",null,"\ud83d\udca1 \uad6c\uccb4\uc801\uc778 \ud074\ub798\uc2a4\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uace0 \uad00\ub828\uc131\uc744 \uac16\ub294 \uac1d\uccb4\ub4e4\uc758 **\uc9d1\ud569**\uc744 \uc0dd\uc131\ud558\uac70\ub098 \uc11c\ub85c \ub3c5\ub9bd\uc801\uc778 \uac1d\uccb4\ub4e4\uc758 **\uc9d1\ud569**\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 **\uc778\ud130\ud398\uc774\uc2a4**\ub97c \uc81c\uacf5\ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ud65c\uc6a9\uc131"},"\ud65c\uc6a9\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uac1d\uccb4\uac00 \uc0dd\uc131\ub418\uac70\ub098 \uad6c\uc131, \ud45c\ud604\ub418\ub294 \ubc29\uc2dd\uacfc \ubb34\uad00\ud558\uac8c \uc2dc\uc2a4\ud15c\uc744 \ub3c5\ub9bd\uc801\uc73c\ub85c \ub9cc\ub4e4\uace0\uc790 \ud560 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uc81c\ud488\uad70 \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud574\uc11c \uc2dc\uc2a4\ud15c\uc744 \uc124\uc815\ud574\uc57c \ud558\uace0 \ud55c\ubc88 \uad6c\uc131\ud55c \uc81c\ud488\uc744 \ub2e4\ub978 \uac83\uc73c\ub85c \ub300\uccb4\ud560 \uc218 \uc788\uc744 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uad00\ub828\ub41c \uc81c\ud488 \uac1d\uccb4\ub4e4\uc774 \ud568\uaed8 \uc0ac\uc6a9\ub418\ub3c4\ub85d \uc124\uacc4\ub418\uc5c8\uace0, \uc774 \ubd80\ubd84\uc5d0 \ub300\ud55c \uc81c\uc57d\uc774 \uc678\ubd80\uc5d0\ub3c4 \uc9c0\ucf1c\uc9c0\ub3c4\ub85d \ud558\uace0 \uc2f6\uc744 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488\uc5d0 \ub300\ud55c \ud074\ub798\uc2a4 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc81c\uacf5\ud558\uace0, \uadf8\ub4e4\uc758 \uad6c\ud604\uc774 \uc544\ub2cc \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub178\ucd9c\uc2dc\ud0a4\uace0 \uc2f6\uc744 \ub54c")),(0,n.kt)("p",null,"\u2192 \uc5ec\uae30\uc11c \ub9d0\ud558\ub294 \uc81c\ud488\uc740 \ud2b9\uc815 product (\uc608\uc81c\uc5d0\uc11c\ub294 CPU, MMU)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\uc608\uc81c--java-"},"\uc608\uc81c ","[ Java ]"),(0,n.kt)("p",null,"CPU, MMU \uac1d\uccb4\ub294 \uae30\uc874\uc5d0 \uc874\uc7ac."),(0,n.kt)("p",null,"EMBERToolKit, EnginolaToolKit \uacfc\uac19\uc740 \uc0dd\uc131\ud560 \uac1d\uccb4\uc758 \ud074\ub798\uc2a4\ub294 \ucea1\uc290\ud654 \ub418\uc5b4 \uc0ac\uc6a9\uc790\ub85c\ubd80\ud130 \ubd84\ub9ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"(toolkit class \u2192 abstract factory \u2192 user)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"abstract factory(AbstractFactory): \uac1c\ub150\uc801 \uc81c\ud488\uc5d0 \ub300\ud55c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc5f0\uc0b0\uc73c\ub85c ",(0,n.kt)("strong",{parentName:"li"},"\uc778\ud130\ud398\uc774\uc2a4"),"\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Concrete factory(EnginolaToolKit, EmberToolKit): \uad6c\uccb4\uc801\uc778 \uc81c\ud488\uc5d0 \ub300\ud55c \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc5f0\uc0b0\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"AbstractProduct(CPU, MMU): \uac1c\ub150\uc801 \uc81c\ud488 \uac1d\uccb4\uc5d0 \ub300\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"ConcreteProduct(EmberCPU, EmberMMU, EnginolaCPU, EnginolaMMU): \uad6c\uccb4\uc801\uc73c\ub85c \ud329\ud1a0\ub9ac\uac00 \uc0dd\uc131\ud560 \uac1d\uccb4\ub97c \uc815\uc758\ud558\uace0, AbstractProduct\uac00 \uc815\uc758\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Client: AbstractFactory\uc640 AbstractProduct \ud074\ub798\uc2a4\uc5d0 \uc120\uc5b8\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"abstractfactory_code_1.png",src:r(9951).Z,width:"1280",height:"720"}),"\n",(0,n.kt)("img",{alt:"abstractfactory_code_2.png",src:r(4193).Z,width:"1272",height:"1180"}),"\n",(0,n.kt)("img",{alt:"abstractfactory_code_3.png",src:r(7040).Z,width:"1276",height:"1218"})),(0,n.kt)("p",null,"\ucd9c\ucc98 : ",(0,n.kt)("a",{parentName:"p",href:"https://sourcemaking.com/design_patterns/abstract_factory/java/1"},"Design Patterns and Refactoring")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"abstract-factory-\ud328\ud134\uc744-\uc0ac\uc6a9\ud568\uc73c\ub85c\uc368-\uc5bb\ub294-\uc774\uc775\uacfc-\ubd80\ub2f4"},"Abstract factory \ud328\ud134\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc5bb\ub294 \uc774\uc775\uacfc \ubd80\ub2f4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uad6c\uccb4\uc801\uc778 \ud074\ub798\uc2a4(concrete class)\ub97c \ubd84\ub9ac\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488\uad70\uc744 \uc27d\uac8c \ub300\uccb4\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488 \uc0ac\uc774\uc758 \uc77c\uad00\uc131\uc744 \uc99d\uc9c4\uc2dc\ud0b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc0c8\ub85c\uc6b4 \uc885\ub958\uc758 \uc81c\ud488\uc744 \uc81c\uacf5\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\u2192 \uc5ec\uae30\uc11c \ub9d0\ud558\ub294 \uc81c\ud488\uc740 \ud2b9\uc815 product (\uc608\uc81c\uc5d0\uc11c\ub294 CPU, MMU)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\uad00\ub828\ud328\ud134"},"\uad00\ub828\ud328\ud134"),(0,n.kt)("p",null,"AbstractFactory \ud074\ub798\uc2a4\ub294 ",(0,n.kt)("strong",{parentName:"p"},"factory method")," \ud328\ud134\uc744 \uc774\uc6a9\ud574\uc11c \uad6c\ud604\ub418\ub294\ub370, ",(0,n.kt)("strong",{parentName:"p"},"prototype \ud328\ud134"),"\uc744 \uc774\uc6a9\ud560 \ub54c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. concrete \ud329\ud1a0\ub9ac\ub294 ",(0,n.kt)("strong",{parentName:"p"},"singleton \ud328\ud134"),"\uc744 \uc774\uc6a9\ud574 \uad6c\ud604\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"factory-method"},"Factory Method"),(0,n.kt)("aside",null,"\ud83d\udca1 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub294 \ubbf8\ub9ac \uc815\uc758\ud558\ub418, \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4 \ud074\ub798\uc2a4\uc758 \uacb0\uc815\uc740 **\uc11c\ube0c\ud074\ub798\uc2a4** \ucabd\uc5d0\uc11c \ub0b4\ub9ac\ub294 \ud328\ud134\uc785\ub2c8\ub2e4. \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc \ud328\ud134\uc5d0\uc11c\ub294 \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4dc\ub294 \uc2dc\uc810\uc744 \uc11c\ube0c\ud074\ub798\uc2a4\ub85c \ubbf8\ub8f9\ub2c8\ub2e4."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ud65c\uc6a9\uc131-1"},"\ud65c\uc6a9\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \ud074\ub798\uc2a4\uac00 \uc790\uc2e0\uc774 \uc0dd\uc131\ud574\uc57c \ud558\ub294 \uac1d\uccb4\uc758 \ud074\ub798\uc2a4\ub97c \ubbf8\ub9ac \uc608\uce21\ud560 \uc218 \uc5c6\uc744 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131\ud560 \uac1d\uccb4\ub97c \uae30\uc220\ud558\ub294 \ucc45\uc784\uc744 \uc790\uc2e0\uc758 \uc11c\ube0c\ud074\ub798\uc2a4\uac00 \uc9c0\uc815\ud588\uc73c\uba74 \ud560 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc0dd\uc131\uc758 \ucc45\uc784\uc744 \uba87 \uac1c\uc758 \ubcf4\uc870 \uc11c\ube0c\ud074\ub798\uc2a4 \uac00\uc6b4\ub370 \ud558\ub098\uc5d0\uac8c \uc704\uc784\ud558\uace0, \uc5b4\ub5a4 \uc11c\ube0c\ud074\ub798\uc2a4\uac00 \uc704\uc784\uc790\uc778\uc9c0\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uad6d\uc18c\ud654\uc2dc\ud0a4\uace0 \uc2f6\uc744 \ub54c")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\uc608\uc81c-java-"},"\uc608\uc81c","[ Java ]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Product(ImageReader) : \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\uac00 \uc0dd\uc131\ud558\ub294 \uac1d\uccb4\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"ConcreteProduct(GifReader, JpegReader): Product \ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc2e4\uc81c\ub85c \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Creater(FactoryMethodDemo): Product \ud0c0\uc785\uc758 \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4. Creater  \ud074\ub798\uc2a4\ub294 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub97c \uae30\ubcf8\uc801\uc73c\ub85c \uad6c\ud604\ud558\ub294\ub370, \uc774 \uad6c\ud604\uc5d0\uc11c\ub294 ConcreteProduct \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. \ub610\ud55c Product \uac1d\uccb4\uc758 \uc0dd\uc131\uc744 \uc704\ud574 \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"ConcreteCreator(): \ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub97c \uc7ac\uc815\uc758\ud558\uc5ec ConcreteProduct\uc758 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 ",(0,n.kt)("strong",{parentName:"p"},"getDecodedImage"),"\uac00 ",(0,n.kt)("strong",{parentName:"p"},"factory method"),"\uac00 \ub429\ub2c8\ub2e4. \uc65c\ub0d0\ud558\uba74 \uac1d\uccb4\ub97c \uc81c\uc870\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"factorymethod_code_1.png",src:r(4335).Z,width:"1280",height:"650"}),"\n",(0,n.kt)("img",{alt:"factorymethod_code_2.png",src:r(1118).Z,width:"1304",height:"1040"}),"\n",(0,n.kt)("img",{alt:"factorymethod_code_3.png",src:r(9157).Z,width:"1282",height:"694"})),(0,n.kt)("p",null,"\ucd9c\ucc98 : ",(0,n.kt)("a",{parentName:"p",href:"https://sourcemaking.com/design_patterns/factory_method/java/1"},"Design Patterns and Refactoring")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\uad00\ub828-\ud328\ud134"},"\uad00\ub828 \ud328\ud134"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"abstract factory \ud328\ud134\uc740 \uc774 factory method\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud560 \ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud329\ud1a0\ub9ac \uba54\uc11c\ub4dc\ub294 \ud15c\ud50c\ub9bf \uba54\uc11c\ub4dc \ud328\ud134\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ub420 \ub54c\uac00 \ub9ce\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"builder"},"Builder"),(0,n.kt)("p",null,"\ubcf5\ud569 \uac1d\uccb4\uc758 \uc0dd\uc131 \uacfc\uc815\uacfc \ud45c\ud604 \ubc29\ubc95\uc744 \ubd84\ub9ac\ud558\uc5ec \ub3d9\uc77c\ud55c \uc0dd\uc131 \uc808\ucc28\uc5d0\uc11c \uc11c\ub85c \ub2e4\ub978 \ud45c\ud604 \uacb0\uacfc\ub97c \ub9cc\ub4e4 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc785\ub2c8\ub2e4."),(0,n.kt)("aside",null,"\ud83d\udca1 \uac1d\uccb4",(0,n.kt)("p",null,"\ub2e8\uc77c \uac1d\uccb4 : \ud558\ub098\uc758 \ud074\ub798\uc2a4\ub85c \uc0dd\uc131\ub41c \uac1d\uccb4 ( \uac1d\uccb4\ub294 \ub370\uc774\ud130\uc640 \ud589\ub3d9(\uba54\uc18c\ub4dc)\ub97c \uac00\uc9d0.)"),(0,n.kt)("p",null,"\ubcf5\ud569 \uac1d\uccb4 : \ud558\ub098\uc758 \uac1d\uccb4\uac00 \ub2e4\ub978 \uac1d\uccb4\ub97c \ud3ec\ud568\ud558\ub294 \uad00\uacc4 \uad6c\uc870\ub97c \uac00\uc9c0\ub294 \uac1d\uccb4")),(0,n.kt)("p",null,"\ud65c\uc6a9\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'\ubcf5\ud569 \uac1d\uccb4\uc758 "\uc0dd\uc131 \uc54c\uace0\ub9ac\uc998"\uc774 \uc774\ub97c \ud569\uc131\ud558\ub294 \uc694\uc18c \uac1d\uccb4\ub4e4\uc774 \ubb34\uc5c7\uc778\uc9c0 \uc774\ub4e4\uc758 "\uc870\ub9bd \ubc29\ubc95"\uc5d0 \ub3c5\ub9bd\uc801\uc77c \ub54c'),(0,n.kt)("li",{parentName:"ul"},"\ud569\uc131\ud560 \uac1d\uccb4\ub4e4\uc758 \ud45c\ud604\uc774 \uc11c\ub85c \ub2e4\ub974\ub354\ub77c\ub3c4 \uc0dd\uc131 \uc808\ucc28\uc5d0\uc11c \uc774\ub97c \uc9c0\uc6d0\ud574\uc57c \ud560 \ub54c")),(0,n.kt)("p",null,"\ucc38\uc5ec\uc790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Builder: Product \uac1d\uccb4\uc758 \uc77c\ubd80 \uc694\uc18c\ub4e4\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \ucd94\uc0c1\uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"ConcreteBuilder: Builder \ud074\ub798\uc2a4\uc5d0 \uc815\uc758\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uba70, \uc81c\ud488\uc758 \ubd80\ud488\ub4e4\uc744 \ubaa8\uc544 \ube4c\ub354\ub97c \ubcf5\ud569\ud569\ub2c8\ub2e4. \uc0dd\uc131\ud55c \uc694\uc18c\uc758 \ud45c\ud604\uc744 \uc815\uc758\ud558\uace0 \uad00\ub9ac\ud569\ub2c8\ub2e4. \ub610\ud55c \uc81c\ud488\uc744 \uac80\uc0c9\ud558\ub294\ub370 \ud544\uc694\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. ( \uc5ec\uae30\uc5d0 \uad6c\uccb4\uc801\uc778 \ubcf5\ud569 \uac1d\uccb4\uc758 \uc0dd\uc131 \ubc29\uc2dd\uc774 \uc9c0\uc815\ub428.)"),(0,n.kt)("li",{parentName:"ul"},"Director: Builder \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\ud558\ub294 \uac1d\uccb4\ub97c \ud45c\ud604\ud569\ub2c8\ub2e4. ( \uc778\uc2a4\ud134\uc2a4 \uc0ac\uc6a9)"),(0,n.kt)("li",{parentName:"ul"},"Product: \uc0dd\uc131\ud560 \ubcf5\ud569 \uac1d\uccb4\ub97c \ud45c\ud604\ud569\ub2c8\ub2e4. ( \uc81c\ud488\uc758 \uc18d\uc131, \uae30\ub2a5\ub4f1\uc744 \uac00\uc9d0.)")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"builder_struc.png",src:r(4147).Z,width:"900",height:"319"})),(0,n.kt)("p",null,"Director \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uace0, \uc0dd\uc131\ud55c \uac1d\uccb4\ub97c \uc790\uc2e0\uc774 \uc6d0\ud558\ub294 Builder \uac1d\uccb4\ub85c \ud569\uc131\ud574 \ub098\uac11\ub2c8\ub2e4."),(0,n.kt)("p",null,"Product\uac00 \uad6c\ucd95\ub420 \ub54c\ub9c8\ub2e4 Director\ub294 Builder\uc5d0 \ud1b5\ubcf4\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"Builder\ub294 Director\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\uc5ec \uc81c\ud488\uc5d0 \ubd80\ud488\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc0ac\uc6a9\uc790\ub294 Builder\uc5d0\uc11c \uc81c\ud488\uc744 \uac80\uc0c9\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc608\uc81c"),(0,n.kt)("p",null,"\uacb0\uacfc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc81c\ud488(Product)\uc5d0 \ub300\ud55c \ub0b4\ubd80 \ud45c\ud604\uc744 \ub2e4\uc591\ud558\uac8c \ubcc0\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uacfc \ud45c\ud604\uc5d0 \ud544\uc694\ud55c \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ubcf5\ud569 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc808\ucc28\ub97c \uc880\ub354 \uc138\ubc00\ud558\uac8c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uad00\ub828 \ud328\ud134"),(0,n.kt)("p",null,"\ubcf5\uc7a1\ud55c \uac1d\uccb4\ub97c \uc0dd\uc131\ud574\uc57c \ud560 \ub54c '\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134'\uc740 '\ube4c\ub354 \ud328\ud134'\uacfc \ube44\uc2b7\ud55c \ubaa8\uc2b5\uc744 \ubcf4\uc785\ub2c8\ub2e4. \uadfc\ubcf8\uc801\uc778 \ucc28\uc774\uac00 \uc788\ub2e4\uba74 \ube4c\ub354 \ud328\ud134\uc740 \ubcf5\uc7a1\ud55c \uac1d\uccb4\uc758 \ub2e8\uacc4\ubcc4 \uc0dd\uc131\uc5d0 \uc911\uc810\uc744 \ub454 \ubc18\uba74, \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc740 \uc81c\ud488\uc758 \uc720\uc0ac\uad70\ub4e4\uc774 \uc874\uc7ac\ud560 \ub54c \uc720\uc5f0\ud55c \uc124\uacc4\uc5d0 \uc911\uc810\uc744 \ub454\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4. \ube4c\ub354 \ud328\ud134\uc740 \uc0dd\uc131\uc758 \ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc5d0\uc11c \uc0dd\uc131\ud55c \uc81c\ud488\uc744 \ubc18\ud658\ud558\ub294 \ubc18\uba74, \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc5d0\uc11c\ub294 \ub9cc\ub4dc\ub294 \uc989\uc2dc \uc81c\ud488\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc5d0\uc11c \ub9cc\ub4dc\ub294 \uc81c\ud488\uc740 \uaf2d \ubaa8\uc5ec\uc57c\ub9cc \uc758\ubbf8 \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \ud558\ub098\ub9cc\uc73c\ub85c\ub3c4 \uc758\ubbf8\uac00 \uc788\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"prototype"},"Prototype"),(0,n.kt)("h3",{id:"singleton"},"Singleton"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\ucc38\uace0-\uc790\ub8cc"},"\ucc38\uace0 \uc790\ub8cc"),(0,n.kt)("p",null,"[1]"," GoF\uc758 \ub514\uc790\uc778 \ud328\ud134"),(0,n.kt)("p",null,"[2][https://sourcemaking.com]","(",(0,n.kt)("a",{parentName:"p",href:"https://sourcemaking.com/"},"https://sourcemaking.com/"),")"))}d.isMDXComponent=!0},3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>k});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=u(r),k=n,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||l;return r?a.createElement(m,o(o({ref:e},p),{},{components:r})):a.createElement(m,o({ref:e},p))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9951:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/abstractfactory_code_1-dcb29ed19e7a462e564ad3ff8ddf4c87.png"},4193:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/abstractfactory_code_2-826a74a2d8e700ddbd30a24616ccf977.png"},7040:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/abstractfactory_code_3-9973d0fca0ef1b07914ff7eeede94be4.png"},4147:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/builder_struc-37e41918a939ef1b639f259f4d9b8a31.png"},4335:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/factorymethod_code_1-4690a96552ec97946f74233f3f655123.png"},1118:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/factorymethod_code_2-938bd6663146e214f589fcc3df2dcf3e.png"},9157:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/factorymethod_code_3-dd5eddaa3a3faffede6ae261d0a2993c.png"}}]);