<script setup>
//components
const HomeBanner = defineAsyncComponent(() => import('@/components/banners/HomeBanner.vue'))
const AboutMeCard = defineAsyncComponent(() => import('@/components/card/AboutMeCard.vue'))
const SectionHeader = defineAsyncComponent(() => import('@/components/Utilities/SectionHeader.vue'))
const SkillsTabView = defineAsyncComponent(() => import('@/components/tabview/SkillsTabView.vue'))
const ProjectsPreview = defineAsyncComponent(
  () => import('@/components/projects/ProjectsPreview.vue')
)
const CenteredMessage = defineAsyncComponent(
  () => import('@/components/Utilities/messages/CenteredMessage.vue')
)
const CenteredLink = defineAsyncComponent(
  () => import('@/components/Utilities/messages/CenteredLink.vue')
)

//utils
import { defineAsyncComponent, onBeforeMount } from 'vue'
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
      <SectionHeader title="About Me" id="about-me"/>
      <AboutMeCard
        :data="homeStore.data.introduction"
        v-if="homeStore.isReady"
        class="about-cards"
      />
      <CenteredLink :nav="{ id: '/about', text: 'about me' }" />
    </section>
    <section class="skills container">
      <SectionHeader title="My Skills" id="skills" />
      <CenteredMessage :text="homeStore.data.skills" v-if="homeStore.isReady" />
      <SkillsTabView />
      <CenteredLink :nav="{ id: '/skills', text: 'skills' }" />
    </section>
    <section class="projects container">
      <SectionHeader title="My Projects" id="Projects" />
      <CenteredMessage :text="homeStore.data.projects" v-if="homeStore.isReady" />

      <ProjectsPreview v-motion-fade-visible/>
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
@media(max-width: 720px){
  .about-cards {
  margin-top: 4rem;
}
}
</style>
