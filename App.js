import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./screens/OnBoarding";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import Sign from "./screens/Sign";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Sign" component={Sign} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
