<template>
  <FormKit type="form" id="workExp-form" @submit="submit" :disabled="disable">
    <FormKit type="text" label="title" name="title" hint="job title" validation="required" />
    <FormKit
      type="select"
      :options="employment_type"
      label="employment type"
      placeholder="Please select"
      name="emp_type"
      validation="required"
    />
    <FormKit type="text" label="company name" name="company" />
    <FormKit type="file" label="logo" help="company logo" name="logo" />
    <FormKit
      type="select"
      :options="location_type"
      label="location type"
      name="loc_type"
      help="pick a location type (ex: remote)"
      placeholder="Please select"
      validation="required"
    />
    <FormKit
      type="checkbox"
      label="I am currently working in this role"
      name="current_job"
      @click="current_role = !current_role"
    />
    <div class="date-wrapper">
      <FormKit type="group" name="start" class="date-wrapper">
        <FormKit type="select" :options="months" name="month" label="start date" />
        <div class="number-pad">
          <FormKit
            type="number"
            name="day"
            :value="current_year"
            v-model="test"
            step="1"
            class="number-pad"
            :validation="`max:${current_year}`"
          />
        </div>
      </FormKit>
    </div>
    <div class="date-wrapper">
      <FormKit type="group" name="end" class="date-wrapper" :disabled="current_role">
        <FormKit type="select" :options="months" name="month" label="end date" />
        <div class="number-pad">
          <FormKit
            type="number"
            name="day"
            :value="current_year"
            step="1"
            :validation="`min:${current_year}`"
          />
        </div>
      </FormKit>
    </div>
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { employment_type, location_type, months } from '@/utils/formOptions.js'
const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')

const current_role = ref(false)
const current_year = new Date().getFullYear()
const test = ref(1)

const submit = (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)
}
</script>

<style lang="scss" scoped>
.date-wrapper {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.number-pad {
  margin-top: 1.4rem;
}
</style>
