import { defineStore } from 'pinia'
import { signInUserWithEmailAndPassword, logoutUser } from '../plugins/firebase'
import { useStorage } from '@vueuse/core'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    userLoggedIn: useStorage('userLoggedIn', false)
  }),
  actions: {
    async login(values) {
      await signInUserWithEmailAndPassword(values)
      this.userLoggedIn = true
    },
    async logout() {
      await logoutUser()
      this.userLoggedIn = false
    }
  }
})
