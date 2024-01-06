import { uploadFile3, updateFile, submitForm } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage.js'
import { filterForm } from '@/utils/filterForm.js'
import { ref } from 'vue'

export function useManageForm() {
  const manageStore = useManageStore()
  const disable = ref(false)
  const display = ref(false)
  const displayMessage = ref('')

  const submitUpdate = async (values) => {
    //only update doc if there is only id

    if (Object.keys(values).length > 1) {
      //upload image if it exists
      if (Object.keys(values.image).length !== 0 && Object.keys(values.image[0]).length > 0) {
        const image = await updateFile(values.image, manageStore.collectionId, manageStore.editId)
        values.image = image
      } else {
        delete values.image
      }
      //upload thumbnail if it exists
      if (
        Object.keys(values.thumbnail).length !== 0 &&
        Object.keys(values.thumbnail[0]).length > 0
      ) {
        const thumbnail = await updateFile(
          values.thumbnail,
          manageStore.collectionId,
          manageStore.editId
        )
        values.thumbnail = thumbnail
      } else {
        delete values.thumbnail
      }
      //upload fallback if it exists
      if (Object.keys(values.fallback).length !== 0 && Object.keys(values.fallback[0]).length > 0) {
        const fallback = await updateFile(
          values.fallback,
          manageStore.collectionId,
          manageStore.editId
        )
        values.fallback = fallback
      } else {
        delete values.fallback
      }

      //if id is only thing in values, don't bother submitting form
      if (Object.keys(values).length > 1) {
        await submitForm(values, manageStore.collectionId, values.id)
      } else {
        throw 'error/empty-form'
      }
    } else {
      //hands control back to user for resubmission
      throw 'error/empty-form'
    }
  }
  const submitCreate = async (values) => {
    const image = await uploadFile3(values.image, manageStore.collectionId)
    values.image = image
    const thumbnail = await uploadFile3(values.thumbnail, manageStore.collectionId)
    values.thumbnail = thumbnail
    const fallback = await uploadFile3(values.fallback, manageStore.collectionId)
    values.fallback = fallback
    console.log(values.image, values.thumbnail, values.fallback)
    await submitForm(values, manageStore.collectionId, values.id)
  }

  const submitManageForm = async (values) => {
    displayMessage.value = 'submitting...'
    disable.value = true
    display.value = true
    // console.log(values)

    try {
      if (manageStore.isEdit) {
        //removes undefined values
        const filteredValues = filterForm(values)
        await submitUpdate(filteredValues)
      } else {
        await submitCreate(values)
      }
    } catch (error) {
      console.log(error)

      if (error === 'error/empty-form') {
        displayMessage.value = '>:[ submitted empty form !! Try again.'
        disable.value = false
      } else {
        manageStore.result(error)
        disable.value = false
        throw error
      }
      return
    }
    //on successfull submission
    manageStore.result('success')

    // Returning reactive properties directly from the setup function
    return { disable, displayMessage, display }
  }

  return { disable, displayMessage, display, submitManageForm }
}
