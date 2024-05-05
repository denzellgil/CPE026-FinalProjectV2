import React, { memo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = memo(({ onClose }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.login}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <View style={styles.image20240409030038236Rem} />
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.text}>
          <Text style={styles.dontHaveAnContainer1}>
            <Text style={styles.dontHaveAnAccount}>
              <Text style={styles.dontHaveAn}>Don't have an account?</Text>
              <Text style={styles.text1}>{` `}</Text>
            </Text>
            <Text style={styles.signUp}>SIGN UP</Text>
          </Text>
        </Text>
      </Pressable>
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
          style={[styles.groupChild, styles.groupChildShadowBox]}
          locations={[0, 1]}
          colors={["#446063", "rgba(204, 212, 221, 0)"]}
        />
        <View style={[styles.frameParent, styles.groupChildShadowBox]}>
          <Pressable
            style={styles.frameWrapper}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.frameChildPosition}>
              <View style={[styles.frameChild, styles.frameChildPosition]} />
              <Text style={styles.login1}>LOGIN</Text>
            </View>
          </Pressable>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
          <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
          <Image
            style={[styles.padlockIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/padlock.png")}
          />
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
          <Text style={[styles.login2, styles.login2FlexBox]}>WELCOME</Text>
          <Image
            style={[styles.doneIcon, styles.doneIconPosition]}
            contentFit="cover"
            source={require("../assets/done.png")}
          />
          <Image
            style={[styles.doneIcon1, styles.doneIconPosition]}
            contentFit="cover"
            source={require("../assets/done1.png")}
          />
          <Pressable
            style={styles.forgotPassword}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={[styles.forgotPassword1, styles.login2FlexBox]}>
              {" "}
              Forgot Password
            </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 362,
    width: 397,
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  frameChildPosition: {
    height: "100%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 4,
    borderColor: Color.colorGray_200,
    borderRadius: Border.br_30xl,
    left: "0.14%",
    right: "-2.25%",
    width: "102.11%",
    height: "23.06%",
    borderStyle: "solid",
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorGray_500,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1Regular_size,
    left: "18.09%",
    height: "11.71%",
    fontFamily: FontFamily.typographyLevel1Regular,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconLayout: {
    height: 27,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  login2FlexBox: {
    justifyContent: "center",
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  doneIconPosition: {
    left: 309,
    height: 27,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  image20240409030038236Rem: {
    top: 507,
    left: 268,
    width: 155,
    height: 463,
    position: "absolute",
  },
  dontHaveAn: {
    fontFamily: FontFamily.rubikItalic,
    fontStyle: "italic",
  },
  text1: {
    fontFamily: FontFamily.rubikBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
  },
  dontHaveAnAccount: {
    color: Color.colorBlack,
  },
  signUp: {
    textDecoration: "underline",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorDarkblue,
    fontWeight: "700",
  },
  dontHaveAnContainer1: {
    width: "100%",
  },
  text: {
    height: "3.24%",
    width: "67.29%",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 28,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mid,
  },
  dontHaveAnContainer: {
    left: "16.36%",
    top: "90.71%",
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
    color: Color.colorWhite1,
    fontWeight: "500",
    left: 0,
    textAlign: "center",
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
    width: "100%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.75)",
    borderRadius: Border.br_31xl,
    height: 362,
    width: 397,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    backgroundColor: "transparent",
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorGray_200,
  },
  login1: {
    height: "57.86%",
    width: "20.82%",
    top: "22.26%",
    left: "39.66%",
    fontSize: FontSize.typographyLevelMedum_size,
    textAlign: "left",
    fontFamily: FontFamily.typographyLevelMedum,
    lineHeight: 30,
    color: Color.colorWhite1,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  frameWrapper: {
    height: "20.61%",
    width: "99.86%",
    top: "79.39%",
    right: "0.14%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  groupItem: {
    top: "45.47%",
    bottom: "31.47%",
  },
  groupInner: {
    top: "17.77%",
    bottom: "59.17%",
  },
  username: {
    width: "31.97%",
    top: "22.39%",
  },
  password: {
    width: "30.45%",
    top: "50.09%",
  },
  padlockIcon: {
    left: 28,
    top: 167,
  },
  userIcon: {
    left: 30,
    top: 79,
  },
  login2: {
    height: "10.7%",
    marginLeft: -64,
    left: "50%",
    fontSize: FontSize.specialTextBig_size,
    width: 129,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    justifyContent: "center",
    fontFamily: FontFamily.typographyLevelMedum,
    lineHeight: 30,
    fontWeight: "500",
    top: "0%",
    position: "absolute",
  },
  doneIcon: {
    top: 167,
  },
  doneIcon1: {
    top: 79,
  },
  forgotPassword1: {
    height: "9.94%",
    width: "43.54%",
    fontFamily: FontFamily.typographyLevel1Regular,
    justifyContent: "center",
    lineHeight: 28,
    letterSpacing: 0.3,
    fontSize: FontSize.size_mid,
  },
  forgotPassword: {
    left: "26.12%",
    top: "67.77%",
    position: "absolute",
  },
  frameParent: {
    height: "90.33%",
    width: "89.67%",
    top: "4.7%",
    right: "5.29%",
    bottom: "4.97%",
    left: "5.04%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleParent: {
    top: 282,
    left: 18,
    position: "absolute",
  },
  login: {
    width: 428,
    height: 926,
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Login;
