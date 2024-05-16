import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../Layout/Layout";
import Repositories from "../Repositories/Repositories";
import { Route, Routes } from "react-router-native";
import NotFound from "../Error/NotFound/NotFound";
import Auth from "../Auth/Auth";
import AppBar from "../../components/AppBar/AppBar";

const Main = () => {
  return (
    <>
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
            path="/"
            element={<Auth />}
            errorElement={<NotFound />}
          />
        </Routes>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
