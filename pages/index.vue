<template>
  <div class="grid grid-cols-2 gap-2 font-mono p-2 font-extrabold">
    <div class="p-4 rounded-lg bg-primary-800 text-primary-400">
      date
      <p class="text-2xl">{{ currentTime.toLocaleDateString() }}</p>
    </div>
    <div class="p-4 rounded-lg bg-primary-800/40 text-primary-400">
      <p>time</p>
      <p class="text-2xl text-primary-500">{{ currentTime.toLocaleTimeString() }}</p>
    </div>
    <div class="p-4 rounded-lg shadow-lg bg-primary-600 col-span-2 text-primary-200" @click="timer()">
      <p>timer</p>
      <p class="text-6xl text-primary-200">{{ timer_date }} </p>
      <template v-if="timer_date">
        <u-icon name="i-ph-pause-fill"/>
      </template>
      <template v-else>
        <u-icon name="i-ph-play-fill"/>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
const {currentTime} = useCurrentTime();
const timer_date = useCookie('timer_date')

const timer = async () => {
  timer_date.value = currentTime.value
};
</script>