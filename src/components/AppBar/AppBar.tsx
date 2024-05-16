import { StyleSheet, View } from "react-native";
import React from "react";
import AppBarTab from "./AppBarTab/AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/auth">Log in</AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "auto",
    backgroundColor: "#468B97",
    paddingVertical: 24,
    paddingHorizontal: 12,
    flexDirection: "row",
    gap: 16,
  },
});

export default AppBar;
