<template>
  <div v-if="projects">
    <div class="projects-container">
      <RouterLink class="item" v-for="proj in projects" :key="proj.id" :to="`projects/${proj.id}`">
        <div class="img-wrapper">
          <img :src="proj.image.url" :alt="proj.image.name" loading="lazy"/>
        </div>
        <p>{{ proj.name }}</p>
      </RouterLink>
    </div>
  </div>
  <div v-else><p class="subtitle text">I have not used this in projects . . . yet! ✨</p></div>
</template>

<script setup>
import { computed } from 'vue'
import { useProjectStore } from '@/stores/projects.js'

const projectStore = useProjectStore()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const projects = computed(() => {
  let filteredProjs = projectStore.getProjectsByFrameworkUsed(props.id)
  if (filteredProjs.length > 0) {
    //filtering by framework
    return filteredProjs
  } else {
    //filtering by tool used
    filteredProjs = projectStore.getProjectsByToolsUsed(props.id)
  }

  return filteredProjs.length > 0 ? filteredProjs : undefined
})
</script>

<style lang="scss" scoped>

.text {
  margin-top: 1rem;
}
.img-wrapper {
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
  }
}
.projects-container {
  display: flex;
  flex-direction: row;
  max-width: 900px;
  flex-wrap: wrap;
  margin: 1rem;

  .item {
    border: 1px solid var(--divider-dark-1);
    margin: 5px;
    padding: 0.625rem;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    &:hover{
      border: 1px solid var(--primary);
    }
  }
}
</style>
