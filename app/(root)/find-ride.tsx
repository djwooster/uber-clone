import { useLocationStore } from "@/store";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import RideLayout from "../components/RideLayout";
import GoogleTextInput from "../components/GoogleTextInput";
import { icons } from "../constants";
import CustomButton from "../components/CustomButton";

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();
  return (
    <RideLayout title="Back" snapPoints={["85%"]}>
      <View className="my-3">
        <Text className="text-xl font-semibold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          containerStyle="bg-zinc-100"
          textInputBackgroundColor="bg-zinc-50"
          handlePress={(location) => {
            setUserLocation(location);
          }}
        />
      </View>
      <View className="my-3">
        <Text className="text-xl font-semibold mb-3">To</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          containerStyle="bg-zinc-100"
          textInputBackgroundColor="bg-zinc-50"
          handlePress={(location) => {
            setDestinationLocation(location);
          }}
        />
      </View>
      <CustomButton
        title="Find Ride"
        onPress={() => {
          router.push("/(root)/confirm-ride");
        }}
        className="mt-5"
      />
    </RideLayout>
  );
};

export default FindRide;
