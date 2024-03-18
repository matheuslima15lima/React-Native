import { Modal } from "react-native"
import { Title, TitleBtn } from "../Title/Style"
import { LinkAccount } from "../Link/Style"
import { ContentAccount, ContentAccountN } from "../ContentAccount/Style"
import { ModalContent, ModalText, PacientModal } from "./Style"
import { ButtonModal } from "../Button/Style"
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
export const CancelationModal = ({
    visible,
    setShowModalCancel,
    BtnTop = 30,
    BtnBottom = 30,
    BtnWidth = 100,
    navigation,
    ...rest


}) => {


      //funcao para lidar com chamada de notificacao
  const handleCallNotifications = async()=>{
    const {status} = await Notifications.getPermissionsAsync();
    setShowModalCancel(false)
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
        <Modal {...rest}
            visible={visible}
            transparent={true}
            animation="fade"
        >
            {/* Container */}
            <PacientModal>

                <ModalContent>
                    <Title>Cancelar consulta</Title>
                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>
                    <ButtonModal
                        BtnTop={BtnTop}
                        BtnBottom={BtnBottom}
                        BtnWidth={BtnWidth}
                        
                        onPress={handleCallNotifications}
                    >
                        <TitleBtn

                        >CONFIRMAR

                        </TitleBtn>
                    </ButtonModal>
                    <ContentAccountN>
                        <LinkAccount onPress={() => setShowModalCancel(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>


                </ModalContent>
            </PacientModal>
        </Modal>
    )
}