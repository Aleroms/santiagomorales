<template>
  <div class="about">
    <AboutBanner
      v-if="isReady"
      :data="{ image: aboutPage.image, title: aboutPage.title, content: aboutPage.content }"
    />
    <section class="container">
      <SectionHeader title="Education" id="education" />
      <section class="container-2" id="edu" v-if="!educationStore.isLoading" v-motion-fade-visible>
        <EducationList :data="edu" v-for="edu in education" :key="edu.id" />
      </section>
      <SectionHeader title="My Values" id="my_values" />
      <MyValuesCard v-if="isReady" :data="aboutPage.values" v-motion-fade-visible/>

      <SectionHeader title="Work Experience" id="work-exp" v-motion-fade-visible/>
      <section class="container-2" id="work" v-if="isReady" v-motion-fade-visible>
        <WorkExperienceList :data="work" v-for="work in workExp" :key="work.id" />
      </section>
      
      <SectionHeader title="How I Learn" id="how_i_learn" />
      <article v-motion-fade-visible>
        <p class="text-block">{{ aboutPage.how_i_learn }}</p>
      </article>
      <SectionHeader title="What I am Currently Learning" id="currently-learning" />
      <LearningComponent v-motion-fade-visible/>
    </section>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, defineAsyncComponent } from 'vue'
import { getDocument, getDocuments } from '@/plugins/firebase.js'
import { useEducationStore } from '@/stores/education.js'
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

const aboutPage = ref({})
const education = ref([])
const workExp = ref([])
const educationStore = useEducationStore()
educationStore.setAboutPage()
const isReady = ref(false)

onBeforeMount(async () => {
  try {
    aboutPage.value = await getDocument('pageContent', 'aboutPage')
    education.value = await getDocuments('education')
    workExp.value = await getDocuments('workExperience')
  } catch (error) {
    console.log(error)
  } finally {
    isReady.value = true
  }
})
</script>

<style lang="scss"></style>
