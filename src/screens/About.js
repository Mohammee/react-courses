import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}> Student Elearning Porject </Text>
      <Text style={styles.paraStyle}> lukily for students  😀 </Text>


      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About us </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          This Application is for students to online learning courses,
          students can subsicribe for the course he need,
          so students can leanring any time he need it.
        </Text>
      </View>

  
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: "Nunito_700Bold",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
    fontFamily: "WorkSans_400Regular",
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "Nunito_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 26,
  },
});

export default About;
