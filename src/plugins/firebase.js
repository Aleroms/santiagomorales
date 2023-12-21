import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  collection,
  updateDoc
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getAuth, signOut, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth'
import { useManageStore } from '../stores/manage'

// My portfolio web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyGrG_prhHETf7QqEKzQMuqgCNQBXKHXU',
  authDomain: 'santiago-morales.firebaseapp.com',
  projectId: 'santiago-morales',
  storageBucket: 'santiago-morales.appspot.com',
  messagingSenderId: '477173967547',
  appId: '1:477173967547:web:9c2ca905d5888015a8179e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app)

//resume
let resumeRef = ref(storage, 'resume.pdf')
const resumeURL = async () => {
  try {
    const url = await getDownloadURL(resumeRef)
    return url
  } catch (error) {
    console.log(error)
    throw error
  }
}
const setResumePath = (path) => {
  resumeRef = ref(storage, path)
}

const signInUserWithEmailAndPassword = async (values) => {
  await signInWithEmailAndPassword(auth, values.email, values.password)
}
const signInUserAnonymously = async () => {
  await signInAnonymously(auth)
}
const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

const modifyFileName = async (originalFileName, folderPath) => {
  let modifiedFileName = originalFileName
  let counter = 1

  // Check if the modified file name exists
  while (await checkFileExists(`${folderPath}/${modifiedFileName}`)) {
    counter++
    const [name, extension] = originalFileName.split('.')
    modifiedFileName = `${name}${counter}.${extension}`
  }
  return modifiedFileName
}

const checkFileExists = async (filePath) => {
  try {
    console.log(filePath, 'checkfileexist')
    const storageRef = ref(storage, filePath)
    await getDownloadURL(storageRef)
    return true // File exists
  } catch (error) {
    if (error.code === 'storage/object-not-found') {
      return false // File doesn't exist
    }
    throw error // Handle other errors
  }
}

const uploadFile3 = async (file, storageId) => {
  let fileName = file[0].name
  let filePath = `${storageId}/${fileName}`
  let fileRef = ref(storage, filePath)
  let fileURL
  console.log(file, fileName, filePath, fileRef)

  try {
    //if no error is thrown then file exists
    fileURL = await getDownloadURL(fileRef)

    //modify file values
    fileName = await modifyFileName(fileName, storageId)
    filePath = `${storageId}/${fileName}`
    fileRef = ref(storage, filePath)

    //upload modified file
    await uploadBytes(fileRef, file[0].file)
    fileURL = await getDownloadURL(fileRef)
    console.log(`File ${file[0].name} already exists. Uploaded as ${fileName}`)
  } catch (error) {
    // upload new file - file DNE
    await uploadBytes(fileRef, file[0].file)
    fileURL = await getDownloadURL(fileRef)
    console.log(`File ${fileName} uploaded successfully`)
  }

  return {
    name: fileName,
    path: filePath,
    url: fileURL
  }
}
const updateFile = async (file, storageId, editId) => {
  //check to see if the file already exists
  const prevFileDoc = await getDocument(storageId, editId)
  if (Object.keys(prevFileDoc.image).length !== 0 && prevFileDoc.image.path !== '') {
    await deleteFile(prevFileDoc.image.path)
  }

  const fileName = file[0].name
  const filePath = `${storageId}/${fileName}`
  const fileRef = ref(storage, filePath)
  console.log('storage path', fileRef.fullPath)

  await uploadBytes(fileRef, file[0].file)
  const fileURL = await getDownloadURL(fileRef)
  return {
    name: fileName,
    path: filePath,
    url: fileURL
  }
}

//deletes image from storage
const deleteFile = async (path) => {
  const fileRef = ref(storage, path)
  console.log('deleting file', fileRef.fullPath)
  try {
    await deleteObject(fileRef)
  } catch (error) {
    console.log(error)
  }
}

const submitForm = async (form, collectionId, docId) => {
  const manageStore = useManageStore()
  const docRef = doc(db, collectionId, docId)

  //update document or creates new document
  if (manageStore.isEdit) {
    await updateDoc(docRef, form)
  } else {
    await setDoc(docRef, form)
  }
}

const getDocument = async (collectionId, docId) => {
  const docRef = doc(db, collectionId, docId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : undefined
}

const getDocuments = async (collectionId) => {
  const query = await getDocs(collection(db, collectionId))
  const documents = []
  query.forEach((doc) => {
    documents.push(doc.data())
  })
  return documents
}

const deleteDocument = async (collectionId, docId) => {
  await deleteDoc(doc(db, collectionId, docId))
}

export {
  resumeURL,
  uploadFile3,
  updateFile,
  submitForm,
  deleteDocument,
  deleteFile,
  getDocument,
  getDocuments,
  setResumePath,
  logoutUser,
  signInUserWithEmailAndPassword,
  signInUserAnonymously
}
