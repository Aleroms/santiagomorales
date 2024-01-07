<template>
  <div class="project-detail-banner">
    <BannerTemplate class="test">
      <template #card>
        <div class="img-wrapper">
          <picture>
            <source :srcset="data.image.url" type="image/webp" />
            <img :src="data.fallback.url" :alt="data.fallback.name" loading="lazy" />
          </picture>
        </div>
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
        <div class="links">
          <h3>
            View Live Site
            <a :href="data.liveSite" target="_blank">
              <font-awesome-icon
                class="icon"
                icon="fa-solid fa-arrow-up-right-from-square"
                size="sm"
                color="#42b983"
            /></a>
          </h3>
          <h3 v-if="!data.isPrivate">
            View Source Code on <a :href="data.githubLink" class="github-link">Github</a>.
          </h3>
          <h3 class="subtitle" v-else>
            <font-awesome-icon icon="fa-solid fa-lock" color="#006837" size="sm" /> This Repository
            is Private . . .
          </h3>
        </div>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import BannerTemplate from '@/components/Utilities/templates/BannerTemplate.vue'
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
.links{
  margin-top: 2rem;
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

.image {
  margin-left: 1rem;
  border: 1px solid var(--divider-dark-1);
  border-radius: 15px;
}
.test {
  align-items: center;
}
.github-link {
  color: var(--primary);
}
.text {
  max-width: 500px;
  line-height: 1.7rem;
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
.date {
  margin: 1rem 0;
}

@media (max-width: 1026px) {
  .img-wrapper {
    max-width: 400px;
    max-height: 400px;
  }
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
