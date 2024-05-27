import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

//importar o json comm os dados
import livros from './livros.json'

import { useState } from 'react';
export default function exemploSearch (){

  //state que representa o que for digitado na barra de pesquisa
  const[searchWord ,setSearchWord] = useState('');
  return(
    

    
  
      
    <ScrollView>

<TextInput style={styles.input}
        placeholder='pesquisar...'
        onChangeText={setSearchWord}
      />
      {livros.filter((val)=>{
        if (searchWord === ""){
          return null
        }
        //verifica se as palavras se parecem
        else if(val.first_name.toLowerCase().includes(searchWord.toLowerCase())){
          return val
        }
        //tras somente o primeiro nome de cada pessoa
      }).map((item,index)=>(
        <Text key={index}>{item.first_name}</Text>
     ))}
    </ScrollView>
    
    
    
  )
}
export const styles = StyleSheet.create({
  input:{
    marginTop:50,

  
  },
  titleContainer: {
    justifyContent:'center',
    marginTop:100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
