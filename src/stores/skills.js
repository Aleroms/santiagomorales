import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { getDocument } from '@/plugins/firebase.js'

export const useSkillsStore = defineStore('skillsStore', {
  state: () => ({
    data: useSessionStorage('skills', {}),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0)
          this.data = await getDocument('pageContent', 'skillsPage')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    }
  }
})
