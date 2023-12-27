<template>
  <div>
    <div class="controls-wrapper">
      <ul class="controls">
        <li
          v-for="item in frameworksDocs"
          :key="item.id"
          @click="projectStore.setActive(item.name)"
        >
          <h3 :class="{ active: projectStore.activeFramework === item.name }">{{ item.name }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
import { useProjectStore } from '@/stores/projects.js'

const projectStore = useProjectStore()
const frameworksDocs = ref([])
const frameworks = ref([])

onMounted(async () => {
  try {
    frameworksDocs.value = await getDocuments('frameworks')
    frameworks.value = frameworksDocs.value.map((item) => item.name)
  } catch (error) {
    console.log(error)
  }
})
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
