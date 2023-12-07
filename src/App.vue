<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import NavigationBar from './components/Navbar/NavigationBar.vue'
import CollapsedMenu from '@/components/Navbar/CollapseMenu.vue'
import { useWindowWidth } from './composables/windowWidth'
import { useCollapsedMenuStore } from './stores/collapsedMenu'
import SocialMedia from './components/socials/socialmedia.vue'
import FooterComponent from './components/FooterComponent.vue'

const navbarTop = ref('-100px')
const collapsedMenu = useCollapsedMenuStore()
const { windowWidth } = useWindowWidth()

const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  navbarTop.value = scrollTop > 82 ? '0' : '-100px'
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
    <!-- static navbar  -->
    <NavigationBar />

    <!-- slide down with scroll effect  -->
    <NavigationBar class="navbar" :style="{ top: navbarTop }" />

    <Transition name="fade" mode="out-in">
      <CollapsedMenu v-if="collapsedMenu.menuOpen && windowWidth < 1024" />
    </Transition>
  </header>
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <p>footer {{ windowWidth }}</p>
    <RouterLink to="/manage">Manage</RouterLink>
  </main>
  <FooterComponent />
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.navbar {
  position: fixed;
  z-index: 1000;
  top: -100px;
  left: 0;
  width: 100%;
  transition: top 0.3s;
  box-sizing: border-box;
}
</style>
