import React from "react";
import { Text, TextInput, View } from "react-native";
import { GoogleInputProps } from "../types/type";

const GoogleTextInput = ({
  icon,
  initialLocation,
  placeholder,
  textInputBGColor,
  containerStyle,
  inputStyle,
  onPress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center relative justify-center z-50 rounded-md ${containerStyle}`}
    >
      <Text>{placeholder}</Text>
    </View>
  );
};

export default GoogleTextInput;
