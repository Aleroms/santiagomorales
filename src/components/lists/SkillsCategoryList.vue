<template>
  <div class="skills-category">
    <ListItemTemplate :image="props.data.image">
      <template #info>
        <h3>{{ data.name }}</h3>
        <p class="subtitle">{{ data.desc }}</p>
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
