<template>
  <div class="about">
    <AboutBanner
      v-if="isReady"
      :data="{ image: aboutPage.image, title: aboutPage.title, content: aboutPage.content }"
    />
    <section class="container">
      <SectionHeader title="My Values" id="my_values" />
      <MyValuesCard v-if="isReady" :data="aboutPage.values"/>
      <SectionHeader title="How I Learn" id="how_i_learn" />
      <article>
        <p>{{ aboutPage.how_i_learn }}</p>
      </article>
      <SectionHeader title="How I Develop" id="how_i_develop" />
      <article>
        <p>{{ aboutPage.how_i_develop }}</p>
      </article>
      
    </section>
  </div>
</template>

<script setup>
import AboutBanner from '@/components/banners/AboutBanner.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import { ref, onBeforeMount } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
import MyValuesCard from '../components/card/MyValuesCard.vue'
const aboutPage = ref({})
const isReady = ref(false)
onBeforeMount(async () => {
  try {
    aboutPage.value = await getDocument('pageContent', 'aboutPage')
  } catch (error) {
    console.log(error)
  } finally {
    isReady.value = true
  }
})
</script>

<style lang="scss"></style>
