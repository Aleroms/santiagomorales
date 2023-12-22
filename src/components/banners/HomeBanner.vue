<template>
  <div class="home">
    <BannerTemplate>
      <template #card>
        <ImageCard :image="data.avatar" />
      </template>
      <template #primary>
        <h1 class="title">{{ data.title }}</h1>
        <h2 class="subtitle">{{ data.subtitle }}</h2>
        <Typewriter :data="data.slug" />
      </template>
      <template #secondary>
        <div class="secondary">
          <p>{{ data.keywords }}</p>
        </div>
        <div class="socials">
          <SocialMedia social="github" size="lg" />
          <SocialMedia social="linkedin" size="lg" />
          <SocialMedia social="threads" size="lg" />
        </div>
        <div class="resume-wrapper">
          <font-awesome-icon icon="fa-solid fa-chevron-right" color="#39B54A" />
          <a :href="data.resume.url">view resume</a>
        </div>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import Typewriter from '../Utilities/Typewriter.vue'
import BannerTemplate from '../Utilities/templates/BannerTemplate.vue'
import ImageCard from '../card/ImageCard.vue'
import SocialMedia from '../socials/SocialMedia.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

console.log(props.data)
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 1rem 0;
}
.resume-wrapper {
  a {
    margin-left: 10px;
  }
}
.secondary {
  padding-left: 0.625rem;
  border-left: 2px solid var(--secondary-green);
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
@media (max-width: 1026px) {
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
    font-size: 32px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
}
</style>
