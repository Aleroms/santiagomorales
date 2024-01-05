import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { getDocument } from '@/plugins/firebase.js'

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    data: useStorage('data', {}),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        this.data = await getDocument('pageContent', 'homePage')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
