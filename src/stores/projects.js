import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    activeFramework: 'HTML/CSS',
    projects: [],
    isLoading: false,
    isPreview: true
  }),
  actions: {
    setActive(id) {
      this.activeFramework = id
    },
    showComplete() {
      this.isPreview = false
    },
    showPreview() {
      this.isPreview = true
    },
    async initialize() {
      this.isLoading = true
      try {
        this.projects = await getDocuments('projects')
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  },
  getters: {
    activeProjects: (state) => {
      const projs = state.projects.filter((item) => item.frameworkUsed === state.activeFramework)
      return state.isPreview ? projs.slice(0, 5) : projs
    }
  }
})
