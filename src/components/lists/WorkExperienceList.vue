<template>
  <div class="exp-wrapper">
    <listitemtemplate :image="data.image">
      <template #info>
        <h3 class="title">{{ data.title }}</h3>
        <h4>{{ data.company }} - {{ data.emp_type }}</h4>
        <p class="subtitle" v-if="!data.current_job">
          {{ start.month }} {{ start.year }} - {{ end.month }} {{ end.year }} -
          {{ duration }}
        </p>
        <p class="subtitle" v-else>
          {{ start.month }} {{ start.year }} - Present -
          {{ duration }}
        </p>
        <p class="subtitle">{{ data.location }} - {{ data.loc_type }}</p>
      </template>
    </listitemtemplate>
  </div>
</template>

<script setup>
import listitemtemplate from '@/components/Utilities/templates/ListItemTemplate.vue'
import { calculateDuration } from '@/utils/date.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const start = props.data.start
const end = props.data.end
const duration = calculateDuration(start, end)
</script>

<style lang="scss" scoped></style>
