import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/Person/Person';

//import das fonts
import { useFonts,Poppins_300Light } from '@expo-google-fonts/poppins';
import { CuteFont_400Regular } from '@expo-google-fonts/cute-font';
import {JetBrainsMono_100Thin} from '@expo-google-fonts/jetbrains-mono'
import { Jogos } from './src/Jogos/Jogos';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    CuteFont_400Regular,
    JetBrainsMono_100Thin
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    {id:"1", name:"Matheus", age:16},
    {id:"2", name:"Carlos", age:37},
    {id:"3", name:"Edu", age:38}
  ];

  const gamesList = [
    {id:"1", name:"Red dead Redemption 2", date:'2018'},
    {id:"2", name:"God of War", date:'2018'},
    {id:"3", name:"Gta 6", date:'2025'},

  ]
  return (
    <SafeAreaView>
      {/*Flat list*/}
      {/* <FlatList 
      data={peopleList}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> <Person name={item.name} age={item.age}/>}
      
      /> */}

      <FlatList
      data = {gamesList}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=> (
      <Jogos name={item.name} date={item.date}/>
      )}
      />
    
     
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

