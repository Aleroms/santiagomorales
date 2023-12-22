<template>
  <div class="banner-template">
    <!-- <div class="img-wrapper">
      <img :src="props.image.url" :alt="image.name" />
    </div> -->
    <slot name="card">
      <p>no card provided</p>
    </slot>
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
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.primary {
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
  gap: 10px;
}


@media (max-width: 845px) {
  .banner-template {
    flex-direction: column;
    align-items: center;
  }
}
</style>
