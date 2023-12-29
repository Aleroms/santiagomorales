<template>
  <div class="skills-display-wrapper" v-if="isReady">
    <article class="skill-info">
      <h1>{{ activeSkill.name }}</h1>
      <hr class="custom-hr-1" />
      <p class="desc">
        {{ activeSkill.desc }}
      </p>
    </article>
    <div class="controls-wrapper">
      <div class="control" v-for="skill in skillCat" :key="skill.id">
        <div class="img-wrapper" @click="selectSkill(skill.id)">
          <img :src="skill.image.url" :alt="skill.image.name" />
        </div>
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
.skills-display-wrapper {
  max-width: 600px;
  background-color: var(--secondary-soft);
  border: 1px solid var(--divider-dark-1);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.skill-info {
  padding: 1rem;
}
.desc {
  max-width: 300px;
  overflow-y: scroll;
}

.controls-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem auto;
  align-items: center;
  justify-content: center;

  .control {
    max-width: 150px;
    border: 1px solid red;

    &:first-child{
      border-top-left-radius: 15px;
    }
  }
}
.img-wrapper {
  max-width: 150px;
  max-height: 150px;
  cursor: pointer;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  
}
@media(max-width: 550px){
  .skills-display-wrapper{
    flex-direction: column;
  }
}
</style>
