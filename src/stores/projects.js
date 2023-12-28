import { defineStore } from 'pinia'
import { getDocuments } from '@/plugins/firebase'
import { useStorage } from '@vueuse/core'

export const useProjectStore = defineStore('projectStore', {
  state: () => ({
    activeFramework: 'HTML/CSS',
    activeId: useStorage('activeId', ''),
    projects: useStorage('projects', []),
    isLoading: false,
    isPreview: true,
    isSwap: false
  }),
  actions: {
    setActive(framework) {
      this.activeFramework = framework
    },
    setActiveId(id) {
      this.activeId = id
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
    },
    navGuard(param_id) {
      if (this.projects.length < 1) return false
      return this.projects.some((item) => item.id === param_id)
    }
  },
  getters: {
    activeProjects: (state) => {
      const projs = state.projects.filter((item) => item.frameworkUsed === state.activeFramework)
      return state.isPreview ? projs.slice(0, 5) : projs
    },
    getProjectDetails: (state) => {
      return state.projects.find((project) => project.id === state.activeId) || null
    }
  }
})
