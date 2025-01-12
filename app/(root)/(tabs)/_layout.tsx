import { icons } from "@/app/constants";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { ImageSourcePropType } from "react-native";

const TabIcon = ({
  focused,
  source,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-lg ${
      focused ? "bg-zinc-300 text-black" : "bg-transparent"
    }`}
  >
    <View
      className={`w-12 h-12 items-center justify-center rounded-lg ${
        focused ? "bg-white" : "bg-transparent"
      }`}
    >
      <Image
        source={source}
        tintColor={focused ? "black" : "white"}
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);

const Layout = () => (
  <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        backgroundColor: "black",
        borderRadius: 20,
        overflow: "hidden",
        marginHorizontal: 20,
        borderTopWidth: 0,
        marginBottom: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
    <Tabs.Screen
      name="rides"
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;

// import "@/global.css";
// import { useAuth } from "@clerk/clerk-expo";

// import { Redirect, Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";

// import "react-native-reanimated";

// // In Expo Router, _layout files are special files that define the navigation structure
// // and shared elements for all routes within their directory.

// // The (auth) directory is a route group - the parentheses make this directory's name
// // not affect the URL structure while still allowing us to organize auth-related screens

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// // This layout uses Stack navigation, which provides a card-style navigation common in mobile apps
// // Any screens defined within this layout will automatically be part of this navigation stack
// export default function Onboarding() {
//   const { isSignedIn } = useAuth();

//   //   if (isSignedIn) {
//   //     return <Redirect href={"/(root)/(tabs)/Home"} />;
//   //   }
//   return (
//     <Stack>
//       {/* Each Stack.Screen corresponds to a route/page within the (auth) directory */}
//       {/* headerShown: false removes the default navigation header for these screens */}
//       <Stack.Screen name="Home" options={{ headerShown: false }} />
//       <Stack.Screen name="Chat" options={{ headerShown: false }} />
//       <Stack.Screen name="Profile" options={{ headerShown: false }} />
//       <Stack.Screen name="Rides" options={{ headerShown: false }} />
//     </Stack>
//   );
// }
