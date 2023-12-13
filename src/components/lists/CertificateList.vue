<template>
  <div>
    <ListItemTemplate :image="data.image">
      <template #info>
        <h3>{{ data.name }}</h3>
        <h4>{{ data.issuer }}</h4>
        <p class="subtitle">Issued {{ month }} {{ data.issue_date.year }}</p>
        <p>Credential ID {{ data.cNum }}</p>
        <a :href="data.certUrl" target="_blank"
          >show credential
          <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" size="sm" color="#ccc"
        /></a>
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
const month = props.data.issue_date.month.slice(0, 3)
</script>

<style lang="scss" scoped></style>
