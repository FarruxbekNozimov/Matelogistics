<script setup>
import { base } from "@/store/mainURL";
const route = useRoute();
const { pending, data } = await useLazyFetch(
	`${base}/articles/${route.params.slug}`
);
</script>

<template>
	<Container :px="`p-2`">
		<div v-if="pending">
			<Loading />
		</div>
		<div v-else>
			<div class="mb-10 px-20">
				<h3 class="text-[40px] text-[#214690] font-[600]">{{ data.title }}</h3>
				<div class="flex items-center justify-between mb-10">
					<HeaderTree :tree="['Mate`s blog', 'Tips-Tricks', data.title]" />
					<div class="flex items-center gap-2 text-[12px] text-[#B6C2CD]">
						<Icon name="material-symbols:calendar-today-rounded" class="" />
						<p>Posted on: {{ data.created_date }}</p>
					</div>
				</div>
			</div>
			<NuxtImg
				:src="data.image"
				class="w-full mb-5 rounded-2xl shadow-lg"
				loading="lazy" />
			<div class="text-[#5D5D5F] mb-10" v-html="data?.body"></div>
		</div>
	</Container>
</template>

<style scoped></style>
