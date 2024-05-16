import { View } from "react-native";
import React from "react";
import AppBarTab from "./AppBarTab/AppBarTab";

const AppBar = () => {
  return (
    <View
      style={{
        width: "auto",
        backgroundColor: "red",
        paddingVertical: 24,
        paddingHorizontal: 12,
        flexDirection: "row",
        gap: 12,
      }}
    >
      <AppBarTab />
      <AppBarTab />
      <AppBarTab />
    </View>
  );
};

export default AppBar;
