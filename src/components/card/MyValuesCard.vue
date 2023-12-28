<template>
  <div class="values-wrapper">
    <CardTemplate
      v-for="card in props.data"
      :key="card.title"
      class="my-value-card"
      :style="{
        border: `2px solid ${card.color}`
      }"
    >
      <template #title>
        <div class="heading">
          <font-awesome-icon :icon="['fas', card.icon]" size="lg" :color="card.color" />
          <h3>{{ card.title }}</h3>
        </div>
      </template>
      <template #content>
        <p>{{ card.content }}</p>
      </template>
    </CardTemplate>
  </div>
</template>

<script setup>
import CardTemplate from '@/components/Utilities/templates/CardTemplate.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.my-value-card {
  border-radius: 15px;
}

.heading {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0.225rem 0.625rem;
}
.card-wrapper {
  .card {
    max-height: fit-content;
  }
}
.values-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  p {
    margin: 0.625rem;
  }
}
</style>
