
import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';

export default function App() {


  // Carregando fonte externa
  const [fontCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  // Ocutar aplicação enquanto a fonte nao for carregada
  if(!fontCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta/>
    </SafeAreaView>
  );
}
