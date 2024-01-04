<template>
  <a :href="path" class="btn" :class="type" target="_blank">{{ props.text }}</a>
</template>

<script setup>
const props = defineProps(['text', 'path', 'type'])
</script>

<style lang="scss" scoped>
.btn {
  padding: 6px 12px;
  border-radius: 30px;
  text-align: center;
  transition: 0.3s ease-in-out;
  color: white;
}
.filled {
  background-color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}
.outline {
  border: 2px solid var(--primary);
}
</style>
