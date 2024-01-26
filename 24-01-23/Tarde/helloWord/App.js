import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Rest of the import statements
import { useFonts } from 'expo-font';

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     'jetBrainsMono': require( './src/assets/fonts/JetBrainsMono-Italic-VariableFont_wght.ttf'),
//   });
// }


// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Poppins_100Thin,
//   Poppins_100Thin_Italic,
//   Poppins_200ExtraLight,

// } from '@expo-google-fonts/poppins';



export default function App() {
  return (

    // let [fontsLoaded, fontError] = useFonts({
    //   Inter_900Black,
    // });
  
    // if (!fontsLoaded && !fontError) {
    //   return null;
    // }
    

    <View style={styles.container}>
 
      <Image 
        style ={styles.image}
      source={require('./src/assets/images/Sample_User_Icon.png')}
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
    borderWidth:2,
    padding: 10,
    marginTop: 10,
    color:'#14CECE',
    backgroundColor: '#fff'
  },
  image:{
    marginTop: 10,
    marginBottom:50,
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
