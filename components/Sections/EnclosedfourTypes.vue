<script setup>
import { enclosed } from "@/data/enclosed";
</script>

<template>
	<UContainer>
		<div
			class="mb-10 bg-gradient-to-r rounded-xl p-5 from-[#008AFF] to-[#005BA8]">
			<div class="md:flex items-center justify-between gap-5">
				<div class="md:w-1/2 space-y-5 mb-10">
					<CardsEnclosedCard
						:num="enclosed[0].num"
						:title="enclosed[0].title"
						:text="enclosed[0].text" />
					<CardsEnclosedCard
						:num="enclosed[1].num"
						:title="enclosed[1].title"
						:text="enclosed[1].text" />
				</div>
				<div class="md:w-1/2 space-y-5 mt-10">
					<CardsEnclosedCard
						:num="enclosed[2].num"
						:title="enclosed[2].title"
						:text="enclosed[2].text" />
					<CardsEnclosedCard
						:num="enclosed[3].num"
						:title="enclosed[3].title"
						:text="enclosed[3].text" />
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
