<script setup>
defineProps(["title", "info", "isEdit"]);
</script>

<template>
	<div class="flex items-center border-b py-3">
		<div class="w-1/2 flex items-center justify-between pr-5 gap-2">
			<span class="text-[#868686] text-[14px] font-[600] text-balance">
				{{ title }}
			</span>
			<div v-if="info">
				<UPopover :popper="{ arrow: true }">
					<Icon name="ri:information-fill" class="text-[#9A999B] text-xl" />

					<template #panel>
						<div
							class="border border-[#D2DBEC] max-w-[290px] text-pretty text-[#5D5D5F] text-[13px] font-[400] p-2">
							{{ info }}
						</div>
					</template>
				</UPopover>
			</div>
		</div>
		<div class="w-2/3 flex items-center justify-between">
			<slot class="w-1/2" />
			<Icon
				v-if="isEdit"
				name="ic:baseline-mode-edit"
				class="text-[#9A999B] text-xl" />
		</div>
	</div>
</template>

<style scoped></style>
