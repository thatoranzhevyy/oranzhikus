<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'О приложении'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">О приложении</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="flex flex-col items-center py-4 space-y-8">
      <div class="size-52 rounded-xl bg-primary-200/70">
        <UIcon name="i-ph-dog" class="size-52 text-gray-800"/>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-xl font-bold">Nuxt Application</div>
        <div class="text-gray-500 text-xs font-normal">версия 0.1.0 x64</div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="p-1">
        <UButton to="/docs/user-agreement" icon="i-ph-handshake-bold" size="xl" color="gray" variant="ghost"
                 label="Пользовательское соглашение" block class="justify-start"/>
        <UButton to="/docs/privacy-policy" icon="i-ph-certificate-bold" size="xl" color="gray" variant="ghost"
                 label="Политика конфиденциальности" block class="justify-start"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
