<template>
  <div class="skills container">
    <SkillsCategoryDisplay v-motion-fade />
    <SectionHeader title="How I Approach A Problem" id="approaching-problems" />
    <p class="text-block" v-motion-fade>{{ skillStore.data.approach_problem }}</p>
    <SectionHeader title="How I Program" id="how_i_program" />
    <p
      class="text-block"
      v-for="item in skillStore.data.how_i_program"
      :key="item"
      v-motion-fade-visible
    >
      {{ item }}
    </p>
    <SectionHeader title="My Certificates" id="certificates" />
    <div v-if="certificateStore.isReady">
      <CertificateList
        :data="cert"
        v-for="cert in certificateStore.data"
        :key="cert.id"
        class="certificate"
        :dontShowIcon="true"
        v-motion-slide-visible-bottom
      />
    </div>
  </div>
</template>

<script setup>
const SectionHeader = defineAsyncComponent(() => import('@/components/Utilities/SectionHeader.vue'))
const SkillsCategoryDisplay = defineAsyncComponent(
  () => import('@/components/SkillsCategoryDisplay.vue')
)
const CertificateList = defineAsyncComponent(() => import('@/components/lists/CertificateList.vue'))
import { onBeforeMount, defineAsyncComponent } from 'vue'
import { useSkillsStore } from '@/stores/skills'
import { useCertificateStore } from '@/stores/certificates.js'

const skillStore = useSkillsStore()
const certificateStore = useCertificateStore()

onBeforeMount(async () => {
  try {
    skillStore.initialize()
    certificateStore.initialize()
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.certificate {
  margin: 3rem 0;
}
</style>
