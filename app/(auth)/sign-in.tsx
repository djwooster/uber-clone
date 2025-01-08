import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  SafeAreaView,
} from "react-native";

import CustomButton from "../components/CustomButton";
import { Link, useRouter } from "expo-router";
import { icons, images } from "../constants";
import InputField from "../components/InputField";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "idle",
    code: "",
  });
  const router = useRouter();
  const handleSignIn = async () => {
    setVerification({ ...verification, state: "pending" });
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex bg-white ">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-slate-900 text-3xl font-bold ml-4">Sign In</Text>
      </View>
      <View className="p-5 flex-1 bg-white">
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
          title="Sign In"
          onPress={() => handleSignIn()}
        />

        <OAuth title="Sign In with Google" />

        <Link href="/sign-up" className="mt-12 text-center">
          <Text className="text-slate-500 text-lg  mt-8">
            Don't have an account?{" "}
          </Text>
          <Text className="text-blue-500 text-lg">Sign up</Text>
        </Link>
      </View>

      {/* Verification Modal */}
    </ScrollView>
  );
};

export default SignIn;
