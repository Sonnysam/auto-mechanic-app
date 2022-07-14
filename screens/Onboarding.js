import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";


const Done = ({ ...props }) => (
  <TouchableOpacity
    {...props}
    style={{marginHorizontal: 20}}
  >
    <Text style={{fontSize: 17, fontWeight: 'bold'}}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
      DoneButtonComponent={Done}
      onDone={() => navigation.navigate("Login")}
      onSkip={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "rgb(247, 228, 158)",
          image: (
            <Image
              source={require("../assets/images/plum.png")}
              style={{ width: 230, height: 230 }}
            />
          ),
          title: "Need to fix your broken pipe?",
          subtitle: "Craftman has got you covered",
        },
        {
          backgroundColor: "rgb(175, 223, 255)",
          image: (
            <Image
              source={require("../assets/images/2.png")}
              style={{ width: 230, height: 230 }}
            />
          ),
          title: "Is your car broken?",
          subtitle: "Craftman has got you covered too",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/carpenter.png")}
              style={{ width: 230, height: 230 }}
            />
          ),
          title: "Is your house broken?",
          subtitle: "Craftman has got you covered too",
        },
        {
          backgroundColor: "rgb(185, 244, 176)",
          image: (
            <Image
              source={require("../assets/images/5.png")}
              style={{
                width: 155,
                height: 202,
                marginHorizontal: 10,
                marginVertical: 10,
              }}
            />
          ),
          title: "Excellent results you can trust!",
          subtitle: "Don't worry, we'll take care of it",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  Done: {
    // backgroundColor: "#000000",
    color: "#ffffff",
    marginRight: 20,
  }
})