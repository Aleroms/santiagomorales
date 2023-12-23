<template>
  <div class="about-me-cards">
    <CardTemplate v-for="card in data" :key="card.title">
      <template #title>
        <h3>{{ card.title }}</h3>
      </template>
      <template #content>
        <p class="subtitle">{{ card.content }}</p>
      </template>
    </CardTemplate>
  </div>
</template>

<script setup>
import CardTemplate from '../Utilities/templates/CardTemplate.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.about-me-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  align-items: center;
  justify-content: space-evenly;

  p {
    margin: 0.625rem;
  }
}
</style>
