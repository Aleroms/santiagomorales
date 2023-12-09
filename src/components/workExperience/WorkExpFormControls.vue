<template>
  <div>
    <workExpDisplay v-for="job in workExpDocuments" :key="job.id" :data="job" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
import workExpDisplay from './workExpDisplay.vue'

const workExpDocuments = ref([])

onMounted(async () => {
  try {
    workExpDocuments.value = await getDocuments('workExperience')
    console.log(workExpDocuments)
  } catch (error) {
    console.log(error)
  }
})
//3 - display controls on the right for add, edit
</script>

<style lang="scss" scoped></style>
