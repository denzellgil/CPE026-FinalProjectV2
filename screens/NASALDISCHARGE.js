import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const NASALDISCHARGE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nasalDischarge}>
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
      <View style={styles.nasalDischargeInner}>
        <LinearGradient
          style={[styles.frameChild, styles.frameChildBg]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <LinearGradient
        style={[styles.nasalDischarge1, styles.frameChildBg]}
        locations={[0, 1]}
        colors={["#20252d", "#015967"]}
      >
        <Text style={[styles.nasalDischarge2, styles.avianFlexBox]}>
          NASAL DISCHARGE
        </Text>
        <Text style={[styles.nasalDischarge2, styles.avianFlexBox]}>
          NASAL DISCHARGE
        </Text>
        <LinearGradient
          style={[styles.groupParent, styles.frameChildBg]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        >
          <View
            style={[
              styles.avianInfluenzaCommonlyKnowParent,
              styles.avianParentPosition,
            ]}
          >
            <Text
              style={[styles.avianInfluenzaCommonly, styles.alsoKnownAsTypo]}
            >{`Avian Influenza, commonly known as bird flu, is a highly contagious viral disease caused by strains of the influenza A virus that primarily infect wild birds and domestic poultry like chickens, turkeys, and ducks. While these avian influenza viruses generally circulate among bird populations, certain strains have been known to cross the species barrier and infect humans, albeit with limited human-to-human transmission. Most human cases of avian influenza result from direct or close contact with infected live or dead poultry or their contaminated environments. In chickens, highly pathogenic avian influenza strains can manifest severe signs, including respiratory distress characterized by gasping and coughing, as well as digestive issues like extreme diarrhea, which can rapidly lead to death. Physical abnormalities such as swelling around the head, neck, and eyes, along with purple discoloration of the wattles, combs, and legs, are also common indicators of avian influenza in chickens.







`}</Text>
            <Text style={styles.avianInfluenza}>AVIAN INFLUENZA</Text>
            <Image
              style={styles.avianInfluenza1}
              contentFit="cover"
              source={require("../assets/avian-influenza-1.png")}
            />
            <Text style={[styles.clickHereFor, styles.clickTypo1]}>
              CLICK HERE FOR MORE INFORMATION
            </Text>
          </View>
          <Text style={[styles.clickHereFor1, styles.clickTypo1]}>
            CLICK HERE FOR MORE INFORMATION
          </Text>
          <View
            style={[
              styles.avianLaryngotracheitisParent,
              styles.laryn11IconLayout,
            ]}
          >
            <Text style={[styles.avianLaryngotracheitis, styles.avianFlexBox]}>
              AVIAN LARYNGOTRACHEITIS
            </Text>
            <Text style={[styles.alsoKnownAs, styles.alsoKnownAsTypo]}>
              Also known as infectious laryngotracheitis virus (ILTV), the
              infection spreads easily among birds and through contaminated
              fomites, facilitated by factors such as lax biosecurity measures
              and the transportation of infected poultry. ILT manifests as an
              acute, highly contagious herpesvirus infection primarily affecting
              chickens and pheasants, characterized by severe respiratory
              distress, including dyspnea, coughing, and rales. Additionally, it
              can manifest as a subacute illness marked by nasal and ocular
              discharge, tracheitis, conjunctivitis, and mild rales. Clinical
              signs of ILTV infection typically appear 5-12 days post-exposure,
              with affected birds exhibiting symptoms such as gasping, coughing
              with bloody mucoid exudate, rattling, and neck extension during
              inspiration. Laying flocks may experience reduced productivity,
              with affected birds showing signs of anorexia and lethargy.
              Mortality rates can vary but may reach as high as 50% in adult
              birds, primarily due to tracheal occlusion from hemorrhage or
              exudate. Although signs usually subside after approximately two
              weeks, some birds may continue to exhibit symptoms for an extended
              period.
            </Text>
            <Image
              style={styles.laryn21Icon}
              contentFit="cover"
              source={require("../assets/laryn2-1.png")}
            />
            <Image
              style={[styles.laryn11Icon, styles.laryn11IconLayout]}
              contentFit="cover"
              source={require("../assets/laryn1-1.png")}
            />
          </View>
          <Text style={[styles.clickHereFor2, styles.clickTypo]}>
            CLICK HERE FOR MORE INFORMATION
          </Text>
          <Text style={[styles.clickHereFor3, styles.clickTypo]}>
            CLICK HERE FOR MORE INFORMATION
          </Text>
        </LinearGradient>
        <View
          style={[styles.avianBronchitisParent, styles.avianParentPosition]}
        >
          <Text style={[styles.avianBronchitis, styles.avianFlexBox]}>
            AVIAN BRONCHITIS
          </Text>
          <Text
            style={styles.infectiousBronchitisIs}
          >{`Infectious bronchitis is an acute and highly contagious upper respiratory tract disease affecting chickens, caused by an avian coronavirus. In addition to respiratory signs, this disease is characterized by decreased egg production and compromised egg quality in laying hens. Furthermore, certain strains of the virus can induce nephritis, leading to kidney damage. While attenuated live and killed vaccines are available for infectious bronchitis, the existence of multiple antigenic types of the causative coronavirus complicates control efforts due to a lack of cross-protection between types. In layer chickens, infectious bronchitis can lead to a significant drop in egg production, up to 70%, and cause various egg quality issues, such as misshapen, thin-shelled, wrinkled, rough, pale, smaller eggs with watery albumin. While egg production and quality can return to normal levels, this recovery process may take up to 8 weeks. Most infectious bronchitis outbreaks result in approximately 5% mortality, although mortality rates can reach as high as 60% when the disease is complicated by concurrent bacterial infections or when nephropathogenic strains induce 

`}</Text>
          <Image
            style={styles.bronchitis1Icon}
            contentFit="cover"
            source={require("../assets/bronchitis-1.png")}
          />
        </View>
        <View
          style={[styles.avianMycoplasmosisParent, styles.avianParentPosition]}
        >
          <Text style={[styles.avianMycoplasmosis, styles.avianFlexBox]}>
            AVIAN MYCOPLASMOSIS
          </Text>
          <Text
            style={[styles.mycoplasmaGallisepticumIs, styles.alsoKnownAsTypo]}
          >
            Mycoplasma gallisepticum is a bacterial pathogen responsible for
            causing respiratory infections in a wide range of avian species,
            including chickens, turkeys, and other birds. While affected flocks
            typically exhibit high morbidity rates, mortality is generally low.
            However, the severity of clinical signs tends to be more pronounced
            in turkeys compared to chickens. The diagnosis of M. gallisepticum
            infections is increasingly reliant on real-time PCR testing, which
            has become the most commonly used diagnostic method. Although
            antibiotics may alleviate clinical symptoms and reduce transmission
            through eggs, they do not eliminate the infection entirely. In
            broiler chicken operations, M. gallisepticum is frequently
            implicated in the development of "chronic respiratory disease," a
            polymicrobial condition that leads to increased condemnations at
            processing plants. For layer and breeder flocks, M. gallisepticum
            infections are often subclinical; however, they can result in a
            reduction in the number of eggs laid per hen over the course of the
            production cycle, leading to significant economic losses for poultry
            producers.
          </Text>
          <Image
            style={styles.myco1Icon}
            contentFit="cover"
            source={require("../assets/myco-1.png")}
          />
        </View>
      </LinearGradient>
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
    width: "100%",
  },
  frameChildBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  avianFlexBox: {
    height: 38,
    justifyContent: "center",
    alignItems: "flex-end",
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    textAlign: "center",
    display: "flex",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  avianParentPosition: {
    left: 20,
    width: 421,
    position: "absolute",
  },
  alsoKnownAsTypo: {
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  clickTypo1: {
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    position: "absolute",
  },
  laryn11IconLayout: {
    width: 443,
    position: "absolute",
  },
  clickTypo: {
    left: 81,
    color: Color.colorRoyalblue,
    textDecoration: "underline",
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
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
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
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
    lineHeight: 30,
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontWeight: "500",
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
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  nasalDischargeInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  nasalDischarge2: {
    top: 41,
    left: 98,
    width: 265,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  avianInfluenzaCommonly: {
    top: 47,
    width: 405,
    left: 5,
  },
  avianInfluenza: {
    left: 10,
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    top: 0,
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  avianInfluenza1: {
    top: 633,
    height: 212,
    width: 421,
    left: 0,
    position: "absolute",
  },
  clickHereFor: {
    top: 857,
    left: 66,
    textAlign: "center",
  },
  avianInfluenzaCommonlyKnowParent: {
    height: 887,
    width: 421,
    top: 55,
  },
  clickHereFor1: {
    top: 1981,
    left: 96,
    textAlign: "left",
    color: Color.colorRoyalblue,
    textDecoration: "underline",
  },
  avianLaryngotracheitis: {
    left: 6,
    fontSize: FontSize.size_17xl,
    width: 430,
    top: 0,
  },
  alsoKnownAs: {
    top: 57,
    left: 10,
    width: 421,
  },
  laryn21Icon: {
    top: 863,
    left: 76,
    width: 278,
    height: 216,
    position: "absolute",
  },
  laryn11Icon: {
    top: 704,
    height: 158,
    left: 0,
  },
  avianLaryngotracheitisParent: {
    top: 2069,
    height: 1079,
    left: 10,
  },
  clickHereFor2: {
    top: 4211,
  },
  clickHereFor3: {
    top: 3165,
  },
  groupParent: {
    top: 79,
    width: 460,
    height: 4276,
    left: 0,
  },
  avianBronchitis: {
    left: 57,
    width: 314,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    alignItems: "flex-end",
    top: 0,
  },
  infectiousBronchitisIs: {
    top: 58,
    fontFamily: FontFamily.roundedMplus1c,
    fontSize: FontSize.size_mini,
    width: 421,
    alignItems: "flex-end",
    left: 0,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    fontWeight: "500",
    lineHeight: 30,
    position: "absolute",
  },
  bronchitis1Icon: {
    top: 706,
    left: 1,
    width: 419,
    height: 279,
    position: "absolute",
  },
  avianBronchitisParent: {
    top: 1071,
    height: 985,
    width: 421,
  },
  avianMycoplasmosis: {
    left: 8,
    width: 394,
    fontSize: FontSize.size_21xl,
    justifyContent: "center",
    alignItems: "flex-end",
    top: 0,
  },
  mycoplasmaGallisepticumIs: {
    width: 421,
    top: 55,
    left: 0,
  },
  myco1Icon: {
    top: 696,
    width: 410,
    height: 223,
    left: 5,
    position: "absolute",
  },
  avianMycoplasmosisParent: {
    top: 3351,
    height: 919,
    width: 421,
  },
  nasalDischarge1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.97%",
    bottom: "-5.72%",
    left: "-3.5%",
  },
  nasalDischarge: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default NASALDISCHARGE;
