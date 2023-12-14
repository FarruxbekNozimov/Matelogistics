<script setup>
import { enclosed } from "@/data/enclosed";
</script>

<template>
	<Container :px="`p-2`">
		<div class="mb-10">
			<div class="grid lg:grid-cols-2 md:grid-cols-2 mt-10 gap-8">
				<CardsEnclosedCard
					v-for="el in enclosed"
					:num="el.num"
					:title="el.title"
					:text="el.text" />
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
