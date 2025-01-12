import React from 'react';
import { SafeAreaView } from 'react-native';
import LocalStorageScreen from './LocalStorageScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LocalStorageScreen />
    </SafeAreaView>
  );
};

export default App;
