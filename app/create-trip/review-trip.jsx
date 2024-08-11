import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { OptionsCard } from "../../components/CreateTrip/OptionCard";
import { SelectTravelsList } from "../../constants/Options";
import { CreateTripContext } from "@/context/CreateTripContext";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import moment from "moment";

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
        {/* Destination Details */}
        <View
          style={{
            display: "flex",
            marginTop: "15%",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons
            name="location"
            size={36}
            color={Colors.TITLE}
            style={{ paddingTop: 5 }}
          />
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

        {/* Travel Schedule  */}
        <View
          style={{
            display: "flex",
            marginTop: "17%",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons
            name="calendar"
            size={36}
            color={Colors.TITLE}
            style={{ paddingTop: 5 }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Travelling Dates
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " To " +
                moment(tripData?.endDate).format("DD MMM") +
                "  "}
              ( {tripData?.days} days )
            </Text>
          </View>
        </View>

        {/* Travellers */}
        <View
          style={{
            display: "flex",
            marginTop: "17%",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <Ionicons
            name="people"
            size={36}
            color={Colors.TITLE}
            style={{ paddingTop: 5 }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Travellers
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {tripData?.traveler}
            </Text>
          </View>
        </View>

        {/* Budget */}

        <View
          style={{
            display: "flex",
            marginTop: "17%",
            flexDirection: "row",
            gap: 25,
          }}
        >
          <FontAwesome5
            name="money-bill-wave"
            size={28}
            color={Colors.TITLE}
            style={{ paddingTop: 5 }}
          />
          <View>
            <Text
              style={{
                fontSize: 20,
                color: Colors.TITLE,
                fontFamily: "o-medium",
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: Colors.TEXT1,
                fontFamily: "o-regular",
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push("/create-trip/generate-trip");
          }}
          style={{
            backgroundColor: Colors.CARD,
            padding: 13,
            marginTop: "20%",
            width: "70%",
            borderRadius: 10,
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{ color: Colors.WHITE, fontSize: 20, fontFamily: "o-bold" }}
          >
            Let's Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
