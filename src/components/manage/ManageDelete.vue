<template>
  <div class="delete-item">
    <div class="prompt-wrapper">
      <h2>Are you sure?</h2>
      <p>This will permanently delete {{ manageStore.deleteId }}.</p>
      <div class="controls">
        <ButtonComponent text="cancel" type="outline" @click="manageStore.goBack" />
        <ButtonComponent text="confirm" type="filled" @click="removeItem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import { deleteFile, deleteDocument } from '@/plugins/firebase.js'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
const manageStore = useManageStore()

const removeItem = async () => {
  //get document from pinia store
  const doc = manageStore.getDeleteDocument
  try {
    if (doc.image.path) await deleteFile(doc.image.path)
    else console.log('image DNE')

    console.log(manageStore.collectionId, doc.id)
    await deleteDocument(manageStore.collectionId, doc.id)
  } catch (error) {
    console.log(error)
    manageStore.result(error)
    return
  }
  //deleting document...
  manageStore.deleteResolution()
}
</script>

<style lang="scss" scoped>
.delete-item {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid var(--danger);
  background-color: var(--secondary-soft);
  border-radius: 5px;
}
.prompt-wrapper {
  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin: 1rem 0;
  }
}
.controls {
  margin: 1rem;
  display: flex;
  justify-content: end;
  gap: 20px;
}
</style>
