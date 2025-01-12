import React from "react";
import { Ride } from "../types/type";
import { View, Text, Image } from "react-native";
import { icons } from "../constants";
import { formatTime } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

const RideCard = ({
  ride: {
    origin_longitude,
    origin_latitude,
    destination_longitude,
    destination_latitude,
    origin_address,
    created_at,
    destination_address,
    fare_price,
    ride_time,
    payment_status,
    driver,
  },
}: {
  ride: Ride;
}) => {
  return (
    <View className="flex flex-row justify-center items-center bg-white rounded-lg shadow-md shadow-zinc-200 mb-3 p-4">
      <View className="flex flex-col items-center justify-center p-3 ">
        <View className="flex bg-white flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[90px] h-[90px] rounded-lg"
          />
          <View className="flex flex-col mx-5 gap-y-5 flex-1">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.to} className="w-5 h-5"></Image>
              <Text numberOfLines={1} className="text-sm">
                {origin_address}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.point} className="w-5 h-5"></Image>
              <Text numberOfLines={1} className="text-sm">
                {destination_address}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col w-full mt-5 bg-white rounded-lg items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm text-zinc-500">Date & time</Text>
            <Text className="text-sm text-zinc-500">
              {formatDate(created_at)} {formatTime(ride_time)}
            </Text>
          </View>
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm text-zinc-500">Seats</Text>
            <Text className="text-sm text-zinc-500">{driver.car_seats}</Text>
          </View>
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm text-zinc-500">Driver</Text>
            <Text className="text-sm text-zinc-500">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-sm text-zinc-500">Payment Status</Text>
            <Text
              className={`text-sm font-bold ${
                payment_status === "paid" ? "text-green-500" : "text-red-500"
              }`}
            >
              {payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RideCard;
