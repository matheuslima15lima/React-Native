import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
const Stack = createNativeStackNavigator();
export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold
});

if (!fontsLoaded && !fontError) {
  return null;
}
  return (
    //Container - envolve toda a estrutura de navegação
      //Navigator- componente para navegação
        //Screen- tela
          //name: nome da tela
          //component componente que sera chamado
          //options(title): titulo da tela
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
            name="Navegacao"
            component={Navegacao}
            options={{title:"Navegação"}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login"}}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


