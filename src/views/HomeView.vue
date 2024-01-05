<script setup>
//components
import HomeBanner from '@/components/banners/HomeBanner.vue'
import AboutMeCard from '@/components/card/AboutMeCard.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import SkillsTabView from '@/components/tabview/SkillsTabView.vue'
import GithubStats from '../components/GithubStats.vue'
import ProjectsPreview from '@/components/projects/ProjectsPreview.vue'
import CenteredMessage from '@/components/Utilities/messages/CenteredMessage.vue'
import CenteredLink from '@/components/Utilities/messages/CenteredLink.vue'
//utils
import { onBeforeMount } from 'vue'
import { useProjectStore } from '@/stores/projects.js'
import { useHomeStore } from '@/stores/home.js'
import ContactMeCard from '@/components/card/ContactMeCard.vue'

const projectStore = useProjectStore()
const homeStore = useHomeStore()


onBeforeMount(async () => {
  try {
    homeStore.initialize()

    //projects set to preview by default
    projectStore.initialize()
    projectStore.showPreview()
  } catch (error) {
    console.log(error)
  }

})
</script>

<template>
  <div id="home-page">
    <HomeBanner
      :data="{
        keywords: homeStore.data.keywords,
        resume: homeStore.data.resume,
        slug: homeStore.data.slug,
        subtitle: homeStore.data.subtitle,
        title: homeStore.data.title
      }"
      :isReady="homeStore.isReady"
    />
    <section class="about-me container">
      <SectionHeader title="About Me" id="about-me" />
      <AboutMeCard :data="homeStore.data.introduction" v-if="homeStore.isReady" class="about-cards" />
      <CenteredLink :nav="{ id: '/about', text: 'about me' }" />
    </section>
    <section class="skills container">
      <SectionHeader title="My Skills" id="skills" />
      <CenteredMessage :text="homeStore.data.skills" v-if="homeStore.isReady" />
      <SkillsTabView />
      <GithubStats />
      <CenteredLink :nav="{ id: '/skills', text: 'skills' }" />
    </section>
    <section class="projects container">
      <SectionHeader title="My Projects" id="Projects" />
      <CenteredMessage :text="homeStore.data.projects" v-if="homeStore.isReady" />

      <ProjectsPreview />
      <CenteredLink :nav="{ id: '/projects', text: 'projects' }" />
    </section>
    <section class="contact container">
      <SectionHeader title="Contact Me" id="Contact" />
      <ContactMeCard :contact="homeStore.data.contact" v-if="homeStore.isReady" />
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
</style>
