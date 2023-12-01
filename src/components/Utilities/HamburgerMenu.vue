<template>
  <div class="hamburger-container" :class="{ active: navOpen }" @click="toggleMenu">
    <div class="line top"></div>
    <div class="line mid"></div>
    <div class="line bot"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['collapseMenu', 'navOpen'])
const navOpen = ref(false)

const toggleMenu = () => {
  navOpen.value = !navOpen.value
  emit('collapseMenu', navOpen.value)
}

onMounted(() => {
  emit('collapseMenu', navOpen.value)
})
</script>

<style lang="scss" scoped>
.active {
  .top {
    transform: rotate(-45deg) translateY(17px);
  }
  .mid {
    transform: translateX(-20px) rotate(360deg);
    opacity: 0;
  }
  .bot {
    transform: rotate(45deg) translateY(-17px);
  }
}
.line {
  width: 35px;
  height: 5px;
  background-color: var(--tertiary);
  margin: 8px 0;
  transition: 0.3s;
  border-radius: 2px;
}
</style>
