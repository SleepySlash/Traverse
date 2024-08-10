import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
} from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { OptionsCard } from "@/components/CreateTrip/OptionCard";
import { SelectBudgetList } from "@/constants/Options";
export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [selectedBudget, setSelectedBudget] = useState();

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
      budget: selectedBudget?.title,
    });
  }, [selectedBudget]);

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
        Budget
      </Text>
      <View style={{ paddingTop: "2%" }}>
        <Text
          style={{
            fontFamily: "o-regular",
            fontSize: 17,
            paddingTop: 10,
            color: Colors.TITLE,
          }}
        >
          choose your spendings for the trip
        </Text>

        <FlatList
          data={SelectBudgetList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedBudget(item)}
              key={index}
              style={{ marginVertical: 2 }}
            >
              <OptionsCard option={item} selectedBudget={selectedBudget} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          selectedBudget && router.push("/create-trip/review-trip");
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
