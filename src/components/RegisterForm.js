import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Padding, FontFamily, FontSize, Border } from "../../GlobalStyles";

const RegisterForm = memo(() => {
  return (
    <View>
      <View style={styles.username}>
        <Text style={styles.username1}>Username</Text>
        <View style={styles.input}>
          <View style={styles.mailFlexBox}>
            <Image
              style={styles.basiluserSolidIcon}
              contentFit="cover"
              source={require("../../assets/basilusersolid1.png")}
            />
            <Text style={[styles.enterYourUsername, styles.textSpaceBlock]}>
              Alex
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.emailSpaceBlock}>
        <Text style={styles.username1}>Email or Phone number</Text>
        <View style={[styles.mail, styles.mailBorder]}>
          <Image
            style={styles.icbaselineEmailIcon}
            contentFit="cover"
            source={require("../../assets/icbaselineemail7.png")}
          />
          <Text style={[styles.abcdefghijkgmai, styles.textSpaceBlock]}>
            abcdefg.hijk@gmai
          </Text>
        </View>
        <Text style={[styles.invalidEmailOr, styles.invalidEmailOrTypo]}>
          Invalid email or number
        </Text>
      </View>
      <View style={styles.emailSpaceBlock}>
        <Text style={styles.username1}>Password</Text>
        <View style={[styles.mail1, styles.mail1Layout]}>
          <View style={styles.mailFlexBox}>
            <Image
              style={styles.icbaselineEmailIcon}
              contentFit="cover"
              source={require("../../assets/icbaselineemail8.png")}
            />
            <Text style={[styles.text, styles.textSpaceBlock]}>****</Text>
          </View>
          <Image
            style={styles.icbaselineEmailIcon2}
            contentFit="cover"
            source={require("../../assets/icbaselineemail2.png")}
          />
        </View>
        <Text style={[styles.passwordMustBe, styles.invalidEmailOrTypo]}>
          Password must be at least 8 letters
        </Text>
      </View>
      <LinearGradient
        style={[styles.getStartedButton, styles.mail1Layout]}
        locations={[0, 0.27, 0.56, 0.83]}
        colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
      >
        <Text style={styles.getStarted}>Create Account</Text>
      </LinearGradient>
    </View>
  );
});

const styles = StyleSheet.create({
  textSpaceBlock: {
    marginLeft: 12,
    textAlign: "left",
    color: Color.colorGray_100,
  },
  mailBorder: {
    borderWidth: 1,
    borderColor: Color.colorRed_200,
    borderStyle: "solid",
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
  },
  invalidEmailOrTypo: {
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    marginTop: 4,
    textAlign: "left",
  },
  mail1Layout: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    width: 300,
    borderRadius: Border.br_3xs,
  },
  username1: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  basiluserSolidIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  enterYourUsername: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistRegular,
    marginLeft: 12,
  },
  mailFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    marginTop: 4,
    padding: Padding.p_smi,
    width: 300,
    backgroundColor: Color.colorWhitesmoke,
    overflow: "hidden",
    borderRadius: Border.br_3xs,
  },
  username: {
    justifyContent: "center",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmai: {
    fontFamily: FontFamily.urbanistRegular,
    marginLeft: 12,
    fontSize: FontSize.size_sm,
  },
  mail: {
    width: 301,
    height: 51,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorRed_200,
    borderStyle: "solid",
  },
  invalidEmailOr: {
    color: Color.colorRed_200,
  },
  emailSpaceBlock: {
    marginTop: 24,
    justifyContent: "center",
  },
  text: {
    letterSpacing: -0.6,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
  },
  icbaselineEmailIcon2: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  mail1: {
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: Color.colorRed_200,
    borderStyle: "solid",
    marginTop: 4,
    padding: Padding.p_smi,
    backgroundColor: Color.colorWhitesmoke,
  },
  passwordMustBe: {
    color: Color.colorRed_100,
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
});

export default RegisterForm;
