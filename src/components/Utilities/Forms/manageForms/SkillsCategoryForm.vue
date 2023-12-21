<template>
  <FormKit type="form" id="skills-category-form" @submit="submit" :disable="disable">
    <FormKit
      type="file"
      accept=".jpg,.png"
      name="image"
      label="image"
      :validation="manageStore.required"
    />
    <FormKit
      type="text"
      label="name"
      name="name"
      hint="skills category name"
      :validation="manageStore.required"
      placeholder="frontend"
      v-model="placeholder.name"
    />
    <FormKit
      type="textarea"
      label="description"
      name="desc"
      placeholder="frontend is awesome bcz backend bad! Stinky!!"
      :validation="manageStore.required"
      v-model="placeholder.desc"
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
