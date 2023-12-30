<template>
  <div class="project-display-wrapper">
    <div class="project-display" v-if="!projectStore.isSwap">
      <!-- displays all or preview items  -->
      <div class="item" v-for="proj in props.data" :key="proj.id">
        <RouterLink :to="`/projects/${proj.id}`" />
        <div class="item-img">
          <div class="img-wrapper">
            <div class="bg-img" :style="{ backgroundImage: `url(${proj.image.url})` }"></div>
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
</template>

<script setup>
import NuxtHoverEffect from '@/components/Utilities/NuxtHoverEffect.vue'
import { useProjectStore } from '@/stores/projects'
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()
const projectStore = useProjectStore()
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
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

    .bg-img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: contain;
    }
  }

  &:hover {
    .img-wrapper {
      transform: scale(1.2);
    }
  }
}
@media (max-width: 440px) {
  .item{
    .img-wrapper{
      width: 300px;
      height: 200px;
    }
  }
}
</style>