import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { auth, db } from "../../configs/FirebaseConfiguration";
import { collection, getDocs, query, where } from "firebase/firestore";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import UserTripList from "../../components/MyTrips/UserTripList";
import { useRouter } from "expo-router";

function MyTrip() {
  const router = useRouter();
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      setUserTrips((prev) => [...prev, doc.data()]);
      // console.log(doc.id, "=>", doc.data());
    });
    setLoading(false);
  };

  return (
    <View
      style={{
        paddingHorizontal: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ fontFamily: "o-bold", fontSize: 30, color: Colors.PRIMARY }}
        >
          My Trips
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add-circle-sharp" size={30} color={Colors.ICON} />
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size={"large"} color={Colors.CARD} />}
      {userTrips?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </View>
  );
}

export default MyTrip;
