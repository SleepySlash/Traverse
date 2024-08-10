import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { OptionsCard } from "../../components/CreateTrip/OptionCard";
import { SelectTravelsList } from "../../constants/Options";
import { CreateTripContext } from "@/context/CreateTripContext";
import { Ionicons } from "@expo/vector-icons";

export default function ReviewTrip() {
  const router = useRouter();
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.TITLE,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.TEXT,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "o-bold",
          fontSize: 30,
          color: Colors.TEXT1,
          marginTop: 20,
        }}
      >
        Trip Details
      </Text>
      <View style={{ paddingTop: "2%" }}>
        <Text
          style={{
            fontFamily: "o-bold",
            fontSize: 17,
            color: Colors.TITLE,
          }}
        >
          please confirm your trip details
        </Text>
        <View
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons name="location" size={34} color={Colors.TITLE} />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {tripData.locationInfo?.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons name="calendar" size={34} color={Colors.TITLE} />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {tripData.locationInfo?.name}
            </Text>
          </View>
        </View>
        <View
        
          style={{
            display: "flex",
            marginTop: 20,
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons name="location" size={34} color={Colors.TITLE} />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {tripData.locationInfo?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
