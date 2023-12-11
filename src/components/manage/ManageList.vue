<template>
  <div>
    <p>Manage List</p>
    <p>{{ manageStore.activeId }}</p>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
const manageStore = useManageStore()
</script>

<style lang="scss" scoped></style>
