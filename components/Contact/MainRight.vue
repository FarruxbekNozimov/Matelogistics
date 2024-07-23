<script setup>
const details = [
	{
		icon: "material-symbols:location-on-outline-rounded",
		title: "Address:",
		text: "65-34 Myrtle Ave, Queens, NY 11385",
	},
	{
		icon: "material-symbols:phone-in-talk-outline-sharp",
		title: "Mainline: ",
		text: "<a href='tel:+19295622005' class='text-blue-400'>+(929)592-3003</a>",
	},
	{
		icon: "material-symbols:alternate-email-rounded",
		title: "Main:",
		text: "info@matelogisticss.com",
	},
	{
		icon: "solar:dollar-linear",
		title: "Accounting:",
		text: "accounting@matelogisticss.com",
	},
	{
		icon: "iconoir:headset-help",
		title: "Support:",
		text: "support@matelogisticss.com",
	},
];
const workingTime = [
	{ title: "Monday-Saturday", text: "08:00am EST- 07:00pm EST" },
	{ title: "Sunday", text: "10:00am EST- 05:00pm EST" },
	{ title: "Livechat", text: "06:00am EST- 10:00pm EST" },
];
</script>

<template>
	<div>
		<h3 class="text-[#214690] text-[25px] font-[500] mb-5">Contact details</h3>
		<ContactDetailItem v-for="el in details" :data="el" />
		<h3 class="text-[#214690] text-[26px] font-[500] mb-5 mt-10">
			Working hours with Eastern Time Zone (EST)
		</h3>
		<ContactDetailItem v-for="el in workingTime" :data="el" noIcon="1" />
	</div>
</template>

<style scoped></style>
