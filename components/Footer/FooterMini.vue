<script setup>
import { footerLinks } from "@/data/footerLinks";
</script>

<template>
  <div class="pt-10 lg:pb-0 bg-[#214690]">
    <UContainer>
      <Container class="flex items-center gap-10">
        <div class="">
          <img src="/img/matelogo-footer.png" class="w-full mb-3" />
          <div class="flex items-center justify-between gap-5 mb-2">
            <a href="https://www.instagram.com/matelogistics/">
              <Icon name="bi:instagram" class="text-2xl text-white" />
            </a>
            <a href="">
              <Icon name="brandico:facebook-rect" class="text-2xl text-white" />
            </a>
            <a href=""><Icon name="bi:google" class="text-2xl text-white" /></a>
            <a href="">
              <Icon name="simple-icons:linkedin" class="text-2xl text-white" />
            </a>
          </div>
        </div>
        <img src="/img/footer-logo2.png" alt="" />
      </Container>
      <Container class="text-white font-[400]">
        <div>
          <a href="tel:+19295622005">(929) 562-2005</a>
          <p>MC: 1380151</p>
          <p class="mb-2">6534 Myrtle Ave, Queens NY, 11385, USA</p>
        </div>
        <div>
          <!-- BBB icon -->
        </div>
      </Container>
      <Container px="px-2">
        <div class="w-full border-b"></div>
      </Container>
      <Container class="flex justify-around">
        <div>
          <h3 class="text-white text-[20px] font-[700] mb-5">SERVICES</h3>
          <router-link
            to="/open-car-shipping"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Open</router-link
          >
          <router-link
            to="/enclosed-auto"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Enclosed</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Expedited</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Hawaii</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Alaska</router-link
          >
        </div>
        <div>
          <h3 class="text-white text-[20px] font-[700] mb-5">COMPANY</h3>
          <router-link
            to="/about"
            class="block text-white text-[18px] mb-2 font-[400]"
            >About us</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Terms & conditions</router-link
          >
          <router-link
            to="/privacy"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Privacy policy</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Sitemap</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-[400]"
            >Contact us</router-link
          >
        </div>
      </Container>
      <Container px="px-2">
        <div class="w-full border-b"></div>
      </Container>
      <Container class="flex items-center">
        <div>
          <h3 class="text-white text-[20px] font-[700] mb-5">QUICK LINK</h3>
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-semibold"
            >Live cost calculator</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-semibold"
            >How it works?</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-semibold"
            >Blog</router-link
          >
          <router-link
            to="/help"
            class="block text-white text-[18px] mb-2 font-semibold"
            >Help</router-link
          >
          <router-link
            to="/"
            class="block text-white text-[18px] mb-2 font-semibold"
            >Check order status</router-link
          >
        </div>
        <div class="">
          <h3 class="text-white text-[20px] font-[700] mb-5">Newsletter</h3>
          <p class="text-white text-[18px] mb-2 font-semibold">
            Get $50 discount and our latest updates.
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
      <Container class="flex items-center py-5 text-white p-2">
        <span class="text-[18px] lg:block hidden">
          Mate Logistics 2023. All rights reserved
        </span>
        <span class="text-[17px]"
          >Copyright © 2022-2023 Mate Logistics Inc</span
        >
      </Container>
    </UContainer>
  </div>
</template>

<style scoped></style>
