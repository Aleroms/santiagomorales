<template>
  <FormKit type="form" id="skills-form" @submit="submit" :disable="disable">
    <FormKit
      type="textarea"
      auto-height
      label="how I approach a problem"
      name="approach_problem"
      validation="required"
      :placeholder="placeholder.approach_problem"
    />
    <FormKit
      type="textarea"
      auto-height
      label="how I program"
      name="how_i_program"
      validation="required"
      :placeholder="placeholder.how_i_program"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { submitForm, getDocument } from '@/plugins/firebase.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')
const placeholder = ref({})

const submit = async (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)

  //do not need to filter form for files - this form never has files
  try {
    await submitForm(values, 'pageContent', 'skillsPage')
  } catch (error) {
    console.log(error)
    disable.value = false
    displayMessage.value = 'error occurred...'
  }
  //on successful submission
  displayMessage.value = 'success!'
  disable.value = false
  router.push('/manage')
}

onMounted(async () => {
  try {
    placeholder.value = await getDocument('pageContent', 'skillsPage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>
