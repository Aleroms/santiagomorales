<template>
  <p v-if="display">{{ displayMessage }}</p>
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
      type="text"
      label="id"
      name="id"
      hint="document ID on firebase"
      validation="required"
      :placeholder="placeholder.id"
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
    <FormKit type="file" label="logo" help="company logo" name="logo" validation="required" />
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
      :placeholder="placeholder.loc_type"
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
            name="year"
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
            name="year"
            :value="current_year"
            step="1"
            :validation="`max:${current_year}`"
          />
        </div>
      </FormKit>
    </div>
  </FormKit>
  <p v-if="display">{{ displayMessage }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { employment_type, location_type, months, workExpDefault } from '@/utils/formOptions.js'
import { filterForm } from '@/utils/filterForm.js'
import { submitForm, uploadFile2 } from '@/plugins/firebase'
import { getDocument } from '@/plugins/firebase.js'

const props = defineProps({
  docId: {
    type: String
  }
})
const placeholder = ref({})
const startDate = ref({})
const endDate = ref({})

const disable = ref(false)
const display = ref(false)
const displayMessage = ref('')

const current_role = ref(false)
const current_year = new Date().getFullYear()

const emit = defineEmits(['formSubmitted'])

const submit = async (values) => {
  disable.value = true
  display.value = true
  displayMessage.value = 'submitting...'
  console.log(values)

  try {
    //uploads and returns img url
    const imgURL = await uploadFile2(values.logo, `workExperience/${values.logo[0].name}`)
    const imgPath = `workExperience/${values.logo[0].name}`

    //adds img url & name to form
    values.imgURL = imgURL
    values.imgPath = imgPath

    //filter form for files
    const filteredForm = filterForm(values)

    //submit form
    await submitForm(filteredForm, 'workExperience', filteredForm.id)
  } catch (error) {
    console.log(error)
    displayMessage.value = 'error occurred'
    disable.value = false
  }
  //on successful submission
  displayMessage.value = 'submitted!'
  disable.value = false
  emit('formSubmitted')
}
onMounted(async () => {
  //
  console.log(workExpDefault)
  console.log(props.docId.length, props.docId)
  try {
    //no docId passed - must be creating new form
    if (props.docId.length !== 0)
      placeholder.value = await getDocument('workExperience', props.docId)
    else {
      placeholder.value = workExpDefault
    }
    startDate.value = placeholder.value.start
    endDate.value = placeholder.value.end
    console.log(startDate, endDate)
  } catch (error) {
    console.log(error)
  }
})
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
