<template>
  <div class="collapse-container">
    <div class="inner-container">
      <div class="links">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/skills" @click="closeMenu">Skills</RouterLink>
        <RouterLink to="/projects" @click="closeMenu">Projects</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
      </div>
      <div class="container-1">
        <h5>Appearance</h5>
        <ToggleSwitch />
      </div>
      <div class="contact">
        <SocialMedia social="github" size="2xl"/>
        <SocialMedia social="linkedin" size="2xl"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from '../Utilities/ToggleSwitch.vue'
import { useCollapsedMenuStore } from '@/stores/collapsedMenu'
import SocialMedia from '../socials/socialmedia.vue'

const collapsedMenu = useCollapsedMenuStore()

const closeMenu = () => {
  //remove collapse menu overflow
  document.body.classList.remove('collapse-active')

  collapsedMenu.toggleMenu()
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  a {
    margin: 0 15px;
  }
}

.links {
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-weight: 700;
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--divider-dark-1);
  }
}
.inner-container {
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1rem;
  width: 300px;
}
.collapse-container {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  top: 80px;
  left: 0;
  background-color: var(--secondary);
}
</style>
