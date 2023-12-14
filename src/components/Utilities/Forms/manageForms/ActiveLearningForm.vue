<template>
  <FormKit type="form" id="active-learning" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      name="name"
      label="name"
      help="what am I learning?"
      validation="required"
    />
    <FormKit type="text" name="id" label="id" validation="required" />
    <FormKit type="file" name="img" label="icon" validation="required" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
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
    await submitForm(form, 'activeLearning', form.id)
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
