<template>
  <div class="skills-tab-view-wrapper">
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
      <div class="item" v-for="skill in skills" :key="skill.id">
        <div class="img-wrapper">
          <img :src="skill.image.url" :alt="skill.image.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
const category = ref([])
const skills = ref([])
const selectedCategory = ref(null)

const test = (category) => {
  selectedCategory.value = category
}
onMounted(async () => {
  try {
    category.value = await getDocuments('skillsCategory')
    skills.value = await getDocuments('skills')
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.img-wrapper {
  aspect-ratio: 1/1;
  object-fit: contain;
  max-width: 90px;

  img {
    width: 100%;
  }
}
.skills-tab-view-wrapper {
  max-width: 900px;
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
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 100px;
}
@media (max-width: 900px) {
  .skills-tab-view-wrapper {
    margin: 1rem;
  }
  .content {
    justify-content: center;
  }
}
@media (max-width: 450px) {
  .heading {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
