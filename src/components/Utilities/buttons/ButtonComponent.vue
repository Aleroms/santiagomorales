<template>
  <button type="button" class="btn" :class="type">{{ props.text }}</button>
</template>

<script setup>
const props = defineProps({
  type: {
    required: true,
    type: String
  },
  text: {
    required: true,
    type: String
  }
})
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
  background-color: transparent;
  color: var(--text-light-1);
}
</style>
