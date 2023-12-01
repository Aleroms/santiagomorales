import { defineStore } from 'pinia'

export const useCollapsedMenuStore = defineStore('collapsedMenu', {
  state: () => ({
    menuOpen: false
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
})
