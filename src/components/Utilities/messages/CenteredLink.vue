<template>
  <div class="view-more" v-motion-fade-visible>
    <h2>view more</h2>
    <RouterLink :to="props.nav.id">{{ nav.text }}</RouterLink>
  </div>
</template>

<script setup>
const props = defineProps({
  nav: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.view-more {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  a {
    margin-left: 1rem;
    color: var(--hover-2);
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    font-size: 25px;

    &:hover {
      color: var(--hover-3);
      -moz-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      -webkit-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
    }
  }
}
</style>
