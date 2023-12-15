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
    <FormKit type="file" name="image" accept=".jpg,.png" validation="required" label="icon" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
//img name category
import { ref } from 'vue'
import { submitForm, uploadFile3 } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { filterForm } from '@/utils/filterForm.js'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const displayMessage = ref('')
const disable = ref(false)
const display = ref(false)

const submit = async (values) => {
  disable.value = true
  displayMessage.value = 'submitting...'
  display.value = true
  console.log(values)

  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.name + '-id'
  }

  try {
    const image = await uploadFile3(values.image, manageStore.collectionId)
    values.image = image

    //filter form for files
    const filteredForm = filterForm(values)
    await submitForm(filteredForm, manageStore.collectionId, filteredForm.id)
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
