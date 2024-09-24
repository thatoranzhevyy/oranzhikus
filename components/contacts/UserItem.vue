<script setup lang="ts">
const props = defineProps(["user"]);
</script>

<template>
  <div class="flex items-center p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
    <UAvatar :alt="props.user.name ?? props.user.username" size="md"/>
    <div class="flex-1 min-w-0 ml-2">
      <div class="text-sm font-semibold truncate">{{ props.user.name ?? props.user.username }}</div>
      <div class="text-gray-500 text-xs font-normal truncate">
        {{ props.user.email || '@' + props.user.username }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
