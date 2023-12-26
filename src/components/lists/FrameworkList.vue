<template>
  <div class="framework">
    <ListItemTemplate :image="props.data.image">
      <template #info>
        <h3>{{ data.name }}</h3>
      </template>
    </ListItemTemplate>
  </div>
</template>

<script setup>
import ListItemTemplate from '../Utilities/templates/ListItemTemplate.vue'
const props = defineProps({
  data: {
    required: true,
    type: Object
  }
})
</script>

<style lang="scss" scoped></style>
