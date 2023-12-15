<template>
  <FormKit type="form" id="skills-category-form" @submit="submit" :disable="disable">
    <FormKit type="file" accept=".jpg,.png" name="image" label="image" validation="required" />
    <FormKit
      type="text"
      label="name"
      name="name"
      hint="skills category name"
      validation="required"
      :placeholder="placeholder.name"
    />
    <FormKit
      type="textarea"
      label="description"
      name="desc"
      validation="required"
      :placeholder="placeholder.desc"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder.js'
import { useManageForm } from '@/composables/manageForm.js'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  values.id = manageStore.isEdit ? placeholder.value.id : values.name + '-id'

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
  }
}
</script>

<style lang="scss" scoped></style>
