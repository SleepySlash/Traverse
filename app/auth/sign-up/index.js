import React, { useState } from "react";
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
import { auth } from "./../../../configs/FirebaseConfiguration";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const OnCreateAccount = () => {
    if (email?.length < 4 || fullName?.length < 2 || password?.length < 3) {
      ToastAndroid.show("Please enter valid details", ToastAndroid.LONG);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // console.log(user);
        router.replace("/mytrip");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <View
      style={{
        paddingHorizontal: 25,
        paddingTop: 65,
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
          href="/auth/sign-in"
        />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "o-bold", fontSize: 30, color: Colors.PRIMARY }}
      >
        Welcome!
      </Text>
      <Text
        style={{
          fontFamily: "o-bold",
          fontSize: 27,
          marginTop: 20,
          color: Colors.GRAY,
        }}
      >
        Let's Sign You Up
      </Text>

      <View style={{ marginTop: 35 }}>
        <Text
          style={{
            fontFamily: "o-medium",
            paddingHorizontal: 10,
            fontSize: 15,
          }}
        >
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Full Name"
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
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
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{ marginTop: 30 }}>
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
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={OnCreateAccount}>
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "o-medium",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/auth/sign-in")}
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
          Already a Member? Sign In
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
