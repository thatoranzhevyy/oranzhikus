<template>
  <div class="flex items-center space-x-2 p-2 border-b-1">
    <div class="relative inline-flex items-center justify-center flex-shrink-0 rounded-xl size-12">
      <img class="rounded-xl size-12" src="/img/39a030f69c97ef48e811e5382a018464.png" alt="@mordecai">
    </div>
    <p class="font-bold text-primary-500">@mordecai</p>
    <color-picker/>
  </div>
  <hr class="h-px border-0 bg-gray-700">
  <nav class="flex space-x-2 p-2 text-xl font-bold text-primary-300/50">
    <nuxt-link to="/">Work zone</nuxt-link>
    <nuxt-link to="/chill">Chill zone</nuxt-link>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-primary-600 dark:text-primary-500;
}
</style>