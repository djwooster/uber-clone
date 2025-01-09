import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Linking,
  Alert,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import CustomButton from "../components/CustomButton";
import { Link, useRouter } from "expo-router";
import { icons, images } from "../constants";
import InputField from "../components/InputField";
import OAuth from "../components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";

const SignUp = () => {
  // Form state to handle the form data.
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [code, setCode] = React.useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { isLoaded, signUp, setActive } = useSignUp();

  // Verification state to handle the verification process. Error handling and state management
  // and it works by using the state property of the verification object to determine the state of the verification process.
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
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setVerification({ ...verification, state: "pending" });
    } catch (err) {
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user entered to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      // If verification was completed, set the session to active and redirect the user
      if (signUpAttempt.status === "complete") {
        // TODO add a database call to create a user
        await setActive({ session: signUpAttempt.createdSessionId });
        setVerification({ ...verification, state: "success" });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed",
          state: "failed",
        });
        console.error(signUpAttempt);
      }
    } catch (err) {
      Alert.alert(err.errors[0].longMessage);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="w-full h-fit  bg-zinc-50">
        <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        <Text className="text-slate-900 text-3xl font-bold ml-4">
          Create Account
        </Text>
      </View>

      <ScrollView
        id="input-container"
        className="p-4 flex flex-col bg-zinc-50 h-full"
        contentContainerStyle={{
          gap: 24,
        }}
      >
        <InputField
          icon={icons.person}
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          onChangeText={(value: string) => setForm({ ...form, name: value })}
        />
        <InputField
          icon={icons.atSymbol}
          keyboardType="email-address"
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
      </ScrollView>

      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => {
          if (verification.state === "success") {
            setShowSuccessModal(true);
          }
        }}
      >
        <View className="flex  py-6 px-5 justify-start  gap-4 rounded-3xl bg-zinc-100">
          <View className="flex flex-col h-fit gap-3">
            <Text className="text-zinc-900 text-3xl font-bold  text-center">
              Verify your email
            </Text>
            <Text className="text-zinc-400 text-lg text-center">
              We have sent you an email with a verification code to {form.email}
              .
            </Text>

            {verification.error && (
              <Text className="text-red-500 text-lg text-center">
                {verification.error}
              </Text>
            )}
          </View>
          <InputField
            icon={icons.lock}
            keyboardType="numeric"
            label="Verification code"
            placeholder="Enter your verification code"
            value={verification.code}
            onChangeText={(verificationCode) =>
              setVerification({ ...verification, code: verificationCode })
            }
          />
          {verification.error && (
            <Text className="text-red-500 text-lg text-center">
              {verification.error}
            </Text>
          )}
          <CustomButton
            className="mt-2 w-full bg-orange-800"
            textVariant="primary"
            bgVariant="primary"
            title="Verify"
            onPress={onVerifyPress}
          />
        </View>
      </ReactNativeModal>

      <ReactNativeModal isVisible={showSuccessModal}>
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
            className="mt-2 w-full bg-blue-800"
            textVariant="primary"
            bgVariant="primary"
            title="Home"
            onPress={() => {
              setShowSuccessModal(false);
              router.push("/(root)/(tabs)/Home");
            }}
          />
        </View>
      </ReactNativeModal>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
