import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB4nVf4uEb1rONd7STu7CcB6jXBfiS96Cg",
    authDomain: "trabalhometro-7fe88.firebaseapp.com",
    projectId: "trabalhometro-7fe88",
    storageBucket: "trabalhometro-7fe88.appspot.com",
    messagingSenderId: "1023467311047",
    appId: "1:1023467311047:web:a732942d34d39ce1a513e2",
    measurementId: "G-L0XTPT9E2B"
})

export const auth = app.auth()
export const firestore = app.firestore()
export default app
