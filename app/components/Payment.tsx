import { Alert } from "react-native";
import CustomButton from "./CustomButton";
import { useEffect } from "react";
import { PaymentSheetError, useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";

const Payment = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [success, setSuccess] = useState(false);

  const initializePaymentSheet = async () => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      intentConfiguration: {
        mode: {
          amount: 1099,
          currencyCode: "USD",
        },
        confirmHandler: confirmHandler,
      },
    });
    if (error) {
      // handle error
    }
  };

  const confirmHandler = async (
    paymentMethod,
    shouldSavePaymentMethod,
    intentCreationCallback
  ) => {
    // explained later
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const openPaymentSheet = async () => {
    await initializePaymentSheet();
    const { error } = await presentPaymentSheet();

    if (error) {
      if (error.code === PaymentSheetError.Canceled) {
        Alert.alert(
          `Payment canceled. Error code is ${error.code}`,
          `Error message is ${error.message}`
        );
        // Customer canceled - you should probably do nothing.
      } else {
        setSuccess(true);
        // PaymentSheet encountered an unrecoverable error. You can display the error to the user, log it, etc.
      }
    }
  };

  return (
    <>
      <CustomButton title={"Confirm Ride"} onPress={openPaymentSheet}>
        Payment
      </CustomButton>
    </>
  );
};

export default Payment;
