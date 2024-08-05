import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";

function SearchPlace() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search Place",
      headerTintColor: Colors.PRIMARY,
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        padding: 25,
        paddingTop: 75,
        height: "100%",
      }}
    >
      <MapboxPlacesAutocomplete
        id="mapbox-autocomplete"
        placeholder="Origin"
        accessToken={"pk.eyJ1Ijoic2xlZXB5c2xhc2giLCJhIjoiY2x6aDJuejZxMDA4aTJ4c2NpZ2xmZHM5MiJ9.N1dL91438i5vU3YlF73fog"}
        onPlaceSelect={(data) => {
          console.log(data);
        }}
        countryId="IN"
      />
    </View>
  );
}

export default SearchPlace;
