<template>
  <div class="learning-display">
    <div class="img-wrapper">
      <img :src="active.image.url" :alt="active.image.name" loading="lazy" />
    </div>
    <article class="content">
      <h2 class="primary-title">{{ active.name }}</h2>
      <p class="text" v-for="text in active.body" :key="text">
        {{ text }}
      </p>
      <div>
        <h3 class="secondary-title">Projects I have used {{ active.name }} in...</h3>
        <LearningProjects :id="active.name" />
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLearningStore } from '@/stores/learning.js'
import LearningProjects from '@/components/learning/LearningProjects.vue'
const learningStore = useLearningStore()
const active = ref(learningStore.activeItem)

</script>

<style lang="scss" scoped>
.content {
  max-width: 900px;

  .text {
    margin: 1rem 0;
  }
}
.img-wrapper {
  width: 100px;
  height: 100px;
  margin: 1.625rem;
  box-sizing: border-box;

  img {
    width: 100%;
  }
}
.learning-display {
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 15px;
  background-color: var(--secondary-soft);
  border: 1px solid var(--divider-dark-1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
@media (max-width: 500px) {
  .learning-display {
    flex-direction: column;
    align-items: center;
  }
  .content {
    margin-top: 1.625rem;
  }
}
</style>
