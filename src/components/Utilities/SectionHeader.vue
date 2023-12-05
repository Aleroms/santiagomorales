<template>
  <h2>{{ title }} <a :href="`#${id}`">#</a></h2>
</template>

<script setup>
defineProps({
  title: String,
  id: String
})
</script>

<style lang="scss" scoped>
h2 {
  position: relative;
  margin: 4rem 0 1.8rem;
  padding-top: 1rem;
  border-top: 1px solid var(--divider-dark-1);

  &:hover {
    a {
      opacity: 1;
    }
  }
  a {
    float: left;
    margin-left: -1.5rem;
    padding-right: 0.625rem;
    font-weight: 500;
    box-sizing: border-box;
    color: var(--primary);
    opacity: 0;
  }
}
</style>
