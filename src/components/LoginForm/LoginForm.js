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
import { textInputChange } from "../../helpers/textInputChange";


let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }

const LoginForm = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(defaultData)
  
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
        <Text style={[styles.getStarted, styles.textTypo,{color:"blue"}]}>Sign In</Text>
  
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
                  <InputField label="Your Email" inputFieldStyle={styles.textInput} onChangeText={(input) => { textInputChange(input,set) }}
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
}

export default LoginForm



