import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { icons } from "../constants";
import Map from "../components/Map";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";

const RideLayout = ({
  children,
  title = "Back",
  snapPoints = ["85%"],
}: {
  children: React.ReactNode;
  title: string;
  snapPoints: string[];
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center gap-2 justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="bg-white w-8 h-8 rounded-md p-2 items-center justify-center">
                <Image
                  source={icons.backArrow}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-white text-xl font-semibold">{title}</Text>
          </View>
          <Map></Map>
        </View>
        <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={0}>
          <BottomSheetView style={{ flex: 1, padding: 15 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default RideLayout;
