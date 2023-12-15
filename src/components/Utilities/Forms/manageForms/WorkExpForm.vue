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
      :placeholder="placeholder.emp_type"
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
    />
    <FormKit
      type="checkbox"
      label="I am currently working in this role"
      name="current_job"
      :value="current_role"
      @click="current_role = !current_role"
    />
    <FormKit type="group" name="start" class="date-wrapper">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          name="month"
          label="start date"
          validation="required"
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            step="1"
            class="number-pad"
            :validation="`max:${current_year}`"
          />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" :disabled="current_role" validation="required">
      <div class="form-date-wrapper">
        <FormKit type="select" :options="months" name="month" label="end date" />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            :value="current_year"
            step="1"
            :validation="`max:${current_year}`"
          />
        </div>
      </div>
    </FormKit>
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { employment_type, location_type, months } from '@/utils/formOptions.js'
import { filterForm } from '@/utils/filterForm.js'
import { submitForm, uploadFile3 } from '@/plugins/firebase'
import { useManageStore } from '@/stores/manage'
import { useFormPlaceholder } from '@/composables/formPlaceholder'

const manageStore = useManageStore()

const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')
const { placeholder } = useFormPlaceholder()

const current_role = ref(false)
const current_year = new Date().getFullYear()

const submit = async (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)

  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.company + ' - ' + values.title.replace('/', '')
  }

  try {
    const image = await uploadFile3(values.image, 'workExperience')
    values.image = image

    //filter form for files
    const filteredForm = filterForm(values)
    await submitForm(filteredForm, 'workExperience', filteredForm.id)
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
