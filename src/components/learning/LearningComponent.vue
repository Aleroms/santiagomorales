<template>
  <div class="learning-container">
    <LearningControls :data="learningStore.learning" v-if="!learningStore.isLoading" />
    <Transition name="fade" mode="out-in">
      <LearningDisplay v-if="!learningStore.isLoading" :key="learningStore.activeItem.id" />
    </Transition>

    <CenteredLink :nav="{ id: '/projects', text: 'projects' }" />
  </div>
</template>

<script setup>
import LearningControls from '@/components/learning/LearningControls.vue'
import { onBeforeMount } from 'vue'
import { useLearningStore } from '@/stores/learning.js'
import LearningDisplay from '@/components/learning/LearningDisplay.vue'
import CenteredLink from '@/components/Utilities/messages/CenteredLink.vue'
const learningStore = useLearningStore()

onBeforeMount(() => {
  learningStore.initialize()
})
</script>

<style lang="scss" scoped></style>
