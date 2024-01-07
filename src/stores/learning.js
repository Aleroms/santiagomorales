import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase.js'
import { useSessionStorage } from '@vueuse/core'
export const useLearningStore = defineStore('learningStore', {
  state: () => ({
    isLoading: false,
    activeItem: {},
    learning: useSessionStorage('activeLearning', [])
  }),
  actions: {
    async initialize() {
      this.isLoading = true
      try {
        if (Object.keys(this.learning).length === 0)
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
