import {
   getFirestore, collection
  //, getDocs,
  // addDoc, deleteDoc, doc, onSnapshot,
  // query,where,orderBy, getDoc, updateDoc, setDoc
} from 'firebase/firestore'
import {
  getAuth,
  //  signOut, updateCurrentUser,
  // updatePassword, updatePhoneNumber, updateProfile, signInWithEmailAndPassword,
  // verifyBeforeUpdateEmail, deleteUser, getAdditionalUserInfo, sendEmailVerification,
  // sendPasswordResetEmail, signInWithPopup,  GoogleAuthProvider,


} from "firebase/auth"


export default ()  =>{

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books')


 return [ db,colRef,auth ] 
}
