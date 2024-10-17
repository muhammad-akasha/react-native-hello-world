import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 500 }}>Contact</Text>
      <Link style={{ fontSize: 20, fontWeight: 500 }} href={"/"}>
        back to home
      </Link>
    </View>
  );
};

export default Contact;
