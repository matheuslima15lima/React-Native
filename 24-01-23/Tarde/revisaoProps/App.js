import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/Person/Person';


export default function App() {
  return (
    <SafeAreaView>
      
    <Person name='Matheus' age={16}/>
    <Person name='Pedro' age={19}/>
    <Person name='Joao' age={36}/>
     
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

