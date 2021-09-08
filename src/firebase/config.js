import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxMjjprwo8sHH9vj3_SjjpAPKqop2qSvQ",
    authDomain: "vue-learning-eda8a.firebaseapp.com",
    projectId: "vue-learning-eda8a",
    storageBucket: "vue-learning-eda8a.appspot.com",
    messagingSenderId: "572012194101",
    appId: "1:572012194101:web:6be6891cf278a41093047c"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore , timeStamp}