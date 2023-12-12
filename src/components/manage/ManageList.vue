<template>
  <div class="manage-list">
    <div class="add-more" @click="manageStore.addMore">
      <font-awesome-icon :icon="['fas', 'plus']" size="2xl" color="#ccc" class="icon" />
    </div>
    <div class="list-wrapper">
      <p class="item">component :is='{{ manageStore.activeId }}'</p>
      <div class="icons">
        <font-awesome-icon
          @click="manageStore.edit('editId')"
          :icon="['fas', 'pen']"
          size="lg"
          color="#ccc"
          class="icon"
        />
        <font-awesome-icon
          @click="manageStore.deleteItem('deleteId')"
          :icon="['fas', 'trash']"
          size="lg"
          color="#ccc"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
const manageStore = useManageStore()
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

  .icons{
    display: flex;
  }
}
@media(max-width: 370px){
  .list-wrapper {
    .icons{
      flex-direction: column;
    }
  }
}
</style>
