<script setup>
import HomeBanner from '../components/banners/HomeBanner.vue'
import { ref, onBeforeMount } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
const homePage = ref({})
const isDataReady = ref(false)

onBeforeMount(async () => {
  try {
    homePage.value = await getDocument('pageContent', 'homePage')
    console.log(homePage.value)
  } catch (error) {
    console.log(error)
  } finally {
    isDataReady.value = true
  }
})
</script>

<template>
  <div id="home-page">
    <HomeBanner
      v-if="isDataReady"
      :data="{
        avatar: homePage.avatar,
        keywords: homePage.keywords,
        resume: homePage.resume,
        slug: homePage.slug,
        subtitle: homePage.subtitle,
        title: homePage.title
      }"
    />
  </div>
</template>
