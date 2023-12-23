<template>
  <article
    class="card"
    ref="target"
    :style="{
      transform: cardTransformation,
      transition: 'transform 0.25s ease-out'
    }"
  >
    <slot name="title">
      <p>no content provided</p>
    </slot>
    <hr />
    <slot name="content">
      <p>no content provided</p>
    </slot>
  </article>
</template>

<script setup>
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { computed } from 'vue'
const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransformation = computed(() => {
  const MAX_ROTATION = 12
  const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
  const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
</script>

<style lang="scss" scoped>
.card {
  max-width: 300px;
  max-height: 225px;
  background-color: var(--secondary-soft);
  padding: 0.625rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  hr {
    margin: 1rem 0;
    height: 1px;
    border: none;
    background-color: var(--divider-dark-1);
  }
}
@media (max-width: 375px) {
  .card {
    max-height: fit-content;
  }
}
</style>
