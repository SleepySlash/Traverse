import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

function StartNewTripCard() {
  return (
    <View
      style={{
        marginTop: 50,
        paddingHorizontal: 20,
        height: "35%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.WHITE,
      }}
    >
      <Entypo name="location" size={30} color={Colors.BLACK} />
      <Text
        style={{ fontSize: 20, fontFamily: "o-medium", color: Colors.TEXT }}
      >
        No trips planned yet 😥
      </Text>
      <Text
        style={{
          fontFamily: "o-regular",
          fontSize: 17,
          textAlign: "center",
          justifyContent: "center",
          color: Colors.TEXT,
        }}
      >
        Let's plan a new trip! Less GOO!
      </Text>
      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          borderRadius: 10,
          backgroundColor: Colors.CYAN_GREEN,
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text
          style={{ fontFamily: "o-medium", fontSize: 17, color: Colors.WHITE }}
        >
          Start a new Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default StartNewTripCard;
