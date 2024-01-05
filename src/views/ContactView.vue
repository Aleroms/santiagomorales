<template>
  <div class="contact-page container">
    <ContactMeCard :contact="contact.contact" v-if="isDataReady" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
const ContactMeCard = defineAsyncComponent(() => import('@/components/card/ContactMeCard.vue'))
const contact = ref('')
const isDataReady = ref(false)
onBeforeMount(async () => {
  try {
    contact.value = await getDocument('pageContent', 'homePage')
  } catch (error) {
    console.log(error)
  } finally {
    isDataReady.value = true
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
