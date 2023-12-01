<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import NavigationBar from './components/Navbar/NavigationBar.vue'
import { useWindowWidth } from './composables/windowWidth'

const navbarTop = ref('-100px')
const { windowWidth } = useWindowWidth()

const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop

  navbarTop.value = scrollTop > 82 ? '0' : '-100px'
  // console.log('scroll')
}

onMounted(() => {
  window.addEventListener('scroll', scrollFunction)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollFunction)
})
</script>

<template>
  <header>
    <NavigationBar />
    <NavigationBar class="navbar" :style="{ top: navbarTop }" />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>footer {{ windowWidth }}</footer>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: -100px;
  width: 100%;
  transition: top 0.3s;
}
</style>
