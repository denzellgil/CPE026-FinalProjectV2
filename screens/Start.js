import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Start = () => {
  return (
    <LinearGradient
      style={styles.start}
      locations={[0, 1]}
      colors={["#20252d", "#015967"]}
    >
      <Image
        style={[styles.startChild, styles.startIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-26.png")}
      />
      <Image
        style={[styles.startItem, styles.startIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-27.png")}
      />
      <Image
        style={[styles.startInner, styles.statusBarPosition]}
        contentFit="cover"
        source={require("../assets/vector-22.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.startIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-25.png")}
      />
      <Image
        style={[styles.logo1Icon, styles.startIconLayout]}
        contentFit="cover"
        source={require("../assets/logo-1.png")}
      />
      <Text style={[styles.featherlyCare, styles.timeFlexBox]}>
        FEATHERLY CARE
      </Text>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.battery, styles.borderLayout]}>
          <View style={[styles.border, styles.borderLayout]} />
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
        <Image
          style={styles.statusBarChild}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  startIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusBarPosition: {
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  borderLayout: {
    height: 11,
    position: "absolute",
  },
  startChild: {
    height: "37.37%",
    bottom: "64.58%",
    left: "-4%",
    right: "7.27%",
    top: "-1.94%",
    width: "96.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  startItem: {
    height: "38.01%",
    bottom: "63.93%",
    left: "-4%",
    right: "7.27%",
    top: "-1.94%",
    width: "96.73%",
    maxWidth: "100%",
    position: "absolute",
  },
  startInner: {
    height: "59.94%",
    width: "103.97%",
    bottom: "40.06%",
    left: "-3.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "125.99%",
    width: "270.09%",
    top: "1.51%",
    right: "-117.06%",
    bottom: "-27.51%",
    left: "-53.04%",
    position: "absolute",
  },
  logo1Icon: {
    height: "57.78%",
    width: "125.23%",
    top: "21.06%",
    right: "-12.62%",
    bottom: "21.17%",
    left: "-12.62%",
    position: "absolute",
  },
  featherlyCare: {
    top: 597,
    left: 141,
    fontSize: FontSize.typographyLevelMedum_size,
    lineHeight: 25,
    fontFamily: FontFamily.knewaveRegular,
    color: Color.colorBlack,
    transform: [
      {
        rotate: "-0.9deg",
      },
    ],
  },
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite1,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
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
    left: 0,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite1,
    width: 62,
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
  statusBarChild: {
    top: -423,
    left: 137,
    width: 519,
    height: 423,
    position: "absolute",
  },
  statusBar: {
    height: "5.29%",
    bottom: "94.71%",
    left: "0%",
    width: "100%",
    top: "0%",
  },
  start: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Start;
