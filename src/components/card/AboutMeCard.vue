<template>
  <div class="about-me-cards" v-motion-fade>
    <HorizontalScrollTemplate>
      <template #horizontal-item>
        <CardTemplate
          v-for="card in props.data"
          :key="card.title"
          class="card-template"
        >
          <template #title>
            <h3>{{ card.title }}</h3>
          </template>
          <template #content>
            <p class="subtitle">{{ card.content }}</p>
          </template>
        </CardTemplate>
      </template>
    </HorizontalScrollTemplate>
  </div>
</template>

<script setup>
import CardTemplate from '../Utilities/templates/CardTemplate.vue'
import HorizontalScrollTemplate from '../Utilities/templates/HorizontalScrollTemplate.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.about-me-cards {
  p {
    margin: 0.625rem;
  }
}
.card-template {
  padding-bottom: 1rem;
}
</style>
