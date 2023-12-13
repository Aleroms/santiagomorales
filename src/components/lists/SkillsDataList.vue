<template>
  <div class="skills-data">
    <ListItemTemplate :image="props.data.image">
      <template #info>
        <h3>{{ data.name }}</h3>
        <h4 class="subtitle">{{ data.category }}</h4>
      </template>
    </ListItemTemplate>
  </div>
</template>

<script setup>
import ListItemTemplate from '../utilities/templates/ListItemTemplate.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
