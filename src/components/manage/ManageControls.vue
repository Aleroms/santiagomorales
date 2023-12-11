<template>
  <div class="manage-controls">
    <div class="controls-wrapper">
      <h2>Manage Page Content</h2>
      <ul class="controls">
        <li
          v-for="item in selector.managePages"
          :key="item.id"
          @click="manageStore.setActive(item.id, item.title, item.isList)"
        >
          <h3 :class="{ active: isActive === item.id }">{{ item.title }}</h3>
        </li>
      </ul>
    </div>
    <div class="controls-wrapper">
      <h2>Manage Data</h2>
      <ul class="controls">
        <li
          v-for="item in selector.manageData"
          :key="item.id"
          @click="manageStore.setActive(item.id, item.title, item.isList)"
        >
          <h3 :class="{ active: isActive === item.id }">{{ item.title }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useManageStore } from '@/stores/manage'

const manageStore = useManageStore()

//used to determine which btn to present to user
//id is submitted to manageStore
const selector = {
  managePages: [
    {
      id: 'HomeForm',
      title: 'Home Page',
      isList: false
    },
    {
      id: 'AboutForm',
      title: 'About Page',
      isList: false
    },
    {
      id: 'ProjectsForm',
      title: 'Projects Page',
      isList: false
    },
    {
      id: 'SkillsForm',
      title: 'Skills Page',
      isList: false
    }
  ],
  manageData: [
    {
      id: 'EducationList',
      title: 'Education',
      isList: true
    },
    {
      id: 'WorkExperienceList',
      title: 'Work Experience',
      isList: true
    },
    {
      id: 'CertificateList',
      title: 'Certificates',
      isList: true
    },
    {
      id: 'SkillsDataList',
      title: 'Skills',
      isList: true
    },
    {
      id: 'SkillsCategoryList',
      title: 'Skills Category',
      isList: true
    },
    {
      id: 'ActiveLearningList',
      title: 'Active Learning',
      isList: true
    },
    {
      id: 'ProjectsDataList',
      title: 'Projects',
      isList: true
    },
    {
      id: 'ToolsList',
      title: 'Tools',
      isList: true
    }
  ]
}

//default
const isActive = ref('home')
</script>

<style lang="scss" scoped>
.active {
  color: var(--text-light-1) !important;
}
.controls {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  cursor: pointer;
  padding: 1rem;

  h3 {
    color: var(--primary);
  }
}
.controls-wrapper {
  margin: 1rem 0;
  border-bottom: 1px solid var(--divider-dark-1);
}
</style>
