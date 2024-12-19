import React, { useRef, useState } from "react";
import { View, Text, ScrollView, Image, Linking, Alert } from "react-native";

import CustomButton from "../components/CustomButton";
import { Link, useRouter } from "expo-router";
import { icons, images } from "../constants";
import InputField from "../components/InputField";
import OAuth from "../components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

// This is the sign-up page. It is a component that is used to sign up a user.
// It is a component that is used to sign up a user.
const SignUp = () => {
  // Form state to handle the form data. It is a state that is used to handle the form data.
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isLoaded, signUp, setActive } = useSignUp();

  // Verification state to handle the verification process. Error handling and state management
  // and it works by using the state of the verification object to determine the state of the verification process
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  // Router to navigate to different pages. This is used to navigate to the home page after successful verification
  // and is part of the expo router library
  const router = useRouter();

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    // This is the first step in the sign-up process and works by creating a user in the database.
    // It also sends an email to the user with a verification code. signUp.create() is a method that creates a user in the database
    // and returns a promise that resolves to the user object. It is a method of the useSignUp hook.
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      // Send user an email with verification code
      // This is the second step in the sign-up process and works by sending an email to the user with a verification code.
      // It is a method of the useSignUp hook.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setVerification({ ...verification, state: "pending" });
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        //TODO create a user in the database

        await setActive({ session: signUpAttempt.createdSessionId });
        setVerification({ ...verification, state: "success" });
        // router.replace("/");
      } else {
        setVerification({
          ...verification,
          error: "Verification failed",
          state: "failed",
        });
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="w-full">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-slate-900 text-3xl font-bold ml-4">
          Create Account
        </Text>
      </View>

      <View id="input-container" className="p-4 gap-5 flex-1 bg-white">
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
          onPress={onSignUpPress}
        />

        <OAuth title="Sign up with Google" />

        <Link href="/(auth)/sign-in" className="mt-6 text-center">
          <Text className="text-slate-500 text-lg">
            Already have an account?{" "}
          </Text>
          <Text className="text-blue-500 text-lg">Sign in</Text>
        </Link>
      </View>

      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() =>
          setVerification({ ...verification, state: "success" })
        }
      >
        <View className="flex  items-center py-6 px-5 justify-between h-fit gap-8 rounded-3xl bg-zinc-100">
          <View className="flex gap-2">
            <Text className="text-zinc-900 text-3xl font-bold  text-center">
              Verification pending
            </Text>
            <Text className="text-zinc-400 text-lg text-center">
              We have sent you an email with a verification code to {form.email}
              .
            </Text>
            <InputField
              className="w-full p-4"
              icon={icons.lock}
              keyboardType="numeric"
              label="Verification code"
              placeholder="Enter your verification code"
              value={verification.code}
              onChangeText={(code: string) =>
                setVerification({ ...verification, code })
              }
            />
            {verification.error && (
              <Text className="text-red-500 text-lg text-center">
                {verification.error}
              </Text>
            )}
          </View>
          <CustomButton
            className="mt-5 w-full bg-blue-800"
            textVariant="primary"
            bgVariant="primary"
            title="Verify"
            onPress={onVerifyPress}
          />
        </View>
      </ReactNativeModal>

      <ReactNativeModal isVisible={verification.state === "success"}>
        <View className="flex  items-center py-6 px-5 justify-between h-fit gap-8 rounded-3xl bg-zinc-100">
          <View className="flex gap-2">
            <Text className="text-zinc-900 text-3xl font-bold  text-center">
              Verification successful
            </Text>
            <Text className="text-zinc-400 text-lg text-center">
              You have successfully verified your account.
            </Text>
          </View>
          <CustomButton
            className="mt-5 w-full bg-blue-800"
            textVariant="primary"
            bgVariant="primary"
            title="Home"
            onPress={() => router.replace("/(root)/home")}
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default SignUp;
