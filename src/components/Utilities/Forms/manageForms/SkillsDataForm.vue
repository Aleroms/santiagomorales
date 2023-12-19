<template>
  <FormKit type="form" id="skills-data-form" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      label="name"
      help="skill name"
      name="name"
      validation="required"
      :placeholder="placeholder.name"
    />
    <FormKit
      type="select"
      label="category"
      help="skill category"
      name="category"
      validation="required"
      placeholder="Please select"
      :options="skillsCategory"
    />
    <FormKit type="file" name="image" accept=".jpg,.png" validation="required" label="icon" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'
import { skillsCategory } from '@/utils/formOptions'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.name + '-id'
  }
  console.log('editing', values)
  try {
    await submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
    return
  }
}
</script>

<style lang="scss" scoped></style>
