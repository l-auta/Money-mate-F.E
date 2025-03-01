import { View, Text, StyleSheet,ScrollView ,Animated} from "react-native";
import React, {useEffect} from "react";
import Button from "../Components/customBtn";

function Welcome({ navigation }){
         // Fade-in animation for the text
  const fadeAnim = new Animated.Value(0); // Initial opacity set to 0

  useEffect(() => {
    // Animate the text fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Time for the text to fade in
      useNativeDriver: true,
    }).start();

    // Redirect to main app page after 2 seconds (for example)
    const timer = setTimeout(() => {
        navigation.replace('SignUp'); // Replace 'Main' with your main screen route name
    }, 2500); // Duration for splash screen to show

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.text}>Money Mate</Text>
        <Text style={styles.about}>Track your expenses effortlessly and take control of your finances.</Text>
      </Animated.View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f5cca0'
    },
    text: {
        fontSize: 55,
        color: '#6d2323',
        fontWeight : 'bold',
        marginTop: 50,
        textAlign: 'center',
    },
    about: {
        fontSize: 25,
        marginBottom: 20,
        // marginLeft : 30,
        color: '#a04747',
        // fontWeight : 'bold',
    },
})

export default Welcome;