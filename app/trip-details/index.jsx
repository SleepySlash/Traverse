import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";

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
    <View style={{ marginTop: 14 }}>
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
            {console.log("trip details ", TripDetails)}
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
        <Text
          style={{
            color: Colors.TEXT,
            fontSize: 24,
            fontFamily: "o-bold",
            marginTop: 15,
          }}
        >
          Lodging
        </Text>
        <View style={{ marginTop: 7 }}>
          <Text
            style={{
              color: Colors.TEXT,
              fontSize: 20,
              fontFamily: "o-bold",
            }}
          >
            Name :
            <Text
              style={{
                color: Colors.TEXT,
                fontSize: 20,
                fontFamily: "o-regular",
              }}
            >
              {" " + Lodging?.name}
            </Text>
          </Text>

          <Text
            style={{
              color: Colors.TEXT,
              fontSize: 20,
              fontFamily: "o-bold",
            }}
          >
            Description :{"  "}
            <Text
              style={{
                color: Colors.TEXT,
                fontSize: 20,
                fontFamily: "o-regular",
              }}
            >
              {Lodging?.description}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
