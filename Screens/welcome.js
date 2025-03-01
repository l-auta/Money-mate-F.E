import { View, Text, StyleSheet,ScrollView } from "react-native";
import Button from "../Components/customBtn";

function Welcome({ navigation }){
    return (
        <ScrollView>
            
            <View style={styles.container}>
                <View>
                  <Text style={styles.welcomeText}>WELCOME</Text>
                  <Text style={styles.subWelcomeText}>ON BOARD</Text>
                </View>
                <View style={styles.about}>
                    <Text style={styles.abtTxt}>Track your expenses effortlessly and take control of your finances. Our app helps you monitor your spending, categorize expenses, and provides insightful summaries to keep you on budget. Stay organized and make smarter financial decisions with ease!</Text>
                </View>
                <View style={{ height: 40 }} />
                <Button title="SIGN UP" onPress={() => navigation.navigate('SignUp')} />
                <View style={styles.loginLink}>
                    <Text style={styles.normalText}>Already have an account? {' '}
                        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                            Log-In here
                        </Text>
                    </Text>
                </View>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f5cca0'
    },
    welcomeText: {
        fontSize: 55,
        color: '#6d2323',
        fontWeight : 'bold',
        marginTop: 70,
    },
    subWelcomeText: {
        fontSize: 35,
        marginBottom: 20,
        marginLeft : 30,
        color: '#a04747',
        fontWeight : 'bold',
    },
    about: {
        padding: 40,
        lineHeight: 25,
    },
    abtTxt: {
        fontSize: 23,
        color: 'black',
        textAlign: 'justify',
    },
    loginLink: {
        marginTop: 10,
    },
    normalText: {
        marginTop: 10,
        color: 'black',
        fontSize: 19,
    },
    link: {
        fontWeight: 'bold',
        color: '#6d2323',
        fontSize: 19,
        textDecorationLine: 'underline',
    },
})

export default Welcome;