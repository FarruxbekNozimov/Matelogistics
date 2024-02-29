<script setup>
import { methods } from "@/data/methods";
</script>

<template>
	<UContainer>
		<div class="mb-10">
			<TitleBar title="Explore car shipping methods: " no="1" />
			<TitleBar title="A guide to common auto transportation options" />
			<div class="grid lg:grid-cols-4 md:grid-cols-2 mt-10 gap-5">
				<CardsMethodCard
					v-for="el in methods"
					:img="el.img"
					:title="el.title"
					:text="el.text"
					:link="el.link" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
