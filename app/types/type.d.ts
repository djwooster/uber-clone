import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface Driver {
  driver_id: number;
  first_name: string;
  last_name: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
}

declare interface MarkerData {
  latitude: number;
  longitude: number;
  id: number;
  title: string;
  profile_image_url: string;
  car_image_url: string;
  car_seats: number;
  rating: number;
  first_name: string;
  last_name: string;
  time?: number;
  price?: string;
}

declare interface MapProps {
  destinationLatitude?: number;
  destinationLongitude?: number;
  onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
  selectedDriver?: number | null;
  onMapReady?: () => void;
}

declare interface Ride {
  origin_address: string;
  destination_address: string;
  origin_latitude: number;
  origin_longitude: number;
  destination_latitude: number;
  destination_longitude: number;
  ride_time: number;
  fare_price: number;
  payment_status: string;
  driver_id: number;
  user_email: string;
  created_at: string;
  driver: {
    first_name: string;
    last_name: string;
    car_seats: number;
  };
}

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?:
    | "primary"
    | "default"
    | "dark"
    | "secondary"
    | "danger"
    | "success";
  iconLeft?: React.ComponentType<any>;
  iconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface GoogleInputProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

declare interface PaymentProps {
  fullName: string;
  email: string;
  amount: string;
  driverId: number;
  rideTime: number;
}

declare interface LocationStore {
  userLatitude: number | null;
  userLongitude: number | null;
  userAddress: string | null;
  destinationLatitude: number | null;
  destinationLongitude: number | null;
  destinationAddress: string | null;
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface DriverStore {
  drivers: MarkerData[];
  selectedDriver: number | null;
  setSelectedDriver: (driverId: number) => void;
  setDrivers: (drivers: MarkerData[]) => void;
  clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
  item: MarkerData;
  selected: number;
  setSelected: () => void;
}

/*
Hey there! 👋 Let me explain what this types.d.ts file is all about in a way that's easy to understand.

Think of this file as a rulebook or a dictionary for your app. Just like how a school has rules about what you can wear and what classes you need to take, this file sets rules about what different parts of your app should look like and how they should behave.

Let's break it down with some examples:

1. The '.d.ts' Extension:
   - This is a TypeScript Declaration file
   - It's like writing definitions in a dictionary
   - It doesn't contain actual code, just descriptions of what things should look like

2. The 'declare' Keyword:
   - When you see 'declare', think "Hey, I'm announcing something!"
   - It's like raising your hand in class to tell everyone about something important

3. The Interfaces:
   Let's look at some of the interfaces we have:

   PaymentProps:
   - Like a form you need to fill out to make a payment
   - Must have: name, email, amount, etc.
   - If any of these are missing, TypeScript will warn you!

   LocationStore:
   - Like a GPS system's memory
   - Keeps track of where you are (userLatitude/Longitude)
   - Keeps track of where you're going (destinationLatitude/Longitude)
   - Has functions to update these locations

   DriverStore:
   - Like a manager's clipboard with all driver information
   - Keeps track of all drivers and which one is selected
   - Has functions to update this information

   DriverCardProps:
   - Like a driver's ID card
   - Contains all the information needed to show a driver's profile

Why This File is Important:
1. Safety: It prevents bugs by making sure everything has the right information
2. Documentation: New developers can look here to understand what data looks like
3. Code Help: Your code editor can give you better suggestions

Think of it like:
- A recipe book that lists all ingredients needed
- A blueprint that shows how to build something
- A contract that everyone agrees to follow

Pro Tips for React Native Development:
1. Always keep your types organized and well-documented
2. Use interfaces for objects that represent things (like users, drivers, locations)
3. Make your types as specific as possible - avoid using 'any'
4. Group related types together

Remember:
- Good typing = fewer bugs
- Clear types = easier to understand code
- Proper types = better development experience

Need help? Check out:
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- React Native TypeScript guide: https://reactnative.dev/docs/typescript
*/
