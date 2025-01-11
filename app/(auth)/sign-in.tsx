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
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "idle",
    code: "",
  });
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, form]);
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex bg-white ">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-slate-900 text-3xl font-bold ml-4">Sign In</Text>
      </View>
      <View className="p-5 flex-1 bg-white">
        <InputField
          keyboardType="email-address"
          icon={icons.atSymbol}
          label="Email"
          placeholder="Enter your email"
          value={form.email}
          onChangeText={(value: string) => setForm({ ...form, email: value })}
        />

        <InputField
          keyboardType="default"
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
          onPress={() => onSignInPress()}
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
