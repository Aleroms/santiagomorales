<template>
  <div class="skills-display-wrapper" v-if="isReady">
    <article class="skill-info">
      <h1 class="category-title">{{ activeSkill.name }}</h1>
      <hr class="custom-hr-1" />
      <p class="desc">
        {{ activeSkill.desc }}
      </p>
    </article>
    <div class="controls-wrapper">
      <div class="control" v-for="skill in skillCat" :key="skill.id">
        <img :src="skill.image.url" :alt="skill.image.name" @click="selectSkill(skill.id)" />
        <!-- <p>{{ skill.name }}</p> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
const activeSkill = ref({})
const skillCat = ref([])
const isReady = ref({})
const selectSkill = (id) => {
  activeSkill.value = skillCat.value.find((item) => item.id === id)
}

onBeforeMount(async () => {
  try {
    skillCat.value = await getDocuments('skillsCategory')
  } catch (error) {
    console.log(error)
  } finally {
    isReady.value = true
  }
})
</script>

<style lang="scss" scoped>
.desc {
  margin: 1rem;
  border: 1px solid green;
  border-radius: 5px;
  padding: 0.625rem;
  background-color: var(--secondary);
}
.category-title {
  margin: 1rem;
  border: 1px solid green;
}
.skills-display-wrapper {
  margin: 3rem auto 1rem;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--divider-dark-1);
  border-radius: 15px;
}
.skill-info {
  padding: 1rem;
  border-right: 1px solid var(--divider-dark-1);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: var(--secondary-soft);
}
.controls-wrapper {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.control {
  border: 1px solid var(--divider-dark-1);
  width: 50%;
  height: 50%;
  float: left;
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.05);
    }
  }

  &:nth-child(2) {
    border-top-right-radius: 15px;
  }
  &:nth-child(4) {
    border-bottom-right-radius: 15px;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
}
@media (max-width: 900px) {
  .skills-display-wrapper {
    display: flex;
    flex-direction: column-reverse;
    max-width: 500px;
  }
  .skill-info {
    border-top: 1px solid var(--divider-dark-1);
    border-right: none;
    border-top-left-radius: 0;
    border-bottom-right-radius: 15px;
  }
  .controls-wrapper {
    border-top-left-radius: 15px;
    border-bottom-right-radius: 0;
  }
  .control {
    border: 1px solid var(--divider-dark-1);

    img{
      margin-bottom: -5px;
    }

    &:nth-child(1) {
      border-top-left-radius: 15px;
    }
    &:nth-child(4) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
