<template>
  <FormKit type="form" id="certificate-form" @submit="submit" :disable="disable">
    <FormKit
      type="text"
      label="certificate name"
      name="name"
      placeholder="certificate name"
      :validation="manageStore.required"
      v-model="placeholder.name"
    />
    <FormKit
      type="text"
      label="issuer"
      help="where did you get certificate from"
      name="issuer"
      placeholder="udemy..."
      :validation="manageStore.required"
      v-model="placeholder.issuer"
    />
    <FormKit
      type="file"
      name="image"
      label="company logo"
      help="this is used as a thumbnail for displaying the certificate"
      accept=".jpg,.png"
      :validation="manageStore.required"
    />
    <FormKit type="group" name="issue_date" v-model="placeholder.issue_date">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          label="month"
          name="month"
          placeholder="Please Select"
          :validation="manageStore.required"
        />
        <FormKit
          type="number"
          label="year"
          name="year"
          :validation="`${manageStore.required}|min:1997`"
          :value="current_year"
        />
      </div>
    </FormKit>
    <FormKit
      type="text"
      label="certificate ID"
      name="cNum"
      :validation="manageStore.required"
      v-model="placeholder.cNum"
      placeholder="certificate number"
    />
    <FormKit
      type="text"
      label="certificate url"
      name="certUrl"
      :validation="`${manageStore.required}|url`"
      v-model="placeholder.certUrl"
      placeholder="https://www.go..."
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
const current_year = new Date().getFullYear()

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
