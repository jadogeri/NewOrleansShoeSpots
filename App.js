import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "",
    iosClientId: "",
    webClientId: "",
  });

  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        // setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  return (
    <View style={styles.container}>
      {!userInfo ? (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <View style={styles.card}>
          {userInfo?.picture && (
            <Image source={{ uri: userInfo?.picture }} style={styles.image} />
          )}
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Text style={styles.text}>
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text style={styles.text}>Name: {userInfo.name}</Text>
          {/* <Text style={styles.text}>{JSON.stringify(userInfo, null, 2)}</Text> */}
        </View>
      )}
      <Button
        title="remove local store"
        onPress={async () => await AsyncStorage.removeItem("@user")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});


// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [accessToken, setAccessToken] = React.useState(null);
//   const [user, setUser] = React.useState(null);
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     // clientId: "your cliend id goes here!",
//     // iosClientId: "your cliend id goes here!",
//     androidClientId: "519830430367-48242cauq4dvk83m91aptmebm7vcpq4u.apps.googleusercontent.com"
//   });

//   React.useEffect(() => {
//     if(response?.type === "success") {
//       setAccessToken(response.authentication.accessToken);
//       accessToken && fetchUserInfo();
//     }
//   }, [response, accessToken])

//   async function fetchUserInfo() {
//     let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
//       headers: { Authorization: `Bearer ${accessToken}` }
//     });
//     const useInfo = await response.json();
//     setUser(useInfo);
//   }

//   const ShowUserInfo = () => {
//     if(user) {
//       return(
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           <Text style={{fontSize: 35, fontWeight: 'bold', marginBottom: 20}}>Welcome</Text>
//           <Image source={{uri: user.picture}} style={{width: 100, height: 100, borderRadius: 50}} />
//           <Text style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</Text>
//         </View>
//       )
//     }
//   }  

//   return (
//     <View style={styles.container}>
//       {user && <ShowUserInfo />}
//       {user === null &&
//           <>
//           <Text style={{fontSize: 35, fontWeight: 'bold'}}>Welcome</Text>
//           <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20, color: 'gray'}}>Please login</Text>
//         <TouchableOpacity
//           disabled={!request}
//           onPress={() => {
//             promptAsync();
//             }} 
//         >
//           <Image source={require("./assets/favicon.png")} style={{width: 40, height: 40}} />
//         </TouchableOpacity>
//         </>
//       }
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//**********************************************************************//**********************************************************************
//**********************************************************************
//**********************************************************************
//**********************************************************************
//********************************************************************** */
// import * as React from "react";
// import { useFonts } from "expo-font";


// import Navigation from "./src/routes/navigation";

// import { initializeApp } from "firebase/app";
// //import { firebaseConfig } from "./src/config/firebase/firebase";
// //import useFirebase from "./src/hooks/useFirebase";
// import { getAuth } from "firebase/auth";
// let app;
// const App = () => {
//   console.log("*********************initialize firebase *******************==== ")
//   // console.log(firebaseConfig)
//   //  app = initializeApp(firebaseConfig);
//   // console.log(app)
//   const auth = getAuth()

//   // auth.onAuthStateChanged(user =>{
//   //   console.log("**************************************this is the current user*******************",user)
//   //   if(user){
//   //     alert("user logged in")
//   //   }else{
//   //     alert("user logged out")
//   //   }
//   // })
  


//   //const [db] = useFirebase();
//   console.log("**********8db instance*************")
//  // console.log("",db)
//  // alert(JSON.stringify(db))

//   const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

//   const [fontsLoaded, error] = useFonts({
//     "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
//     "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
//     "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
//     "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
//     "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//     "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
//     "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
//     "Rajdhani-SemiBold": require("./assets/fonts/Rajdhani-SemiBold.ttf"),
//     "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
//   });

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <>
//       <Navigation />
//     </>
//   );
// };
// export default App;

/**
 * import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
 */



//export {app}


