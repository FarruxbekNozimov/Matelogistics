<script setup>
import { lastnews } from "@/data/lastnews";

// const importImage = (imageName) => {
// 	const images = import.meta.globEager("@/assets/img/*");  
// 	const imageKeys = Object.keys(images);
// 	const imageKey = imageKeys.find((key) => key.endsWith(imageName));
// 	return images[imageKey].default;
// };

</script>

<template>
  <div class="lg:block hidden w-full p-2">
    <div class="" @click="$router.push(`/inner-news/`)">
    </div>
        <Swiper
            :modules="[SwiperAutoplay,SwiperPagination]"
            :loop="true"
            :slides-per-view="3"
            :effect="'creative'"
            :autoplay="{ delay: 5000, disableOnInteraction: true }"
            :creative-effect="{
                prev: { shadow: false, translate: ['-20%', 0, -1] },
                next: { translate: ['100%', 0, 0] },
            }">
            <SwiperSlide v-for="lastnew in lastnews" class="p-3" :key="slide">
                <div class=" rounded-xl shadow-xl h-[200px] p-3">
                    <img src="@/assets/img/lastnewsimg1.png" class="" />
                    {{lastnew.img}}
                </div>
                <div class="lg:grid-cols-4 mt-14 gap-12">
                    {{
                        lastnew.title
                    }}
                </div>
            </SwiperSlide>
        </Swiper>
    <!-- <div class="">
      <div class="">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.66664 3.11263H7.77756M9.33331 3.11263H10.6942C11.6608 3.11263 12.4442 3.89605 12.4442 4.86264V10.6942C12.4442 11.6608 11.6608 12.4442 10.6942 12.4442H3.30572C2.33914 12.4442 1.55573 11.6608 1.55573 10.6942V4.86264C1.55573 3.89605 2.33914 3.11263 3.30572 3.11263M1.55573 7.00055H10.1109M4.66664 4.66722V1.55688M9.33331 4.66722V1.55688"
            stroke="#B6C2CD" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
      </div>
      <nuxt-link :to="`/inner-news/`" class="news-card-title"> title</nuxt-link>
      <p class="news-card-text">
        p title
      </p>
      <nuxt-link :to="`/inner-news/`" class="news-card-btn">
        Read more
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.91998 4.64172L13.2783 10.0001L7.91998 15.3584" stroke="#024E90" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </nuxt-link>
    </div> -->
  </div>
</template>

<style lang=""></style>
