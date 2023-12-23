<template>
  <div class="home">
    <BannerTemplate>
      <template #card>
        <ImageCard :image="data.avatar" v-motion="motionFloat" />
      </template>
      <template #primary>
        <h1 class="title">{{ props.data.title }}</h1>
        <h2 class="gradient-text g-text-1">{{ data.subtitle }}</h2>
        <Typewriter :data="data.slug" />
      </template>
      <template #secondary>
        <div class="secondary">
          <p>{{ data.keywords }}</p>
        </div>
        <div class="socials">
          <SocialMedia social="github" size="xl" />
          <SocialMedia social="linkedin" size="xl" />
          <SocialMedia social="threads" size="xl" />
        </div>
        <div class="resume-wrapper">
          <font-awesome-icon icon="fa-solid fa-chevron-right" color="yellow" class="anim-icon" />
          <a :href="data.resume.url" class="anim-text gradient-text g-text-2">view resume</a>
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
import { motionFloat } from '@/plugins/motion'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin: 1rem 0;
}
.resume-wrapper {

  .anim-icon {
    margin-right: 15px;
    transition: 0.7s ease-in-out;
  }

  .anim-text {
    transition: 0.7s ease-in-out;
    margin-left: 10px;
  }

  &:hover {
    .anim-icon {
      transform: rotate(360deg);
    }
    .anim-text {
      transform: translateX(15px);
      letter-spacing: 0.1rem;
    }
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
