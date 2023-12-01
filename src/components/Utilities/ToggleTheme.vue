<template>
  <div class="theme-wrapper" @click="test">
    <font-awesome-icon
      icon="fa-solid fa-sun"
      size="2xl"
      v-if="!themeStore.isDark"
      color="var(--reverse-background)"
    />
    <font-awesome-icon
      icon="fa-solid fa-moon"
      size="2xl"
      v-else
      color="var(--reverse-background)"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false
})
const toggleDark = useToggle(isDark)

const test = () => {
  themeStore.toggleTheme()
  toggleDark()
}

onMounted(() => {
  themeStore.isDark = isDark.value
})
</script>

<style lang="scss" scoped>
.theme-wrapper {
  cursor: pointer;
}
</style>
