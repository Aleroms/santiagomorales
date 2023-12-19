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
            <h4>tools used:</h4>
            <div class="tools">
              <p class="subtitle tool" v-for="tool in data.toolsUsed" :key="tool">{{ tool }}</p>
            </div>
            <div class="links-container">
              <a :href="data.gitHubLink"
                >view on GitHub
                <font-awesome-icon icon="fa-brands fa-github" color="#ccc" size="lg"
              /></a>
              <a :href="data.liveSiteLink"
                >view live site
                <font-awesome-icon
                  icon="fa-solid fa-arrow-up-right-from-square"
                  color="#ccc"
                  size="lg"
              /></a>
              <p class="subtitle">is private repo: {{ data.isPrivate ? 'true' : 'false' }}</p>
            </div>
          </div>
          <div class="secondary">
            <p>
              my process: <span class="subtitle">{{ cutText(data.my_process) }}</span>
            </p>
            <p>
              what I learned: <span class="subtitle">{{ cutText(data.what_i_learned) }}</span>
            </p>
            <h4>Issues Encountered:</h4>
            <p v-for="issue in data.issues_encountered" :key="issue" class="subtitle">
              {{ cutText(issue) }}
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
  return str.length < 37 ? str : str.slice(0, 37) + '. . .'
}
</script>

<style lang="scss" scoped>
.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .tool {
    flex: 1;
  }
}
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
  }
}
.links-container {
  display: flex;
  flex-direction: column;
  gap: 15px;

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
@media (max-width: 600px) {
  .proj-container {
    flex-direction: column;

    .main {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
      border-bottom: 1px solid var(--divider-dark-1);
      margin-bottom: 1rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
