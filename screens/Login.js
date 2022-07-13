import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import * as Google from 'expo-auth-session/providers/google'

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/images/logo1.png")} />
      </View>
      <View style={styles.loginCont}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          autoCorrect={false}
        />
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
  }
});