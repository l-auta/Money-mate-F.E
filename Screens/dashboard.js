import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TransactionCards from "../Components/transactionCards";
import TransactionList from "../Components/highTransactions";
import React from "react";

function Dashboard() {
    return (
        <SafeAreaView>
            <ScrollView>
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to your Dashboard</Text>
        </View>
        <View style={styles.dashContainer}>
            <View>
                <Text style={styles.transactions}>Your Transactions:</Text>
                < TransactionCards /> 
            </View>
            <View style={{ height: 10 }} />

            <View>
                <Text style={styles.transactions}>Your Transaction Breakdown:</Text>
                <Text style={styles.chartLine}>📊 Chart Placeholder</Text>

                 {/* render chart */}
            </View>
            <View style={{ height: 20 }} />
            <View>
                <Text style={styles.transactions}>Top Highest Transactions:</Text>
                <TransactionList />  
            </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles =  StyleSheet.create({
    container: {
        paddingTop : 30,
        // backgroundColor: 'lightblue',
    },
    dashContainer: {
        backgroundColor: '#f8f0e5',
        marginBottom: 20,
        borderRadius: 10,
        // flex: 1,
    },
    transactions: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    welcome: {
        fontSize: 35,
        marginBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6d2323',
        // paddingLeft: 30,
    },
    chartLine: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        // paddingLeft: 30,
    },
})

export default Dashboard;