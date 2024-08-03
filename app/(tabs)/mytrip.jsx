import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        paddingHorizontal: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ fontFamily: "o-bold", fontSize: 30, color: Colors.PRIMARY }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle-sharp" size={30} color={Colors.ICON} />
      </View>

      {userTrips?.length == 0 ? <StartNewTripCard /> : null}
    </View> 
  );
}

export default MyTrip;
