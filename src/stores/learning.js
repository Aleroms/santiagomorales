import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase.js'
export const useLearningStore = defineStore('learningStore', {
  state: () => ({
    isLoading: false,
    activeItem: {},
    learning: []
  }),
  actions: {
    async initialize() {
      this.isLoading = true
      try {
        this.learning = await getDocuments('activeLearning')
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
        this.activeItem = this.learning.at(0)
      }
    },
    setActive(id) {
      this.activeItem = this.activeItem = this.learning.find((item) => item.id === id)
    }
  }
})
