<template>
  <div class="img-wrapper">
    <img :src="props.image.url" :alt="image.name" />
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true
  }
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
