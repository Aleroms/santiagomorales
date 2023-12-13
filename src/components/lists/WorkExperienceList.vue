<template>
  <div class="exp-wrapper">
    <div class="img-wrapper">
      <img :src="data.imgURL" alt="logo" />
    </div>
    <div class="info-wrapper">
      <h3 class="title">{{ data.title }}</h3>
      <h4>{{ data.company }} - {{ data.emp_type }}</h4>
      <p class="subtitle" v-if="!data.current_job">
        {{ startMonth }} {{ startYear }} - {{ endMonth }} {{ endYear }} -
        {{ duration }}
      </p>
      <p class="subtitle" v-else>
        {{ startMonth }} {{ startYear }} - Present -
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

//this code is honestly bad but its the only way i got it to work
const start = props.data.start
const end = props.data.end
let duration = ''
let startMonth = ''
let endMonth = ''
let startYear = ''
let endYear = ''

if (start !== undefined && end !== undefined) {
  duration = calculateDuration(start, end)
  startMonth = start.month.slice(0, 3)
  endMonth = end.month.slice(0, 3)
  startYear = start.year
  endYear = end.year
}
console.log(duration, startMonth, endMonth, startYear, endYear)
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
