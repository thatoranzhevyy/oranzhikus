<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Внешний вид'});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/settings"/>
      <div class="text-lg font-bold">{{ $t('settings.appearance.title') }}</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md">
      <div class="px-4 py-2 font-semibold">{{ $t('settings.appearance.color_theme.title') }}</div>
      <div class="flex flex-col p-2 space-y-2 bg-primary-200/70">
        <div class="flex justify-center">
          <div class="rounded-xl bg-white dark:bg-primary-400/50 px-4 py-0.5">
            <div class="text-xs">{{ $t('settings.appearance.example.text1') }}</div>
          </div>
        </div>
        <div class="flex bg-white dark:bg-gray-900 w-fit rounded-md px-3 py-1 max-w-[75%]">
          <div class="">{{ $t('settings.appearance.example.text2') }}</div>
        </div>
        <div class="bg-primary-50 dark:bg-primary-500 w-fit rounded-md px-3 py-1 max-w-[75%] ml-auto">
          <div class="">{{ $t('settings.appearance.example.text3') }}</div>
        </div>
      </div>
      <div class="p-1">
        <AppearanceColorMode/>
        <hr class="border-gray-200 dark:border-gray-800 my-2 mx-2">
        <AppearanceColorPicker/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
