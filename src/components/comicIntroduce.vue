<template lang="pug">
  .comic.container-control.mt-4.mb-5
    .d-flex
      .comic-cover
        img.img-fluid(:src="book.cover")
      .comic-info
        .comic-title {{ book.name }}
        .info-table
          table
            tbody
              tr
                th genres
                td
                  div fusce/vehicula/dolor
              tr
                th author
                td
                  div {{ book.author }}
              tr
                th status
                td
                  div {{ book.status }}
              tr
                th source from
                td
                  a(:href="`${book.sourceFrom}`") 「衛宮さんちの今日のごはん」各話一覧｜ヤングエースUP
              tr
                th.pb-4 rate
                td.pb-4
                  div
                    i.fas.fa-star.mr-2
                    i.fas.fa-star.mr-2
                    i.fas.fa-star.mr-2
                    i.fas.fa-star.mr-2
                    i.far.fa-star.mr-2
              tr
                th(colspan="2") summary
              tr
                td(colspan="2")
                  div#js-comic-summary
    .comic-episodes.position-relative.w-100
      .episodes-header.position-absolute.px-4.py-1 all episodes
      ul.episodes-body.p-0.m-0
        li.episode-item.px-4.py-2.d-block(v-for="(episode, index) in book.episodes")
          a.d-flex(href="#", @click.prevent="openViewer(index)")
            span.episode-index episode # {{ episode.id }} :
            span.episode-name {{ episode.title }}
              span.episodes-new.ml-3.text-uppercase(v-if="episode.isNew") new
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'home',
    props: ['book'],
    data() {
      return {

      }
    },
    methods: {
      openViewer(episodeIndex) {
        const vm = this;
        vm.$emit('openViewer', episodeIndex);
      }
    },
    created() {
      const vm = this;
    },
    mounted() {
      const vm = this;
      $('#js-comic-summary').append(vm.book.summary);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
