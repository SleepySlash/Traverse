import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
export const OptionsCard = ({ option, selectedTraveler }) => (
  <View
    style={[
      {
        padding: 15,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.CARD,
        borderRadius: 10,
      },
      selectedTraveler?.id === option?.id && {
        borderWidth: 2,
        borderColor: Colors.TITLE,
      },
    ]}
  >
    <View>
      <Text
        style={{ fontSize: 20, color: Colors.TEXT1, fontFamily: "o-medium" }}
      >
        {option.title}
      </Text>
      <Text
        style={{ fontSize: 17, color: Colors.TITLE, fontFamily: "o-regular" }}
      >
        {option?.desc}
      </Text>
    </View>
    <Text style={{ fontSize: 40, padding: 10 }}>{option.icon}</Text>
  </View>
);
