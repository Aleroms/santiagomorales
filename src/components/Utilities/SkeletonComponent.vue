<template>
  <div
    class="skeleton"
    :style="{
      maxWidth: width ? `${props.width}px` : '100px',
      height: height ? `${height}px` : '30px',
      borderRadius: borderRadius ? `${borderRadius}` : '3px',
      marginBottom: mb ? `${mb}rem` : '1rem'
    }"
    aria-hidden="true"
    aria-busy="true"
  ></div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number
  },
  height: { type: Number },
  borderRadius: { type: Number },
  mb: { type: Number }
})
</script>

<style lang="scss" scoped>
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
</style>
