<template>
  <FormKit type="form" id="certificate-form" @submit="submit" :disable="disable">
    <FormKit type="text" label="certificate name" name="name" validation="required" />
    <FormKit
      type="text"
      label="issuer"
      help="where did you get certificate from"
      name="issuer"
      validation="required"
    />
    <FormKit
      type="file"
      name="img"
      label="company logo"
      help="this is used as a thumbnail for displaying the certificate"
      accept=".jpg,.png"
      validation="required"
    />
    <FormKit type="group" name="issue_date" validation="required">
      <FormKit type="select" :options="months" label="month" name="month" />
      <FormKit type="number" label="year" name="year" />
    </FormKit>
    <FormKit type="text" label="certificate ID" name="cNum" validation="required" />
    <FormKit type="text" label="certificate url" name="certUrl" validation="required" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { months } from '@/utils/formOptions.js'
import { useManageStore } from '@/stores/manage.js'
import { submitForm } from '@/plugins/firebase.js'

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
    await submitForm(form, 'certificates', form.name)
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    disable.value = false
    return
  }

  //on successful submission
  manageStore.result('success')
}
//deal with placeholder stuff
</script>

<style lang="scss" scoped></style>
