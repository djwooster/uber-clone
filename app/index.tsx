import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Home = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/Home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;

/*
Hey there! 👋 Let me explain what this index.tsx file does in a way that's easy to understand.

Think of this file as the front door to your app! 🏠 

What does it do? 🤔
- When someone opens your app, this is the FIRST file that runs
- It immediately redirects users to the welcome screen (in the auth group)
- It's like a traffic cop directing cars - it sends users where they need to go

Let's break it down piece by piece:

1. The Imports 📦
   - Redirect: Like a "detour" sign that sends users to a different screen
   - View/Text: Basic building blocks (like Lego pieces) for making screens
   - SafeAreaView: Makes sure content doesn't hide behind phone notches/cameras

2. The Home Component 🏠
   - It's super simple - just one line!
   - <Redirect href="/(auth)/welcome" /> sends users to the welcome screen
   - Like an automatic door that instantly leads to the welcome area

Why is this important? 🌟
- Every app needs a starting point
- This file helps manage the initial user flow
- It's crucial for navigation structure

Pro Tips for React Native Development:
1. Keep your index files simple
2. Use Redirect for automatic navigation
3. Think about user flow from the very first screen
4. The (auth) group helps organize authentication-related screens

Think of it like this:
- Your app is like a shopping mall
- This file is the main entrance
- Instead of letting people wander around, it immediately guides them 
  to where they need to go (the welcome desk)

Remember:
- This is your app's entry point
- Keep it clean and focused
- It sets the tone for your entire app's navigation

Need more help? Check out Expo Router docs:
https://docs.expo.dev/router/introduction/
*/
