import { defineStore } from 'pinia'

export const useManageStore = defineStore('manageStore', {
  state: () => ({
    activeId: 'HomeForm',
    activeTitle: 'Home Page',
    editId: '',
    deleteId: '',
    isList: false
  }),
  actions: {
    setActive(id, title, list) {
      this.activeId = id
      this.activeTitle = title
      this.isList = list
    }
  },
  getters: {
    setComponent() {
      return this.isList ? 'ManageList' : this.activeId
    }
  }
})
