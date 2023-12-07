<template>
  <div class="manage-wrapper">
    <h1 id="#">Manage Pages:</h1>
    <ButtonComponent type="filled" text="logout" @click="userStore.logout" />
    <SectionHeader id="home" title="Home Section" />
    <HomeForm />
    <SectionHeader id="about" title="About Section" />
    <AboutForm />
    <SectionHeader id="project" title="Project Section" />
    <SectionHeader id="skill" title="Skills Section" />
  </div>
</template>

<script setup>
import AboutForm from '../components/Utilities/Forms/AboutForm.vue'
import HomeForm from '../components/Utilities/Forms/HomeForm.vue'
import SectionHeader from '../components/Utilities/SectionHeader.vue'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.manage-wrapper {
  margin: 1rem;
  max-width: 640px;

  h1 {
    margin: 2.25rem 0;
  }
  h2 {
    margin-bottom: 1rem;
  }
  hr {
    border: 1px solid var(--divider-dark-1);
    margin: 0.625rem 0;
  }
}
@media (min-width: 640px) {
  .manage-wrapper {
    margin: 1rem auto;
  }
}
</style>
