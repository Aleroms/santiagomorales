<template>
  <div class="exp-wrapper">
    <div class="img-wrapper">
      <img :src="data.imgURL" alt="logo" />
    </div>
    <div class="info-wrapper">
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
    </div>
  </div>
</template>

<script setup>
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
console.log(duration)
</script>

<style lang="scss" scoped>
.exp-wrapper {
  display: flex;
  flex-direction: row;
  gap: 25px;

  .title {
    font-weight: 900;
    text-transform: capitalize;
  }
}
.img-wrapper {
  height: 48px;
  width: 48px;

  img {
    width: 100%;
    padding: 0.625rem;
  }
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .subtitle {
    color: var(--text-light-2);
  }
}
</style>
