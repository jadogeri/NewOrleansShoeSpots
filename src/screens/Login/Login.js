import React,{useState} from "react";
import { Text, View ,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import styles from "./styles";
import ScreenTitle from "../../components/ScreenTitle";
import NavButton from "../../components/NavButton";
import SocialAccountButton from "../../components/SocialAccountButton";
import NavText from "../../components/NavText";
import { useNavigation } from "@react-navigation/core";
import InputField from "../../components/InputField";

let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }

const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(defaultData)
  const [eyeOpen, setEyeOpen] = useState(false)

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



  return (
    <View style={styles.login}>
      <View style={styles.registerContent}>
        <View>
  
        













          <View style={styles.email}>
            <Text style={[styles.emailOrPhone, styles.emailTypo]}>
              Email 
            </Text>
            <View style={styles.action}>
                {/* <MaterialIcons name='email' color='#05375a' size={20}
                /> */}
                {/* <TextInput 
                  label="Your Email" style={styles.textInput} 
                  left={<TextInput.Icon icon="email" color={data.email.length > 1?"blue": "black"} />}
                  autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                /> */}
                <InputField label="Your Email" inputFieldStyle={styles.textInput} onChangeText={(input) => { textInputChange(input) }}
                 leftIcon="email" leftIconColor={data.email.length !== 0 ?"blue": "black"} textColor={data.email.length !== 0 ?"blue": "black"} 
                 leftIconStyle={{left:-5 }}
                 
                 />
{/*                 
                {data.check_textInputChange ?
                    <View animation='bounceIn'>
                        <Feather name='check-circle' color='brown' size={20} />
                    </View>
                    : null} */}
            </View>         
          </View>














          <View style={styles.password}>
            <Text style={[styles.emailOrPhone, styles.emailTypo]}>
              Password
            </Text>
            <View style={styles.action}>
                {/* <MaterialIcons name='email' color='#05375a' size={20}
                /> */}
                {/* <TextInput 
                  label="Your Email" style={styles.textInput} 
                  left={<TextInput.Icon icon="email" color={data.email.length > 1?"blue": "black"} />}
                  autoCapitalize="none" onChangeText={(input) => { textInputChange(input) }}
                /> */}
                <InputField label="Your Password" inputFieldStyle={[styles.textInput]} onChangeText={(input) => { passwordChangeHandler(input) }}
                 leftIcon="lock" leftIconColor={data.password.length > 8 ?"blue": "black"}  textColor={data.password.length > 8 ?"blue": "black"} 
                 leftIconStyle={{left:-5 }} secureTextEntry={data.secureTextEntry} rightIcon={data.secureTextEntry?"eye-off" : "eye"}
                 eyePressHandler={()=>updateSecureEntry()}
                 
                 />
{/*                 
                {data.check_textInputChange ?
                    <View animation='bounceIn'>
                        <Feather name='check-circle' color='brown' size={20} />
                    </View>
                    : null} */}
            </View>         
                       <NavText title="Change password ?" routeName="ChangePassword" textStyle={[styles.forgotPassword, styles.mailSpaceBlock]}
              />
              <NavText title="Forgot password ?" routeName="ForgotPassword" textStyle={[styles.forgotPassword, styles.mailSpaceBlock,{top:-22, left:-180}]}
              />   
             
          </View>


 





          
          
          <NavButton routeName="GetStarted"  buttonStyle={[styles.getStartedButton, styles.getStartedButtonFlexBox]}
            textStyle={[styles.getStarted, styles.signInTypo]} title="Sign In"
          />         
        </View>
        
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
      {/* <Image
        style={styles.underlineIcon}
        contentFit="cover"
        source={require("../../../assets/underline.png")}
      /> */}
      {/* <IPhoneWithNotch /> */}
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