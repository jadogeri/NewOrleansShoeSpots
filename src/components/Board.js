import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";

const Board = memo(() => {
  return (
    <View style={[styles.board, styles.boardLayout]}>
      <View style={[styles.boardContainer, styles.boardLayout]} />
      <LinearGradient
        style={[styles.getStartedButton, styles.mailFlexBox]}
        locations={[0, 0.27, 0.56, 0.83]}
        colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
      >
        <Text style={styles.getStarted}>Send Code</Text>
      </LinearGradient>
      <View style={styles.content}>
        <View style={styles.forgotPasswordParent}>
          <Text style={[styles.forgotPassword, styles.emailOrPhoneClr]}>
            Forgot Password
          </Text>
          <Text style={[styles.enterYourEmail, styles.emailTypo]}>
            Enter your email or password
          </Text>
        </View>
        <View style={styles.email}>
          <Text style={[styles.emailOrPhone, styles.emailTypo]}>
            Email or Phone number
          </Text>
          <View style={[styles.mail, styles.mailFlexBox]}>
            <Image
              style={styles.icbaselineEmailIcon}
              contentFit="cover"
              source={require("../../assets/icbaselineemail7.png")}
            />
            <Text style={[styles.abcdefghijkgmailcom, styles.emailTypo]}>
              abcdefg.hijk@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  boardLayout: {
    height: 364,
    width: 360,
    left: 0,
    position: "absolute",
  },
  mailFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    width: 300,
  },
  emailOrPhoneClr: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  emailTypo: {
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_sm,
  },
  boardContainer: {
    top: 0,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    backgroundColor: Color.colorWhite,
  },
  getStarted: {
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  getStartedButton: {
    top: 273,
    left: 30,
    height: 41,
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  forgotPassword: {
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  enterYourEmail: {
    color: Color.colorDarkgray_100,
    textAlign: "center",
    marginTop: 16,
    width: 300,
    fontSize: FontSize.size_sm,
  },
  forgotPasswordParent: {
    alignItems: "center",
  },
  emailOrPhone: {
    color: Color.colorGray_100,
    textAlign: "left",
  },
  icbaselineEmailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  abcdefghijkgmailcom: {
    marginLeft: 12,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  mail: {
    backgroundColor: Color.colorWhitesmoke,
    height: 50,
    padding: Padding.p_smi,
    marginTop: 4,
    alignItems: "center",
  },
  email: {
    marginTop: 24,
    justifyContent: "center",
  },
  content: {
    top: 63,
    left: 27,
    height: 160,
    position: "absolute",
  },
  board: {
    top: 436,
  },
});

export default Board;
