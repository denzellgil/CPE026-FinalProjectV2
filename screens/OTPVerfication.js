import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OTPVerfication = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.otpverfication}
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
          <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout]}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={styles.otpVerificationParent}>
          <Text style={[styles.otpVerification, styles.continueFlexBox]}>
            OTP Verification
          </Text>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Login")}
          >
            <View style={styles.frameChildPosition}>
              <View style={[styles.frameChild, styles.frameChildPosition]} />
            </View>
          </Pressable>
          <Text style={[styles.continue, styles.continueFlexBox]}>
            Continue
          </Text>
          <Text style={[styles.weHaveSent, styles.continueFlexBox]}>
            We have sent the verification code to your email address
          </Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
            <View style={[styles.groupChild1, styles.groupLayout]} />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorWhite1,
    fontWeight: "500",
  },
  groupChildLayout: {
    height: 354,
    width: 385,
    position: "absolute",
  },
  continueFlexBox: {
    alignItems: "center",
    display: "flex",
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
  groupLayout: {
    width: 75,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_xl,
    height: 71,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
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
    top: 0,
    width: 385,
    backgroundColor: "transparent",
  },
  otpVerification: {
    height: "11.27%",
    width: "57.23%",
    left: "21.24%",
    fontSize: FontSize.specialTextBig_size,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorTextHeading,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    lineHeight: 30,
    display: "flex",
    top: "0%",
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
  },
  frameWrapper: {
    height: "21.79%",
    width: "95.79%",
    top: "78.21%",
    right: "2.23%",
    left: "1.98%",
    bottom: "0%",
    position: "absolute",
  },
  continue: {
    height: "11.47%",
    width: "27.12%",
    top: "83.33%",
    left: "36.44%",
    fontSize: FontSize.typographyLevelMedum_size,
    fontFamily: FontFamily.typographyLevelMedum,
    textAlign: "left",
    lineHeight: 30,
    display: "flex",
    color: Color.colorWhite1,
    fontWeight: "500",
  },
  weHaveSent: {
    height: "21.05%",
    width: "70.08%",
    top: "15.05%",
    left: "14.83%",
    fontSize: FontSize.size_mid,
    letterSpacing: 0.3,
    lineHeight: 28,
    fontFamily: FontFamily.typographyLevel1Regular,
    color: Color.colorGainsboro_100,
    justifyContent: "center",
    textAlign: "center",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 93,
  },
  rectangleView: {
    left: 186,
  },
  groupChild1: {
    left: 279,
  },
  rectangleGroup: {
    top: 127,
    width: 354,
    height: 71,
    left: 0,
    position: "absolute",
  },
  otpVerificationParent: {
    height: "83.73%",
    width: "91.95%",
    top: "11.86%",
    right: "4.68%",
    bottom: "4.41%",
    left: "3.38%",
    position: "absolute",
  },
  rectangleParent: {
    top: 286,
    left: 21,
  },
  otpverfication: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default OTPVerfication;
