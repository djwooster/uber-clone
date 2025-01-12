import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
const Rides = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-950">
      <Text className="text-4xl font-bold text-blue-400">Rides!</Text>
    </SafeAreaView>
  );
};

export default Rides;
