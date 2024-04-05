// import * as React from "react";
// import { Image } from "expo-image";
// import { StyleSheet, Text, View } from "react-native";
// import SubmitFormButton from "../../components/SubmitFormButton";
// import IPhoneWithNotch from "../../components/IPhoneWithNotch";
// import { FontSize, Color, FontFamily, Border } from "../../../GlobalStyles";

// const RegisterVerification = () => {
//   return (
//     <View style={styles.registerVerification}>
//       <View style={styles.content}>
//         <Image
//           style={styles.checkMarkIcon}
//           contentFit="cover"
//           source={require("../../assets/check-mark.png")}
//         />
//         <View style={styles.verificationTitle}>
//           <Text style={styles.verificationTypo}>Verification Code</Text>
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
//           <View
//             style={[
//               styles.verificationCodeContainer,
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
//               styles.verificationCodeContainer,
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
//               styles.verificationCodeContainer,
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
//               styles.verificationCodeContainer,
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
//               styles.verificationCodeContainer,
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
//         <SubmitFormButton />
//       </View>
//       <View style={styles.navbar}>
//         <Image
//           style={styles.formkitarrowleftIcon}
//           contentFit="cover"
//           source={require("../../assets/formkitarrowleft.png")}
//         />
//         <Text style={[styles.verification, styles.verificationTypo]}>
//           Verification
//         </Text>
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
//   weHaveSentTypo: {
//     fontSize: FontSize.size_xs,
//     textAlign: "left",
//   },
//   verificationContainerLayout: {
//     height: 56,
//     width: 54,
//   },
//   verificationTypo: {
//     textAlign: "left",
//     fontSize: FontSize.size_base,
//     color: Color.colorGray_100,
//     fontFamily: FontFamily.urbanistMedium,
//     fontWeight: "500",
//   },
//   checkMarkIcon: {
//     width: 122,
//     height: 122,
//   },
//   weHaveSent: {
//     color: Color.colorGainsboro,
//     fontSize: FontSize.size_xs,
//     fontFamily: FontFamily.urbanistMedium,
//     fontWeight: "500",
//   },
//   abcdefghijkgmailcom: {
//     fontFamily: FontFamily.urbanistRegular,
//     color: Color.colorGray_100,
//     fontSize: FontSize.size_xs,
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
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.colorWhitesmoke,
//   },
//   verificationCodeContainer: {
//     flexDirection: "row",
//   },
//   verificationCode1: {
//     width: 300,
//     justifyContent: "space-between",
//     flexDirection: "row",
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
//     left: 0,
//     width: 24,
//     height: 14,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   verification: {
//     top: 0,
//     left: 110,
//     position: "absolute",
//   },
//   navbar: {
//     top: 80,
//     left: 27,
//     width: 190,
//     height: 19,
//     position: "absolute",
//   },
//   underlineIcon: {
//     top: 790,
//     left: 135,
//     maxHeight: "100%",
//     width: 91,
//     position: "absolute",
//   },
//   registerVerification: {
//     backgroundColor: Color.colorWhite,
//     flex: 1,
//     width: "100%",
//     height: 800,
//     overflow: "hidden",
//   },
// });

// export default RegisterVerification;
