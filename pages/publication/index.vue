<script setup lang="ts">
definePageMeta({layout: 'none'});

import {useTextareaAutosize} from '@vueuse/core'

const {textarea} = useTextareaAutosize()
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" to="/"/>
    </template>
    <template #right>
      <UButton size="lg" color="gray" variant="ghost" label="Опубликовать"/>
    </template>
  </ApplicationBar>

  <div class="max-w-3xl mx-auto max-h-[calc(100vh-3.5rem)] flex flex-col p-4 gap-4">
    <textarea
        class="relative block w-full disabled:cursor-not-allowed focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-2xl p-0 bg-transparent focus:ring-0 focus:shadow-none resize-none"
        ref="textarea"
        placeholder="Что интересного расскажете?"
    />
    <div>
      <UButton color="gray" variant="solid" icon="i-ph-images" size="xs"/>
    </div>
  </div>

</template>

<style scoped>

</style>