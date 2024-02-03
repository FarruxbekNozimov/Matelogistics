<script setup>
import { navbar } from "@/data/navbar.js";
const isOpen = ref(false);
</script>

<template>
	<header class="z-50 w-full bg-white/90 sticky top-0 left-0">
		<!-- TOP GRAY HEADER -->
		<HeaderTop />
		<nav class="flex items-center justify-between p-4 lg:px-0">
			<div class="flex items-center justify-center md:gap-5">
				<UButton
					class="lg:hidden text-[#008AFF]"
					size="sm"
					color="blue"
					square
					variant="soft"
					@click="isOpen = true">
					<Icon name="game-icons:hamburger-menu" class="text-xl" />
				</UButton>
				<USlideover side="left" v-model="isOpen">
					<UCard
						class="flex flex-col flex-1 transition overflow-y-auto scroll-m-0"
						:ui="{
							body: { base: 'flex-1' },
							ring: '',
							divide: 'divide-y divide-gray-100',
						}">
						<template #header>
							<div class="flex items-center justify-between">
								<img src="/img/logo.png" class="h-10" alt="" />
								<UButton
									color="gray"
									variant="ghost"
									icon="i-heroicons-x-mark-20-solid"
									class="-my-1"
									@click="isOpen = false" />
							</div>
						</template>
						<div class="h-screen">
							<div v-for="(el, i) in navbar">
								<div class="border-b">
									<div
										v-if="typeof el == 'object'"
										class="text-[#214690] text-[16px] font-[600] py-3 flex items-center justify-between">
										{{ i }}
										<Icon name="ic:outline-chevron-right" class="text-2xl" />
									</div>
									<router-link
										v-else
										:to="el"
										class="text-[#214690] text-[16px] font-[600] py-3 flex items-center justify-between">
										{{ i }}
									</router-link>
								</div>
							</div>
							<router-link
								to="/quote"
								class="mt-5 block text-[20px] text-center bg-[#E52E2E] text-white rounded-2xl duration-300 font-[600] p-2 py-2.5">
								Get an instant quote
							</router-link>
							<router-link
								to="check-order"
								class="mt-5 block text-[20px] text-center border border-[#008AFF] text-[#008AFF] p-2 px-4 rounded-2xl duration-300 font-[600]">
								Check my order status
							</router-link>
							<a
								href="tel:+1 (929) 592-3003"
								class="flex items-center justify-center gap-3 text-center text-[#214690] mt-5">
								<Icon name="material-symbols:call-outline" class="text-2xl" />
								<span class="font-[600] text-[20px]"> +1 (929) 592-3003 </span>
							</a>
							<h3
								class="text-[#214690] font-[600] text-[16px] text-center py-3">
								Contact us
							</h3>
							<div class="flex items-center justify-center gap-5">
								<a href="https://www.instagram.com/matelogistics/">
									<img src="/img/Brands/bbb.png" alt="" class="h-4 w-4" />
								</a>
							</div>
						</div>
					</UCard>
				</USlideover>
				<!-- LOGO-->
				<div class="flex lg:flex-1">
					<router-link to="/">
						<img class="md:h-12 h-10 w-auto" src="/img/logo.png" alt="" />
					</router-link>
				</div>
				<!-- NAVBAR-->
				<div class="hidden lg:flex gap-7">
					<div class="relative group" v-for="(el, i) in navbar">
						<router-link
							:to="typeof el === 'object' ? '' : el"
							class="relative flex items-center gap-x-1 text-[#214690] group-hover:text-[#008AFF]">
							{{ i }}
							<Icon name="ph:caret-down-bold" v-if="typeof el === 'object'" />
							<span
								class="absolute w-0 group-hover:w-full bg-[#008AFF] h-[4px] rounded-full -bottom-1 duration-300"></span>
						</router-link>
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
			<router-link
				to="/quote"
				class="text-[15px] bg-[#E52E2E] text-white rounded-2xl hover:bg-red-700 hover:text-white duration-300 font-[600] p-2 px-3 md:hidden block">
				Get a quote
			</router-link>
			<div class="gap-5 px-2 hidden md:block">
				<router-link
					to="/quote"
					class="text-[17px] bg-[#E52E2E] text-white rounded-2xl hover:bg-red-700 hover:text-white duration-300 font-[600] p-2 py-2.5">
					Get an instant quote
				</router-link>
				<router-link
					to="tel:(929) 592-3003"
					class="text-[20px] text-blue-500 p-2 px-4 rounded-2xl hover:bg-blue-500 hover:text-white duration-300 font-[600]">
					(929) 592-3003
				</router-link>
			</div>
		</nav>
	</header>
</template>
<style scoped></style>
