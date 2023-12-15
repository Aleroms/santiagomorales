<template>
  <FormKit type="form" id="edu-form" @submit="submit" :disabled="disable">
    <FormKit
      type="text"
      label="school"
      name="school"
      validation="required"
      :placeholder="placeholder.school"
    />
    <FormKit
      type="file"
      label="school logo"
      name="image"
      validation="required"
      accept=".jpg,.png"
    />
    <FormKit
      type="select"
      :options="educationOptions"
      label="degree"
      name="degree"
      validation="required"
    />
    <FormKit
      type="text"
      label="field of study"
      name="field_of_study"
      :placeholder="placeholder.field_of_study"
      validation="required"
    />
    <FormKit type="group" name="start">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          label="start date"
          name="month"
          validation="required"
        />
        <div class="number-pad">
          <FormKit type="number" name="year" validation="required" step="1" />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          label="end date"
          name="month"
          validation="required"
        />
        <div class="number-pad">
          <FormKit type="number" name="year" validation="required" class="number-pad" />
        </div>
      </div>
    </FormKit>
    <FormKit
      type="textarea"
      name="activities"
      label="activities and societies"
      :placeholder="placeholder.activities"
      validation="required"
    />
    <FormKit
      type="textarea"
      name="description"
      label="description"
      :placeholder="placeholder.description"
      validation="required"
    />
  </FormKit>
  <div v-if="display">
    <p>{{ displayMessage }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { uploadFile3, submitForm, getDocument } from '@/plugins/firebase.js'
import { filterForm } from '@/utils/filterForm.js'
import { educationOptions, months } from '@/utils/formOptions'
import { useManageStore } from '@/stores/manage'
import { educationPlaceholder } from '@/utils/defaultManageForms.js'

const manageStore = useManageStore()

const disable = ref(false)
const displayMessage = ref(false)
const display = ref(false)
const placeholder = ref({})

const submit = async (values) => {
  console.log(values)

  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'

  if (manageStore.isEdit) {
    values.id = placeholder.value.id
  } else {
    values.id = values.school + ' - ' + values.field_of_study
  }

  try {
    const image = await uploadFile3(values.image, 'education')
    values.image = image

    //filter form for files
    const filteredForm = filterForm(values)
    await submitForm(filteredForm, 'education', filteredForm.id)
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    disable.value = false
    return
  }
  //on successfull submission
  manageStore.result('success')
}

onMounted(async () => {
  if (manageStore.isEdit) {
    placeholder.value = await getDocument('education', manageStore.editId)
    console.log('edit mode', placeholder.value)
  } else {
    placeholder.value = educationPlaceholder
  }
})
</script>

<style lang="scss" scoped></style>
