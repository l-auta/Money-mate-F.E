import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search transactions..."
      onChangeText={onSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
});

export default SearchBar;
