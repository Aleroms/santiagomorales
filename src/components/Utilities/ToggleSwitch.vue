<template>
  <label class="switch">
    <input type="checkbox" :checked="themeStore.isDark" @click="toggle" />
    <span class="slider round"></span>
  </label>
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
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 1px solid var(--divider-dark-1);

  // when in dark mode slider background
  background-color: var(--slider-one);
}
.slider::before {
  position: absolute;
  content: '';
  height: 23px;
  width: 23px;
  left: 4px;
  top: 4px;
  //the slider ball
  background-color: var(--slider-2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  //when in light mode slider background
  background-color: var(--slider-one);
}

input:checked + .slider::before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.slider.round::before {
  border-radius: 50%;
}
</style>
