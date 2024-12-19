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
  return (
    <Stack>
      {/* Each Stack.Screen corresponds to a route/page within the (auth) directory */}
      {/* headerShown: false removes the default navigation header for these screens */}
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}

/*
Hey there! 👋 Let me explain this file in a way that's easy to understand.

Think of your app like a book 📚:
- The _layout.tsx file is like the table of contents
- Each Stack.Screen is like a chapter in your book
- The Stack navigation is like the way pages are organized - one after another

What does this file do? 🤔
1. It sets up the navigation structure for the authentication (login/signup) part of your app
2. It uses Stack navigation, which is like a stack of cards - you can push new screens on top 
   and pop them off to go back

The Stack Navigation 📱:
Imagine you're browsing Instagram:
- You start at your feed (first card)
- You tap a profile (new card slides in from right)
- You tap back (top card slides away)
That's exactly how Stack navigation works!

Key Parts of This File:
1. SplashScreen.preventAutoHideAsync():
   - This keeps your loading screen visible until everything's ready
   - Like holding the curtain closed until all actors are in position

2. The Stack Component:
   - Works like a deck of cards
   - Each new screen slides in from the right
   - Going back removes the top card
   - Perfect for linear navigation flows

3. Stack.Screen Components:
   - welcome: Your initial screen
   - sign-in: Your login screen
   - sign-up: Your registration screen
   - headerShown: false means no navigation bar at the top

The (auth) Directory:
- The parentheses () make this a "group"
- Groups help organize code without affecting the URL
- Like having a folder called "Important Documents" but the files inside 
  don't need "Important Documents" in their names

Pro Tips for React Native Development 🌟:
1. Layouts are powerful - they help share navigation and styling across multiple screens
2. Stack navigation is perfect for linear flows (like authentication)
3. The headerShown option lets you control the navigation bar's visibility
4. Groups (like (auth)) help organize code without complicating URLs

Remember:
- This file is the foundation of your auth flow
- It determines how users move between screens
- It's like the blueprint of a building - get this right, and everything else falls into place!

Need help? The React Navigation docs are your best friend:
https://reactnavigation.org/docs/stack-navigator/
*/
