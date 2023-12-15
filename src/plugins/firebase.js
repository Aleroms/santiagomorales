import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  collection
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { getAuth, signOut, signInWithEmailAndPassword } from 'firebase/auth'

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
const resumeRef = ref(storage, 'resume.pdf')
const resumeURL = async () => {
  try {
    const url = await getDownloadURL(resumeRef)
    return url
  } catch (error) {
    console.log(error)
    throw error
  }
}

const signInUserWithEmailAndPassword = async (values) => {
  await signInWithEmailAndPassword(auth, values.email, values.password)
}
const logoutUser = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}
//depricate
const uploadFile = async (file, path) => {
  const fileRef = ref(storage, path)
  console.log('storage path', fileRef.fullPath)

  try {
    await uploadBytes(fileRef, file[0].file)
    const url = await getDownloadURL(fileRef)
    return url
  } catch (error) {
    console.log(error)
  }
}
//depricate
//uploads and returns imgURL . add to document before uploading
const uploadFile2 = async (file, path) => {
  const fileRef = ref(storage, path)
  console.log('storage path', fileRef.fullPath)

  try {
    await uploadBytes(fileRef, file[0].file)
    const url = await getDownloadURL(fileRef)
    return url
  } catch (error) {
    console.log(error)
  }
}

const uploadFile3 = async (file, storageId) => {
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
  const docRef = doc(db, collectionId, docId)
  await setDoc(docRef, form, { merge: true })
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
  uploadFile,
  uploadFile2,
  uploadFile3,
  submitForm,
  deleteDocument,
  deleteFile,
  getDocument,
  getDocuments,
  logoutUser,
  signInUserWithEmailAndPassword
}
