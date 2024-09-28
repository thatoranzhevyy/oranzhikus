<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Язык приложения'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/settings"/>
      <div class="text-lg font-bold">Язык приложения</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <div class="px-4 py-2 font-semibold">Языки</div>

      <UButton size="xl" color="gray" variant="ghost" label="Русский" block class="justify-start">
        <div>RU</div>
        Русский
      </UButton>

      <UButton size="xl" color="gray" variant="ghost" block class="justify-start">
        <div>EN</div>
        English
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>
