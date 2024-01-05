<template>
  <div class="home">
    <BannerTemplate>
      <template #card>
        <div class="img-wrapper" v-motion="motionFloat">
          <img src="/home-banner.png" alt="santiago morales" loading="eager" />
        </div>
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
        <ButtonExternalLink type="filled" :path="data.resume.url" text="resume" class="resume" />
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import Typewriter from '@/components/Utilities/TypeWriter.vue'
import BannerTemplate from '@/components/Utilities/templates/BannerTemplate.vue'
import SocialMedia from '@/components/socials/SocialMedia.vue'
import ButtonExternalLink from '@/components/Utilities/buttons/ButtonExternalLink.vue'
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
  margin: 1rem 0 2rem;
}
.resume {
  margin-top: 3rem !important;
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
.img-wrapper {
  max-height: 450px;
  max-width: 450px;

  img {
    width: 100%;
    border-radius: 10px;
    // padding: 0.625rem;
    box-sizing: border-box;
  }
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
  .img-wrapper {
    max-width: 400px;
    max-height: 400px;
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
