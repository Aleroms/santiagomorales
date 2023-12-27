<template>
  <div class="project-display-wrapper">
    <div class="project-display">
      <div class="item" v-for="proj in props.data" :key="proj.id">
        <div class="item-img">
          <div class="img-wrapper">
            <img :src="proj.image.url" :alt="proj.image.name" />
          </div>
        </div>

        <NuxtHoverEffect />
      </div>
    </div>
  </div>
</template>

<script setup>
import NuxtHoverEffect from '@/components/Utilities/NuxtHoverEffect.vue'
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.project-display {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.item {
  // overflow: hidden;
  border: 1px solid var(--divider-dark-1);
  border-radius: 15px;
  position: relative;
  z-index: 0;

  .item-img {
    overflow: hidden;
    border-radius: 15px;
  }

  .img-wrapper {
    max-width: 375px;
    height: 200px;
    transition: transform 0.3s ease;

    img {
      width: 100%;
    }
  }

  &:hover {
    .img-wrapper {
      transform: scale(1.1);
    }
  }
}
</style>
