import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, Alert } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode((prevState) => !prevState);
  const toggleNotifications = () => setNotificationsEnabled((prevState) => !prevState);

  const resetSettings = () => {
    setIsDarkMode(false);
    setNotificationsEnabled(true);
    Alert.alert('Settings Reset', 'All settings have been reset to default.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Enable Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <Button title="Reset Settings" onPress={resetSettings} color="#FF6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
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
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
  },
  settingLabel: {
    fontSize: 18,
  },
});

export default SettingsScreen;
