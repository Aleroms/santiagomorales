<template>
  <div class="manage-list">
    <!-- add entry -->
    <div class="add-more" @click="manageStore.addMore">
      <font-awesome-icon :icon="['fas', 'plus']" size="2xl" color="#ccc" class="icon" />
    </div>
    <!-- delete and edit entry  -->
    <p class="subtitle" v-if="manageStore.listDocuments.length === 0">
      currently no entries. Add new entry! 😉
    </p>
    <div v-else>
      <div class="list-wrapper" v-for="doc in manageStore.listDocuments" :key="doc.id">
        <component :is="manageStore.activeId" :data="doc" v-if="!manageStore.isLoading" />
        <div class="icons">
          <font-awesome-icon
            @click="manageStore.edit(doc.id)"
            :icon="['fas', 'pen']"
            size="lg"
            color="#ccc"
            class="icon"
          />
          <font-awesome-icon
            @click="manageStore.deleteItem(doc.id)"
            :icon="['fas', 'trash']"
            size="lg"
            color="#ccc"
            class="icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useManageStore } from '@/stores/manage'
import { useEducationStore } from '@/stores/education'
import { defineAsyncComponent } from 'vue'

//Lists
const ActiveLearningList = defineAsyncComponent(
  () => import('@/components/lists/ActiveLearningList.vue')
)
const CertificateList = defineAsyncComponent(() => import('@/components/lists/CertificateList.vue'))
const EducationList = defineAsyncComponent(() => import('@/components/lists/EducationList.vue'))
const ProjectsDataList = defineAsyncComponent(
  () => import('@/components/lists/ProjectsDataList.vue')
)
const SkillsCategoryList = defineAsyncComponent(
  () => import('@/components/lists/SkillsCategoryList.vue')
)
const SkillsDataList = defineAsyncComponent(() => import('@/components/lists/SkillsDataList.vue'))
const ToolsList = defineAsyncComponent(() => import('@/components/lists/ToolsList.vue'))
const WorkExperienceList = defineAsyncComponent(
  () => import('@/components/lists/WorkExperienceList.vue')
)
const FrameworkList = defineAsyncComponent(() => import('@/components/lists/FrameworkList.vue'))

export default {
  components: {
    ActiveLearningList,
    CertificateList,
    EducationList,
    ProjectsDataList,
    SkillsCategoryList,
    SkillsDataList,
    ToolsList,
    WorkExperienceList,
    FrameworkList
  },
  setup() {
    const manageStore = useManageStore()
    const eduStore = useEducationStore()
    eduStore.setManagePage()
    return { manageStore }
  }
}
</script>

<style lang="scss" scoped>
.add-more {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
  border-bottom: 1px solid var(--divider-dark-1);
}
.icon {
  cursor: pointer;
  padding: 0.625rem;
  margin: 0.625rem;
  // background-color: #333;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--text-dark-1);
  }
}

.list-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0.625rem 1.625rem;
  min-height: 60px;

  .item {
    margin: 1rem 0;
  }

  .icons {
    display: flex;
  }
}
.list {
  border-bottom: 1px solid var(--divider-dark-1);
}

@media (max-width: 420px) {
  .list-wrapper {
    .icons {
      flex-direction: column;
    }
  }
}
</style>
