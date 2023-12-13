<template>
  <div class="manage-display">
    <SectionHeader :id="manageStore.activeId" :title="manageStore.activeTitle" />
    <h4
      @click="manageStore.goBack"
      v-show="manageStore.navId !== manageStore.activeId && !manageStore.isDelete"
      class="go-back"
    >
      go back
    </h4>
    <component :is="manageStore.setComponent" />
  </div>
</template>

<script>
//no script setup :,( bcz stupid eslint </3
import { useManageStore } from '@/stores/manage'
import SectionHeader from '@/components//Utilities/SectionHeader.vue'

//Manage
import ManageList from './ManageList.vue'
import ManageDelete from './ManageDelete.vue'
import ManageAlert from './ManageAlert.vue'

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
.go-back {
  margin: 1rem 0;
  color: var(--primary);
}
</style>
