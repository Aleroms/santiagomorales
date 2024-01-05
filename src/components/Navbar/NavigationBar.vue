<template>
  <nav class="nav">
    <div class="logo-wrapper">
      <RouterLink to="/">
        <img src="/logo.png" alt="logo" width="55" height="55" />
      </RouterLink>
      <RouterLink to="/" v-if="windowWidth > 446">
        <h2>{{ pageTitle }}</h2>
      </RouterLink>
      <!-- <h2 v-if="windowWidth > 446">{{ pageTitle }}</h2> -->
    </div>
    <div class="nav-links" v-if="windowWidth > 1026">
      <div class="nav-links-primary">
        <ul class="routes-wrapper">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/skills">Skills</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
      <div class="nav-links-secondary">
        <!-- toggles dark/light mode -->
        <ToggleSwitch />
        <SocialMedia social="github" size="2xl" />
        <SocialMedia social="linkedin" size="2xl" />
      </div>
    </div>
    <!-- Hamburger menu  -->
    <HamburgerMenu v-else />
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useWindowWidth } from '@/composables/windowWidth.js'
import ToggleSwitch from '../Utilities/ToggleSwitch.vue'
import { ref, watchEffect } from 'vue'
import HamburgerMenu from '@/components/Utilities/HamburgerMenu.vue'
import SocialMedia from '@/components/socials/SocialMedia.vue'

const route = useRoute()
const pageTitle = ref('')

watchEffect(() => {
  pageTitle.value = route.meta.title || 'Santiago Morales | Portfolio' // Use a default value if title is undefined
})

const { windowWidth } = useWindowWidth()
</script>

<style lang="scss" scoped>
.github-link {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-links-secondary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
}
.nav-links {
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 55px;
}
.routes-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  .router-link-active {
    color: var(--primary);
  }
  li {
    margin: 0 1rem;
  }
}
.nav {
  padding: 0.725rem 2rem;
  min-height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--divider-dark-1);
  background-color: var(--nav-bg);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}

.logo-wrapper {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  img {
    height: 54px;
    width: 54px;
  }
}

@media (max-width: 1024px) {
  .logo-wrapper {
    margin-left: 0;
  }
}
</style>
