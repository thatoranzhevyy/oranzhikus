<script setup lang="ts">
const dayjs = useDayjs();

useSeoMeta({title: 'Главная'});
const {pending, data: publications} = await useFetch('/api/publications')
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UAvatar size="md" icon="i-ph-user-bold" class="bg-gray-100"/>
      <div class="text-lg font-bold">Главная</div>
    </template>
    <template #right>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-plus-circle-bold" to="publication"/>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-list-bold" to="settings"/>
    </template>
  </ApplicationBar>
  <div v-if="pending" class="min-w-3xl h-[calc(100vh-7rem)] flex items-center justify-center">
    <UIcon name="i-ph-circle-notch-bold" class="size-16 animate-spin text-gray-600"/>
  </div>
  <div v-else class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div v-for="item in publications" class="bg-white dark:bg-gray-900 rounded-md p-2 space-y-2">
      <NuxtLink :to="`@${item.user.username}`" class="flex items-center">
        <UAvatar :alt="item.user.name" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">{{ item.user.name }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ dayjs(item.created_at).utc().format('DD MMM HH:mm') }}
          </div>
        </div>
      </NuxtLink>
      <div class="text-sm whitespace-pre-wrap" v-if="item.body">
        <span class="select-auto">{{ item.body.slice(0, 150) }}</span>
        <NuxtLink
            v-if="item.body.length >= 150"
            to="/@civanova/tttetete"
            class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20"
        >
          Показать еще
        </NuxtLink>
      </div>
      <div v-if="item.images.length > 0" class="max-w-full whitespace-nowrap overflow-x-auto flex space-x-2">
        <img
            v-for="image in item.images"
            class="rounded max-w-full"
            :src="`https://workman.buhe.su/storage/posts/${image.post_id}/${image.file_name}`">
      </div>
      <div class="hidden">
        <UButton size="xs" color="primary" variant="ghost" icon="i-ph-heart-bold" label="2"/>
        <UButton size="xs" color="gray" variant="ghost" icon="i-ph-chat-circle-bold" label="2"
                 to="/@civanova/tttetete"/>
        <UButton size="xs" color="gray" variant="ghost" icon="i-ph-share-fat-bold" label="1"/>
      </div>
    </div>
  </div>
</template>
