
import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'
import AppLoading from 'expo-app-loading';

export default function App() {


  // Carregando fonte externa
  const [fontCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  // Ocutar aplicação enquanto a fonte nao for carregada
  if(!fontCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
