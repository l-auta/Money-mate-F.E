import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const TransactionChart = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Breakdown</Text>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{ data: data }],
        }}
        width={350}
        height={220}
        yAxisLabel="Ksh "
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#f7f7f7',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(233, 30, 99, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});

export default TransactionChart;
