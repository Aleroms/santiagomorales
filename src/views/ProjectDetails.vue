<template>
  <div>
    <ProjectDetailsBanner
      :data="{
        image: project.image,
        start: project.start,
        end: project.end,
        name: project.name,
        desc: project.desc
      }"
    />
    
    <h2>What I Used</h2>
    <p>{{ project.toolsUsed }}</p>
    <h2>My Process</h2>
    <p>{{ project.my_process }}</p>
    <h2>Issues Encountered</h2>
    <p>{{ project.issues_encountered }}</p>
    <h2>What I Learned</h2>
    <p>{{ project.what_i_learned }}</p>
    <h2>Useful Links</h2>
    <p>{{ project.usefulLinks }}</p>
    <h3 v-if="!project.isPrivate">View Source Code on <a :href="project.githubLink">Github</a></h3>
    <h3 v-else>Private Repo</h3>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projects.js'
import { ref, onBeforeMount } from 'vue'
import ProjectDetailsBanner from '@/components/banners/ProjectDetailsBanner.vue'
const projectStore = useProjectStore()
const project = ref({})
onBeforeMount(() => {
  project.value = projectStore.getProjectDetails
  console.log(project.value)
})
</script>

<style lang="scss" scoped></style>
