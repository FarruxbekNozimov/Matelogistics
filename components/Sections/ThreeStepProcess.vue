<script setup>
defineProps(["img1", "img2", "img3"]);
</script>

<template>
  <div class="mx-auto min-w-[300px] max-w-[1200px] h-full">
    <TitleBar title="Effortless car shipping: A 3-step process" />
    <div class="flex mt-10 mb-12 justify-around">
      <div>
        <div class="flex justify-center">
          <h1 class="text-[#214690] lg:text-[24px] text-xl lg:px-4 font-bold">
            Book your quote
          </h1>
        </div>
        <div class="flex justify-center">
          <p>Get a Free Quote:</p>
        </div>
        <div class="flex justify-center">
          <p>Book Your Car Shipping Now!</p>
        </div>
        <div class="flex justify-center pt-3">
          <img :src="`/img/${img1}`" alt="user" class="" />
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <h1 class="text-[#214690] lg:text-[24px] text-xl lg:px-4 font-bold">
            Get your car picked up
          </h1>
        </div>
        <div class="flex justify-center">
          <p>Convenient Car Pickup:</p>
        </div>
        <div class="flex justify-center">
          <p>Schedule Your Shipping Today!</p>
        </div>
        <div class="flex justify-center pt-3">
          <img :src="`/img/${img2}`" alt="user" class="" />
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <h1 class="text-[#214690] lg:text-[24px] text-xl lg:px-4 font-bold">
            Enjoy your car
          </h1>
        </div>
        <div class="flex justify-center">
          <p>Hit the Road:</p>
        </div>
        <div class="flex justify-center">
          <p>Enjoy Your Car After Seamless Delivery!</p>
        </div>
        <div class="flex justify-center pt-3">
          <img :src="`/img/${img3}`" alt="user" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>