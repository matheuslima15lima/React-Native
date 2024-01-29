import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Contador:{count}</Text>

      <TouchableOpacity style={styles.incrementar} onPress={increment}>
        <Text style={styles.texti}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.decrementar} onPress={decrement}>
        <Text style={styles.textd}>decrementar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:30,
   
    
  },
  incrementar: {
    borderRadius:5,
    backgroundColor: 'red',
    
    
  },
  text: {
   fontSize:20
    
    
  },
  decrementar:{
    borderRadius:5,
    backgroundColor: 'blue',
  },
  textd:{
    fontSize:20,
    color:'white'

  },
  texti:{
    fontSize:20,
    color:'white'

  }
  
});
