<template>
  <div
    ref="nuxtTarget"
    class="nuxtHover"
    :style="{
      transition: 'all 0.25s ease-out',
      background: nuxtHoverEffect
    }"
  ></div>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtHoverEffect } from '@/composables/nuxtHoverEffect.js'

const nuxtTarget = ref(null)
const { nuxtHoverEffect } = useNuxtHoverEffect(nuxtTarget)
</script>

<style lang="scss" scoped>
.nuxtHover {
  position: absolute;
  top: -2px;
  left: -2px;
  padding: 0.325rem;
  width: 98.3%;
  height: 97%;
  border-radius: 15px;
  z-index: -1;
}
</style>
