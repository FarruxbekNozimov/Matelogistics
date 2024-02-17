<script setup>
import { comments } from "@/data/comments";
</script>

<template>
	<UContainer>
		<div class="lg:block hidden w-full p-2">
			<h2 class="text-[#214690] lg:text-[24px] text-xl lg:px-4 font-bold">
				Read what our customers have to say about their experience with Mate
				Logistics.
			</h2>
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
				<SwiperSlide v-for="comment in comments" class="p-3" :key="slide">
					<div
						data-aos="flip-left"
						class="border border-[#ECF3FF] bg-white rounded-xl shadow-md h-[200px] p-3">
						<div class="text-[#012A44] flex items-center justify-between mb-3">
							{{ comment.name }}
							<div class="flex items-center gap-1">
								<Icon
									name="material-symbols:kid-star"
									class="text-yellow-500"
									v-for="el in 5" />
							</div>
						</div>
						<p class="text-sm h-[100px] text-[#5D5D5F] font-[400]">
							{{ comment.text }}
						</p>
						<div class="flex items-center justify-between">
							<span class="text-sm text-[#012A44]">{{ comment.date }}</span>
							<Icon name="logos:google" class="text-7xl" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="lg:block show">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed et nesciunt qui ipsa quibusdam quisquam exercitationem magnam. Maxime saepe doloremque ad quasi qui velit inventore nisi eos? Aliquam, molestias.</p>
		</div>
	</UContainer>
</template>

<style scoped></style>
