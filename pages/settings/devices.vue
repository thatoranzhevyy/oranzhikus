<script lang="ts" setup>
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Устройства'})


</script>
<template>
  <application-bar>
    <template #left>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Устройства</div>
    </template>
    <template #right>
      <u-button size="lg" color="gray" variant="ghost" icon="i-ph-arrow-clockwise-bold"/>
    </template>
  </application-bar>

  <div class="max-w-3xl mx-auto space-y-2 py-2 px-2 md:px-0">
  </div>
</template>
