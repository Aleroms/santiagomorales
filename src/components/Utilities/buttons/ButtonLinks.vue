<template>
  <RouterLink :to="currPath" class="btn" :class="type">{{ props.text }}</RouterLink>
</template>

<script setup>
const props = defineProps(['text', 'path', 'type'])
const currPath = '/' + props.path
</script>

<style lang="scss" scoped>
.btn {
  padding: 6px 12px;
  border-radius: 30px;
  text-align: center;
  transition: 0.3s ease-in-out;
}
.filled {
  background-color: var(--primary);
  border: 2px solid var(--primary);
}
.outline {
  border: 2px solid var(--primary);

  &:hover{
    border: 2px solid var(--primary-green);
  }
}
</style>
