import "@/global.css";
import { useAuth } from "@clerk/clerk-expo";

import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";

// In Expo Router, _layout files are special files that define the navigation structure
// and shared elements for all routes within their directory.

// The (auth) directory is a route group - the parentheses make this directory's name
// not affect the URL structure while still allowing us to organize auth-related screens

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// This layout uses Stack navigation, which provides a card-style navigation common in mobile apps
// Any screens defined within this layout will automatically be part of this navigation stack
export default function Onboarding() {
  const { isSignedIn } = useAuth();

  //   if (isSignedIn) {
  //     return <Redirect href={"/(root)/(tabs)/Home"} />;
  //   }
  return (
    <Stack>
      {/* Each Stack.Screen corresponds to a route/page within the (auth) directory */}
      {/* headerShown: false removes the default navigation header for these screens */}
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="Chat" options={{ headerShown: false }} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} />
      <Stack.Screen name="Rides" options={{ headerShown: false }} />
    </Stack>
  );
}
