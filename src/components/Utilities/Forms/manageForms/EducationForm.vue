<template>
  <FormKit type="form" id="edu-form" @submit="submit" :disabled="disable">
    <FormKit
      type="file"
      label="school logo"
      name="image"
      validation="required"
      accepts=".jpg,.png"
    />
    <FormKit
      type="text"
      label="degree"
      name="degree"
      validation="required"
      :placeholder="placeholder.degree"
    />
    <FormKit
      type="text"
      label="years"
      help="from x to y format"
      name="years"
      validation="required"
      :placeholder="placeholder.years"
    />
  </FormKit>
  <div v-if="display">
    <p>{{ displayMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { uploadFile2, submitForm, getDocument } from '@/plugins/firebase.js'
import { filterForm } from '@/utils/filterForm.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const placeholder = ref({})

const disable = ref(false)
const displayMessage = ref(false)
const display = ref(false)

const submit = async (values) => {
  console.log(values)

  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'

  try {
    //uploads and returns img url
    const imgURL = await uploadFile2(values.image, `education/${values.image[0].name}`)

    //adds img url to form
    values.imgURL = imgURL

    //filter form for files
    const filteredForm = filterForm(values)

    //submit form
    await submitForm(filteredForm, 'education', 'edu')
  } catch (error) {
    console.log(error)
    displayMessage.value = 'error occurred'
    disable.value = false
    return
  }
  //on successful submission
  displayMessage.value = 'submitted!'
  disable.value = false
  //refresh
  router.push('/manage')
}

onMounted(async () => {
  try {
    placeholder.value = await getDocument('education', 'edu')
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>
