const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "../screens/GetStarted/GetStarted";
//import Register from "../screens/Register/Register";
import Login from "../screens/Login/Login";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword"
import ChangePassword from "../screens/ChangePassword/ChangePassword";
// import LoginActive from "../screens/LoginActive/LoginActive";
// import Register1 from "../screens/Register1/Register1";
// import RegisterVerification1 from "../screens/RegisterVerification1/RegisterVerification1";
// import RegisterSuccess from "../screens/RegisterSuccess/RegisterSuccess";
// import LoginChangePassword from "../screens/LoginChangePassword/LoginChangePassword";
// import RegisterValidation from "../screens/RegisterValidation/RegisterValidation";
// import LoginForgotPassword from "../screens/LoginForgotPassword/LoginForgotPassword";
// import RegisterVerification from "../screens/RegisterVerification/RegisterVerification";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Navigation = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

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
            {/* <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
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
            /> */}
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default Navigation;
