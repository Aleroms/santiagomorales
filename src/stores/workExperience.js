import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { getDocuments } from '@/plugins/firebase.js'

export const useWorkExpStore = defineStore('workExpStore', {
  state: () => ({
    data: useSessionStorage('workExp', []),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0) this.data = await getDocuments('education')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
