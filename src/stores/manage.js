import { defineStore } from 'pinia'
import { getEditId, getCollectionId } from '../utils/manageSelector'
import { getDocuments } from '@/plugins/firebase.js'

export const useManageStore = defineStore('manageStore', {
  state: () => ({
    activeId: 'HomeForm',
    collectionId: '',
    activeTitle: 'Home Page',
    previousTitle: 'Home Page',
    navId: 'HomeForm',
    editId: '',
    deleteId: '',
    displayMessage: '',
    required: 'required',
    listDocuments: [],
    isList: false,
    isEdit: false,
    isDelete: false,
    isLoading: false
  }),
  actions: {
    async setActive(id, title, list) {
      this.activeId = id
      this.previousTitle = this.activeId
      this.navId = id
      this.activeTitle = title
      this.isList = list

      //retreive Documents from Firebase
      if (this.isList) {
        this.collectionId = getCollectionId(this.activeId)
        this.isLoading = true
        try {
          this.listDocuments = await getDocuments(this.collectionId)
          //console.log(this.listDocuments)
        } catch (error) {
          console.log(error)
        } finally {
          this.isLoading = false
        }
      }
    },
    setMessage(code) {
      if (code === 'success') {
        //did user successfully edit form?
        if (this.isEdit) {
          this.displayMessage = 'successfully modified entry...'
          this.editResolution()
        } else {
          this.displayMessage = 'successfully created new entry...'
        }
      } else if (code === 'delete') {
        this.displayMessage = 'Item successfully deleted from Firebase...'
      } else {
        this.displayMessage = code.message
      }
    },
    addMore() {
      //console.log('adding ', this.activeId, getEditId(this.activeId))
      this.previousTitle = this.activeTitle
      this.activeTitle = 'Add new entry'
      this.isList = false
      this.activeId = getEditId(this.activeId)
      this.required = 'required'
    },
    edit(itemId) {
      //console.log('edit item ', itemId, getEditId(this.activeId))
      this.previousTitle = this.activeTitle
      this.activeTitle = 'Edit item ' + itemId
      this.isList = false
      this.editId = itemId
      this.activeId = getEditId(this.activeId)
      this.isEdit = true
      this.required = ''
    },
    deleteItem(deleteId) {
      //console.log('deleting', deleteId)
      this.previousTitle = this.activeTitle
      this.deleteId = deleteId
      this.activeId = 'ManageDelete'
      this.activeTitle = 'Delete item ' + deleteId
      this.isList = false
      this.isDelete = true
    },
    deleteResolution() {
      this.setMessage('delete')
      this.setActive('ManageAlert', 'Successfully deleted!', false)
      this.isDelete = false
    },
    editResolution() {
      this.isEdit = false
      this.editId = ''
      this.required = 'required'
    },
    result(status) {
      if (status === 'success') {
        this.setMessage('success')
        this.setActive('ManageAlert', 'Form Submitted', false)
      } else if (status === 'delete') {
        this.setMessage('delete')
        this.setActive('ManageAlert', 'Form deleted', false)
        this.isDelete = false
      } else if (typeof status === 'object') {
        //this is error section
        this.setMessage(status)
        this.setActive('ManageAlert', 'Error', false)
      }
    },
    resetState() {
      this.activeId = 'HomeForm'
      this.activeTitle = 'Home Page'
      this.previousTitle = this.activeTitle
      this.navId = 'HomeForm'
      this.displayMessage = ''
      this.editId = ''
      this.deleteId = ''
      this.isList = false
      this.isDelete = false
      this.isEdit = false
    },
    goBack() {
      this.activeId = this.navId
      this.activeTitle = this.previousTitle
      this.isList = true
      this.isEdit = false
      this.isDelete = false
      this.required = 'required'
    }
  },
  getters: {
    setComponent() {
      return this.isList ? 'ManageList' : this.activeId
    },
    getDeleteDocument() {
      const foundItem = this.listDocuments.find((item) => item.id === this.deleteId)
      //console.log('found', foundItem)
      return foundItem
    }
  }
})
