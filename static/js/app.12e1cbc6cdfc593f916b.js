webpackJsonp([1],{"01qO":function(e,t){},"3fzg":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i=(s("Zf1F"),s("7t+N")),n=s.n(i),r=(s("Zgw8"),s("K3J8"),{name:"home",props:["book"],data:function(){return{}},methods:{openViewer:function(e){this.$emit("openViewer",e)}},created:function(){},mounted:function(){n()("#js-comic-summary").append(this.book.summary)}}),c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"comic container-control mt-4 mb-5"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"comic-cover"},[s("img",{staticClass:"img-fluid",attrs:{src:e.book.cover}})]),s("div",{staticClass:"comic-info"},[s("div",{staticClass:"comic-title"},[e._v(e._s(e.book.name))]),s("div",{staticClass:"info-table"},[s("table",[s("tbody",[e._m(0),s("tr",[s("th",[e._v("author")]),s("td",[s("div",[e._v(e._s(e.book.author))])])]),s("tr",[s("th",[e._v("status")]),s("td",[s("div",[e._v(e._s(e.book.status))])])]),s("tr",[s("th",[e._v("source from")]),s("td",[s("a",{attrs:{href:""+e.book.sourceFrom}},[e._v("「衛宮さんちの今日のごはん」各話一覧｜ヤングエースUP")])])]),e._m(1),e._m(2),e._m(3)])])])])]),s("div",{staticClass:"comic-episodes position-relative w-100"},[s("div",{staticClass:"episodes-header position-absolute px-4 py-1"},[e._v("all episodes")]),s("ul",{staticClass:"episodes-body p-0 m-0"},e._l(e.book.episodes,function(t,a){return s("li",{staticClass:"episode-item px-4 py-2 d-block"},[s("a",{staticClass:"d-flex",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.openViewer(a)}}},[s("span",{staticClass:"episode-index"},[e._v("episode # "+e._s(t.id)+" :")]),s("span",{staticClass:"episode-name"},[e._v(e._s(t.title)),t.isNew?s("span",{staticClass:"episodes-new ml-3 text-uppercase"},[e._v("new")]):e._e()])])])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",[this._v("genres")]),t("td",[t("div",[this._v("fusce/vehicula/dolor")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{staticClass:"pb-4"},[this._v("rate")]),t("td",{staticClass:"pb-4"},[t("div",[t("i",{staticClass:"fas fa-star mr-2"}),t("i",{staticClass:"fas fa-star mr-2"}),t("i",{staticClass:"fas fa-star mr-2"}),t("i",{staticClass:"fas fa-star mr-2"}),t("i",{staticClass:"far fa-star mr-2"})])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("th",{attrs:{colspan:"2"}},[this._v("summary")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"2"}},[t("div",{attrs:{id:"js-comic-summary"}})])])}]};var o={name:"viewer",props:["book","episodeIndex","page"],data:function(){return{nightMode:!1,viewerFluid:!1,dragging:!1,currentEpIndex:"",currentPage:"",lastPage:!1,lastEpisode:!1,baseUrl:""}},methods:{changePage:function(e){var t=this;"increase"===e?t.currentPage+1<=t.epPageData.page&&t.currentPage++:"decrease"===e&&t.currentPage-1>=1&&t.currentPage--,t.movePreviewBar(),t.movePrevieWindow()},changeEpisode:function(e){var t=this;"increase"===e?t.currentEpIndex+1<=t.book.episodes.length-1&&t.currentEpIndex++:"decrease"===e&&t.currentEpIndex-1>=0&&t.currentEpIndex--,t.currentPage=1,t.movePreviewBar(),t.movePrevieWindow()},isLastPage:function(){var e=this;e.lastEpisode?e.lastPage&&(e.lastPage=!1):e.currentPage===e.epPageData.page?e.lastPage=!0:e.lastPage=!1},isLastEpisode:function(){this.currentEpIndex===this.book.episodes.length-1?this.lastEpisode=!0:this.lastEpisode=!1},movePrevieWindow:function(){var e=this,t=n()("#js-preview-images"),s=e.epPageData.page;if(e.currentPage>s-4){var a="106"*(s-4-1);t.css({transform:"translateX(-"+a+"px)"})}else if(e.currentPage>=4){var i="106"*(e.currentPage-4+1);t.css({transform:"translateX(-"+i+"px)"})}else e.currentPage<4&&t.css({transform:"translateX(0px)"})},movePreviewBar:function(e){var t=this,s=n()("#js-scroll-bar"),a=n()("#js-scroll-pointer"),i=a.width(),r=s.width()-14-i,c=s.offset().left+4+7+(i+12)/2,o=c+r,l=t.epPageData.page,d=parseInt(r/(l-1));if(e)if(e<=c){t.currentPage=1;u=0}else if(e>=o){t.currentPage=l;u=(l-1)*d}else{var p=parseInt((e-c)/d);t.currentPage=p<1?1:p,u=1===t.currentPage?0:(p-1)*d}else if(1===t.currentPage)var u=0;else var u=(t.currentPage-1)*d;a.css({transform:"translateX("+u+"px)"}),t.isLastPage(),t.isLastEpisode()},startDrag:function(e){this.dragging=!0},stopDrag:function(e){if(this.dragging){var t=e.clientX;this.movePreviewBar(t),this.movePrevieWindow(),this.dragging=!1}}},computed:{ep:function(){var e=this.book.episodes[this.currentEpIndex].id;return"string"==typeof e&&(e=e.replace("ex","")),e+"_"},epPageData:function(){return this.book.pages[this.currentEpIndex]},currentPageUrl:function(){var e=this,t=e.currentPage<10?"00":e.currentPage<100?"0":"";return""+e.baseUrl+e.epPageData.filename+e.ep+t+e.currentPage+e.epPageData.suffix+".jpg"}},created:function(){var e=this;e.currentEpIndex=e.episodeIndex,e.currentPage=e.page,e.baseUrl=e.book.source,e.isLastEpisode()},mounted:function(){window.addEventListener("mouseup",this.stopDrag)}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"viewer my-4"},[s("div",{staticClass:"viewer-header container-control d-flex align-items-center mb-4 text-capitalize"},[s("div",{staticClass:"viewer-comic-name",on:{click:function(t){e.$emit("closeViewer")}}},[e._v(e._s(e.book.name))]),s("i",{staticClass:"fas fa-caret-right mx-2"}),s("div",{staticClass:"viewer-select-control"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.currentEpIndex,expression:"currentEpIndex"}],staticClass:"custom-select",attrs:{id:"episodes-select"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentEpIndex=t.target.multiple?s:s[0]},e.isLastEpisode]}},e._l(e.book.episodes,function(t,a){return s("option",{domProps:{value:a}},[e._v("episode "+e._s(t.id))])})),s("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPage,expression:"currentPage"}],staticClass:"custom-select",attrs:{id:"pages-select"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.currentPage=t.target.multiple?s:s[0]},e.isLastPage]}},e._l(e.book.pages[e.currentEpIndex].page,function(t){return s("option",{domProps:{value:t}},[e._v("page "+e._s(t<10?"0":"")+e._s(t))])}))]),s("div",{staticClass:"viewer-mode-switch d-flex align-items-center"},[s("i",{staticClass:"fas fa-sun",class:{"switch-off":e.nightMode}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.nightMode,expression:"nightMode"}],staticClass:"d-none",attrs:{id:"nightMode-switch",type:"checkbox","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(e.nightMode)?e._i(e.nightMode,null)>-1:e.nightMode},on:{change:[function(t){var s=e.nightMode,a=t.target,i=!!a.checked;if(Array.isArray(s)){var n=e._i(s,null);a.checked?n<0&&(e.nightMode=s.concat([null])):n>-1&&(e.nightMode=s.slice(0,n).concat(s.slice(n+1)))}else e.nightMode=i},function(t){e.$emit("switchNightMode",e.nightMode)}]}}),e._m(0),s("i",{staticClass:"far fa-moon",class:{"switch-off":!e.nightMode}})])]),s("div",{staticClass:"viewer-body d-flex",class:{"viewer-fluid":e.viewerFluid}},[s("span",{staticClass:"viewer-fluid-close",on:{click:function(t){e.viewerFluid=!1}}},[e._v("X")]),s("div",{staticClass:"pre-page btn-page",on:{click:function(t){e.changePage("decrease")}}},[s("i",{staticClass:"fas fa-chevron-left pl-4"})]),s("div",{staticClass:"viewer-content",on:{click:function(t){e.viewerFluid=!0}}},[s("img",{staticClass:"img-fluid",attrs:{src:e.currentPageUrl}})]),s("div",{staticClass:"next-page btn-page",on:{click:function(t){e.changePage("increase")}}},[s("i",{staticClass:"fas fa-chevron-right pl-4"})])]),s("div",{staticClass:"viewer-footer container-control"},[s("div",{staticClass:"preview-display position-relative"},[s("span",{staticClass:"pre-episode btn-episode",on:{click:function(t){e.changeEpisode("decrease")}}},[s("i",{staticClass:"fas fa-angle-double-left icon-control"})]),s("div",{staticClass:"preview-content position-relative"},[s("div",{staticClass:"preview-images d-flex",attrs:{id:"js-preview-images"}},e._l(e.book.pages[e.currentEpIndex].page,function(t){return s("div",{class:{active:t===e.currentPage},on:{click:function(s){e.currentPage=t}}},[s("span",{staticClass:"page-number"},[e._v(e._s(t<10?"0":"")+e._s(t))]),s("img",{staticClass:"img-fluid",attrs:{src:""+e.baseUrl+e.epPageData.filename+e.ep+(t<10?"00":t<100?"0":"")+t+e.epPageData.suffix+".jpg"}})])}))]),s("span",{staticClass:"next-episode btn-episode",class:{active:e.lastPage},on:{click:function(t){e.changeEpisode("increase")}}},[s("i",{staticClass:"fas fa-angle-double-right icon-control"})])]),s("div",{staticClass:"viewer-page-bar d-flex"},[s("span",{staticClass:"pre-page btn-page position-relative",on:{click:function(t){e.changePage("decrease")}}},[s("i",{staticClass:"fas fa-caret-left icon-control"})]),s("div",{staticClass:"scroll-bar",attrs:{id:"js-scroll-bar"},on:{mousedown:e.startDrag}},[e._m(1)]),s("span",{staticClass:"next-page btn-page position-relative",on:{click:function(t){e.changePage("increase")}}},[s("i",{staticClass:"fas fa-caret-right icon-control"})])])]),s("div",{staticClass:"viewer-fluid-bg",class:{open:e.viewerFluid}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"mx-2 mb-0",attrs:{for:"nightMode-switch"}},[t("span",{staticClass:"slider d-inline-block"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"scroll-pointer position-relative",attrs:{id:"js-scroll-pointer"}},[t("i",{staticClass:"fas fa-circle icon-control"})])}]},d={name:"App",components:{comicIntroduce:s("VU/8")(r,c,!1,function(e){s("3fzg")},null,null).exports,viewer:s("VU/8")(o,l,!1,null,null,null).exports},data:function(){return{nightMode:!1,isReading:!1,currentEpisodeIndex:"",currentPage:1,books:[{name:"衛宮さんちの今日のごはん",author:"TAa",status:"連載中",rate:5,cover:"https://web-ace.jp/img/youngaceup/contents/1000010/comic/YAUP_emiyasan_gohan_bangai_5_002_cmp.jpg",sourceFrom:"https://web-ace.jp/youngaceup/contents/1000010/episode/",source:"https://web-ace.jp/img/youngaceup/contents/1000010/comic/YAUP_",summary:"本作不同於以硬派故事為發展的原作，是一部以「冬木市」為舞台，並且持續和平日常生活的平行故事。物語的核心為「料理」，由主角衛宮士郎以及和士郎有關的各個人物一起親手料理並且一起品嘗來持續發展故事。<br /><br />關於料理每次都會在漫畫中描寫於廚房的料理方法和食譜，冬木的居民和從者們沒有了聖杯大戰的干擾，完全沉浸在溫馨美好的氣氛中。",pages:[{id:18,page:15,filename:"emiyasan_0",suffix:"comp"},{id:19,page:15,filename:"emiyasan_gohan_0",suffix:"_cmp"},{id:20,page:17,filename:"emiyasan_gohan_0",suffix:"_cmp"},{id:21,page:15,filename:"emiyasan_gohan_0",suffix:"_cmp"},{id:22,page:17,filename:"emiyasan_gohan_0",suffix:"_cmp"},{id:23,page:19,filename:"emiyasan_gohan_0",suffix:"_cmp"},{id:"ex5",page:16,filename:"emiyasan_gohan_bangai_",suffix:"_cmp"},{id:24,page:19,filename:"emiyasan_gohan_0",suffix:"_cmp"}],episodes:[{id:18,title:"秋の味覚その2 -キャスター和食応用編-",isNew:!1},{id:19,title:"はさんで簡単おにぎりサンド",isNew:!1},{id:20,title:"大晦日にあったか年越しそば",isNew:!1},{id:21,title:"お弁当の定番 玉子焼き",isNew:!1},{id:22,title:"春薫る、はんなり桜餅",isNew:!1},{id:23,title:"こってり系ほっくり肉じゃが",isNew:!1},{id:"ex5",title:"番外編　英雄王のとある一日",isNew:!1},{id:24,title:"カジキマグロのソテーと野菜たっぷりガスパチョ",isNew:!0}]}]}},methods:{fetochBook:function(){},changeNightMode:function(e){this.nightMode=e,this.nightMode?n()("body").addClass("night-mode"):n()("body").removeClass("night-mode")},openViewer:function(e){this.isReading=!0,this.currentEpisodeIndex=e}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header",[s("div",{staticClass:"container-control text-center"},[s("a",{staticClass:"web-logo d-inline-block",attrs:{href:"#"},on:{click:function(t){e.isReading=!1}}},[e._v("comicomic")])])]),e.isReading?e._e():s("comicIntroduce",{attrs:{book:e.books[0]},on:{openViewer:e.openViewer}}),e.isReading?s("viewer",{attrs:{book:e.books[0],episodeIndex:e.currentEpisodeIndex,page:e.currentPage},on:{switchNightMode:e.changeNightMode,closeViewer:function(t){e.isReading=!1}}}):e._e()],1)},staticRenderFns:[]};var u=s("VU/8")(d,p,!1,function(e){s("01qO")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:u},template:"<App/>"})},Zf1F:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.12e1cbc6cdfc593f916b.js.map