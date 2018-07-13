<template lang="pug">
  #app
    header
      .container-control.text-center
        a.web-logo.d-inline-block(href="#", @click="isReading = false") comicomic
    //- router-view
    comicIntroduce(v-if="!isReading", @openViewer="openViewer", :book="books[0]")
    viewer(v-if="isReading", @switchNightMode="changeNightMode", @closeViewer="isReading = false", :book="books[0]", :episodeIndex="currentEpisodeIndex", :page="currentPage")
</template>

<script>
  import comicIntroduce from './components/comicIntroduce'
  import viewer from './components/viewer'
  import $ from 'jquery'

  export default {
    name: 'App',
    components: {
      comicIntroduce,
      viewer
    },
    data() {
      return {
        nightMode: false,
        isReading: false,
        currentEpisodeIndex: '',
        currentPage: 1,
        books: [{
          name: '衛宮さんちの今日のごはん',
          author: 'TAa',
          status: '連載中',
          rate: 5,
          cover: 'https://web-ace.jp/img/youngaceup/contents/1000010/comic/YAUP_emiyasan_gohan_bangai_5_002_cmp.jpg',
          sourceFrom: 'https://web-ace.jp/youngaceup/contents/1000010/episode/',
          source: 'https://web-ace.jp/img/youngaceup/contents/1000010/comic/YAUP_',
          summary: '本作不同於以硬派故事為發展的原作，是一部以「冬木市」為舞台，並且持續和平日常生活的平行故事。物語的核心為「料理」，由主角衛宮士郎以及和士郎有關的各個人物一起親手料理並且一起品嘗來持續發展故事。<br /><br />關於料理每次都會在漫畫中描寫於廚房的料理方法和食譜，冬木的居民和從者們沒有了聖杯大戰的干擾，完全沉浸在溫馨美好的氣氛中。',
          pages: [{
            id: 18,
            page: 15,
            filename: 'emiyasan_0',
            suffix: 'comp',
          }, {
            id: 19,
            page: 15,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }, {
            id: 20,
            page: 17,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }, {
            id: 21,
            page: 15,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }, {
            id: 22,
            page: 17,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }, {
            id: 23,
            page: 19,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }, {
            id: 'ex5',
            page: 16,
            filename: 'emiyasan_gohan_bangai_',
            suffix: '_cmp',
          }, {
            id: 24,
            page: 19,
            filename: 'emiyasan_gohan_0',
            suffix: '_cmp',
          }],
          episodes: [{
            id: 18,
            title: '秋の味覚その2 -キャスター和食応用編-',
            isNew: false,
          }, {
            id: 19,
            title: 'はさんで簡単おにぎりサンド',
            isNew: false,
          }, {
            id: 20,
            title: '大晦日にあったか年越しそば',
            isNew: false,
          }, {
            id: 21,
            title: 'お弁当の定番 玉子焼き',
            isNew: false,
          }, {
            id: 22,
            title: '春薫る、はんなり桜餅',
            isNew: false,
          }, {
            id: 23,
            title: 'こってり系ほっくり肉じゃが',
            isNew: false,
          }, {
            id: 'ex5',
            title: '番外編　英雄王のとある一日',
            isNew: false,
          }, {
            id: 24,
            title: 'カジキマグロのソテーと野菜たっぷりガスパチョ',
            isNew: true,
          }]
        }]
      }
    },
    methods: {
      fetochBook() {
        const vm = this;
      },
      changeNightMode(value) {
        const vm = this;
        vm.nightMode = value;
        if (vm.nightMode) {
          $('body').addClass('night-mode');
        } else {
          $('body').removeClass('night-mode');
        }
      },
      openViewer(episodeIndex) {
        const vm = this;
        vm.isReading = true;
        vm.currentEpisodeIndex = episodeIndex;
      }
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i');
  @import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css')
</style>
