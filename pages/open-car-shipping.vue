<script setup>
const items = [
  { label: "Open", key: "open" },
  { label: "Enclosed", key: "enclosed" },
  { label: "Expedited", key: "expedited" },
  { label: "Hawaii", key: "hawaii" },
  { label: "Alaska", key: "alaska" },
];
</script>

<template>
  <UTabs
    :ui="{
      base: 'text-center',
      wrapper: 'relative space-y-10 text-center',
      list: {
        base: 'mx-auto ',
        width: 'max-w-4xl',
        background: 'bg-[#EFF4FC] ',
        rounded: 'rounded-full',
        marker: { rounded: 'rounded-full' },
        tab: { active: 'text-[#0071ED]', inactive: 'text-[#9A999B]' },
      },
    }"
    :items="items"
  >
    <template #item="{ item }">
      <div class="text-start">
        <ServiceOpen v-if="item.key == 'open'" />
        <ServiceEnclosed v-if="item.key == 'enclosed'" />
        <ServiceExpedited v-if="item.key == 'expedited'" />
        <ServiceHawaii v-if="item.key == 'hawaii'" />
        <ServiceAlaska v-if="item.key == 'alaska'" />
      </div>
    </template>
  </UTabs>
</template>

<style scoped></style>
