<template>
  <div>
    <ProjectDetailsBanner
      :data="{
        image: project.image,
        start: project.start,
        end: project.end,
        name: project.name,
        desc: project.desc
      }"
    />
    <section class="details container">
      <SectionHeader title="What I Used" id="what-i-used" />
      <div class="tools-used">
        <div class="img-wrapper" v-for="item in project.tools" :key="item.id">
          <img :src="item.image.url" :alt="item.image.name" />
        </div>
      </div>
      <SectionHeader title="My Process" id="my-process" />
      <article class="my-process">
        <p v-for="process in project.my_process" :key="process" class="text">
          {{ process }}
        </p>
      </article>
      <SectionHeader title="Issues Encountered" id="issues-encountered" />
      <ul class="issues-encountered">
        <li v-for="issue in project.issues_encountered" :key="issue">
          <p class="text">{{ issue }}</p>
        </li>
      </ul>
      <SectionHeader title="What I Learned" id="what-i-learned" />
      <p v-for="learn in project.what_i_learned" :key="learn" class="text">
        {{ learn }}
      </p>
      <p>{{}}</p>
      <SectionHeader title="Useful Links" id="useful-links" />
      <article class="useful-links" v-for="link in project.usefulLinks" :key="link.link">
        <p class="text">
          <a :href="link.link" class="link">{{ link.name }}</a> - {{ link.desc }}
        </p>
      </article>
      <h3 v-if="!project.isPrivate">
        View Source Code on <a :href="project.githubLink" class="github-link">Github</a>.
      </h3>
      <h3 class="subtitle" v-else>
        <font-awesome-icon icon="fa-solid fa-lock" color="#006837" size="sm" /> This Repository is
        Private . . .
      </h3>
    </section>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projects.js'
import { ref, onBeforeMount } from 'vue'
import { getDocuments } from '@/plugins/firebase.js'
import ProjectDetailsBanner from '@/components/banners/ProjectDetailsBanner.vue'
import SectionHeader from '@/components/Utilities/SectionHeader.vue'
const projectStore = useProjectStore()
const project = ref({})
const toolsUsed = ref([])
onBeforeMount(async () => {
  project.value = projectStore.getProjectDetails
  try {
    toolsUsed.value = await getDocuments('tools')
    project.value.tools = toolsUsed.value.filter((item) =>
      project.value.toolsUsed.includes(item.name)
    )
  } catch (error) {
    console.log(error)
  }
  console.log(project.value.tools)
})
</script>

<style lang="scss" scoped>
.tools-used {
  padding: 0.625rem 1.625rem;
  margin: 1rem 2rem;
  background-color: var(--secondary-soft);
  border: 1px solid var(--divider-dark-1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 55px;

  .img-wrapper {
  aspect-ratio: 1/1;
  object-fit: contain;
  max-width: 43px;

  img {
    width: 100%;
  }
}
}
.link {
  color: var(--primary);
  font-size: 18px;
  text-decoration: underline;
}
.github-link {
  color: var(--primary);
}
.text {
  margin: 1.625rem 1rem 3rem;
  line-height: 1.625rem;
}
.issues-encountered {
  max-width: 1000px;
  margin: 1.625rem;

  li {
    &::marker {
      color: var(--primary-blue);
      content: '>';
      font-size: 2.425rem;
    }
  }
}
</style>
