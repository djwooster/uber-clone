import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "../types/type";

// This helper function is used to get the background variant style for the button.
// It takes the bgVariant prop and returns the corresponding style and is useful for styling the button based on the variant.
const getBgVariantStyle = (bgVariant: ButtonProps["bgVariant"]) => {
  switch (bgVariant) {
    case "primary":
      return "bg-slate-900";
    case "secondary":
      return "bg-slate-400";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border border-slate-300";
    default:
      return "bg-slate-800";
  }
};

// This helper function is used to get the text variant style for the button.
// It takes the textVariant prop and returns the corresponding style and is useful for styling the button based on the variant.
const getTextVariantStyle = (textVariant: ButtonProps["textVariant"]) => {
  switch (textVariant) {
    case "primary":
      return "text-white";
    case "dark":
      return "text-slate-900";
    case "secondary":
      return "text-slate-400";
    case "danger":
      return "text-red-200";
    case "success":
      return "text-green-200";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "primary",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl flex flex-row items-center justify-center p-3  ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={` text-lg font-semibold text-center ${getTextVariantStyle(
          textVariant
        )}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
