<template>
  <FormKit type="form" id="skills-data-form" @submit="submit" :disable="disable">
    <FormKit type="text" label="name" help="skill name" name="name" validation="required" />
    <FormKit
      type="text"
      label="category"
      help="skill category"
      name="category"
      validation="required"
    />
    <FormKit type="file" name="img" accept=".jpg,.png" validation="required" label="icon" />
  </FormKit>
</template>

<script setup>
//img name category
import { ref } from 'vue'
import { submitForm } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage'

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
    await submitForm(form, 'pageContent', 'aboutPage')
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
