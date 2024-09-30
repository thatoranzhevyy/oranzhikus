<script setup lang="ts">
const route = useRoute()

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
            <div class="text-gray-500 text-xs font-normal truncate">@{{route.params.account}}</div>
          </div>
        </div>
      </template>
    </ApplicationBar>
    <div class="max-w-3xl mx-auto py-2 px-2 md:px-0 space-y-2">

    </div>
</template>

<style scoped>

</style>
