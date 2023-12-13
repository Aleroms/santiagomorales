<template>
  <div class="active-learning">
    <ListItemTemplate :image="props.data.image">
      <template #info>
        <h3>{{ data.name }}</h3>
        <p>id: {{ data.id }}</p>
        <p>description:</p>
        <div v-for="(item, index) in data.body" :key="index">
          <p class="subtitle">{{ item }}</p>
        </div>
      </template>
    </ListItemTemplate>
  </div>
</template>

<script setup>
import ListItemTemplate from '../Utilities/templates/ListItemTemplate.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
