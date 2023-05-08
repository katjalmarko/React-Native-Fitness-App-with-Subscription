import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView className="p-10 bg-blue-300">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    <NavigationContainer>
  );
}