import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function GenerateTrip() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.BG3,
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
          color: Colors.TG2,
        }}
      >
        while we are generating your trip
      </Text>
      <Image
        style={{
          width: "100%",
          height: 200,
          marginTop: "30%",
        }}
        source={require("./../../assets/images/hillss.gif")}
      />
    </View>
  );
}

// Styles for Car Version of loading screen
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
//         backgroundColor: Colors.BG2,
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
//           color: Colors.ICON,
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
//         source={require("./../../assets/images/car.gif")}
//       />
//     </View>
//   );
// }

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
//           marginTop: 14,
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
//           marginTop: 40,
//           color: Colors.TG1,
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
//         source={require("./../../assets/images/loading2.gif")}
//       />
//     </View>
//   );
// }
