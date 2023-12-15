import { uploadFile3, submitForm } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage.js'
import { filterForm } from '@/utils/filterForm.js'
import { ref } from 'vue'

export function useManageForm() {
  const manageStore = useManageStore()
  const disable = ref(false)
  const display = ref(false)
  const displayMessage = ref('')

  const submitManageForm = async (values) => {
    disable.value = true
    displayMessage.value = 'submitting...'
    display.value = true
    console.log(values)

    try {
      const image = await uploadFile3(values.image, manageStore.collectionId)
      values.image = image

      //filter form for files
      const filteredForm = filterForm(values)
      await submitForm(filteredForm, manageStore.collectionId, filteredForm.id)
    } catch (error) {
      manageStore.result(error)
      disable.value = false
      throw error
    }
    //on successfull submission
    manageStore.result('success')
    
    // Returning reactive properties directly from the setup function
    return { disable, displayMessage, display }
  }

  return { disable, displayMessage, display, submitManageForm }
}
