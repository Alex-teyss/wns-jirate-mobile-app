import React from 'react';
import { View } from 'react-native';
import data from './components/carousel/FakeDataCarousel';
import CustomSlider from './components/carousel/CustomSlider';

export default function App() {
  return (
    <View>
      <CustomSlider data={data} />
    </View>
  );
}