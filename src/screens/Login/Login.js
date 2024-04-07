import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ScreenTitle from "../../components/ScreenTitle";
import SocialAccountButton from "../../components/SocialAccountButton";
import { useNavigation } from "@react-navigation/core";
import LoginForm from "../../components/LoginForm/LoginForm";


const Login = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.login}>
      <View style={styles.registerContent}>
      <Text style={[styles.getStarted, styles.textTypo,{color:"blue"}]}>Sign In</Text>
      <LoginForm />     
      
        <Text style={[styles.orUseSocial, styles.emailTypo]}>
          
          <Text style={{color:"blue"}} onPress={()=>navigation.navigate("Register")}>Create account </Text> 
          or use social account
        </Text>
        <View style={styles.continueWithSocial}>
     
          <SocialAccountButton containerStyle={[styles.continueLayout]}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail3.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Google"
          />      
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail6.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Twitter"
          />        
          <SocialAccountButton containerStyle={[styles.continueWithTwitter, styles.continueLayout]}
            imageStyle={styles.icbaselineEmailIcon3} source={require("../../../assets/icbaselineemail5.png")}
            textStyle={[styles.continueWithGoogle1, styles.emailTypo]} title="Continue with Facebook"
          />
        </View>
      </View>
      <ScreenTitle style={[styles.signIn, styles.signInTypo]} title="Sign in"/>    
    </View>
  );
};



export default Login;


/**
 * 
 * import React, { useContext, useState } from "react";
import styles from "./SignInStyles";
import { View, Text, Button, Image, TouchableOpacity, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { StatusBar } from "react-native";
import { Context as AuthContext } from '../../context/AuthContext'

let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }
const SignInScreen = ({ navigation }) => {

    const { signin, state ,token} = useContext(AuthContext)

    const [data, setData] = useState(defaultData)

    const handleLogin = async (email, password) => {
        try {
            console.log(`email=== ${email} , password=== ${password}`)
            signin(email,password)
            if(state.isLoggedIn)
                navigation.navigate('Home')
            //await AsyncStorage.setItem('token', JSON.parse(response.data))
            //console.log(JSON.parse(response.data))

        } catch (err) {
            console.log(err, 'an error')
        }

    }
    const textInputChange = (val) => {
        if (val.trim().length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const passwordChangeHandler = (value) => {
        setData({
            ...data,
            password: value
        })
    }

    const updateSecureEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry })
    }



    return <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle="light-content" />
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
        </View>
        <Animatable.View style={styles.footer} animation='fadeInUpBig'>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <MaterialIcons name='email' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Email" style={styles.textInput}
                    autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                />
                {data.check_textInputChange ?
                    <Animatable.View animation='bounceIn'>
                        <Feather name='check-circle' color='brown' size={20} />
                    </Animatable.View>
                    : null}
            </View>
            <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

            <View style={styles.action}>
                <FontAwesome name='lock' color='#05375a' size={20}
                />
                <TextInput placeholder="Your Password" style={styles.textInput} display='none'
                    autoCapitalize="none" secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(value) => { passwordChangeHandler(value) }}

                />
                <TouchableOpacity onPress={updateSecureEntry}>
                    {data.secureTextEntry ?
                        <Feather name='eye-off' color='brown' size={20} />
                        :
                        <Feather name='eye' color='brown' size={20} />}
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => handleLogin(data.email, data.password)}

                    style={[styles.signIn, { backgroundColor: 'brown' }]}>
                    <Text style={{ color: 'white' }}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('signup')}}
                style={[styles.signIn, { borderColor: 'brown', borderWidth: 1, marginTop: 15 }]}>
                <Text style={{ color: 'brown' }}>Sign Up</Text>
            </TouchableOpacity>
        </Animatable.View>

    </View>
}

export default SignInScreen;
 */


/**
 * 
 * 
 * //will replace


  export default styles;
 */