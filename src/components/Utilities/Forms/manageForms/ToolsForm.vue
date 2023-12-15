<template>
  <FormKit type="form" id="tools-form" @submit="submit" :disable="disable">
    <FormKit type="file" accept=".jpg,.png" name="image" validation="required" />
    <FormKit type="text" name="name" label="name" help="tool name" validation="required" />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder'
import { useManageForm } from '@/composables/manageForm.js'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.name + '-id'
  }

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
  }
}
</script>

<style lang="scss" scoped></style>
