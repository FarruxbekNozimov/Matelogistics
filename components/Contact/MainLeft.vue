<script setup>
import { actions } from "@/store/contact";
const toast = useToast();

const subjects = [
	"I want a free quote",
	"I have an existing order",
	"I want to book a shipment",
	"Other questions",
];

const state = reactive({
	name: "",
	email: "",
	nmb: "",
	subject: subjects[0],
	comment: "",
});

const sendMessage = async () => {
	console.log(state.name, state.email, state.nmb, state.subject, state.comment);
	if (
		state.name &&
		state.email &&
		state.nmb &&
		state.subject &&
		state.comment
	) {
		const data = {
			name: state.name,
			email: state.email,
			nmb: `${state.nmb}`,
			subject: subjects.indexOf(state.subject),
			comment: state.comment,
		};
		await actions.createContact(data);
	} else {
		toast.add({
			title: "Please fill out the form",
			icon: "material-symbols:error",
			color: "red",
			timeout: 5000,
		});
	}
};
</script>

<template>
	<div class="space-y-4">
		<UFormGroup label="Name" name="name" required>
			<UInput
				color="blue"
				variant="none"
				v-model="state.name"
				inputClass="text-gray-700 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-[#E8F0FF] focus:border-blue-500"
				placeholder="Mike Thomas" />
		</UFormGroup>
		<UFormGroup label="Email" name="email" required>
			<UInput
				color="blue"
				variant="none"
				v-model="state.email"
				type="email"
				inputClass="text-gray-700 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-[#E8F0FF] focus:border-blue-500"
				placeholder="Your email" />
		</UFormGroup>
		<UFormGroup label="Phone" name="phone" required>
			<UInput
				color="blue"
				variant="none"
				v-model="state.nmb"
				type="number"
				inputClass="text-gray-700 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-[#E8F0FF] focus:border-blue-500"
				placeholder="Your phone number" />
		</UFormGroup>
		<UFormGroup label="Subject" name="subject" required>
			<USelectMenu
				color="blue"
				variant="none"
				v-model="state.subject"
				selectClass="text-gray-700 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-[#E8F0FF] focus:border-blue-500"
				:options="subjects"
				placeholder="Select subject" />
		</UFormGroup>
		<UFormGroup label="Message" name="comment" required>
			<UTextarea
				color="blue"
				variant="none"
				autoresize
				textareaClass="text-gray-700 p-2 px-3 rounded-xl text-[16px] font-[400] bg-[#E8F0FF] border border-[#E8F0FF] focus:border-blue-500"
				placeholder="Type your comment here..."
				v-model="state.comment" />
		</UFormGroup>
		<UButton
			type="submit"
			@click="sendMessage"
			class="bg-[#008AFF] hover:bg-blue-500 rounded-xl p-3 px-7 text-[16px] font-[600]">
			Send comment
		</UButton>
	</div>
</template>
