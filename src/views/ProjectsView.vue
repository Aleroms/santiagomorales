<template>
  <div class="container">
    <ProjectsBanner />
    <section class="projects-container">
      <ProjectsPreview v-motion-fade />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useProjectStore } from '../stores/projects'


const ProjectsBanner = defineAsyncComponent(() => import('@/components/banners/ProjectsBanner.vue'))
const ProjectsPreview = defineAsyncComponent(
  () => import('@/components/projects/ProjectsPreview.vue')
)


const projectStore = useProjectStore()
projectStore.showComplete()
</script>

<style lang="scss" scoped>
.projects-container {
  margin: 0 auto 4rem;
}
</style>
