import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

// Simulate receiving new transactions
const TransactionCards = () => {
  // State to track the total amounts for deposits and transfers
  const [depositTotal, setDepositTotal] = useState(0);
  const [transferTotal, setTransferTotal] = useState(0);

  // Simulate receiving a new transaction
  const receiveTransaction = (transaction) => {
    if (transaction.type === 'deposit') {
      setDepositTotal(prevAmount => prevAmount + transaction.amount);
    } else if (transaction.type === 'transfer') {
      setTransferTotal(prevAmount => prevAmount + transaction.amount);
    }
  };

  // Example to simulate receiving new deposits and transfers
  useEffect(() => {
    // Simulate receiving a deposit after 3 seconds
    setTimeout(() => {
      const newTransaction = { type: 'deposit', amount: 10 };  // Simulated deposit
      receiveTransaction(newTransaction);
    }, 3000); // 3 seconds delay for deposit

    // Simulate receiving a transfer after 6 seconds
    setTimeout(() => {
      const newTransaction = { type: 'transfer', amount: 5 };  // Simulated transfer
      receiveTransaction(newTransaction);
    }, 6000); // 6 seconds delay for transfer
  }, []);

  return (
    <View style={styles.container}>
      {/* Container with flexDirection: 'row' to align cards side by side */}
      <View style={styles.cardsContainer}>
        <Card style={styles.card}>
          <Text style={{ fontSize: 18 }}>Deposits Today</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{depositTotal} Sh</Text>
        </Card>

        <Card style={styles.card}>
          <Text style={{ fontSize: 18 }}>Transfers Today</Text>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{transferTotal} Sh</Text>
        </Card>
      </View>

      {/* Optionally, you can have a button to manually simulate a transaction */}
      <Button title="Simulate Deposit" onPress={() => receiveTransaction({ type: 'deposit', amount: 10 })} />
      <Button title="Simulate Transfer" onPress={() => receiveTransaction({ type: 'transfer', amount: 5 })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardsContainer: {
    flexDirection: 'row',  // Align cards side by side
    justifyContent: 'space-between',  // Add space between the cards
    marginBottom: 20,
  },
  card: {
    flex: 1,  // Makes each card take up equal width
    marginRight: 10,  // Space between the two cards
    padding: 20,
  },
});

export default TransactionCards;
