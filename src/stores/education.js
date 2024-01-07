import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase.js'
import { useSessionStorage } from '@vueuse/core'
export const useEducationStore = defineStore('educationStore', {
  state: () => ({
    isManage: true,
    isLoading: false,
    education: useSessionStorage('edu', [])
  }),
  actions: {
    async initialize() {
      this.isLoading = true
      try {
        if (Object.keys(this.education).length === 0)
          this.education = await getDocuments('education')
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    setAboutPage() {
      this.isManage = false
    },
    setManagePage() {
      this.isManage = true
    }
  }
})
