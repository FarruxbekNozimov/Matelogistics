<script setup>
const simple = {
	Distance: "2753mi",
	"First avail. date": "01/21/2023",
	Vehicle: "2020 Alfa Romeo Giulia Quadrifoglio",
	"Ship from": "New York, NY 10025",
	"Ship to": "California City, CA 93505",
};
</script>

<template>
	<Container px="p-2 m-5">
		<div class="bg-white border border-gray-100 rounded-xl shadow-xl p-5">
			<div class="flex justify-between gap-10">
				<div class="w-[70%]">
					<h3 class="text-[#002244E9] text-[24px] font-[600]">
						Vehicle delivery address
					</h3>
					<p class="text-[#96ADC1] font-[400]">
						The specific location where a vehicle is to be delivered.
					</p>
					<div class="mt-3 mb-5 space-y-2">
						<h3 class="text-[#024E90] text-[18px]">Delivery address</h3>
						<div class="flex items-center gap-5">
							<input
								type="text"
								class="rounded-xl outline-none p-4 px-5 bg-[#F4F8FF] border border-[#D2DBEC] text-[#024E90] w-full"
								placeholder="Street home flat" />
							<input
								type="text"
								class="rounded-xl outline-none p-4 px-5 bg-[#F4F8FF] border border-[#D2DBEC] text-[#024E90] w-full"
								placeholder="USA California" />
						</div>
					</div>
					<div class="mt-3 mb-5 space-y-2">
						<h3 class="text-[#024E90] text-[18px]">
							California City, CA 93505 , This is a?
						</h3>
						<div class="flex items-center gap-5">
							<div
								class="flex items-center w-full p-4 px-5 bg-[#F4F8FF] rounded-xl border border-[#D2DBEC] rounded">
								<input
									id="bordered-radio-1"
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
								<label
									for="bordered-radio-1"
									class="w-full ms-2 text-[#024E90] text-[16px] font-[400]">
									Residential address
								</label>
							</div>
							<div
								class="flex items-center w-full p-4 px-5 bg-[#F4F8FF] rounded-xl border border-[#D2DBEC] rounded">
								<input
									checked
									id="bordered-radio-2"
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
								<label
									for="bordered-radio-2"
									class="w-full ms-2 text-[#024E90] text-[16px] font-[400]">
									Residential address
								</label>
							</div>
						</div>
					</div>
					<div class="mt-3 mb-5 space-y-2">
						<h3 class="text-[#024E90] text-[18px]">
							California City, CA 93505 , This is a?
						</h3>
						<div class="flex items-center gap-5">
							<div
								class="flex items-center w-full p-4 px-5 bg-[#F4F8FF] rounded-xl border border-[#D2DBEC] rounded">
								<input
									id="bordered-radio-1"
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
								<label
									for="bordered-radio-1"
									class="w-full ms-2 text-[#024E90] text-[16px] font-[400]">
									Contact me
								</label>
							</div>
							<div
								class="flex items-center w-full p-4 px-5 bg-[#F4F8FF] rounded-xl border border-[#D2DBEC] rounded">
								<input
									checked
									id="bordered-radio-2"
									type="radio"
									value=""
									name="bordered-radio"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
								<label
									for="bordered-radio-2"
									class="w-full ms-2 text-[#024E90] text-[16px] font-[400]">
									Contact someone else
								</label>
							</div>
						</div>
					</div>
					<div class="mt-3 mb-5 space-y-2">
						<h3 class="text-[#024E90] text-[18px]">
							Have any special instructions? (Optional)
						</h3>
						<textarea
							id="message"
							rows="4"
							class="block p-3 w-full rounded-xl bg-[#F4F8FF] border border-gray-300 outline-none text-[#024E90]"
							placeholder="Description"></textarea>
					</div>
					<div class="flex items-start justify-between">
						<div class="">
							<p class="text-[13px] font-[400] mb-5">
								By choosing and submitting information, you agree to all policy
								and privacy rules of the site
							</p>
							<div
								class="bg-gradient-to-r from-[#008AFF] to-[#005BA8] flex items-center gap-5 p-5 rounded-xl shadow">
								<div class="flex items-center bg-white p-2 rounded-full">
									<Icon
										name="material-symbols:call"
										class="text-3xl text-[#008AFF]" />
								</div>
								<div class="">
									<h3 class="text-white text-[13px] font-[700]">
										Having a problems with ordering process?
									</h3>
									<p class="text-white text-[12px] font-[400]">
										We are here to answer (click to call)
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<button
								class="bg-gradient-to-r from-[#008AFF] to-[#005BA8] flex items-center font-[600] shadow gap-2 text-white p-2 px-7 rounded-xl">
								Complete
								<Icon name="material-symbols:arrow-right-alt" class="text-xl" />
							</button>
						</div>
					</div>
					<div class=""></div>
				</div>
				<div class="w-[30%] border border-[#ECF3FF] shadow p-3 rounded-xl">
					<div
						v-for="(el, i) in simple"
						class="flex items-center justify-between border-b border-[#ECF3FF] mb-2 p-2 py-3 text-[14px]">
						<span class="text-[#868686]">{{ i }}</span>
						<span class="text-[#024E90] font-[400]">{{ el }}</span>
						<Icon name="ic:baseline-edit" class="text-[#9A999B] text-lg" />
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
