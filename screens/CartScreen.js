import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  return (
    <ScrollView style={{ marginTop: 50 }}>
      {total === 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginTop: 40 }}>Your cart is empty</Text>
        </View>
      ) : (
        <></>
      )}

      <Text>CartScreen</Text>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
