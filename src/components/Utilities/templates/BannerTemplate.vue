<template>
  <div class="banner-template">
    <div class="img-wrapper">
      <img :src="props.image.url" :alt="image.name" />
    </div>
    <div class="info">
      <div class="primary">
        <slot name="primary">
          <p>no heading provided</p>
        </slot>
      </div>
      <div class="secondary">
        <slot name="secondary">
          <p>no content provided</p>
        </slot>
      </div>
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
.info{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.primary{
  max-width: 500px;
}

.secondary {
  max-width: 560px;
}
.banner-template {
  display: flex;
  flex-direction: row-reverse;
  margin: 3rem;
  justify-content: space-evenly;
}
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
