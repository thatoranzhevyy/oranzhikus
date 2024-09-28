<script setup lang="ts">
definePageMeta({layout: 'none'});
</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <ApplicationBar>
        <template #left>
          <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
          <div class="text-lg font-bold">{{ doc.title }}</div>
        </template>
      </ApplicationBar>
      <div class="max-w-3xl mx-auto space-y-2 p-1.5">
        <article class="prose dark:prose-invert max-w-none prose-sm prose-stone">
          <ContentRenderer :value="doc"/>
        </article>
      </div>
    </template>
    <template #not-found>
      <Title>Документ не найден</Title>
      <h1>Document not found</h1>
    </template>
    <template #empty>
      <Title>Document is empty</Title>
      <h1>Document is empty</h1>
    </template>
  </ContentDoc>
</template>