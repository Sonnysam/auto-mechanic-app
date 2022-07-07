import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";

export default function OnBoarding() {
  return (
    <View>
      <Onboarding
        pages={[
          {
            backgroundColor: "rgb(247, 228, 158)",
            image: <Image source={require("../assets/images/2.png")} />,
            title: "Is your car broken down?",
            subtitle: "Craftman auto car repairs has got you covered",
          },
          {
            backgroundColor: "rgb(175, 223, 255)",
            image: <Image source={require("../assets/images/4.png")} />,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "rgb(185, 244, 176)",
            image: <Image source={require("../assets/images/5.png")} />,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({})