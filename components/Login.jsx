import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("./../assets/images/login.jpeg")}
        style={{
          height: 500,
          width: "100%",
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "o-bold",
            textAlign: "center",
            color: Colors.PRIMARY,
            marginTop: 10,
          }}
        >
          Traverse
        </Text>

        <Text
          style={{
            fontSize: 17,
            fontFamily: "o-regular",
            textAlign: "center",
            color: Colors.TEXT,
            marginTop: 15,
          }}
        >
          Discover your next adventure effortlessly. Personalized Vacations at
          your fingertips. Travel smart with Traverse.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "o-medium",
              fontSize: 17,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 99,
    marginTop: "15%",
  },
});
