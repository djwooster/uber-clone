import CustomButton from "@/app/components/CustomButton";
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View, SafeAreaView, Alert } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <SafeAreaView className="flex flex-col items-center justify-center h-full">
      <SignedIn>
        <View className="flex flex-col items-center justify-center h-full">
          <Text className="text-2xl font-bold">
            Welcome {user?.fullName} {user?.emailAddresses[0].emailAddress}
          </Text>
        </View>
        <CustomButton title="Sign out" onPress={handleSignOut} />
      </SignedIn>
      <SignedOut>
        <View className="flex flex-col items-center justify-center h-full">
          <Link href="/(auth)/sign-in">
            <Text className="text-blue-500 text-lg">Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text className="text-blue-500 text-lg">Sign up</Text>
          </Link>
        </View>
      </SignedOut>
    </SafeAreaView>
  );
}
