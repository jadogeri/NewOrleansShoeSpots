import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import IPhoneWithNotch from "../components/IPhoneWithNotch";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import NavButton from "../components/NavButton";

const GetStarted = () => {
  
  return (
    <View style={{flex:1,heigth:"100%",marginLeft:5,resizeMode :"auto"}}>
      <Image
        style={[styles.underlineIcon]}
        contentFit="cover"
        source={require("../../assets/underline.png")}
      />
        <NavButton style1={styles.getStartedButton} style2={styles.textFlexBox}
                 textStyle={styles.getStarted1} title="Get Started" routeName="Login"/> 
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={styles.loremIpsumIs}>Lorem ipsum is a placeholder</Text>
        <Text style={styles.loremipsum}>LoremIpsum</Text>
      </View>
      <View style={styles.gallery}>
        <View style={[styles.hotelImage2, styles.hotelSpaceBlock]}>
          <Image
            style={styles.subtractIcon}
            contentFit="cover"
            source={require("../../assets/subtract.png")}
          />
        </View>
        <View style={[styles.hotelImage3, styles.hotelSpaceBlock]}>
          <Image
            style={styles.subtractIcon}
            contentFit="cover"
            source={require("../../assets/subtract1.png")}
          />
        </View>
        <View style={[styles.hotelImage1, styles.hotelSpaceBlock]}>
          <Image
            style={styles.subtractIcon2}
            contentFit="cover"
            source={require("../../assets/subtract2.png")}
          />
        </View>
      </View>
      <IPhoneWithNotch />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  hotelSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  underlineIcon: {
    top: 790,
    left: 135,
    maxHeight: "100%",
    width: 91,
    position: "absolute",
  },
  getStarted1: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  getStartedButton: {
    top: 589,
    left: 40,
    borderRadius: Border.br_3xs,
    width: 300,
    height: 50,
    paddingHorizontal: Padding.p_104xl,
    paddingVertical: Padding.p_sm,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  loremIpsumIs: {
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  loremipsum: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.urbanistRegular,
    color: "#404040",
    marginTop: 4,
    textAlign: "left",
  },
  text: {
    top: 468,
    left: 26,
  },
  subtractIcon: {
    width: 180 *0.7,
    height: 180 *0.7,
  },
  hotelImage2: {
    left: 0,
    top: 34,
    padding: Padding.p_3xs,
  },
  hotelImage3: {
    left: 234,
    top: 34,
    padding: Padding.p_3xs,
  },
  subtractIcon2: {
    width: 248 *0.7,
    height: 248 *0.7,
  },
  hotelImage1: {
    top: 0,
    left: 84,
  },
  gallery: {
    top: 171,
    //left: -37,
    width: 434,
    height: 268,
    position: "absolute",
  },
  getStarted: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default GetStarted;
