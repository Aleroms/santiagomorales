<template>
  <div class="home">
    <BannerTemplate :image="data.avatar">
      <template #primary>
        <h1 class="title">{{ data.title }}</h1>
        <h2 class="subtitle">{{ data.subtitle }}</h2>
        <h3>{{ data.slug[0] }}</h3>
      </template>
      <template #secondary>
        <div class="secondary">
          <p>{{ data.keywords }}</p>
          <a :href="data.resume.url">resume</a>
        </div>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import BannerTemplate from '../Utilities/templates/BannerTemplate.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
console.log(props.data)
</script>

<style lang="scss" scoped>
.secondary {
  padding-left: 0.625rem;
  border-left: 2px solid var(--primary);
  margin: 3rem 0;
  p {
    line-height: 1.8rem;
  }
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
</style>
