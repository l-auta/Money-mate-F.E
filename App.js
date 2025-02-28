import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/welcome'
import SignUp from './Screens/signUp'
import LogIn from './Screens/logIn';

export default function App() {
  return (
      <View style={styles.container}>
      {/* <Welcome /> */}
      <LogIn />
      {/* <SignUp /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef3dd',
  },
});
