import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    activeFramework: 'HTML/CSS'
  }),
  actions: {
    setActive(id) {
      this.activeFramework = id
    }
  }
})
