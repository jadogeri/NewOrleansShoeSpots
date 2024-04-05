// import * as React from "react";
// import { Text, StyleSheet, View } from "react-native";
// import { Image } from "expo-image";
// import { LinearGradient } from "expo-linear-gradient";
// import Board from "../../components/Board";
// import IPhoneWithNotch from "../../components/IPhoneWithNotch";
// import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";

// const LoginForgotPassword = () => {
//   return (
//     <View style={styles.loginForgotPassword}>
//       <View style={styles.registerContent}>
//         <View>
//           <View style={styles.email}>
//             <Text style={styles.emailOrPhoneTypo}>Email or Phone number</Text>
//             <View style={[styles.mail, styles.mailSpaceBlock]}>
//               <Image
//                 style={styles.icbaselineEmailIcon}
//                 contentFit="cover"
//                 source={require("../../assets/icbaselineemail7.png")}
//               />
//               <Text
//                 style={[styles.abcdefghijkgmailcom, styles.emailOrPhoneTypo]}
//               >
//                 abcdefg.hijk@gmail.com
//               </Text>
//             </View>
//           </View>
//           <View style={styles.password}>
//             <Text style={styles.emailOrPhoneTypo}>Password</Text>
//             <View style={[styles.mail1, styles.mailSpaceBlock]}>
//               <View style={styles.getStartedButtonFlexBox}>
//                 <Image
//                   style={styles.icbaselineEmailIcon}
//                   contentFit="cover"
//                   source={require("../../assets/icbaselineemail8.png")}
//                 />
//                 <Text
//                   style={[styles.abcdefghijkgmailcom, styles.emailOrPhoneTypo]}
//                 >
//                   ***************
//                 </Text>
//               </View>
//               <Image
//                 style={styles.icbaselineEmailIcon2}
//                 contentFit="cover"
//                 source={require("../../assets/icbaselineemail2.png")}
//               />
//             </View>
//             <Text style={[styles.forgotPassword, styles.mailSpaceBlock]}>
//               Forgot password ?
//             </Text>
//           </View>
//           <LinearGradient
//             style={[styles.getStartedButton, styles.getStartedButtonFlexBox]}
//             locations={[0, 0.27, 0.56, 0.83]}
//             colors={["#4aabf8", "#75c2ff", "#4aabf8", "#99d2ff"]}
//           >
//             <Text style={[styles.getStarted, styles.signInTypo]}>Sign In</Text>
//           </LinearGradient>
//         </View>
//         <Text style={[styles.orUseSocial, styles.orUseSocialTypo]}>
//           or use social account
//         </Text>
//         <View style={styles.continueWithSocial}>
//           <View style={styles.continueLayout}>
//             <Image
//               style={styles.icbaselineEmailIcon3}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail3.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Google
//             </Text>
//           </View>
//           <View style={[styles.continueWithTwitter, styles.continueLayout]}>
//             <Image
//               style={styles.icbaselineEmailIcon3}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail4.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Twitter
//             </Text>
//           </View>
//           <View style={[styles.continueWithTwitter, styles.continueLayout]}>
//             <Image
//               style={styles.icbaselineEmailIcon3}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail5.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Facebook
//             </Text>
//           </View>
//         </View>
//       </View>
//       <Text style={[styles.signIn, styles.signInTypo]}>Sign in</Text>
//       <View style={styles.mask} />
//       <Board />
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
//   mailSpaceBlock: {
//     marginTop: 4,
//     width: 300,
//   },
//   emailOrPhoneTypo: {
//     textAlign: "left",
//     color: Color.colorGray_100,
//     fontFamily: FontFamily.poppinsRegular,
//     letterSpacing: -0.6,
//     fontSize: FontSize.size_sm,
//   },
//   getStartedButtonFlexBox: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   signInTypo: {
//     fontSize: FontSize.size_base,
//     textAlign: "left",
//   },
//   orUseSocialTypo: {
//     fontFamily: FontFamily.rajdhaniRegular,
//     textAlign: "left",
//     fontSize: FontSize.size_sm,
//   },
//   continueLayout: {
//     paddingVertical: 0,
//     paddingHorizontal: Padding.p_49xl,
//     flexDirection: "row",
//     height: 50,
//     width: 300,
//     backgroundColor: Color.colorWhitesmoke,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//   },
//   icbaselineEmailIcon: {
//     width: 20,
//     height: 20,
//     overflow: "hidden",
//   },
//   abcdefghijkgmailcom: {
//     marginLeft: 12,
//   },
//   mail: {
//     padding: Padding.p_smi,
//     backgroundColor: Color.colorWhitesmoke,
//     marginTop: 4,
//     flexDirection: "row",
//     height: 50,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//   },
//   email: {
//     justifyContent: "center",
//   },
//   icbaselineEmailIcon2: {
//     width: 18,
//     height: 18,
//     overflow: "hidden",
//   },
//   mail1: {
//     justifyContent: "space-between",
//     padding: Padding.p_smi,
//     backgroundColor: Color.colorWhitesmoke,
//     marginTop: 4,
//     flexDirection: "row",
//     height: 50,
//     borderRadius: Border.br_3xs,
//     alignItems: "center",
//   },
//   forgotPassword: {
//     color: Color.colorDeepskyblue_100,
//     textAlign: "right",
//     marginTop: 4,
//     fontFamily: FontFamily.poppinsRegular,
//     fontSize: FontSize.size_sm,
//     letterSpacing: -0.6,
//   },
//   password: {
//     marginTop: 24,
//     justifyContent: "center",
//   },
//   getStarted: {
//     fontWeight: "600",
//     fontFamily: FontFamily.rajdhaniSemiBold,
//     color: Color.colorWhite,
//   },
//   getStartedButton: {
//     paddingHorizontal: Padding.p_104xl,
//     paddingVertical: Padding.p_sm,
//     backgroundColor: "transparent",
//     marginTop: 24,
//     height: 50,
//     width: 300,
//     borderRadius: Border.br_3xs,
//     flexDirection: "row",
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   orUseSocial: {
//     marginTop: 24,
//     color: Color.colorGray_100,
//   },
//   icbaselineEmailIcon3: {
//     width: 24,
//     height: 24,
//     overflow: "hidden",
//   },
//   continueWithGoogle1: {
//     color: Color.colorBlack,
//     marginLeft: 16,
//   },
//   continueWithTwitter: {
//     marginTop: 16,
//   },
//   continueWithSocial: {
//     marginTop: 24,
//   },
//   registerContent: {
//     top: 145,
//     left: 30,
//     alignItems: "center",
//     position: "absolute",
//   },
//   signIn: {
//     top: 81,
//     left: 154,
//     fontWeight: "500",
//     fontFamily: FontFamily.poppinsMedium,
//     color: Color.colorGray_100,
//     letterSpacing: -0.6,
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   mask: {
//     top: 0,
//     left: 0,
//     backgroundColor: Color.colorGray_200,
//     width: 360,
//     position: "absolute",
//     height: 800,
//   },
//   underlineIcon: {
//     top: 790,
//     left: 135,
//     maxHeight: "100%",
//     width: 91,
//     position: "absolute",
//   },
//   loginForgotPassword: {
//     backgroundColor: Color.colorWhite,
//     flex: 1,
//     width: "100%",
//     overflow: "hidden",
//     height: 800,
//   },
// });

// export default LoginForgotPassword;
