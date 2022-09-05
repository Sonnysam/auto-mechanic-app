import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from "react-native-onboarding-swiper";
import tw from "twrnc";


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
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/Sonny1.png")}
              style={{ width: 260, height: 270 }}
            />
          ),
          title: "Car tyre services available",
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/Sonny2.png")}
              style={{ width: 250, height: 250 }}
            />
          ),
          title: "We offer general car diagnosis services too",
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/Sonny5.png")}
              style={{ width: 320, height: 250 }}
            />
          ),
          title: "Towing services available",
          subtitle: "",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../assets/images/Sonny4.png")}
              style={{
                width: 350,
                height: 265,
                marginHorizontal: 8,
                marginVertical: 8,
              }}
            />
          ),
          title: "Excellent results you can trust!",
          subtitle: "",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  Done: {
    color: "#ffffff",
    marginRight: 20,
  }
})