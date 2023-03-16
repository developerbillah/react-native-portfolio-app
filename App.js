import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_500Medium,
} from '@expo-google-fonts/plus-jakarta-sans';
import { useFonts } from '@expo-google-fonts/plus-jakarta-sans/useFonts';
import PortfolioSingle from './app/screens/PortfolioSingle';


export default function App() {
  const [fontsLoaded] = useFonts({
    heading: PlusJakartaSans_700Bold,
    body: PlusJakartaSans_500Medium,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator/>;
  }
  return (
    <View style={styles.container}>
      <PortfolioSingle/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
