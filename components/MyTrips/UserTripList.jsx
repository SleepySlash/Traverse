import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  const LatestTrip = userTrips[userTrips.length - 1].tripData;
  const otherTrips = JSON.parse(JSON.stringify(userTrips));
  otherTrips.pop();
  console.log("altest wala trip ", LatestTrip);

  return (
    <View>
      <View style={{ marginTop: 14 }}>
        <Image
          source={{ uri: LatestTrip?.image }}
          style={{
            width: "100%",
            height: 230,
            objectFit: "cover",
            borderRadius: 12,
          }}
        />
      </View>
      <View style={{ borderRadius: 10 }}>
        <Text
          style={{
            fontFamily: "o-medium",
            fontSize: 22,
            color: Colors.TEXT,
            paddingTop: 25,
          }}
        >
          {LatestTrip?.locationInfo?.name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            {moment(LatestTrip.locationInfo.startDate).format("DD MMM yyyy")}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            {LatestTrip.traveler}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
            backgroundColor: Colors.ICON,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "o-medium",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            See your plan
          </Text>
        </TouchableOpacity>
        {/* Render all trips */}
        {otherTrips.map((trip, index) => (
          <View>
            {console.log(trip)}

            <UserTripCard
              trip={trip} // Pass the individual trip
              key={index}
              style={{ marginTop: 20 }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
