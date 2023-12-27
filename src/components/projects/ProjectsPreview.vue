<template>
  <div class="projects-preview">
    <ProjectsControls />
    <ProjectsDisplay v-if="!projectStore.isLoading" :data="projectStore.activeProjects" />
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
