import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
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

//Storage ref for each folders
// const miscStorageRef = ref(storage, 'misc')
// const skillsStorageRef = ref(storage, 'skills')
// const projectsStorageRef = ref(storage, 'projects')
// const workExperienceStorageRef = ref(storage, 'workExperience')
// const activeLearningStorageRef = ref(storage, 'active-learning')
// const educationStorageRef = ref(storage, 'education')
// const certificatesStorageRef = ref(storage, 'certificates')

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
const uploadFile = async (file, path) => {
  const fileRef = ref(storage, path)
  console.log('storage path', fileRef.fullPath)
  
  try {
    await uploadBytes(fileRef, file[0].file)
  } catch (error) {
    console.log(error)
  }
}

//uploads and returns imgURL . add to document before uploading
const uploadFile2 = async (file, path) => {
  const fileRef = ref(storage, path)
  console.log('storage path', fileRef.fullPath)

  try {
    await uploadBytes(fileRef, file[0].file)
    const url = await getDownloadURL(resumeRef)
    return url
  } catch (error) {
    console.log(error)
  }
}
//depricate - make sure home and about are working then remove function
const submitPageContentForm = async (form, docId) => {
  const docRef = doc(db, 'pageContent', docId)
  await setDoc(docRef, form, { merge: true })
}

const submitForm = async (form, collection, docId) => {
  const docRef = doc(db, collection, docId)
  await setDoc(docRef, form, { merge: true })
}

const getPageContent = async (docId) => {
  const pageContentRef = doc(db, 'pageContent', docId)
  const docSnap = await getDoc(pageContentRef)
  return docSnap.exists() ? docSnap.data() : undefined
}

const getDocument = async (collection, docId) => {
  const docRef = doc(db, collection, docId)
  const docSnap = await getDoc(docRef)
  return docSnap.exists() ? docSnap.data() : undefined
}

export {
  resumeURL,
  uploadFile,
  uploadFile2,
  submitForm,
  getDocument,
  getPageContent,
  submitPageContentForm,
  logoutUser,
  signInUserWithEmailAndPassword
}
