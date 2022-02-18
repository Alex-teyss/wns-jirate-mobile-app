import { StyleSheet, Text, View } from 'react-native';

import Chart from '../components/Chart/Chart';

export default function User() {
  return (
    <View>
      <Text style={styles.helloName}>Hello John,</Text>
      <Text style={styles.helloText}>Good Morning.</Text>
      <Chart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  helloName: {
    fontSize: 30,
    fontWeight: '300'
  },
  helloText: {
    fontSize: 28,
    color: '#838383',
    fontWeight: '300'
  }
});
