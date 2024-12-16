import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "../constants";

const OAuth = ({ title }: { title: string }) => {
  const handleGoogleSignUp = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-slate-200"></View>
        <Text className="text-slate-500 text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-slate-200"></View>
      </View>
      <CustomButton
        textVariant="dark"
        bgVariant="outline"
        title={title}
        className="mt-5 w-full shadow-none text-center"
        onPress={handleGoogleSignUp}
        // IconLeft takes a function that returns a React.ReactNode. This is a function that returns an Image component and is passed to the IconLeft prop.
        // This works because the IconLeft prop is a function that returns a React.ReactNode. IT has to be a function because the IconLeft prop is a function that returns a React.ReactNode.
        IconLeft={() => (
          <Image
            source={icons.google}
            className="w-6 h-6 mr-2 "
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
};

export default OAuth;
