import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'; // Using react-native-paper Card component

const TransactionList = () => {
  const [dayTransactions, setDayTransactions] = useState([]);
  const [monthTransactions, setMonthTransactions] = useState([]);
  const [yearTransactions, setYearTransactions] = useState([]);

//   // Function to fetch transactions from backend
//   const fetchTransactions = async (endpoint) => {
//     try {
//       const response = await fetch(endpoint);
//       const data = await response.json();
//       return data; // Returns the transaction data from the backend
//     } catch (error) {
//       console.error('Error fetching transactions:', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     // Fetch data for day, month, and year
//     const fetchData = async () => {
//       const dayData = await fetchTransactions('http://your-backend-api/transactions/highest/day');
//       const monthData = await fetchTransactions('http://your-backend-api/transactions/highest/month');
//       const yearData = await fetchTransactions('http://your-backend-api/transactions/highest/year');

//       setDayTransactions(dayData);
//       setMonthTransactions(monthData);
//       setYearTransactions(yearData);
//     };

//     fetchData();
//   }, []);

  // Get highest transaction for each category (Day, Month, Year)
  const getHighestTransaction = (transactions) => {
    if (!transactions || transactions.length === 0) return null;
    return transactions.reduce((max, transaction) => {
      return (transaction.amount > max.amount) ? transaction : max;
    });
  };

  const dayHighest = getHighestTransaction(dayTransactions);
  const monthHighest = getHighestTransaction(monthTransactions);
  const yearHighest = getHighestTransaction(yearTransactions);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.header}>Highest Transactions Summary</Text>

        <View style={styles.transactionSection}>
          <Text style={styles.sectionHeader}>Today</Text>
          {dayHighest ? (
            <Text>Amount: {dayHighest.amount} Shillings</Text>
          ) : (
            <Text>No transactions for today</Text>
          )}
        </View>

        <View style={styles.transactionSection}>
          <Text style={styles.sectionHeader}>This Month</Text>
          {monthHighest ? (
            <Text>Amount: {monthHighest.amount} Shillings</Text>
          ) : (
            <Text>No transactions this month</Text>
          )}
        </View>

        <View style={styles.transactionSection}>
          <Text style={styles.sectionHeader}>This Year</Text>
          {yearHighest ? (
            <Text>Amount: {yearHighest.amount} Shillings</Text>
          ) : (
            <Text>No transactions this year</Text>
          )}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 16,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionSection: {
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TransactionList;
