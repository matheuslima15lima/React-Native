import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


//importar os recursos do expo notitfications
import * as Notifications from "expo-notifications"

//solicita permissoes de notificacao ao iniciar o app
Notifications.requestPermissionsAsync();


//define como as notificacoes devem ser tratadas quando recebidas
Notifications.setNotificationHandler({
  handleNotification: async()=>({
    //mostrar o alerta quando a notificacao for recebida
    shouldShowAlert: true,

    //reproduz som ao receber notificacao
    shouldPlaySound: true,

    //numero de notificacoes no icone do app
    shouldSetBadge:false,

  })
})

export default function App() {

  //funcao para lidar com chamada de notificacao
  const handleCallNotifications = async()=>{
    const {status} = await Notifications.getPermissionsAsync();

    if(status !== "granted"){
      alert("você não deixou as notificações ativas")
      return;
    }

    //agenda uma notificação
    await Notifications.scheduleNotificationAsync({
      content:{
        title:"Bem vindo ao SENAI!",
        body:"Noticação recebida",
        sound: "GTA-V-Marimba-Remix.mp3"
      },

      trigger:null
    })
  }
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.button}
            onPress={handleCallNotifications}
          >
            <Text style={styles.textColor}>Clique aqui!</Text>
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
  },
  button:{
    width:"80%",
    height:50,
    backgroundColor:"red",
    alignItems:'center',
    justifyContent:"center",
    borderRadius:10
  },
  textColor:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:24
  }
});
