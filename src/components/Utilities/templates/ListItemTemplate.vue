<template>
  <div class="item-wrapper">
    <div
      class="img-wrapper"
      v-if="image"
      :class="{ manage: eduStore.isManage, about: !eduStore.isManage }"
    >
      <!-- <img :src="props.image.url" :alt="image.name" loading="lazy"/> -->
      <picture>
        <source :srcset="image.url" type="image/webp" />
        <img :src="props.fallback.url" :alt="fallback.name" loading="lazy" />
      </picture>
    </div>
    <div class="info-wrapper">
      <slot name="info">
        <p>no info provided</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { useEducationStore } from '@/stores/education'
const eduStore = useEducationStore()
const props = defineProps({
  image: {
    type: Object
  },
  fallback: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 25px;

  .title {
    font-weight: 900;
    text-transform: capitalize;
  }
}
.manage {
  max-height: 50px;
  max-width: 50px;
}
.about {
  max-height: 100px;
  max-width: 100px;
}
.img-wrapper {
  img {
    width: 100%;
    // padding: 0.625rem;
    box-sizing: border-box;
  }
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .subtitle {
    color: var(--text-light-2);
  }
}
</style>
