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
  valueLight: 'light'
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
  
  // when in dark mode
  background-color: var(--toggle-light);
}
.slider::before {
  position: absolute;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  top: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  //when in light mode
  background-color: var(--toggle-dark);
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
