<template>
  <div class="manage-list">
    <!-- add entry -->
    <div class="add-more" @click="manageStore.addMore">
      <font-awesome-icon :icon="['fas', 'plus']" size="2xl" color="#ccc" class="icon" />
    </div>
    <!-- delete and edit entry  -->
    <div class="list-wrapper" v-for="doc in manageStore.listDocuments" :key="doc.id">
      <component :is="manageStore.activeId" :data="doc" v-if="!manageStore.isLoading"/>
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
</template>

<script>
import { useManageStore } from '@/stores/manage'

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
    ActiveLearningList,
    CertificateList,
    EducationList,
    ProjectsDataList,
    SkillsCategoryList,
    SkillsDataList,
    ToolsList,
    WorkExperienceList
  },
  setup() {
    const manageStore = useManageStore()
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
  margin: 1rem 0;

  .item {
    margin: 1rem 0;
  }

  .icons {
    display: flex;
  }
}
@media (max-width: 370px) {
  .list-wrapper {
    .icons {
      flex-direction: column;
    }
  }
}
</style>
