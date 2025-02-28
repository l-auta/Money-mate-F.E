import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Welcome from './Screens/welcome'
import SignUp from './Screens/signUp'
import LogIn from './Screens/logIn';
// import BottomNav from './Screens/mainPage';
import MainPage from './Screens/mainPage';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
      {/* <Welcome /> */}
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <BottomNav /> */}
      <MainPage />
      </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef3dd',
  },
});
