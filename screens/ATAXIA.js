import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ATAXIA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ataxia}>
      <View style={[styles.component4, styles.statusBarPosition]}>
        <View style={[styles.component4Child, styles.childPosition]} />
        <Pressable
          style={styles.akarIconsarrowRight}
          onPress={() => navigation.navigate("Symptoms")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/akariconsarrowright3.png")}
          />
        </Pressable>
        <Text style={styles.symptoms}>Symptoms</Text>
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
            source={require("../assets/wifi3.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={styles.time}>9:41</Text>
          </View>
        </View>
        <Pressable
          style={styles.homePage}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/home-page.png")}
          />
        </Pressable>
      </View>
      <View style={styles.ataxiaInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.ataxia1}>
        <LinearGradient
          style={[styles.ataxiaChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        />
        <Text style={[styles.ataxia2, styles.ataxia2Typo]}>ATAXIA</Text>
        <View style={[styles.ataxiaWrapper, styles.ataxiaLayout]}>
          <View style={[styles.ataxia3, styles.ataxiaLayout]}>
            <LinearGradient
              style={[styles.ataxia4, styles.ataxiaLayout]}
              locations={[0, 1]}
              colors={["#20252d", "#015967"]}
            />
            <View
              style={[
                styles.mareksDiseaseIsAHighlyCoParent,
                styles.parentLayout,
              ]}
            >
              <Text
                style={[styles.mareksDiseaseIs, styles.mareksDiseaseIsTypo]}
              >
                Marek's disease is a highly contagious viral infection that
                affects poultry worldwide, characterized by the development of
                T-cell lymphomas and the enlargement of peripheral nerves. This
                disease is one of the most ubiquitous avian infections, with
                virtually every chicken flock presumed to be infected, except
                for those maintained under strict pathogen-free conditions.
                While clinical manifestations of the disease are not always
                apparent, subclinical effects such as decreased growth rates and
                reduced egg production can have significant economic
                implications for poultry operations. When clinical signs do
                occur, leg paralysis is a common presenting symptom. The
                diagnosis of Marek's disease relies on a combination of factors,
                including the animal's history, clinical signs, gross necropsy
                findings, and histopathological examination. Although no
                treatment is currently available for this disease, highly
                protective vaccines play a crucial role in disease management
                and prevention. Despite the widespread prevalence of Marek's
                disease in poultry populations, effective vaccination strategies
                have been instrumental in mitigating the impact of this
                economically important viral infection on the poultry industry.
              </Text>
              <Text style={[styles.mareksDisease, styles.ataxia2Typo]}>
                MAREKS DISEASE
              </Text>
              <Text style={[styles.clickHereFor, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={[styles.mareks2Icon, styles.parentLayout]}
                contentFit="cover"
                source={require("../assets/mareks-2.png")}
              />
            </View>
            <View
              style={[styles.avianEncephalomyelitisParent, styles.parentLayout]}
            >
              <Text
                style={[styles.avianEncephalomyelitis, styles.ataxia2Typo]}
              >{`AVIAN
ENCEPHALOMYELITIS`}</Text>
              <Text
                style={[
                  styles.avianEncephalomyelitisIs,
                  styles.mareksDiseaseIsTypo,
                ]}
              >
                Avian encephalomyelitis is a viral infection that targets the
                central nervous system (CNS) in various bird species.
                Characterized by a range of symptoms including tremors, ataxia,
                and weakness, the disease can progress to paralysis over time.
                The primary clinical manifestations of avian encephalomyelitis
                often involve ataxia and varying degrees of leg weakness, which
                can range from sitting on hocks to partial paralysis and
                eventual recumbency.
              </Text>
              <Text style={[styles.clickHereFor1, styles.clickTypo]}>
                CLICK HERE FOR MORE INFORMATION
              </Text>
              <Image
                style={styles.encep1Icon}
                contentFit="cover"
                source={require("../assets/encep-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  ataxia2Typo: {
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  ataxiaLayout: {
    height: 1775,
    width: 460,
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 426,
    position: "absolute",
  },
  mareksDiseaseIsTypo: {
    width: 405,
    alignItems: "flex-end",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    left: 10,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  clickTypo: {
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    alignItems: "flex-end",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    position: "absolute",
  },
  component4Child: {
    shadowColor: "rgba(5, 5, 5, 0.05)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray_100,
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  akarIconsarrowRight: {
    left: "7.24%",
    right: "85.02%",
    bottom: "13.04%",
    width: "7.73%",
    height: "27.84%",
    top: "59.13%",
    position: "absolute",
  },
  symptoms: {
    height: "26.07%",
    width: "33.57%",
    left: "33.34%",
    fontSize: FontSize.specialTextBig_size,
    fontFamily: FontFamily.typographyLevelMedum,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontWeight: "500",
    lineHeight: 30,
    top: "59.13%",
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
    marginTop: -7.85,
    top: "50%",
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.montserratMedium,
    width: 62,
    textAlign: "center",
    left: 0,
    color: Color.colorGainsboro_100,
    fontWeight: "500",
    position: "absolute",
  },
  timeStyle: {
    height: "47.69%",
    width: "14.39%",
    top: "20.44%",
    right: "80%",
    bottom: "31.87%",
    left: "5.61%",
    position: "absolute",
  },
  statusBar: {
    height: "38.27%",
    bottom: "61.73%",
  },
  homePage: {
    left: "87.38%",
    top: "58.87%",
    right: "5.61%",
    bottom: "15.9%",
    width: "7.01%",
    height: "25.23%",
    position: "absolute",
  },
  component4: {
    height: "12.84%",
    bottom: "87.16%",
  },
  frameChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
  },
  ataxiaInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  ataxiaChild: {
    backgroundColor: "transparent",
  },
  ataxia2: {
    top: 33,
    left: 146,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
  },
  ataxia4: {
    backgroundColor: "transparent",
    top: 0,
  },
  mareksDiseaseIs: {
    top: 39,
  },
  mareksDisease: {
    left: 18,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    top: 0,
  },
  clickHereFor: {
    top: 954,
    left: 68,
    width: 290,
  },
  mareks2Icon: {
    top: 773,
    height: 177,
    left: 0,
  },
  mareksDiseaseIsAHighlyCoParent: {
    top: 766,
    height: 984,
    left: 17,
    width: 426,
  },
  avianEncephalomyelitis: {
    fontSize: FontSize.size_17xl,
    left: 0,
    top: 0,
  },
  avianEncephalomyelitisIs: {
    top: 69,
    height: 270,
  },
  clickHereFor1: {
    top: 644,
    left: 67,
    width: 292,
    height: 30,
  },
  encep1Icon: {
    top: 345,
    left: 42,
    width: 341,
    height: 292,
    position: "absolute",
  },
  avianEncephalomyelitisParent: {
    top: 42,
    height: 674,
    left: 17,
    width: 426,
  },
  ataxia3: {
    top: 0,
  },
  ataxiaWrapper: {
    top: 77,
  },
  ataxia1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.74%",
    bottom: "-5.72%",
    left: "-3.74%",
    position: "absolute",
  },
  ataxia: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default ATAXIA;
