import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { getDocuments } from '@/plugins/firebase.js'

export const useToolStore = defineStore('toolStore', {
  state: () => ({
    data: useSessionStorage('tools', []),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0) this.data = await getDocuments('tools')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
