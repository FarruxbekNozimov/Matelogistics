<script setup>
import { footerLinks } from "@/data/footerLinks";
</script>

<template>
  <div class="mx-auto md:w-full xl:w-[1280px]">
    <div class="pt-10 lg:pb-0 bg-[#214690] rounded-t-[30px]">
      <UContainer>
        <Container class="grid grid-cols-5 gap-10 pb-5 px-2">
          <div class="lg:text-[18px] text-[16px]">
            <img src="/img/matelogo-footer.png" class="w-full mb-3" />
            <div class="text-white font-[400]">
              <div class="flex items-center justify-between gap-5 mb-2">
                <a href="https://www.instagram.com/matelogistics/">
                  <Icon
                    name="streamline:instagram"
                    class="text-2xl text-white"
                  />
                </a>
                <a href="https://www.facebook.com/matelogistics">
                  <Icon
                    name="teenyicons:facebook-outline"
                    class="text-2xl text-white"
                  />
                </a>
                <a
                  href="https://www.google.com/maps/place/Mate+Logistics/@40.701,-73.8889729,15z/data=!4m6!3m5!1s0x89c25d8a0bf62d5d:0xd44569471d5e02b5!8m2!3d40.701!4d-73.8889729!16s%2Fg%2F11t1k1_9m2?hl=en&entry=ttu"
                >
                  <Icon
                    name="iconoir:google-circle"
                    class="text-2xl text-white"
                  />
                </a>
                <a href="https://www.linkedin.com/company/mate-logistics-inc/">
                  <Icon
                    name="teenyicons:linkedin-outline"
                    class="text-2xl text-white"
                  />
                </a>
              </div>
              <p class="mb-2">6534 Myrtle Ave, Queens NY, 11385, USA</p>
              <a href="tel:+19295923003">(929) 592-3003</a>
              <p>MC: 1380151</p>
              <div class="flex pt-1 gap-3">
                <a href="https://www.bbb.org/us/ny/glendale/profile/auto-transportation/mate-logistics-inc-0121-87159008/#sealclick">
                  <img src="/img/bbb.png" alt="bbb">
                </a>
                <a href="" class="mt-[-30px]">
                  <img src="/img/fmcsa.png" alt="fmcsa">9
                </a>
              </div>
            </div>
          </div>
          <div v-for="(el, i) in footerLinks" class="block">
            <h3 class="text-white text-[20px] font-[700] mb-5">{{ i }}</h3>
            <router-link
              v-for="(link, name) in el"
              :to="link"
              class="block text-white text-[18px] mb-2 font-[400]"
            >
              {{ name }}
            </router-link>
          </div>
          <div class="block">
            <h3 class="text-white text-[20px] font-[700] mb-5">
              Join us and get a discount
            </h3>
            <p class="text-white text-[18px] mb-2 font-[400]">
              Receive $50 discount and get our latest updates.
            </p>
            <input
              type="text"
              placeholder="Enter e-mail"
              class="p-3 w-full rounded-xl bg-inherit outline-none border border-white text-white mb-5"
            />
            <button
              type="button"
              class="w-full outline-none text-white bg-[#E52E2E] hover:bg-red-700 rounded-xl px-5 py-2.5 mb-2 font-bold"
            >
              I want $50
            </button>
          </div>
        </Container>
        <Container px="px-2">
          <div class="w-full border-b"></div>
        </Container>
        <Container
          class="flex items-center justify-between py-5 text-white p-2"
        >
          <span class="text-[18px] lg:block hidden">
            Mate Logistics 2023. All rights reserved
          </span>
          <span class="text-[17px]"
            >Copyright © 2022-2023 Mate Logistics Inc</span
          >
        </Container>
      </UContainer>
    </div>
  </div>
</template>

<style scoped></style>
