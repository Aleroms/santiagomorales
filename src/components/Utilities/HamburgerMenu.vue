<template>
  <div class="hamburger-container" :class="{ active: collapsedMenu.menuOpen }" @click="toggleMenu">
    <div class="line top"></div>
    <div class="line mid"></div>
    <div class="line bot"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCollapsedMenuStore } from '@/stores/collapsedMenu'

const collapsedMenu = useCollapsedMenuStore()

const toggleMenu = () => {
  //stops scrolling for body
  if (!collapsedMenu.menuOpen) document.body.classList.add('collapse-active')
  else document.body.classList.remove('collapse-active')

  collapsedMenu.toggleMenu()
}

onMounted(() => {
  collapsedMenu.toggleMenu()
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  cursor: pointer;
}
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
  background-color: var(--toggle-collapse);
  margin: 8px 0;
  transition: 0.3s;
  border-radius: 2px;
}
</style>
