<template>
  <FormKit type="form" id="projects-form" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      label="title"
      help="hero section title"
      name="title"
      validation="required"
      :placeholder="placeholder.title"
    />
    <FormKit
      type="textarea"
      auto-height
      label="hero content"
      name="content"
      help="main paragraph users see"
      validation="required"
      :placeholder="placeholder.content"
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
    await submitForm(values, 'pageContent', 'projectsPage')
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
    placeholder.value = await getDocument('pageContent', 'projectsPage')
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>
