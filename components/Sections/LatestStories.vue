<script setup>
const route = useRoute();

const { data, pending, error, refresh } = await useFetch(
	`https://api.matelogisticss.com/api/articles`
);
console.log(data.value);
</script>

<template>
	<Container :px="`p-2`">
		<div class="mb-10">
			<TitleBar title="The latest stories for you" class="mb-10" />
			<div class="flex items-center justify-between mb-5">
				<div class="flex items-center gap-3">
					<button class="bg-[#D0E4FF] rounded-full p-1">
						<Icon name="ic:baseline-sync" class="text-4xl text-[#024E90]" />
					</button>
					<p class="text-[#024E90] text-[17px]">
						{{ data.results[0].created_date }}
					</p>
				</div>
				<div class="flex items-center gap-5">
					<button class="bg-[#2C7BF2] border border-[#2C7BF2] rounded-full p-1">
						<Icon
							name="material-symbols:arrow-left-alt-rounded"
							class="text-4xl text-white" />
					</button>
					<button
						class="bg-white border border-[#2C7BF2] hover:bg-[#2C7BF2] rounded-full p-1">
						<Icon
							name="material-symbols:arrow-right-alt-rounded"
							class="text-4xl text-[#2C7BF2] hover:text-white" />
					</button>
				</div>
			</div>
			<div class="w-full block">
				<SwiperModule>
					<SwiperSlide v-for="el in data.results" :key="slide">
						<CardsBlogCard :data="el" />
					</SwiperSlide>
				</SwiperModule>
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
