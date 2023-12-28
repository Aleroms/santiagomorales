<script setup>
//components
import HomeBanner from '@/components/banners/HomeBanner.vue'
import AboutMeCard from '@/components/card/AboutMeCard.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import SkillsTabView from '@/components/tabview/SkillsTabView.vue'
import GithubStats from '../components/GithubStats.vue'
import ButtonLink from '@/components/Utilities/buttons/ButtonLinks.vue'
import ProjectsPreview from '@/components/projects/ProjectsPreview.vue'
//utils
import { ref, onBeforeMount } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
import { useProjectStore } from '@/stores/projects.js'
import ContactMeCard from '../components/card/ContactMeCard.vue'

const projectStore = useProjectStore()
const homePage = ref({})
const isDataReady = ref(false)

onBeforeMount(async () => {
  try {
    homePage.value = await getDocument('pageContent', 'homePage')

    //projects set to preview by default
    projectStore.initialize()
    projectStore.showPreview()
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
      <AboutMeCard :data="homePage.introduction" v-if="isDataReady" class="about-cards" />
      <ButtonLink type="filled" to="/about" text="about me" />
    </section>
    <section class="skills container">
      <SectionHeader title="My Skills" id="skills" />
      <div class="skills-tagline">
        <p>{{ homePage.skills }}</p>
      </div>
      <SkillsTabView />
      <GithubStats />
      <ButtonLink type="filled" to="/skills" text="view my skills" />
    </section>
    <section class="projects container">
      <SectionHeader title="My Projects" id="Projects" />
      <p>{{ homePage.projects }}</p>
      <ProjectsPreview />
    </section>
    <section class="contact container">
      <SectionHeader title="Contact Me" id="Contact" />
      <ContactMeCard :contact="homePage.contact" />
    </section>
  </div>
</template>

<style>
.about-cards {
  margin-top: 8rem;
}
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
