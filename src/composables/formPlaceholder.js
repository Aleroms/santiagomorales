//composable
import { ref, onMounted } from 'vue'
import { getDocument } from '@/plugins/firebase.js'
import { useManageStore } from '@/stores/manage.js'
import {
  educationPlaceholder,
  workExpPlaceholder,
  certificatePlaceholder,
  skillsPlaceholder,
  activeLearningPlaceholder,
  toolsPlaceholder,
  projectsPlaceholder
} from '@/utils/defaultManageForms.js'

function getPlaceholder(collectionId) {
  let ph = {}
  switch (collectionId) {
    case 'education':
      ph = educationPlaceholder
      break
    case 'workExperience':
      ph = workExpPlaceholder
      break
    case 'certificates':
      ph = certificatePlaceholder
      break
    case 'skills':
      ph = skillsPlaceholder
      break
    case 'activeLearning':
      ph = activeLearningPlaceholder
      break
    case 'tools':
      ph = toolsPlaceholder
      break
    case 'projects':
      ph = projectsPlaceholder
      break
  }
  return ph
}
export function useFormPlaceholder() {
  const manageStore = useManageStore()
  const placeholder = ref({})

  onMounted(async () => {
    try {
      if (manageStore.isEdit) {
        placeholder.value = await getDocument(manageStore.collectionId, manageStore.editId)
        console.log('edit mode', placeholder.value)
      } else {
        placeholder.value = getPlaceholder(manageStore.collectionId)
        console.log('new entry', placeholder.value)
      }
    } catch (error) {
      console.log(error)
    }
  })

  return { placeholder }
}
