<template>
  <div class="manage-display">
    <SectionHeader :id="manageStore.activeId" :title="manageStore.activeTitle" />
    <div class="go-back-wrapper">
      <h4
        @click="manageStore.goBack"
        v-show="manageStore.navId !== manageStore.activeId && !manageStore.isDelete"
        class="go-back"
      >
        go back
      </h4>
    </div>

    <component :is="manageStore.setComponent" />
  </div>
</template>

<script>
//no script setup :,( bcz stupid eslint </3
import { useManageStore } from '@/stores/manage'
import { defineAsyncComponent } from 'vue'
const SectionHeader = defineAsyncComponent(() => import('@/components/Utilities/SectionHeader.vue'))

//Manage
const ManageList = defineAsyncComponent(() => import('./ManageList.vue'))
const ManageDelete = defineAsyncComponent(() => import('./ManageDelete.vue'))
const ManageAlert = defineAsyncComponent(() => import('./ManageAlert.vue'))

//Forms
const AboutForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/AboutForm.vue')
)
const ActiveLearningForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/ActiveLearningForm.vue')
)
const CertificateForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/CertificateForm.vue')
)
const EducationForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/EducationForm.vue')
)
const HomeForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/HomeForm.vue')
)
const ProjectsDataForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/ProjectsDataForm.vue')
)
const ProjectsForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/ProjectsForm.vue')
)
const SkillsCategoryForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/SkillsCategoryForm.vue')
)
const SkillsDataForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/SkillsDataForm.vue')
)
const SkillsForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/SkillsForm.vue')
)
const ToolsForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/ToolsForm.vue')
)
const WorkExpForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/WorkExpForm.vue')
)
const FrameworkForm = defineAsyncComponent(
  () => import('@/components/Utilities/Forms/manageForms/FrameworkForm.vue')
)

export default {
  components: {
    SectionHeader,
    AboutForm,
    ActiveLearningForm,
    CertificateForm,
    EducationForm,
    HomeForm,
    ProjectsDataForm,
    ProjectsForm,
    SkillsCategoryForm,
    SkillsDataForm,
    SkillsForm,
    ToolsForm,
    WorkExpForm,
    FrameworkForm,
    ManageList,
    ManageDelete,
    ManageAlert
  },

  setup() {
    const manageStore = useManageStore()
    return { manageStore }
  }
}
</script>

<style lang="scss" scoped>
.go-back-wrapper {
  display: flex;
}
.go-back {
  margin: 1rem 0;
  color: var(--primary);
  cursor: pointer;
}
</style>
