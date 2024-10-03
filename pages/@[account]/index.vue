<script setup lang="ts">
const route = useRoute()
const dayjs = useDayjs();

definePageMeta({layout: 'none'});
useSeoMeta({title: `@${route.params.account}`});
const {data: account} = await useFetch(`/api/accounts/${route.params.account}`)
const {data: publications} = await useFetch(`/api/publications/${route.params.account}`)
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="flex items-center">
        <UAvatar alt="Лариса Евгеньевна Орехова" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="text-sm font-semibold truncate">{{ account.name }}</div>
          <div class="text-gray-500 text-xs font-normal truncate">@{{ account.username }}</div>
        </div>
      </div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
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

<style scoped>

</style>
