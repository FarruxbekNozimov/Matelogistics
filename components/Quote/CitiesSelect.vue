<script setup>
const props = defineProps(["cities", "data", "form"]);
const cities = ref(props.cities);
console.log(cities);
</script>
<template>
	<div
		v-if="cities?.data?.results.length"
		class="absolute top-20 rounded-xl w-full max-h-52 overflow-y-auto bg-white border border-gray-300 shadow-lg">
		<div v-if="cities?.pending" class="text-center">
			<Icon name="eos-icons:bubble-loading" class="text-2xl text-[#005BA8]" />
		</div>
		<div v-else v-for="el in cities.data.results">
			<p
				@click="
					() => ((data.ship_to = el.id), (form.to = `${el.name} ${el.zip}`))
				"
				class="w-full px-3 pt-2 hover:bg-gray-200 duration-300 cursor-pointer text-[15px] text-[#024E90]">
				{{ el.name }} {{ el.zip }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
