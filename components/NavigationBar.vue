<script setup>

</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 w-full bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl">
    <div class="grid grid-cols-3 max-w-3xl mx-auto h-14 p-2 gap-2">
      <NuxtLink to="/"
          class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 group">
        <UIcon
            class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600"
            name="i-ph-house-fill"></UIcon>
      </NuxtLink>
      <NuxtLink to="artstation"
          class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 group">
        <UIcon
            class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600"
            name="i-ph-farm-fill"></UIcon>
      </NuxtLink>
      <NuxtLink to="contacts"
          class="inline-flex flex-col items-center justify-center px-5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 group">
        <UIcon
            class="w-8 h-8 text-gray-500 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-600"
            name="i-ph-users-fill"></UIcon>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.router-link-active span, .router-link-exact-active span {
  @apply text-primary-500;
}
</style>
