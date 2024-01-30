import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Container2 } from './src/components/Container/Container';
import { Title, TitleBtnIncrement } from './src/components/Title/Title';
import { BtnDecrement, BtnIncrement } from './src/components/Bottom/Btn';
import {useFonts,OpenSans_300Light_Italic} from '@expo-google-fonts/open-sans'

export default function App() {
  
  //Hook state
  const [count, setCount] = useState(0);

  //função para incremento
  const increment = ()=>{
    setCount(count + 1)
  }

  //funcao decremento
  const decrement = ()=>{
    setCount(count -1)
  }

  //useEffect
  useEffect(()=>{
    console.warn(`Contador atualizado:${count}`)
  },[count])

  let [fontsLoaded, fontError] = useFonts({
    OpenSans_300Light_Italic
});

if (!fontsLoaded && !fontError) {
  return null;
}

  

  return (
    
    <Container >
      <Container2>
      <Title>Contador:{count}</Title>

      <BtnIncrement  onPress={increment}>
        <TitleBtnIncrement >Incrementar</TitleBtnIncrement>
      </BtnIncrement>

      <BtnDecrement  onPress={decrement}>
        <TitleBtnIncrement >decrementar</TitleBtnIncrement>
      </BtnDecrement>
      <StatusBar style="auto" />
      </Container2>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap:30,
   
    
//   },
//   container2: {
    
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap:10,
//     padding:100,
//    borderWidth:0,
//    backgroundColor:'#c1c1c1',
//    borderRadius:7
    
//   },
//   incrementar: {
//     borderWidth:1,
//     borderRadius:5,
//     backgroundColor: 'red',
    
    
//   },
//   text: {
//    fontSize:20
    
    
//   },
//   decrementar:{
//     borderwidth:1,
//     borderRadius:5,
//     backgroundColor: 'blue',
//   },
//   textd:{
//     fontSize:20,
//     color:'white'

//   },
//   texti:{
//     fontSize:20,
//     color:'white'

//   }
  
// });
