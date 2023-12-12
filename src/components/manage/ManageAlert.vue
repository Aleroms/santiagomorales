<template>
  <div class="alert-wrapper">
    <p>{{ manageStore.displayMessage }}</p>
  </div>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
const manageStore = useManageStore()
</script>

<style lang="scss" scoped></style>
