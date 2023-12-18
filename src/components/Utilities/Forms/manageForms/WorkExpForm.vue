<template>
  <FormKit type="form" id="workExp-form" @submit="submit" :disabled="disable">
    <FormKit
      type="text"
      label="title"
      name="title"
      hint="job title"
      validation="required"
      :placeholder="placeholder.title"
    />
    <FormKit
      type="select"
      :options="employment_type"
      label="employment type"
      placeholder="Please Select"
      name="emp_type"
      validation="required"
    />
    <FormKit
      type="text"
      label="company name"
      name="company"
      validation="required"
      :placeholder="placeholder.company"
    />
    <FormKit
      type="file"
      label="comapny logo"
      name="image"
      validation="required"
      accept=".jpg,.png"
    />
    <FormKit
      type="text"
      label="location"
      name="location"
      validation="required"
      :placeholder="placeholder.location"
    />
    <FormKit
      type="select"
      :options="location_type"
      label="location type"
      name="loc_type"
      help="pick a location type (ex: remote)"
      validation="required"
      placeholder="Please Select"
    />
    <FormKit
      type="checkbox"
      label="I am currently working in this role"
      name="current_job"
      :value="current_role"
      @click="current_role = !current_role"
    />
    <FormKit type="group" name="start">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          label="start date"
          validation="required|date_val"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            step="1"
            class="number-pad"
            validation="required|min:1997"
            :value="current_year"
          />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" :disabled="current_role">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          label="end date"
          validation="date_val"
          placeholder="Please Select"
        />
        <div class="number-pad">
          <FormKit type="number" name="year" :value="current_year" step="1" validation="min:1997" />
        </div>
      </div>
    </FormKit>
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { employment_type, location_type, months } from '@/utils/formOptions.js'

import { useManageStore } from '@/stores/manage'
import { useManageForm } from '@/composables/manageForm.js'
import { useFormPlaceholder } from '@/composables/formPlaceholder'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const { displayMessage, disable, display, submitManageForm } = useManageForm()

const current_role = ref(false)
const current_year = new Date().getFullYear()

const submit = async (values) => {
  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.company + ' - ' + values.title.replace('/', '')
  }
  if (current_role.value) delete values.end
  try {
    submitManageForm(values)
    // console.log(values)
  } catch (error) {
    console.log(error.code, error)

    return
  }
}
</script>

<style lang="scss" scoped></style>
