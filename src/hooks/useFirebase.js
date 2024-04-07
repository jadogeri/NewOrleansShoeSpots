import {
  getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc, onSnapshot,
  query,where,orderBy, getDoc, updateDoc, setDoc
} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword
  
} from "firebase/auth"


export default ()  =>{

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books')


 return [db,colRef,getFirestore,collection,deleteDoc,getDocs,addDoc,doc, onSnapshot,query,where
         ,orderBy,getDoc,updateDoc,setDoc,auth,createUserWithEmailAndPassword, signOut,
        signInWithEmailAndPassword] }