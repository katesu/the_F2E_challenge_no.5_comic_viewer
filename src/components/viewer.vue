<template lang="pug">
	.viewer.my-4
		.viewer-header.container-control.d-flex.align-items-center.mb-4.text-capitalize
				.viewer-comic-name(@click="$emit('closeViewer')") {{ book.name }}
				i.fas.fa-caret-right.mx-2
				.viewer-select-control
					select#episodes-select.custom-select(v-model="currentEpIndex", @change="isLastEpisode")
						option(v-for="(episode, index) in book.episodes", :value="index") episode {{ episode.id }}
					select#pages-select.custom-select(v-model="currentPage", @change="isLastPage")
						option(v-for="page in book.pages[currentEpIndex].page", :value="page") page {{page < 10 ? '0' : ''}}{{page}}
				.viewer-mode-switch.d-flex.align-items-center
					i.fas.fa-sun(:class="{'switch-off': nightMode}")
					input#nightMode-switch.d-none(type="checkbox", v-model="nightMode", :true-value="true", :false-value="false", @change="$emit('switchNightMode', nightMode)")
					label.mx-2.mb-0(for="nightMode-switch")
						span.slider.d-inline-block
					i.far.fa-moon(:class="{'switch-off': !nightMode}")
		.viewer-body.d-flex(:class="{'viewer-fluid': viewerFluid}")
			span.viewer-fluid-close(@click="viewerFluid = false") X
			.pre-page.btn-page(@click="changePage('decrease')")
				i.fas.fa-chevron-left.pl-4
			.viewer-content(@click="viewerFluid = true")
				img.img-fluid(:src="currentPageUrl")
			.next-page.btn-page(@click="changePage('increase')")
				i.fas.fa-chevron-right.pl-4
		.viewer-footer.container-control
			.preview-display.position-relative
				span.pre-episode.btn-episode(@click="changeEpisode('decrease')")
					i.fas.fa-angle-double-left.icon-control
				.preview-content.position-relative
					#js-preview-images.preview-images.d-flex
						div(v-for="page in book.pages[currentEpIndex].page", :class="{active: page === currentPage}", @click="currentPage = page")
							span.page-number {{page < 10 ? '0' : ''}}{{page}}
							img.img-fluid(:src="`${baseUrl}${epPageData.filename}${ep}${page < 10 ? '00' : page < 100 ? '0' : ''}${page}${epPageData.suffix}.jpg`")
				span.next-episode.btn-episode(:class="{active: lastPage}", @click="changeEpisode('increase')")
					i.fas.fa-angle-double-right.icon-control
			.viewer-page-bar.d-flex
				span.pre-page.btn-page.position-relative(@click="changePage('decrease')")
					i.fas.fa-caret-left.icon-control
				#js-scroll-bar.scroll-bar(@mousedown="startDrag")
					#js-scroll-pointer.scroll-pointer.position-relative
						i.fas.fa-circle.icon-control
				span.next-page.btn-page.position-relative(@click="changePage('increase')")
					i.fas.fa-caret-right.icon-control
		.viewer-fluid-bg(:class="{open: viewerFluid}")
</template>

<script>
	import $ from 'jquery'

	export default {
		name: 'viewer',
		props: ['book', 'episodeIndex', 'page'],
		data() {
			return {
				nightMode: false,
				viewerFluid: false,
				dragging: false,
				currentEpIndex: '',
				currentPage: '',
				lastPage: false,
				lastEpisode: false,
				baseUrl: '',
			}
		},
		methods: {
			changePage(mode) {
				const vm = this;
				if (mode === 'increase') {
					vm.currentPage + 1 <= vm.epPageData.page ? vm.currentPage++ : false;
				} else if (mode === 'decrease') {
					vm.currentPage - 1 >= 1 ? vm.currentPage-- : false;
				}
				vm.movePreviewBar();
				vm.movePrevieWindow();
			},
			changeEpisode(mode) {
				const vm = this;
				if (mode === 'increase') {
					vm.currentEpIndex + 1 <= vm.book.episodes.length - 1 ? vm.currentEpIndex++ : false;
				} else if (mode === 'decrease') {
					vm.currentEpIndex - 1 >= 0 ? vm.currentEpIndex-- : false;
				}
				vm.currentPage = 1;
				vm.movePreviewBar();
				vm.movePrevieWindow();
			},
			isLastPage() {
				const vm = this;
				if (vm.lastEpisode) {
					!vm.lastPage ? false : vm.lastPage = false;
				} else {
					vm.currentPage === vm.epPageData.page ? vm.lastPage = true : vm.lastPage = false;
				}
			},
			isLastEpisode() {
				const vm = this;
				vm.currentEpIndex === vm.book.episodes.length - 1 ? vm.lastEpisode = true : vm.lastEpisode = false;
			},
			movePrevieWindow() {
				const vm = this;
				const $previewWindow = $('#js-preview-images');
				const space = '106';
				const moveFromPage = 4
				let totalPage = vm.epPageData.page;
				if (vm.currentPage > totalPage - moveFromPage){
					let moveSpace = (totalPage - moveFromPage - 1) * space;
					$previewWindow.css({
						transform: `translateX(-${moveSpace}px)`
					})
				} else if (vm.currentPage >= moveFromPage) {
					let moveSpace = (vm.currentPage - moveFromPage + 1) * space;
					$previewWindow.css({
						transform: `translateX(-${moveSpace}px)`
					})
				}else if ( vm.currentPage < moveFromPage){
					$previewWindow.css({
						transform: `translateX(0px)`
					});
				}
			},
			movePreviewBar(jumpToX){
				const vm = this;
				const $scrollBar = $('#js-scroll-bar')
				const $scrollPointer = $('#js-scroll-pointer');
				const barBorder = 4;
				const pointerWidth = $scrollPointer.width();
				const ballWidth = 12
				const pointerXMargin = 7;
				const barWidth = $scrollBar.width() - (pointerXMargin * 2) - pointerWidth;
				const barXStart = $scrollBar.offset().left + barBorder + pointerXMargin + ((pointerWidth + ballWidth) / 2);
				const barXEnd = barXStart + barWidth;
				let totalPage = vm.epPageData.page;
				let eachPageWidth = parseInt(barWidth / (totalPage - 1));

				if (!jumpToX) {
					if(vm.currentPage === 1){
						var space = 0;
					} else {
						var space = ((vm.currentPage - 1) * eachPageWidth);
					}
				} else {
					if (jumpToX <= barXStart){
						vm.currentPage = 1;
						var space = 0;
					} else if (jumpToX >= barXEnd){
						vm.currentPage = totalPage;
						var space = ((totalPage - 1) * eachPageWidth);
					} else {
						var space;
						let jumpToPage = parseInt((jumpToX - barXStart) / eachPageWidth);
						vm.currentPage = jumpToPage < 1 ? 1 : jumpToPage;
						vm.currentPage === 1 ? space = 0 : space = ((jumpToPage - 1) * eachPageWidth)
					}
				}
				$scrollPointer.css({
					transform: `translateX(${space}px)`
				});
				vm.isLastPage();
				vm.isLastEpisode();

			},
			startDrag(event){
				const vm = this;
				vm.dragging = true;
			},
			stopDrag(event){
				const vm = this;
				if (vm.dragging){
					let jumpTo = event.clientX;
					vm.movePreviewBar(jumpTo);
					vm.movePrevieWindow();
					vm.dragging = false;
				}
			},
		},
		computed: {
			ep() {
				const vm = this;
				let ep = vm.book.episodes[vm.currentEpIndex].id;
				if (typeof(ep) === 'string') {
					ep = ep.replace('ex', '');
				}
				return `${ep}_`
			},
			epPageData() {
				const vm = this;
				return vm.book.pages[vm.currentEpIndex];
			},
			currentPageUrl() {
				const vm = this;
				const pagePrefix = vm.currentPage < 10 ? '00' : vm.currentPage < 100 ? '0' : '';
				return `${vm.baseUrl}${vm.epPageData.filename}${vm.ep}${pagePrefix}${vm.currentPage}${vm.epPageData.suffix}.jpg`
			}
		},
		created() {
			const vm = this;
			vm.currentEpIndex = vm.episodeIndex;
			vm.currentPage = vm.page;
			vm.baseUrl = vm.book.source;
			vm.isLastEpisode();
		},
		mounted(){
			const vm = this;
			window.addEventListener('mouseup', vm.stopDrag);
		}
	}
</script>
