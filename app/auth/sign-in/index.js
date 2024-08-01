import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
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
