import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { getDocument } from '@/plugins/firebase.js'

export const useProjectPageStore = defineStore('projectPageStore', {
  state: () => ({
    data: useSessionStorage('project', {}),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0)
          this.data = await getDocument('pageContent', 'projectsPage')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
