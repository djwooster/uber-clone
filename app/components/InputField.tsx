import React from "react";
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Platform,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { View, KeyboardAvoidingView, Text } from "react-native";
import { InputFieldProps } from "../types/type";

const InputField = ({
  secureTextEntry = false,
  className,
  label,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholder,
  icon,
  iconStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full ">
          <Text
            className={`text-base text-slate-800 font-semibold mb-2 ${labelStyle}`}
          >
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-slate-50 rounded-xl 
                border border-neutral-200 focus:border-green-300 ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <Pressable>
              <TextInput
                className={`flex-1 text-lg p-3 text-left rounded-xl h-full active:border-green-300 ${inputStyle}`}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                {...props}
              />
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
