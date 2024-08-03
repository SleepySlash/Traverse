import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfiguration";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = () => {
    if (email?.length < 4 || password?.length < 3) {
      ToastAndroid.show("Please enter valid details", ToastAndroid.LONG);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("logging in ", user);
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View
      style={{
        paddingHorizontal: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/")}>
        <Ionicons
          name="arrow-back"
          size={24}
          style={{ paddingVertical: 5 }}
          color={Colors.CYAN_GREEN}
        />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "o-bold", fontSize: 30, color: Colors.PRIMARY }}
      >
        Welcome Back!
      </Text>
      <Text
        style={{
          fontFamily: "o-bold",
          fontSize: 27,
          marginTop: 20,
          color: Colors.GRAY,
        }}
      >
        Let's Sign You In
      </Text>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "o-medium",
            paddingHorizontal: 10,
            fontSize: 15,
          }}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "o-medium",
            paddingHorizontal: 10,
            fontSize: 15,
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter your password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "o-medium",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/auth/sign-up")}
        style={{
          backgroundColor: Colors.WHITE,
          fontFamily: "o-regular",
          fontSize: 12,
          padding: 15,
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: Colors.CYAN_GREEN,
            fontFamily: "o-medium",
            fontSize: 17,
            textAlign: "center",
            textAlign: "center",
          }}
        >
          Create an Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 60,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
  },
});
