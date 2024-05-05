import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SWOLLENFEET = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.swollenFeet}>
      <View style={[styles.component4, styles.statusBarPosition]}>
        <View style={[styles.component4Child, styles.childPosition]} />
        <Pressable
          style={styles.akarIconsarrowRight}
          onPress={() => navigation.navigate("Symptoms")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
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
            source={require("../assets/cellular-connection3.png")}
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
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home-page.png")}
          />
        </Pressable>
      </View>
      <View style={styles.swollenFeetInner}>
        <LinearGradient
          style={[styles.frameChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#ccd4dd", "#3656f3"]}
        />
      </View>
      <View style={styles.swollenFeet1}>
        <LinearGradient
          style={[styles.swollenFeetChild, styles.childPosition]}
          locations={[0, 1]}
          colors={["#20252d", "#015967"]}
        />
        <Text style={[styles.swollenFeet2, styles.favusTypo]}>
          SWOLLEN FEET
        </Text>
        <View style={[styles.swollenFeetParent, styles.iconLayout]}>
          <View style={styles.swollenfeetPosition}>
            <LinearGradient
              style={[styles.swollenfeet, styles.swollenfeetPosition]}
              locations={[0, 1]}
              colors={["#20252d", "#015967"]}
            />
            <Text style={[styles.favus, styles.favusTypo]}>FAVUS</Text>
            <Text style={[styles.clickHereFor, styles.clickTypo]}>
              CLICK HERE FOR MORE INFORMATION
            </Text>
          </View>
          <View
            style={[
              styles.avianInfluenzaCommonlyKnowParent,
              styles.avianLayout,
            ]}
          >
            <Text
              style={[styles.avianInfluenzaCommonly, styles.fowlpoxLayout]}
            >{`Avian Influenza, commonly known as bird flu, is a highly contagious viral disease caused by strains of the influenza A virus that primarily infect wild birds and domestic poultry like chickens, turkeys, and ducks. While these avian influenza viruses generally circulate among bird populations, certain strains have been known to cross the species barrier and infect humans, albeit with limited human-to-human transmission. Most human cases of avian influenza result from direct or close contact with infected live or dead poultry or their contaminated environments. In chickens, highly pathogenic avian influenza strains can manifest severe signs, including respiratory distress characterized by gasping and coughing, as well as digestive issues like extreme diarrhea, which can rapidly lead to death. Physical abnormalities such as swelling around the head, neck, and eyes, along with purple discoloration of the wattles, combs, and legs, are also common indicators of avian influenza in chickens.







`}</Text>
            <Text style={[styles.avianInfluenza, styles.favusTypo]}>
              AVIAN INFLUENZA
            </Text>
            <Image
              style={[styles.avianInfluenza1, styles.avianLayout]}
              contentFit="cover"
              source={require("../assets/avian-influenza-1.png")}
            />
            <Text style={[styles.clickHereFor1, styles.clickTypo]}>
              CLICK HERE FOR MORE INFORMATION
            </Text>
          </View>
          <View
            style={[
              styles.fowlpoxIsASlowSpreadingYeParent,
              styles.fowlpoxLayout,
            ]}
          >
            <Text style={[styles.fowlpoxIsA, styles.fowlpoxLayout]}>
              Fowlpox is a slow-spreading yet economically significant viral
              infection that affects chickens and turkeys on a global scale.
              This disease manifests in two distinct forms: cutaneous and
              diphtheritic. The cutaneous form is characterized by the
              development of nodular lesions on the unfeathered skin of the
              affected birds. On the other hand, the diphtheritic form primarily
              targets the upper gastrointestinal and respiratory tracts, causing
              lesions to form from the mouth to the esophagus and in the
              tracheal mucosa. The diagnosis of fowlpox relies on observing the
              characteristic gross and microscopic lesions, and it can be
              confirmed through PCR assays designed to detect the fowlpox
              virus-specific genes. While fowlpox is considered a slow-spreading
              viral infection, it is regarded as an economically important
              disease within the commercial poultry industry due to its
              potential to cause productivity losses and mortality in affected
              flocks. Vaccination plays a crucial role in preventing the disease
              and limiting its spread among poultry populations, making it an
              essential component of disease management strategies in commercial
              poultry operations worldwide.
            </Text>
            <Image
              style={styles.fowlPox1}
              contentFit="cover"
              source={require("../assets/fowl-pox-1.png")}
            />
            <Text style={[styles.fowlPox, styles.favusTypo]}>FOWL POX</Text>
            <Text style={[styles.clickHereFor2, styles.clickTypo]}>
              CLICK HERE FOR MORE INFORMATION
            </Text>
          </View>
          <Text style={[styles.favusAlsoKnown, styles.fowlpoxLayout]}>
            Favus, also known as avian ringworm, is a fungal skin infection
            affecting chickens caused by a group of zoophilic fungi called
            dermatophytes, with Microsporum gallinae (or Lophophyton gallinae)
            being the most common species isolated in cases of favus. The
            initial signs of this infection include the development of white,
            powdery spots and wrinkled crusts with scabs along the comb and
            wattles of affected chickens. As the infection progresses, the
            fungus spreads to other areas of the head, causing the skin to
            thicken and appear crusty and scaly. In long-standing or severe
            cases, favus can result in permanent damage to the beak and eyelids.
            This fungal infection is transmitted to chickens through direct or
            indirect contact with the skin of other infected birds, animals,
            insects, people, or contaminated soil and fomites such as equipment,
            objects, and clothing. Early detection and treatment are crucial to
            prevent the spread of favus within a flock and to avoid potential
            long-term complications for individual birds.
          </Text>
          <Image
            style={styles.favus1Icon}
            contentFit="cover"
            source={require("../assets/favus-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  favusTypo: {
    fontFamily: FontFamily.rowdiesBold,
    fontWeight: "700",
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    position: "absolute",
  },
  swollenfeetPosition: {
    height: 3223,
    width: 460,
    left: 0,
    top: 0,
    position: "absolute",
  },
  clickTypo: {
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.rowdiesRegular,
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
    lineHeight: 30,
    position: "absolute",
  },
  avianLayout: {
    width: 421,
    position: "absolute",
  },
  fowlpoxLayout: {
    width: 405,
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
    top: "0%",
    right: "0%",
    width: "100%",
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
    top: "0%",
    right: "0%",
    width: "100%",
  },
  frameChild: {
    borderRadius: Border.br_10xl,
    backgroundColor: "transparent",
  },
  swollenFeetInner: {
    height: "0.59%",
    width: "27.2%",
    top: "98.16%",
    right: "36.36%",
    bottom: "1.24%",
    left: "36.45%",
    position: "absolute",
  },
  swollenFeetChild: {
    backgroundColor: "transparent",
  },
  swollenFeet2: {
    top: "3.95%",
    left: "13.48%",
  },
  swollenfeet: {
    backgroundColor: "transparent",
  },
  favus: {
    top: 2110,
    left: 141,
  },
  clickHereFor: {
    top: 3137,
    left: 86,
    textAlign: "left",
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.rowdiesRegular,
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
  },
  avianInfluenzaCommonly: {
    top: 47,
    left: 5,
    alignItems: "flex-end",
    width: 405,
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
  },
  avianInfluenza: {
    left: 10,
    top: 0,
  },
  avianInfluenza1: {
    top: 633,
    height: 212,
    left: 0,
  },
  clickHereFor1: {
    top: 857,
    left: 66,
    textAlign: "center",
  },
  avianInfluenzaCommonlyKnowParent: {
    top: 57,
    left: 20,
    height: 887,
  },
  fowlpoxIsA: {
    top: 68,
    alignItems: "flex-end",
    width: 405,
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
    left: 0,
  },
  fowlPox1: {
    top: 774,
    left: 35,
    width: 335,
    height: 259,
    position: "absolute",
  },
  fowlPox: {
    left: 88,
    top: 0,
  },
  clickHereFor2: {
    top: 1045,
    left: 58,
    textAlign: "left",
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.rowdiesRegular,
    textDecoration: "underline",
    fontSize: FontSize.size_mini,
  },
  fowlpoxIsASlowSpreadingYeParent: {
    top: 985,
    left: 25,
    height: 1075,
  },
  favusAlsoKnown: {
    top: 2153,
    left: 21,
    alignItems: "flex-end",
    width: 405,
    fontFamily: FontFamily.rowdiesRegular,
    fontSize: FontSize.size_mini,
    display: "flex",
    textAlign: "left",
    color: Color.colorGainsboro_100,
    lineHeight: 30,
  },
  favus1Icon: {
    top: 2757,
    left: 43,
    width: 369,
    height: 370,
    position: "absolute",
  },
  swollenFeetParent: {
    top: "9.07%",
    bottom: "-9.07%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  swollenFeet1: {
    height: "92.87%",
    width: "107.48%",
    top: "12.85%",
    right: "-3.97%",
    bottom: "-5.72%",
    left: "-3.5%",
    position: "absolute",
  },
  swollenFeet: {
    backgroundColor: Color.colorDarkslategray,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default SWOLLENFEET;
