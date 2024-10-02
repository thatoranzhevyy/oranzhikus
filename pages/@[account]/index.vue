<script setup lang="ts">
const route = useRoute()
const dayjs = useDayjs();

definePageMeta({layout: 'none'});
useSeoMeta({title: `@${route.params.account}`});
</script>

<template>
  <ApplicationBar>
    <template #left>
      <UButton size="lg" color="gray" variant="ghost" icon="i-ph-arrow-left-bold" @click="$router.back()"/>
      <div class="flex items-center">
        <UAvatar alt="Лариса Евгеньевна Орехова" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="text-sm font-semibold truncate">Лариса Евгеньевна Орехова</div>
          <div class="text-gray-500 text-xs font-normal truncate">@{{ route.params.account }}</div>
        </div>
      </div>
    </template>
  </ApplicationBar>
  <div class="max-w-3xl mx-auto space-y-2 p-1.5">
    <div class="bg-white dark:bg-gray-900 rounded-md p-2 space-y-2">
      <div class="flex items-center">
        <UAvatar alt="Алла Сергеевна Филиппова" size="md"/>
        <div class="flex-1 min-w-0 ml-2">
          <div class="font-semibold truncate">Алла Сергеевна Филиппова</div>
          <div class="text-gray-500 text-xs font-normal truncate">
            {{ dayjs("2024-09-24T06:06:24.000000Z").utc().format('DD MMM HH:mm') }}
          </div>
        </div>
      </div>
      <div class="text-sm whitespace-pre-wrap">
        <span class="select-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150</span>
        <nuxt-link :to="`/@${route.params.account}/tttetete`" class="inline-block text-primary-500 px-1 rounded-md hover:bg-primary-200/20">
          Показать еще
        </nuxt-link>
      </div>
      <div class="max-w-full whitespace-nowrap overflow-x-auto flex space-x-2">
        <img class="rounded max-w-full"
             src="https://workman.buhe.su/storage/posts/9d0a77dd-2d2b-48d3-b71d-fa7d0a74b037/QcGydStHmtVMH9TApSP39SBujv9MKhRfr78dpuAk.jpg">
      </div>
      <div>
        <u-button size="xs" color="primary" variant="ghost" icon="i-ph-heart-bold" label="2"/>
        <u-button size="xs" color="gray" variant="ghost" icon="i-ph-chat-circle-bold" label="2" :to="`/@${route.params.account}/tttetete`"/>
        <u-button size="xs" color="gray" variant="ghost" icon="i-ph-share-fat-bold" label="1"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
