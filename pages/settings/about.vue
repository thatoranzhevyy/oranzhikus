<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'О приложении'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/settings"/>
      <div class="text-lg font-bold">О приложении</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="flex flex-col items-center py-4 space-y-8">
      <div class="size-52 rounded-xl bg-primary-200/70">
        <UIcon name="i-ph-quotes" class="size-52"/>
      </div>
      <div class="flex flex-col items-center gap-2">
        <div class="text-xl font-bold">LearningBy Application</div>
        <div class="text-gray-500 text-xs font-normal">версия 0.1.0 x64</div>
        <a href="https://app.netlify.com/sites/coruscating-brioche-c8806e/deploys">
          <img src="https://api.netlify.com/api/v1/badges/462ada0f-691d-4386-8898-8f49389debf1/deploy-status"
               alt="Netlify Status">
        </a>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <UButton to="https://github.com/thatoranzhevyy" target="_blank" icon="i-ph-star-four-bold" size="xl" color="gray"
               variant="ghost" label="Оценить приложение" block class="justify-start"/>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <UButton to="/docs/user-agreement" icon="i-ph-handshake-bold" size="xl" color="gray" variant="ghost"
               label="Пользовательское соглашение" block class="justify-start"/>
      <UButton to="/docs/privacy-policy" icon="i-ph-certificate-bold" size="xl" color="gray" variant="ghost"
               label="Политика конфиденциальности" block class="justify-start"/>
      <UButton to="/docs/example" icon="i-ph-file-md-bold" size="xl" color="gray" variant="ghost"
               label="Пример документа" block class="justify-start"/>
    </div>
  </div>
</template>

<style scoped>

</style>
