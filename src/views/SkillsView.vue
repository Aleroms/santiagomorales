<template>
  <div class="skills container">
    <SkillsCategoryDisplay />
    <SectionHeader title="How I Approach A Problem" id="approaching-problems" />
    <p class="text-block">{{ skillsPage.approach_problem }}</p>
    <SectionHeader title="How I Program" id="how_i_program" />
    <p class="text-block">{{ skillsPage.how_i_program }}</p>
    <SectionHeader title="My Certificates" id="certificates" />
    <div v-if="isReady">
      <CertificateList
        :data="cert"
        v-for="cert in certificates"
        :key="cert.id"
        class="certificate"
        :dontShowIcon="true"
      />
    </div>
  </div>
</template>

<script setup>
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
import SkillsCategoryDisplay from '@/components/SkillsCategoryDisplay.vue'
import CertificateList from '@/components/lists/CertificateList.vue'
import { getDocuments, getDocument } from '@/plugins/firebase.js'
import { ref, onBeforeMount } from 'vue'
const skillsPage = ref({})
const certificates = ref({})
const isReady = ref(false)

onBeforeMount(async () => {
  try {
    skillsPage.value = await getDocument('pageContent', 'skillsPage')
    certificates.value = await getDocuments('certificates')
  } catch (error) {
    console.log(error)
  } finally {
    isReady.value = true
  }
})
</script>

<style lang="scss" scoped>
.certificate {
  margin: 3rem 0;
}
</style>
