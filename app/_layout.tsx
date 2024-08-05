import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "o-regular": require("./../assets/fonts/Outfit-Regular.ttf"),
    "o-medium": require("./../assets/fonts/Outfit-SemiBold.ttf"),
    "o-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
