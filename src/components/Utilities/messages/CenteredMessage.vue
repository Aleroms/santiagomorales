<template>
  <div class="tagline" v-motion-fade>
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.tagline {
  text-align: center;
  max-width:750px;
  margin: 4rem auto;
  line-height: 3rem;
  font-size: 20px;
}
</style>
