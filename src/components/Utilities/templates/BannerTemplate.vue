<template>
  <div class="banner-template">
    <div class="img-wrapper">
      <img :src="props.image.url" :alt="image.name" />
    </div>
    <div class="info">
      <slot name="primary">
        <p>no heading provided</p>
      </slot>
      <slot name="secondary">
        <p>no content provided</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
console.log(props)
</script>

<style lang="scss" scoped>
.img-wrapper {
  max-height: 500px;
  max-width: 500px;

  img {
    width: 100%;
    // padding: 0.625rem;
    box-sizing: border-box;
  }
}
</style>
