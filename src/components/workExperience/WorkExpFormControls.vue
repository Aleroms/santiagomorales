<template>
  <div class="controls-wrapper">
    <div class="add-more" @click="addMore">
      <font-awesome-icon :icon="['fas', 'plus']" size="2xl" color="#ccc" class="icon" />
    </div>
    <div class="jb-list" v-if="!editForm && !deleteForm">
      <div class="job-item-wrapper" v-for="job in workExpDocuments" :key="job.id">
        <workExpDisplay :data="job" class="job-item" />
        <div class="icons">
          <font-awesome-icon
            @click="edit(job.id)"
            :icon="['fas', 'pen']"
            size="lg"
            color="#ccc"
            class="icon"
          />
          <font-awesome-icon
            @click="deleteJob(job)"
            :icon="['fas', 'trash']"
            size="lg"
            color="#ccc"
            class="icon"
          />
        </div>
      </div>
    </div>
    <div class="exp-form-container" v-else-if="editForm && !deleteForm">
      <WorkExpForm :doc-id="editDocId" @formSubmitted="editForm = !editForm" />
    </div>
    <div class="exp-form-container" v-else-if="!editForm && deleteForm">
      <h2>document has been deleted!</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getDocuments, deleteDocument, deleteFile } from '@/plugins/firebase.js'
import workExpDisplay from './workExpDisplay.vue'
import WorkExpForm from '../Utilities/Forms/WorkExpForm.vue'

const workExpDocuments = ref([])
const editDocId = ref('')
const editForm = ref(false)
const deleteForm = ref(false)

const addMore = () => {
  console.log('adding more...')
  editForm.value = true
}
const edit = (id) => {
  console.log(id)
  editDocId.value = id
  editForm.value = true
}
const deleteJob = async (doc) => {
  deleteForm.value = true
  try {
    //delete img
    await deleteFile(doc.imgPath)
    await deleteDocument('workExperience', doc.id)
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  try {
    workExpDocuments.value = await getDocuments('workExperience')
    //console.log('all documents from workExperience collection', workExpDocuments)
  } catch (error) {
    console.log(error)
  }
})
//3 - display controls on the right for add, edit
</script>

<style lang="scss" scoped>
.add-more {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0;
  border-bottom: 1px solid var(--divider-dark-1);
}
.job-item-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .job-item {
    margin: 1rem 0;
  }
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
</style>
