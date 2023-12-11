<template>
  <div class="manage-display">
    <SectionHeader :id="manageStore.activeId" :title="manageStore.activeTitle" />
    <component :is="manageStore.setComponent" />
  </div>
</template>

<script>
//no script setup :,(
import { useManageStore } from '@/stores/manage'
import SectionHeader from '@/components//Utilities/SectionHeader.vue'
import ManageList from './ManageList.vue'

//Forms
import AboutForm from '@/components/Utilities/Forms/manageForms/AboutForm.vue'
import ActiveLearningForm from '@/components/Utilities/Forms/manageForms/ActiveLearningForm.vue'
import CertificateForm from '@/components/Utilities/Forms/manageForms/CertificateForm.vue'
import EducationForm from '@/components/Utilities/Forms/manageForms/EducationForm.vue'
import HomeForm from '@/components/Utilities/Forms/manageForms/HomeForm.vue'
import ProjectsDataForm from '@/components/Utilities/Forms/manageForms/ProjectsDataForm.vue'
import ProjectsForm from '@/components/Utilities/Forms/manageForms/ProjectsForm.vue'
import SkillsCategoryForm from '@/components/Utilities/Forms/manageForms/SkillsCategoryForm.vue'
import SkillsDataForm from '@/components/Utilities/Forms/manageForms/SkillsDataForm.vue'
import SkillsForm from '@/components/Utilities/Forms/manageForms/SkillsForm.vue'
import ToolsForm from '@/components/Utilities/Forms/manageForms/ToolsForm.vue'
import WorkExpForm from '@/components/Utilities/Forms/manageForms/WorkExpForm.vue'

//Lists
import ActiveLearningList from '@/components/lists/ActiveLearningList.vue'
import CertificateList from '@/components/lists/CertificateList.vue'
import EducationList from '@/components/lists/EducationList.vue'
import ProjectsDataList from '@/components/lists/ProjectsDataList.vue'
import SkillsCategoryList from '@/components/lists/SkillsCategoryList.vue'
import SkillsDataList from '@/components/lists/SkillsDataList.vue'
import ToolsList from '@/components/lists/ToolsList.vue'
import WorkExperienceList from '@/components/lists/WorkExperienceList.vue'
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
    ActiveLearningList,
    CertificateList,
    EducationList,
    ProjectsDataList,
    SkillsCategoryList,
    SkillsDataList,
    ToolsList,
    WorkExperienceList,
    ManageList
  },

  setup() {
    const manageStore = useManageStore()

    return { manageStore }
  }
}
</script>

<style lang="scss" scoped></style>
