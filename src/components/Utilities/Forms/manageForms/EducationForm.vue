<template>
  <FormKit type="form" id="edu-form" @submit="submit" :disabled="disable">
    <FormKit
      type="text"
      label="school"
      name="school"
      placeholder="Ex: UC Irvine"
      :validation="manageStore.required"
      v-model="placeholder.school"
    />
    <FormKit
      type="file"
      label="school logo"
      name="image"
      :validation="manageStore.required"
      accept=".jpg,.png"
    />
    <FormKit
      type="select"
      :options="educationOptions"
      label="degree"
      name="degree"
      :validation="manageStore.required"
      placeholder="Please Select"
      v-model="placeholder.degree"
    />
    <FormKit
      type="text"
      label="field of study"
      name="field_of_study"
      v-model="placeholder.field_of_study"
      :validation="manageStore.required"
      placeholder="Ex: Computer Science"
    />
    <FormKit type="group" name="start" v-model="placeholder.start">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          label="start date"
          name="month"
          :validation="`${manageStore.required}|date_val`"
          placeholder="Please Select "
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            :validation="`${manageStore.required}|min:1997`"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <FormKit type="group" name="end" v-model="placeholder.end">
      <div class="form-date-wrapper">
        <FormKit
          type="select"
          :options="months"
          label="end date"
          name="month"
          :validation="`${manageStore.required}|date_val`"
          placeholder="Please Select "
        />
        <div class="number-pad">
          <FormKit
            type="number"
            name="year"
            validation="required|min:1997"
            class="number-pad"
            :value="new Date().getFullYear()"
            step="1"
          />
        </div>
      </div>
    </FormKit>
    <FormKit
      type="textarea"
      name="activities"
      label="activities and societies"
      v-model="placeholder.activities"
      :validation="manageStore.required"
      placeholder="Ex: VGDC"
    />
    <FormKit
      type="textarea"
      name="description"
      label="description"
      placeholder="description..."
      v-model="placeholder.description"
      :validation="manageStore.required"
    />
  </FormKit>
  <div v-if="display">
    <p>{{ displayMessage }}</p>
  </div>
</template>

<script setup>
import { educationOptions, months } from '@/utils/formOptions'
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
    values.id = values.school + ' - ' + values.field_of_study
  }

  try {
    submitManageForm(values)
  } catch (error) {
    console.log(error.code, error)
  }
}
</script>

<style lang="scss" scoped></style>
