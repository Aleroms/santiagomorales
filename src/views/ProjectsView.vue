<template>
  <div class="container">
    <ProjectsBanner />
    <section class="projects-container">
      <ProjectsPreview />
    </section>
  </div>
</template>

<script setup>
import ProjectsBanner from '@/components/banners/ProjectsBanner.vue'
import ProjectsPreview from '@/components/projects/ProjectsPreview.vue'
import { useProjectStore } from '../stores/projects'
const projectStore = useProjectStore()
projectStore.showComplete()
// projectStore.showPreview()
</script>

<style lang="scss" scoped></style>
