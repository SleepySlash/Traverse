import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn() {
  const router = useRouter();

  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

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
        <TextInput style={styles.input} placeholder="Enter your Email" />
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
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.replace()}>
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
