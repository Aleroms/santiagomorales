<template>
  <div class="home">
    <BannerTemplate>
      <template #card>
        <div class="img-wrapper" v-motion="motionFloat">
          <picture>
            <source srcset="/home-banner.webp" type="image/webp" />
            <img src="/home-banner.png" alt="santiago morales" fetchpriority="high" />
          </picture>
        </div>
      </template>
      <template #primary v-if="isReady">
        <h1 class="title">{{ props.data.title }}</h1>
        <h2 class="gradient-text g-text-1">{{ data.subtitle }}</h2>
        <Typewriter :data="data.slug" />
      </template>
      <!-- skeleton section for primary -->
      <template #primary v-else>
        <div class="skeleton skele-title"></div>
        <div class="skeleton skele-subtitle"></div>
        <div class="skeleton skele-slug"></div>
      </template>
      <template #secondary v-if="isReady">
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
      <template #secondary v-else>
        <div class="skeleton skele-keywords"></div>
        <div class="socials">
          <div class="skeleton skele-icon"></div>
          <div class="skeleton skele-icon"></div>
          <div class="skeleton skele-icon"></div>
        </div>
        <div class="skeleton skele-button"></div>
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
  },
  isReady: {
    type: Boolean,
    required: true
  }
})
</script>

<style lang="scss" scoped>
//skeleton section that is used to render before api is rcv

@keyframes shimmer {
  0% {
    background-position: 100%;
  }

  100% {
    background-position: 0;
  }
}
.skeleton {
  animation: shimmer 1s linear infinite;
  background-size: 400%;
  background-image: linear-gradient(
    to right,
    var(--skeleton-1) 0%,
    var(--skeleton-1) 30%,
    var(--skeleton-2) 45%,
    var(--skeleton-2) 50%,
    var(--skeleton-1) 60%,
    var(--skeleton-1) 100%
  );
}
.skele-title {
  width: 500px;
  height: 46px;
  margin-bottom: 1rem;
}
.skele-subtitle {
  width: 300px;
  height: 26px;
  margin-bottom: 1rem;
}
.skele-slug {
  width: 260px;
  height: 16px;
  margin-bottom: 1rem;
}
.skele-keywords {
  width: 500px;
  height: 86px;
  margin: 3rem 0;
}
.skele-icon {
  width: 23px;
  height: 23px;
  border-radius: 30px;
}
.skele-button {
  width: 82px;
  height: 35px;
  border-radius: 30px;
}
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
  height: 450px;
  width: 450px;

  img {
    width: 100%;
    border-radius: 10px;
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
    width: 400px;
    height: 400px;
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
  .img-wrapper {
    width: 300px;
    height: 300px;
  }
}
@media (max-width: 350px) {
  h1 {
    font-size: 28px;
  }
}
@media (max-width: 1200px) {
  .skele-title {
    width: 400px;
    height: 48px;
    margin-bottom: 1rem;
  }
  .skele-subtitle {
    width: 200px;
    height: 16px;
    margin-bottom: 1rem;
  }
  .skele-slug {
    width: 100px;
    height: 10px;
    margin-bottom: 1rem;
  }
  .skele-keywords {
    width: 300px;
    height: 76px;
    margin: 2rem 0;
  }
}
@media (max-width: 800px) {
  .skele-title {
    width: 300px;
    height: 36px;
    margin-bottom: 1rem;
  }
  .skele-subtitle {
    width: 200px;
    height: 16px;
    margin-bottom: 1rem;
  }
  .skele-slug {
    width: 160px;
    height: 10px;
    margin-bottom: 1rem;
  }
  .skele-keywords {
    width: 300px;
    height: 76px;
    margin: 2rem 0;
  }
}
</style>
