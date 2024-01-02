<template>
  <div class="learning-container">
    <LearningControls :data="learningStore.learning" v-if="!learningStore.isLoading" />
  </div>
</template>

<script setup>
import LearningControls from '@/components/learning/LearningControls.vue'
import { onBeforeMount } from 'vue'
import { useLearningStore } from '@/stores/learning.js'
const learningStore = useLearningStore()

onBeforeMount(() => {
  learningStore.initialize()
})
</script>

<style lang="scss" scoped></style>
