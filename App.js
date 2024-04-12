
import * as React from "react";
import { useFonts } from "expo-font";


import Navigation from "./src/routes/navigation";

import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase/firebase";
//import useFirebase from "./src/hooks/useFirebase";
import { getAuth } from "firebase/auth";
let app;
const App = () => {
  console.log("*********************initialize firebase *******************==== ")
  console.log(firebaseConfig)
   app = initializeApp(firebaseConfig);
  console.log(app)
  const auth = getAuth()

  // auth.onAuthStateChanged(user =>{
  //   console.log("**************************************this is the current user*******************",user)
  //   if(user){
  //     alert("user logged in")
  //   }else{
  //     alert("user logged out")
  //   }
  // })
  


  //const [db] = useFirebase();
  console.log("**********8db instance*************")
 // console.log("",db)
 // alert(JSON.stringify(db))

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
    "Rajdhani-SemiBold": require("./assets/fonts/Rajdhani-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <Navigation />
    </>
  );
};
export default App;

/**
 * import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 */



export {app}


