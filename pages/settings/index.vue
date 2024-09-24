<script setup lang="ts">
definePageMeta({layout: 'none'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="text-lg font-bold">Настройки</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 py-2 px-2 md:px-0">
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="p-2">
        <UButton to="/settings/appearance" icon="i-ph-palette-bold" size="xl" color="gray" variant="ghost"
                  label="Внешний вид" block class="justify-start"/>
        <UButton to="/settings/devices" icon="i-ph-devices-bold" size="xl" color="gray" variant="ghost"
                  label="Устройства" block class="justify-start"/>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="px-3.5 pt-2 font-semibold">Помощь</div>
      <div class="p-2">
        <UButton to="/settings/faq" icon="i-ph-question-bold" size="xl" color="gray" variant="ghost"
                  label="Вопросы и ответы" block
                  class="justify-start"/>
        <UButton disabled icon="i-ph-info-bold" size="xl" color="gray" variant="ghost" label="О приложении" block
                  class="justify-start"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
