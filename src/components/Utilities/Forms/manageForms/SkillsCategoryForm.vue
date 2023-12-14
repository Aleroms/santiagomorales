<template>
  <FormKit type="form" id="skills-category-form" @submit="submit" :disable="disable">
    <FormKit type="file" accept=".jpg,.png" name="img" label="image" validation="required" />
    <FormKit type="text" label="name" hint="skills category name" validation="required" />
    <FormKit type="textarea" label="description" name="desc" validation="required" />
  </FormKit>
  <p v-if="disable">{{ displayMessage }}</p>
</template>

<script setup>
//img name description
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
    await submitForm(form, 'skillCategory', form.name)
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
