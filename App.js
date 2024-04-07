const Stack = createNativeStackNavigator();
import * as React from "react";
import { useFonts } from "expo-font";

import Navigation from "./src/routes/navigation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase/firebase";
import useFirebase from "./src/hooks/useFirebase";
const App = () => {
  console.log("*********************initialize firebase *******************==== ",initializeApp(firebaseConfig))
  const [db] = useFirebase();
  console.log("**********8db instance*************")
  console.log("*****************database*******************************",db)
  alert(JSON.stringify(db))

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
