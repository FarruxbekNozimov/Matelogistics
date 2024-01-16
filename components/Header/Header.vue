<script setup>
import { navbar } from "@/data/navbar.js";
</script>

<template>
	<header class="z-50 w-full bg-white/90 sticky top-0 left-0">
		<!-- TOP GRAY HEADER -->
		<HeaderTop />
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
				<!-- NAVBAR-->
				<div class="hidden lg:flex gap-7">
					<div class="relative group" v-for="(el, i) in navbar">
						<NuxtLink
							:to="typeof el === 'object' ? '' : el"
							class="relative flex items-center gap-x-1 text-[#214690] group-hover:text-[#008AFF]">
							{{ i }}
							<Icon name="ph:caret-down-bold" v-if="typeof el === 'object'" />
							<span
								class="absolute w-0 group-hover:w-full bg-[#008AFF] h-[4px] rounded-full -bottom-1 duration-300"></span>
						</NuxtLink>
						<div class="">
							<div
								v-if="typeof el === 'object'"
								class="absolute -left-8 z-10 mt-1 rounded-xl bg-white/90 shadow-xl ring-1 ring-gray-900/5 hidden group-hover:block w-max">
								<div class="p-1">
									<div class="relative rounded-lg p-2 leading-6">
										<div
											v-for="(item, name) in el"
											class="relative mb-2 hover:bg-gray-100 cursor-pointer p-1 item rounded px-2 group/item flex items-center justify-between">
											<a :href="item[1]">
												<span
													class="group/edit text-sm text-[#214690] group-hover/item:text-[#008AFF] block font-semibold">
													{{ name }}
												</span>
												<span class="text-xs text-gray-600">
													{{ item[0] }}
												</span>
												<span
													class="group/edit absolute w-0 group-hover/item:w-full bg-[#008AFF] h-[3px] rounded-full -bottom-1 left-0 duration-300"></span>
											</a>
											<Icon
												v-if="!Array.isArray(item)"
												name="ic:baseline-navigate-next"
												class="text-[#214690] text-2xl ml-5" />
											<div
												v-if="!Array.isArray(item)"
												class="group/edit absolute -top-4 left-full p-2 ml-1 mt-1 rounded-xl bg-[#F5F5F5] shadow-xl ring-1 ring-gray-900/5 w-max hidden group-hover/item:block">
												<a
													:href="subitem[1]"
													class="block relative group/subitem mb-2"
													v-for="(subitem, subname) in item">
													<span
														class="text-sm text-[#214690] group-hover/subitem:text-[#008AFF] block font-semibold">
														{{ subname }}
													</span>
													<span class="text-xs text-gray-600">
														{{ subitem[0] }}
													</span>
													<span
														class="absolute w-0 group-hover/subitem:w-full bg-[#008AFF] h-[3px] rounded-full -bottom-1 left-0 duration-300"></span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- NAVBAR RIGHT BUTTONS-->
			<NuxtLink
				to="/quote"
				class="text-xs border border-red-500 border-r-0 p-2 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white duration-300 font-bold md:mr-10 block lg:hidden">
				Get a quote
			</NuxtLink>
			<div class="hidden lg:flex gap-5 lg:justify-end px-2">
				<NuxtLink
					to="/quote"
					class="lg:text-sm text-xs border border-red-500 border-r-0 p-2 lg:px-4 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white duration-300 font-bold">
					Get an instant quote
				</NuxtLink>
				<NuxtLink
					to="tel:(929) 592-3003"
					class="text-sm border border-blue-500 text-blue-500 p-2 px-4 rounded-2xl hover:bg-blue-500 hover:text-white duration-300 font-bold">
					(929) 592-3003
				</NuxtLink>
			</div>
		</nav>
	</header>
</template>
<style scoped></style>
