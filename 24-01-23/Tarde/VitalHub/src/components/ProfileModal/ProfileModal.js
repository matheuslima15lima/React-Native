import { Modal } from "react-native"
import { ButtonModal } from "../Button/Style"
import { ModalContent, ModalText, PacientModal } from "../CancelationModal/Style"
import { Title, TitleBtn } from "../Title/Style"
import { ContentAccountN } from "../ContentAccount/Style"
import { LinkAccount } from "../Link/Style"
import { ImageQuery } from "./Style"
import { TextDefault, TextModalEmail, UserQuery } from "../Header/Style"
import { ViewRow, ViewRow2 } from "../AppointmentCard/Style"

export const ProfileModal = ({
    visible,
    setShowModalPro,
    BtnTop=30,
    BtnBottom= 30,
    BtnWidth= 100,
    navigation,
    ...rest
}) => {

    function Nando (){
        navigation.navigate("Prontuario")


        setShowModalPro(false)
    }

    return (
        <Modal {...rest}
            visible={visible}
            transparent={true}
            animation="fade"
        >

            <PacientModal>
                <ModalContent>

                    <ImageQuery
                        source={require('../../../src/assets/images/Pacient.png')}
                    />

                    <Title>
                        Nicole Sarga
                    </Title>

                    <ViewRow2>
                        <UserQuery>22 Anos</UserQuery>
                        <TextModalEmail>niccole.sarga@gmail.com</TextModalEmail>
                    </ViewRow2>

                    <ButtonModal
                            onPress={()=> Nando()}
                          BtnTop={BtnTop}
                          BtnBottom={BtnBottom}
                          BtnWidth={BtnWidth}
                    >
                        <TitleBtn>INSERIR PRONTUÁRIO</TitleBtn>
                    </ButtonModal>

                    <ContentAccountN>
                        <LinkAccount
                            onPress={() => setShowModalPro(false)}>Cancelar</LinkAccount>
                    </ContentAccountN>

                </ModalContent>
            </PacientModal>

        </Modal>
    )
}