import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import { Calendar } from 'react-native-calendars';
import { Colors } from "@/constants/Colors";

export default function SelectDate() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.TITLE,
    });
  }, []);

  const onDateChange = (date) => {
    console.log("Selected Date:", date);
    // Perform additional actions with the selected date here
  };

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
        Pick your Travel Dates
      </Text>

      <Calendar
      onDayPress={(day) => {
        console.log('Selected day', day);
      }}
      markedDates={{
        '2023-08-10': { selected: true, marked: true, selectedColor: 'blue' },
        '2023-08-16': { marked: true },
      }}/>
    </View>
  );
}
