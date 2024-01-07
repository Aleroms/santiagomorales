<template>
  <div class="skills-tab-view-wrapper" v-motion-fade-visible>
    <div class="heading">
      <div
        class="heading-item"
        v-for="cat in category"
        :key="cat.id"
        @click="test(cat.name)"
        :class="{ active: cat.name === selectedCategory }"
      >
        <h2>{{ cat.name }}</h2>
        <div class="line g-rad-1"></div>
      </div>
    </div>
    <hr class="custom-hr-1" />
    <div class="content">
      <div class="item" v-for="skill in selectedSkills" :key="skill.id">
        <div class="img-wrapper">
          <img
            width="70"
            height="70"
            :src="skill.image.url"
            :alt="skill.image.name"
            loading="lazy"
          />
        </div>
      </div>
      <p class="subtitle" v-if="noItem">no items 😔</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
import { useSessionStorage } from '@vueuse/core'
const category = useSessionStorage('skillCategory', [])
const skills = useSessionStorage('mySkills', [])
const tools = useSessionStorage('tools', [])
const selectedCategory = ref(null)
const selectedSkills = ref(null)
const noItem = ref(false)

const test = (category) => {
  selectedCategory.value = category

  if (category === 'Tools') {
    selectedSkills.value = tools.value
  } else {
    selectedSkills.value = skills.value.filter((item) => item.category === selectedCategory.value)
  }
  noItem.value = selectedSkills.value.length === 0 ? true : false
}
onMounted(async () => {
  try {
    if (category.value.length === 0) category.value = await getDocuments('skillsCategory')
    if (skills.value.length === 0) skills.value = await getDocuments('skills')
    test(category.value[3].name)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.item {
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}
.img-wrapper {
  object-fit: contain;
  max-width: 90px;

  img {
    width: 100%;
  }
}
.skills-tab-view-wrapper {
  max-width: 900px;
  min-height: 426px;
  margin: 1rem auto;
}
.heading {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  cursor: pointer;

  .heading-item {
    position: relative;

    h2 {
      color: var(--text-hover-1);
    }
    .line {
      transform: scale(0);
      height: 2px;
      border-radius: 10px;
      margin: 0.425rem auto;
      background-color: var(--primary);
      transition:
        transform 0.3s,
        margin 0.3s;
    }
    &:hover {
      h2 {
        color: var(--text-light-1);
      }
      .line {
        transform: scale(1);
        margin: 0.425rem 0;
      }
    }
    &.active {
      h2 {
        color: var(--text-light-1);
      }
      .line {
        transform: scale(1);
        margin: 0.425rem 0;
      }
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 100px;
}
@media (max-width: 900px) {
  .skills-tab-view-wrapper {
    margin: 1rem;
  }
}
@media (max-width: 450px) {
  .heading {
    flex-direction: column;
    justify-content: flex-start;
  }
}
@media (max-width: 365px) {
  .img-wrapper {
    max-width: 61px;
  }
}
</style>
