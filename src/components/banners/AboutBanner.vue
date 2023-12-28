<template>
  <div class="about container">
    <BannerTemplate>
      <template #card>
        <ImageCard :image="props.data.image" class="about-img" />
      </template>
      <template #primary>
        <h1 class="title">{{ props.data.title }}</h1>
      </template>
      <template #secondary>
        <p class="secondary">{{ data.content }}</p>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import BannerTemplate from '@/components/Utilities/templates/BannerTemplate.vue'
import ImageCard from '@/components/card/ImageCard.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
p {
  padding-left: 15px;
  border-left: 1px solid var(--primary);
}
.secondary {
  max-width: 450px;
  font-size: 20px;
}
.title {
  font-size: 50px;
}
.about-img {
  max-width: 300px;
}
@media (max-width: 900px) {
  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .secondary {
    max-width: 370px;
  }
}
@media (max-width: 430px) {
  .title {
    font-size: 1.625rem;
  }
  p {
    border-left: none;
  }
}

@media (max-width: 430px) {
  .title {
    font-size: 1.225rem;
  }
  .secondary {
    max-width: 370px;
    font-size: 16px;
    padding-left: 0;
  }
}
</style>
