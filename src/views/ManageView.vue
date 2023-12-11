<template>
  <div class="manage-wrapper">
    <h1 id="#">
      <font-awesome-icon icon="fa-solid fa-code-branch" size="sm" color="#42b983" /> Firebase Forms
    </h1>
    <div class="section-wrapper">
      <ManageControls />
    </div>
    <ButtonComponent type="filled" text="logout" @click="logout" />
    <ManageDisplay />
  </div>
</template>

<script setup>
import ManageControls from '@/components/manage/ManageControls.vue'
import ManageDisplay from '@/components/manage/ManageDisplay.vue'
import ButtonComponent from '@/components/Utilities/buttons/ButtonComponent.vue'

import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const logout = () => {
  userStore.logout()
  router.push('/')
}
</script>

<style lang="scss" scoped>
.manage-wrapper {
  margin: 1rem;
  max-width: 640px;

  h1 {
    margin: 2.25rem 0;
  }
  h2 {
    margin-bottom: 1rem;
  }
  hr {
    border: 1px solid var(--divider-dark-1);
    margin: 0.625rem 0;
  }
}
@media (min-width: 640px) {
  .manage-wrapper {
    margin: 1rem auto;
  }
}
</style>
