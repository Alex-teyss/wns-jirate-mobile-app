import { StyleSheet } from 'react-native';
import { VictoryPie } from "victory-native";

export default function Chart() {
  return <VictoryPie style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: 10
  },
});