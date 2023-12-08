<template>
  <div class="manage-wrapper">
    <h1 id="#">Manage Pages:</h1>
    <div class="section-wrapper">
      <ul class="controls">
        <li @click="selector('home')">
          <h3 :class="{ active: sectionTitle === 'Home Section' }">Home</h3>
        </li>
        <li @click="selector('about')">
          <h3 :class="{ active: sectionTitle === 'About Section' }">About</h3>
        </li>
        <li @click="selector('projects')">
          <h3 :class="{ active: sectionTitle === 'Projects Section' }">Projects</h3>
        </li>
        <li @click="selector('skills')">
          <h3 :class="{ active: sectionTitle === 'Skills Section' }">Skills</h3>
        </li>
        <!-- <li @click="selector('edu')">
          <h3 :class="{ active: sectionTitle === 'Education' }">Education</h3>
        </li> -->
      </ul>
    </div>
    <ButtonComponent type="filled" text="logout" @click="userStore.logout" />
    <SectionHeader :id="sectionTitle" :title="sectionTitle" />
    <component :is="sectionSelector" />
  </div>
</template>

<script setup>
import AboutForm from '../components/Utilities/Forms/AboutForm.vue'
import HomeForm from '../components/Utilities/Forms/HomeForm.vue'
import EducationForm from '@/components/Utilities/Forms/EducationForm.vue'
import ProjectsForm from '../components/Utilities/Forms/ProjectsForm.vue'
import SkillsForm from '../components/Utilities/Forms/SkillsForm.vue'

import SectionHeader from '../components/Utilities/SectionHeader.vue'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

import { useUserStore } from '@/stores/user.js'
import { ref, shallowRef } from 'vue'

const userStore = useUserStore()
const sectionSelector = shallowRef(HomeForm)
const sectionTitle = ref('Home Section')

const selector = (id) => {
  if (id === 'home') {
    sectionTitle.value = 'Home Section'
    sectionSelector.value = HomeForm
  } else if (id === 'about') {
    sectionTitle.value = 'About Section'
    sectionSelector.value = AboutForm
  } else if (id === 'edu') {
    sectionTitle.value = 'Education'
    sectionSelector.value = EducationForm
  } else if (id === 'projects') {
    sectionTitle.value = 'Projects Section'
    sectionSelector.value = ProjectsForm
  } else if (id === 'skills') {
    sectionTitle.value = 'Skills Section'
    sectionSelector.value = SkillsForm
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: var(--text-light-1) !important;
}
.section-wrapper {
  margin: 1rem 0;

  .controls {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    cursor: pointer;

    h3 {
      color: var(--primary);
    }
  }
}
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
