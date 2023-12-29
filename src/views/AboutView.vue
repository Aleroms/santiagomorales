<template>
  <div class="about">
    <AboutBanner
      v-if="isReady"
      :data="{ image: aboutPage.image, title: aboutPage.title, content: aboutPage.content }"
    />
    <section class="container">
      <SectionHeader title="Education" id="education" />
      <section class="container2" id="edu" v-if="!educationStore.isLoading">
        <EducationList :data="edu" v-for="edu in education" :key="edu.id" />
      </section>
      <SectionHeader title="My Values" id="my_values" />
      <MyValuesCard v-if="isReady" :data="aboutPage.values" />
      <SectionHeader title="Work Experience" id="work-exp" />
      <section class="container2" id="work" v-if="isReady">
        <WorkExperienceList :data="work" v-for="work in workExp" :key="work.id" />
      </section>
      <SectionHeader title="How I Learn" id="how_i_learn" />
      <article>
        <p class="text-block">{{ aboutPage.how_i_learn }}</p>
      </article>
      <SectionHeader title="How I Develop" id="how_i_develop" />
      <article>
        <p class="text-block">{{ aboutPage.how_i_develop }}</p>
      </article>
      <SectionHeader title="What I am Currently Learning" id="currently-learning" />
    </section>
  </div>
</template>

<script setup>
import AboutBanner from '@/components/banners/AboutBanner.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import { ref, onBeforeMount } from 'vue'
import { getDocument, getDocuments } from '@/plugins/firebase.js'
import MyValuesCard from '@/components/card/MyValuesCard.vue'
import EducationList from '@/components/lists/EducationList.vue'
import WorkExperienceList from '@/components/lists/WorkExperienceList.vue'
import { useEducationStore } from '@/stores/education.js'
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
    console.log(education.value)
  } catch (error) {
    console.log(error)
  } finally {
    isReady.value = true
  }
})
</script>

<style lang="scss">
.container2 {
  display: flex;
  justify-content: center;
  margin: 10px auto;
}
</style>
