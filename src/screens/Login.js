import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import IPhoneWithNotch from "../components/IPhoneWithNotch";
import { FontFamily, FontSize, Padding, Color, Border } from "../../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.registerContent}>
        <View>
          <View style={styles.email}>
            <Text style={[styles.emailOrPhone, styles.emailTypo]}>
              Email or Phone number
            </Text>
            <View style={[styles.mail, styles.mailSpaceBlock]}>
              <Image
                style={styles.icbaselineEmailIcon}
                contentFit="cover"
                source={require("../../assets/icbaselineemail.png")}
              />
              <Text style={[styles.enterYourEmail, styles.emailTypo]}>
                Enter your email or number
              </Text>
            </View>
          </View>
          <View style={styles.password}>
            <Text style={[styles.emailOrPhone, styles.emailTypo]}>
              Password
            </Text>
            <View style={[styles.mail1, styles.mailSpaceBlock]}>
              <View style={styles.getStartedButtonFlexBox}>
                <Image
                  style={styles.icbaselineEmailIcon}
                  contentFit="cover"
                  source={require("../../assets/icbaselineemail1.png")}
                />
                <Text style={[styles.enterYourEmail, styles.emailTypo]}>
                  Enter password
                </Text>
              </View>
              <Image
                style={styles.icbaselineEmailIcon2}
                contentFit="cover"
                source={require("../../assets/icbaselineemail2.png")}
              />
            </View>
            <Text style={[styles.forgotPassword, styles.mailSpaceBlock]}>
              Forgot password ?
            </Text>
          </View>
          <LinearGradient
            style={[styles.getStartedButton, styles.getStartedButtonFlexBox]}
            locations={[0, 0.27, 0.56, 0.83]}
            colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
          >
            <Text style={[styles.getStarted, styles.signInTypo]}>Sign In</Text>
          </LinearGradient>
        </View>
        <Text style={[styles.orUseSocial, styles.emailTypo]}>
          or use social account
        </Text>
        <View style={styles.continueWithSocial}>
          <View style={styles.continueLayout}>
            <Image
              style={styles.icbaselineEmailIcon3}
              contentFit="cover"
              source={require("../../assets/icbaselineemail3.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.emailTypo]}>
              Continue with Google
            </Text>
          </View>
          <View style={[styles.continueWithTwitter, styles.continueLayout]}>
            <Image
              style={styles.icbaselineEmailIcon3}
              contentFit="cover"
              source={require("../../assets/icbaselineemail6.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.emailTypo]}>
              Continue with Twitter
            </Text>
          </View>
          <View style={[styles.continueWithTwitter, styles.continueLayout]}>
            <Image
              style={styles.icbaselineEmailIcon3}
              contentFit="cover"
              source={require("../../assets/icbaselineemail5.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.emailTypo]}>
              Continue with Facebook
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
      <Image
        style={styles.underlineIcon}
        contentFit="cover"
        source={require("../../assets/underline.png")}
      />
      <IPhoneWithNotch />
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  mailSpaceBlock: {
    marginTop: 4,
    width: 300,
  },
  getStartedButtonFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  signInTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  continueLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    flexDirection: "row",
    height: 50,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  emailOrPhone: {
    color: Color.colorGray_100,
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  enterYourEmail: {
    color: Color.colorGainsboro,
    marginLeft: 12,
  },
  mail: {
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  email: {
    justifyContent: "center",
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
    marginTop: 4,
    flexDirection: "row",
    height: 50,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.colorDeepskyblue_100,
    textAlign: "right",
    marginTop: 4,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  password: {
    marginTop: 24,
    justifyContent: "center",
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
  },
  getStartedButton: {
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    marginTop: 24,
    height: 50,
    width: 300,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  orUseSocial: {
    marginTop: 24,
    color: Color.colorGray_100,
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
  continueWithTwitter: {
    marginTop: 16,
  },
  continueWithSocial: {
    marginTop: 24,
  },
  registerContent: {
    top: 145,
    left: 30,
    alignItems: "center",
    position: "absolute",
  },
  signIn: {
    top: 81,
    left: 154,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.colorGray_100,
    position: "absolute",
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
