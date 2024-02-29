<script setup>
defineProps(["title", "text", "noForm"]);
</script>

<template>
  <!-- MAIN BANNER -->
  <UContainer>
    <div
      data-aos="fade-down"
      class="bg-[url('/img/banner-car.png')] bg-center bg-no-repeat bg-cover rounded-[30px] md:flex items-center justify-between p-5 lg:min-h-[355px] mb-5"
      v-lazy:background-image="'/img/banner-car.png'"
    >
      <div class="z-1 lg:w-[80%] mx-auto" :class="noForm ? 'text-center' : ''">
        <h3 class="lg:text-[50px] text-[28px] text-white font-semibold">
          {{ title }}
        </h3>
        <p
          class="lg:text-[24px] text-[17px] my-3 text-white lg:font-[600] font-thin"
        >
          {{ text }}
        </p>
      </div>
      <QuoteGetQuoteForm v-if="!noForm" />
    </div>
  </UContainer>
</template>

<style scoped></style>
