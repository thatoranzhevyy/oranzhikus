<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Настройки'});

const isOpenBug = ref(false)
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/"/>
      <div class="text-lg font-bold">Настройки</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <UButton to="/settings/appearance" icon="i-ph-palette-bold" size="xl" color="gray" variant="ghost"
               label="Внешний вид" block class="justify-start"/>
      <UButton to="/settings/language" icon="i-ph-translate-bold" size="xl" color="gray" variant="ghost"
               label="Язык" block class="justify-start"/>
      <UButton to="/settings/devices" icon="i-ph-devices-bold" size="xl" color="gray" variant="ghost"
               label="Устройства" block class="justify-start"/>
      <UButton to="/settings/change-password" icon="i-ph-password-bold" size="xl" color="gray" variant="ghost"
               label="Сменить пароль" block class="justify-start"/>
      <UButton to="/login" icon="i-ph-sign-out-bold" size="xl" variant="ghost"
               label="Выйти" block class="justify-start"/>
    </div>
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <div class="px-4 pt-2 font-semibold">Помощь</div>
      <UButton to="/settings/faq" icon="i-ph-question-bold" size="xl" color="gray" variant="ghost"
               label="Вопросы и ответы" block class="justify-start"/>
      <UButton icon="i-ph-bug-bold" size="xl" color="gray" variant="ghost" @click="isOpenBug = true"
               label="Сообщить о проблеме" block class="justify-start"/>
      <UButton to="/settings/about" icon="i-ph-info-bold" size="xl" color="gray" variant="ghost" label="О приложении"
               block class="justify-start"/>
    </div>
  </div>


  <UModal side="bottom" v-model="isOpenBug">
    <div class="max-w-3xl items-center p-0.5">
      <ApplicationBar>
        <template #left>
          <UButton size="lg" color="gray" variant="ghost" icon="i-ph-x-bold" @click="isOpenBug = false"/>
          <div class="text-lg font-bold leading-6 text-gray-900 dark:text-white">Сообщить о проблеме</div>
        </template>
      </ApplicationBar>
      <UDivider class="px-2"/>
      <div class="p-2 space-y-2">
        <textarea
            class="h-64 relative block w-full focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-xl p-0 bg-transparent focus:ring-0 focus:shadow-none resize-none"
            placeholder="Предоставьте как можно более подробную информацию..."
        />
        <div class="flex justify-between">
          <UButton color="gray" variant="ghost" icon="i-ph-paperclip"/>
          <UButton color="gray" variant="solid" label="Отправить"/>
        </div>
      </div>
    </div>
  </UModal>
</template>

<style scoped>

</style>
