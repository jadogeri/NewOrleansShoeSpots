import  React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Password from "../../components/Password";
import IPhoneWithNotch from "../../components/IPhoneWithNotch";
import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";
import InputField from "../../components/InputField";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";
import LoginForm from "../../components/LoginForm/LoginForm";

let defaultData = { email: '', password: '',confirmPassword: '', username: '', secureTextEntry: true, check_textInputChange: false,
                    confirmSecureTextEntry: true, check_textInputChange: false, hash: '' }
const LoginChangePassword = () => {
  const auth = getAuth();
  const navigation = useNavigation();
  const [data, setData] = useState(defaultData)
  const [user, setUser] = useState({});
  return (

    <View style={styles.loginChangePassword}>
 
      <View style={[styles.board, styles.boardLayout]}>
        <View style={[styles.boardContainer, styles.boardLayout]} />
        <LinearGradient
          style={[styles.getStartedButton1, styles.getFlexBox]}
          locations={[0, 0.27, 0.56, 0.83]}
          colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
        >
          <Text style={[styles.getStarted1, styles.getTypo]}>
            Reset Password
          </Text>
        </LinearGradient>
        {/* <LoginForm /> */}
















       
























        <View style={styles.content}>
          <View style={styles.resetPasswordParent}>
            <Text style={[styles.resetPassword, styles.signInTypo]}>
              Reset Password
            </Text>
            <Text style={[styles.youCanChange, styles.youCanChangeSpaceBlock]}>
              You can change password.
            </Text>
          </View>
          <Password passwordInput="Password" />
          <Password passwordInput="Confirm Password" />
        </View>
      </View>
      <Image
        style={styles.underlineIcon}
        contentFit="cover"
        source={require("../../../assets/underline.png")}
      />
      {/* <IPhoneWithNotch /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  registerContentPosition: {
    left: 30,
    position: "absolute",
  },
  mailSpaceBlock: {
    marginTop: 4,
    width: 300,
  },
  emailOrPhoneTypo: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
  },
  getFlexBox: {
    backgroundColor: "transparent",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_104xl,
    flexDirection: "row",
    width: 300,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  getTypo: {
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  orUseSocialTypo: {
    fontFamily: FontFamily.rajdhaniRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  continueSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  youCanChangeSpaceBlock: {
    marginTop: 16,
    width: 300,
  },
  signInTypo: {
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  boardLayout: {
    height: 456,
    width: 360,
    left: 0,
    position: "absolute",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmailcom: {
    marginLeft: 12,
  },
  mail: {
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  email: {
    justifyContent: "center",
  },
  icbaselineEmailParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icbaselineEmailIcon2: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail1: {
    justifyContent: "space-between",
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.colorDeepskyblue_100,
    textAlign: "right",
    marginTop: 4,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: -0.6,
    fontSize: FontSize.size_sm,
  },
  password: {
    marginTop: 24,
    justifyContent: "center",
  },
  getStarted: {
    fontFamily: FontFamily.rajdhaniSemiBold,
  },
  getStartedButton: {
    marginTop: 24,
    height: 50,
    backgroundColor: "transparent",
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_104xl,
  },
  orUseSocial: {
    marginTop: 24,
    color: Color.colorGray_100,
    fontFamily: FontFamily.rajdhaniRegular,
  },
  icbaselineEmailIcon3: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  continueWithGoogle1: {
    color: Color.colorBlack,
    marginLeft: 16,
  },
  continueWithGoogle: {
    width: 300,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
  },
  continueWithTwitter: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  continueWithSocial: {
    marginTop: 24,
  },
  registerContent: {
    top: 145,
    alignItems: "center",
  },
  signIn: {
    top: 81,
    left: 154,
    fontFamily: FontFamily.poppinsMedium,
    letterSpacing: -0.6,
    fontWeight: "500",
    position: "absolute",
  },
  mask: {
    backgroundColor: Color.colorGray_200,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  boardContainer: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    top: 0,
    height: 456,
    backgroundColor: Color.colorWhite,
  },
  getStarted1: {
    fontFamily: FontFamily.urbanistSemiBold,
  },
  getStartedButton1: {
    top: 365,
    height: 41,
    left: 30,
    position: "absolute",
  },
  resetPassword: {
    fontFamily: FontFamily.urbanistMedium,
  },
  youCanChange: {
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorDarkgray_100,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    marginTop: 16,
  },
  resetPasswordParent: {
    alignItems: "center",
  },
  content: {
    top: 76,
    left: 27,
    height: 160,
    position: "absolute",
  },
  board: {
    top: 344,
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  loginChangePassword: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhite,
  },
});

export default LoginChangePassword;
