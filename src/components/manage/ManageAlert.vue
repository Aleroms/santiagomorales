<template>
  <div class="alert-wrapper">
    <p>{{ manageStore.displayMessage }}</p>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
const manageStore = useManageStore()
</script>

<style lang="scss" scoped>
.alert-wrapper {
  margin: 2rem 1rem;
  border: 1px solid var(--divider-dark-1);
  border-radius: 10px;
  padding: 1rem;
  background-color: var(--secondary-soft);
}
</style>
