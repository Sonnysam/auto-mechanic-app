import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
// import * as Google from 'expo-auth-session/providers/google'


export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/images/logo1.png")} />
      </View>
      <View style={styles.loginCont}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#000"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Or</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.btn2}>
            <AntDesign name="google" size={22} color="white" />
            {" "} Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCont: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  logo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    marginTop: 16,
    paddingHorizontal: 10,
    fontSize: 17,
    color: "#000",
  },
  btn: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 20,
    paddingHorizontal: 140,
    fontSize: 20,

  },
  btn2: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    backgroundColor: "tomato",
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 0,
    paddingHorizontal: 65,
    fontSize: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  }
});