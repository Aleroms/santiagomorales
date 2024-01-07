import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { getDocument } from '@/plugins/firebase.js'

export const useAboutStore = defineStore('aboutStore', {
  state: () => ({
    data: useSessionStorage('about', {}),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0)
          this.data = await getDocument('pageContent', 'aboutPage')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
