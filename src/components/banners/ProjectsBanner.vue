<template>
  <div>
    <div class="projects-banner">
      <div class="title">
        <h1
          class="gradient-text"
          :class="{ 'g-text-1': themeStore.isDark, 'g-text-2': !themeStore.isDark }"
        >
          {{ projects.title }}
        </h1>
      </div>
      <p class="text">
        {{ projects.content }}
      </p>
      <h2>view my <a href="https://github.com/Aleroms" class="hover">Github</a> repository</h2>
    </div>
  </div>
</template>

<script setup>
import { getDocument } from '@/plugins/firebase.js'
import { ref, onBeforeMount } from 'vue'
import { useThemeStore } from '@/stores/theme.js'
const projects = ref({})
const themeStore = useThemeStore()

onBeforeMount(async () => {
  try {
    projects.value = await getDocument('pageContent', 'projectsPage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>

.projects-banner {
  max-width: 750px;
  margin: 8rem auto;

  a {
    color: var(--hover-3);

    &:hover{
      color: var(--hover-2);
    }
  }

  .text {
    margin: 2rem 0;
    line-height: 1.8rem;
  }
}
.title {
  padding: 0 1.625rem;
  h1 {
    font-size: 50px;
    margin-bottom: 0.225rem;
    letter-spacing: 0.5rem;
  }
  h2 {
    margin-bottom: 0.625rem;
    letter-spacing: 0.5rem;
    font-size: 50px;
  }
}
@media (max-width: 520px) {
  .projects-banner {
    margin: 1rem;
  }

  .title {
    padding: 0;

    h1 {
      font-size: 43px;
      margin-bottom: 0.225rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>
