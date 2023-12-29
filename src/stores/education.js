import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase.js'
export const useEducationStore = defineStore('educationStore', {
  state: () => ({
    isManage: true,
    isLoading: false,
    education: []
  }),
  actions: {
    async initialize() {
      this.isLoading = true
      try {
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
