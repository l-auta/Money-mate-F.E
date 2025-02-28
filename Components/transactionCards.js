import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
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
    <View style={{ padding: 20 }}>
      <Card style={{ marginBottom: 20, padding: 20 }}>
        <Text style={{ fontSize: 18 }}>Deposits Today</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{depositTotal} Sh</Text>
      </Card>

      <Card style={{ marginBottom: 20, padding: 20 }}>
        <Text style={{ fontSize: 18 }}>Transfers Today</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{transferTotal} Sh</Text>
      </Card>

      {/* Optionally, you can have a button to manually simulate a transaction */}
      <Button title="Simulate Deposit" onPress={() => receiveTransaction({ type: 'deposit', amount: 10 })} />
      <Button title="Simulate Transfer" onPress={() => receiveTransaction({ type: 'transfer', amount: 5 })} />
    </View>
  );
};

export default TransactionCards;
