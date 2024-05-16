import { StyleSheet, View } from "react-native";
import React from "react";
import CustomText from "../../components/Custom/CustomText/CustomText";
import RepositoryCard from "../../components/Repositories/RepositoryCard/RepositoryCard";

const Repositories = () => {
  return (
    <View style={styles.container}>
      <CustomText title bold>
        Repositories
      </CustomText>

      <View>
        <RepositoryCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 6,
  },
});

export default Repositories;
