"use strict";(self.webpackChunkseongkyu_lim=self.webpackChunkseongkyu_lim||[]).push([[192],{4381:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],p={sidebar_position:3,title:"Structural pattern"},u="Structural Pattern",d={unversionedId:"design-pattern/structuralpattern",id:"design-pattern/structuralpattern",isDocsHomePage:!1,title:"Structural pattern",description:"\uad6c\uc870 \ud328\ud134\uc740 \ub354 \ud070 \uad6c\uc870\ub97c \ud615\uc131\ud558\uae30 \uc704\ud574 \uc5b4\ub5bb\uac8c \ud074\ub798\uc2a4\uc640 \uac1d\uccb4\ub97c \ud569\uc131\ud558\ub294\uac00\uc640 \uad00\ub828\ub41c \ud328\ud134\uc785\ub2c8\ub2e4.",source:"@site/docs/design-pattern/structuralpattern.md",sourceDirName:"design-pattern",slug:"/design-pattern/structuralpattern",permalink:"/Blog/docs/design-pattern/structuralpattern",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/design-pattern/structuralpattern.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Structural pattern"},sidebar:"tutorialSidebar",previous:{title:"Creational pattern",permalink:"/Blog/docs/design-pattern/creationalpattern"},next:{title:"Behavioral pattern",permalink:"/Blog/docs/design-pattern/behavirolpattern"}},c=[{value:"Adapter",id:"adapter",children:[{value:"\ud65c\uc6a9\uc131",id:"\ud65c\uc6a9\uc131",children:[],level:3},{value:"\ucc38\uc5ec\uc790",id:"\ucc38\uc5ec\uc790",children:[],level:3},{value:"\uc608\uc81c",id:"\uc608\uc81c",children:[],level:3},{value:"Adapter\uc758 \uc885\ub958",id:"adapter\uc758-\uc885\ub958",children:[],level:3}],level:2},{value:"Facade",id:"facade",children:[{value:"\uc758\ub3c4",id:"\uc758\ub3c4",children:[],level:3},{value:"\ub3d9\uae30",id:"\ub3d9\uae30",children:[],level:3},{value:"\ud65c\uc6a9\uc131",id:"\ud65c\uc6a9\uc131-1",children:[],level:3},{value:"\ucc38\uc5ec\uc790",id:"\ucc38\uc5ec\uc790-1",children:[],level:3}],level:2},{value:"composite",id:"composite",children:[],level:2},{value:"decorator",id:"decorator",children:[],level:2},{value:"proxy",id:"proxy",children:[],level:2}],o={toc:c};function s(t){var e=t.components,p=(0,r.Z)(t,i);return(0,n.kt)("wrapper",(0,l.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structural-pattern"},"Structural Pattern"),(0,n.kt)("p",null,"\uad6c\uc870 \ud328\ud134\uc740 \ub354 \ud070 \uad6c\uc870\ub97c \ud615\uc131\ud558\uae30 \uc704\ud574 \uc5b4\ub5bb\uac8c \ud074\ub798\uc2a4\uc640 \uac1d\uccb4\ub97c \ud569\uc131\ud558\ub294\uac00\uc640 \uad00\ub828\ub41c \ud328\ud134\uc785\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"adapter"},"Adapter"),(0,n.kt)("p",null,"\ud074\ub798\uc2a4\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc0ac\uc6a9\uc790(client)\uac00 \uae30\ub300\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4 \ud615\ud0dc\ub85c \uc801\uc751(\ubcc0\ud658)\uc2dc\ud0b5\ub2c8\ub2e4. \uc11c\ub85c \uc77c\uce58\ud558\uc9c0 \uc54a\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac16\ub294 \ud074\ub798\uc2a4\ub4e4\uc744 \ud568\uaed8 \ub3d9\uc791\uc2dc\ud0b5\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"\ud65c\uc6a9\uc131"},"\ud65c\uc6a9\uc131"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uae30\uc874 \ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc740\ub370 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ub9de\uc9c0 \uc54a\uc744 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ub9cc\ub4e0 \uac83\uc744 \uc7ac\uc0ac\uc6a9\ud558\uace0\uc790 \ud558\ub098 \uc774 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc218\uc815\ud560 \uc218 \uc5c6\uc744 \ub54c"),(0,n.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc5ec\ub7ec \uac1c\uc758 \uc11c\ube0c\ud074\ub798\uc2a4\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ub294\ub370, \uc774 \uc11c\ube0c\ud074\ub798\uc2a4\ub4e4\uc758 \uc0c1\uc18d\uc744 \ud1b5\ud574\uc11c \uc774\ub4e4\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub2e4. \uac1c\uc870\ud55c\ub2e4\ub294 \uac83\uc774 \ud604\uc2e4\uc131\uc774 \uc5c6\uc744 \ub54c, \uac1d\uccb4 \uc801\uc751\uc790\ub97c \uc368\uc11c \ubd80\ubaa8 \ud074\ub798\uc2a4\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ubcc0\ud615\ud558\ub294 \uac83\uc774 \ub354 \ubc14\ub78c\uc9c1\ud568 ( Object adapter\ub9cc \ud574\ub2f9)")),(0,n.kt)("h3",{id:"\ucc38\uc5ec\uc790"},"\ucc38\uc5ec\uc790"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Target: \uc0ac\uc6a9\uc790\uac00 \uc0ac\uc6a9\ud560 \uc751\uc6a9 \ubd84\uc57c\uc5d0 \uc885\uc18d\uc801\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud558\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Client: Target \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\uc871\ud558\ub294 \uac1d\uccb4\uc640 \ub3d9\uc791\ud560 \ub300\uc0c1\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Adaptee: \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc801\uc751\uc774 \ud544\uc694\ud55c \uae30\uc874 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud558\ub294 \ud074\ub798\uc2a4\ub85c\uc11c, \uc801\uc751\ub300\uc0c1\uc790\ub77c\uace0\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Adapter: Target \uc778\ud130\ud398\uc774\uc2a4\uc5d0 Adaptee\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc801\uc751\uc2dc\ud0a4\ub294 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"\uc608\uc81c"},"\uc608\uc81c"),(0,n.kt)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8\xa0->\xa0request() -> \uc5b4\ub311\ud130 - translatedRequest() -> \uc5b4\ub311\ud2f0."),(0,n.kt)("p",null,"\uc5b4\ub311\ud130\ub294 \ud0c0\uac9f \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\uba70, \uc5b4\ub311\ud2f0 \uc778\uc2a4\ud134\uc2a4\uac00 \ub4e4\uc5b4\uc788\uc74c."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adaptor1.png",src:a(2185).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adaptor2.png",src:a(637).Z})),(0,n.kt)("h3",{id:"adapter\uc758-\uc885\ub958"},"Adapter\uc758 \uc885\ub958"),(0,n.kt)("p",null,"class adapter"),(0,n.kt)("p",null,"\uc5b4\ub311\ud130\ub97c \ub9cc\ub4e4 \ub54c \ud0c0\uac9f\uacfc \uc5b4\ub311\ud2f0 \ubaa8\ub450\uc758 \uc11c\ube0c \ud074\ub798\uc2a4\ub85c \ub9cc\ub4e0\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adaptor3.png",src:a(3035).Z})),(0,n.kt)("p",null,"object adapter"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\uad6c\uc131\uc744 \ud1b5\ud574\uc11c \uc5b4\ub311\ud2f0\uc5d0 \uc694\uccad\uc744 \uc804\ub2ec\ud55c\ub2e4")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"adaptor4.png",src:a(3547).Z})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"facade"},"Facade"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"facade.png",src:a(30).Z})),(0,n.kt)("h3",{id:"\uc758\ub3c4"},"\uc758\ub3c4"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\ud55c \uc11c\ube0c\uc2dc\uc2a4\ud15c \ub0b4\uc758 \uc778\ud130\ud398\uc774\uc2a4 \uc9d1\ud569\uc5d0 \ub300\ud55c \ud68d\uc54c\ud654\ub41c \ud558\ub098\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \ud328\ud134\uc73c\ub85c, \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc744 \uc0ac\uc6a9\ud558\uae30 \uc27d\ub3c4\ub85d \uc0c1\uc704 \uc218\uc900\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."),(0,n.kt)("h3",{id:"\ub3d9\uae30"},"\ub3d9\uae30"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\uc2dc\uc2a4\ud15c\uc744 \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc73c\ub85c \uad6c\uc870\ud654\ud558\uba74 \ubcf5\uc7a1\uc131\uc744 \uc904\uc774\ub294 \ub370\uc5d0 \ud070 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud37c\uc0ac\ub4dc \ud328\ud134\uc740 \uc11c\ube0c\uc2dc\uc2a4\ud15c\ub4e4 \uc0ac\uc774\uc758 \uc758\uc0ac\uc18c\ud1b5 \ubc0f \uc885\uc18d\uc131\uc744 \ucd5c\uc18c\ud654\ud558\ub824\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \uae30\ub2a5\ub4e4\uc5d0 \ub300\ud55c \ub2e8\uc21c\ud654\ub41c \ud558\ub098\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\uae30\uc704\ud574 \ud37c\uc0ac\ub4dc \ud328\ud134\uc744 \uace0\uc548\ud558\uc600\uc74c."),(0,n.kt)("h3",{id:"\ud65c\uc6a9\uc131-1"},"\ud65c\uc6a9\uc131"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ubcf5\uc7a1\ud55c \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \ub2e8\uc21c\ud55c \uc778\ud130\ud398\uc774\uc2a4 \uc81c\uacf5\uc774 \ud544\uc694\ud560 \ub54c,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\ucd94\uc0c1 \uac1c\ub150\uc5d0 \ub300\ud55c \uad6c\ud604 \ud074\ub798\uc2a4\uc640 \uc0ac\uc6a9\uc790 \uc0ac\uc774\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc885\uc18d\uc131\uc774 \uc874\uc7ac\ud560 \ub54c"),(0,n.kt)("p",{parentName:"li"},"\u2192 \ud638\ucd9c\uc740 \uacc4\uc18d\ud574\uc11c \uc874\uc7ac\ud558\uc9c0\ub9cc, \ud638\ucd9c\uc744 \ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294 \ubd80\ubd84\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc5ec \ud638\ucd9c\ud69f\uc218\ub97c \uc904\uc784.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc11c\ube0c\uc2dc\uc2a4\ud15c\uc744 \uacc4\uce35\ud654\uc2dc\ud0ac \ub54c"))),(0,n.kt)("h3",{id:"\ucc38\uc5ec\uc790-1"},"\ucc38\uc5ec\uc790"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\ud37c\uc0ac\ub4dc(Facade): \ub2e8\uc21c\ud558\uace0 \uc77c\uad00\ub41c \ud1b5\ud569 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\uba70, \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc744 \uad6c\uc131\ud558\ub294 \uc5b4\ub5a4 \ud074\ub798\uc2a4\uac00 \uc5b4\ub5a4 \uc694\uccad\uc744 \ucc98\ub9ac\ud574\uc57c\ud558\ub294\uc9c0 \uc54c\uace0 \uc788\uc73c\uba70, \uc0ac\uc6a9\uc790\uc758 \uc694\uccad\uc744 \ud574\ub2f9 \uc11c\ube0c\uc2dc\uc2a4\ud15c \uac1d\uccb4\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc11c\ube0c\uc2dc\uc2a4\ud15c \ud074\ub798\uc2a4\ub4e4: \uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uace0,  Facade \uac1d\uccb4\ub85c \ud560\ub2f9\ub41c \uc791\uc5c5\uc744 \uc2e4\uc81c\ub85c \ucc98\ub9ac\ud558\uc9c0\ub9cc Facade\uc5d0 \ub300\ud55c \uc544\ubb34\ub7f0 \uc815\ubcf4\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc989, \uc774\ub4e4\uc5d0 \ub300\ud55c \uc5b4\ub5a4 \ucc38\uc870\uc790\ub3c4 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"Facade Pattern\uc744 \uc801\uc6a9\ud568\uc73c\ub85c\uc11c \uc5bb\ub294 \uc774\uc775"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc11c\ube0c\uc2dc\uc2a4\ud15c\uc758 \uad6c\uc131\uc694\uc18c\ub97c \ubcf4\ud638\ud560 \uc218 \uc788\uc74c."),(0,n.kt)("p",{parentName:"li"},"\u2192\uc0ac\uc6a9\uc790\uac00 \ub2e4\ub8e8\uc5b4\uc57c\ud560 \uac1d\uccb4\uc758 \uc218\uac00 \uc904\uc5b4\ub4e4\uc5b4 \uc0ac\uc6a9\uc131 \ud5a5\uc0c1.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\uc11c\ube0c\uc2dc\uc2a4\ud15c\uacfc \uc0ac\uc6a9\uc790 \ucf54\ub4dc \uac04\uc758 \uacb0\ud569\ub3c4\ub97c \ub354\uc6b1 \uc57d\ud558\uac8c \ub9cc\ub4ec."),(0,n.kt)("p",{parentName:"li"},"\u2192\uc11c\ube0c\uc2dc\uc2a4\ud15c \ub0b4\uc758 \uc694\uc18c\ub97c \ub2e4\uc591\ud654\ud558\ub294 \uc791\uc5c5\uc744 \uc6d0\ud560\ud558\uac8c \ud568."))),(0,n.kt)("h2",{id:"composite"},"composite"),(0,n.kt)("h2",{id:"decorator"},"decorator"),(0,n.kt)("h2",{id:"proxy"},"proxy"))}s.isMDXComponent=!0},2185:function(t,e,a){e.Z=a.p+"assets/images/adaptor1-d23a89462f76dc12dac24c57959d7395.png"},637:function(t,e,a){e.Z=a.p+"assets/images/adaptor2-0a5c9c43809ec723e6f3975254106d65.png"},3035:function(t,e,a){e.Z=a.p+"assets/images/adaptor3-e86a48c1a837a742084e8b2759325d2d.png"},3547:function(t,e,a){e.Z=a.p+"assets/images/adaptor4-4f8b5f22c69354bc5de558067193a1e1.png"},30:function(t,e,a){e.Z=a.p+"assets/images/facade-4e64cf3c4ba16caa931e334b0ed71003.png"}}]);