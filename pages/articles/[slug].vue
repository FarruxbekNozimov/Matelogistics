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
		<div class="mb-10">
			<TitleBar :title="data?.title" class="mb-5" />
			<div class="flex items-center gap-2 text-md text-[#5D5D5F] mb-10">
				<Icon name="material-symbols:calendar-today-rounded" class="" />
				<p>{{ data.created_date }}</p>
				<Icon name="ic:sharp-circle" class="text-[10px]" />
				<p>{{ data.subtitle }}</p>
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
		</div>
	</Container>
</template>

<style scoped>
/* Add a blur effect to the loading image */
.w-full[style*="height: 300px;"] {
	filter: blur(10px);
	transition: filter 0.5s ease-in-out;
}

/* Remove blur effect when the actual image is loaded */
.w-full:not([style*="height: 300px;"]) {
	filter: blur(0);
}
</style>
