import { ScrollView, StatusBar } from 'react-native';
import { useFonts, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';
import { Home } from './src/screens/Home';
import { useState } from 'react';

export default function App() {


  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
      <Header />

      <ScrollView>
        <Home />
      </ScrollView>

    </ContainerApp>
  );
}


