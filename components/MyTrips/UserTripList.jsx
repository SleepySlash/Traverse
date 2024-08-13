import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  const LatestTrip = userTrips[0].tripData;

  return (
    <View>
      <View>
        <Image
          source={require("../../assets/images/gif1.gif")}
          style={{
            width: "100%",
            height: 230,
            objectFit: "cover",
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "o-medium",
            fontSize: 24,
            color: Colors.TEXT,
          }}
        >
          {userTrips[0]?.tripData?.locationInfo?.name}
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
        {userTrips.map((trip, index) => (
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
