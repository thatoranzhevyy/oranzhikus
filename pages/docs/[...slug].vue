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
      <section class="h-screen flex items-center bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center space-y-4">
            <div class="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </div>
            <div class="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Документ не найден
            </div>
            <div class="text-lg font-light text-gray-500 dark:text-gray-400">
              К сожалению, мы не можем найти этот документ. Вы найдите много интересного на главной странице
            </div>
            <UButton to="/" size="xl" label="Вернуться на главную страницу"/>
          </div>
        </div>
      </section>
    </template>
    <template #empty>
      <Title>Document is empty</Title>
      <h1>Document is empty</h1>
    </template>
  </ContentDoc>
</template>