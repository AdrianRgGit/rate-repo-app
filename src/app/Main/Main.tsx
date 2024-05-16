import React from "react";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Route, Routes } from "react-router-native";

import Layout from "../Layout/Layout";
import Repositories from "../Repositories/Repositories";
import NotFound from "../Error/NotFound/NotFound";
import Auth from "../Auth/Auth";
import AppBar from "../../components/AppBar/AppBar";

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Layout>
        <AppBar />

        <Routes>
          <Route
            id="Repositories"
            path="/"
            element={<Repositories />}
            errorElement={<NotFound />}
          />

          <Route
            id="Auth"
            path="/auth"
            element={<Auth />}
            errorElement={<NotFound />}
          />
        </Routes>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
