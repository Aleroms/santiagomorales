<template>
  <div class="home">
    <BannerTemplate :image="data.avatar">

      <template #primary>
        <p>home banner content</p>
      </template>
      <template #secondary>
        <p>secondary content</p>
      </template>
    </BannerTemplate>
  </div>
</template>

<script setup>
import BannerTemplate from '../Utilities/templates/BannerTemplate.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
console.log(props.data)
</script>

<style lang="scss" scoped></style>
