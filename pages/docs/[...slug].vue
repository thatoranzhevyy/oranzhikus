<script setup lang="ts">
definePageMeta({layout: 'none'});
</script>

<template>
  <ContentDoc v-slot="{ doc }">

    <ApplicationBar>
      <template #left>
        <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
        <div class="text-lg font-bold">{{ doc.title }}</div>
      </template>
    </ApplicationBar>
    <div class="max-w-3xl mx-auto space-y-2 p-1.5 props">
      <article class="prose dark:prose-invert max-w-none prose-sm prose-stone">
        <ContentRenderer :value="doc"/>
      </article>
    </div>
  </ContentDoc>
</template>