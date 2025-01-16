import React from "react";
import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";
const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-[300px] rounded-2xl"
      mapType="mutedStandard"
      showsUserLocation={true}
      showsCompass={true}
      showsScale={true}
      showsIndoors={true}
    >
      <Text className="text-zinc-800 text-lg font-bold w-full h-full">Map</Text>
    </MapView>
  );
};

export default Map;
