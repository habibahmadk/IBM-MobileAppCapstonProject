import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorageScreen = () => {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  // Save name to local storage
  const saveName = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      Alert.alert('Success', 'Name saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save the name.');
    }
  };

  // Retrieve name from local storage
  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        setStoredName(value);
      } else {
        setStoredName('No name found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve the name.');
    }
  };

  // Clear name from local storage
  const clearName = async () => {
    try {
      await AsyncStorage.removeItem('userName');
      setStoredName('');
      Alert.alert('Success', 'Name cleared successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to clear the name.');
    }
  };

  useEffect(() => {
    // Fetch stored name on component mount
    getName();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Storage Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Button title="Save Name" onPress={saveName} />

      <View style={styles.spacer} />

      <Text style={styles.storedName}>Stored Name: {storedName}</Text>

      <View style={styles.buttons}>
        <Button title="Retrieve Name" onPress={getName} />
        <View style={styles.spacerSmall} />
        <Button title="Clear Name" onPress={clearName} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  spacer: {
    marginVertical: 10,
  },
  spacerSmall: {
    width: 10,
  },
  storedName: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LocalStorageScreen;
