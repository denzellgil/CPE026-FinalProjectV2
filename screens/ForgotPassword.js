import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.forgotpassword}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={styles.forgotPasswordParent}>
          <Text style={[styles.forgotPassword, styles.emailFlexBox]}>
            Forgot Password
          </Text>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("OTPVerfication")}
          >
            <View style={styles.frameChildPosition}>
              <View style={[styles.frameChild, styles.frameChildPosition]} />
            </View>
          </Pressable>
          <Text style={[styles.continue, styles.emailFlexBox]}>Continue</Text>
          <View style={styles.groupItem} />
          <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
          <Image
            style={[styles.clarityemailLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/clarityemailline1.png")}
          />
          <Image
            style={[styles.antDesigneyeInvisibleOutliIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesigneyeinvisibleoutlined1.png")}
          />
          <Text
            style={[styles.enterYourEmail, styles.enterYourEmailTypo]}
          >{`Enter your email address 
below to reset your password`}</Text>
        </View>
      </View>
      <Text style={[styles.dontHaveAnContainer, styles.enterYourEmailTypo]}>
        <Text style={styles.dontHaveAnContainer1}>
          <Text style={styles.dontHaveAnAccount}>
            <Text style={styles.dontHaveAn}>Don't have an account?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={[styles.signUp, styles.signUpTypo]}>SIGN UP</Text>
        </Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 354,
    width: 385,
    position: "absolute",
  },
  emailFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  frameChildPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "37.9%",
    top: "52.54%",
    width: "7.31%",
    height: "9.56%",
    position: "absolute",
    overflow: "hidden",
  },
  enterYourEmailTypo: {
    lineHeight: 28,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mid,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorWhite1,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    top: 0,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorWhite1,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 12,
  },
  time: {
    marginTop: -7.7,
    top: "50%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.montserratMedium,
    width: 62,
    textAlign: "center",
    color: Color.colorWhite1,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: "47.76%",
    width: "14.39%",
    top: "20.41%",
    right: "80%",
    bottom: "31.84%",
    left: "5.61%",
    position: "absolute",
  },
  statusBar: {
    height: "5.29%",
    bottom: "94.71%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_31xl,
    left: 0,
    width: 385,
    top: 0,
    backgroundColor: "transparent",
  },
  forgotPassword: {
    height: "11.81%",
    width: "65.47%",
    left: "23.3%",
    fontSize: FontSize.specialTextBig_size,
    color: Color.colorTextHeading,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.rubikBold,
    fontWeight: "700",
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
    top: "0%",
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
  },
  frameWrapper: {
    top: "76.88%",
    bottom: "0%",
    height: "23.12%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  continue: {
    height: "12.17%",
    width: "27.13%",
    top: "82.32%",
    left: "36.57%",
    fontSize: FontSize.typographyLevelMedum_size,
    fontFamily: FontFamily.typographyLevelMedum,
    lineHeight: 30,
    display: "flex",
    textAlign: "left",
    color: Color.colorWhite1,
    fontWeight: "500",
  },
  groupItem: {
    top: "45.78%",
    bottom: "31.1%",
    borderRadius: Border.br_30xl,
    borderColor: Color.colorGray_100,
    borderWidth: 4,
    height: "23.12%",
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  email: {
    height: "13.17%",
    width: "17.07%",
    top: "50.93%",
    left: "18.9%",
    fontSize: FontSize.typographyLevel1Regular_size,
    lineHeight: 33,
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1Regular,
  },
  clarityemailLineIcon: {
    right: "85.08%",
    left: "7.61%",
  },
  antDesigneyeInvisibleOutliIcon: {
    right: "8.23%",
    left: "84.46%",
  },
  enterYourEmail: {
    height: "22.33%",
    width: "73.16%",
    top: "15.75%",
    left: "15.04%",
    color: Color.colorGainsboro_100,
    justifyContent: "center",
    fontFamily: FontFamily.typographyLevel1Regular,
  },
  forgotPasswordParent: {
    height: "78.93%",
    width: "88.08%",
    top: "12.43%",
    right: "6.73%",
    bottom: "8.64%",
    left: "5.19%",
    position: "absolute",
  },
  rectangleParent: {
    top: 286,
    left: 21,
  },
  dontHaveAn: {
    fontFamily: FontFamily.rubikItalic,
    fontStyle: "italic",
  },
  text: {
    fontFamily: FontFamily.rubikBoldItalic,
    fontStyle: "italic",
    fontWeight: "700",
  },
  dontHaveAnAccount: {
    color: Color.colorBlack,
  },
  signUp: {
    textDecoration: "underline",
    color: Color.colorDarkblue,
  },
  dontHaveAnContainer1: {
    width: "100%",
  },
  dontHaveAnContainer: {
    height: "3.24%",
    width: "67.29%",
    top: "92.01%",
    left: "16.36%",
  },
  forgotpassword: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default ForgotPassword;
