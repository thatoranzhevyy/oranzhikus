<script setup lang="ts">
definePageMeta({layout: 'none'});
useSeoMeta({title: 'Язык приложения'});
const {locale, setLocale, locales} = useI18n()

</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/settings"/>
      <div class="text-lg font-bold">{{ $t('settings.language.title') }}</div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-1">
      <div class="px-4 py-2 font-semibold">{{ $t('settings.language.label') }}</div>
      <template v-for="locale_ in locales">
        <div
            @click="setLocale(locale_.code);"
            :class="locale==locale_.code?'bg-gray-100 dark:bg-gray-800':''"
            class="cursor-pointer flex-shrink-0 font-medium rounded-md text-base gap-x-2.5 px-3.5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white dark:hover:bg-gray-800 hover:bg-gray-100 w-full flex items-center justify-start">
          <div class="uppercase">{{ locale_.code }}</div>
          {{ locale_.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style>
