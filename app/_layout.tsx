import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useState } from "react";
import { CreateTripContext } from "./../context/CreateTripContext";
export default function RootLayout() {
  useFonts({
    "o-regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "o-medium": require("./../assets/fonts/Outfit-SemiBold.ttf"),
    "o-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData, setTripData] = useState<any>({});
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
