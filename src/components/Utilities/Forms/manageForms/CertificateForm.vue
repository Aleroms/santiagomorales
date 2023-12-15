<template>
  <FormKit type="form" id="certificate-form" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      label="certificate name"
      name="name"
      validation="required"
      :placeholder="placeholder.name"
    />
    <FormKit
      type="text"
      label="issuer"
      help="where did you get certificate from"
      name="issuer"
      validation="required"
      :placeholder="placeholder.issuer"
    />
    <FormKit
      type="file"
      name="image"
      label="company logo"
      help="this is used as a thumbnail for displaying the certificate"
      accept=".jpg,.png"
      validation="required"
    />
    <FormKit type="group" name="issue_date" validation="required">
      <div class="form-date-wrapper">
        <FormKit type="select" :options="months" label="month" name="month" />
        <FormKit type="number" label="year" name="year" />
      </div>
    </FormKit>
    <FormKit
      type="text"
      label="certificate ID"
      name="cNum"
      validation="required"
      :placeholder="placeholder.cNum"
    />
    <FormKit
      type="text"
      label="certificate url"
      name="certUrl"
      validation="required"
      :placeholder="placeholder.certUrl"
    />
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { months } from '@/utils/formOptions.js'
import { useManageStore } from '@/stores/manage.js'
import { useFormPlaceholder } from '@/composables/formPlaceholder'
import { useManageForm } from '@/composables/manageForm.js'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const submit = async (values) => {
  values.id = manageStore.isEdit ? placeholder.value.id : values.issuer + ' - ' + values.name

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
    return
  }
}
</script>

<style lang="scss" scoped></style>
