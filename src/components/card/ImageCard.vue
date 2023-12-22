<template>
  <div
    class="img-wrapper"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out'
    }"
  >
    <img :src="props.image.url" :alt="image.name" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})

const cardTransform = computed(() => {
  const MAX_ROTATION = 15

  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<style lang="scss" scoped>
.img-wrapper {
  max-height: 450px;
  max-width: 450px;

  img {
    width: 100%;
    // padding: 0.625rem;
    box-sizing: border-box;
  }
}
@media (max-width: 1026px) {
  .img-wrapper {
    max-width: 400px;
    max-height: 400px;
  }
}
</style>
