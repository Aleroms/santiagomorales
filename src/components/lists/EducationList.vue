<template>
  <div class="education-list">
    <listItemTemplate :fallback="data.image" :image="data.thumbnail">
      <template #info>
        <h3>{{ data.school }}</h3>
        <h4>{{ data.degree }} {{ data.field_of_study }}</h4>
        <p class="subtitle">
          {{ startMonth }} {{ data.start.year }} - {{ endMonth }} {{ data.end.year }}
        </p>
        <p class="info">Activities and societies: {{ data.activities }}</p>
        <p class="info">{{ data.description }}</p>
      </template>
    </listItemTemplate>
  </div>
</template>

<script setup>
import listItemTemplate from '@/components/Utilities/templates/ListItemTemplate.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const startMonth = props.data.start.month.slice(0, 3)
const endMonth = props.data.end.month.slice(0, 3)
</script>

<style lang="scss" scoped>
.info {
  margin-top: 1rem;
}
</style>
