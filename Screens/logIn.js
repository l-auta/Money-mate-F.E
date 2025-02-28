import React, { useState } from 'react';
import { View,  Text, StyleSheet, ScrollView } from 'react-native';
import { TextInput , Icon, MD3Colors} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../Components/customBtn';


const LogIn = ({navigation}) => {
  const [username,  setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit =  () => {
    // e.preventDefault();
    // Basic validation for empty fields
    if (!username || !password) {
        alert('Please fill in both fields');
        return;
      }

      navigation.replace('Main');  // Navigate to the main screen after login
    
     // Make API request to backend to verify login credentials
    //  try {
    //     const response = await fetch('https://phase-4-project-3-o2io.onrender.com/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email, password }),
    //       credentials: 'include',
    //     });
  
    //     const data = await response.json();
        
    //     if (response.ok) {
    //       // Login was successful
    //       onLoginSuccess(); // Pass success message or trigger route change
    //       // fetchNotes()
    //     } else {
    //       // Show error message if login failed
    //       setError(data.message || 'Login failed. Please try again.');
    //     }
    //   } catch (error) {
    //     setError('An error occurred. Please try again later.');
    //   }
    // };
    
    
    console.log('Form Submitted with Username: ', username);
    console.log('Form Submitted with Password: ', password);
    
// clear inputs after submission
    setUsername('');
    setPassword('');
    
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View>
        <Text style={styles.welcomeText}>LOG IN</Text>
        <Text style={styles.subWelcomeText}>TO YOUR ACCOUNT</Text>
    </View>
    <View style={styles.form}>
      <Text style={styles.title}>User Name</Text>
        <TextInput
        onChangeText={setUsername}
        value={username}
        mode='flat'
        contentStyle={{
            paddingLeft: 10,  // Adds padding to the left of the input field
            backgroundColor: '#ffefd0',  // Changes the background color of the text input area
          }}
          underlineStyle={{
            // borderBottomWidth: 2,  // Adjusts the thickness of the underline
            borderBottomColor: '#6d2323',  // Changes the color of the underline
            borderRadius: 5,  // Adds border radius to the bottom of the input
          }}
          activeUnderlineColor='#6d2323'
          style={{
            // margin: 5,  // This applies to the outer wrapper of the input
            borderRadius: 50,  // Border radius for the outer container
            height: 50,  // Sets the height of the text input area
          }}
        />
      
      <Text style={styles.title}>Password</Text>
        <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        mode='flat'
        contentStyle={{
            paddingLeft: 10,  // Adds padding to the left of the input field
            backgroundColor: '#ffefd0',  // Changes the background color of the text input area
          }}
          underlineStyle={{
            // borderBottomWidth: 2,  // Adjusts the thickness of the underline
            borderBottomColor: '#6d2323',  // Changes the color of the underline
            borderRadius: 5,  // Adds border radius to the bottom of the input
          }}
          activeUnderlineColor='#6d2323'
          style={{
            // margin: 5,  // This applies to the outer wrapper of the input
            borderRadius: 50,  // Border radius for the outer container
            height: 50,  // Sets the height of the text input area
          }}
        />
        </View>
        <Button style={styles.button} title="Log-In" onPress={handleSubmit} />
      </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom : 10,
    paddingTop : 70,
  },
  form: {
    marginBottom: 90,
  },
  welcomeText: {
    fontSize: 55,
    color: '#6d2323',
    fontWeight : 'bold',
},
subWelcomeText: {
    fontSize: 35,
    marginBottom: 60,
    marginLeft : 30,
    color: '#a04747',
    fontWeight : 'bold',
},
  
  welcome: {
    fontSize: 35,
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingLeft: 30,
  },
  title: {
    marginBottom: 5,
    marginTop: 40,
    fontSize: 19,
    marginLeft : 0,
    fontWeight : 'bold',
  },
  
});

export default LogIn;
