import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { OptionsCard } from "../../components/CreateTrip/OptionCard";
import { SelectTravelsList } from "../../constants/Options";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectTraveler() {
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

  useEffect(() => {
    setTripData({
      ...tripData,
      traveler: selectedTraveler,
    });
  }, [selectedTraveler]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 60,
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
        Who's Travelling
      </Text>
      <View style={{ paddingTop: "2%" }}>
        <Text
          style={{
            fontFamily: "o-bold",
            fontSize: 23,
            color: Colors.TEXT1,
          }}
        >
          please choose one
        </Text>
        <FlatList
          data={SelectTravelsList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedTraveler(item)}
              key={index}
              style={{ marginVertical: 2 }}
            >
              <OptionsCard option={item} selectedTraveler={selectedTraveler} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          selectedTraveler && router.push("/create-trip/select-date");
        }}
        style={{
          backgroundColor: Colors.CARD,
          padding: 20,
          marginTop: 25,
          width: "70%",
          borderRadius: 10,
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Text
          style={{ color: Colors.WHITE, fontSize: 20, fontFamily: "o-bold" }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
}
