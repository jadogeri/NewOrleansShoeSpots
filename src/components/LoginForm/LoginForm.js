import React,{useState} from "react";
import { Text, View ,TouchableOpacity} from "react-native";
import styles from "./styles";
import NavButton from "../../components/NavButton";
import NavText from "../../components/NavText";
import InputField from "../../components/InputField";
import { textInputChange } from "../../helpers/textInputChange";
import {passwordChangeHandler} from "../../helpers/passwordChangeHandler";
import { updateSecureEntry } from "../../helpers/updateSecureEntry";
import { useNavigation } from "@react-navigation/core";
import useFirebase from "../../hooks/useFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";

let defaultData = { email: 'joekadama@hotmail.com', password: '@Awolfscry1', username: '', secureTextEntry: true, check_textInputChange: false, hash: '' }

const LoginForm = () => {
    const [data, setData] = useState(defaultData)
    const navigation = useNavigation();
    const [db,colRef,getFirestore,collection,deleteDoc,getDocs,addDoc,doc, onSnapshot,
      query,where,orderBy,updateDoc,getDoc,setDoc,auth,GoogleAuthProvider,signInWithPopup,
      createUserWithEmailAndPassword,signOut 
    
    
    ] = useFirebase();
  console.log("database instance",JSON.stringify(db));
  console.log("typeof ===",typeof signInWithEmailAndPassword);


  const loginHandler = () =>{
  console.log("email === ",data.email, " password === ",data.password)
  //alert("email === " +data.email + " password === " +data.password)

  signInWithEmailAndPassword(auth, data.email,data.password)
  .then((cred)=>{console.log("cred ",typeof cred,"user ",typeof cred.user,cred.user), " logged in";//setUser(cred) 
  navigation.navigate("Dashboard")
} )
  .catch((e)=>{console.log("************************error*************************",e)})
  
  }

 

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
          textStyle={[styles.getStarted, styles.signInTypo]} title="Sign In" onPress={loginHandler}
      />         
    </View>

    );
}

export default LoginForm



