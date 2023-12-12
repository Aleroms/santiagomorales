import { defineStore } from 'pinia'
import { getEditId } from '../utils/manageSelector'

//maybe hav navigationId?? so that activeId still is active??
//success, delete, error
export const useManageStore = defineStore('manageStore', {
  state: () => ({
    activeId: 'HomeForm',
    activeTitle: 'Home Page',
    editId: '',
    deleteId: '',
    displayMessage: '',
    isList: false,
    isEdit: false
  }),
  actions: {
    setActive(id, title, list) {
      this.activeId = id
      this.activeTitle = title
      this.isList = list
    },
    setMessage(code) {
      if (code === 'success') {
        //did user successfully edit form?
        if (this.isEdit) {
          this.displayMessage = 'successfully modified entry...'
        } else {
          this.displayMessage = 'successfully created new entry...'
        }
      } else if (code === 'delete') {
        this.displayMessage = 'Item successfully deleted from Firebase...'
      } else if (code == 'error') {
        this.displayMessage = 'handle error codes here'
      } else {
        this.displayMessage = 'error on server side. Please check manage.js...'
      }
    },
    addMore() {
      console.log('adding ', this.activeId, getEditId(this.activeId))
      this.isList = false
      this.activeId = getEditId(this.activeId)
    },
    edit(itemId) {
      console.log('edit item ', itemId, getEditId(this.activeId))
      this.isList = false
      this.activeId = getEditId(this.activeId)
      this.isEdit = true
    },
    deleteItem(deleteId) {
      console.log('deleting', deleteId)
      this.deleteId = deleteId
      this.activeId = 'ManageDelete'
      this.activeTitle = 'Delete item ' + deleteId
      this.isList = false
    },
    resetState() {
      this.activeId = 'HomeForm'
      this.activeTitle = 'Home Page'
      this.editId = ''
      this.deleteId = ''
      this.isList = false
    }
  },
  getters: {
    setComponent() {
      return this.isList ? 'ManageList' : this.activeId
    }
  }
})
