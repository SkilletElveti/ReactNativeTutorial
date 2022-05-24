import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.headers}>
        <Text  >Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum Lorem ipsum</Text>
        <Text>Lorem ipsum Lorem ipsum</Text>
        <Text>Lorem ipsum Lorem ipsum</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers: {
    padding: 10,
    backgroundColor: 'cyan'
  },
  boldText: {
    fontStyle: 'normal'
  },
  body: {
    padding: 20,
    backgroundColor: 'yellow'
  }
});
