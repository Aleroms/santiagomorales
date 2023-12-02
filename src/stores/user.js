import { defineStore } from 'pinia'
import { signInUserWithEmailAndPassword, logoutUser } from '../plugins/firebase'
export const useUserStore = defineStore('userStore', {
  state: () => ({
    userLoggedIn: false
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
