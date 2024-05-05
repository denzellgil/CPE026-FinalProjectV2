import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.component5}>
        <View style={[styles.component5Child, styles.component5Position]} />
        <Image
          style={[styles.akarIconsarrowRight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/akariconsarrowright.png")}
        />
        <Text style={styles.profile1}>Profile</Text>
        <View style={[styles.statusBar, styles.component5Position]}>
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
            <Text style={styles.time}>9:41</Text>
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
        <View style={[styles.component5Item, styles.component5Position]} />
      </View>
      <Image
        style={[styles.profileChild, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-184081.png")}
      />
      <Text style={[styles.asdQwReqw, styles.qweqweqwTypo]}>
        asd qw reqw rqwrqw
      </Text>
      <Text style={[styles.shanneFelias, styles.qweqweqwTypo]}>
        SHANNE FELIAS
      </Text>
      <Text style={[styles.qweqweqw, styles.qweqweqwTypo]}>qweqweqw</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component5Position: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  akarPosition: {
    left: "7.24%",
    right: "85.02%",
    width: "7.73%",
    position: "absolute",
  },
  qweqweqwTypo: {
    color: Color.colorBlack,
    lineHeight: 32,
    fontSize: FontSize.typographyLevel1Regular_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.typographyLevelMedum,
    fontWeight: "500",
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
    top: "0%",
    right: "0%",
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
  profile1: {
    width: "18.22%",
    top: "60%",
    left: "40.89%",
    fontSize: FontSize.specialTextBig_size,
    lineHeight: 30,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.typographyLevelMedum,
    color: Color.colorGainsboro_100,
    fontWeight: "500",
    position: "absolute",
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
    color: Color.colorGainsboro_100,
    fontWeight: "500",
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
    top: "0%",
    right: "0%",
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
  component5Item: {
    height: "241.74%",
    top: "99.13%",
    bottom: "-240.87%",
    backgroundColor: Color.colorCadetblue,
  },
  component5: {
    width: 428,
    height: 115,
    left: 0,
    top: 0,
    position: "absolute",
  },
  profileChild: {
    height: "12.31%",
    width: "27.1%",
    top: "17.39%",
    right: "36.45%",
    bottom: "70.3%",
    left: "36.45%",
    position: "absolute",
  },
  asdQwReqw: {
    top: 448,
    left: 108,
    width: 281,
    height: 85,
  },
  shanneFelias: {
    top: 275,
    left: 136,
    width: 178,
    height: 107,
  },
  qweqweqw: {
    top: 579,
    left: 160,
    width: 129,
    height: 58,
  },
  profile: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
