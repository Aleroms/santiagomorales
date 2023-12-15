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
import { ref } from 'vue'
import { months } from '@/utils/formOptions.js'
import { useManageStore } from '@/stores/manage.js'
import { submitForm, uploadFile3 } from '@/plugins/firebase.js'
// import { certificatePlaceholder } from '@/utils/defaultManageForms.js'
import { filterForm } from '@/utils/filterForm.js'
import { useFormPlaceholder } from '@/composables/formPlaceholder'

const manageStore = useManageStore()

const { placeholder } = useFormPlaceholder()
const displayMessage = ref('')
const disable = ref(false)
const display = ref(false)

const submit = async (values) => {
  disable.value = true
  displayMessage.value = 'submitting...'
  display.value = true
  console.log(values)

  values.id = manageStore.isEdit ? placeholder.value.id : values.issuer + ' - ' + values.name

  try {
    const image = await uploadFile3(values.image, manageStore.collectionId)
    values.image = image

    //filter form for files
    const filteredForm = filterForm(values)
    await submitForm(filteredForm, 'certificates', filteredForm.id)
  } catch (error) {
    console.log(error.code, error)
    manageStore.result(error)
    disable.value = false
    return
  }

  //on successful submission
  manageStore.result('success')
}
</script>

<style lang="scss" scoped></style>
