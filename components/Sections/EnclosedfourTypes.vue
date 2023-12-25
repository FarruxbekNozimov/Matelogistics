<script setup>
import { enclosed } from "@/data/enclosed";
</script>

<template>
	<UContainer>
		<div
			class="mb-10 bg-gradient-to-r rounded-xl p-5 from-[#008AFF] to-[#005BA8]">
			<div class="grid lg:grid-cols-2 md:grid-cols-2 gap-10">
				<CardsEnclosedCard
					v-for="el in enclosed"
					:num="el.num"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
