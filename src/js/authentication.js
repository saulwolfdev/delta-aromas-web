import firebase from "firebase"
const provider = new firebase.auth.GoogleAuthProvider()

export const signIn=()=>firebase.auth().signInWithPopup(provider)
export const signOut=()=>firebase.auth().signOut()