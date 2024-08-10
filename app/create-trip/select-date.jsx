import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Calendar } from "react-native-calendars";
import { Colors } from "@/constants/Colors";
import moment from "moment";
import { CreateTripContext } from "@/context/CreateTripContext";

export default function SelectDate() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.TITLE,
    });
  }, []);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  const onDayPress = (day) => {
    if (!selectedStartDate) {
      // Start a new date range
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
      setMarkedDates({
        [day.dateString]: {
          selected: true,
          startingDay: true,
          color: Colors.CARD,
        },
      });
    } else if (!selectedEndDate) {
      const startDate = new Date(selectedStartDate);
      const endDate = new Date(day.dateString);

      if (endDate >= startDate) {
        const newMarkedDates = {};
        const dateRange = getDatesInRange(startDate, endDate);

        dateRange.forEach((date, index) => {
          newMarkedDates[date] = {
            selected: true,
            color: Colors.CARD,
            startingDay: index === 0,
            endingDay: index === dateRange.length - 1,
          };
        });

        setSelectedEndDate(day.dateString);
        setMarkedDates(newMarkedDates);
      } else {
        // If end date is before start date, reset the selection
        setSelectedStartDate(day.dateString);
        setSelectedEndDate(null);
        setMarkedDates({
          [day.dateString]: {
            selected: true,
            startingDay: true,
            color: Colors.CARD,
          },
        });
      }
    } else {
      // Reset the selection if both start and end dates are already selected
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
      setMarkedDates({
        [day.dateString]: {
          selected: true,
          startingDay: true,
          color: Colors.CARD,
        },
      });
    }
  };

  // Function to get all dates in the range
  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date).toISOString().split("T")[0]);
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const today = moment().format("YYYY-MM-DD");

  const onDateSelectionNext = () => {
    if (selectedStartDate && selectedEndDate) {
      const startDate = moment(selectedStartDate);
      const endDate = moment(selectedEndDate);
      const totalDays = endDate.diff(startDate, "days") + 1;
      console.log("Selected Start Date:", startDate.format("YYYY-MM-DD"));
      console.log("Selected End Date:", endDate.format("YYYY-MM-DD"));
      console.log("Total Days:", totalDays);
      setTripData({
        ...tripData,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        days: totalDays,
      });
      router.push("/create-trip/select-budget");
    } else {
      ToastAndroid.show("Please select start and end date", ToastAndroid.LONG);
    }
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
      <Text
        style={{
          fontFamily: "o-regular",
          fontSize: 17,
          paddingTop: 10,
          color: Colors.TITLE,
        }}
      >
        Please select all the dates you plan to travel.
      </Text>

      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
          marginTop: 30,
        }}
      >
        <Calendar
          markingType={"period"}
          markedDates={markedDates}
          onDayPress={onDayPress}
          minDate={today}
          theme={{
            selectedDayBackgroundColor: Colors.CARD,
            todayTextColor: "#70d7c7",
            dayTextColor: Colors.TEXT,
            textDisabledColor: "#d9e1e8",
            arrowColor: "#70d7c7",
            monthTextColor: "#70d7c7",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "500",
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 14,
            borderRadius: 10,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionNext}
        style={{
          backgroundColor: Colors.CARD,
          padding: 20,
          marginTop: 35,
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
