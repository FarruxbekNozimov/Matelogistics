<script setup></script>

<template>
	<!-- MAIN BANNER -->
	<Container :px="`p-2`">
		<div
			class="lg:bg-[url('/img/banner-car.png')] bg-[url('/img/banner-sm.png')] bg-no-repeat bg-cover relative md:h-[380px] h-[550px] lg:flex items-center rounded-xl justify-center lg:px-10 p-4 pt-10">
			<div class="z-1 lg:w-[70%] w-full pr-10">
				<h3 class="lg:text-[50px] text-[28px] text-white font-semibold">
					Enclosed Auto Transport
				</h3>
				<p
					class="lg:text-[24px] text-[17px] my-3 text-white lg:font-bold font-thin">
					Enclosed Auto Transport: Secure, Reliable Transport with Mate
					Logistics
				</p>
			</div>
			<div class="z-1 lg:w-[30%]">
				<GetQuoteForm />
			</div>
		</div>
	</Container>
</template>

<style scoped></style>
