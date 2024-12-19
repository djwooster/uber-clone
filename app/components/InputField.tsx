import React from "react";
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  Platform,
  Pressable,
  SafeAreaView,
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
    <SafeAreaView>
      <Pressable
        className="flex-1 items-center justify-center"
        onPress={Keyboard.dismiss}
      >
        <View className="w-full ">
          <Text
            className={`text-base mb-1 text-slate-800 font-semibold ${labelStyle}`}
          >
            {label}
          </Text>
        </View>
        <View
          className={`flex flex-row justify-start items-center relative w-full  rounded-lg`}
        >
          {icon && (
            <Image
              source={icon}
              className={`w-6 h-6 absolute left-2  z-10  ${iconStyle}`}
            />
          )}

          <TextInput
            className={`bg-slate-50 p-4 text-left h-full w-full border border-zinc-200 rounded-lg  ${inputStyle}`}
            style={{
              lineHeight: 18,
              paddingLeft: icon ? 40 : 16,
            }}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            secureTextEntry={secureTextEntry}
            {...props}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default InputField;
