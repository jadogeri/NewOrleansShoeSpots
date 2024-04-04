import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SubmitFormButton from "../components/SubmitFormButton";
import IPhoneWithNotch from "../components/IPhoneWithNotch";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";

const RegisterVerification1 = () => {
  return (
    <View style={styles.registerVerification}>
      <View style={styles.content}>
        <Image
          style={styles.checkMarkIcon}
          contentFit="cover"
          source={require("../../assets/check-mark.png")}
        />
        <View style={styles.verificationTitle}>
          <Text style={[styles.verificationCode, styles.verificationTypo]}>
            Verification Code
          </Text>
          <View style={styles.weHaveSentTheCodeToParent}>
            <Text style={[styles.weHaveSent, styles.weHaveSentTypo]}>
              We have sent the code to
            </Text>
            <Text style={[styles.abcdefghijkgmailcom, styles.weHaveSentTypo]}>
              abcdefg.hijk@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.verificationCode1}>
          <View style={styles.verificationContainerLayout}>
            <View
              style={[
                styles.verificationCodeContainer,
                styles.formkitarrowleftIconPosition,
              ]}
            >
              <View style={styles.filled1Layout} />
            </View>
            <Text style={styles.text}>8</Text>
          </View>
          <View style={[styles.filled1, styles.filled1Layout]}>
            <Text style={styles.text1}>
              <Text style={styles.text2}>7</Text>
              <Text style={styles.text3}>|</Text>
            </Text>
          </View>
          <View
            style={[
              styles.verificationCodeContainer2,
              styles.verificationContainerLayout,
            ]}
          >
            <View style={styles.filled1Layout} />
          </View>
          <View
            style={[
              styles.verificationCodeContainer2,
              styles.verificationContainerLayout,
            ]}
          >
            <View style={styles.filled1Layout} />
          </View>
          <View
            style={[
              styles.verificationCodeContainer2,
              styles.verificationContainerLayout,
            ]}
          >
            <View style={styles.filled1Layout} />
          </View>
        </View>
        <SubmitFormButton
          propFontFamily="Urbanist-SemiBold"
          propFontFamily1="Urbanist-Regular"
          propFontWeight="600"
          propFontFamily2="Urbanist-SemiBold"
        />
      </View>
      <View style={styles.navbar}>
        <Image
          style={[
            styles.formkitarrowleftIcon,
            styles.formkitarrowleftIconPosition,
          ]}
          contentFit="cover"
          source={require("../../assets/formkitarrowleft.png")}
        />
        <Text style={[styles.verification, styles.verificationTypo]}>
          Verification
        </Text>
      </View>
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
  verificationTypo: {
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  weHaveSentTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  formkitarrowleftIconPosition: {
    left: 0,
    position: "absolute",
  },
  filled1Layout: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_3xs,
    height: 56,
    width: 54,
  },
  verificationContainerLayout: {
    height: 56,
    width: 54,
  },
  checkMarkIcon: {
    width: 122,
    height: 122,
  },
  verificationCode: {
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistMedium,
  },
  weHaveSent: {
    color: Color.colorGainsboro,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
  },
  abcdefghijkgmailcom: {
    fontFamily: FontFamily.urbanistRegular,
    color: Color.colorGray_100,
  },
  weHaveSentTheCodeToParent: {
    marginTop: 8,
    alignItems: "center",
  },
  verificationTitle: {
    marginTop: 48,
    alignItems: "center",
  },
  verificationCodeContainer: {
    top: 0,
    height: 56,
    width: 54,
    flexDirection: "row",
  },
  text: {
    top: 10,
    left: 19,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.colorGray_100,
    fontWeight: "500",
    position: "absolute",
  },
  text2: {
    color: Color.colorGray_100,
  },
  text3: {
    color: "#4babf8",
  },
  text1: {
    fontSize: 20,
    letterSpacing: -0.8,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  filled1: {
    borderStyle: "solid",
    borderColor: "#5fb6fb",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verificationCodeContainer2: {
    flexDirection: "row",
  },
  verificationCode1: {
    width: 300,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 48,
  },
  content: {
    top: 155,
    left: 29,
    alignItems: "center",
    position: "absolute",
  },
  formkitarrowleftIcon: {
    top: 5,
    width: 24,
    height: 14,
    overflow: "hidden",
  },
  verification: {
    left: 110,
    top: 0,
    textAlign: "left",
    color: Color.colorGray_100,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.urbanistMedium,
    position: "absolute",
  },
  navbar: {
    top: 80,
    left: 27,
    width: 190,
    height: 19,
    position: "absolute",
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  registerVerification: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default RegisterVerification1;
