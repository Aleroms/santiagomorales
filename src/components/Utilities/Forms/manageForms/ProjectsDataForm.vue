<template>
  <FormKit type="form" id="projects-data" @submit="submit" :disable="disable">
    <FormKit type="text" name="name" label="project name" validation="required" />
    <!-- might want to change this to select  -->
    <FormKit type="text" name="category" label="category" validation="required" />
    <FormKit
      type="file"
      name="img"
      label="project cover"
      help="used to describe the project"
      validation="required"
    />
    <FormKit type="group" name="start" validation="required">
      <FormKit type="select" :options="months" name="month" validation="required" />
      <FormKit type="number" name="year" validation="required" />
    </FormKit>
    <FormKit type="group" name="end" validation="required">
      <FormKit type="select" :options="months" name="month" validation="required" />
      <FormKit type="number" name="year" validation="required" />
    </FormKit>
    <!-- tools used array here  -->
    <FormKit
      type="text"
      label="github link"
      name="githubLink"
      help="github repo"
      validation="required"
    />
    <FormKit
      type="checkbox"
      name="isPrivate"
      label="access"
      help="is repo private?"
      validation="required"
    />
    <FormKit
      type="text"
      label="live site link"
      name="liveSiteLink"
      help="live site"
      validation="required"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { months } from '@/utils/formOptions'
import { submitForm } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage'
//img category name start_date end_date toolsUsed githubLink liveSiteLink isPrivate
//my_process what_i_learned issues_encountered desc

const manageStore = useManageStore()

// const placeholder = ref({})
const displayMessage = ref('')
const disable = ref(false)
const display = ref(false)

const submit = async (form) => {
  disable.value = true
  displayMessage.value = 'submitting...'
  display.value = true
  console.log(form)

  try {
    await submitForm(form, 'projectsData', form.githubLink)
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    disable.value = false
    return
  }

  //on successfull submission
  manageStore.result('success')
}
</script>

<style lang="scss" scoped></style>
