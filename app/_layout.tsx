import "@/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";

import { tokenCache } from "@/cache";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout() {
  if (!publishableKey) {
    console.error("Environment variables:", process.env);
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

/*
Hey there! 👋 Let me explain what this _layout.tsx file does in a way that's easy to understand.

Think of this file as the master blueprint for your entire app! 🏗️

What does this file do? 🤔
1. It's the MAIN layout file that wraps around your whole app
2. It handles important setup tasks like:
   - Loading custom fonts
   - Managing the splash screen
   - Setting up navigation structure

Let's break it down piece by piece:

The Font Loading 📚
- Just like you need to install fonts on your computer to use them
- This file loads custom fonts (Jakarta Sans variations) into your app
- It waits until they're ready before showing your app

The Navigation Setup 🗺️
Think of Stack navigation like a deck of cards:
- Each screen is like a playing card
- When you navigate to a new screen, it's like placing a new card on top
- When you go back, it's like removing the top card
- The previous screen is always there, just hidden underneath

The Stack.Screen components are like different sections of your app:
1. index: Your main entry point
2. (auth): Handles login/signup screens
3. (root): Your main app screens after logging in
4. +not-found: Shows when a page doesn't exist

Why Stacks? 🤔
Imagine you're using Instagram:
1. You start at your feed (first card)
2. Tap a profile (new card slides in)
3. Tap a photo (another card slides in)
4. Hit back (cards slide away one by one)
That's exactly how Stack navigation works!

Pro Tips for React Native Development 🌟:
1. _layout files are super powerful
   - They control navigation
   - They can share code between screens
   - They handle setup tasks

2. Understanding Stack Navigation is crucial
   - It's the most common navigation type
   - Perfect for linear flows
   - Natural for mobile users

3. The headerShown: false option
   - Hides the default navigation bar
   - Lets you create custom headers
   - Gives more control over design

4. Groups (like (auth) and (root))
   - Help organize your code
   - Don't affect the URL structure
   - Make navigation management easier

Remember:
- This file is like the foundation of a house
- Get this right, and everything else becomes easier
- It's where your app's journey begins!

Need More Help? 📚
Check out these resources:
- Expo Router docs: https://docs.expo.dev/router/introduction/
- React Navigation docs: https://reactnavigation.org/
- Expo Font docs: https://docs.expo.dev/versions/latest/sdk/font/

Keep coding! You're doing great! 🚀
*/
