import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="p-10 bg-blue-200">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}