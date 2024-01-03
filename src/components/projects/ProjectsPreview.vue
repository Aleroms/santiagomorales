<template>
  <div class="projects-preview">
    <ProjectsControls />
    <Transition name="fade" mode="out-in">
      <ProjectsDisplay
        v-if="!projectStore.isLoading"
        :data="projectStore.activeProjects"
        :key="projectStore.activeFramework"
      />
    </Transition>
  </div>
</template>

<script setup>
import ProjectsControls from '@/components/projects/ProjectsControls.vue'
import ProjectsDisplay from './ProjectsDisplay.vue'
import { useProjectStore } from '@/stores/projects'

const projectStore = useProjectStore()
projectStore.initialize()
</script>

<style lang="scss" scoped></style>
