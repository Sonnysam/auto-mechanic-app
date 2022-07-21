import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import  { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

export default function Home() {

  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login",)
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text style={styles.btn}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: "100%",
    height: 55,
    borderRadius: 12,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    marginTop: 20,
    paddingHorizontal: 140,
    fontSize: 20,
  },
});