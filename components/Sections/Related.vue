<script setup>
defineProps(["title"]);
import { getArticles } from "@/store/articles";
const { data } = await getArticles();
</script>

<template>
	<UContainer>
		<div class="mb-10">
			<TitleBar :title="title" class="mb-10" />
			<div class="w-full block">
				<Swiper
					:modules="[SwiperAutoplay, SwiperPagination]"
					:loop="true"
					:effect="'creative'"
					:autoplay="{ delay: 1000, disableOnInteraction: true }"
					:spaceBetween="10"
					:breakpoints="{
						400: { slidesPerView: 1 },
						600: { slidesPerView: 2 },
						900: { slidesPerView: 2 },
					}"
					:creative-effect="{
						prev: { shadow: false, translate: ['-20%', 0, -1] },
						next: { translate: ['100%', 0, 0] },
					}">
					<SwiperSlide v-for="el in data?.results">
						<CardsBlogCard :data="el" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
