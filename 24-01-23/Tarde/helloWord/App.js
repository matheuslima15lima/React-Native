import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (

    

    <View style={styles.container}>
 
      <Image 
        style ={styles.image}
      source={require('./src/assets/images/Logo User.png')}
      />
      <TextInput
        style={styles.input}
        defaultValue='Insira seu Email'
      />
      <TextInput
        style={styles.input}
        defaultValue='Insira sua senha'
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21CDD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'red'
  },

  input :{
    width: '90%',
    height: 40,
    borderWidth:1,
    padding: 10,
    marginTop: 10,
    color:'#14CECE',
    backgroundColor: '#fff'
  },
  image:{
    height:200 ,
    width: 200
  },
  btn:{
    width:'90%',
    height:40,
    borderColor:'black',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1A8C7E'
  },
  textButton:{
    color: 'white',
    textTransform:'capitalize',
    fontWeight: "500",
    fontSize:18
    
  }
});
