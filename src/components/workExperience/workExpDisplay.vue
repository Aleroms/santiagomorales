<template>
  <div class="exp-wrapper">
    <div class="img-wrapper">
      <img :src="data.imgURL" alt="logo" />
    </div>
    <div class="info-wrapper">
      <h3 class="title">{{ data.title }}</h3>
      <h4>{{ data.company }} - {{ data.emp_type }}</h4>
      <p class="subtitle" v-if="!data.current_job">
        {{ data.start.month }} {{ data.start.year }} - {{ data.end.month }} {{ data.end.year }} -
        {{ duration }}
      </p>
      <p class="subtitle" v-else>
        {{ data.start.month }} {{ data.start.year }} - Present -
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

const duration = calculateDuration(props.data.start, props.data.end)
</script>

<style lang="scss" scoped>
.exp-wrapper {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 2rem 0;

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
