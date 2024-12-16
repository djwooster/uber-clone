import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import { onboarding } from "../constants";
import CustomButton from "../components/CustomButton";

const Welcome = () => {
  // creating a ref for the swiper so we can control it
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex === onboarding.length - 1) {
      router.replace("/(auth)/sign-up");
      setActiveIndex(0);
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-slate-100">
      <TouchableOpacity
        className="flex w-11/12 items-end p-5 bg-transparent w-fit"
        // if the user presses the skip button, we want to redirect them to the sign-up page
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text className="text-blue-500 text-md">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-2 h-2 bg-slate-400 rounded-full mx-1" />}
        activeDot={<View className="w-2 h-2 bg-slate-700 rounded-full mx-1" />}
        // this function is called whenever the user swipes to a new page. It works by updating the activeIndex
        // state to the index of the new page. This works because the onboarding array is indexed from 0 to 2.
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {/* mapping through the onboarding array and rendering one item per page */}
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex items-center justify-center w-full p-4 gap-[4rem]"
          >
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-col gap-3">
              <Text className="text-3xl font-bold text-left">{item.title}</Text>
              <Text className="text-left text-md text-slate-500">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={activeIndex === 2 ? "Sign Up" : "Next"}
        className="w-10/12 mt-10"
        onPress={handleNext}
      />
    </SafeAreaView>
  );
};

export default Welcome;
