import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import User from './screens/User';

export default function App() {
  return (
    <View style={styles.container}>
      <User />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.80,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
