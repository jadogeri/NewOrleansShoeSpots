import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import IPhoneWithNotch from "../components/IPhoneWithNotch";
import { Color, FontFamily, Padding, Border, FontSize } from "../../GlobalStyles";

const Register1 = () => {
  return (
    <View style={styles.register}>
      <View style={styles.registerContent}>
        <View>
          <View style={styles.username}>
            <Text style={[styles.username1, styles.usernameTypo]}>
              Username
            </Text>
            <View style={[styles.input, styles.mailSpaceBlock]}>
              <View style={styles.content}>
                <Image
                  style={styles.basiluserSolidIcon}
                  contentFit="cover"
                  source={require("../../assets/basilusersolid1.png")}
                />
                <Text style={[styles.enterYourUsername, styles.usernameTypo]}>
                  Alex
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.email}>
            <Text style={[styles.username1, styles.usernameTypo]}>
              Email or Phone number
            </Text>
            <View style={[styles.mail, styles.mailLayout]}>
              <Image
                style={styles.icbaselineEmailIcon}
                contentFit="cover"
                source={require("../../assets/icbaselineemail7.png")}
              />
              <Text style={[styles.abcdefghijkgmailcom, styles.usernameTypo]}>
                abcdefg.hijk@gmail.com
              </Text>
            </View>
          </View>
          <View style={styles.email}>
            <Text style={[styles.password1, styles.textFlexBox]}>Password</Text>
            <View style={[styles.mail1, styles.mailLayout]}>
              <View style={styles.content}>
                <Image
                  style={styles.icbaselineEmailIcon}
                  contentFit="cover"
                  source={require("../../assets/icbaselineemail8.png")}
                />
                <Text style={[styles.text, styles.textFlexBox]}>
                  *************
                </Text>
              </View>
              <Image
                style={styles.icbaselineEmailIcon2}
                contentFit="cover"
                source={require("../../assets/icbaselineemail2.png")}
              />
            </View>
          </View>
          <LinearGradient
            style={[styles.getStartedButton, styles.mailLayout]}
            locations={[0, 0.27, 0.56, 0.83]}
            colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
          >
            <Text style={styles.getStarted}>Create Account</Text>
          </LinearGradient>
        </View>
        <Text style={[styles.orUseSocial, styles.usernameTypo]}>
          or use social account
        </Text>
        <View style={styles.continueWithSocial}>
          <View style={styles.continueLayout}>
            <Image
              style={styles.basiluserSolidIcon}
              contentFit="cover"
              source={require("../../assets/icbaselineemail3.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.password1Typo]}>
              Continue with Google
            </Text>
          </View>
          <View style={[styles.continueWithTwitter, styles.continueLayout]}>
            <Image
              style={styles.basiluserSolidIcon}
              contentFit="cover"
              source={require("../../assets/icbaselineemail6.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.password1Typo]}>
              Continue with Twitter
            </Text>
          </View>
          <View style={[styles.continueWithTwitter, styles.continueLayout]}>
            <Image
              style={styles.basiluserSolidIcon}
              contentFit="cover"
              source={require("../../assets/icbaselineemail5.png")}
            />
            <Text style={[styles.continueWithGoogle1, styles.password1Typo]}>
              Continue with Facebook
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.createAccount, styles.textFlexBox]}>
        Create Account
      </Text>
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
  usernameTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.urbanistRegular,
  },
  mailSpaceBlock: {
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
  },
  mailLayout: {
    height: 50,
    flexDirection: "row",
    width: 300,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  textFlexBox: {
    letterSpacing: -0.6,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  password1Typo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  continueLayout: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_49xl,
    height: 50,
    flexDirection: "row",
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    alignItems: "center",
  },
  username1: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  basiluserSolidIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  enterYourUsername: {
    marginLeft: 12,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 300,
    borderRadius: Border.br_3xs,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
  },
  username: {
    justifyContent: "center",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmailcom: {
    marginLeft: 12,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  mail: {
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
  },
  email: {
    marginTop: 24,
    justifyContent: "center",
  },
  password1: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  text: {
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 12,
    fontSize: FontSize.size_sm,
  },
  icbaselineEmailIcon2: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail1: {
    justifyContent: "space-between",
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  getStartedButton: {
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    marginTop: 24,
    justifyContent: "center",
    overflow: "hidden",
  },
  orUseSocial: {
    marginTop: 24,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  continueWithGoogle1: {
    color: Color.colorBlack,
    marginLeft: 16,
    textAlign: "left",
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
  createAccount: {
    top: 81,
    left: 120,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register1;
