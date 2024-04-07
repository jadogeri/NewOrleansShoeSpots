import React,{useState} from "react";
import { Text, View ,TouchableOpacity} from "react-native";
import styles from "./styles";
import NavButton from "../../components/NavButton";
import NavText from "../../components/NavText";
import InputField from "../../components/InputField";
import { textInputChange } from "../../helpers/textInputChange";
import {passwordChangeHandler} from "../../helpers/passwordChangeHandler";
import { updateSecureEntry } from "../../helpers/updateSecureEntry";

let defaultData = { email: '', password: '', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }

const LoginForm = () => {
    const [data, setData] = useState(defaultData)

    return (
      <View>
        <View style={styles.email}>
          <Text style={[styles.emailOrPhone, styles.emailTypo]}>
            Email 
          </Text>
          <View style={styles.action}>        
            <InputField label="Your Email" inputFieldStyle={styles.textInput} onChangeText={(input) => { textInputChange(input, data,setData) }}
            leftIcon="email" leftIconColor={data.email.length !== 0 ?"blue": "black"} textColor={data.email.length !== 0 ?"blue": "black"} 
            leftIconStyle={{left:-5 }}
            
            />
          </View>         
        </View>
        <View style={styles.password}>
          <Text style={[styles.emailOrPhone, styles.emailTypo]}>
            Password
          </Text>
          <View style={styles.action}>
            <InputField label="Your Password" inputFieldStyle={[styles.textInput]} onChangeText={(input) => { passwordChangeHandler(input,data,setData) }}
              leftIcon="lock" leftIconColor={data.password.length > 8 ?"blue": "black"}  textColor={data.password.length > 8 ?"blue": "black"} 
              leftIconStyle={{left:-5 }} secureTextEntry={data.secureTextEntry} rightIcon={data.secureTextEntry?"eye-off" : "eye"}
              eyePressHandler={()=>updateSecureEntry(data,setData)}
              
              />
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

    );
}

export default LoginForm



