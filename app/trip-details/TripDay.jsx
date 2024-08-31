import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function TravelDetails({ details }) {
  if (!details) {
    return (
      <View style={{ marginTop: 7 }}>
        <Text
          style={{
            color: Colors.TEXT,
            fontSize: 24,
            fontFamily: "o-bold",
            marginBottom: 7,
          }}
        >
          No Trip Details Available
        </Text>
      </View>
    );
  }

  details = JSON.parse(JSON.stringify(details));
  if (details.lodging) {
    delete details.lodging;
  }

  const daysArray = Object.keys(details).map((key) => ({
    day: key,
    activities: details[key],
  }));

  return (
    <View style={{ marginTop: 7 }}>
      <Text
        style={{
          color: Colors.TEXT,
          fontSize: 24,
          fontFamily: "o-bold",
          marginTop: 15,
        }}
      >
        Trip Plan
      </Text>
      <FlatList
        data={daysArray.reverse()}
        keyExtractor={(item) => item.day}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                color: Colors.TEXT,
                fontSize: 20,
                fontFamily: "o-bold",
                marginTop: 7,
              }}
            >
              Day{item.day.slice(3)}
            </Text>
            <View
              style={{
                borderRadius: 15,
                borderBlockColor: Colors.ICON,
                borderWidth: 1,
                marginVertical: 5,
              }}
            >
              {["morning", "afternoon", "evening"].map(
                (timeOfDay) =>
                  item.activities[timeOfDay] && (
                    <View
                      style={{
                        padding: 10,
                      }}
                      key={timeOfDay}
                    >
                      <Text
                        style={{
                          color: Colors.TEXT,
                          fontSize: 18,
                          fontFamily: "o-regular",
                        }}
                      >
                        ৹{" "}
                        {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}
                      </Text>
                      <Text
                        style={{
                          color: Colors.TEXT,
                          fontSize: 17,
                          fontFamily: "o-regular",
                          paddingHorizontal: 7,
                          paddingTop: 4,
                        }}
                      >
                        {item.activities[timeOfDay].activity}
                      </Text>
                      <Text
                        style={{
                          color: Colors.TEXT,
                          fontSize: 16,
                          fontFamily: "o-regular",
                          paddingTop: 4,
                          paddingHorizontal: 7,
                        }}
                      >
                        {item.activities[timeOfDay].description}
                      </Text>
                    </View>
                  )
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}
