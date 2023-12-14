<template>
  <div class="item-wrapper">
    <div class="img-wrapper">
      <img :src="props.image.url" :alt="image.name" />
    </div>
    <div class="info-wrapper">
      <slot name="info">
        <p>no info provided</p>
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
.img-wrapper {
  max-height: 50px;
  max-width: 50px;
  

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
