import { signInWithCredential,GoogleAuthProvider, getAuth } from "firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
 import { app } from "../../App";
export const googleSignUp =  () => {
    alert("clicked")
    alert("pressed.......................................")

    GoogleSignin.configure({
        webClientId: '',
      });

     GoogleSigninSingleton.signIn()
     .then((res)=>{
        console.log(res)
        const {idToken} = res
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        signInWithCredential(auth,googleCredential);
        

     })

    // Create a Google credential with the token
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
 
        const provider = new GoogleAuthProvider(app);
        const auth = getAuth();
        console.log("app...................",app)

    signInWithCredential(auth,provider)
    .then((result)=>{
        alert("success")
        console.log(result);
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
    })
    .catch((error)=>{
        console.log(error)
        alert("failure")
    })
     
       try{
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential){
            console.error("Error in user Credential")
            return
        }
        const token = credential.accessToken;
        const user = result.user;
        console.log(user,token)
       
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
        
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.customData.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);

    }
  };