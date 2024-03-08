<script setup>
import { onMounted, reactive } from "vue";
const counters = reactive({
	"Carrier network": [0, 10000],
	"Satisfied customers": [0, 1100],
	"Vehicles delivered": [0, 1220],
});

onMounted(() => {
	setInterval(() => {
		for (let i in counters) {
			if (counters[i][0] > 1000) {
				counters[i][0] = counters[i][1];
			}
			if (counters[i][0] < counters[i][1]) {
				counters[i][0] += 1;
			}
		}
	}, 1);
});
</script>
<template>
  <UContainer>
    <div
      class="mx-auto min-w-[300px] max-w-[1366px] h-full p-2 mt-10 mb-12 bg-[#FFFFFF]"
    >
      <div class="mx-auto mt-11 min-w-[300px] max-w-[1366px] h-full. p-2 flex">
        <div class="flex">
          <img class="" src="/img/about1.png" />
          <img class="ml-[-30px]" src="/img/about2.png" />
          <img
            class="h-[330px] mt-[80px] ml-[-65px]"
            src="/img/about3.png"
            style="z-index: 10"
          />
        </div>
        <div class="mx-auto pl-4 w-[600px] h-auto">
          <h2 class="lg:text-[24px] text-[18px] text-[#024E90]">
            Mate Logistics
          </h2>
          <p class="mt-7 md:text-[16px] font-[400] text-[14px] text-[#5D5D5F]">
            Mate Logistics Auto Transport Company was founded in February 2022
            by an ambitious team with the goal of providing top-notch auto
            transport services and ensuring a seamless customer journey. The
            company is dedicated to delivering reliable and efficient
            transportation solutions for vehicles, prioritizing customer
            satisfaction and convenience throughout the process. With a focus on
            quality service and a commitment to excellence, Mate Logistics Auto
            Transport Company aims to set new standards in the auto transport
            industry.
          </p>

		  <!-- ---------------------------------------------------------------------------------------------------------------- -->
          <div class="">
            <div class="mx-auto sm:w-full lg:w-[612px]">
              <div
                class="px-8 bg-gradient-to-r from-[#008AFF]/20 to-[#005BA8]/20 pt-5 pb-1 rounded-[23px]"
              >
                <div
                  data-aos="zoom-in"
                  class="flex items-center md:justify-between text-center md:pr-12 pr-12 mb-5"
                >
                  <div class="relative " v-for="(el, i) in counters">
                    <img
                      src="/img/back-pattern.png"
                      class="md:h-[125px] h-[35px]"
                      alt=""
                    />
                    <div
                      class="bg-white absolute lg:top-[20px] top-1 left-4 rounded-full text-center md:p-2 p-1 shadow-lg md:w-[170px] z-50"
                    >
                      <p
                        class="md:text-[25px] text-[13px] space-between text-[#024E90] font-[700]"
                      >
                        {{ el[0] }}+
                      </p>
                      <p
                        class="md:text-[14px] text-[9px] space-between text-[#9A999B] font-[400]"
                      >
                        {{ i }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionsAboutRow
        title="Our vision"
        text="The vision of Mate Logistics is to create a new standard in the auto transportation industry by providing a seamless customer journey. We are committed to revolutionizing the way vehicles are transported, setting the benchmark for excellence in service, reliability, and customer satisfaction. "
      />
      <SectionsAboutRow2
        title="Our mission"
        text="Our mission is to redefine the auto transportation experience, ensuring that every customer enjoys a smooth and hassle-free journey from start to finish. With a focus on innovation, efficiency, and customer-centric solutions, we aim to elevate the industry and exceed the expectations of our valued clients. "
      />
      <SectionsAboutRow3
        title="Our values"
        text="At Mate Logistics, we hold a set of core principles that guide our service delivery. Integrity is at the heart of everything we do, ensuring transparency, honesty, and ethical conduct in all our operations. We are dedicated to excellence in service, striving to exceed industry standards and deliver exceptional quality in every aspect of auto transportation with innovations. Additionally, our commitment to friendly customer service reflects the essence of our name, as we prioritize building strong, positive relationships with our customers, fostering trust and satisfaction at every touchpoint."
      />
    </div>
  </UContainer>
</template>

<style scoped></style>
