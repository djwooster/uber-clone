import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  const handleWelcome = () => {
    router.replace("/(auth)/welcome");
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-950">
      <Text className="text-4xl font-bold text-blue-400">Welcome</Text>
      <CustomButton
        title="Welcome"
        className="w-11/12 mt-10"
        onPress={handleWelcome}
      />
    </SafeAreaView>
  );
};

export default SignUp;
