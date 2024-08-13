// Styles for Car Version of loading screen
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useContext, useState, useRef } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AIModel";
import { auth, db } from "../../configs/FirebaseConfiguration";
import { setDoc, doc } from "firebase/firestore";
export default function GenerateTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const user = auth.currentUser;

  const [loading, setLoading] = useState(false);
  const hasGenerated = useRef(false); // Ref to prevent multiple calls

  const GenerateAiTrip = async () => {
    if (hasGenerated.current || !tripData || loading) {
      return;
    }

    setLoading(true);
    hasGenerated.current = true; // Mark as executed

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replaceAll("{totalDays}", tripData?.days)
      .replaceAll("{totalNights}", tripData?.days - 1)
      .replace("{travellers}", tripData?.traveler)
      .replace("{budget}", tripData?.budget);

    console.log(FINAL_PROMPT);

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      const tripResponse = await JSON.parse(result.response.text());
      const docId = Date.now().toString();

      await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user.email,
        tripPlan: tripResponse,
        tripData: tripData,
      });

      router.push("/mytrip");
    } catch (error) {
      console.error("Error generating AI trip:", error);
    } finally {
      setLoading(false);
      hasGenerated.current = false; // Reset ref for future use
    }
  };

  // Trigger trip generation when the component mounts
  if (!hasGenerated.current && tripData) {
    GenerateAiTrip();
  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.BG2,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "o-bold",
          fontSize: 35,
          textAlign: "center",
          marginTop: 14,
          color: Colors.TEXT,
        }}
      >
        Please Wait
      </Text>
      <Text
        style={{
          fontFamily: "o-regular",
          fontSize: 20,
          textAlign: "center",
          marginTop: 40,
          color: Colors.ICON,
        }}
      >
        we are generating your trip
      </Text>
      <Image
        style={{
          width: "120%",
          height: 300,
          marginTop: "80%",
          right: "-5%",
          position: "absolute",
        }}
        source={require("./../../assets/images/car.gif")}
      />
    </View>
  );
}

// Styles for Boat Version of loading screen
// import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import React, { useEffect, useContext, useState } from "react";
// import { useRouter } from "expo-router";
// import { Colors } from "@/constants/Colors";

// export default function GenerateTrip() {
//   const router = useRouter();
//   return (
//     <View
//       style={{
//         padding: 25,
//         paddingTop: 80,
//         backgroundColor: Colors.BG1,
//         height: "100%",
//       }}
//     >
//       <Text
//         style={{
//           fontFamily: "o-bold",
//           fontSize: 35,
//           textAlign: "center",
//           marginTop: 54,
//           color: Colors.TG1,
//         }}
//       >
//         Please Wait
//       </Text>
//       <Text
//         style={{
//           fontFamily: "o-regular",
//           fontSize: 20,
//           textAlign: "center",
//           marginTop: 14,
//           color: Colors.TG1,
//         }}
//       >
//         we are generating your trip
//       </Text>
//       <Image
//         style={{
//           width: "100%",
//           height: 300,
//           marginTop: "30%",
//         }}
//         source={require("./../../assets/images/fishing-boat.gif")}
//       />
//     </View>
//   );
// }

// Styles for HIlls Version of loading screen
// import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import React, { useEffect, useContext, useState } from "react";
// import { useRouter } from "expo-router";
// import { Colors } from "@/constants/Colors";

// export default function GenerateTrip() {
//   const router = useRouter();
//   return (
//     <View
//       style={{
//         padding: 25,
//         paddingTop: 80,
//         backgroundColor: Colors.BG3,
//         height: "100%",
//       }}
//     >
//       <Text
//         style={{
//           fontFamily: "o-bold",
//           fontSize: 35,
//           textAlign: "center",
//           marginTop: 14,
//           color: Colors.TEXT,
//         }}
//       >
//         Please Wait
//       </Text>
//       <Text
//         style={{
//           fontFamily: "o-regular",
//           fontSize: 20,
//           textAlign: "center",
//           marginTop: 40,
//           color: Colors.TG2,
//         }}
//       >
//         we are generating your trip
//       </Text>
//       <Image
//         style={{
//           width: "100%",
//           height: 200,
//           marginTop: "30%",
//         }}
//         source={require("./../../assets/images/hillss.gif")}
//       />
//     </View>
//   );
// }

// Styles for Loading2 Version of loading screen
// import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// import React, { useEffect, useContext, useState } from "react";
// import { useRouter } from "expo-router";
// import { Colors } from "@/constants/Colors";

// export default function GenerateTrip() {
//   const router = useRouter();
//   return (
//     <View
//       style={{
//         padding: 25,
//         paddingTop: 80,
//         backgroundColor: Colors.WHITE,
//         height: "100%",
//       }}
//     >
//       <Text
//         style={{
//           fontFamily: "o-bold",
//           fontSize: 35,
//           textAlign: "center",
//           marginTop: 14,
//           color: Colors.TG4,
//         }}
//       >
//         Please Wait
//       </Text>
//       <Text
//         style={{
//           fontFamily: "o-regular",
//           fontSize: 20,
//           textAlign: "center",
//           marginTop: 40,
//           color: Colors.TG4,
//         }}
//       >
//         we are generating your trip
//       </Text>
//       <Image
//         style={{
//           width: "100%",
//           height: 200,
//           marginTop: "30%",
//         }}
//         source={require("./../../assets/images/loading1.gif")}
//       />
//     </View>
//   );
// }
