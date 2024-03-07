import { Modal } from "react-native"
import { ButtonModal } from "../Button/Style"
import { ModalContent, ModalText, PacientModal } from "../CancelationModal/Style"
import { Title, TitleBtn } from "../Title/Style"
import { ContentAccountN } from "../ContentAccount/Style"
import { LinkAccount } from "../Link/Style"
import { ImageQuery } from "./Style"
import { TextDefault, TextModalEmail, UserQuery } from "../Header/Style"
import { ViewRow, ViewRow2 } from "../AppointmentCard/Style"


export const DoctorModal = ({
    navigation,
    visible,
    setShowModalDocPro,
    BtnTop=30,
    AlignView='center',
    Justify='center',
    marginR=23,
    BtnWidth= 100,
    BtnBottom=30,

    ...rest
})=>{
    return (
        <Modal {...rest}
        visible={visible}
        transparent={true}
        animation="fade"
    >

        <PacientModal>

            
            <ModalContent>

                <ImageQuery
                    source={require('../../../src/assets/images/claudio.png')}
                />

                <Title>
                        Dr. Claudio
                </Title>

                <ViewRow2
                    AlignView={AlignView}
                    Justify={Justify}
                >
                    <UserQuery
                        marginR={marginR}
                    >Cliníco geral</UserQuery>
                    <TextModalEmail>CRM-15286</TextModalEmail>
                </ViewRow2>

                <ButtonModal
                    onPress={()=> navigation.replace("Local da Consulta")}
                    BtnTop={BtnTop}
                    BtnWidth={BtnWidth}
                    BtnBottom={BtnBottom}
                >
                    <TitleBtn>VER LOCAL DA CONSULTA</TitleBtn>
                </ButtonModal>

                <ContentAccountN>
                    <LinkAccount
                        onPress={() => setShowModalDocPro(false)}>Cancelar</LinkAccount>
                </ContentAccountN>

            </ModalContent>
        </PacientModal>

    </Modal>

    )
}