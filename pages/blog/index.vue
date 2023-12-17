<script setup>
const categories = [
	"All",
	"Tips-Tricks",
	"Industry news",
	"Company news",
	"Maintenance",
	"Spotlights",
	"Usefull",
];
</script>

<template>
	<Container px="p-2">
		<div class="px-20">
			<h3 class="text-[#214690] text-[24px] font-[600]">Mate Logistics</h3>
			<p class="text-[#5D5D5F] text-[14px] font-[400] mb-5">Select category</p>
			<div
				class="bg-gray-200/80 flex items-center justify-evenly rounded-full p-0.5">
				<button
					class="bg-white p-2 px-4 rounded-full text-[#9A999B]"
					v-for="el in categories">
					{{ el }}
				</button>
			</div>
		</div>
		<hr class="my-5" />
		<HeaderTree :tree="[`Mate's blog`, 'Category']" />
		<SectionsLatestStories title="Here are top 3 articles for you" />
	</Container>
</template>

<style scoped></style>
