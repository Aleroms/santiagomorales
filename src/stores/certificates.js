import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase.js'
import { useSessionStorage } from '@vueuse/core'
export const useCertificateStore = defineStore('certificateStore', {
  state: () => ({
    data: useSessionStorage('certificates', []),
    isReady: false
  }),
  actions: {
    async initialize() {
      try {
        if (Object.keys(this.data).length === 0)
          this.data = await getDocuments('certificates')
      } catch (error) {
        console.log(error)
      } finally {
        this.isReady = true
      }
    },
  }
})
