<template>
  <div class="projects-data">
    <ListItemTemplate :image="data.image">
      <template #info>
        <div class="proj-container">
          <div class="main">
            <h3>{{ data.name }}</h3>
            <h4 class="subtitle">{{ data.category }}</h4>
            <p class="subtitle" v-if="data.end !== undefined">
              {{ startMonth }} {{ start.year }} - {{ endMonth }} {{ end.year }}
            </p>
            <p class="subtitle" v-else>{{ start.month }} {{ start.year }} - Present</p>
            <p>
              tools used:
              <span class="subtitle tool" v-for="(tool, index) in data.toolsUsed" :key="index">{{
                tool
              }}</span>
            </p>
            <div class="links-container">
              <a :href="data.gitHubLink"
                >view on GitHub <font-awesome-icon icon="fa-brands fa-github" color="#ccc"
              /></a>
              <a :href="data.liveSiteLink"
                >view live site
                <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" color="#ccc"
              /></a>
              <p class="subtitle">is private repo: {{ data.isPrivate }}</p>
            </div>
          </div>
          <div class="secondary">
            <p>
              my process: <span class="subtitle">{{ cutText(data.my_process) }}</span>
            </p>
            <p>
              what I learned: <span class="subtitle">{{ cutText(data.what_i_learned) }}</span>
            </p>
            <p>
              Issues Encountered:
              <span class="subtitle">{{ cutText(data.issues_encountered) }}</span>
            </p>
            <p>
              Description:
              <span class="subtitle">{{ cutText(data.desc) }}</span>
            </p>
          </div>
        </div>
      </template>
    </ListItemTemplate>
  </div>
</template>

<script setup>
import ListItemTemplate from '../Utilities/templates/ListItemTemplate.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
const start = props.data.start
const end = props.data.end !== undefined ? props.data.end : { month: 'January', year: '' }
const startMonth = start.month.slice(0, 3)
const endMonth = end.month.slice(0, 3)

const cutText = (str) => {
  return str.length < 80 ? str : str.slice(0, 80) + '. . .'
}
</script>

<style lang="scss" scoped>
.proj-container {
  display: flex;
  flex-direction: row;
  p {
    margin: 0.525rem 0;
  }

  .main {
    border-right: 1px solid var(--divider-dark-1);
    margin-right: 1rem;
    padding-right: 1rem;

    .tool {
      margin-right: 5px;
    }
  }
}
.links-container {
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.525rem;
  }
}
.secondary {
  max-width: 200px;
}
</style>
