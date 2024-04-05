// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import SubmitFormButton from "../../components/SubmitFormButton";
// import IPhoneWithNotch from "../../components/IPhoneWithNotch";
// import { FontFamily, FontSize, Color, Border, Padding } from "../../../GlobalStyles";

// const RegisterSuccess = () => {
//   return (
//     <View style={styles.registerSuccess}>
//       <View style={styles.content}>
//         <Image
//           style={styles.checkMarkIcon}
//           contentFit="cover"
//           source={require("../../assets/check-mark.png")}
//         />
//         <View style={styles.verificationTitle}>
//           <Text style={[styles.verificationCode, styles.verificationTypo]}>
//             Verification Code
//           </Text>
//           <View style={styles.weHaveSentTheCodeToParent}>
//             <Text style={[styles.weHaveSent, styles.weHaveSentTypo]}>
//               We have sent the code to
//             </Text>
//             <Text style={[styles.abcdefghijkgmailcom, styles.weHaveSentTypo]}>
//               abcdefg.hijk@gmail.com
//             </Text>
//           </View>
//         </View>
//         <View style={styles.verificationCode1}>
//           <View style={styles.verificationContainerLayout}>
//             <View
//               style={[
//                 styles.verificationCodeContainer,
//                 styles.formkitarrowleftIconPosition,
//               ]}
//             >
//               <View
//                 style={[
//                   styles.verificationCodeContainer1,
//                   styles.verificationContainerLayout,
//                 ]}
//               />
//             </View>
//             <Text style={[styles.text, styles.verificationTypo]}>8</Text>
//           </View>
//           <View
//             style={[
//               styles.verificationCodeContainer2,
//               styles.verificationContainerLayout,
//             ]}
//           >
//             <View
//               style={[
//                 styles.verificationCodeContainer1,
//                 styles.verificationContainerLayout,
//               ]}
//             />
//           </View>
//           <View
//             style={[
//               styles.verificationCodeContainer4,
//               styles.verificationContainerLayout,
//             ]}
//           >
//             <View
//               style={[
//                 styles.verificationCodeContainer1,
//                 styles.verificationContainerLayout,
//               ]}
//             />
//           </View>
//           <View
//             style={[
//               styles.verificationCodeContainer4,
//               styles.verificationContainerLayout,
//             ]}
//           >
//             <View
//               style={[
//                 styles.verificationCodeContainer1,
//                 styles.verificationContainerLayout,
//               ]}
//             />
//           </View>
//           <View
//             style={[
//               styles.verificationCodeContainer4,
//               styles.verificationContainerLayout,
//             ]}
//           >
//             <View
//               style={[
//                 styles.verificationCodeContainer1,
//                 styles.verificationContainerLayout,
//               ]}
//             />
//           </View>
//         </View>
//         <SubmitFormButton
//           propFontFamily="Rajdhani-SemiBold"
//           propFontFamily1="Poppins-Regular"
//           propFontWeight="unset"
//           propFontFamily2="Poppins-Regular"
//         />
//       </View>
//       <View style={[styles.navbar, styles.navbarPosition]}>
//         <Image
//           style={[
//             styles.formkitarrowleftIcon,
//             styles.formkitarrowleftIconPosition,
//           ]}
//           contentFit="cover"
//           source={require("../../assets/formkitarrowleft.png")}
//         />
//         <Text style={[styles.verification, styles.verificationTypo]}>
//           Verification
//         </Text>
//       </View>
//       <View style={styles.mask} />
//       <View style={[styles.board, styles.boardLayout]}>
//         <View style={[styles.boardContainer, styles.boardLayout]} />
//         <LinearGradient
//           style={styles.getStartedButton}
//           locations={[0, 0.27, 0.56, 0.83]}
//           colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
//         >
//           <Text style={styles.getStarted}>Go to Homepage</Text>
//         </LinearGradient>
//         <Text style={styles.registerSuccessfully}>Register Successfully</Text>
//         <Text
//           style={[styles.congratulationsYourAccount, styles.navbarPosition]}
//         >
//           Congratulations! Your account created successfully. Now you can get
//           amazing experience with our services.
//         </Text>
//         <Image
//           style={styles.icbaselineEmailIcon}
//           contentFit="cover"
//           source={require("../../assets/icbaselineemail9.png")}
//         />
//       </View>
//       <Image
//         style={styles.underlineIcon}
//         contentFit="cover"
//         source={require("../../assets/underline.png")}
//       />
//       <IPhoneWithNotch />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   verificationTypo: {
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//   },
//   weHaveSentTypo: {
//     letterSpacing: -0.5,
//     fontSize: FontSize.size_xs,
//     textAlign: "left",
//   },
//   formkitarrowleftIconPosition: {
//     left: 0,
//     position: "absolute",
//   },
//   verificationContainerLayout: {
//     height: 56,
//     width: 54,
//   },
//   navbarPosition: {
//     left: 27,
//     position: "absolute",
//   },
//   boardLayout: {
//     height: 443,
//     width: 360,
//     left: 0,
//     position: "absolute",
//   },
//   checkMarkIcon: {
//     width: 122,
//     height: 122,
//   },
//   verificationCode: {
//     textAlign: "left",
//     color: Color.colorGray_100,
//     letterSpacing: -0.6,
//     fontFamily: FontFamily.poppinsMedium,
//     fontSize: FontSize.size_base,
//   },
//   weHaveSent: {
//     color: Color.colorGainsboro,
//     fontFamily: FontFamily.poppinsMedium,
//     fontWeight: "500",
//   },
//   abcdefghijkgmailcom: {
//     fontFamily: FontFamily.poppinsRegular,
//     color: Color.colorGray_100,
//   },
//   weHaveSentTheCodeToParent: {
//     marginTop: 8,
//     alignItems: "center",
//   },
//   verificationTitle: {
//     marginTop: 48,
//     alignItems: "center",
//   },
//   verificationCodeContainer1: {
//     backgroundColor: Color.colorWhitesmoke,
//     borderRadius: Border.br_3xs,
//   },
//   verificationCodeContainer: {
//     top: 0,
//     height: 56,
//     width: 54,
//     flexDirection: "row",
//   },
//   text: {
//     top: 10,
//     left: 19,
//     fontSize: FontSize.size_5xl,
//     letterSpacing: -1,
//     textAlign: "left",
//     color: Color.colorGray_100,
//     position: "absolute",
//   },
//   verificationCodeContainer2: {
//     borderStyle: "solid",
//     borderColor: "#a1a1a1",
//     borderWidth: 1,
//     flexDirection: "row",
//   },
//   verificationCodeContainer4: {
//     flexDirection: "row",
//   },
//   verificationCode1: {
//     justifyContent: "space-between",
//     flexDirection: "row",
//     width: 300,
//     marginTop: 48,
//   },
//   content: {
//     top: 155,
//     left: 29,
//     alignItems: "center",
//     position: "absolute",
//   },
//   formkitarrowleftIcon: {
//     top: 5,
//     width: 24,
//     height: 14,
//     overflow: "hidden",
//   },
//   verification: {
//     left: 110,
//     top: 0,
//     textAlign: "left",
//     color: Color.colorGray_100,
//     letterSpacing: -0.6,
//     fontFamily: FontFamily.poppinsMedium,
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   navbar: {
//     top: 80,
//     width: 196,
//     height: 24,
//   },
//   mask: {
//     backgroundColor: Color.colorGray_200,
//     width: 360,
//     left: 0,
//     top: 0,
//     position: "absolute",
//     height: 800,
//   },
//   boardContainer: {
//     borderTopLeftRadius: Border.br_base,
//     borderTopRightRadius: Border.br_base,
//     top: 0,
//     backgroundColor: Color.colorWhite,
//     height: 443,
//   },
//   getStarted: {
//     fontWeight: "600",
//     fontFamily: FontFamily.urbanistSemiBold,
//     color: Color.colorWhite,
//     textAlign: "left",
//     fontSize: FontSize.size_base,
//   },
//   getStartedButton: {
//     top: 332,
//     left: 30,
//     height: 50,
//     justifyContent: "center",
//     paddingHorizontal: Padding.p_104xl,
//     paddingVertical: Padding.p_sm,
//     backgroundColor: "transparent",
//     borderRadius: Border.br_3xs,
//     flexDirection: "row",
//     width: 300,
//     alignItems: "center",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   registerSuccessfully: {
//     top: 164,
//     left: 106,
//     fontFamily: FontFamily.urbanistMedium,
//     textAlign: "left",
//     color: Color.colorGray_100,
//     fontWeight: "500",
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   congratulationsYourAccount: {
//     top: 205,
//     fontSize: FontSize.size_sm,
//     fontFamily: FontFamily.urbanistRegular,
//     color: Color.colorDarkgray_100,
//     textAlign: "center",
//     width: 300,
//   },
//   icbaselineEmailIcon: {
//     top: 51,
//     left: 137,
//     width: 86,
//     height: 86,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   board: {
//     top: 357,
//   },
//   underlineIcon: {
//     top: 790,
//     left: 135,
//     maxHeight: "100%",
//     width: 91,
//     position: "absolute",
//   },
//   registerSuccess: {
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     height: 800,
//     backgroundColor: Color.colorWhite,
//   },
// });

// export default RegisterSuccess;
