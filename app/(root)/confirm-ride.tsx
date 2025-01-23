import { FlatList, Text, View } from "react-native";
import RideLayout from "../components/RideLayout";
import DriverCard from "../components/DriverCard";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();
  return (
    <RideLayout title="Confirm Ride" snapPoints={["50%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <DriverCard
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(Number(item.id))}
            item={item}
          />
        )}
        ListFooterComponent={() => {
          <View className="mx-5 mt-10">
            <CustomButton
              onPress={() => router.push("/(root)/book-ride")}
              title={"Select ride"}
            />
          </View>;
        }}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
