<script setup>
import { experienceFlex } from "@/data/experienceFlex";
</script>

<template>
	<UContainer>
		<div class="mb-10">
			<TitleBar title="Experience the excellence at Mate Logistics:" no="1" />
			<TitleBar title="What you get when you choose to work with us" />
			<div
				class="grid lg:grid-cols-5 md:grid-cols-2 mt-10 border border-[#0071ED80]/20 rounded-xl gap-1 bg-white">
				<CardsExperienceCardFlex
					data-aos="flip-up"
					v-for="el in experienceFlex"
					:img="`/${el.img}`"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
