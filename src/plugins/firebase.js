import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from 'firebase/storage'
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

//Storage ref for each folders
const skillsStorageRef = ref(storage, 'skills')
const projectsStorageRef = ref(storage, 'projects')
const workExperienceStorageRef = ref(storage, 'workExperience')
const activeLearningStorageRef = ref(storage, 'active-learning')
const educationStorageRef = ref(storage, 'education')
const certificatesStorageRef = ref(storage, 'certificates')

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
export {
  db,
  signInUserWithEmailAndPassword,
  logoutUser,
  skillsStorageRef,
  projectsStorageRef,
  workExperienceStorageRef,
  activeLearningStorageRef,
  educationStorageRef,
  certificatesStorageRef
}
