<template>
  <div class="card-wrapper">
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCardTransformation } from '@/composables/cardTransformation'
const target = ref(null)
const { cardTransformation } = useCardTransformation(target)
</script>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
}
.card {
  max-width: 300px;
  min-height: 225px;
  background-color: var(--secondary-soft);
  padding: 0.625rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 1;

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
