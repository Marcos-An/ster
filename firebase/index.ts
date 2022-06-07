import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyAl1jVGas5jv5z3rFlNMjHOBhC1fOwlo8o',
  authDomain: 'ster-29249.firebaseapp.com',
  projectId: 'ster-29249',
  storageBucket: 'ster-29249.appspot.com',
  messagingSenderId: '699780735708',
  appId: '1:699780735708:web:968228df245ed50edc0a19',
  measurementId: 'G-P816C98S8Q'
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
