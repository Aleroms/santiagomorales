<template>
  <div>
    <ProjectDetailsBanner
      :data="{
        image: project.image,
        fallback: project.fallback,
        start: project.start,
        end: project.end,
        name: project.name,
        desc: project.desc,
        isPrivate: project.isPrivate,
        liveSite: project.liveSiteLink,
        githubLink: project.githubLink
      }"
    />
    <div class="container">
      <!-- what i used  -->
      <section class="what-i-used" v-if="project.tools.length !== 0">
        <SectionHeader title="What I Used" id="what-i-used" />
        <div class="tools-used">
          <div class="img-wrapper tooltip" v-for="item in project.tools" :key="item.id">
            <img :src="item.image.url" :alt="item.image.name" />
            <span class="tooltiptext">{{ item.name }}</span>
          </div>
        </div>
      </section>

      <!-- my process  -->
      <SectionHeader title="My Process" id="my-process" />
      <article class="my-process">
        <p v-for="process in project.my_process" :key="process" class="text-block">
          {{ process }}
        </p>
      </article>
      <!-- issues encountered  -->
      <SectionHeader title="Issues Encountered" id="issues-encountered" />
      <ul class="issues-encountered">
        <li v-for="issue in project.issues_encountered" :key="issue">
          <p class="text-block">{{ issue }}</p>
        </li>
      </ul>
      <!-- what i learned  -->
      <SectionHeader title="What I Learned" id="what-i-learned" />
      <p v-for="learn in project.what_i_learned" :key="learn" class="text-block">
        {{ learn }}
      </p>
      <!-- useful links  -->
      <SectionHeader title="Useful Links" id="useful-links" />
      <article class="useful-links" v-for="link in project.usefulLinks" :key="link.link">
        <p class="text">
          <a :href="link.link" class="link">{{ link.name }}</a> - {{ link.desc }}
        </p>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useProjectStore } from '@/stores/projects.js'
import { useToolStore } from '@/stores/tools'
import { ref, onBeforeMount, defineAsyncComponent } from 'vue'
const ProjectDetailsBanner = defineAsyncComponent(
  () => import('@/components/banners/ProjectDetailsBanner.vue')
)
const SectionHeader = defineAsyncComponent(() => import('@/components/Utilities/SectionHeader.vue'))
const projectStore = useProjectStore()
const toolStore = useToolStore()
const project = ref({})
onBeforeMount(async () => {
  toolStore.initialize()
  project.value = projectStore.getProjectDetails
  try {
    project.value.tools = toolStore.data.filter((item) =>
      project.value.toolsUsed.includes(item.name)
    )
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
// tool tip css
.tooltip {
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  .tooltiptext {
    opacity: 0;
    background-color: var(--secondary);
    border: 1px solid var(--divider-dark-1);
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: -30px;
  }

  &:hover {
    .tooltiptext {
      opacity: 1;
    }
  }
}

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
    display: flex;
    align-items: center;
    justify-content: center;

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
