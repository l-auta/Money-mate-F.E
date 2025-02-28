import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper'; // Import DataTable component from react-native-paper

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [transactionType, setTransactionType] = useState('all'); // 'all', 'sent', 'received'

  useEffect(() => {
    // Assuming fetchTransactions fetches the transactions from an API or local storage
    const fetchTransactions = async () => {
      // Mock data - replace with your fetch logic
      const fetchedTransactions = [
        { id: 1, amount: 500, type: 'received', date: '2023-02-28' },
        { id: 2, amount: 1000, type: 'sent', date: '2023-02-28' },
        { id: 3, amount: 300, type: 'received', date: '2023-02-25' },
        { id: 4, amount: 1500, type: 'sent', date: '2023-01-15' },
        // Add more transactions here...
      ];

  setTransactions(fetchedTransactions);
  setFilteredTransactions(fetchedTransactions);
};

fetchTransactions();
  }, []);

  // Filter the transactions based on the search date and transaction type
  const filterTransactions = () => {
    let filtered = [...transactions];

if (searchDate) {
  filtered = filtered.filter(transaction => transaction.date === searchDate);
}

if (transactionType !== 'all') {
  filtered = filtered.filter(transaction => transaction.type === transactionType);
}

setFilteredTransactions(filtered);
  };

  // Render each transaction row in the DataTable
  const renderTransactionRow = ({ item }) => (
    <DataTable.Row key={item.id}>
      <DataTable.Cell>{item.date}</DataTable.Cell>
      <DataTable.Cell>{item.type === 'sent' ? 'Sent' : 'Received'}</DataTable.Cell>
      <DataTable.Cell>{item.amount} KSh</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Search</Text>

  {/* Date Input Field */}
  <TextInput
    style={styles.input}
    placeholder="Search by date (YYYY-MM-DD)"
    value={searchDate}
    onChangeText={setSearchDate}
  />

  {/* Filter by Transaction Type */}
  <View style={styles.filterContainer}>
    <Button
      title="Show All"
      onPress={() => setTransactionType('all')}
    />
    <Button
      title="Sent"
      onPress={() => setTransactionType('sent')}
    />
    <Button
      title="Received"
      onPress={() => setTransactionType('received')}
    />
  </View>

  {/* Filter Button */}
  <Button title="Filter Transactions" onPress={filterTransactions} />

  <DataTable style={styles.table}>
    <DataTable.Header>
      <DataTable.Title>Date</DataTable.Title>
      <DataTable.Title>Type</DataTable.Title>
      <DataTable.Title>Amount</DataTable.Title>
    </DataTable.Header>

    <FlatList
      data={filteredTransactions}
      renderItem={renderTransactionRow}
      keyExtractor={(item) => item.id.toString()}
    />
  </DataTable>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  table: {
    marginTop: 20,
  },
});

export default TransactionList;