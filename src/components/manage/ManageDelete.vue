<template>
  <div class="delete-item">
    <div class="prompt-wrapper">
      <h2>Are you sure?</h2>
      <p>This will permanently delete {{ manageStore.deleteId }}.</p>
      <div class="controls">
        <ButtonComponent text="cancel" type="outline" @click="manageStore.resetState" />
        <ButtonComponent text="confirm" type="filled" @click="deleteItem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'
const manageStore = useManageStore()

const deleteItem = () => {
  console.log(
    'replace this with firebase method that handles deletion and pass it manageStore.deleteId'
  )
  //make this async and do try-catch for firebase deleteDoc method
  //then update manageStore to ManageAlert w/ display message

  //deleting document...
  manageStore.setMessage('delete')
  manageStore.setActive('ManageAlert', 'Successfully deleted!', false)
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
