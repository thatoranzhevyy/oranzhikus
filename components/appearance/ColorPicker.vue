<template>
  <ClientOnly>
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-1">
      <div v-for="color in primaryColors"
           :class="{'bg-gray-100 dark:bg-gray-800':color.value === primary.value}"
           class="rounded-md hover:bg-gray-100 dark:hover:bg-gray-800/50 cursor-pointer"
           @click="primary = color">
        <div class="flex gap-2">
          <div class="w-4 rounded-l-md" :style="{ backgroundColor: color.hex }"/>
          <div class="py-0.5">{{ color.value }}</div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import colors from '#tailwind-config/theme/colors'

const appConfig = useAppConfig()
const colorMode = useColorMode()

const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({
  value: color,
  text: color,
  hex: colors[color][colorMode.value === 'dark' ? 400 : 500]
})))
const primary = computed({
  get() {
    return primaryColors.value.find(option => option.value === appConfig.ui.primary)
  },
  set(option) {
    appConfig.ui.primary = option.value
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary)
  }
})
</script>
