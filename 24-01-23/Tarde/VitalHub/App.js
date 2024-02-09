import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';
import { useFonts, MontserratAlternates_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import{MontserratAlternates_500Medium} from '@expo-google-fonts/montserrat-alternates'
import { MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { RecoverPwd } from './src/screens/RecoverPwd/RecoverPwd';
import{Quicksand_600SemiBold} from '@expo-google-fonts/quicksand'
import{MontserratAlternates_800ExtraBold_Italic} from '@expo-google-fonts/montserrat-alternates'
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { ResetPwd } from './src/screens/ResetPwd/ResetPwd';
import { CreateAcnt } from './src/screens/CreateAcnt/CreateAcnt';
import { Profile } from './src/screens/Profile/Profile';
import { MedicalRecord } from './src/screens/MedRecord/MedRecord';
const Stack = createNativeStackNavigator();
export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_600SemiBold,
    MontserratAlternates_800ExtraBold_Italic



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
             <Stack.Screen
            name="Recuperar Senha"
            component={RecoverPwd}
            options={{title:"Recuperar Senha"}}
            />

            <Stack.Screen
                name="Verifique seu E-mail"
                component={VerifyEmail}
                options={{title:"Verifique seu E-mail"}}
            />

            <Stack.Screen
                name="Redefinir Senha"
                component={ResetPwd}
                options={{title:"Redefinir Senha"}}
            />
            <Stack.Screen
                name="Criar conta"
                component={CreateAcnt}
                options={{title:"Criar conta"}}
            />
            <Stack.Screen
                name="Pagina de perfil"
                component={Profile}
                options={{title:"Pagina de perfil"}}
            />
            <Stack.Screen
                name="Prontuario"
                component={MedicalRecord}
                options={{title:"Prontuario"}}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


