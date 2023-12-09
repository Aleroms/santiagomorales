<template>
  <FormKit type="form" id="workExp-form" @submit="submit" :disabled="disable">
    <FormKit type="text" label="title" name="title" hint="job title" validation="required" />
    <FormKit
      type="text"
      label="id"
      name="id"
      hint="document ID on firebase"
      validation="required"
    />
    <FormKit
      type="select"
      :options="employment_type"
      label="employment type"
      placeholder="Please select"
      name="emp_type"
      validation="required"
    />
    <FormKit type="text" label="company name" name="company" validation="required" />
    <FormKit type="file" label="logo" help="company logo" name="logo" validation="required" />
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
      :value="current_role"
      @click="current_role = !current_role"
    />
    <div class="date-wrapper">
      <FormKit type="group" name="start" class="date-wrapper">
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
            name="day"
            :value="current_year"
            step="1"
            class="number-pad"
            :validation="`max:${current_year}`"
          />
        </div>
      </FormKit>
    </div>
    <div class="date-wrapper">
      <FormKit
        type="group"
        name="end"
        class="date-wrapper"
        :disabled="current_role"
        validation="required"
      >
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
import { filterForm } from '@/utils/filterForm.js'
import { submitForm, uploadFile2 } from '@/plugins/firebase'
import { useRouter } from 'vue-router'

const router = useRouter()

const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')

const current_role = ref(false)
const current_year = new Date().getFullYear()

const submit = async (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)

  try {
    //uploads and returns img url
    const imgURL = await uploadFile2(values.logo, `workExperience/${values.logo[0].name}`)

    //adds img url to form
    values.imgURL = imgURL

    //filter form for files
    const filteredForm = filterForm(values)

    //submit form
    await submitForm(filteredForm, 'workExperience', 'contentprogrammer')
  } catch (error) {
    console.log(error)
    displayMessage.value = 'error occurred'
    disable.value = false
  }
  //on successful submission
  displayMessage.value = 'submitted!'
  disable.value = false
  router.push('/manage')
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
