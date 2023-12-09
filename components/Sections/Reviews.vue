<script setup>
const importImage = (imageName) => {
	const images = import.meta.globEager("@/assets/img/*");
	const imageKeys = Object.keys(images);
	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
	return images[imageKey].default;
};
</script>

<template>
	<div>
		<Container :px="`p-2`">
			<div class="flex items-center justify-evenly mb-10">
				<CardsReviewCard
					title="Google"
					reviews="170"
					number="4.6"
					:img="importImage('google-review.png')" />
				<CardsReviewCard
					title="BBB"
					reviews="8"
					number="4.6"
					:img="importImage('bbb-review.png')" />
			</div>
		</Container>
	</div>
</template>

<style scoped></style>
