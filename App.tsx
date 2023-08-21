import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/Views/Home/index'
export default function App() {
  return (
    <View>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

