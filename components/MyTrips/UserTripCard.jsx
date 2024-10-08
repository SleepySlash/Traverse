import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { useRouter } from "expo-router";
export default function UserTripCard({ trip }) {
  // Check if tripPlan is a string (JSON) or an object
  const tripPlan = trip?.tripPlan;
  // console.log("log image", trip);
  const loactionName = tripPlan?.tour?.destination;
  const location = loactionName.split(",")[0];
  // console.log(trip.tripPlan.tour.itinerary);
  const LatestTrip = trip.tripData;
  const tour = trip.tripPlan.tour;
  const itinerary = tour.itinerary;
  const lodging = itinerary.lodging;
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/trip-details",
          params: {
            trip: JSON.stringify(LatestTrip),
            lodging: JSON.stringify(lodging),
            travelplan: JSON.stringify(itinerary),
          },
        })
      }
    >
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#f9f9f9",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          gap: 25,
          height: 110,
        }}
      >
        <Image
          source={{ uri: trip?.tripData?.image }}
          style={{
            width: "45%",
            height: "98%",
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontFamily: "o-medium",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            {location}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 14,
              color: Colors.TEXT,
            }}
          >
            {moment(
              trip?.tripData?.locationInfo?.startDate ||
                trip?.tripData?.startDate
            ).format("DD MMM yyyy")}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 14,
              color: Colors.TEXT,
            }}
          >
            Travellers: {tripPlan?.tour?.travelerType}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 14,
              color: Colors.TEXT,
            }}
          >
            Budget: {trip?.tripData?.budget}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 14,
              color: Colors.TEXT,
            }}
          >
            Duration: {tripPlan?.tour?.duration}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
