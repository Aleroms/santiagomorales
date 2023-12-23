<template>
  <article class="card">
    <slot name="title">
      <p>no content provided</p>
    </slot>
    <hr />
    <slot name="content">
      <p>no content provided</p>
    </slot>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  max-width: 300px;
  height: 225px;
  background-color: var(--secondary-soft);
  padding: 0.625rem;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  hr {
    margin: 1rem 0;
    height: 1px;
    border: none;
    background-color: var(--divider-dark-1);
  }
}
</style>
