<script setup lang="ts">
const props = defineProps({isSticky: {type: Boolean, default: true}})
</script>

<template>
  <div class="top-0 left-0 right-0 z-50" :class="{ sticky: props.isSticky }">
    <div class="w-full h-14 bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl p-2">
      <div class="max-w-3xl mx-auto flex justify-between items-center">
        <div v-if="$slots.left" class="flex items-center space-x-2">
          <slot name="left"></slot>
        </div>
        <div v-if="$slots.right" class="flex items-center space-x-2">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
