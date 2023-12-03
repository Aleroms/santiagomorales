<template>
  <div class="manage-wrapper">
    <h1>Manage Pages:</h1>
    <h2 id="home">Home Section</h2>
    <hr />
    <h2 id="about">About Section</h2>
    <hr />
    <h2 id="project">Project Section</h2>
    <hr />
    <h2 id="skill">Skill Section</h2>
    <hr />
  </div>
</template>

<script setup></script>

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
