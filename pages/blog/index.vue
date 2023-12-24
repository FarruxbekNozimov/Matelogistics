<script setup>
const links = [
	{ label: "Mate's blog", icon: "i-heroicons-home", to: "/" },
	{ label: "Category", icon: "i-heroicons-square-3-stack-3d" },
];
const categories = [
	{ label: "All" },
	{ label: "Tips-Tricks" },
	{ label: "Industry news" },
	{ label: "Company news" },
	{ label: "Maintenance" },
	{ label: "Spotlights" },
	{ label: "Usefull" },
];
</script>

<template>
	<UContainer>
		<div class="p-2">
			<UTabs :items="categories" @change="onChange" />
		</div>
		<hr class="my-5" />
		<UBreadcrumb divider=">" :links="links" />
		<SectionsLatestStories title="Here are top 3 articles for you" />
	</UContainer>
</template>

<style scoped></style>
