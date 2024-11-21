import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const PickUpScreen = () => {
  const [email, setEmail] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [isPickUpPickerVisible, setPickUpPickerVisible] = useState(false);
  const [isDeliveryPickerVisible, setDeliveryPickerVisible] = useState(false);
  const [pickUpAddress, setPickUpAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const handlePickUpConfirm = (date) => {
    setPickUpDate(date);
    setPickUpPickerVisible(false);
  };

  const handleDeliveryConfirm = (date) => {
    setDeliveryDate(date);
    setDeliveryPickerVisible(false);
  };
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];
  const navigation = useNavigation();
  const proceedToCart = () => {
    // Debug: Log all state values
    console.log("Pick Up Date:", pickUpDate);
    console.log("Delivery Date:", deliveryDate);
    console.log("Pick Up Address:", pickUpAddress);
    console.log("Delivery Address:", deliveryAddress);

    // Validate the fields
    if (!pickUpDate || !deliveryDate || !pickUpAddress || !deliveryAddress) {
      Alert.alert(
        "Empty or invalid",
        "Please fill all the required fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
      return;
    }

    // Navigate to the Cart screen with the required data
    navigation.replace("Cart", {
      pickUpDate: pickUpDate,
      deliveryDate: deliveryDate,
      pickUpAddress: pickUpAddress,
      deliveryAddress: deliveryAddress,
    });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Pick Up Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter pick up address"
          value={pickUpAddress}
          onChangeText={(text) => setPickUpAddress(text)}
        />

        <Text style={styles.label}>Delivery Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter delivery address"
          value={deliveryAddress}
          onChangeText={(text) => setDeliveryAddress(text)}
        />

        <Text style={styles.label}>Pick Up Date</Text>
        <Pressable
          style={styles.dateButton}
          onPress={() => setPickUpPickerVisible(true)}
        >
          <Text style={styles.dateText}>
            {pickUpDate ? pickUpDate.toLocaleString() : "Select Pick Up Date"}
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isPickUpPickerVisible}
          mode="datetime"
          onConfirm={handlePickUpConfirm}
          onCancel={() => setPickUpPickerVisible(false)}
        />

        <Text style={styles.label}>Delivery Date</Text>
        <Pressable
          style={styles.dateButton}
          onPress={() => setDeliveryPickerVisible(true)}
        >
          <Text style={styles.dateText}>
            {deliveryDate
              ? deliveryDate.toLocaleString()
              : "Select Delivery Date"}
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDeliveryPickerVisible}
          mode="datetime"
          onConfirm={handleDeliveryConfirm}
          onCancel={() => setDeliveryPickerVisible(false)}
        />
        {/* <Text style={styles.label}>Additional Info</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter any additional information"
          value={additionalInfo}
          onChangeText={(text) => setAdditionalInfo(text)}
          multiline
          numberOfLines={4}
        /> */}
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            padding: 10,
            marginBottom: 40,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | ₦{total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              extra charges might apply
            </Text>
          </View>
          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginTop: 50,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  input: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
    borderRadius: 9,
    marginBottom: 20,
    backgroundColor: "white",
  },
  dateButton: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
    borderRadius: 9,
    marginBottom: 20,
    backgroundColor: "white",
    justifyContent: "center",
  },
  dateText: {
    color: "#555",
  },
});
export default PickUpScreen;
