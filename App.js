const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Start from "./screens/Start";
import Login from "./components/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import OTPVerfication from "./screens/OTPVerfication";
import CreateNewPassword from "./screens/CreateNewPassword";
import SideBar from "./components/SideBar";
import About from "./screens/About";
import Profile from "./screens/Profile";
import FAQ from "./screens/FAQ";
import Symptoms from "./screens/Symptoms";
import NASALDISCHARGE from "./screens/NASALDISCHARGE";
import SWOLLENCOMB from "./screens/SWOLLENCOMB";
import SWOLLENFEET from "./screens/SWOLLENFEET";
import SWOLLENEYES from "./screens/SWOLLENEYES";
import SNEEZING from "./screens/SNEEZING";
import DIARRHEA from "./screens/DIARRHEA";
import ATAXIA from "./screens/ATAXIA";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
    "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Knewave-Regular": require("./assets/fonts/Knewave-Regular.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Rowdies-Regular": require("./assets/fonts/Rowdies-Regular.ttf"),
    "Rowdies-Bold": require("./assets/fonts/Rowdies-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Start"
              component={Start}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OTPVerfication"
              component={OTPVerfication}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateNewPassword"
              component={CreateNewPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Symptoms"
              component={Symptoms}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NASALDISCHARGE"
              component={NASALDISCHARGE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENCOMB"
              component={SWOLLENCOMB}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENFEET"
              component={SWOLLENFEET}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SWOLLENEYES"
              component={SWOLLENEYES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SNEEZING"
              component={SNEEZING}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DIARRHEA"
              component={DIARRHEA}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ATAXIA"
              component={ATAXIA}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
