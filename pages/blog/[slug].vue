<script setup>
import { ref, onMounted } from "vue";
const route = useRoute();
const isLoading = ref(true);
const { data } = await useFetch(
	`https://api.matelogisticss.com/api/articles/${route.params.slug}`
);
onMounted(() => {
	isLoading.value = false;
});
</script>

<template>
	<Container :px="`p-2`">
		<div class="mb-10 px-20">
			<h3 class="text-[40px] text-[#214690] font-[600]">{{ data.title }}</h3>
			<div class="flex items-center justify-between mb-10">
				<div class="flex items-center">
					<span class="text-[#008AFF] text-[14px] font-[400]">Mate`s blog</span>
					<Icon
						name="ic:baseline-navigate-next"
						class="text-[#9A999B] text-lg[14px]" />
					<span class="text-[#008AFF] text-[14px] font-[400]">Mate`s blog</span>
					<Icon
						name="ic:baseline-navigate-next"
						class="text-[#9A999B] text-lg[14px]" />
					<span class="text-[#9A999B] text-[14px] font-[400]">
						{{ data.title }}
					</span>
				</div>
				<div class="flex items-center gap-2 text-[12px] text-[#B6C2CD]">
					<Icon name="material-symbols:calendar-today-rounded" class="" />
					<p>Posted on: {{ data.created_date }}</p>
				</div>
			</div>
		</div>
		<div
			v-if="isLoading"
			class="w-full mb-5 rounded-2xl shadow-lg bg-gray-200"
			style="height: 300px"></div>
		<NuxtImg
			v-if="!isLoading"
			:src="data.image"
			class="w-full mb-5 rounded-2xl shadow-lg"
			loading="lazy" />
		<div class="text-[#5D5D5F]" v-html="data?.body"></div>
	</Container>
</template>

<style scoped></style>
