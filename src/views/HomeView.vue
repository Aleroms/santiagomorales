<script setup>
import HomeBanner from '@/components/banners/HomeBanner.vue'
import AboutMeCard from '@/components/card/AboutMeCard.vue'
import { ref, onBeforeMount } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import SkillsTabView from '@/components/tabview/SkillsTabView.vue'
import GithubStats from '../components/GithubStats.vue'
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
      <AboutMeCard :data="homePage.introduction" v-if="isDataReady" />
    </section>
    <section class="skills container">
      <SectionHeader title="My Skills" id="skills" />
      <div class="skills-tagline">
        <p>{{ homePage.skills }}</p>
      </div>
      <SkillsTabView />
      <GithubStats />
    </section>
  </div>
</template>

<style>
.container {
  max-width: 1280px;
  margin: 1rem auto;
  padding: 0 1.625rem;
}
.skills-tagline {
  text-align: center;
  max-width: 550px;
  margin: 4rem auto;
  line-height: 3rem;
  font-size: 20px;
}
</style>
