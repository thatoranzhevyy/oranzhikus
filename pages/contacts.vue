<script setup lang="ts">
useSeoMeta({title: 'Контакты'});

const {data} = await useFetch('/api/accounts')
</script>

<template>
  <div class="max-w-3xl mx-auto bg-white dark:bg-gray-900 px-1">
    <div class="py-2 px-2 flex gap-2">
      <UInput class="w-full" icon="i-ph-magnifying-glass" placeholder="Введите имя или фамилию"/>
      <UButton color="gray" variant="ghost" label="Отменить"/>
    </div>
    <nuxt-link v-for="user in data" :to="'@'+user.username">
      <div class="flex items-center px-2 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
        <UAvatar :alt="user.name ?? user.username" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">{{ user.name ?? user.username }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ user.email || '@' + user.username }}
          </div>
        </div>
      </div>
    </nuxt-link>
    <div class="text-gray-500 text-center text-xs font-bold py-2">
      {{ data.length }} пользователей
    </div>
  </div>
</template>

<style scoped>

</style>
