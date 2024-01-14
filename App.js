import { StyleSheet, Text, View,Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi i am shihab!</Text>
      <Text style={styles.text}>Hi i am shihab!</Text>
      <Button title='Click'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'red',
    fontSize: 50,

  },
});
