<template>
  <div class="about">
    <AboutBanner
      v-if="aboutStore.isReady"
      :data="{
        image: aboutStore.data.image,
        title: aboutStore.data.title,
        content: aboutStore.data.content
      }"
      v-motion-pop
    />
    <section class="container">
      <!-- education  -->
      <SectionHeader title="Education" id="education" />
      <section class="container-2" id="edu" v-if="!educationStore.isLoading" v-motion-fade>
        <EducationList :data="edu" v-for="edu in educationStore.education" :key="edu.id" />
      </section>
      <!-- my values  -->
      <SectionHeader title="My Values" id="my_values" />
      <MyValuesCard
        v-if="aboutStore.isReady"
        :data="aboutStore.data.values"
        v-motion-fade-visible
      />
      <!-- work experience  -->
      <SectionHeader title="Work Experience" id="work-exp" v-motion-fade-visible />
      <section class="container-2" id="work" v-if="workExpStore.isReady" v-motion-fade-visible>
        <WorkExperienceList :data="work" v-for="work in workExpStore.data" :key="work.id" />
      </section>
      <!-- how i learn  -->
      <SectionHeader title="How I Learn" id="how_i_learn" />
      <article v-motion-fade-visible>
        <p class="text-block">{{ aboutStore.data.how_i_learn }}</p>
      </article>
      <!-- what i am curr learning  -->
      <SectionHeader title="What I am Currently Learning" id="currently-learning" />
      <LearningComponent v-motion-fade-visible />
      <CenteredLink :nav="{ id: 'projects', text: 'projects' }" />
    </section>
  </div>
</template>

<script setup>
import { onBeforeMount, defineAsyncComponent } from 'vue'
import { useEducationStore } from '@/stores/education.js'
import { useAboutStore } from '@/stores/about'
import { useWorkExpStore } from '@/stores/workExperience.js'
const AboutBanner = defineAsyncComponent(() => import('@/components/banners/AboutBanner.vue'))
const SectionHeader = defineAsyncComponent(() => import('@/components/Utilities/SectionHeader.vue'))
const MyValuesCard = defineAsyncComponent(() => import('@/components/card/MyValuesCard.vue'))
const EducationList = defineAsyncComponent(() => import('@/components/lists/EducationList.vue'))
const WorkExperienceList = defineAsyncComponent(
  () => import('@/components/lists/WorkExperienceList.vue')
)
const LearningComponent = defineAsyncComponent(
  () => import('@/components/learning/LearningComponent.vue')
)

import CenteredLink from '@/components/Utilities/messages/CenteredLink.vue'

const educationStore = useEducationStore()
const aboutStore = useAboutStore()
const workExpStore = useWorkExpStore()
educationStore.setAboutPage()


onBeforeMount(async () => {
  try {
    aboutStore.initialize()
    educationStore.initialize()
    workExpStore.initialize()
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss"></style>
