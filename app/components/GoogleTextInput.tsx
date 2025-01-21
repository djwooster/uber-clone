import React from "react";
import "react-native-get-random-values";
import { Image, View } from "react-native";
import { GoogleInputProps } from "../types/type";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { icons } from "../constants";

const googlePlacesAPIKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

const GoogleTextInput = ({
  icon,
  initialLocation,
  placeholder,
  textInputBackgroundColor,
  containerStyle,
  inputStyle,
  handlepress,

  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center relative justify-center z-50 rounded-md ${containerStyle}`}
    >
      <GooglePlacesAutocomplete
        query={{
          key: googlePlacesAPIKey,
          language: "en",
        }}
        fetchDetails={true}
        placeholder={"Search destination..."}
        debounce={200}
        renderLeftButton={() => (
          <View className="justify-center items-center w-6 h-6">
            <Image
              source={icon ? icon : icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: "grey",
          fontWeight: "500",
          placeholder: initialLocation ?? "Search destination...",
        }}
        styles={{
          textInputContainer: {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginHorizontal: 20,
            position: "relative",
            shadowColor: "#d4d4d4",
          },
          textInput: {
            backgroundColor: textInputBackgroundColor
              ? textInputBackgroundColor
              : "white",
            fontSize: 16,
            fontWeight: "600",
            marginTop: 5,
            width: "100%",
            borderRadius: 200,
          },
          listView: {
            backgroundColor: textInputBackgroundColor
              ? textInputBackgroundColor
              : "white",
            position: "relative",
            top: 0,
            width: "100%",
            borderRadius: 10,
            shadowColor: "#d4d4d4",
            zIndex: 99,
          },
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          });
        }}
      />
    </View>
  );
};

export default GoogleTextInput;
