const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./src/screens/GetStarted";
import Register from "./src/screens/Register";
import Login from "./src/screens/Login";
import LoginActive from "./src/screens/LoginActive";
import Register1 from "./src/screens/Register1";
import RegisterVerification1 from "./src/screens/RegisterVerification1";
import RegisterSuccess from "./src/screens/RegisterSuccess";
import LoginChangePassword from "./src/screens/LoginChangePassword";
import RegisterValidation from "./src/screens/RegisterValidation";
import LoginForgotPassword from "./src/screens/LoginForgotPassword";
import RegisterVerification from "./src/screens/RegisterVerification";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
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
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginActive"
              component={LoginActive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={Register1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterVerification1"
              component={RegisterVerification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterSuccess"
              component={RegisterSuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginChangePassword"
              component={LoginChangePassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterValidation"
              component={RegisterValidation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginForgotPassword"
              component={LoginForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterVerification"
              component={RegisterVerification}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
