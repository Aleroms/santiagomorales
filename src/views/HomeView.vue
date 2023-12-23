<script setup>
import HomeBanner from '../components/banners/HomeBanner.vue'
import { ref, onBeforeMount } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
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
    <section class="about-me container">
      <SectionHeader title="About Me" id="about-me" />
    </section>
  </div>
</template>

<style>
.container {
  max-width: 1280px;
  margin: 1rem auto;
  padding: 0 1.625rem;
}
</style>
