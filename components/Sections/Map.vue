<script setup>
import { ref } from "vue";

const tooltipContent = ref("");
const tooltipTop = ref("0px");
const tooltipLeft = ref("0px");
const tooltipOpacity = ref("0%");

const handleMouseover = (e) => {
	if (e.target.tagName === "path") {
		tooltipContent.value = e.target.dataset.name;
		tooltipOpacity.value = "100%";
	} else {
		tooltipOpacity.value = "0%";
	}
};

const handleMousemove = (e) => {
	const x = e.clientX;
	const y = e.clientY;
	tooltipTop.value = `${y + 20}px`;
	tooltipLeft.value = `${x}px`;
};

// Attach event listeners
onMounted(() => {
	document.addEventListener("mouseover", handleMouseover);
	document.addEventListener("mousemove", handleMousemove);
});

// Cleanup event listeners when the component is unmounted
onUnmounted(() => {
	document.removeEventListener("mouseover", handleMouseover);
	document.removeEventListener("mousemove", handleMousemove);
});
</script>

<template>
	<div>
		<svg id="us-map">
			<!-- Your map paths go here -->
		</svg>
		<div
			id="details-box"
			:style="{ top: tooltipTop, left: tooltipLeft, opacity: tooltipOpacity }">
			{{ tooltipContent }}
		</div>
	</div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

path {
	stroke: white;
	fill: paleturquoise !important;

	transition: fill 0.4s ease;
}

path:hover {
	fill: orange !important;
}

#us-map {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

#details-box {
	padding: 1rem;
	border-radius: 8px;
	font-size: 24px;
	position: fixed;
	color: white;
	font-family: "Poppins";
	background-color: black;
	width: fit-content;
	transform: translateX(-50%);
	transition: opacity 0.4s ease;
	z-index: 1;
}
</style>
