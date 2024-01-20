<script setup>
import { base } from "@/store/mainURL";
const route = useRoute();
const { pending, data } = await useLazyFetch(
	`${base}/articles/${route.params.slug}`
);
const links = [
	{ label: "Mate's blog", icon: "i-heroicons-home", to: "/" },
	{ label: "Category", icon: "i-heroicons-square-3-stack-3d", to: "/blog" },
];
</script>

<template>
	<UContainer>
		<div v-if="pending">
			<Loading />
		</div>
		<div v-else>
			<div>
				<h3 class="text-[40px] text-[#214690] font-[600]">{{ data.title }}</h3>
				<div class="flex items-center justify-between mb-10">
					<UBreadcrumb divider=">" :links="[...links, { label: data.title }]" />
					<HeaderTree :tree="['Mate`s blog', 'Tips-Tricks', data.title]" />

					<div class="flex items-center gap-2 text-[14px] text-[#B6C2CD]">
						<Icon name="material-symbols:calendar-today-rounded" class="" />
						<p>Posted on: {{ data.created_date }}</p>
					</div>
				</div>
			</div>
			<NuxtImg
				:src="data.image"
				class="w-full mb-5 rounded-2xl shadow-lg"
				loading="lazy" />
			<div class="grid md:grid-cols-5 sm:grid-cols-1 gap-5">
				<div class="text-center space-y-3 md:block hidden">
					<h3 class="text-[#024E90] text-[16px] font-[600]">Share on:</h3>
					<a href="" class="block">
						<Icon name="fa6-brands:x-twitter" class="text-2xl text-[#5D5D5F]" />
					</a>
					<a href="" class="block">
						<Icon name="streamline:instagram" class="text-2xl text-[#5D5D5F]" />
					</a>
					<a href="" class="block">
						<Icon
							name="teenyicons:facebook-outline"
							class="text-2xl text-[#5D5D5F]" />
					</a>
					<a href="" class="block">
						<Icon
							name="teenyicons:linkedin-outline"
							class="text-2xl text-[#5D5D5F]" />
					</a>
				</div>
				<div class="lg:col-span-3 md:col-span-4">
					<div
						class="text-[#5D5D5F] mb-10 text-[16px] font-[400]"
						v-html="data?.body"></div>
					<div
						class="flex items-center justify-between border-y broder-[#008AFF4D] py-5">
						<span class="text-[#C2C2C3]">Share on social media:</span>
						<div class="flex gap-4">
							<a href="">
								<Icon
									name="fa6-brands:x-twitter"
									class="text-2xl text-[#5D5D5F]" />
							</a>
							<a href="">
								<Icon
									name="streamline:instagram"
									class="text-2xl text-[#5D5D5F]" />
							</a>
							<a href="">
								<Icon
									name="teenyicons:facebook-outline"
									class="text-2xl text-[#5D5D5F]" />
							</a>
							<a href="">
								<Icon
									name="teenyicons:linkedin-outline"
									class="text-2xl text-[#5D5D5F]" />
							</a>
						</div>
					</div>
					<SectionsLatestStories />
				</div>
				<div class="relative lg:block hidden">
					<h3 class="absolute p-2 py-3 text-white text-[24px] font-[600]">
						Are you thinking of shipping your car?
					</h3>
					<img
						src="/img/banner-car.png"
						alt=""
						class="h-[600px] object-cover rounded-2xl" />
					<h3 class="text-white absolute bottom-12 p-2 font-[600] text-[16px]">
						Our live cost calculator makes it easy
					</h3>
					<router-link
						to="/quote"
						class="absolute bottom-1 w-[95%] text-[17px] bg-[#E52E2E] text-white rounded-2xl hover:bg-red-700 hover:text-white duration-300 font-[600] p-2 py-2.5 mx-1.5 text-center">
						Get an instant quote
					</router-link>
				</div>
			</div>
		</div>
	</UContainer>
</template>

<style scoped></style>
