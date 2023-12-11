<script setup></script>

<template>
	<SwiperModule
		:modules="[SwiperAutoplay, SwiperPagination]"
		:loop="true"
		:slides-per-view="1"
		:effect="'creative'"
		:autoplay="{ delay: 1000, disableOnInteraction: true }"
		:spaceBetween="10"
		:breakpoints="{
			400: { slidesPerView: 1 },
			600: { slidesPerView: 2 },
			900: { slidesPerView: 3 },
		}"
		:creative-effect="{
			prev: { shadow: false, translate: ['-20%', 0, -1] },
			next: { translate: ['100%', 0, 0] },
		}">
		<slot />
	</SwiperModule>
</template>

<style scoped></style>
