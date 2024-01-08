<template>
  <div class="project-display-wrapper" v-if="windowWidth > 400">
    <div class="project-display" v-if="!projectStore.isSwap">
      <!-- displays all or preview items  -->
      <div class="item" v-for="proj in props.data" :key="proj.id">
        <RouterLink :to="`/projects/${proj.id}`" :aria-label="proj.id" />
        <div class="item-img">
          <div class="img-wrapper">
            <picture>
              <source :srcset="proj.thumbnail.url" type="image/webp" />
              <img
                width="375"
                height="200"
                :src="proj.fallback.url"
                :alt="proj.fallback.name"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <NuxtHoverEffect />
      </div>
      <!-- if preview is enabled -->
      <div class="item" v-if="projectStore.isPreview">
        <div class="preview" :class="{ dark: !themeStore.isDark, light: themeStore.isDark }">
          <routerLink to="/projects" class="link">view more projects</routerLink>
        </div>
        <NuxtHoverEffect />
      </div>
    </div>
  </div>
  <div class="project-display-wrapper" v-else>
    <HorizontalScrollTemplate :scrollWidth="95">
      <template #horizontal-item>
        <div class="item scroll-item" v-for="proj in props.data" :key="proj.id">
          <RouterLink :to="`/projects/${proj.id}`" :aria-label="proj.id" />
          <div class="item-img">
            <div class="img-wrapper">
              <picture>
                <source :srcset="proj.thumbnail.url" type="image/webp" />
                <img
                  width="375"
                  height="200"
                  :src="proj.fallback.url"
                  :alt="proj.fallback.name"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          <!-- <NuxtHoverEffect /> -->
        </div>
        <!-- if preview is enabled -->
        <div class="item scroll-item" v-if="projectStore.isPreview">
          <div class="preview" :class="{ dark: !themeStore.isDark, light: themeStore.isDark }">
            <routerLink to="/projects" class="link">view more projects</routerLink>
          </div>
          <!-- <NuxtHoverEffect /> -->
        </div>
      </template>
    </HorizontalScrollTemplate>
  </div>
</template>

<script setup>
import NuxtHoverEffect from '@/components/Utilities/NuxtHoverEffect.vue'
import HorizontalScrollTemplate from '@/components/Utilities/templates/HorizontalScrollTemplate.vue'
import { useProjectStore } from '@/stores/projects'
import { useThemeStore } from '@/stores/theme.js'
import { useWindowWidth } from '@/composables/windowWidth.js'

const themeStore = useThemeStore()
const projectStore = useProjectStore()
const { windowWidth } = useWindowWidth()
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.item-2 {
  width: 200px;
  margin-right: 1rem;
}
.dark {
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%),
    radial-gradient(at top center, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 120%) #989898;
}
.light {
  background: radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%);
}
.preview {
  min-width: 375px;
  min-height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    a {
      transform: scale(1.2);
      color: var(--text-dark-3);
    }
  }
  a {
    font-size: 45px;
    text-transform: capitalize;
    color: var(--text-dark-2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: -2px 2px rgba(0, 0, 0, 0.172);
  }
}
.project-display {
  max-width: 1200px;
  min-height: 420px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.item {
  border: 1px solid var(--divider-dark-1);
  border-radius: 15px;

  position: relative;
  z-index: 0;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .item-img {
    overflow: hidden;
    border-radius: 15px;

    transition: filter 0.3s ease;
  }

  .img-wrapper {
    width: 375px;
    height: 200px;
    transition: transform 0.3s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover {
    .img-wrapper {
      transform: scale(1.2);
    }
  }
  &:active {
    .img-wrapper {
      filter: brightness(0.8);
    }
  }
}
@media (max-width: 440px) {
  .item {
    .img-wrapper {
      width: 300px;
      height: 200px;
    }
  }
  .preview {
    width: 300px !important;
    height: 200px !important;
    min-width: 200px;
  }
}
</style>
