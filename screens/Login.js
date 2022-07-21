import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Google from 'expo-google-app-auth';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core';


export default function Login() {

  const [gooleSubmitting, setGoogleSubmitting] = useState(false);

  // STATES FOR LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");

  const navigation = useNavigation();

  useEffect(() =>{
     const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home");
      }
    })
    return unsubscribe
    // return () => unsubscribe();
    }, [])

  const handleSignUp = () => {
    auth 
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with', user.email);
      })
      .catch(error => alert(error.message)); 
  }

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
      })
      .catch((error) => alert(error.message)); 
  }

  const handleLogin = () => {
    const config = {
      iosClientId: `899505016844-obpul11fuannd8pcq1s7rcs19buc2544.apps.googleusercontent.com`,
      androidClientId: `899505016844-a28r1uq2m1u5bis5m1sbioegrgtfmbdt.apps.googleusercontent.com`,
      scopes: ["profile", "email"]
    };
    Google.logInAsync(config)
      .then(result => {
        const {type, user} = result;
        if (type == "success") {
          const {email, name, photoUrl} = user;
          handleMessage('Google Login Success', 'success');
          setTimeout(() =>
            navigation.navigate('Home', { email, name, photoUrl }),1000);
        }else{
          handleMessage("Login failed");
        }
      })
      .catch(error => {
        console.log(error);
        handleMessage('An error occurred. Please try again.');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/images/logo1.png")} />
      </View>
      <View style={styles.loginCont}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.btn}>SignUp</Text>
        </TouchableOpacity>
        <View style={styles.account}>
          <Text style={styles.accountText}>
            Already have an account?{" "}
              <Text
                style={styles.accountTextBold}
                onPress={handleSignIn}
                // onPress={() => navigation.navigate("Home")}
              >
                Sign In
              </Text>    
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Or</Text>
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.btn2}>
            <AntDesign name="google" size={25} color="white" />
            {"  "} Continue with Google
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
    justifyContent: "center",
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
    fontSize: 17,
  },
  text: {
    fontSize: 16,
    marginVertical: 6,
  },
  accountTextBold: {
    fontWeight: "bold",
    color: "#0782F9",
    fontSize: 18,
    marginHorizontal: 5,
    marginVertical: 10,
  }
});