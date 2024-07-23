<script setup></script>

<template>
	<header class="z-50 w-full bg-white/90 sticky top-0 left-0">
		<UContainer>
			<nav class="flex items-center justify-between p-4 lg:px-0">
				<div class="flex items-center justify-center md:gap-5">
					<button class="lg:hidden text-[#008AFF]">
						<Icon name="game-icons:hamburger-menu" class="text-xl" />
					</button>
					<!-- LOGO-->
					<div class="flex lg:flex-1">
						<NuxtLink href="/">
							<img class="h-12 w-auto" src="/img/logo.png" alt="" />
						</NuxtLink>
					</div>
				</div>
				<!-- NAVBAR RIGHT BUTTONS-->
				<a
					href="tel:+19295622005"
					class="text-[20px] font-[600] text-[#008AFF]">
					(929) 562-2005
				</a>
			</nav>
		</UContainer>
	</header>
</template>
<style scoped></style>
