<template>
  <div class="container">
    <ProjectsBanner />
    <SectionHeader title="Filter by Framework" id="framework" />
    <section class="projects-container">
      <ProjectsPreview />
    </section>
  </div>
</template>

<script setup>
import ProjectsBanner from '@/components/banners/ProjectsBanner.vue'
import ProjectsPreview from '@/components/projects/ProjectsPreview.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
</script>

<style lang="scss" scoped></style>
