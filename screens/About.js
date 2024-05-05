import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const About = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.about}
      locations={[0, 1]}
      colors={["#02b1cd", "#06090b"]}
    >
      <View style={[styles.component5, styles.timePosition]}>
        <View style={[styles.component5Child, styles.statusBarPosition]} />
        <Image
          style={[styles.akarIconsarrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright.png")}
        />
        <Text style={[styles.about1, styles.about1Typo]}>About</Text>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
          </View>
        </View>
        <Pressable
          style={[styles.akarIconsarrowRight1, styles.akarPosition]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/akariconsarrowright2.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.theApplicationIs, styles.about1Typo]}>
        The application is used to classify the disease of a poultry depending
        on its symptoms. The user can use the application to check what type of
        disease their poultry has based on the symptoms it is showing. It also
        has a description of the disease that their poultry might have and a
        link directed to a web page to learn more about the disease and what are
        the measures to take.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: 0,
    position: "absolute",
  },
  statusBarPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  about1Typo: {
    textAlign: "left",
    fontSize: FontSize.specialTextBig_size,
    position: "absolute",
  },
  timeClr: {
    color: Color.colorGainsboro_100,
    fontWeight: "500",
  },
  akarPosition: {
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  component5Child: {
    bottom: "0%",
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
    height: "100%",
  },
  akarIconsarrowRight: {
    height: "27.83%",
    top: "59.13%",
    bottom: "13.04%",
    display: "none",
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  about1: {
    width: "18.22%",
    top: "60%",
    left: "40.89%",
    lineHeight: 30,
    fontFamily: FontFamily.typographyLevelMedum,
    display: "flex",
    alignItems: "center",
    color: Color.colorGainsboro_100,
    fontWeight: "500",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
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
    backgroundColor: Color.colorGainsboro_100,
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
    height: 11,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -7.5,
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
    height: "47.73%",
    width: "14.39%",
    top: "20.45%",
    right: "80%",
    bottom: "31.82%",
    left: "5.61%",
    position: "absolute",
  },
  statusBar: {
    height: "38.26%",
    bottom: "61.74%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  akarIconsarrowRight1: {
    top: "61.13%",
    bottom: "10.09%",
    height: "28.78%",
  },
  component5: {
    width: 428,
    height: 115,
    top: 0,
  },
  theApplicationIs: {
    top: 165,
    left: 32,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite1,
    width: 365,
    height: 480,
  },
  about: {
    flex: 1,
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default About;
