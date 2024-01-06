<template>
  <Transition name="fade" mode="out-in">
    <font-awesome-icon
      icon="fa-solid fa-moon"
      color="#ccc"
      size="xl"
      v-if="!themeStore.isDark"
      @click="toggle"
      class="border2 toggle"
    />
    <font-awesome-icon
      icon="fa-solid fa-sun"
      color="#333"
      size="xl"
      v-else
      @click="toggle"
      class="border toggle"
    />
  </Transition>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme.js'
import { useDark, useToggle } from '@vueuse/core'

const themeStore = useThemeStore()
const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
  disableTransition: false
})
const toggleDark = useToggle(isDark)

const toggle = () => {
  themeStore.toggleTheme()
  toggleDark()
}
</script>

<style lang="scss" scoped>
.toggle {
  cursor: pointer;
}
.border {
  border: 2px solid var(--slider-3);
  border-radius: 50px;
  padding: 0.425rem;
}
.border2 {
  border: 2px solid var(--slider-3);
  border-radius: 50px;
  padding: 0.425rem 0.625rem;
}
</style>
