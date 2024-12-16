import React, { useState } from "react";
import { View, Text, ScrollView, Image, Linking } from "react-native";

import CustomButton from "../components/CustomButton";
import { Link, useRouter } from "expo-router";
import { icons, images } from "../constants";
import InputField from "../components/InputField";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSignUp = () => {
    router.replace("/(auth)/welcome");
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="w-full">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-slate-900 text-3xl font-bold ml-4">
          Create Account
        </Text>
      </View>

      <View className="p-4 flex-1 bg-white">
        <InputField
          icon={icons.person}
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          onChangeText={(value: string) => setForm({ ...form, name: value })}
        />
        <InputField
          icon={icons.atSymbol}
          label="Email"
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(value: string) => setForm({ ...form, email: value })}
        />
        <InputField
          icon={icons.lock}
          label="Password"
          placeholder="Enter your password"
          value={form.password}
          onChangeText={(value: string) =>
            setForm({ ...form, password: value })
          }
          secureTextEntry={true}
        />
        <CustomButton
          className="mt-5"
          textVariant="primary"
          bgVariant="primary"
          title="Sign Up"
          onPress={handleSignUp}
        />

        <OAuth title="Sign up with Google" />

        <Link href="/(auth)/sign-in" className="mt-6 text-center">
          <Text className="text-slate-500 text-lg">
            Already have an account?{" "}
          </Text>
          <Text className="text-blue-500 text-lg">Sign in</Text>
        </Link>
      </View>

      {/* Verification Modal */}
    </ScrollView>
  );
};

export default SignUp;
