<template>
  <div class="project-detail-banner">
    <BannerTemplate class="test">
      <template #card>
        <ImageCard :image="data.image" class="image" />
      </template>
      <template #primary>
        <h1 class="title">{{ data.name }}</h1>
        <p class="subtitle date" v-if="startMonth !== endMonth">
          {{ startMonth }} {{ startYear }} - {{ endMonth }} {{ endYear }} • {{ duration }}
        </p>
        <p class="subtitle date" v-else>{{ startMonth }} {{ startYear }} • {{ duration }}</p>
      </template>
      <template #secondary>
        <p class="text">{{ data.desc }}</p>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import BannerTemplate from '@/components/Utilities/templates/BannerTemplate.vue'
import ImageCard from '@/components/card/ImageCard.vue'
import { calculateDuration } from '@/utils/date.js'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const duration = calculateDuration(props.data.start, props.data.end)
const startMonth = props.data.start.month
const startYear = props.data.start.year
const endMonth = props.data.end.month
const endYear = props.data.end.year
</script>

<style lang="scss" scoped>
.image {
  margin-left: 1rem;
}
.test {
  align-items: center;
}
.text {
  max-width: 500px;
}
h1 {
  font-size: 55px;
  margin-bottom: 0.225rem;
  letter-spacing: 0.1rem;
}
h2 {
  margin-bottom: 0.625rem;
  letter-spacing: 0.1rem;
}
h3 {
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
}
.date{
    margin: 1rem 0;
}

@media (max-width: 1026px) {
  .test {
    flex-direction: column;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 16px;
  }
}

@media (max-width: 440px) {
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
}
@media (max-width: 340px) {
  h1 {
    font-size: 23px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
}
</style>
