import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import LodgingDetails from "./Lodging";
import TravelDetails from "./TripDay";

export default function TripDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { trip, lodging, travelplan } = route.params;
  const [TripDetails, setTripDetails] = useState(null);
  const [TravelPlan, setTravelPlan] = useState(null);
  const [Lodging, setLodging] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    // console.log(JSON.parse(trip));
    setTripDetails(JSON.parse(trip));
    setLodging(JSON.parse(lodging));
    setTravelPlan(JSON.parse(travelplan));
  }, []);
  return (
    <ScrollView style={{ marginTop: 14 }}>
      <Image
        source={{ uri: TripDetails?.image }}
        style={{
          width: "100%",
          height: 330,
        }}
      />
      <View
        style={{
          padding: 15,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: "100%",
          backgroundColor: Colors.WHITE,
          marginTop: -20,
        }}
      >
        <Text
          style={{ color: Colors.TEXT, fontSize: 25, fontFamily: "o-bold" }}
        >
          {TripDetails?.locationInfo?.name}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            {moment(TripDetails?.startDate).format("DD MMM YYYY")}
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            -
          </Text>
          <Text
            style={{
              fontFamily: "o-regular",
              fontSize: 17,
              color: Colors.TEXT,
            }}
          >
            {moment(TripDetails?.endDate).format("DD MMM YYYY")}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 17,
            color: Colors.TEXT,
          }}
        >
          {TripDetails?.traveler}
        </Text>

        {/* Lodging */}
        {Lodging && <LodgingDetails details={Lodging} />}

        {/* Trip Day(s) Plan */}
        <TravelDetails details={TravelPlan} />
      </View>
    </ScrollView>
  );
}
