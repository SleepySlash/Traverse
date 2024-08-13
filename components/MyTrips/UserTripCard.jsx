import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";

export default function UserTripCard({ trip }) {
  // Check if tripPlan is a string (JSON) or an object
  const tripPlan = trip?.tripPlan;
  console.log(trip.tripPlan.tour.itinerary);

  return (
    <View
      style={{
        marginTop: 20,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
      }}
    >
      <Image
        source={require("../../assets/images/login.jpeg")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 10,
          marginBottom: 10,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: "o-medium",
            fontSize: 20,
            color: Colors.TEXT,
          }}
        >
          {tripPlan?.tour?.destination}
        </Text>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 16,
            color: Colors.TEXT,
          }}
        >
          {moment(
            trip?.tripData?.locationInfo?.startDate || trip?.tripData?.startDate
          ).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 16,
            color: Colors.TEXT,
          }}
        >
          Travelers: {tripPlan?.tour?.travelerType}
        </Text>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 16,
            color: Colors.TEXT,
          }}
        >
          Budget: {trip?.tripData?.budget}
        </Text>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 16,
            color: Colors.TEXT,
          }}
        >
          Duration: {tripPlan?.tour?.duration}
        </Text>
      </View>
    </View>
  );
}
