<script setup>
import { navbar } from "@/data/navbar.js";
const isOpen = ref(false);
const faqOne = ref(null);

const changeAcc = (num) => {
  if (faqOne.value == num) faqOne.value = null;
  else faqOne.value = num;
};
</script>

<template>
  <UContainer class="z-50 sticky top-0">
    <header class="w-full bg-white left-0 rounded-b-xl">
      <!-- TOP GRAY HEADER -->
      <HeaderTop />
      <nav class="flex items-center justify-between py-4">
        <div class="flex items-center justify-center md:gap-5">
          <UButton
            class="lg:hidden text-[#008AFF]"
            size="sm"
            color="blue"
            square
            variant="soft"
            @click="isOpen = true"
          >
            <Icon name="game-icons:hamburger-menu" class="text-xl" />
          </UButton>
          <USlideover side="left" v-model="isOpen">
            <UCard
              class="flex flex-col flex-1 transition overflow-y-auto scroll-m-0"
              :ui="{
                body: { base: 'flex-1' },
                ring: '',
                divide: 'divide-y divide-gray-100',
              }"
            >
              <template #header>
                <div class="flex items-center justify-between">
                  <img src="/img/logo.png" class="h-10" alt="" />
                  <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-heroicons-x-mark-20-solid"
                    class="-my-1"
                    @click="isOpen = false"
                  />
                </div>
              </template>
              <div class="h-screen">
                <ul v-for="(el, i) in navbar" :key="i">
                  <div class="border-b">
                    <div
                      v-if="typeof el == 'object'"
                      class="text-[#214690] text-[16px] font-[600] py-3 flex items-center justify-between"
                      @click="changeAcc(i)"
                    >
                      {{ i }}
                      <Icon
                        name="ic:baseline-keyboard-arrow-down"
                        :class="faqOne == i ? '' : '-rotate-90'"
                        class="text-[#024E90] text-3xl duration-300"
                      />
                    </div>
                    <router-link
                      v-else
                      :to="el"
                      class="text-[#214690] text-[16px] font-[600] py-3 flex items-center justify-between"
                    >
                      {{ i }}
                    </router-link>
                  </div>
                  <div v-if="typeof el === 'object'">
                    <li class="ml-4">
                      <div v-for="(item, name) in el">
                        <div class="" :class="faqOne == i ? '' : 'hidden'">
                          <a :href="item[1]">
                            <span
                              class="text-sm text-[#214690] item:text-[#008AFF] block font-semibold mt-3"
                            >
                              {{ name }}
                            </span>
                            <span class="text-xs text-gray-600">
                              {{ item[0] }}
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
                <!-- ---------------------------------------------------------------------------------------------------------------------------- -->
                <!-- Quote button -->
                <router-link
                  to="/quote"
                  class="mt-5 block text-[20px] text-center bg-[#E52E2E] text-white rounded-2xl duration-300 font-[600] p-2 py-2.5"
                >
                  Get an instant quote
                </router-link>
                <!-- Status check button -->
                <router-link
                  to="check-order"
                  class="mt-5 block text-[20px] text-center border-2 border-[#008AFF] text-[#008AFF] p-2 px-4 rounded-2xl duration-300 font-[600]"
                >
                  Check my order status
                </router-link>
                <!-- phone number -->
                <a
                  href="tel:+1 (929) 562-2005"
                  class="flex items-center justify-center gap-4 text-center text-[#214690] mt-5"
                >
                  <Icon name="material-symbols:call-outline" class="text-2xl" />
                  <span class="font-[600] text-[23px]">
                    +1 (929) 562-2005
                  </span>
                </a>
                <div class="text-center mt-3">
                  <a
                    href="/contact"
                    class="text-[#214690] font-[600] text-[23px] text-center py-3"
                  >
                    Contact us
                  </a>
                </div>
                <div class="flex items-center justify-center gap-8 mt-7">
                  <a href="https://www.instagram.com/matelogistics/">
                    <img
                      src="/img/Brands/instagram2.png"
                      alt=""
                      class="h-8 w-8"
                    />
                  </a>
                  <a href="https://www.facebook.com/matelogistics">
                    <img
                      src="/img/Brands/facebook.png"
                      alt=""
                      class="h-8 w-8"
                    />
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Mate+Logistics/@40.701,-73.8889729,15z/data=!4m6!3m5!1s0x89c25d8a0bf62d5d:0xd44569471d5e02b5!8m2!3d40.701!4d-73.8889729!16s%2Fg%2F11t1k1_9m2?hl=en&entry=ttu"
                  >
                    <img src="/img/Brands/google.png" alt="" class="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.bbb.org/us/ny/glendale/profile/auto-transportation/mate-logistics-inc-0121-87159008/#sealclick"
                  >
                    <img src="/img/Brands/bbb.png" alt="" class="h-8 w-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/mate-logistics-inc/"
                  >
                    <img
                      src="/img/Brands/linkedin.png"
                      alt=""
                      class="h-8 w-8"
                    />
                  </a>
                </div>
              </div>
            </UCard>
          </USlideover>
          <!-- LOGO-->
          <div class="flex lg:flex-1">
            <router-link to="/">
              <img
                class="md:h-12 h-10 object-cover"
                src="/img/logo.png"
                alt=""
              />
            </router-link>
          </div>
          <!-- NAVBAR-->
          <div class="hidden lg:flex gap-7">
            <div class="relative group" v-for="(el, i) in navbar">
              <router-link
                :to="typeof el === 'object' ? '' : el"
                class="relative flex items-center gap-x-1 text-[#214690] group-hover:text-[#008AFF]"
              >
                {{ i }}
                <Icon name="ph:caret-down-bold" v-if="typeof el === 'object'" />
                <span
                  class="absolute w-0 group-hover:w-full bg-[#008AFF] h-[4px] rounded-full -bottom-1 duration-300"
                ></span>
              </router-link>
              <!-- ---------------------------------------------------------------------------------------------------------------------------- -->

              <div class="">
                <div
                  v-if="typeof el === 'object'"
                  class="absolute -left-8 z-10 mt-1 rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 hidden group-hover:block w-max"
                >
                  <div class="p-1">
                    <div class="relative rounded-lg p-2 leading-6">
                      <div
                        v-for="(item, name) in el"
                        class="relative mb-2 hover:bg-gray-100 cursor-pointer p-1 item rounded px-2 group/item flex items-center justify-between"
                      >
                        <a :href="item[1]">
                          <span
                            class="group/edit text-sm text-[#214690] group-hover/item:text-[#008AFF] block font-semibold"
                          >
                            {{ name }}
                          </span>
                          <span class="text-xs text-gray-600">
                            {{ item[0] }}
                          </span>
                          <span
                            class="group/edit absolute w-0 group-hover/item:w-full bg-[#008AFF] h-[3px] rounded-full -bottom-1 left-0 duration-300"
                          ></span>
                        </a>
                        <Icon
                          v-if="!Array.isArray(item)"
                          name="ic:baseline-navigate-next"
                          class="text-[#214690] text-2xl ml-5"
                        />
                        <div
                          v-if="!Array.isArray(item)"
                          class="group/edit absolute -top-4 left-full p-2 ml-1 mt-1 rounded-xl bg-[#F5F5F5] shadow-xl ring-1 ring-gray-900/5 w-max hidden group-hover/item:block"
                        >
                          <a
                            :href="subitem[1]"
                            class="block relative group/subitem mb-2"
                            v-for="(subitem, subname) in item"
                          >
                            <span
                              class="text-sm text-[#214690] group-hover/subitem:text-[#008AFF] block font-semibold"
                            >
                              {{ subname }}
                            </span>
                            <span class="text-xs text-gray-600">
                              {{ subitem[0] }}
                            </span>
                            <span
                              class="absolute w-0 group-hover/subitem:w-full bg-[#008AFF] h-[3px] rounded-full -bottom-1 left-0 duration-300"
                            ></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- NAVBAR RIGHT BUTTONS-->
        <router-link
          to="/quote"
          class="text-[15px] bg-[#E52E2E] text-white rounded-2xl hover:bg-red-700 hover:text-white duration-300 font-[600] p-2 px-3 md:hidden block"
        >
          Get a quote
        </router-link>
        <div class="gap-5 hidden md:block">
          <router-link
            to="/quote"
            class="text-[17px] bg-[#E52E2E] text-white rounded-2xl hover:bg-red-700 hover:text-white duration-300 font-[600] p-2 py-2.5"
          >
            Get an instant quote
          </router-link>
          <a
            href="tel:+19295622005"
            class="text-[20px] text-blue-500 p-2 px-4 rounded-2xl"
          >
            (929) 562-2005
          </a>
        </div>
      </nav>
    </header>
  </UContainer>
</template>
<style scoped></style>
