<script setup>
import { lastnews } from "@/data/lastnews";
</script>

<template>
	<div class="lg:block hidden w-full p-2">
		<div class="" @click="$router.push(`/inner-news/`)"></div>
		<Swiper
			:modules="[SwiperAutoplay, SwiperPagination]"
			:loop="true"
			:slides-per-view="3"
			:effect="'creative'"
			:autoplay="{ delay: 5000, disableOnInteraction: true }"
			:creative-effect="{
				prev: { shadow: false, translate: ['-20%', 0, -1] },
				next: { translate: ['100%', 0, 0] },
			}">
			<SwiperSlide v-for="lastnew in lastnews" class="p-3" :key="slide">
				<div class="rounded-xl shadow-xl h-[200px] p-3">
					<img src="/img/lastnewsimg1.png" class="" />
					{{ lastnew.img }}
				</div>
				<div class="lg:grid-cols-4 mt-14 gap-12">
					{{ lastnew.title }}
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style lang=""></style>
