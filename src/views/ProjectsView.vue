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
</script>

<style lang="scss" scoped>
.projects-container{
  margin: 0 auto 4rem;
}
</style>
