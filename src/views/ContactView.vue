<template>
  <div class="contact-page container">
    <ContactMeCard :contact="homeStore.data.contact" v-if="homeStore.isReady" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, onBeforeMount } from 'vue'
import { useHomeStore } from '@/stores/home.js'
const ContactMeCard = defineAsyncComponent(() => import('@/components/card/ContactMeCard.vue'))
const homeStore = useHomeStore()
onBeforeMount(async () => {
  try {
    homeStore.initialize()
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.contact-page {
  margin: 10rem auto;
}
@media (max-width: 900px) {
  .contact-page {
    margin: 2rem 1rem;
  }
}
</style>
