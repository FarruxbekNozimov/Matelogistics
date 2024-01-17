<script setup>
const info =
	"We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide. We coordinate all shipments through a large network of licensed Auto Shipping Carriers nationwide.";
</script>

<template>
	<div>
		<h3 class="text-[#024E90] text-[24px] font-[700] mb-3">
			Your order details
		</h3>
		<div class="border-[1.5px] border-[#ECF3FF] p-2 py-5 rounded-xl shadow">
			<CalculatorOrderDetailItem title="Distance" isEdit="1">
				<CalculatorText>2753mi</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem
				title="First avai date"
				:info="info"
				isEdit="1">
				<CalculatorText>01/21/2023</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Vehicle" isEdit="1">
				<CalculatorText>2020 Alfa Romeo Giulia Quadrifoglio</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Origin" isEdit="1">
				<CalculatorText>New York, NY 10025</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Destination" isEdit="1">
				<CalculatorText>California City, CA 93505</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Vehicle condition" :info="info">
				<URadioGroup
					color="blue"
					:options="[
						{ value: 'running', label: 'Running' },
						{ value: 'non-running', label: 'Non-running ~(+$125)' },
					]"
					model-value="running" />
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Transport type" :info="info">
				<URadioGroup
					color="blue"
					:options="[
						{ value: 'open', label: 'Open' },
						{ value: 'closed', label: 'Enclosed ~(+$324)' },
					]"
					model-value="open" />
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Service type" :info="info">
				<CalculatorText>Door to door</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Insurance" :info="info">
				<CalculatorText>Included</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Transit time" :info="info">
				<CalculatorText>7-9 days</CalculatorText>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Due now" :info="info">
				<div class="flex items-center gap-5">
					<span class="text-[28px] font-[700] dollar">$0</span>
					<span class="text-[12px] font-[400] text-[#868686]">
						You dont pay anything until we schedule a carrier to pick up your
						vehicle.
					</span>
				</div>
			</CalculatorOrderDetailItem>
			<CalculatorOrderDetailItem title="Price option">
				<CalculatorText>$197 Discounted cash price</CalculatorText>
			</CalculatorOrderDetailItem>
		</div>
	</div>
</template>

<style scoped>
.dollar {
	background: -webkit-linear-gradient(#008aff, #005ba8);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
