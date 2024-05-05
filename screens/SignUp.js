import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Login from "../components/Login";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const [rectangleContainer2Visible, setRectangleContainer2Visible] =
    useState(false);

  const openRectangleContainer2 = useCallback(() => {
    setRectangleContainer2Visible(true);
  }, []);

  const closeRectangleContainer2 = useCallback(() => {
    setRectangleContainer2Visible(false);
  }, []);

  return (
    <>
      <LinearGradient
        style={styles.signup}
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
            style={[styles.groupChild, styles.groupShadowBox]}
            locations={[0, 1]}
            colors={["#446063", "rgba(204, 212, 221, 0)"]}
          />
          <View style={[styles.rectangleGroup, styles.groupShadowBox]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
            <View style={[styles.groupChild1, styles.groupLayout]} />
            <Text style={[styles.username, styles.signUpFlexBox]}>
              Username
            </Text>
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
            <Text style={[styles.rePassword, styles.passwordTypo]}>
              Re-Password
            </Text>
            <Text style={[styles.email, styles.passwordTypo]}>Email</Text>
            <Image
              style={[styles.padlockIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/padlock1.png")}
            />
            <Image
              style={[styles.padlockIcon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/padlock2.png")}
            />
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/user1.png")}
            />
            <Pressable
              style={styles.frameWrapper}
              onPress={openRectangleContainer2}
            >
              <View
                style={[styles.frameContainer, styles.frameContainerPosition]}
              >
                <View
                  style={[
                    styles.rectangleContainer,
                    styles.frameContainerPosition,
                  ]}
                >
                  <View
                    style={[styles.frameChild, styles.frameContainerPosition]}
                  />
                  <Text style={[styles.signUp, styles.signUpFlexBox]}>
                    SIGN UP
                  </Text>
                </View>
              </View>
            </Pressable>
            <Image
              style={[styles.clarityemailLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/clarityemailline.png")}
            />
            <Image
              style={[styles.antDesigneyeInvisibleOutliIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/antdesigneyeinvisibleoutlined.png")}
            />
            <Image
              style={[styles.doneIcon, styles.doneIconPosition]}
              contentFit="cover"
              source={require("../assets/done2.png")}
            />
            <Image
              style={[styles.doneIcon1, styles.doneIconPosition]}
              contentFit="cover"
              source={require("../assets/done3.png")}
            />
            <Image
              style={[styles.doneIcon2, styles.doneIconPosition]}
              contentFit="cover"
              source={require("../assets/done4.png")}
            />
            <Text style={[styles.createANew, styles.signUpFlexBox]}>
              Create a new account
            </Text>
          </View>
        </View>
      </LinearGradient>

      <Modal
        animationType="fade"
        transparent
        visible={rectangleContainer2Visible}
      >
        <View style={styles.rectangleContainer2Overlay}>
          <Pressable
            style={styles.rectangleContainer2Bg}
            onPress={closeRectangleContainer2}
          />
          <Login onClose={closeRectangleContainer2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.colorWhite1,
    fontWeight: "500",
  },
  groupChildLayout: {
    height: 508,
    width: 385,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 4,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_30xl,
    right: "0.59%",
    width: "99.41%",
    height: "13.9%",
    borderStyle: "solid",
    left: "0%",
    position: "absolute",
  },
  signUpFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  passwordTypo: {
    left: "18.18%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1Regular,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1Regular_size,
    height: "7.92%",
    position: "absolute",
  },
  iconLayout: {
    height: 26,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  frameContainerPosition: {
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  doneIconPosition: {
    left: 291,
    height: 26,
    width: 24,
    position: "absolute",
    overflow: "hidden",
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
    height: 11,
    width: 24,
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
    textAlign: "center",
    width: 62,
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
    borderRadius: Border.br_31xl,
    height: 508,
    width: 385,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "transparent",
  },
  groupItem: {
    top: "30.03%",
    bottom: "56.07%",
  },
  groupInner: {
    top: "67.46%",
    bottom: "18.64%",
  },
  rectangleView: {
    top: "11.32%",
    bottom: "74.77%",
  },
  groupChild1: {
    top: "48.75%",
    bottom: "37.34%",
  },
  username: {
    width: "31.84%",
    top: "14.44%",
    left: "18.5%",
    color: Color.colorGray_500,
    fontFamily: FontFamily.typographyLevel1Regular,
    lineHeight: 33,
    fontSize: FontSize.typographyLevel1Regular_size,
    height: "7.92%",
    display: "flex",
    textAlign: "left",
  },
  password: {
    width: "30.31%",
    top: "33.15%",
  },
  rePassword: {
    width: "41.51%",
    top: "51.87%",
  },
  email: {
    width: "16.97%",
    top: "70.58%",
  },
  padlockIcon: {
    left: 30,
    height: 26,
    top: 161,
  },
  padlockIcon1: {
    top: 245,
    left: 30,
    height: 26,
  },
  userIcon: {
    left: 31,
    top: 77,
  },
  rectangleContainer2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleContainer2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameChild: {
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorBlack,
    bottom: "0%",
    top: "0%",
  },
  signUp: {
    height: "43.34%",
    width: "25.36%",
    top: "28.79%",
    left: "37.45%",
    fontSize: FontSize.typographyLevelMedum_size,
    lineHeight: 25,
    fontFamily: FontFamily.typographyLevelMedum,
    color: Color.colorWhite1,
    fontWeight: "500",
  },
  rectangleContainer: {
    bottom: "0%",
    top: "0%",
  },
  frameContainer: {
    top: "0.62%",
    bottom: "-0.62%",
  },
  frameWrapper: {
    top: "86.1%",
    left: "0.59%",
    bottom: "0%",
    width: "99.41%",
    height: "13.9%",
    right: "0%",
    position: "absolute",
  },
  clarityemailLineIcon: {
    top: 335,
    left: 32,
  },
  antDesigneyeInvisibleOutliIcon: {
    top: 329,
    left: 292,
  },
  doneIcon: {
    top: 161,
  },
  doneIcon1: {
    top: 245,
  },
  doneIcon2: {
    top: 77,
  },
  createANew: {
    height: "9.04%",
    width: "78.57%",
    left: "12.9%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 38,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: Color.colorBlack,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    top: "0%",
  },
  rectangleGroup: {
    height: "91.46%",
    width: "88.6%",
    top: "5.12%",
    right: "6.47%",
    bottom: "3.43%",
    left: "4.94%",
  },
  rectangleParent: {
    top: 209,
    left: 22,
    position: "absolute",
  },
  signup: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp;
