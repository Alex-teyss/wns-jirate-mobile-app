import React from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import data from '../data/FakeDataCarousel';
import CustomSlider from '../components/carousel/CustomSlider';

import User from './User';

const HomeScreen = () => {
  const clearOnBoarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnboarding");
    } catch (err) {
      console.log("Error @clearOnBoarding: ", err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <User />
      <TouchableOpacity onPress={clearOnBoarding}>
        <Text>Clear Onboarding</Text>
      </TouchableOpacity>
      <CustomSlider data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
