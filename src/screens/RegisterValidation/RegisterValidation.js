// import * as React from "react";
// import { Text, StyleSheet, View } from "react-native";
// import { Image } from "expo-image";
// import RegisterForm from "../../components/RegisterForm";
// import IPhoneWithNotch from "../../components/IPhoneWithNotch";
// import { Color, FontFamily, FontSize, Padding, Border } from "../../../GlobalStyles";

// const RegisterValidation = () => {
//   return (
//     <View style={styles.registerValidation}>
//       <View style={styles.registerContent}>
//         <RegisterForm />
//         <Text style={[styles.orUseSocial, styles.orUseSocialClr]}>
//           or use social account
//         </Text>
//         <View style={styles.continueWithSocial}>
//           <View style={styles.continueLayout}>
//             <Image
//               style={styles.icbaselineEmailIcon}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail3.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Google
//             </Text>
//           </View>
//           <View style={[styles.continueWithTwitter, styles.continueLayout]}>
//             <Image
//               style={styles.icbaselineEmailIcon}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail6.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Twitter
//             </Text>
//           </View>
//           <View style={[styles.continueWithTwitter, styles.continueLayout]}>
//             <Image
//               style={styles.icbaselineEmailIcon}
//               contentFit="cover"
//               source={require("../../assets/icbaselineemail5.png")}
//             />
//             <Text style={[styles.continueWithGoogle1, styles.orUseSocialTypo]}>
//               Continue with Facebook
//             </Text>
//           </View>
//         </View>
//       </View>
//       <Text style={[styles.createAccount, styles.orUseSocialClr]}>
//         Create Account
//       </Text>
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
//   orUseSocialClr: {
//     color: Color.colorGray_100,
//     textAlign: "left",
//   },
//   orUseSocialTypo: {
//     fontFamily: FontFamily.urbanistRegular,
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
//   orUseSocial: {
//     marginTop: 18,
//     textAlign: "left",
//     fontFamily: FontFamily.urbanistRegular,
//     fontSize: FontSize.size_sm,
//   },
//   icbaselineEmailIcon: {
//     width: 24,
//     height: 24,
//     overflow: "hidden",
//   },
//   continueWithGoogle1: {
//     color: Color.colorBlack,
//     marginLeft: 16,
//     textAlign: "left",
//   },
//   continueWithTwitter: {
//     marginTop: 16,
//   },
//   continueWithSocial: {
//     marginTop: 18,
//   },
//   registerContent: {
//     top: 145,
//     left: 30,
//     alignItems: "center",
//     position: "absolute",
//   },
//   createAccount: {
//     top: 81,
//     left: 120,
//     fontSize: FontSize.size_base,
//     fontWeight: "500",
//     fontFamily: FontFamily.urbanistMedium,
//     textAlign: "left",
//     position: "absolute",
//   },
//   underlineIcon: {
//     top: 790,
//     left: 135,
//     maxHeight: "100%",
//     width: 91,
//     position: "absolute",
//   },
//   registerValidation: {
//     backgroundColor: Color.colorWhite,
//     flex: 1,
//     width: "100%",
//     height: 800,
//     overflow: "hidden",
//   },
// });

// export default RegisterValidation;
