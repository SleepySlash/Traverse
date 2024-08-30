import { View, Text, TextInput } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import { router, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";

function SearchPlace() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
      headerTintColor: Colors.PRIMARY,
    });
  }, []);

  useEffect(() => {
    // console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        padding: 25,
        paddingTop: 75,
        height: "100%",
      }}
    >
      <View style={{ marginTop: 30, width: "100%" }}>
        <MapboxPlacesAutocomplete
          id="mapbox-autocomplete"
          placeholder="Search Place"
          accessToken={
            "pk.eyJ1Ijoic2xlZXB5c2xhc2giLCJhIjoiY2x6aDJuejZxMDA4aTJ4c2NpZ2xmZHM5MiJ9.N1dL91438i5vU3YlF73fog"
          }
          onPlaceSelect={(data) => {
            setTripData({
              locationInfo: {
                name: data.place_name,
                coordinates: data.geometry.coordinates,
                category: data.properties,
              },
            });
            router.push("/create-trip/select-traveler");
          }}
          onClearInput={() => {
            setTripData({
              locationInfo: {
                name: "",
                coordinates: [],
                category: {},
              },
            });
          }}
          countryId="IN"
          inputStyle={{
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 8,
            borderWidth: 1,
            height: 40,
            width: "100%",
            borderColor: Colors.PRIMARY,
            color: Colors.TEXT,
            fontSize: 16,
          }}
          listStyle={{
            backgroundColor: Colors.CYAN_GREEN,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            fontFamily: "o-medium",
            fontSize: 16,
            paddingBottom: 10,
          }}
        />
      </View>
    </View>
  );
}

export default SearchPlace;
