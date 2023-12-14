<template>
  <FormKit type="form" id="tools-form" @submit="submit" :disable="disable">
    <FormKit type="file" accept=".jpg,.png" name="img" validation="required" />
    <FormKit type="text" name="name" label="name" help="tool name" validation="required" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
//img name

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
    await submitForm(form, 'tools', form.name)
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
