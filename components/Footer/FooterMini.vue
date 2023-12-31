<script setup>
import { footerLinks } from "@/data/footerLinks";
</script>

<template>
	<div class="p-5">
		<div class="flex items-center gap-10">
			<div class="">
				<img src="@/assets/img/matelogo-footer.png" class="w-full mb-3" />
				<div class="flex items-center justify-between gap-5 mb-2">
					<a href="https://www.instagram.com/matelogistics/">
						<Icon name="bi:instagram" class="text-2xl text-white" />
					</a>
					<a href="">
						<Icon name="brandico:facebook-rect" class="text-2xl text-white" />
					</a>
					<a href=""><Icon name="bi:google" class="text-2xl text-white" /></a>
					<a href="">
						<Icon name="simple-icons:linkedin" class="text-2xl text-white" />
					</a>
				</div>
			</div>
			<img src="@/assets/img/footer-logo2.png" alt="" />
		</div>
	</div>
</template>

<style scoped></style>
