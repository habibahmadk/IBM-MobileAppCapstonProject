import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Button, Alert } from 'react-native';

const SettingsMenuScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
  };

  const resetSettings = () => {
    setIsDarkMode(false);
    setNotificationsEnabled(true);
    Alert.alert("Settings Reset", "All settings have been reset to default.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <Button title="Reset to Default" onPress={resetSettings} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsMenuScreen;
